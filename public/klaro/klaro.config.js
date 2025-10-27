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

// Reapply Maps consent AFTER SPA navigation renders new DOM (Next.js)
if (typeof window !== "undefined") {
  const consentGranted = () => {
    try {
      const m = window.klaro?.getManager?.();
      return !!m?.getConsent?.("google-maps");
    } catch {
      return false;
    }
  };

  const activateIframe = (f) => {
    if (!f || f.tagName !== "IFRAME") return;
    if (!f.matches('iframe[data-klaro-maps="1"]')) return;
    if (!consentGranted()) return;
    const src = f.getAttribute("data-src");
    if (src && !f.src) {
      f.src = src;
      f.removeAttribute("title");
      f.removeAttribute("aria-hidden");
    }
  };

  const applyMapsConsent = () => {
    if (!consentGranted()) return;
    document.querySelectorAll('iframe[data-klaro-maps="1"]').forEach(activateIframe);
  };

  // 1) MutationObserver: reagiert auf neu gerenderte Iframes
  const observer = new MutationObserver((recs) => {
    if (!consentGranted()) return;
    for (const rec of recs) {
      rec.addedNodes?.forEach((node) => {
        if (node.nodeType !== 1) return; // ELEMENT_NODE
        if (node.tagName === "IFRAME") activateIframe(node);
        // Falls Container eingefügt wurde, darunter suchen
        node.querySelectorAll?.('iframe[data-klaro-maps="1"]').forEach(activateIframe);
      });
    }
  });

  const start = () => {
    try {
      observer.observe(document.body, { childList: true, subtree: true });
    } catch {}
    // Erstes Anwenden nach initialem Render
    requestAnimationFrame(() => {
      applyMapsConsent();
      setTimeout(applyMapsConsent, 120);
    });

    const scheduleApply = () => {
      requestAnimationFrame(() => {
        applyMapsConsent();
        setTimeout(applyMapsConsent, 120);
      });
    };

    // 2) Browser-Zurück/Vorwärts
    window.addEventListener("popstate", scheduleApply);

    // 3) Monkey-Patch: forward navigation (Next.js Links)
    const H = window.history;
    if (!H.__patchedByKlaro) {
      const origPush = H.pushState;
      const origReplace = H.replaceState;
      const afterNav = () => scheduleApply();
      H.pushState = function () {
        const r = origPush.apply(this, arguments);
        afterNav();
        return r;
      };
      H.replaceState = function () {
        const r = origReplace.apply(this, arguments);
        afterNav();
        return r;
      };
      H.__patchedByKlaro = true;
    }

    // 4) Optional: Pages Router Events (schadet nicht, wenn nicht vorhanden)
    try {
      const ev = window?.next?.router?.events;
      ev?.on?.("routeChangeComplete", scheduleApply);
    } catch {}
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
}
