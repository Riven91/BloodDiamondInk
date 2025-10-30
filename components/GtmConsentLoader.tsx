"use client";

import { useCallback, useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";

const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
const isGtmEnabled = process.env.NEXT_PUBLIC_ENABLE_GTM === "true";

type GtmWindow = typeof window & {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
  google_tag_manager?: Record<string, unknown>;
  klaro?: {
    getManager?: () => {
      on?: (eventName: string, handler: () => void) => void;
      off?: (eventName: string, handler: () => void) => void;
      getConsent?: (service: string) => boolean | undefined;
    } | null;
  };
};

export function GtmConsentLoader() {
  if (
    process.env.NODE_ENV !== "production" &&
    isGtmEnabled &&
    !gtmId &&
    typeof window !== "undefined"
  ) {
    console.warn("GTM enabled, but NEXT_PUBLIC_GTM_ID is missing");
  }

  const consentGrantedRef = useRef(false);
  const gtmLoadedRef = useRef(false);
  const gtmLoadOnceRef = useRef(false);
  const pageViewTimerRef = useRef<number | null>(null);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const schedulePageView = useCallback(() => {
    if (typeof window === "undefined") {
      return;
    }

    if (!consentGrantedRef.current || !gtmLoadedRef.current) {
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

  useEffect(() => {
    if (!isGtmEnabled || !gtmId) {
      return;
    }

    if (typeof window === "undefined") {
      return;
    }

    const win = window as GtmWindow;

    win.dataLayer = win.dataLayer || [];
    win.gtag =
      win.gtag ||
      function gtag(...args: unknown[]) {
        win.dataLayer?.push(args);
      };

    win.gtag("consent", "default", {
      ad_storage: "denied",
      analytics_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
      wait_for_update: 500,
    });

    const markGtmLoaded = () => {
      gtmLoadedRef.current = true;
      schedulePageView();
    };

    const loadGTM = (id: string) => {
      if (gtmLoadedRef.current || (win.google_tag_manager && win.google_tag_manager[id])) {
        gtmLoadedRef.current = true;
        schedulePageView();
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

    const updateConsent = (granted: boolean) => {
      consentGrantedRef.current = granted;

      win.gtag?.("consent", "update", {
        analytics_storage: granted ? "granted" : "denied",
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
      });

      if (granted) {
        loadGTM(gtmId);
        if (gtmLoadedRef.current) {
          schedulePageView();
        }
      }
    };

    const handleConsentChanged = () => {
      let analyticsOn = false;

      try {
        const manager = win.klaro?.getManager?.();
        analyticsOn = !!manager?.getConsent?.("analytics");
      } catch (error) {
        analyticsOn = false;
      }

      updateConsent(analyticsOn);
    };

    let cleanupManager: (() => void) | undefined;

    try {
      const manager = win.klaro?.getManager?.();
      if (manager?.on) {
        manager.on("consentChanged", handleConsentChanged);
        cleanupManager = () => {
          try {
            manager.off?.("consentChanged", handleConsentChanged);
          } catch (error) {
            /* noop */
          }
        };
      }

      const initialConsent = !!manager?.getConsent?.("analytics");
      if (initialConsent) {
        updateConsent(true);
      }
    } catch (error) {
      // Klaro manager not available yet or threw an error
    }

    const klaroEventListener = () => {
      handleConsentChanged();
    };

    try {
      win.addEventListener("klaro-consent-changed", klaroEventListener);
    } catch (error) {
      // ignore
    }

    return () => {
      cleanupManager?.();
      try {
        win.removeEventListener("klaro-consent-changed", klaroEventListener);
      } catch (error) {
        // ignore
      }
    };
  }, [schedulePageView]);

  useEffect(() => {
    if (!isGtmEnabled || !gtmId) {
      return;
    }

    schedulePageView();

    return () => {
      if (pageViewTimerRef.current) {
        window.clearTimeout(pageViewTimerRef.current);
        pageViewTimerRef.current = null;
      }
    };
  }, [pathname, searchParams]);

  if (!isGtmEnabled || !gtmId) {
    return null;
  }

  return null;
}
