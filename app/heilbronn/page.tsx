import Link from "next/link";
import { Hero } from "@/components/Hero";
import { LocationCard } from "@/components/LocationCard";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Seo } from "@/components/Seo";

const funnelUrl = process.env.NEXT_PUBLIC_FUNNEL_HEILBRONN ?? "#termin";

const faqItems = [
  {
    question: "Wie buche ich meinen Termin in Heilbronn?",
    answer: "Nutze den Termin-Button für unseren WhatsApp-Funnel. Wir melden uns innerhalb von 24 Stunden mit Terminvorschlägen."
  },
  {
    question: "Gibt es Walk-In Slots in Heilbronn?",
    answer: "An Samstagen halten wir begrenzte Walk-In Zeiten für kleine Motive frei. Frage am besten kurz per WhatsApp an."
  },
  {
    question: "Welche Artists arbeiten hier?",
    answer: "Unser Heilbronner Team ist auf Realistic, Black & Grey und präzise Cover-Ups spezialisiert. Gast-Artists kommen regelmäßig vorbei."
  },
  {
    question: "Wie läuft die Nachsorge ab?",
    answer: "Du erhältst ein Aftercare-Paket mit Folie und Pflegeanleitung. Nachkontrollen sind in den ersten sechs Wochen inklusive."
  }
];

const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "TattooParlor",
  name: "Blood Diamond Ink Heilbronn",
  description: "Tattoo Studio für Realistic, Fineline und Cover-Up Arbeiten in Heilbronn.",
  address: "Adresse folgt",
  telephone: "+49 7131 000000",
  openingHours: "Tu-Sa 12:00-20:00",
  areaServed: "Heilbronn",
  priceRange: "€€",
  image: "/og/og-heilbronn.jpg",
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

export default function HeilbronnPage() {
  return (
    <>
      <Seo
        title="Tattoo Studio Heilbronn | Blood Diamond Ink"
        description="Realistic, Fineline & Cover-Up in Heilbronn. Termin per WhatsApp."
        openGraph={{
          images: [
            {
              url: "/og/og-heilbronn.jpg",
              width: 1200,
              height: 630,
              alt: "Blood Diamond Ink Heilbronn Studio",
            },
          ],
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Hero
        title="Heilbronn"
        subtitle="In Heilbronn erwarten dich Artists für realistische Portraits, detailreiche Black & Grey Sleeves und nahtlose Cover-Ups."
        ctaLabel="Termin buchen"
        ctaHref={funnelUrl}
        backgroundImage="/og/og-heilbronn.jpg"
      />
      <LocationCard
        id="termin"
        name="Blood Diamond Ink Heilbronn"
        description="Unser erstes Studio vereint erfahrene Artists mit einer privaten Lounge und modernster Hygienetechnik."
        address="Adresse folgt"
        phone="07131 000000"
        openingHours="Dienstag bis Samstag 12–20 Uhr"
        funnelUrl={funnelUrl}
        mapImage="/maps/map-heilbronn.png"
        mapAlt="Karte von Blood Diamond Ink Heilbronn (Adresse folgt)"
      />
      <section className="mx-auto max-w-5xl px-6 pb-16">
        <div className="rounded-xl border border-blooddiamond-primary/30 bg-blooddiamond-muted/60 p-6">
          <h2 className="font-display text-3xl uppercase text-blooddiamond-accent">Was Heilbronn besonders macht</h2>
          <ul className="mt-4 space-y-3 text-sm text-blooddiamond-text/70">
            <li>• Black & Grey Spezialisierung mit Fokus auf Portraits und Realistic Wildlife</li>
            <li>• Private Beratungslounge für ruhige Motivbesprechungen</li>
            <li>• Walk-In Saturday mit spontanen Slots für kleine Projekte</li>
          </ul>
          <div className="mt-5 flex flex-wrap gap-4 text-sm">
            <Link href={funnelUrl} className="rounded-md bg-blooddiamond-primary px-5 py-3 uppercase tracking-widest text-blooddiamond-text hover:bg-blooddiamond-accent/90">
              Termin anfragen
            </Link>
            <Link href="mailto:heilbronn@blooddiamondink.example" className="hover:text-blooddiamond-accent">
              heilbronn@blooddiamondink.example
            </Link>
          </div>
        </div>
      </section>
      <FAQAccordion items={faqItems} />
    </>
  );
}
