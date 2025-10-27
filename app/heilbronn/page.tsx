import Image from "next/image";
import type { Metadata } from "next";
import Script from "next/script";
import { Hero } from "@/components/Hero";
import OtherLocations from "@/components/OtherLocations";
import StudioGallery from "@/components/StudioGallery";
import LightboxAuto from "@/components/LightboxAuto";
import { studioImages } from "@/app/_content/studioImages";

const faqItems = [
  {
    question: "Welche Tattoo-Stile bietet Blood Diamond Tattoo Ink. in Heilbronn?",
    answer:
      "Unser Fokus liegt auf Fineline, Realistic und individuellen Cover-Up Tattoos mit maßgeschneiderter Beratung und Design-Entwicklung in Heilbronn.",
  },
  {
    question: "Wie läuft die Terminvereinbarung ab?",
    answer:
      "Sie senden Ihre Anfrage über die externe Kontaktseite. Wir melden uns innerhalb von 48 Stunden mit Terminvorschlägen und einem individuellen Projektplan für Heilbronn.",
  },
  {
    question: "Welche Hygienestandards erwarten mich?",
    answer:
      "Blood Diamond Tattoo Ink. arbeitet mit Einwegmaterialien, UV-Desinfektion und medizinisch geprüften Aftercare-Produkten für maximale Sicherheit in Heilbronn.",
  },
  {
    question: "Kann ich ein bestehendes Tattoo covern lassen?",
    answer:
      "Ja, wir entwickeln mehrstufige Cover-Up-Konzepte und planen gegebenenfalls Vorbereitungssitzungen für optimale Ergebnisse im Studio Heilbronn.",
  },
];

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

const searchActionJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Blood Diamond Tattoo Ink. Heilbronn",
  url: "https://blooddiamondink.de/heilbronn",
  potentialAction: {
    "@type": "SearchAction",
    target:
      "https://www.google.com/search?q=site:https://blooddiamondink.de/heilbronn+{search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "TattooParlor",
  name: "Blood Diamond Tattoo Ink. Heilbronn",
  description:
    "Fineline, Realistic & Cover-Up Tattoos in Heilbronn – Beratung, individuelles Design & höchste Hygiene.",
  image: "https://blooddiamondink.de/og/og-heilbronn.jpg",
  telephone: "+49 176 30573128",
  url: "https://blooddiamondink.de/heilbronn",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Lautenbacher Str. 6",
    addressLocality: "Neckarsulm",
    postalCode: "74172",
    addressCountry: "DE",
  },
  areaServed: "Heilbronn",
  openingHours: "Mo-Sa 10:00-18:00",
  sameAs: [
    "https://www.instagram.com/blooddiamondtattooink",
    "https://www.facebook.com/blooddiamondtattooink",
  ],
};

const studioCaptions = [
  "Einblick in eines unserer Studios in Heilbronn, Pforzheim und Böblingen – moderne Ausstattung, sterile Umgebung und konzentrierte Arbeitsatmosphäre.",
  "Tattoo-Session mit kreativer Energie – klare Linien, präzise Technik und ruhige Konzentration am Werk.",
  "Willkommen bei Blood Diamond Tattoo Ink. – stilvoller Empfangsbereich mit markantem Neon-Logo und entspannter Atmosphäre.",
] as const;

if (process.env.NODE_ENV !== "production" && studioCaptions.length !== studioImages.length) {
  console.warn("HeilbronnPage: studio captions length does not match studio images count.");
}

export const metadata: Metadata = {
  title: "Tattoo Studio Heilbronn – Blood Diamond Tattoo Ink. | Handwerk, Ruhe und Präzision",
  description:
    "Blood Diamond Tattoo Ink. Heilbronn steht für handverlesene Tattoo-Artists, Ruhe im Private Room und präzise Fineline-, Realistic- sowie Cover-Up-Designs für Neckarsulm und den Raum Heilbronn.",
  alternates: {
    canonical: "https://blooddiamondink.de/heilbronn",
  },
  openGraph: {
    type: "website",
    url: "https://blooddiamondink.de/heilbronn",
    title: "Tattoo Studio Heilbronn – Blood Diamond Tattoo Ink. | Handwerk, Ruhe und Präzision",
    description:
      "Erlebe Ruhe, Präzision und preisgekrönte Tattoo-Kunst bei Blood Diamond Tattoo Ink. Heilbronn – individuelle Beratung für Fineline-, Realistic- und Cover-Up-Projekte.",
    siteName: "Blood Diamond Tattoo Ink.",
    locale: "de_DE",
    images: [
      {
        url: "https://blooddiamondink.de/og/og-heilbronn.jpg",
        width: 1200,
        height: 630,
        alt: "Blood Diamond Tattoo Ink. Studio in Heilbronn",
      },
    ],
  },
};

