import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getLegalEntry, legalSlugs } from "@/lib/legal.config";

interface PageProps {
  params: {
    studio: string;
  };
}

export function generateStaticParams() {
  return legalSlugs.map((studio) => ({ studio }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const entry = getLegalEntry(params.studio);

  if (!entry) {
    return {
      title: "Impressum | Blood Diamond Tattoo Ink.",
      description: "Rechtliche Angaben für die Studios von Blood Diamond Tattoo Ink.",
    };
  }

  return {
    title: `Impressum ${entry.city} | Blood Diamond Tattoo Ink.`,
    description: `Rechtliche Angaben und Kontaktinformationen für das Studio ${entry.city} von Blood Diamond Tattoo Ink.`,
  };
}

export default function ImpressumPage({ params }: PageProps) {
  const entry = getLegalEntry(params.studio);

  if (!entry) {
    notFound();
  }

  return (
    <section className="mx-auto max-w-3xl px-6 text-center">
      <h1 className="font-display text-4xl uppercase text-blooddiamond-accent pt-10 mb-6 text-center">Impressum</h1>
      <div className="text-sm text-blooddiamond-text/70 mb-6">Stand: 16. Mai 2025</div>

      <h2 className="mt-4 mb-2 font-semibold text-blooddiamond-accent text-center">Anbieterkennzeichnung</h2>
      <div className="space-y-1 text-center text-blooddiamond-text/90">
        <p className="text-center">Blood Diamond Tattoo Ink.</p>
        <p className="text-center">Inhaber: Kasper Nowicki</p>
        <p className="text-center">Maulbronner Str. 38</p>
        <p className="text-center">75443 Ötisheim (Pforzheim)</p>
      </div>

      <div className="text-xs text-blooddiamond-text/70 italic mb-4 mt-3 text-center">
        Dieses Impressum gilt für alle Blood Diamond Tattoo Ink. Standorte (Ötisheim, Böblingen, Heilbronn).
      </div>

      <h2 className="mt-6 mb-2 font-semibold text-blooddiamond-accent text-center">Rechtliche Angaben</h2>
      <div className="space-y-1 text-center text-blooddiamond-text/90">
        <p className="text-center">Telefon: 01512 3426609</p>
        <p className="text-center">E-Mail: pforzheim@blooddiamond-tattoo.de</p>
      </div>

      <h2 className="mt-6 mb-2 font-semibold text-blooddiamond-accent text-center">Angaben gemäß § 5 DDG / USt</h2>
      <p className="text-blooddiamond-text/90 text-center">
        Umsatzsteuer-Identifikationsnummer gemäß § 27 a UStG: DE [USt-ID einsetzen]
      </p>

      <h2 className="mt-6 mb-2 font-semibold text-blooddiamond-accent text-center">Verantwortlich nach § 18 Abs. 2 MStV</h2>
      <p className="text-blooddiamond-text/90 text-center">
        Kasper Nowicki, Maulbronner Str. 38, 75443 Ötisheim
      </p>

      <h2 className="mt-6 mb-2 font-semibold text-blooddiamond-accent text-center">Aufsichtsbehörde &amp; Berufsbezeichnung</h2>
      <p className="text-blooddiamond-text/90 text-center">
        Handwerkskammer Karlsruhe – Tätowierer (Handwerksbetrieb gemäß HwO)
      </p>

      <h2 className="mt-6 mb-2 font-semibold text-blooddiamond-accent text-center">Online-Streitbeilegung</h2>
      <p className="text-blooddiamond-text/90 text-center">
        Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a
          href="https://ec.europa.eu/consumers/odr/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-blooddiamond-accent"
        >
          https://ec.europa.eu/consumers/odr/
        </a>
      </p>

      <h2 className="mt-6 mb-2 font-semibold text-blooddiamond-accent text-center">Haftungsausschluss</h2>
      <div className="space-y-3 text-blooddiamond-text/90">
        <p className="text-center">
          <strong>Haftung für Inhalte</strong> – Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die
          Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
        </p>
        <p className="text-center">
          <strong>Haftung für Links</strong> – Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir
          keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
          verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
        </p>
      </div>

      <h2 className="mt-6 mb-2 font-semibold text-blooddiamond-accent text-center">Urheberrecht</h2>
      <p className="text-blooddiamond-text/90 text-center">
        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.
        Beiträge Dritter sind als solche gekennzeichnet. Eine Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
        Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw.
        Erstellers.
      </p>

      <div className="mt-10 text-sm text-blooddiamond-text/70 text-center">© 2025 Blood Diamond Tattoo Ink. – Alle Rechte vorbehalten.</div>
    </section>
  );
}
