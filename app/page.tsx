import { Hero } from "@/components/Hero";
import { StylesGrid } from "@/components/StylesGrid";
import { FAQAccordion } from "@/components/FAQAccordion";
import { AwardsSection } from "@/components/AwardsSection";
import { Gallery } from "@/components/Gallery";
import LightboxAuto from "@/components/LightboxAuto";
import { Metadata } from "next";
import { ORIGIN } from "./config/site";
import { LocationsTeaser } from "./components/LocationsTeaser";

export const metadata: Metadata = {
  title: "Tattoo Studios in Baden-Württemberg",
  description: "Blood Diamond Ink. vereint Realistic, Fineline und Cover-Up Artists in Pforzheim, Heilbronn und Böblingen.",
  alternates: {
    canonical: ORIGIN,
  },
  openGraph: {
    title: "Tattoo Studios in Baden-Württemberg",
    description:
      "Blood Diamond Ink. vereint Realistic, Fineline und Cover-Up Artists in Pforzheim, Heilbronn und Böblingen.",
    url: ORIGIN,
  },
  twitter: {
    title: "Tattoo Studios in Baden-Württemberg",
    description:
      "Blood Diamond Ink. vereint Realistic, Fineline und Cover-Up Artists in Pforzheim, Heilbronn und Böblingen.",
  },
};

const faqItems = [
  {
    question: "Wie buche ich einen Termin?",
    answer: (
      <>
        <p>
          Trage dich in wenigen Minuten über unser Formular ein. Wir melden uns für eine Erstberatung und finden gemeinsam
          einen Termin.
        </p>
        <a
          href="https://kontakt.blooddiamond-tattoo.de/pforzheim/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 rounded-md bg-brand px-5 py-2 text-sm font-semibold text-white transition hover:bg-brand-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-ring focus-visible:ring-offset-2 focus-visible:ring-offset-blooddiamond-background"
          aria-label="Kontaktseite öffnen"
        >
          Kontaktseite öffnen
        </a>
      </>
    )
  },
  {
    question: "Wie bereite ich mich auf meinen Termin vor?",
    answer: "Komm ausgeruht und iss etwas. Vermeide Alkohol und blutverdünnende Medikamente. Trage bequeme Kleidung, die Zugang zur Stelle ermöglicht. Trink genug Wasser."
  },
  {
    question: "Wie läuft ein Cover-Up ab?",
    answer: "Wir prüfen dein bestehendes Tattoo, planen Größe und Stil und erstellen einen passenden Entwurf. Je nach Motiv sind mehrere Sitzungen sinnvoll."
  },
  {
    question: "Wie lange dauert die Heilung und wie pflege ich mein Tattoo?",
    answer: "Die Heilung dauert meistens zwei bis vier Wochen. Reinige die Stelle regelmäßig, trage Pflegeprodukte dünn auf und meide Sonne, Sauna und Schwimmbad. Du bekommst von uns klare Aftercare Guidelines."
  },
  {
    question: "Welche Hygienemaßnahmen werden ergriffen?",
    answer: "Wir arbeiten mit Einwegnadeln und Handschuhen. Geräte und Flächen werden regelmäßig desinfiziert. Die Abläufe sind steril und dokumentiert."
  },
  {
    question: "Kann ich mein Design vorher besprechen oder ändern?",
    answer: "Ja. Teile deine Ideen vorab mit deinem Artist. Kleine Anpassungen sind bis kurz vor dem Termin möglich. Wichtig ist, dass du dich mit dem Motiv wohlfühlst."
  },
  {
    question: "Wo sind eure Studios?",
    answer: "Pforzheim (Ötisheim), Heilbronn (Neckarsulm) und Böblingen (Herrenberg). Die Adressen findest du auf den jeweiligen Studioseiten."
  }
];

export default function HomePage() {
  return (
    <>
      <Hero
        city="home"
        title="Tattoo Studios in Baden-Württemberg – Exklusive Tattoo-Kunst auf Weltklasse-Niveau"
        description="Internationale Tattoo-Artists, ausgezeichnet mit der „Goldenen Nadel“ – spezialisiert auf Realistic, Fineline, Cover-Up, Black & Grey, Mandala und New School. Studios in Pforzheim (Ötisheim), Heilbronn (Neckarsulm) und Böblingen (Herrenberg)."
        ctaLabel="Termin buchen"
        ctaHref="https://kontakt.blooddiamond-tattoo.de/pforzheim/"
        secondaryCtaLabel="WhatsApp"
        secondaryCtaHref="https://wa.me/4915123426609"
      />
      <div className="flex flex-col items-center justify-center text-center text-white px-4 py-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
          Wir verschenken 100 € Tattoo-Gutscheine!
        </h2>

        <p className="mt-2 text-sm sm:text-base opacity-90 max-w-2xl">
          Beschenke dich selbst oder deine Liebsten mit einem Tattoo-Gutschein von Blood Diamond Tattoo Ink. – die perfekte Geschenkidee für Tattoo-Fans.
        </p>

        <a
          href="https://kontakt.blooddiamond-tattoo.de/gutschein/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-2 rounded-md bg-brand px-5 py-2 text-sm font-semibold text-white transition hover:bg-brand-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-ring focus-visible:ring-offset-2 focus-visible:ring-offset-blooddiamond-background"
          aria-label="Gutschein sichern"
        >
          {/* Geschenk-Icon (weiß, inline-SVG) */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
            <path d="M20 7h-2.18A3.001 3.001 0 0 0 15 4c-1.66 0-3 1.34-3 3 0-1.66-1.34-3-3-3a3.001 3.001 0 0 0-2.82 3H4c-1.1 0-2 .9-2 2v2c0 .55.45 1 1 1h1v7c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-7h1c.55 0 1-.45 1-1V9c0-1.1-.9-2-2-2Zm-5-1c.55 0 1 .45 1 1s-.45 1-1 1h-2V7c0-.55.45-1 1-1Zm-6 0c.55 0 1 .45 1 1v1H8c-.55 0-1-.45-1-1s.45-1 1-1Zm-3 6h5v7H6v-7Zm7 7v-7h5v7h-5Zm7-9H4V9h16v1Z" />
          </svg>
          <span>Gutschein sichern</span>
        </a>
      </div>
      <LocationsTeaser />
      <section id="signature-styles-gallery">
        <StylesGrid />
      </section>
      <LightboxAuto gallerySelector="#signature-styles-gallery" />
      <section id="erfolge-teamgeist-gallery">
        <AwardsSection />
      </section>
      <LightboxAuto gallerySelector="#erfolge-teamgeist-gallery" />
      <section id="gallery" className="mx-auto max-w-6xl px-4 py-8 sm:py-12">
        <Gallery />
      </section>
      <FAQAccordion id="faq" items={faqItems} />
    </>
  );
}
