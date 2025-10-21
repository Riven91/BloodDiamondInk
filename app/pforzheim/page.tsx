import Image from "next/image";
import type { Metadata } from "next";
import { Hero } from "@/components/Hero";

const faqItems = [
  {
    question: "Welche Tattoo-Stile bietet Blood Diamond Tattoo Ink. in Pforzheim?",
    answer:
      "Unser Fokus liegt auf Fineline, Realistic und individuellen Cover-Up Tattoos mit maßgeschneiderter Beratung und Design-Entwicklung.",
  },
  {
    question: "Wie läuft die Terminvereinbarung ab?",
    answer:
      "Sie senden Ihre Anfrage über das Formular. Wir melden uns innerhalb von 48 Stunden mit Terminvorschlägen und einem individuellen Projektplan.",
  },
  {
    question: "Welche Hygienestandards erwarten mich?",
    answer:
      "Blood Diamond Tattoo Ink. arbeitet mit Einwegmaterialien, UV-Desinfektion und medizinisch geprüften Aftercare-Produkten für maximale Sicherheit.",
  },
  {
    question: "Kann ich ein bestehendes Tattoo covern lassen?",
    answer:
      "Ja, wir entwickeln mehrstufige Cover-Up-Konzepte und planen gegebenenfalls Vorbereitungssitzungen für optimale Ergebnisse.",
  },
];

const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "TattooParlor",
  name: "Blood Diamond Tattoo Ink.",
  description:
    "Fineline, Realistic & Cover-Up Tattoos in Pforzheim – Beratung, individuelles Design & höchste Hygiene.",
  image: "/og/og-pforzheim.jpg",
  telephone: "+49 1512 3426609",
  url: "https://blooddiamondink.example/pforzheim",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Maulbronner Str. 38",
    addressLocality: "Ötisheim",
    postalCode: "75443",
    addressCountry: "DE",
  },
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
  title: "Tattoo Studio Pforzheim | Blood Diamond Tattoo Ink.",
  description: "Fineline, Realistic & Cover-Up Tattoos in Pforzheim – Beratung, individuelles Design & höchste Hygiene.",
  openGraph: {
    images: [
      {
        url: "/og/og-pforzheim.jpg",
        width: 1200,
        height: 630,
        alt: "Blood Diamond Tattoo Ink. Studio in Pforzheim",
      },
    ],
  },
};

function ContactForm() {
  return (
    <section
      id="kontaktformular"
      className="max-w-5xl mx-auto mt-10 mb-20 bg-neutral-800 border border-neutral-700 rounded-xl p-8 text-center"
    >
      <h2 className="text-3xl text-blooddiamond-accent mb-4">Kontakt & Terminbuchung</h2>
      <p className="text-neutral-300 mb-6">
        Das Online-Kontaktformular ist derzeit deaktiviert.{" "}
        Sie können uns jedoch jederzeit über unsere externe Kontaktseite erreichen.
      </p>
      <a
        href="https://kontakt.blooddiamond-tattoo.de/pforzheim/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-brand hover:bg-brand-hover text-white py-3 px-6 rounded-md uppercase tracking-wide"
      >
        Kontaktseite öffnen
      </a>
    </section>
  );
}

