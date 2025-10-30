
import { Metadata } from "next";

const ORIGIN = "https://blooddiamondink-79184164-7f1b7.web.app";

export const metadata: Metadata = {
  title: "AGB – Blood Diamond Tattoo Ink. Böblingen",
  description: "Allgemeine Geschäftsbedingungen für den Standort Böblingen.",
  twitter: {
    card: "summary_large_image",
    title: "AGB – Blood Diamond Tattoo Ink. Böblingen",
    description: "Allgemeine Geschäftsbedingungen für den Standort Böblingen.",
    url: `${ORIGIN}/agb/boeblingen`,
    site: "@BloodDiamondInk",
  },
};

export default function AgbBoeblingenPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-8 text-neutral-300">
      <h1 className="text-4xl text-blooddiamond-accent uppercase tracking-widest mb-4 text-center">
        Allgemeine Geschäftsbedingungen
      </h1>
      <p className="text-center text-neutral-400 mb-12">Stand: 17. Oktober 2025</p>

      <div className="space-y-10">
        <section className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl text-blooddiamond-accent mb-2">
            1. Geltungsbereich
          </h2>
          <p>
            Diese AGB gelten für alle Dienstleistungen von <strong>Blood Diamond Tattoo Ink. Böblingen</strong> gegenüber ihren Kunden. Mit Terminvereinbarung oder Inanspruchnahme einer Leistung erkennt der Kunde diese Bedingungen an.
          </p>
        </section>

        <section className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl text-blooddiamond-accent mb-2">
            2. Terminvereinbarung & Anzahlungen
          </h2>
          <p>
            Ein Tattoo-Termin gilt als verbindlich, sobald Datum und ggf. eine Anzahlung vereinbart sind. Die Anzahlung wird bei der Behandlung angerechnet. Bei Absagen bis 72 Stunden vor dem Termin wird die Anzahlung als sechs Monate gültiges Guthaben gutgeschrieben. Danach verfällt sie, sofern kein Ersatztermin vereinbart werden kann.
          </p>
        </section>

        <section className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl text-blooddiamond-accent mb-2">
            3. Gesundheit & Vorbereitung
          </h2>
          <p>
            Kunden informieren das Studio vor der Behandlung über Vorerkrankungen, Allergien oder Medikamenteneinnahme. Das Studio kann Termine bei gesundheitlichen Bedenken oder unzureichender Vorbereitung (z. B. Sonnenbrand) verschieben oder absagen.
          </p>
        </section>

        <section className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl text-blooddiamond-accent mb-2">
            4. Zahlung & Abrechnung
          </h2>
          <p>
            Die Abrechnung erfolgt nach dem individuell vereinbarten Aufwand oder Festpreis. Zahlung unmittelbar nach der Session – bar oder per Kartenzahlung. Bei Zahlungsverzug gelten die gesetzlichen Regelungen (§ 288 BGB).
          </p>
        </section>

        <section className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl text-blooddiamond-accent mb-2">
            5. Urheberrecht am Design
          </h2>
          <p>
            Alle Entwürfe, Skizzen und Tattoo-Designs bleiben geistiges Eigentum von Blood Diamond Tattoo Ink. bzw. der Artists. Eine Verwendung außerhalb des vereinbarten Tattoos ist nur mit schriftlicher Zustimmung erlaubt.
          </p>
        </section>

        <section className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl text-blooddiamond-accent mb-2">
            6. Designfreigabe & Änderungen
          </h2>
          <p>
            Vor Beginn der Tätowierung kann der Kunde Änderungswünsche äußern. Mit der finalen Freigabe gilt das Motiv als verbindlich bestätigt. Nachträgliche Anpassungen sind ausgeschlossen.
          </p>
        </section>

        <section className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl text-blooddiamond-accent mb-2">
            7. Nachsorge & Haftung
          </h2>
          <p>
            Nachsorgehinweise sind sorgfältig zu befolgen. Innerhalb von sechs Wochen nach dem Termin werden notwendige Nachbesserungen kostenfrei durchgeführt, sofern die Pflegeempfehlungen eingehalten wurden. Für Komplikationen durch unsachgemäße Pflege übernimmt das Studio keine Haftung.
          </p>
        </section>

        <section className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl text-blooddiamond-accent mb-2">
            8. Gutscheine
          </h2>
          <p>
            Vertragspartner beim Erwerb ist:<br />
            <strong>Blood Diamond Tattoo Ink. Böblingen</strong><br />
            Inhaber: Kevin Kaiser<br />
            Stuttgarter Str. 21 · 71083 Herrenberg (Böblingen)
          </p>
        </section>

        <section className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl text-blooddiamond-accent mb-2">
            9. Kein Widerrufsrecht
          </h2>
          <p>
            Nach § 312g Abs. 2 Nr. 9 BGB besteht bei individuell vereinbarten Tattoo-Terminen kein Widerrufsrecht.
          </p>
        </section>

        <section className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl text-blooddiamond-accent mb-2">
            10. Schlussbestimmungen
          </h2>
          <p>
            Es gilt deutsches Recht. Gerichtsstand ist, soweit gesetzlich zulässig, der Sitz des Studios. Sollte eine Bestimmung dieser AGB unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.
          </p>
        </section>
        
        <p className="pt-8 text-neutral-500 text-center">© 2025 Blood Diamond Tattoo Ink. Böblingen – Alle Rechte vorbehalten.</p>
      </div>
    </main>
  );
}
