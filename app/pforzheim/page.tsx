import Link from "next/link";
import { Hero } from "@/components/Hero";
import { LocationCard } from "@/components/LocationCard";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Metadata } from "next";

const funnelUrl = process.env.NEXT_PUBLIC_FUNNEL_PFORZHEIM ?? "#termin";

const faqItems = [
  {
    question: "Welche Stile dominieren in Pforzheim?",
    answer: "Unser Team kombiniert Fineline-Illustrationen mit organischen Black & Grey Übergängen – ideal für florale und geometrische Motive."
  },
  {
    question: "Wie schnell bekomme ich einen Beratungstermin?",
    answer: "In der Regel erhältst du innerhalb weniger Werktage einen Beratungsslot. Dringende Projekte priorisieren wir flexibel."
  },
  {
    question: "Bietet ihr Cover-Ups ehemaliger Permanent Make-ups an?",
    answer: "Ja, wir planen Cover-Ups für PMU oder alte Tattoos mit mehrstufigem Konzept. Ein Vor-Ort-Check ist Voraussetzung."
  },
  {
    question: "Welche Zahlungsmöglichkeiten gibt es?",
    answer: "Du kannst bar oder per Karte zahlen. Anzahlungen erfolgen bequem über unseren Funnel."
  }
];

const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "TattooParlor",
  name: "Blood Diamond Ink Pforzheim",
  description: "Fineline und Black & Grey Tattoo Studio in Pforzheim mit Fokus auf individuelle Illustrationen.",
  address: "Adresse folgt",
  telephone: "+49 7231 000000",
  openingHours: "Tu-Sa 11:00-19:00",
  areaServed: "Pforzheim",
  priceRange: "€€",
  image: "/og/og-pforzheim.jpg",
  sameAs: [
    "https://www.instagram.com",
    "https://www.facebook.com"
  ]
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer
    }
  }))
};

export const metadata: Metadata = {
    title: "Tattoo Studio Pforzheim | Blood Diamond Ink",
    description: "Realistic, Fineline & Cover-Up in Pforzheim. Termin per WhatsApp.",
    openGraph: {
        images: [
            {
                url: "/og/og-pforzheim.jpg",
                width: 1200,
                height: 630,
                alt: "Blood Diamond Ink Pforzheim Studio",
            },
        ],
    },
};

export default function PforzheimPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Hero
        ctaLabel="Termin buchen"
        ctaHref={funnelUrl}
      />
      <LocationCard
        id="termin"
        name="Blood Diamond Ink Pforzheim"
        description="Unser Studio in der Goldstadt bietet helle Räume, private Beratungskabinen und ein erfahrenes Team für komplexe Projekte."
        address="Adresse folgt"
        phone="07231 000000"
        openingHours="Dienstag bis Samstag 11–19 Uhr"
        funnelUrl={funnelUrl}
        mapImage="/maps/map-pforzheim.png"
        mapAlt="Karte von Blood Diamond Ink Pforzheim (Adresse folgt)"
      />
      <section className="mx-auto max-w-5xl px-6 pb-16">
        <div className="rounded-xl border border-blooddiamond-primary/30 bg-blooddiamond-muted/60 p-6">
          <h2 className="font-display text-3xl uppercase text-blooddiamond-accent">Studio Highlights Pforzheim</h2>
          <ul className="mt-4 space-y-3 text-sm text-blooddiamond-text/70">
            <li>• Fineline-Illustrationen & organische Black & Grey Übergänge</li>
            <li>• Private Booths und UV-Licht-Desinfektion für maximale Hygiene</li>
            <li>• Mehrstufiges Konzept für anspruchsvolle Cover-Up Projekte</li>
            <li>• Premium-Aftercare-Produkte für optimale Heilung</li>
          </ul>
          <div className="mt-5 flex flex-wrap gap-4 text-sm">
            <Link href={funnelUrl} className="btn-primary text-xs">
              Termin anfragen
            </Link>
            <Link href="mailto:pforzheim@blooddiamondink.example" className="hover:text-blooddiamond-accent">
              pforzheim@blooddiamondink.example
            </Link>
          </div>
        </div>
      </section>
      <FAQAccordion items={faqItems} />
    </>
  );
}