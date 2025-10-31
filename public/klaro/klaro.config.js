const __klaroConsentGM = () => {
  try {
    if (typeof window.klaro?.getConsent === 'function') return !!window.klaro.getConsent('google-maps');
    return !!window.klaro?.state?.['google-maps'];
  } catch {
    return false;
  }
};

const __klaroActivateMapIframe = (f) => {
  if (!f || f.tagName !== 'IFRAME') return;
  if (!f.matches('iframe[data-klaro-maps="1"]')) return;
  const src = f.getAttribute('data-src');
  if (src && !f.src) {
    if (!f.hasAttribute('loading')) f.setAttribute('loading', 'lazy');
    if (!f.hasAttribute('referrerpolicy')) f.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');
    f.src = src;
    f.removeAttribute('title');
    f.removeAttribute('aria-hidden');
  }
};

const __klaroDeactivateMapIframe = (f) => {
  if (!f || f.tagName !== 'IFRAME') return;
  if (!f.matches('iframe[data-klaro-maps="1"]')) return;
  const keep = f.getAttribute('data-src') || f.src;
  if (keep) {
    f.setAttribute('data-src', keep);
    f.removeAttribute('src');
    f.setAttribute('title', 'Karte blockiert – Cookie-Einwilligung erforderlich');
    f.setAttribute('aria-hidden', 'true');
  }
};

const __klaroPrepareAllMaps = () => {
  document.querySelectorAll('iframe').forEach((f) => {
    if (!f || f.tagName !== 'IFRAME') return;
    const candidate = f.src || f.getAttribute('data-src') || '';
    if (/google\.(com|.[a-z]+)\/maps/i.test(candidate)) {
      if (!f.hasAttribute('data-klaro-maps')) f.setAttribute('data-klaro-maps', '1');
      if (!f.getAttribute('data-src') && f.src) {
        f.setAttribute('data-src', f.src);
        f.removeAttribute('src');
      }
    }
  });
};

const __klaroApplyAllMaps = () => {
  if (__klaroConsentGM()) {
    document.querySelectorAll('iframe[data-klaro-maps="1"]').forEach(__klaroActivateMapIframe);
  } else {
    document.querySelectorAll('iframe[data-klaro-maps="1"]').forEach(__klaroDeactivateMapIframe);
  }
};

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

/** Deferred-Anwendung nach Render, entprellt */
const __klaroApplyAllMapsDeferred = (() => {
  let pending = false;
  return () => {
    if (pending) return;
    pending = true;
    requestAnimationFrame(() => {
      setTimeout(() => {
        pending = false;
        try {
          __klaroPrepareAllMaps?.();
        } catch {}
        try {
          __klaroApplyAllMaps?.();
        } catch {}
      }, 100);
    });
  };
})();

/** MutationObserver: reagiert nur auf hinzugefügte Knoten */
const __klaroStartObserver = () => {
  try {
    if (window.__klaroMOStarted) return;
    window.__klaroMOStarted = true;

    const mo = new MutationObserver((recs) => {
      // Nur wenn Consent bereits vorliegt
      try {
        if (!__klaroConsentGM?.()) return;
      } catch {
        return;
      }
      let hit = false;
      for (const r of recs) {
        r.addedNodes?.forEach((n) => {
          if (n.nodeType !== 1) return;
          if (n.tagName === 'IFRAME' && n.matches?.('iframe[data-klaro-maps="1"]')) hit = true;
          n.querySelectorAll?.('iframe[data-klaro-maps="1"]').forEach(() => {
            hit = true;
          });
        });
      }
      if (hit) __klaroApplyAllMapsDeferred();
    });

    mo.observe(document.body, { childList: true, subtree: true });
  } catch {}
};

/** Navigation-Hooks für Next.js SPA: nach push/replace & popstate anwenden */
const __klaroInstallNavHooks = () => {
  try {
    if (window.__klaroNavPatched) return;
    window.__klaroNavPatched = true;

    // Back/Forward
    window.addEventListener('popstate', __klaroApplyAllMapsDeferred);

    // Forward-Navigation via history.* (Next.js Links)
    const H = window.history;
    const p = H.pushState.bind(H);
    const r = H.replaceState.bind(H);
    H.pushState = function () {
      const ret = p(...arguments);
      __klaroApplyAllMapsDeferred();
      return ret;
    };
    H.replaceState = function () {
      const ret = r(...arguments);
      __klaroApplyAllMapsDeferred();
      return ret;
    };

    // Optional: Pages Router Events, falls vorhanden
    try {
      const ev = window?.next?.router?.events;
      ev?.on?.('routeChangeComplete', __klaroApplyAllMapsDeferred);
    } catch {}
  } catch {}
};

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
        // Bereits vorhandene Iframes auf der aktuellen Seite in den Klaro-Flow überführen
        __klaroPrepareAllMaps();

        // Aktivierung/Deaktivierung leicht verzögert, damit DOM nach Consent-Modal stabil ist
        requestAnimationFrame(() => setTimeout(__klaroApplyAllMaps, 120));
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
  const __klaroBootstrapMaps = () => {
    // Initial einmal vorbereiten & anwenden
    try {
      __klaroPrepareAllMaps?.();
    } catch {}
    __klaroApplyAllMapsDeferred();

    // Observer + NavHooks starten
    __klaroStartObserver();
    __klaroInstallNavHooks();
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', __klaroBootstrapMaps, { once: true });
  } else {
    __klaroBootstrapMaps();
  }
}
