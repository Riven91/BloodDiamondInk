
import React from 'react';

export default function DatenschutzPage() {
  return (
    <main>
      <h1 className="text-center font-display text-4xl uppercase text-blooddiamond-accent pt-10 mb-4">
        Datenschutzerklärung
      </h1>
      <p className="text-center text-sm text-blooddiamond-text/70 mb-6">Stand: 17.10.2025</p>

      <section className="mx-auto max-w-3xl px-6 text-center text-blooddiamond-text/80 space-y-6">

        <h2 className="font-semibold text-blooddiamond-accent">1. Einleitung</h2>
        <p>
          Blood Diamond Tattoo Ink. verarbeitet personenbezogene Daten ausschließlich zur Terminorganisation, Beratung und Nachbetreuung von Tattoo-Dienstleistungen.
          Diese Erklärung informiert dich über Art, Umfang und Zweck der Verarbeitung sowie deine Rechte.
        </p>

        <h2 className="font-semibold text-blooddiamond-accent">2. Verantwortliche Stelle</h2>
        <p>
          Verantwortlich: Blood Diamond Tattoo Ink. <br />
          Inhaber: Kasper Nowicki<br />
          Kontakt: pforzheim@blooddiamond-tattoo.de · Telefon 01512 3426609
        </p>

        <h2 className="font-semibold text-blooddiamond-accent">3. Termin- und Beratungsanfragen</h2>
        <p>
          Wir verarbeiten Namen, Kontaktinformationen, Motivdetails und Referenzbilder, um deine Anfrage zu prüfen und Termine vorzuschlagen.
          Die Datenverarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen).
          Daten werden innerhalb unseres CRM-Systems gespeichert und nach Abschluss des Projekts gemäß den gesetzlichen Aufbewahrungsfristen gelöscht.
        </p>

        <h2 className="font-semibold text-blooddiamond-accent">4. Kontaktformulare</h2>
        <p>
          Wenn du unser Kontaktformular nutzt (z. B. über unsere Funnel-Seite oder die Website), werden deine Angaben zwecks Bearbeitung der Anfrage sowie für mögliche Rückfragen verarbeitet.
          Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung bzw. vorvertragliche Maßnahmen).
          Deine Angaben werden nicht an Dritte weitergegeben, es sei denn, es besteht eine gesetzliche Verpflichtung.
        </p>

        <h2 className="font-semibold text-blooddiamond-accent">5. Zahlungs- und Vertragsabwicklung</h2>
        <p>
          Rechnungs- und Zahlungsdaten werden zur Erfüllung steuerrechtlicher Pflichten verarbeitet und an unsere Steuerberatung weitergegeben.
          Anzahlungen werden dokumentiert, um Terminreservierungen zu bestätigen.
          Rechtsgrundlage: Art. 6 Abs. 1 lit. b und c DSGVO.
        </p>

        <h2 className="font-semibold text-blooddiamond-accent">6. Foto- und Videodokumentation</h2>
        <p>
          Nur mit deiner ausdrücklichen Zustimmung fertigen wir Foto- oder Videoaufnahmen an, z. B. zur Ergebnisdokumentation oder für Social-Media-Beiträge.
          Widerrufst du deine Einwilligung, löschen wir die betreffenden Aufnahmen unverzüglich, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
        </p>

        <h2 className="font-semibold text-blooddiamond-accent">7. Server-Logfiles</h2>
        <p>
          Beim Aufruf unserer Website (z. B. auf Firebase Hosting) werden automatisch Server-Logfiles erfasst, u. a. IP-Adresse, Browsertyp, Uhrzeit und aufgerufene Seite.
          Diese Daten dienen der technischen Sicherheit und Stabilität der Website (Art. 6 Abs. 1 lit. f DSGVO).
          Eine Zusammenführung dieser Daten mit anderen Quellen findet nicht statt.
        </p>

        <h2 className="font-semibold text-blooddiamond-accent">8. Cookies & Local Storage</h2>
        <p>
          Unsere Website nutzt ausschließlich technisch notwendige Cookies und Local-Storage-Einträge, um grundlegende Funktionen bereitzustellen (z. B. Formularstatus, Sprachwahl).
          Eine Reichweitenanalyse oder werbliche Nutzung erfolgt nicht.
          Die Speicherung erfolgt gemäß Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an funktionaler Darstellung).
        </p>

        <h2 className="font-semibold text-blooddiamond-accent">9. Google Maps (Kartenservice)</h2>
        <p>
          Wir binden Google Maps der Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland, zur Darstellung interaktiver Karten ein.
          Beim Laden der Karte werden technische Informationen (z. B. IP-Adresse, Browserinformationen) an Google übertragen.
          Die Nutzung erfolgt nur nach deiner ausdrücklichen Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO.
          Weitere Informationen findest du in der Datenschutzerklärung von Google:
          <a href="https://policies.google.com/privacy" className="text-blooddiamond-accent underline">https://policies.google.com/privacy</a>
        </p>

        <h2 className="font-semibold text-blooddiamond-accent">10. Dauer der Datenspeicherung</h2>
        <p>
          Daten aus Terminanfragen werden sechs Monate nach der letzten Kontaktaufnahme gelöscht, sofern kein Vertrag zustande kommt.
          Vertrags- und Abrechnungsdaten werden gemäß steuerrechtlicher Vorgaben zehn Jahre aufbewahrt.
        </p>

        <h2 className="font-semibold text-blooddiamond-accent">11. Deine Rechte</h2>
        <p>
          Du hast das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit sowie Widerspruch.
          Beschwerden können an den Landesbeauftragten für den Datenschutz und die Informationsfreiheit Baden-Württemberg, Königstraße 10a, 70173 Stuttgart, gerichtet werden.
        </p>

        <h2 className="font-semibold text-blooddiamond-accent">12. Datenschutzkontakt</h2>
        <p>
          Für Datenschutzanfragen wende dich an <a href="mailto:pforzheim@blooddiamond-tattoo.de" className="text-blooddiamond-accent">pforzheim@blooddiamond-tattoo.de</a>.
          Wir beantworten Anfragen in der Regel innerhalb von 14 Tagen.
        </p>

        <div className="pt-8 border-t border-blooddiamond-primary/30 mt-10 text-xs text-blooddiamond-accent">
          © 2025 Blood Diamond Tattoo Ink. – Alle Rechte vorbehalten.
        </div>
      </section>
    </main>
  );
}
