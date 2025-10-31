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

const __klaroMaps = (() => {
  const selector = 'iframe[data-klaro-maps="1"]';
  const blockedTitle = 'Karte blockiert – Cookie-Einwilligung erforderlich';
  let initialized = false;

  const readConsent = () => {
    try {
      if (typeof window.klaro?.getConsent === 'function') {
        return !!window.klaro.getConsent('google-maps');
      }
      return !!window.klaro?.state?.['google-maps'];
    } catch {
      return false;
    }
  };

  const forEachIframe = (handler) => {
    if (typeof document === 'undefined') return;
    try {
      document.querySelectorAll(selector).forEach((iframe) => {
        if (!iframe || iframe.tagName !== 'IFRAME') return;
        try {
          handler(iframe);
        } catch {}
      });
    } catch {}
  };

  const activateIframe = (iframe) => {
    try {
      const stored = iframe.getAttribute('data-src');
      if (stored && iframe.getAttribute('src') !== stored) {
        iframe.setAttribute('src', stored);
      }
      iframe.removeAttribute('title');
      iframe.removeAttribute('aria-hidden');
    } catch {}
  };

  const deactivateIframe = (iframe) => {
    try {
      const current = iframe.getAttribute('src');
      if (current) {
        iframe.setAttribute('data-src', current);
      }
      iframe.removeAttribute('src');
      iframe.setAttribute('title', blockedTitle);
      iframe.setAttribute('aria-hidden', 'true');
    } catch {}
  };

  const applyConsent = (consent) => {
    forEachIframe(consent ? activateIframe : deactivateIframe);
  };

  const handle = (consent) => {
    try {
      applyConsent(!!consent);
    } catch {}
  };

  const init = () => {
    if (initialized) return;
    initialized = true;
    handle(readConsent());
  };

  return { handle, init };
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
          __klaroMaps.handle(consent);
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
