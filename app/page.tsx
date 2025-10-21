import { Hero } from "@/components/Hero";
import { StylesGrid } from "@/components/StylesGrid";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Gallery } from "@/components/Gallery";
import { Metadata } from "next";
import { LocationsTeaser } from "./components/LocationsTeaser";

export const metadata: Metadata = {
  title: "Tattoo Studios in Baden-Württemberg",
  description: "Blood Diamond Ink vereint Realistic, Fineline und Cover-Up Artists in Pforzheim, Heilbronn und Böblingen.",
};

const faqItems = [
  {
    question: "Wie buche ich einen Termin?",
    answer: "Trage dich in wenigen Minuten über unser Formular ein. Wir melden uns für eine Erstberatung und finden gemeinsam einen Termin."
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
      <Hero className="hero-bg hero--home" />
      <LocationsTeaser />
      <StylesGrid />
      <section id="gallery" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-semibold text-blooddiamond-text">Galerie</h2>
        <p className="mt-3 max-w-2xl text-blooddiamond-text/70">
          Einblicke in aktuelle Projekte und healed Pieces aus unseren Studios. Filtere nach Standort und entdecke die Vielfalt unserer Artists.
        </p>
        <Gallery />
      </section>
      <FAQAccordion items={faqItems} />
    </>
  );
}
