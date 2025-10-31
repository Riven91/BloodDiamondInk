const __klaroForEach = (selector, handler) => {
  try {
    document.querySelectorAll(selector).forEach((el) => {
      try {
        handler(el);
      } catch {}
    });
  } catch {}
};

const __klaroToggleNodeAttribute = (selector, attribute, dataAttribute, enable) => {
  __klaroForEach(selector, (el) => {
    const dataAttrName = dataAttribute.startsWith('data-') ? dataAttribute : `data-${dataAttribute}`;
    if (enable) {
      const stored = el.getAttribute(dataAttrName);
      if (stored && !el.getAttribute(attribute)) {
        el.setAttribute(attribute, stored);
      }
      return;
    }

    const current = el.getAttribute(attribute);
    if (current) {
      el.setAttribute(dataAttrName, current);
    }
    el.removeAttribute(attribute);
  });
};

const __klaroDispatchConsentEvent = (name, detail) => {
  try {
    window.dispatchEvent(new CustomEvent(name, { detail }));
  } catch {}
};

const __klaroPersistFlag = (key, value) => {
  try {
    if (value === null) {
      window.localStorage.removeItem(key);
    } else {
      window.localStorage.setItem(key, value);
    }
  } catch {}
};

// --- Google Maps Controller (stabil, einmalig) ---
const __klaroMaps = (() => {
  let observing = false;
  let mo = null;
  let scheduled = false;

  const readConsent = () => {
    try {
      if (typeof window.klaro?.getConsent === 'function') {
        return !!window.klaro.getConsent('google-maps');
      }
      // Fallback für ältere Klaro-Builds
      return !!window.klaro?.state?.['google-maps'];
    } catch {
      return false;
    }
  };

  const applyTo = (f, consent) => {
    if (!f || f.tagName !== 'IFRAME' || !f.matches('iframe[data-klaro-maps="1"]')) return;
    if (consent) {
      const src = f.getAttribute('data-src');
      if (src && !f.src) {
        if (!f.hasAttribute('loading')) f.setAttribute('loading', 'lazy');
        if (!f.hasAttribute('referrerpolicy')) f.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');
        f.src = src;
        f.removeAttribute('title');
        f.removeAttribute('aria-hidden');
      }
    } else {
      const keep = f.getAttribute('data-src') || f.src;
      if (keep) {
        f.setAttribute('data-src', keep);
      }
      if (f.src) f.removeAttribute('src');
      f.setAttribute('title', 'Karte blockiert – bitte Google Maps erlauben.');
      f.setAttribute('aria-hidden', 'true');
    }
  };

  const scan = () => {
    scheduled = false;
    const consent = readConsent();
    document.querySelectorAll('iframe[data-klaro-maps="1"]').forEach((f) => applyTo(f, consent));
  };

  const scheduleScan = () => {
    if (scheduled) return;
    scheduled = true;
    // Mikro-Task statt Timer: bündelt viele DOM-Änderungen in einen Lauf
    queueMicrotask(scan);
  };

  const handle = (consent) => {
    document.querySelectorAll('iframe[data-klaro-maps="1"]').forEach((f) => applyTo(f, consent));
  };

  const init = () => {
    if (observing) return; // Singleton
    observing = true;

    // 1) Initialzustand anwenden
    try {
      handle(readConsent());
    } catch {}

    // 2) DOM-Änderungen beobachten (nur hinzugefügte Knoten)
    try {
      mo = new MutationObserver((mutations) => {
        for (const m of mutations) {
          for (const n of m.addedNodes || []) {
            if (n.nodeType !== 1) continue; // kein Element
            // direktes Iframe?
            if (n.matches?.('iframe[data-klaro-maps="1"]')) {
              scheduleScan();
              continue;
            }
            // oder enthalten in neuem Container?
            if (n.querySelector?.('iframe[data-klaro-maps="1"]')) {
              scheduleScan();
              continue;
            }
          }
        }
      });
      mo.observe(document.documentElement, { childList: true, subtree: true });
    } catch {}

    // 3) Aufräumen beim Seitenwechsel
    window.addEventListener(
      'pagehide',
      () => {
        try {
          mo?.disconnect();
        } catch {}
        observing = false;
      },
      { once: true }
    );
  };

  return { init, handle, readConsent };
})();

