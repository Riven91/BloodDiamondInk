"use client";

import { useCallback, useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";

import { loadGA4, whenIdle } from "../src/lib/ga4";

const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
const isGtmEnabled = process.env.NEXT_PUBLIC_ENABLE_GTM === "true";
const ga4Id = process.env.NEXT_PUBLIC_GA4_ID;
const isGa4Enabled = process.env.NEXT_PUBLIC_ENABLE_GA4 === "true";

type GtmWindow = typeof window & {
  dataLayer?: Array<unknown> & { push: (...args: unknown[]) => number };
  gtag?: (...args: unknown[]) => void;
  google_tag_manager?: Record<string, unknown>;
  klaro?: {
    getManager?: () => {
      getConsent?: (service: string) => boolean | undefined;
    } | null;
  };
};

export function GtmConsentLoader() {
  const shouldWarnGtm =
    process.env.NODE_ENV !== "production" &&
    isGtmEnabled &&
    !gtmId &&
    typeof window !== "undefined";

  if (shouldWarnGtm) {
    console.warn("GTM enabled, but NEXT_PUBLIC_GTM_ID is missing");
  }

  const consentGrantedRef = useRef(false);
  const gtmLoadedRef = useRef(false);
  const gtmLoadOnceRef = useRef(false);
  const gaLoadedRef = useRef(false);
  const ga4IdRef = useRef(ga4Id);
  const pageViewTimerRef = useRef<number | null>(null);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const hasAnalyticsTargets = (isGtmEnabled && !!gtmId) || (isGa4Enabled && !!ga4IdRef.current);

  const schedulePageView = useCallback(() => {
    if (typeof window === "undefined") {
      return;
    }

    if (!consentGrantedRef.current) {
      return;
    }

    const requiresGtm = isGtmEnabled && !!gtmId;
    const requiresGa = isGa4Enabled && !!ga4IdRef.current && !requiresGtm;

    if ((requiresGtm && !gtmLoadedRef.current) || (requiresGa && !gaLoadedRef.current)) {
      return;
    }

    const win = window as GtmWindow;

    if (pageViewTimerRef.current) {
      window.clearTimeout(pageViewTimerRef.current);
      pageViewTimerRef.current = null;
    }

    const query = searchParams?.toString();
    const pagePath = query ? `${pathname}?${query}` : pathname || "/";

    pageViewTimerRef.current = window.setTimeout(() => {
      win.gtag?.("event", "page_view", {
        page_path: pagePath,
        page_location: window.location.href,
        page_title: document.title,
      });
    }, 200);
  }, [pathname, searchParams]);

  const schedulePageViewRef = useRef(schedulePageView);

  useEffect(() => {
    schedulePageViewRef.current = schedulePageView;
  }, [schedulePageView]);

  useEffect(() => {
    schedulePageView();
  }, [schedulePageView]);

  useEffect(() => {
    if (!hasAnalyticsTargets) {
      return;
    }

    if (typeof window === "undefined") {
      return;
    }

    const win = window as GtmWindow;

    const ensureGtag = () => {
      if (typeof win.gtag === "function") {
        return;
      }

      const layer = (win.dataLayer = win.dataLayer || []);

      win.gtag = function gtag(...args: unknown[]) {
        layer.push(args);
      };
    };

    ensureGtag();

    win.gtag(
      "consent",
      "default",
      {
        ad_storage: "denied",
        analytics_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
        wait_for_update: 500,
      }
    );

    const markGtmLoaded = () => {
      if (!gtmLoadedRef.current) {
        gtmLoadedRef.current = true;
      }

      schedulePageViewRef.current?.();
    };

    const loadGtmScript = (id: string) => {
      if (!isGtmEnabled || !id) {
        return;
      }

      if (gtmLoadedRef.current || (win.google_tag_manager && win.google_tag_manager[id])) {
        markGtmLoaded();
        return;
      }

      if (gtmLoadOnceRef.current) {
        return;
      }

      gtmLoadOnceRef.current = true;

      const existingScript = document.querySelector<HTMLScriptElement>(
        `script[src="https://www.googletagmanager.com/gtm.js?id=${id}"]`
      );

      if (existingScript) {
        markGtmLoaded();
        return;
      }

      const script = document.createElement("script");
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtm.js?id=${id}`;
      script.onload = markGtmLoaded;
      document.head.appendChild(script);
    };

    const loadGaScript = () => {
      const id = ga4IdRef.current;

      if (!isGa4Enabled || !id || gaLoadedRef.current) {
        return;
      }

      gaLoadedRef.current = true;
      whenIdle(() => loadGA4(id));
    };

    const applyConsent = (granted: boolean) => {
      consentGrantedRef.current = granted;

      ensureGtag();

      win.gtag?.("consent", "update", {
        analytics_storage: granted ? "granted" : "denied",
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
      });

      if (granted) {
        loadGaScript();
        loadGtmScript(gtmId ?? "");
        if (!isGtmEnabled && isGa4Enabled && ga4IdRef.current) {
          schedulePageViewRef.current?.();
        }
      }
    };

    const processDataLayerItem = (item: unknown) => {
      if (!item || typeof item !== "object" || Array.isArray(item)) {
        return;
      }

      const eventName = (item as { event?: unknown }).event;

      if (eventName === "klaro_consent_granted") {
        applyConsent(true);
      } else if (eventName === "klaro_consent_denied") {
        applyConsent(false);
      }
    };

    const layer = win.dataLayer as Array<unknown> & {
      push: (...args: unknown[]) => number;
    };

    const originalPush = layer.push.bind(layer);

    layer.forEach(processDataLayerItem);

    layer.push = function patchedPush(...args: unknown[]) {
      args.forEach(processDataLayerItem);
      return originalPush(...args);
    };

    const handleKlaroConsent = () => {
      try {
        const manager = win.klaro?.getManager?.();
        const granted = !!manager?.getConsent?.("google-tag-manager") || !!manager?.getConsent?.("analytics");
        applyConsent(granted);
      } catch (error) {
        // ignore manager access issues
      }
    };

    try {
      win.addEventListener("klaro-consent-changed", handleKlaroConsent);
    } catch (error) {
      // ignore when Klaro doesn't emit the event
    }

    handleKlaroConsent();

    return () => {
      layer.push = originalPush;

      try {
        win.removeEventListener("klaro-consent-changed", handleKlaroConsent);
      } catch (error) {
        // ignore
      }
    };
  }, [hasAnalyticsTargets]);
}
