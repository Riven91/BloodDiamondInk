
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung – Blood Diamond Tattoo Ink. Böblingen",
  description: "Datenschutzerklärung für den Standort Böblingen.",
};

export default function DatenschutzBoeblingenPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-8 text-neutral-300">
      <h1 className="text-4xl text-blooddiamond-accent uppercase tracking-widest mb-4 text-center">
        Datenschutzerklärung
      </h1>
      <p className="text-center text-neutral-400 mb-12">Stand: 17.10.2025</p>

      <div className="space-y-10">
        <section className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl text-blooddiamond-accent mb-2">1. Einleitung</h2>
          <p>Blood Diamond Tattoo Ink. verarbeitet personenbezogene Daten ausschließlich zur Terminorganisation, Beratung und Nachbetreuung von Tattoo-Dienstleistungen. Diese Erklärung informiert dich über Art, Umfang und Zweck der Verarbeitung sowie deine Rechte.</p>
        </section>

        <section className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl text-blooddiamond-accent mb-2">2. Verantwortliche Stelle</h2>
          <p>
            Verantwortlich im Sinne der DSGVO:<br />
            <strong>Blood Diamond Tattoo Ink. Böblingen</strong><br />
            Inhaber: Kevin Kaiser<br />
            Stuttgarter Str. 21 · 71083 Herrenberg (Böblingen)<br />
            E-Mail: <a href="mailto:boeblingen@blooddiamond-tattoo.de" className="text-blooddiamond-accent hover:underline">boeblingen@blooddiamond-tattoo.de</a><br />
            Telefon: 0162 4204789
          </p>
        </section>

        <section className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl text-blooddiamond-accent mb-2">3. Termin- und Beratungsanfragen</h2>
          <p>Wir verarbeiten Namen, Kontaktinformationen, Motivdetails und Referenzbilder, um deine Anfrage zu prüfen und Termine vorzuschlagen. Die Datenverarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen). Daten werden innerhalb unseres CRM-Systems gespeichert und nach Abschluss des Projekts gemäß den gesetzlichen Aufbewahrungsfristen gelöscht.</p>
        </section>

        <section className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl text-blooddiamond-accent mb-2">4. Kontaktformulare</h2>
          <p>Wenn du unser Kontaktformular nutzt, werden deine Angaben zwecks Bearbeitung der Anfrage sowie für mögliche Rückfragen verarbeitet. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO. Deine Angaben werden nicht an Dritte weitergegeben.</p>
        </section>

        <section className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl text-blooddiamond-accent mb-2">5. Zahlungs- und Vertragsabwicklung</h2>
          <p>Rechnungs- und Zahlungsdaten werden zur Erfüllung steuerrechtlicher Pflichten verarbeitet und an unsere Steuerberatung weitergegeben. Rechtsgrundlage: Art. 6 Abs. 1 lit. b und c DSGVO.</p>
        </section>

        <section className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl text-blooddiamond-accent mb-2">6. Foto- und Videodokumentation</h2>
          <p>Nur mit deiner ausdrücklichen Zustimmung fertigen wir Aufnahmen an. Widerrufst du deine Einwilligung, löschen wir die betreffenden Aufnahmen unverzüglich.</p>
        </section>
        
        <section className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl text-blooddiamond-accent mb-2">7. Server-Logfiles</h2>
          <p>Beim Aufruf unserer Website werden automatisch Server-Logfiles erfasst (u. a. IP-Adresse, Browsertyp). Diese Daten dienen der technischen Sicherheit (Art. 6 Abs. 1 lit. f DSGVO).</p>
        </section>

        <section className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl text-blooddiamond-accent mb-2">8. Cookies & Local Storage</h2>
          <p>Unsere Website nutzt ausschließlich technisch notwendige Cookies und Local-Storage-Einträge. Eine Reichweitenanalyse oder werbliche Nutzung erfolgt nicht.</p>
        </section>

        <section className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl text-blooddiamond-accent mb-2">9. Google Maps</h2>
          <p>Wir binden Google Maps zur Darstellung interaktiver Karten ein. Beim Laden der Karte werden technische Informationen an Google übertragen. Die Nutzung erfolgt nur nach deiner Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blooddiamond-accent hover:underline">Googles Datenschutzerklärung</a>.</p>
        </section>

        <section className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl text-blooddiamond-accent mb-2">10. Dauer der Datenspeicherung</h2>
          <p>Vertrags- und Abrechnungsdaten werden gemäß steuerrechtlicher Vorgaben zehn Jahre aufbewahrt. Anfragedaten werden sechs Monate nach letztem Kontakt gelöscht.</p>
        </section>

        <section className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl text-blooddiamond-accent mb-2">11. Deine Rechte</h2>
          <p>Du hast das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung. Beschwerden können an die Datenschutzbehörde Baden-Württemberg gerichtet werden.</p>
        </section>

        <section className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl text-blooddiamond-accent mb-2">12. Datenschutzkontakt</h2>
          <p>Für Datenschutzanfragen wende dich an <a href="mailto:boeblingen@blooddiamond-tattoo.de" className="text-blooddiamond-accent hover:underline">boeblingen@blooddiamond-tattoo.de</a>.</p>
        </section>

        <p className="pt-8 text-neutral-500 text-center">© 2025 Blood Diamond Tattoo Ink. Böblingen – Alle Rechte vorbehalten.</p>
      </div>
    </main>
  );
}
