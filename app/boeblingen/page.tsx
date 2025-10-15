import Link from "next/link";
import { Hero } from "@/components/Hero";
import { LocationCard } from "@/components/LocationCard";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Metadata } from "next";

const funnelUrl = process.env.NEXT_PUBLIC_FUNNEL_BOEBLINGEN ?? "#termin";

const faqItems = [
  {
    question: "Welche Stile bietet Böblingen?",
    answer: "Der Fokus liegt auf Fineline-Floral, Lettering und soften Blackwork-Pieces – perfekt für dezente Statements.",
  },
  {
    question: "Wie läuft die Beratung ab?",
    answer: "Wir planen Online-Consults per Video-Call und finalisieren dein Motiv beim Termin vor Ort.",
  },
  {
    question: "Habt ihr Gast-Artists?",
    answer: "Ja, monatlich besuchen uns Guest-Spots für Color Realism und Micro-Realistic Details.",
  },
  {
    question: "Kann ich kurzfristig buchen?",
    answer: "Nutze den Funnel-Link, wir halten wöchentliche Kontingente für spontane Sessions frei.",
  },
];

const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "TattooParlor",
  name: "Blood Diamond Ink Böblingen",
  description: "Tattoo Studio in Böblingen für Fineline, Lettering und sanfte Blackwork-Projekte.",
  address: "Adresse folgt",
  telephone: "+49 7031 000000",
  openingHours: "Tu-Fr 12:00-20:00",
  areaServed: "Böblingen",
  priceRange: "€€",
  image: "/og/og-boeblingen.jpg",
  sameAs: [
    "https://www.instagram.com",
    "https://www.facebook.com",
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export const metadata: Metadata = {
    title: "Tattoo Studio Böblingen | Blood Diamond Ink",
    description: "Fineline, Lettering & Blackwork in Böblingen. Termin per WhatsApp.",
    openGraph: {
        images: [
            {
                url: "/og/og-boeblingen.jpg",
                width: 1200,
                height: 630,
                alt: "Blood Diamond Ink Böblingen Studio",
            },
        ],
    },
};

export default function BoeblingenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Hero
        ctaLabel="Termin buchen"
        ctaHref={funnelUrl}
      />
      <LocationCard
        id="termin"
        name="Blood Diamond Ink Böblingen"
        description="Unser neuestes Studio punktet mit Tageslicht, flexiblen Booths und einem ruhigen Private Room für sensible Stellen."
        address="Adresse folgt"
        phone="07031 000000"
        openingHours="Dienstag bis Freitag 12–20 Uhr"
        funnelUrl={funnelUrl}
        mapImage="/maps/map-boeblingen.png"
        mapAlt="Karte von Blood Diamond Ink Böblingen (Adresse folgt)"
      />
      <section className="mx-auto max-w-5xl px-6 pb-16">
        <div className="rounded-xl border border-blooddiamond-primary/30 bg-blooddiamond-muted/60 p-6">
          <h2 className="font-display text-3xl uppercase text-blooddiamond-accent">Studio Highlights</h2>
          <ul className="mt-4 space-y-3 text-sm text-blooddiamond-text/70">
            <li>• Modularer Arbeitsplatz für Duo-Sessions und Matching Tattoos</li>
            <li>• Entspannungszone mit Massage-Stuhl für Pausen</li>
            <li>• Kooperation mit regionalen Piercing-Studios für Kombitermine</li>
          </ul>
          <div className="mt-5 flex flex-wrap gap-4 text-sm">
            <Link href={funnelUrl} className="btn-primary text-xs">
              Funnel öffnen
            </Link>
            <Link href="mailto:boeblingen@blooddiamondink.example" className="hover:text-blooddiamond-accent">
              boeblingen@blooddiamondink.example
            </Link>
          </div>
        </div>
      </section>
      <FAQAccordion items={faqItems} />
    </>
  );
}
