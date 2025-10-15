import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { LocationCard } from "@/components/LocationCard";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Seo } from "@/components/Seo";

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

export default function PforzheimPage() {
  const trustLabels = [
    "Mitglied im Bundesverband Tattoo",
    "Zertifizierte Hygienestandards",
    "Award 'Black & Grey Masters' 2023",
  ];

  const teamMembers = [
    {
      name: "Mara Weiss",
      role: "Lead Artist – Realistic & Cover-Up",
      image: "/artists/artist1.jpg",
      bio: "Mara plant jedes Motiv in 3D-Ansichten und kombiniert sanfte Schattierungen mit chirurgischer Präzision.",
    },
    {
      name: "Luis Brandt",
      role: "Fineline Spezialist",
      image: "/artists/artist2.jpg",
      bio: "Luis bringt filigrane Linien auf deine Haut und sorgt für klare Heillinien durch minimalinvasive Technik.",
    },
    {
      name: "Jana Keller",
      role: "Studioleitung & Aftercare",
      image: "/artists/artist3.jpg",
      bio: "Jana begleitet dich von der Beratung bis zur Heilung und kuratiert unsere Premium-Aftercare-Produkte.",
    },
  ];

  const reviews = [
    {
      author: "Svenja L.",
      content: "Mein Sleeve wurde in drei Sessions gestochen und sieht dank detaillierter Planung absolut stimmig aus.",
      rating: 5,
    },
    {
      author: "Daniel K.",
      content: "Cover-Up perfekt umgesetzt. Team hat jede Phase erklärt und die Heilung lief problemlos.",
      rating: 5,
    },
    {
      author: "Luisa F.",
      content: "Mega Atmosphäre, moderne Booths und transparente Preisgestaltung. Absolute Empfehlung!",
      rating: 5,
    },
  ];

  return (
    <>
      <Seo
        title="Tattoo Studio Pforzheim | Blood Diamond Ink"
        description="Realistic, Fineline & Cover-Up in Pforzheim. Termin per WhatsApp."
        openGraph={{
          images: [
            {
              url: "/og/og-pforzheim.jpg",
              width: 1200,
              height: 630,
              alt: "Blood Diamond Ink Pforzheim Studio",
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
        title="Pforzheim"
        subtitle="Goldstadt-Vibes treffen Tattoo-Expertise: Unser Team liebt filigrane Details und sorgt für entspanntes Studiofeeling."
        ctaLabel="Termin buchen"
        ctaHref={funnelUrl}
        videoSrc="/hero-placeholder.mp4"
        videoPoster="/og/og-pforzheim.jpg"
      />
      <section className="bg-blooddiamond-muted/60">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-display text-3xl uppercase text-blooddiamond-accent">Studio Insights</h2>
            <p className="mt-3 max-w-xl text-sm text-blooddiamond-text/70">
              Unser Hauptstandort bietet private Booths, UV-Licht-Desinfektion und eine Content-Lounge für dein Tattoo-Storytelling.
            </p>
          </div>
          <ul className="grid gap-4 text-xs uppercase tracking-wide text-blooddiamond-text/80 md:grid-cols-3">
            {trustLabels.map((label) => (
              <li
                key={label}
                className="rounded-lg border border-blooddiamond-primary/30 bg-blooddiamond-background px-4 py-3 text-center"
              >
                {label}
              </li>
            ))}
          </ul>
        </div>
      </section>
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
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="grid gap-8 md:grid-cols-[1.3fr_1fr]">
          <div className="space-y-6">
            <h2 className="font-display text-3xl uppercase text-blooddiamond-accent">Premium Experience</h2>
            <p className="text-blooddiamond-text/70">
              Wir gestalten jede Session mit Moodboards, Projektionstechnik und maßgeschneidertem Sounddesign. So entsteht eine Atmosphäre, in der du dich voll auf deine Idee konzentrieren kannst.
            </p>
            <ul className="space-y-3 text-sm text-blooddiamond-text/70">
              <li>• Individuelle Konzepttermine mit Artist und Aftercare-Specialist</li>
              <li>• Optionale Laser-Partnerschaften für Cover-Up Vorbereitung</li>
              <li>• Nachhaltige Produkte: vegane Farben, biologisch abbaubare Folien</li>
            </ul>
          </div>
          <div className="rounded-xl border border-blooddiamond-primary/30 bg-blooddiamond-muted/60 p-6">
            <h3 className="font-display text-2xl uppercase text-blooddiamond-text">Direktkontakt</h3>
            <p className="mt-3 text-sm text-blooddiamond-text/70">
              Du willst ein Großprojekt planen oder kurzfristig einen Walk-In Slot sichern? Unser Team antwortet innerhalb von 24 Stunden.
            </p>
            <div className="mt-5 flex flex-col gap-3 text-sm">
              <Link
                href={funnelUrl}
                className="inline-flex items-center justify-center rounded-md bg-blooddiamond-primary px-5 py-3 uppercase tracking-widest text-blooddiamond-text hover:bg-blooddiamond-accent/90"
              >
                Termin Funnel öffnen
              </Link>
              <Link href="mailto:pforzheim@blooddiamondink.example" className="hover:text-blooddiamond-accent">
                pforzheim@blooddiamondink.example
              </Link>
              <Link href="https://wa.me/4900000000000" className="hover:text-blooddiamond-accent">
                WhatsApp Studioleitung
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-blooddiamond-muted/60">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="font-display text-3xl uppercase text-blooddiamond-accent">Unser Team</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {teamMembers.map((member) => (
              <article
                key={member.name}
                className="overflow-hidden rounded-xl border border-blooddiamond-primary/30 bg-blooddiamond-background"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={member.image}
                    alt={`${member.name} – ${member.role}`}
                    fill
                    className="object-cover object-center"
                    sizes="(min-width: 768px) 30vw, 100vw"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="font-display text-2xl uppercase text-blooddiamond-text">{member.name}</h3>
                  <p className="text-xs uppercase tracking-wide text-blooddiamond-accent">{member.role}</p>
                  <p className="text-sm text-blooddiamond-text/70">{member.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="font-display text-3xl uppercase text-blooddiamond-accent">Bewertungen</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <article
              key={review.author}
              className="rounded-xl border border-blooddiamond-primary/30 bg-blooddiamond-muted/60 p-6 text-sm text-blooddiamond-text/80"
            >
              <p className="text-xl text-blooddiamond-accent" aria-label={`${review.rating} von 5 Sternen`}>
                {"★".repeat(review.rating)}
              </p>
              <p className="mt-3">{review.content}</p>
              <p className="mt-4 font-semibold text-blooddiamond-text">{review.author}</p>
            </article>
          ))}
        </div>
      </section>
      <FAQAccordion items={faqItems} />
    </>
  );
}
