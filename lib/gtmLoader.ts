let gtmLoaded = false;

function waitForVisibility(): Promise<void> {
  if (typeof document === "undefined") {
    return Promise.resolve();
  }

  if (document.visibilityState === "visible") {
    return Promise.resolve();
  }

  return new Promise((resolve) => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        document.removeEventListener("visibilitychange", handleVisibilityChange);
        resolve();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange, {
      once: true,
    });
  });
}

function waitForIdle(): Promise<void> {
  if (typeof window === "undefined") {
    return Promise.resolve();
  }

  return new Promise((resolve) => {
    if ("requestIdleCallback" in window) {
      (window as typeof window & { requestIdleCallback(callback: () => void): void }).requestIdleCallback(
        () => resolve()
      );
      return;
    }

    setTimeout(resolve, 1500);
  });
}

export async function loadGTM(id: string) {
  if (typeof window === "undefined" || gtmLoaded) {
    return;
  }

  await waitForVisibility();
  await waitForIdle();

  if (gtmLoaded) {
    return;
  }

  const { dataLayer } = window as typeof window & { dataLayer?: unknown[] };
  const layer = dataLayer ?? [];

  (window as typeof window & { dataLayer: unknown[] }).dataLayer = layer;
  (window as typeof window & { gtag?: (...args: unknown[]) => void }).gtag = function gtag(...args) {
    layer.push(args);
  };
  layer.push(["js", new Date()]);

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${id}`;
  document.head.appendChild(script);

  gtmLoaded = true;
}
