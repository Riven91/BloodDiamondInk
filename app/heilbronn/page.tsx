import Image from "next/image";
import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import ReviewsStrip from "@/components/ReviewsStrip";

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

const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "TattooParlor",
  name: "Blood Diamond Tattoo Ink. Heilbronn",
  description:
    "Fineline, Realistic & Cover-Up Tattoos in Heilbronn – Beratung, individuelles Design & höchste Hygiene.",
  image: "/og/og-heilbronn.jpg",
  telephone: "+49 176 30573128",
  url: "https://blooddiamondink.example/heilbronn",
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
  title: "Tattoo Studio Heilbronn | Blood Diamond Tattoo Ink.",
  description: "Fineline, Realistic & Cover-Up Tattoos in Heilbronn – Beratung, individuelles Design & höchste Hygiene.",
  openGraph: {
    images: [
      {
        url: "/og/og-heilbronn.jpg",
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <Hero
        title="Tattoo Studio Heilbronn — Blood Diamond Tattoo Ink."
        description="Erleben Sie Tattoo-Kunst mit internationalem Anspruch – handverlesene Artists aus aller Welt, mehrfach ausgezeichnet mit der „Goldenen Nadel“. Realistic, Fineline und Cover-Up in Perfektion – exklusiv bei Blood Diamond Tattoo Ink. Heilbronn."
        ctaLabel="Termin buchen"
        ctaHref="#kontaktformular"
        secondaryCtaLabel="WhatsApp"
        secondaryCtaHref="https://wa.me/4917630573128"
      />

      <ReviewsStrip variant="heilbronn" />

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
            Der Standort von Blood Diamond Tattoo Ink. in Heilbronn liegt verkehrsgünstig in Neckarsulm. Nutzen Sie die Karte, um Ihre Route zu planen.
          </p>
          <div className="mt-8 overflow-hidden rounded-2xl border border-blooddiamond-primary/40">
            <div className="flex justify-center">
              <iframe
                src="https://www.google.com/maps/d/u/0/embed?mid=1_kecyb5qxEgIkCvVZX0YKWE_GIozRyQ&ehbc=2E312F&noprof=1"
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

      <section className="bg-blooddiamond-muted/20 py-16">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="font-display text-3xl uppercase text-blooddiamond-accent">Unser Studio</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="relative h-72 overflow-hidden rounded-2xl border border-blooddiamond-primary/40">
              <Image
                src="/gallery/heilbronn-1.jpg"
                alt="Studioansicht von Blood Diamond Tattoo Ink. in Heilbronn"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-72 overflow-hidden rounded-2xl border border-blooddiamond-primary/40">
              <Image
                src="/gallery/heilbronn-2.jpg"
                alt="Tattoo-Bereich von Blood Diamond Tattoo Ink. in Heilbronn"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blooddiamond-background py-16">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="font-display text-3xl uppercase text-blooddiamond-accent">Unser Team</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                name: "Teammitglied 1",
                specialty: "Fineline & Illustrationen",
                image: "/artists/artist1.jpg",
              },
              {
                name: "Teammitglied 2",
                specialty: "Realistic & Portraits",
                image: "/artists/artist2.jpg",
              },
              {
                name: "Teammitglied 3",
                specialty: "Cover-Up & Blackwork",
                image: "/artists/artist3.jpg",
              },
            ].map((artist) => (
              <div
                key={artist.name}
                className="overflow-hidden rounded-2xl border border-blooddiamond-primary/40 bg-blooddiamond-muted/30"
              >
                <div className="relative h-56 w-full">
                  <Image
                    src={artist.image}
                    alt={`${artist.name} von Blood Diamond Tattoo Ink.`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-white">{artist.name}</h3>
                  <p className="mt-2 text-sm text-blooddiamond-text/70">{artist.specialty}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
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
