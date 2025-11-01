
import { Metadata } from "next";
import { ORIGIN } from "../config/site";

export const metadata: Metadata = {
  title: "AGB – Blood Diamond Tattoo",
  description: "Allgemeine Geschäftsbedingungen von Blood Diamond Tattoo.",
  alternates: {
    canonical: `${ORIGIN}/agb`,
  },
  // images entfernt – zentrales Bild via app/head.tsx
};

export default function AgbPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-8 text-neutral-300">
      <h1 className="text-4xl text-blooddiamond-accent uppercase tracking-widest mb-4 text-center">
        Allgemeine Geschäftsbedingungen
      </h1>
      <p className="text-center text-neutral-400 mb-8">Stand: 17. Oktober 2025</p>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl text-blooddiamond-accent mb-2 text-center">
            1. Geltungsbereich
          </h2>
          <p className="max-w-3xl mx-auto text-center">
            Diese AGB gelten für alle Dienstleistungen von Blood Diamond Tattoo Ink. gegenüber Kunden der jeweiligen Studios. Mit Terminvereinbarung oder Inanspruchnahme einer Leistung erkennt der Kunde diese Bedingungen an.
          </p>
        </section>

        <section>
          <h2 className="text-2xl text-blooddiamond-accent mb-2 text-center">
            2. Terminvereinbarung & Anzahlungen
          </h2>
          <p className="max-w-3xl mx-auto text-center">
            Ein Tattoo-Termin gilt als verbindlich, sobald Datum und ggf. eine Anzahlung vereinbart sind. Die Anzahlung wird bei der Behandlung angerechnet. Bei Absagen bis 72 Stunden vor dem Termin wird die Anzahlung als sechs Monate gültiges Guthaben gutgeschrieben. Danach verfällt sie, sofern kein Ersatztermin vereinbart werden kann.
          </p>
        </section>

        <section>
          <h2 className="text-2xl text-blooddiamond-accent mb-2 text-center">
            3. Gesundheit & Vorbereitung
          </h2>
          <p className="max-w-3xl mx-auto text-center">
            Kunden informieren das Studio vor der Behandlung über Vorerkrankungen, Allergien oder Medikamenteneinnahme. Das Studio kann Termine bei gesundheitlichen Bedenken oder unzureichender Vorbereitung (z. B. Sonnenbrand) verschieben oder absagen.
          </p>
        </section>

        <section>
          <h2 className="text-2xl text-blooddiamond-accent mb-2 text-center">
            4. Zahlung & Abrechnung
          </h2>
          <p className="max-w-3xl mx-auto text-center">
            Die Abrechnung erfolgt nach dem individuell vereinbarten Aufwand oder Festpreis. Zahlung unmittelbar nach der Session – bar oder per Kartenzahlung. Bei Zahlungsverzug gelten die gesetzlichen Regelungen (§ 288 BGB).
          </p>
        </section>

        <section>
          <h2 className="text-2xl text-blooddiamond-accent mb-2 text-center">
            5. Urheberrecht am Design
          </h2>
          <p className="max-w-3xl mx-auto text-center">
            Alle Entwürfe, Skizzen und Tattoo-Designs bleiben geistiges Eigentum von Blood Diamond Tattoo Ink. bzw. der Artists. Eine Verwendung außerhalb des vereinbarten Tattoos ist nur mit schriftlicher Zustimmung erlaubt.
          </p>
        </section>

        <section>
          <h2 className="text-2xl text-blooddiamond-accent mb-2 text-center">
            6. Designfreigabe & Änderungen
          </h2>
          <p className="max-w-3xl mx-auto text-center">
            Vor Beginn der Tätowierung kann der Kunde Änderungswünsche äußern. Mit der finalen Freigabe gilt das Motiv als verbindlich bestätigt. Nachträgliche Anpassungen sind ausgeschlossen.
          </p>
        </section>

        <section>
          <h2 className="text-2xl text-blooddiamond-accent mb-2 text-center">
            7. Nachsorge & Haftung
          </h2>
          <p className="max-w-3xl mx-auto text-center">
            Nachsorgehinweise sind sorgfältig zu befolgen. Innerhalb von sechs Wochen nach dem Termin werden notwendige Nachbesserungen kostenfrei durchgeführt, sofern die Pflegeempfehlungen eingehalten wurden. Für Komplikationen durch unsachgemäße Pflege übernimmt das Studio keine Haftung.
          </p>
        </section>

        <section>
          <h2 className="text-2xl text-blooddiamond-accent mb-2 text-center">
            8. Gutscheine
          </h2>
          <p className="max-w-3xl mx-auto text-center">
            Gutscheine sind drei Jahre ab Ausstellungsdatum gültig und auf andere Personen übertragbar. Eine Barauszahlung ist ausgeschlossen. Vertragspartner beim Erwerb ist:Blood Diamond Tattoo Ink., Inhaber Kasper Nowicki, Maulbronner Str. 38, 75443 Ötisheim.
          </p>
        </section>

        <section>
          <h2 className="text-2xl text-blooddiamond-accent mb-2 text-center">
            9. Kein Widerrufsrecht
          </h2>
          <p className="max-w-3xl mx-auto text-center">
            Nach § 312g Abs. 2 Nr. 9 BGB besteht bei individuell vereinbarten Tattoo-Terminen kein Widerrufsrecht.
          </p>
        </section>

        <section>
          <h2 className="text-2xl text-blooddiamond-accent mb-2 text-center">
            10. Schlussbestimmungen
          </h2>
          <p className="max-w-3xl mx-auto text-center">
            Es gilt deutsches Recht. Gerichtsstand ist, soweit gesetzlich zulässig, der Sitz des Studios. Sollte eine Bestimmung dieser AGB unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.
          </p>
        </section>
        
        <p className="text-center pt-8">© 2025 Blood Diamond Tattoo Ink. – Alle Rechte vorbehalten.</p>

      </div>
    </main>
  );
}
