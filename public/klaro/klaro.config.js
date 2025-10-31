// Klaro Config – stabile Basis (eine Runtime, eine Config)
// Shows once (mustConsent), stores 180 days, links Datenschutz.
// Services minimal & mit try/catch, damit kein Callback das Modal "blockiert".
(function(){
  window.klaroConfig = {
    version: 2,
    elementID: 'klaro',
    cookieName: 'klaro',
    storageMethod: 'cookie',
    cookiePath: '/',
    cookieDomain: undefined, // automatisch aktuelle Domain
    cookieExpiresAfterDays: 180,
    default: false,
    mustConsent: true,
    acceptAll: true,
    hideDeclineAll: false,
    htmlTexts: true,
    privacyPolicy: '/datenschutz',
    translations: {
      de: {
        consentNotice: {
          description:
            'Wir nutzen Cookies/ähnliche Technologien für Komfortfunktionen (z. B. Google Maps). Du entscheidest, was geladen werden darf.',
          learnMore: 'Cookie-Einstellungen öffnen',
        },
        consentModal: {
          title: 'Cookie-Einstellungen',
          description:
            'Wähle aus, welche optionalen Dienste (z. B. Google Maps) wir verwenden dürfen. Details siehe Datenschutzerklärung.',
        },
        ok: 'Alle akzeptieren',
        acceptSelected: 'Auswahl speichern',
        acceptAll: 'Alle akzeptieren',
        decline: 'Alle ablehnen',
        purposes: {
          comfort: 'Komfort-Funktionen',
          analytics: 'Reichweitenmessung',
        },
      },
    },
    services: [
      {
        name: 'google-maps',
        title: 'Google Maps',
        purposes: ['comfort'],
        default: false,
        required: false,
        cookies: [],
        callback: function(consent){
          try {
            // Iframes mit data-klaro-maps="1" aktivieren/deaktivieren
            var iframes = document.querySelectorAll('iframe[data-klaro-maps="1"]');
            var root = document.documentElement;
            if (consent) {
              // Root-Klasse für React-Komponenten setzen
              if (root && !root.classList.contains('maps-allowed')) root.classList.add('maps-allowed');
              iframes.forEach(function(f){
                var src = f.getAttribute('data-src');
                if (src && !f.src) {
                  if (!f.hasAttribute('loading')) f.setAttribute('loading','lazy');
                  if (!f.hasAttribute('referrerpolicy')) f.setAttribute('referrerpolicy','strict-origin-when-cross-origin');
                  f.src = src;
                  f.removeAttribute('title'); f.removeAttribute('aria-hidden');
                  // Map sichtbar machen
                  if (f.hasAttribute('hidden')) f.removeAttribute('hidden');
                }
              });
            } else {
              // Root-Klasse entfernen, damit MapWithConsent wieder placeholder zeigt
              if (root && root.classList.contains('maps-allowed')) root.classList.remove('maps-allowed');
              iframes.forEach(function(f){
                var keep = f.getAttribute('data-src') || f.src;
                if (keep) {
                  f.setAttribute('data-src', keep);
                  f.removeAttribute('src');
                  f.setAttribute('title','Karte blockiert – Cookie-Einwilligung erforderlich');
                  f.setAttribute('aria-hidden','true');
                  // Map verstecken
                  if (!f.hasAttribute('hidden')) f.setAttribute('hidden','');
                }
              });
            }
            // Optional: Event für React, falls benötigt
            try { window.dispatchEvent(new CustomEvent('maps-consent-changed', { detail: { allowed: !!consent } })); } catch(e){}
          } catch(e) {}
        }
      },
      {
        name: 'google-analytics',
        title: 'Google Analytics',
        purposes: ['analytics'],
        default: false,
        required: false,
        cookies: [/^_ga/, /^_gid/, /^_gat/],
        callback: function(consent){
          try{
            window.dataLayer = window.dataLayer || [];
            window.gtag = window.gtag || function(){ window.dataLayer.push(arguments); };
            window.gtag('consent','default',{
              analytics_storage:'denied',
              ad_storage:'denied',
              ad_user_data:'denied',
              ad_personalization:'denied'
            });
            window.gtag('consent','update',{ analytics_storage: consent ? 'granted' : 'denied' });
          }catch(e){}
        }
      },
      {
        name: 'google-fonts',
        title: 'Google Fonts',
        purposes: ['comfort'],
        default: false,
        required: false,
        cookies: [],
        callback: function(consent){
          try{
            // Nur reaktivieren, wenn Markierungen vorhanden sind – sonst no-op.
            var tags = document.querySelectorAll('link[data-klaro-fonts="1"]');
            if (consent) {
              tags.forEach(function(l){ if(!l.href) l.href = l.getAttribute('data-href'); });
            } else {
              tags.forEach(function(l){ if(l.href){ l.setAttribute('data-href', l.href); l.removeAttribute('href'); } });
            }
          }catch(e){}
        }
      }
    ]
  };

  // Optional: Beim ersten DOM-Ready vorhandene Google-Maps-Iframes in den Klaro-Flow überführen
  function prepareMaps(){
    try{
      document.querySelectorAll('iframe').forEach(function(f){
        if (!f || f.tagName !== 'IFRAME') return;
        var cand = f.src || f.getAttribute('data-src') || '';
        if (/google\.(com|.[a-z]+)\/maps/i.test(cand)) {
          if (!f.hasAttribute('data-klaro-maps')) f.setAttribute('data-klaro-maps','1');
          if (!f.getAttribute('data-src') && f.src) { f.setAttribute('data-src', f.src); f.removeAttribute('src'); }
        }
      });
    }catch(e){}
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', prepareMaps, {once:true});
  } else {
    prepareMaps();
  }
})();
