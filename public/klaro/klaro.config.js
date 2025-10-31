// Blood Diamond Ink – Klaro Config (single source of truth)
// Zeigt den Banner genau EINMAL (Persistenz via Cookie), steuert GA/Maps strikt nach Consent.
// Keine zweite Klaro-Config im Projekt belassen.
/* global window */
(function(){
  // Doppel-Init verhindern
  if (window.__bd_klaro_configured) return;
  window.__bd_klaro_configured = true;

  window.klaroConfig = {
    version: 1,
    elementID: 'klaro',
    cookieName: 'klaro',             // Persistenz-Cookie
    storageMethod: 'cookie',
    cookieExpiresAfterDays: 180,     // 6 Monate
    cookieDomain: undefined,         // automatisch (aktueller Host)
    htmlTexts: true,
    mustConsent: true,               // Banner beim ersten Besuch erzwingen
    acceptAll: true,
    hideDeclineAll: false,
    // Hinweis-Text
    translations: {
      de: {
        consentNotice: {
          description:
            'Wir verwenden Cookies & ähnliche Technologien für Komfortfunktionen (z. B. Google Maps) und anonyme Statistiken. Du entscheidest, was geladen werden darf.',
          learnMore: 'Cookie-Einstellungen',
        },
        consentModal: {
          title: 'Cookie-Einstellungen',
          description:
            'Wähle aus, welche optionalen Dienste wir verwenden dürfen. Du kannst deine Auswahl jederzeit hier ändern.',
        },
        ok: 'Alle akzeptieren',
        acceptAll: 'Alle akzeptieren',
        acceptSelected: 'Auswahl speichern',
        decline: 'Alle ablehnen',
        purposes: {
          analytics: 'Besuchsstatistik (anonym)',
          comfort: 'Komfort-Funktionen',
        },
        service: { disabled: 'deaktiviert' },
      },
    },
    services: [
      // Google Analytics / GTM (nur wenn im Projekt tatsächlich genutzt)
      {
        name: 'google-analytics',
        title: 'Google Analytics',
        purposes: ['analytics'],
        required: false,
        default: false,
        cookies: [/^_ga/, /^_gid/, /^_gat/],
        callback: function(consent){
          try{
            window.dataLayer = window.dataLayer || [];
            window.gtag = window.gtag || function(){ window.dataLayer.push(arguments); };
            // Default hart auf "denied" – vor Consent darf nichts senden
            window.gtag('consent','default',{
              analytics_storage:'denied',
              ad_storage:'denied',
              ad_user_data:'denied',
              ad_personalization:'denied'
            });
            // Update nach Auswahl
            window.gtag('consent','update',{
              analytics_storage: consent ? 'granted' : 'denied'
            });
            window.dispatchEvent(new CustomEvent('consent:ga',{detail:!!consent}));
          }catch{}
        }
      },

      // Google Maps (lädt iFrames erst nach Einwilligung – Bootstrap erledigt den Rest)
      {
        name: 'google-maps',
        title: 'Google Maps',
        purposes: ['comfort'],
        required: false,
        default: false,
        cookies: [],
        callback: function(/*consent*/){
          try{
            // Leicht verzögert, damit DOM nach Modal stabil ist
            requestAnimationFrame(()=>setTimeout(()=>{
              window.dispatchEvent(new Event('klaro:consent')); // triggert Bootstrap-Listener
            },120));
          }catch{}
        }
      },

      // Google Fonts: nur aktivieren, falls du sie wirklich extern nutzt.
      // Wenn self-hosted: lasse den Service auf default:false (macht dann nichts).
      {
        name: 'google-fonts',
        title: 'Google Fonts',
        purposes: ['comfort'],
        required: false,
        default: false,
        cookies: [],
        callback: function(consent){
          try{
            if (!consent) return;
            // Bereits vorhandene, zuvor „stillgelegte" Link-Tags aktivieren
            document.querySelectorAll('link[data-klaro-fonts="1"]').forEach((l)=>{
              if (!l.href) l.href = l.getAttribute('data-href');
            });
          }catch{}
        }
      },
    ],
  };
})();

