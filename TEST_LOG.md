# Klaro Consent Tests

- [x] Erstbesuch im Inkognito-Browser zeigt das Klaro-Banner.
- [x] "Alle ablehnen" lässt Google Fonts deaktiviert und blockiert Google Maps (keine `src` auf den Iframes).
- [x] "Alle akzeptieren" reaktiviert Google Fonts (falls vorhanden) und lädt Google Maps mit dem hinterlegten `data-src`.
- [x] Footer-Link "Cookie-Einstellungen" öffnet den Klaro-Dialog jederzeit erneut; bestehende WhatsApp/Perspective/YouTube-Links bleiben unverändert.

## Error Fallback Tests

- [x] npm run lint (error fallback assets render change)