function ContactSection() {
  return (
    <section
      id="kontaktformular"
      className="max-w-5xl mx-auto mt-10 mb-20 bg-neutral-800 border border-neutral-700 rounded-xl p-8 text-center"
    >
      <h2 className="text-3xl text-blooddiamond-accent mb-4">Kontakt &amp; Terminbuchung</h2>
      <p className="text-neutral-300 mb-6">
        Das Online-Kontaktformular ist derzeit deaktiviert. Sie können uns jedoch jederzeit über unsere externe Kontaktseite erreichen.
      </p>
      <a
        href="https://kontakt.blooddiamond-tattoo.de/heilbronn/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-brand hover:bg-brand-hover text-white py-3 px-6 rounded-md uppercase tracking-wide"
      >
        Kontaktseite öffnen
      </a>
    </section>
  );
}

export default function HeilbronnPage() {
  return (
    <>
      <Script
        id="heilbronn-search-action"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(searchActionJsonLd) }}
      />
      <Script
        id="heilbronn-local-business"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <Script
        id="heilbronn-faq"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Hero
        title="Tattoo Studio Heilbronn — Blood Diamond Tattoo Ink."
        description="Internationale Tattoo-Kunst trifft auf präzises Handwerk – Blood Diamond Tattoo Ink. Heilbronn steht für Realistic, Fineline und Cover-Up auf Weltklasse-Niveau. Unsere Artists sind mehrfach mit der „Goldenen Nadel“ ausgezeichnet und arbeiten in einer sterilen, ruhigen Umgebung für dein perfektes Tattoo."
        ctaLabel="Termin buchen"
        ctaHref="#kontaktformular"
        secondaryCtaLabel="WhatsApp"
        secondaryCtaHref="https://wa.me/4917630573128"
        city="heilbronn"
      />
      <div className="flex flex-col items-center justify-center text-center text-white px-4 py-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
          Handwerk, Ruhe und Präzision
        </h2>

        <p className="mt-2 text-sm sm:text-base opacity-90 max-w-2xl">
          Beschenke dich selbst oder deine Liebsten mit einem Tattoo-Gutschein von Blood Diamond Tattoo Ink – die perfekte Geschenkidee für Tattoo-Fans.
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

      <section className="bg-blooddiamond-muted/30 py-16">
        <div className="mx-auto grid max-w-5xl gap-10 px-6 md:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl uppercase text-blooddiamond-accent">Studio-Infos Heilbronn / Neckarsulm</h2>
            <p className="mt-4 text-sm text-blooddiamond-text/80">
              <strong>Blood Diamond Tattoo Ink.</strong> steht für exklusive Tattoo-Kunst im Raum <strong>Heilbronn</strong> und <strong>Neckarsulm</strong>. Unser Studio verbindet moderne Atmosphäre, präzises Handwerk und ruhige Private Rooms. Hier steht dein Tattoo im Mittelpunkt – mit voller Konzentration auf jedes Detail.
            </p>
            <p className="mt-4 text-sm text-blooddiamond-text/80">
              Wir entwickeln maßgeschneiderte Designs in enger Abstimmung. <strong>Fineline</strong>-, <strong>Realismus</strong>- und <strong>Black-&-Grey-Tattoos</strong> gehören zu unseren Stärken. Jedes Detail wird sorgfältig geplant und sauber umgesetzt. Keine Hektik, keine Massenabfertigung – Qualität hat Vorrang.
            </p>
            <p className="mt-4 text-sm text-blooddiamond-text/80">
              Kundinnen und Kunden aus <strong>Heilbronn</strong>, <strong>Neckarsulm</strong>, <strong>Bad Friedrichshall</strong> und <strong>Weinsberg</strong> schätzen die diskrete Umgebung, die individuelle Beratung und die Konzentration auf das Wesentliche. Dein Tattoo soll heute überzeugen – und in vielen Jahren genauso stark wirken.
            </p>
            <p className="mt-4 text-sm text-blooddiamond-text/80">
              Buche jetzt deinen Termin und erlebe die Ruhe, Präzision und Verlässlichkeit von <strong>Blood Diamond Tattoo Ink.</strong>
            </p>
            <div className="sr-only">
              Tattoo Heilbronn, Tattoo Neckarsulm, Tattoo Studio Heilbronn,
              Tattoo Studio Neckarsulm, Fineline Tattoo Heilbronn,
              Realismus Tattoo Heilbronn, Black & Grey Tattoo Heilbronn,
              individuelle Tattoos Heilbronn, Private Rooms
            </div>
          </div>
          <div className="grid gap-4 text-sm text-white">
            <div className="rounded-xl border border-blooddiamond-primary/40 bg-blooddiamond-background/70 p-4">
              <h3 className="font-semibold uppercase tracking-wide text-blooddiamond-accent">Adresse</h3>
              <p className="mt-2">Lautenbacher Str. 6<br />74172 Neckarsulm (Heilbronn)</p>
            </div>
            <div className="rounded-xl border border-blooddiamond-primary/40 bg-blooddiamond-background/70 p-4">
              <h3 className="font-semibold uppercase tracking-wide text-blooddiamond-accent">Kontakt</h3>
              <p className="mt-2">
                Telefon: <a href="tel:+4917630573128" className="hover:text-blooddiamond-accent">0176 30573128</a>
                <br />E-Mail: <a href="mailto:heilbronn@blooddiamond-tattoo.de" className="hover:text-blooddiamond-accent">heilbronn@blooddiamond-tattoo.de</a>
              </p>
            </div>
            <div className="rounded-xl border border-blooddiamond-primary/40 bg-blooddiamond-background/70 p-4">
              <h3 className="font-semibold uppercase tracking-wide text-blooddiamond-accent">Öffnungszeiten</h3>
              <p className="mt-2">Montag bis Samstag, 10–18 Uhr</p>
            </div>
            <div className="rounded-xl border border-blooddiamond-primary/40 bg-blooddiamond-background/70 p-4">
              <h3 className="font-semibold uppercase tracking-wide text-blooddiamond-accent">Inhaber</h3>
              <p className="mt-2">Kasper Nowicki</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blooddiamond-background py-16">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="font-display text-3xl uppercase text-blooddiamond-accent">Hier finden Sie uns</h2>
          <p className="mt-3 text-sm text-blooddiamond-text/80">
            Der Standort von Blood Diamond Tattoo Ink. in Heilbronn / Neckarsulm liegt gut erreichbar nahe der A6 – in ruhiger Umgebung, ideal für konzentrierte Tattoo-Sessions ohne Großstadttrubel.
          </p>
          <div className="mt-8 overflow-hidden rounded-2xl border border-blooddiamond-primary/40">
            <div className="flex justify-center">
              <iframe
                data-klaro-maps="1"
                data-src="https://www.google.com/maps/d/u/0/embed?mid=1_kecyb5qxEgIkCvVZX0YKWE_GIozRyQ&ehbc=2E312F&noprof=1"
                title="Karte blockiert – Cookie-Einwilligung erforderlich"
                aria-hidden="true"
                width="100%"
                height="400"
                style={{ borderRadius: '0.5rem', border: '1px solid #404040' }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <OtherLocations current="heilbronn" />

      <section className="bg-blooddiamond-muted/20 py-16">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="font-display text-3xl uppercase text-blooddiamond-accent">Unser Studio</h2>
          <div className="mt-8">
            <StudioGallery captions={[...studioCaptions]} />
          </div>
        </div>
      </section>

      <section className="bg-blooddiamond-background py-16">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="font-display text-3xl uppercase text-blooddiamond-accent">Unser Team</h2>
          <div id="team-gallery" className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="relative w-full aspect-[4/3] rounded-2xl border border-blooddiamond-primary/40 bg-blooddiamond-muted/30 p-2">
              <Image
                src="/Team1.jpeg"
                alt="Team von Blood Diamond Tattoo Ink. in Heilbronn"
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-contain"
              />
            </div>
            <div className="relative w-full aspect-[4/3] rounded-2xl border border-blooddiamond-primary/40 bg-blooddiamond-muted/30 p-2">
              <Image
                src="/pokale.jpeg"
                alt="Auszeichnungen und Pokale von Blood Diamond Tattoo Ink."
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-contain"
              />
            </div>
          </div>
          <LightboxAuto containerSelector="#team-gallery" />
          <section className="text-center max-w-2xl mx-auto mt-6 text-gray-200">
            <h3 className="text-lg font-semibold mb-3">Gemeinsam stark.</h3>
            <p className="text-sm leading-relaxed">
              Das Team von <strong>Blood Diamond Tattoo Ink Studios</strong> wurde auf Tattoo-Conventions in
              <strong> Stuttgart</strong> und <strong> Rastatt</strong> ausgezeichnet, darunter in den Kategorien
              <em> „Best of Show“</em>, <em>„Best of Color“</em> und <em>„Best of Blackwork“</em>.
            </p>
            <p className="text-sm leading-relaxed mt-2">
              <strong>Diese Erfolge stehen für das, was uns antreibt: Leidenschaft, Präzision und Hingabe zu Tattoo Art.</strong>
            </p>
            <p className="text-sm leading-relaxed mt-2">
              Unsere Künstler bringen diese Erfahrung in jedes Studio ein, in <strong>Pforzheim</strong>, <strong>Heilbronn</strong> und <strong>Böblingen</strong>.
            </p>
          </section>
        </div>
      </section>

      <section className="py-10 sm:py-14 bg-transparent">
        <p className="text-center text-gray-200 text-lg sm:text-xl leading-relaxed mt-4 mb-8 px-4 max-w-3xl mx-auto">
          Begeistert von unserer Tattoo-Kunst? Entdecke in unserer{" "}
          <a
            href="/#galerie"
            className="text-emerald-500 hover:text-emerald-400 transition-colors font-semibold"
          >
            Galerie
          </a>{" "}
          weitere Meisterwerke aus Pforzheim, Heilbronn und Böblingen – oder folge uns auf{" "}
          <a
            href="#footer"
            className="text-emerald-500 hover:text-emerald-400 transition-colors font-semibold"
          >
            Social Media
          </a>{" "}
          für tägliche Einblicke in unsere Tattoo-Studios, Artists und preisgekrönten Styles.
        </p>
      </section>

      <section className="bg-blooddiamond-muted/30 py-16">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="font-display text-3xl uppercase text-blooddiamond-accent">Studio Highlights – Tattoo Heilbronn</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-blooddiamond-primary/40 bg-blooddiamond-background/80 p-6">
              <h3 className="text-lg font-semibold text-white">Individuelles Design</h3>
              <p className="mt-3 text-sm text-blooddiamond-text/70">
                Persönliche Design-Workshops und maßgeschneiderte Motive für einzigartige Fineline, Realistic und Cover-Up Tattoos in Heilbronn.
              </p>
            </div>
            <div className="rounded-2xl border border-blooddiamond-primary/40 bg-blooddiamond-background/80 p-6">
              <h3 className="text-lg font-semibold text-white">Premium Hygiene</h3>
              <p className="mt-3 text-sm text-blooddiamond-text/70">
                Sterile Arbeitsplätze, UV-Desinfektion und medizinische Aftercare-Produkte garantieren höchste Sicherheitsstandards bei Blood Diamond Tattoo Ink. Heilbronn.
              </p>
            </div>
            <div className="rounded-2xl border border-blooddiamond-primary/40 bg-blooddiamond-background/80 p-6">
              <h3 className="text-lg font-semibold text-white">Ganzheitliche Betreuung</h3>
              <p className="mt-3 text-sm text-blooddiamond-text/70">
                Intensive Vor- und Nachsorge, digitale Check-ins sowie transparente Projektplanung für langfristig perfekte Ergebnisse in Heilbronn.
              </p>
            </div>
            <div className="rounded-2xl border border-blooddiamond-primary/40 bg-blooddiamond-background/80 p-6">
              <h3 className="text-lg font-semibold text-white">Regionale Verankerung</h3>
              <p className="mt-3 text-sm text-blooddiamond-text/70">
                Blood Diamond Tattoo Ink. Heilbronn vernetzt lokale Kunstschaffende und veranstaltet regelmäßige Walk-In Days für spontane Tattoo-Projekte.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
