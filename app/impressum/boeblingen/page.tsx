
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum – Blood Diamond Tattoo Ink. Böblingen",
  description: "Impressum und Anbieterkennzeichnung für den Standort Böblingen.",
};

export default function ImpressumBoeblingenPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-8 text-neutral-300">
      <h1 className="text-4xl text-blooddiamond-accent uppercase tracking-widest mb-4 text-center">
        Impressum
      </h1>
      <p className="text-center text-neutral-400 mb-12">Stand: 16. Oktober 2025</p>

      <div className="space-y-10">
        <section className="text-center">
          <h2 className="text-2xl text-blooddiamond-accent mb-2 text-center">
            Anbieterkennzeichnung
          </h2>
          <div className="text-neutral-300">
            <p>Blood Diamond Tattoo Ink. Böblingen</p>
            <p>Inhaber: Kevin Kaiser</p>
            <p>Stuttgarter Str. 21</p>
            <p>71083 Herrenberg (Böblingen)</p>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-2xl text-blooddiamond-accent mb-2 text-center">
            Kontakt
          </h2>
          <div className="text-neutral-300">
            <p>Telefon: 0162 4204789</p>
            <p>E-Mail: boeblingen@blooddiamond-tattoo.de</p>
          </div>
        </section>

        <section className="text-center">
          <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a UStG: DE [USt-ID einsetzen]</p>
        </section>

        <section className="text-center">
          <h2 className="text-2xl text-blooddiamond-accent mb-2 text-center">
            Verantwortlich nach § 18 Abs. 2 MStV
          </h2>
          <p>Kevin Kaiser, Stuttgarter Str. 21, 71083 Herrenberg (Böblingen)</p>
        </section>

        <section className="text-center">
          <h2 className="text-2xl text-blooddiamond-accent mb-2 text-center">
            Aufsichtsbehörde & Berufsbezeichnung
          </h2>
          <p>Handwerkskammer Karlsruhe – Tätowierer (Handwerksbetrieb gemäß HwO)</p>
        </section>

        <section className="text-center">
          <h2 className="text-2xl text-blooddiamond-accent mb-2 text-center">
            Online-Streitbeilegung
          </h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
            <br />
            <a
              href="https://consumer-redress.ec.europa.eu/dispute-resolution-bodies/germany-aussergerichtliche-streitbeilegungsstelle-fur-verbraucher-und-unternehmer-e-v_en?prefLang=de"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blooddiamond-accent hover:underline"
            >
              https://consumer-redress.ec.europa.eu/dispute-resolution-bodies/germany-aussergerichtliche-streitbeilegungsstelle-fur-verbraucher-und-unternehmer-e-v_en?prefLang=de
            </a>
            . Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </section>
        
        <section className="max-w-3xl mx-auto">
          <h2 className="text-2xl text-blooddiamond-accent mb-6 text-center">Haftungsausschluss</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl text-blooddiamond-accent mb-2 text-center">Haftung für Inhalte</h3>
              <p className="text-sm text-neutral-400 text-left">Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.</p>
            </div>
            <div>
              <h3 className="text-xl text-blooddiamond-accent mb-2 text-center">Haftung für Links</h3>
              <p className="text-sm text-neutral-400 text-left">Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.</p>
            </div>
            <div>
              <h3 className="text-xl text-blooddiamond-accent mb-2 text-center">Urheberrecht</h3>
              <p className="text-sm text-neutral-400 text-left">Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Eine Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.</p>
            </div>
          </div>
        </section>

        <p className="pt-8 text-neutral-500 text-center">© 2025 Blood Diamond Tattoo Ink. – Alle Rechte vorbehalten.</p>
      </div>
    </main>
  );
}
