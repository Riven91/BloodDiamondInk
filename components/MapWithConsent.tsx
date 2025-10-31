"use client";

import Link from "next/link";
import { ReactNode, useCallback, useEffect, useMemo, useState } from "react";

type MapWithConsentProps = {
  placeholder?: ReactNode;
  placeholderClassName?: string;
} & React.ComponentPropsWithoutRef<"iframe">;

const MAPS_ALLOWED_CLASS = "maps-allowed";

export function MapWithConsent({
  placeholder,
  placeholderClassName,
  className,
  loading,
  src,
  title,
  allowFullScreen,
  ...iframeProps
}: MapWithConsentProps) {
  const [mapsAllowed, setMapsAllowed] = useState(false);

  const evaluateConsent = useCallback(() => {
    if (typeof document === "undefined") {
      return false;
    }

    return document.documentElement.classList.contains(MAPS_ALLOWED_CLASS);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") {
      return;
    }

    const update = () => {
      setMapsAllowed(evaluateConsent());
    };

    update();

    const observer = new MutationObserver((records) => {
      for (const record of records) {
        if (record.type === "attributes" && record.attributeName === "class") {
          update();
          break;
        }
      }
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    const klaroEventListener = () => update();

    window.addEventListener("klaro-consent-changed", klaroEventListener);

    return () => {
      observer.disconnect();
      window.removeEventListener("klaro-consent-changed", klaroEventListener);
    };
  }, [evaluateConsent]);

  const openConsentModal = useCallback(() => {
    try {
      (window as typeof window & { klaro?: { show?: (configId?: string, service?: string) => void } }).klaro?.show?.(
        undefined,
        "google-maps"
      );
    } catch (error) {
      // ignore when Klaro is unavailable
    }
  }, []);

  const placeholderContent = useMemo(() => {
    if (placeholder) {
      return placeholder;
    }

    return (
      <div className="flex flex-col items-center gap-3 text-center text-sm">
        <p>
          Um die Karte zu sehen, aktiviere Google Maps in den
          <Link
            href="/datenschutz"
            className="ml-1 text-blooddiamond-accent underline-offset-4 hover:underline"
          >
            Datenschutzeinstellungen
          </Link>
          .
        </p>
        <button
          type="button"
          onClick={openConsentModal}
          className="rounded-full bg-blooddiamond-accent px-6 py-2 text-sm font-semibold text-blooddiamond-background shadow transition hover:bg-blooddiamond-accent/90 focus-visible:outline-none focus-visible:ring focus-visible:ring-blooddiamond-accent/60"
        >
          Karte laden
        </button>
      </div>
    );
  }, [openConsentModal, placeholder]);

  const placeholderClasses = useMemo(() => {
    const base = "flex min-h-[200px] w-full items-center justify-center bg-blooddiamond-background/80";
    if (!placeholderClassName) {
      return base;
    }

    return `${placeholderClassName} flex items-center justify-center bg-blooddiamond-background/80`;
  }, [placeholderClassName]);

  const wrapperClassName = className ? `${className} relative` : "relative";
  const iframeTitle = title ?? "Google Maps";
  const blockedTitle = "Karte blockiert – Cookie-Einwilligung erforderlich";
  const effectiveTitle = mapsAllowed ? iframeTitle : blockedTitle;
  const iframeLoading = loading ?? "lazy";

  return (
    <div className={wrapperClassName}>
      <iframe
        {...iframeProps}
        className={className}
        data-klaro-maps="1"
        data-src={src}
        src={mapsAllowed ? src : undefined}
        loading={iframeLoading}
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen={allowFullScreen}
        title={effectiveTitle}
        aria-hidden={mapsAllowed ? undefined : true}
        hidden={!mapsAllowed}
      />
      {!mapsAllowed ? <div className={placeholderClasses}>{placeholderContent}</div> : null}
    </div>
  );
}
