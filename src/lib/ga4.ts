export function loadGA4(id: string) {
  if (typeof window === "undefined") {
    return;
  }

  if (!id || (window as typeof window & { __ga4Loaded?: boolean }).__ga4Loaded) {
    return;
  }

  (window as typeof window & { __ga4Loaded?: boolean }).__ga4Loaded = true;
  // dataLayer init
  (window as typeof window & { dataLayer?: unknown[] }).dataLayer =
    (window as typeof window & { dataLayer?: unknown[] }).dataLayer || [];

  function gtag(...args: unknown[]) {
    (window as typeof window & { dataLayer: unknown[] }).dataLayer.push(args);
  }

  (window as typeof window & { gtag?: (...args: unknown[]) => void }).gtag = gtag;
  gtag("js", new Date());
  gtag("config", id, { anonymize_ip: true });

  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`;
  document.head.appendChild(s);
}

export function whenIdle(cb: () => void) {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return;
  }

  const start = () => {
    const run = () => window.setTimeout(cb, 1);

    if ("requestIdleCallback" in window) {
      (window as typeof window & {
        requestIdleCallback?: (callback: () => void, options?: { timeout: number }) => void;
      }).requestIdleCallback?.(run, { timeout: 1500 });
    } else {
      run();
    }
  };

  if (document.visibilityState === "visible") {
    start();
    return;
  }

  document.addEventListener(
    "visibilitychange",
    () => {
      if (document.visibilityState === "visible") {
        start();
      }
    },
    { once: true }
  );
}
