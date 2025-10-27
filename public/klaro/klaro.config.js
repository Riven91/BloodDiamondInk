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
        description: 'Wir verwenden Dienste wie Google Fonts (Schriften) und Google Maps (Karten), die erst nach deiner Einwilligung geladen werden.',
        learnMore: 'Einstellungen'
      },
      consentModal: {
        title: 'Datenschutz-Einstellungen',
        description: 'Wähle aus, welche optionalen Dienste du erlauben möchtest. Du kannst deine Auswahl jederzeit über „Cookie-Einstellungen“ im Footer ändern.'
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
            existing.forEach(l => { 
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
        // Maps nur bei Einwilligung laden/aktivieren
        const iframes = Array.from(document.querySelectorAll('iframe[data-klaro-maps="1"]'));
        if (consent) {
          iframes.forEach(f => {
            if (!f.src) f.src = f.getAttribute('data-src');
            f.removeAttribute('title');
            f.removeAttribute('aria-hidden');
          });
        } else {
          // Bei Widerruf Platzhalter-Status sicherstellen
          iframes.forEach(f => {
            if (f.src) {
              f.setAttribute('data-src', f.src);
              f.removeAttribute('src');
            }
            f.setAttribute('title','Karte blockiert – Cookie-Einwilligung erforderlich');
            f.setAttribute('aria-hidden','true');
          });
        }
      }
    }
  ]
};

// Reapply Maps consent when navigating client-side (Next.js)
if (typeof window !== "undefined") {
  const applyMapsConsent = () => {
    try {
      if (window.klaro && window.klaro.getManager) {
        const manager = window.klaro.getManager();
        if (manager && manager.getConsent && manager.getConsent("google-maps")) {
          const iframes = Array.from(document.querySelectorAll('iframe[data-klaro-maps="1"]'));
          iframes.forEach(f => {
            if (!f.src) f.src = f.getAttribute("data-src");
            f.removeAttribute("title");
            f.removeAttribute("aria-hidden");
          });
        }
      }
    } catch {}
  };

  const installNavHooks = () => {
    // 1) Erstes Laden und Zurück/Vorwärts
    window.addEventListener("load", applyMapsConsent);
    window.addEventListener("popstate", applyMapsConsent);

    // 2) Monkey-Patch für forward navigation (Next.js Links)
    const H = window.history;
    if (!H.__patchedByKlaro) {
      const origPush = H.pushState;
      const origReplace = H.replaceState;

      H.pushState = function () {
        const ret = origPush.apply(this, arguments);
        // optional: eigenes Event – und direkt anwenden
        window.dispatchEvent(new Event("statechange"));
        applyMapsConsent();
        return ret;
      };

      H.replaceState = function () {
        const ret = origReplace.apply(this, arguments);
        window.dispatchEvent(new Event("statechange"));
        applyMapsConsent();
        return ret;
      };

      H.__patchedByKlaro = true;
    }

    // 3) Falls andere Libs auf "statechange" hören
    window.addEventListener("statechange", applyMapsConsent);

    // 4) Sofort einmal beim Init
    applyMapsConsent();
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", installNavHooks);
  } else {
    installNavHooks();
  }
}