window.klaroConfig = {
  version: 1,
  elementID: 'klaro',
  cookieName: 'klaro',
  htmlTexts: true,
  default: false, // standardmäßig alles aus
  mustConsent: false,
  acceptAll: true,
  hideDeclineAll: false,
  translations: {
    de: {
      consentNotice: {
        description: 'Wir verwenden Cookies und ähnliche Technologien für Komfort, Sicherheit und Analyse (z. B. Google Maps, Google Fonts, Google Analytics). Du entscheidest, was geladen werden darf.',
        learnMore: 'Cookie-Einstellungen öffnen'
      },
      consentModal: {
        title: 'Cookie-Einstellungen',
        description: 'Wähle aus, welche Cookies und optionalen Dienste (z. B. Google Analytics, Google Maps, reCAPTCHA) wir verwenden dürfen. Du kannst deine Auswahl jederzeit hier ändern.'
      },
      ok: 'Alle akzeptieren',
      acceptSelected: 'Auswahl speichern',
      acceptAll: 'Alle akzeptieren',
      decline: 'Alle ablehnen',
      purposes: {
        essential: 'Notwendig',
        analytics: 'Statistik',
        security: 'Sicherheit',
        comfort: 'Komfort-Funktionen'
      },
      service: {
        disabled: 'deaktiviert'
      }
    }
  },
  services: [
    {
      name: 'klaro-consent',
      title: 'Klaro Consent-Cookie',
      purposes: ['essential'],
      required: true,
      default: true,
      optOut: false,
      cookies: ['klaro'],
      callback: (consent) => {
        if (!consent) {
          __klaroPersistFlag('consent', 'denied');
        }
      }
    },
    {
      name: 'cloudflare',
      title: 'Cloudflare (technisch notwendig)',
      purposes: ['essential'],
      required: true,
      default: true,
      optOut: false,
      cookies: [/^__cf_bm/, /^__cfruid$/, /^cf_clearance$/]
    },
    {
      name: 'google-tag-manager',
      title: 'Google Tag Manager',
      purposes: ['analytics'],
      required: false,
      default: false,
      cookies: [/^_dc_gtm_/, /^gtm_debug$/],
      callback: (consent) => {
        if (consent) {
          __klaroDispatchConsentEvent('consent:gtm', true);
        } else {
          __klaroDispatchConsentEvent('consent:gtm', false);
        }
        __klaroDispatchConsentEvent('klaro-consent-changed', {
          service: 'google-tag-manager',
          consent: !!consent
        });
      }
    },
    {
      name: 'google-analytics',
      title: 'Google Analytics',
      purposes: ['analytics'],
      required: false,
      cookies: [/^_ga/, /^_gid/, /^_gat/],
      callback: function (consent, app) {
        if (typeof window !== 'undefined') {
          window.dataLayer = window.dataLayer || [];
          window.gtag =
            window.gtag ||
            function () {
              window.dataLayer.push(arguments);
            };

          window.gtag('consent', 'default', {
            analytics_storage: 'denied',
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied'
          });

          window.gtag('consent', 'update', {
            analytics_storage: consent ? 'granted' : 'denied'
          });

          window.dispatchEvent(new CustomEvent('consent:ga', { detail: !!consent }));
          __klaroDispatchConsentEvent('klaro-consent-changed', {
            service: 'google-analytics',
            consent: !!consent
          });
          __klaroPersistFlag('consent', consent ? 'granted' : 'denied');
        }
      }
    },
    {
      name: 'google-fonts',
      title: 'Google Fonts',
      purposes: ['comfort'],
      required: false,
      default: false,
      cookies: [],
      callback: (consent) => {
        // Fonts nur bei Einwilligung nachladen
        const tags = document.querySelectorAll('link[href*="fonts.googleapis.com"], link[href*="fonts.gstatic.com"]');
        tags.forEach((tag) => {
          if (!tag.hasAttribute('data-klaro-fonts')) {
            tag.setAttribute('data-klaro-fonts', '1');
            const href = tag.getAttribute('href');
            if (href) tag.setAttribute('data-href', href);
          }
        });

        if (consent) {
          // vorhandene Linktags zu Google Fonts evtl. reaktivieren oder neu anlegen
          const existing = Array.from(document.querySelectorAll('link[data-klaro-fonts="1"]'));
          if (existing.length) {
            existing.forEach((l) => {
              const stored = l.getAttribute('data-href');
              if (stored && !l.href) l.href = stored;
            });
          } else {
            requestAnimationFrame(() => {
              __klaroToggleNodeAttribute('link[data-klaro-fonts="1"]', 'href', 'data-href', true);
            });
          }
        } else {
          __klaroToggleNodeAttribute('link[data-klaro-fonts="1"]', 'href', 'data-href', false);
        }
      }
    },
    {
      name: 'google-maps',
      title: 'Google Maps',
      purposes: ['comfort'],
      required: false,
      default: false,
      cookies: [],
      callback: (consent) => {
        try {
          __klaroMaps.handle(!!consent);
        } catch {}
      }
    },
    {
      name: 'google-recaptcha',
      title: 'Google reCAPTCHA',
      purposes: ['security'],
      required: false,
      default: false,
      cookies: [/^_grecaptcha$/, /^rc::a$/, /^rc::b$/, /^rc::c$/],
      callback: (consent) => {
        if (consent) {
          __klaroToggleNodeAttribute('script[data-klaro-recaptcha="1"]', 'src', 'data-src', true);
          __klaroToggleNodeAttribute('iframe[data-klaro-recaptcha="1"]', 'src', 'data-src', true);
        } else {
          __klaroToggleNodeAttribute('script[data-klaro-recaptcha="1"]', 'src', 'data-src', false);
          __klaroToggleNodeAttribute('iframe[data-klaro-recaptcha="1"]', 'src', 'data-src', false);
        }
        __klaroDispatchConsentEvent('consent:recaptcha', !!consent);
      }
    }
    // {
    //   name: 'cloudflare-web-analytics',
    //   title: 'Cloudflare Web Analytics',
    //   purposes: ['analytics'],
    //   required: false,
    //   default: false,
    //   cookies: [],
    //   callback: (consent) => {
    //     if (consent) {
    //       __klaroToggleNodeAttribute('script[data-klaro-cfwa="1"]', 'src', 'data-src', true);
    //     } else {
    //       __klaroToggleNodeAttribute('script[data-klaro-cfwa="1"]', 'src', 'data-src', false);
    //     }
    //   }
    // }
  ]
};

if (typeof window !== 'undefined') {
  const __klaroInitMaps = () => {
    try {
      __klaroMaps.init();
    } catch {}
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', __klaroInitMaps, { once: true });
  } else {
    __klaroInitMaps();
  }
}
