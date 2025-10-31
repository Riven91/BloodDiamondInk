export const klaroConfigScript = String.raw`
window.klaroConfig = {
  // Version 2: einmalig neu gefragt, danach 180 Tage Ruhe
  version: 2,
  elementID: 'klaro',
  cookieName: 'klaro',
  htmlTexts: true,
  default: false, // standardmäßig alles aus
  mustConsent: true, // Banner MUSS erscheinen bevor etwas geladen wird
  storageMethod: 'cookie',
  // Domain/Path: host-spezifisch, überall gültig
  cookieDomain: undefined,
  cookiePath: '/',
  cookieExpiresAfterDays: 180,
  // Link zur Datenschutzerklärung im Modal/Kopf
  privacyPolicy: '/datenschutz',
  styling: { theme: ['light', 'bottom'] },
  lang: 'de',
  // Hinweis-Banner aktivieren und Einwilligung erzwingen
  noticeEnabled: true,
  // Consent Mode v2: wir initialisieren GTM/GA erst nach Zustimmung
  translations: {
    de: {
      consentNotice: {
        description:
          'Wir verwenden Cookies und ähnliche Technologien für Komfortfunktionen (z. B. Google Maps, Google Fonts). Du entscheidest, was geladen werden darf.',
        learnMore: 'Cookie-Einstellungen öffnen',
      },
      consentModal: {
        title: 'Datenschutzeinstellungen',
        description:
          'Wähle aus, welche Cookies und optionalen Dienste (z. B. Google Maps, Google Fonts) wir verwenden dürfen. Du kannst deine Auswahl jederzeit in der Datenschutzerklärung anpassen.',
      },
      purposes: {
        analytics: 'Reichweitenmessung (Analytics)',
        maps: 'Kartenanzeige (Google Maps)',
        functional: 'Funktional & Infrastruktur',
      },
      ok: 'Alle akzeptieren',
      acceptAll: 'Alle akzeptieren',
      acceptSelected: 'Auswahl speichern',
      decline: 'Alle ablehnen',
    },
  },
  acceptAll: true,
  hideDeclineAll: false,
  services: [
    // --- Analytics / Marketing ---
    {
      name: 'google-tag-manager',
      title: 'Google Tag Manager',
      purposes: ['analytics'],
      required: false,
      cookies: [
        // GTM/GA4 setzen idR nur bei aktiven Tags/Features Cookies – Liste bleibt schlank
        /^_ga(_.*)?/,
        /^_gid$/,
        /^_gcl_au$/,
      ],
      callback: function (consent, service) {
        // GTM & GA nur nach Zustimmung initialisieren
        if (consent) {
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({ event: 'klaro_consent_granted' });
        } else {
          // Consent Mode v2 – alles auf denied
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            event: 'klaro_consent_denied',
            analytics_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
            ad_storage: 'denied',
          });
        }
      },
    },
    {
      name: 'google-analytics',
      title: 'Google Analytics 4',
      purposes: ['analytics'],
      required: false,
      // Lädt effektiv über GTM – wir deklarieren es nur sichtbar
      contextualConsentOnly: true,
    },

    // --- Maps / Externe Medien ---
    {
      name: 'google-maps',
      title: 'Google Maps',
      purposes: ['maps'],
      required: false,
      callback: function (consent, service) {
        // App-seitig: nur wenn consent === true, Maps-iframe einblenden
        // (z.B. über data-Attribute/Observer oder CSS-Klasse 'maps-allowed')
        document.documentElement.classList.toggle('maps-allowed', !!consent);
      },
    },

    // --- Funktional / Infrastruktur (ohne Block) ---
    {
      name: 'google-fonts',
      title: 'Google Fonts (lokal / funktional)',
      purposes: ['functional'],
      required: true, // funktional → kein Opt-In, nur Transparenz
      optOut: false,
      onlyOnce: true,
    },
    {
      name: 'cloudflare-hosting',
      title: 'Cloudflare (Hosting/CDN)',
      purposes: ['functional'],
      required: true,
      optOut: false,
      onlyOnce: true,
    },

    // Optional später:
    // {
    //   name: 'recaptcha',
    //   title: 'reCAPTCHA (Spam-Schutz)',
    //   purposes: ['functional'],
    //   required: false,
    // },
  ],
};
`;
