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

// --- Google Maps Auto Activation ---
const __klaroAutoMaps = (() => {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return { init() {}, onConsent() {} };
  }

  if (window.__klaroAutoMaps && typeof window.__klaroAutoMaps.onConsent === 'function') {
    return window.__klaroAutoMaps;
  }

  const selectors = {
    triggers: '[data-map-activate]',
    slots: '.gmaps-slot',
    legacy: 'iframe[data-klaro-maps="1"]'
  };

  const queue = (fn) => {
    try {
      if (typeof queueMicrotask === 'function') {
        queueMicrotask(fn);
      } else {
        Promise.resolve().then(fn);
      }
    } catch {}
  };

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

  let initialized = false;
  let observer = null;
  let scheduled = false;
  let consentState = null;
  let triggerSet = new WeakSet();
  const slotConfigCache = new WeakMap();

  const getSlotConfig = (slot) => {
    if (!(slot instanceof Element)) return null;
    if (slotConfigCache.has(slot)) return slotConfigCache.get(slot);

    let config = null;
    try {
      const script = slot.querySelector('script.gmaps-config[type="application/json"]') ||
        slot.querySelector('script.gmaps-config');
      if (script) {
        const text = script.textContent || script.innerText || '';
        if (text && text.trim()) {
          const parsed = JSON.parse(text);
          if (parsed && typeof parsed === 'object') {
            config = parsed;
          }
        }
      }
    } catch {}

    slotConfigCache.set(slot, config);
    return config;
  };

  const ensureSlot = (slot, consent) => {
    if (!(slot instanceof Element)) return;
    const existing = slot.querySelector('iframe[data-klaro-slot="1"]');
    if (!consent) {
      if (existing) {
        try {
          existing.remove();
        } catch {}
      }
      return;
    }

    const config = getSlotConfig(slot);
    if (!config || !config.url) return;

    if (existing) {
      if (!existing.src) {
        existing.src = config.url;
      }
      return;
    }

    try {
      const iframe = document.createElement('iframe');
      iframe.setAttribute('data-klaro-slot', '1');
      iframe.src = config.url;
      iframe.setAttribute('loading', config.loading || 'lazy');
      iframe.setAttribute('allowfullscreen', '');
      iframe.setAttribute('referrerpolicy', config.referrerpolicy || 'strict-origin-when-cross-origin');
      iframe.setAttribute('title', config.title || 'Google Maps');

      if (config.attributes && typeof config.attributes === 'object') {
        Object.keys(config.attributes).forEach((key) => {
          const value = config.attributes[key];
          if (value === null || value === undefined) return;
          try {
            iframe.setAttribute(key, String(value));
          } catch {}
        });
      }

      slot.appendChild(iframe);
    } catch {}
  };

  const ensureLegacyIframe = (iframe, consent) => {
    if (!(iframe instanceof Element)) return;
    if (!iframe.matches(selectors.legacy)) return;

    const attrSrc = iframe.getAttribute('src');
    const dataSrc = iframe.getAttribute('data-src');
    const propSrc = (() => {
      try {
        return iframe.src;
      } catch {
        return '';
      }
    })();
    const effectiveSrc = attrSrc && attrSrc.trim() ? attrSrc : propSrc;
    const hasEffectiveSrc = !!(effectiveSrc && effectiveSrc !== 'about:blank');

    if (consent) {
      if (!attrSrc || !attrSrc.trim()) {
        if (dataSrc && dataSrc !== iframe.getAttribute('src')) {
          iframe.setAttribute('src', dataSrc);
        }
      }
      if (!iframe.hasAttribute('loading')) iframe.setAttribute('loading', 'lazy');
      if (!iframe.hasAttribute('referrerpolicy')) {
        iframe.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');
      }
      iframe.removeAttribute('title');
      iframe.removeAttribute('aria-hidden');
      return;
    }

    if (hasEffectiveSrc && (!dataSrc || !dataSrc.trim())) {
      iframe.setAttribute('data-src', effectiveSrc);
    }

    try {
      iframe.removeAttribute('src');
    } catch {}

    iframe.setAttribute('title', 'Karte blockiert – bitte Google Maps erlauben.');
    iframe.setAttribute('aria-hidden', 'true');
  };

  const activateTriggers = () => {
    if (!consentState) return;
    try {
      document.querySelectorAll(selectors.triggers).forEach((el) => {
        if (!(el instanceof Element)) return;
        if (triggerSet.has(el)) return;
        triggerSet.add(el);
        queue(() => {
          try {
            el.click();
          } catch {}
        });
      });
    } catch {}
  };

  const applyToAll = (consent) => {
    try {
      if (consent) {
        activateTriggers();
      }
      document.querySelectorAll(selectors.slots).forEach((slot) => ensureSlot(slot, consent));
      document.querySelectorAll(selectors.legacy).forEach((iframe) => ensureLegacyIframe(iframe, consent));
    } catch {}
  };

  const runScheduled = () => {
    scheduled = false;
    const consent = typeof consentState === 'boolean' ? consentState : readConsent();
    if (typeof consentState !== 'boolean') {
      consentState = consent;
    }
    applyToAll(consent);
  };

  const schedule = () => {
    if (scheduled) return;
    scheduled = true;
    queue(runScheduled);
  };

  const watch = () => {
    if (observer) return;
    try {
      observer = new MutationObserver((mutations) => {
        let relevant = false;
        for (const m of mutations) {
          if (relevant) break;
          for (const node of m.addedNodes || []) {
            if (!node || node.nodeType !== 1) continue;
            const el = node;
            if (el.matches?.(selectors.triggers) || el.matches?.(selectors.slots) || el.matches?.(selectors.legacy)) {
              relevant = true;
              break;
            }
            if (el.querySelector?.(`${selectors.triggers},${selectors.slots},${selectors.legacy}`)) {
              relevant = true;
              break;
            }
          }
        }
        if (relevant) schedule();
      });
      observer.observe(document.documentElement, { childList: true, subtree: true });
    } catch {}
  };

  const init = () => {
    if (initialized) return;
    initialized = true;
    consentState = readConsent();
    applyToAll(consentState);
    watch();

    window.addEventListener(
      'pagehide',
      () => {
        try {
          observer?.disconnect();
        } catch {}
        observer = null;
        scheduled = false;
        initialized = false;
        triggerSet = new WeakSet();
      },
      { once: true }
    );
  };

  const setConsent = (value) => {
    const next = !!value;
    consentState = next;
    if (!next) {
      triggerSet = new WeakSet();
    }
    applyToAll(next);
  };

  const api = {
    init: () => {
      try {
        init();
      } catch {}
    },
    onConsent: (value) => {
      try {
        init();
        setConsent(value);
      } catch {}
    }
  };

  window.__klaroAutoMaps = api;
  return api;
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
          __klaroAutoMaps.onConsent(!!consent);
        } catch {}
      }
    }
  ]
};

if (typeof window !== 'undefined') {
  const __klaroInitMaps = () => {
    try {
      __klaroAutoMaps.init();
    } catch {}
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', __klaroInitMaps, { once: true });
  } else {
    __klaroInitMaps();
  }
}
