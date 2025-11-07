import type { Metadata } from "next";
import { ORIGIN } from "../../config/site";

export const metadata: Metadata = {
  alternates: {
    canonical: `${ORIGIN}/datenschutz/boeblingen`,
  },
};

export default function DatenschutzBoeblingen() {
  return (
    <main className="w-full px-4 py-10 text-center">
      <h1 className="text-3xl font-bold text-green-600">Datenschutzerklärung</h1>
      <p className="mt-2 text-sm opacity-80">Stand: 17. Oktober 2025</p>

      <div className="mt-8 mx-auto max-w-3xl space-y-6">
        <ol className="space-y-6 list-none">
          <li>
            <p>
              <strong className="text-green-600">1. Einleitung</strong><br />
              Blood Diamond Tattoo Ink. verarbeitet personenbezogene Daten ausschließlich zur Terminorganisation, Beratung und Nachbetreuung von Tattoo-Dienstleistungen. Diese Erklärung informiert dich über Art, Umfang und Zweck der Verarbeitung sowie über deine Rechte nach der DSGVO.
            </p>
          </li>

          <li>
            <p>
              <strong className="text-green-600">2. Verantwortliche Stelle</strong><br />
              Verantwortlich im Sinne der DSGVO:<br />
              <strong>Blood Diamond Tattoo Ink. Böblingen</strong><br />
              Inhaber: Kevin Kaiser<br />
              Stuttgarter Str. 21 · 71083 Herrenberg (Böblingen)<br />
              E-Mail: <a href="mailto:boeblingen@blooddiamond-tattoo.de" className="text-blooddiamond-accent hover:underline focus-visible:underline">boeblingen@blooddiamond-tattoo.de</a><br />
              Telefon: 0162 4204789
            </p>
          </li>

          <li>
            <p>
              <strong className="text-green-600">3. Allgemeine Hinweise zur Datenverarbeitung</strong><br />
              Sofern in dieser Erklärung keine speziellere Rechtsgrundlage genannt wird, erfolgt die Verarbeitung personenbezogener Daten auf Grundlage von Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;a–f DSGVO.
            </p>
          </li>

          <li>
            <p>
              <strong className="text-green-600">4. Empfänger und Auftragsverarbeitung</strong><br />
              Wir setzen Auftragsverarbeiter mit AVV ein:<br />
              • Vercel Inc., 440 N Barranca Ave #4133, Covina CA 91723, USA (Hosting/CDN)<br />
              • Perspective Software GmbH, Köpenicker Str. 126, 10179 Berlin (Formularsystem)
            </p>
          </li>

          <li>
            <p>
              <strong className="text-green-600">5. Termin- und Beratungsanfragen</strong><br />
              Verarbeitung von Namen, Kontaktdaten, Motivangaben und ggf. Referenzbildern zur Prüfung der Anfrage und Terminvorschlägen (Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;b DSGVO).
            </p>
          </li>

          <li>
            <p>
              <strong className="text-green-600">6. Kontaktformulare / Perspective Software GmbH</strong><br />
              Unsere Online-Formulare werden über die Server der Perspective Software GmbH betrieben. Rechtsgrundlage: Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;b bzw. lit.&nbsp;f DSGVO. Infos:{" "}
              <a href="https://perspective.co/de/datenschutz/" target="_blank" rel="noreferrer" className="underline focus-visible:underline">https://perspective.co/de/datenschutz/</a>
            </p>
          </li>

          <li>
            <p>
              <strong className="text-green-600">7. Kommunikation über WhatsApp</strong><br />
              Kontakt über WhatsApp (Anbieter: WhatsApp Ireland Limited). Nachrichten sind Ende-zu-Ende-verschlüsselt. Rechtsgrundlage: Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;b DSGVO. Infos:{" "}
              <a href="https://www.whatsapp.com/legal/privacy-policy-eea" target="_blank" rel="noreferrer" className="underline focus-visible:underline">https://www.whatsapp.com/legal/privacy-policy-eea</a>
            </p>
          </li>

          <li>
            <p>
              <strong className="text-green-600">8. WhatsApp-Newsletter</strong><br />
              Versand von Neuigkeiten/Aktionen über WhatsApp auf Basis deiner Einwilligung (Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;a DSGVO i.&nbsp;V.&nbsp;m. §&nbsp;7 UWG). An-/Abmeldung über unsere Formulare (Perspective). Widerruf jederzeit möglich.
            </p>
          </li>

          <li>
            <p>
              <strong className="text-green-600">9. Foto- und Videodokumentation</strong><br />
              Nur mit Einwilligung (Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;a DSGVO). Widerruf bewirkt Löschung, soweit keine gesetzlichen Pflichten entgegenstehen.
            </p>
          </li>

          <li>
            <p>
              <strong className="text-green-600">10. Server-Logfiles / Hosting</strong><br />
              Automatische Erfassung technischer Zugriffsdaten zur Stabilität/Sicherheit (Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;f DSGVO). Infos:{" "}
              <a
                href="https://vercel.com/legal/privacy-policy"
                target="_blank"
                rel="noreferrer"
                className="underline focus-visible:underline"
              >
                https://vercel.com/legal/privacy-policy
              </a>
            </p>
          </li>

          <li>
            <p>
              <strong className="text-green-600">11. Cookies &amp; Local Storage</strong><br />
              Es werden nur technisch notwendige Cookies/Local-Storage-Einträge verwendet (keine Reichweitenanalyse/kein Tracking). Rechtsgrundlage: Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;f DSGVO.
            </p>
          </li>

          <li>
            <p>
              <strong className="text-green-600">12. Google Fonts</strong><br />
              Schriftarten („Google Fonts“) der Google Ireland Limited werden erst nach Einwilligung geladen; dabei wird die IP-Adresse an Google übermittelt. Rechtsgrundlage: Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;a DSGVO. Widerruf jederzeit über die Cookie-Einstellungen. Infos:{" "}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer" className="underline focus-visible:underline">https://policies.google.com/privacy</a>
            </p>
          </li>

          <li>
            <p>
              <strong className="text-green-600">13. Google Maps</strong><br />
              Einbindung von Google Maps (Google Ireland Limited). Beim Laden werden technische Informationen an Google übertragen. Nutzung nur nach Einwilligung (Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;a DSGVO). Infos:{" "}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer" className="underline focus-visible:underline">https://policies.google.com/privacy</a>
            </p>
          </li>

          <li>
            <p>
              <strong className="text-green-600">14. Zahlungs- und Vertragsabwicklung</strong><br />
              Verarbeitung von Rechnungs-/Zahlungsdaten zur Vertragserfüllung und zu steuerrechtlichen Pflichten (Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;b und c DSGVO).
            </p>
          </li>

          <li>
            <p>
              <strong className="text-green-600">15. Dauer der Datenspeicherung</strong><br />
              Anfragedaten: Löschung nach 6 Monaten ohne Vertragsschluss. Vertrags-/Abrechnungsdaten: Aufbewahrung 10 Jahre.
            </p>
          </li>

          <li>
            <p>
              <strong className="text-green-600">16. Widerruf und Widerspruch</strong><br />
              Widerruf von Einwilligungen jederzeit (Art.&nbsp;7 Abs.&nbsp;3 DSGVO). Widerspruchsrecht nach Art.&nbsp;21 DSGVO.
            </p>
          </li>

          <li>
            <p>
              <strong className="text-green-600">17. SSL- / TLS-Verschlüsselung</strong><br />
              Diese Website nutzt SSL/TLS zur sicheren Übertragung. Erkennbar an „https://“ und Schlosssymbol.
            </p>
          </li>

          <li>
            <p>
              <strong className="text-green-600">18. Rechte und Beschwerde</strong><br />
              Rechte: Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit (Art.&nbsp;15–20 DSGVO). Beschwerde: LfDI Baden-Württemberg, Königstraße 10a, 70173 Stuttgart.
            </p>
          </li>

          <li>
            <p>
              <strong className="text-green-600">19. Datenschutzkontakt</strong><br />
              <a className="underline focus-visible:underline" href="mailto:boeblingen@blooddiamond-tattoo.de">boeblingen@blooddiamond-tattoo.de</a> – Antwort i.&nbsp;d.&nbsp;R. innerhalb von 14 Tagen.
            </p>
          </li>
        </ol>

        <p className="text-xs opacity-70">© 2025 Blood Diamond Tattoo Ink. – Alle Rechte vorbehalten.</p>
      </div>
    </main>
  );
}
