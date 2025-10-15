import Link from "next/link";
import { Hero } from "@/components/Hero";
import { StylesGrid } from "@/components/StylesGrid";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Seo } from "@/components/Seo";

const faqItems = [
  {
    question: "Was kostet eine Session?",
    answer: "Unsere Artist:innen kalkulieren ab ca. 150 € pro Stunde. Wir besprechen dein Motiv transparent vor dem Termin."
  },
  {
    question: "Kann ich spontan vorbeikommen?",
    answer: "Walk-Ins sind möglich, wenn Kapazitäten frei sind. Sichere dir dennoch einen Termin, um Wartezeiten zu vermeiden."
  },
  {
    question: "Wie läuft ein Cover-Up ab?",
    answer: "Wir analysieren dein bestehendes Tattoo, erstellen ein individuelles Design und planen ggf. Vorarbeiten wie Aufhellung."
  },
  {
    question: "Wie pflege ich mein Tattoo nach dem Stechen?",
    answer: "Du erhältst einen Aftercare-Guide inklusive Pflegeprodukten. Sauberkeit und Feuchtigkeit sind in den ersten 14 Tagen entscheidend."
  },
  {
    question: "Wie buche ich einen Termin?",
    answer: "Wähle deinen Wunschstandort und nutze den Termin-Button für unseren Funnel per WhatsApp oder Formular."
  }
];

export default function HomePage() {
  return (
    <>
      <Seo
        title="Tattoo Studios in Baden-Württemberg"
        description="Blood Diamond Ink vereint Realistic, Fineline und Cover-Up Artists in Pforzheim, Heilbronn und Böblingen."
      />
      <Hero
        title="Tattoo-Kunst mit Präzision"
        subtitle="Unser Team vereint preisgekrönte Artists für Realistic, Fineline, Cover-Up und Black & Grey Tattoos. Wir begleiten dich vom ersten Scribble bis zur perfekten Heilung."
        ctaLabel="Standorte entdecken"
        ctaHref="#standorte"
        backgroundImage="/og/og-pforzheim.jpg"
      />
      <StylesGrid />
      <section id="standorte" className="mx-auto max-w-6xl px-6 pb-16">
        <h2 className="font-display text-4xl uppercase text-blooddiamond-accent">Studios in deiner Nähe</h2>
        <p className="mt-3 max-w-2xl text-blooddiamond-text/70">
          Wir bauen unser Franchise in Baden-Württemberg aus. Aktuell findest du uns mit unserem Hauptstudio in Pforzheim sowie weiteren Lounges in Heilbronn und Böblingen – weitere Städte folgen.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            { label: "Pforzheim", slug: "pforzheim" },
            { label: "Heilbronn", slug: "heilbronn" },
            { label: "Böblingen", slug: "boeblingen" },
          ].map((city) => (
            <div key={city.slug} className="rounded-xl border border-blooddiamond-primary/30 bg-blooddiamond-muted/60 p-6">
              <h3 className="font-display text-2xl uppercase text-blooddiamond-text">{city.label}</h3>
              <p className="mt-2 text-sm text-blooddiamond-text/60">Adresse folgt</p>
              <Link
                href={`/${city.slug}`}
                className="mt-4 inline-flex items-center text-sm uppercase tracking-wide text-blooddiamond-accent hover:text-blooddiamond-accent/80"
              >
                Mehr erfahren →
              </Link>
            </div>
          ))}
        </div>
      </section>
      <FAQAccordion items={faqItems} />
    </>
  );
}