export default function PforzheimPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <Hero
        title="Pforzheim Tattoo Studio — Blood Diamond Tattoo Ink."
        description="Internationale Tattoo-Artists, preisgekrönte Designs und höchste Präzision – Blood Diamond Tattoo Ink. Pforzheim vereint Kunst, Stil und Handwerk auf Weltklasse-Niveau. Artisten ausgezeichnet mit der „Goldenen Nadel“ und bekannt für kompromisslose Hygiene."
        ctaLabel="Termin buchen"
        ctaHref="#kontaktformular"
        secondaryCtaLabel="WhatsApp"
        secondaryCtaHref="https://wa.me/4915123426609"
      />

      <section className="bg-blooddiamond-muted/30 py-16">
        <div className="mx-auto grid max-w-5xl gap-10 px-6 md:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl uppercase text-blooddiamond-accent">Studio-Infos</h2>
            <p className="mt-4 text-sm text-blooddiamond-text/80">
              Blood Diamond Tattoo Ink. in Pforzheim verbindet moderne Atmosphäre mit ruhigen Private Rooms für konzentriertes Arbeiten an Ihrem individuellen Tattoo-Projekt.
            </p>
          </div>
          <div className="grid gap-4 text-sm text-white">
            <div className="rounded-xl border border-blooddiamond-primary/40 bg-blooddiamond-background/70 p-4">
              <h3 className="font-semibold uppercase tracking-wide text-blooddiamond-accent">Adresse</h3>
              <p className="mt-2">Maulbronner Str. 38<br />75443 Ötisheim (Pforzheim)</p>
            </div>
            <div className="rounded-xl border border-blooddiamond-primary/40 bg-blooddiamond-background/70 p-4">
              <h3 className="font-semibold uppercase tracking-wide text-blooddiamond-accent">Kontakt</h3>
              <p className="mt-2">
                Telefon: <a href="tel:+4915123426609" className="hover:text-blooddiamond-accent">01512 3426609</a>
                <br />E-Mail: <a href="mailto:pforzheim@blooddiamond-tattoo.de" className="hover:text-blooddiamond-accent">pforzheim@blooddiamond-tattoo.de</a>
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
            Der Standort von Blood Diamond Tattoo Ink. in Pforzheim liegt verkehrsgünstig zwischen Stuttgart und Karlsruhe. Nutzen Sie die Karte, um Ihre Route zu planen.
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
                src="/gallery/pforzheim-1.jpg"
                alt="Studioansicht von Blood Diamond Tattoo Ink. in Pforzheim"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-72 overflow-hidden rounded-2xl border border-blooddiamond-primary/40">
              <Image
                src="/gallery/pforzheim-2.jpg"
                alt="Tattoo-Bereich von Blood Diamond Tattoo Ink. in Pforzheim"
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
          <p className="mt-3 text-sm text-blooddiamond-text/80">
            Drei Artists von Blood Diamond Tattoo Ink. begleiten Sie von der Idee bis zur perfekten Umsetzung.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                name: "Artist 1",
                specialty: "Fineline & Illustrationen",
                image: "/artists/artist1.jpg",
              },
              {
                name: "Artist 2",
                specialty: "Realistic & Portraits",
                image: "/artists/artist2.jpg",
              },
              {
                name: "Artist 3",
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
          <h2 className="font-display text-3xl uppercase text-blooddiamond-accent">Highlights</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-blooddiamond-primary/40 bg-blooddiamond-background/80 p-6">
              <h3 className="text-lg font-semibold text-white">Individuelles Design</h3>
              <p className="mt-3 text-sm text-blooddiamond-text/70">
                Persönliche Design-Workshops und maßgeschneiderte Motive für einzigartige Fineline, Realistic und Cover-Up Tattoos in der Region Pforzheim.
              </p>
            </div>
            <div className="rounded-2xl border border-blooddiamond-primary/40 bg-blooddiamond-background/80 p-6">
              <h3 className="text-lg font-semibold text-white">Premium Hygiene</h3>
              <p className="mt-3 text-sm text-blooddiamond-text/70">
                Sterile Arbeitsplätze, UV-Desinfektion und medizinische Aftercare-Produkte garantieren höchste Sicherheitsstandards bei Blood Diamond Tattoo Ink.
              </p>
            </div>
            <div className="rounded-2xl border border-blooddiamond-primary/40 bg-blooddiamond-background/80 p-6">
              <h3 className="text-lg font-semibold text-white">Ganzheitliche Betreuung</h3>
              <p className="mt-3 text-sm text-blooddiamond-text/70">
                Intensive Vor- und Nachsorge, digitale Check-ins sowie transparente Projektplanung für langfristig perfekte Ergebnisse.
              </p>
            </div>
            <div className="rounded-2xl border border-blooddiamond-primary/40 bg-blooddiamond-background/80 p-6">
              <h3 className="text-lg font-semibold text-white">Regionale Verankerung</h3>
              <p className="mt-3 text-sm text-blooddiamond-text/70">
                Blood Diamond Tattoo Ink. Pforzheim vernetzt lokale Kunstschaffende und veranstaltet regelmäßige Walk-In Days für spontane Tattoo-Projekte.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
    </>
  );
}
