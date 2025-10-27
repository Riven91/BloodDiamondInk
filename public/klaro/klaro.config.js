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
        description: 'Wir verwenden Cookies und ähnliche Technologien für Komfortfunktionen (z. B. Google Maps, Google Fonts). Du entscheidest, was geladen werden darf.',
        learnMore: 'Cookie-Einstellungen öffnen'
      },
      consentModal: {
        title: 'Cookie-Einstellungen',
        description: 'Wähle aus, welche Cookies und optionalen Dienste (z. B. Google Maps, Google Fonts) wir verwenden dürfen. Du kannst deine Auswahl jederzeit hier ändern.'
      },
      ok: 'Alle akzeptieren',
      acceptSelected: 'Auswahl speichern',
      acceptAll: 'Alle akzeptieren',
      decline: 'Alle ablehnen',
      purposes: {
        comfort: 'Komfort-Funktionen'
      },
      service: {
        disabled: 'deaktiviert'
      }
    }
  },
  services: [
    {
      name: 'google-fonts',
      title: 'Google Fonts',
      purposes: ['comfort'],
      required: false,
      default: false,
      cookies: [],
      callback: (consent) => {
        // Fonts nur bei Einwilligung nachladen
        if (consent) {
          // vorhandene Linktags zu Google Fonts evtl. reaktivieren oder neu anlegen
          const existing = Array.from(document.querySelectorAll('link[data-klaro-fonts="1"]'));
          if (existing.length) {
            existing.forEach((l) => {
              if (!l.href) l.href = l.getAttribute('data-href');
            });
          } else {
            // Falls Codex keine vorher markierten Tags findet, einmalig standardmäßig laden:
            // (Nur anlegen, wenn es vorher Google Fonts im Projekt gab. Ansonsten nichts tun.)
            const tags = document.querySelectorAll('link[href*="fonts.googleapis.com"], link[href*="fonts.gstatic.com"]');
            if (tags.length === 0) {
              // nichts tun – Projekt hat evtl. self-hosted Fonts
            }
          }
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
        const run = () => __klaroApplyAllMaps();
        requestAnimationFrame(() => setTimeout(run, 120));
      }
    }
  ]
};

if (typeof window !== 'undefined') {
  const __klaroInitMaps = () => {
    __klaroPrepareAllMaps();
    requestAnimationFrame(() => setTimeout(__klaroApplyAllMaps, 120));
  };
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', __klaroInitMaps, { once: true });
  } else {
    __klaroInitMaps();
  }
}
