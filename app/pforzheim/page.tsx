import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

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
        className="inline-block bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-md uppercase tracking-wide"
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

      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden bg-blooddiamond-background text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/backgrounds/hero-bg-1.jpg"
            alt="Tattoo Artist bei Blood Diamond Tattoo Ink."
            fill
            className="object-cover object-center opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blooddiamond-background via-blooddiamond-background/85 to-transparent" />
        </div>
        <div className="relative mx-auto max-w-3xl px-6 py-24 text-center sm:py-32">
          <p className="text-sm uppercase tracking-[0.35em] text-blooddiamond-accent">Blood Diamond Tattoo Ink.</p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Tattoo Studio Pforzheim – Fineline, Realistic & Cover-Up
          </h1>
          <p className="mt-4 text-base text-white/90">
            Internationale Tattoo-Artists, preisgekrönte Designs und höchste Präzision – Blood Diamond Tattoo Ink. Pforzheim vereint Kunst, Stil und Handwerk auf Weltklasse-Niveau. Ausgezeichnet mit der „Goldenen Nadel“ und bekannt für kompromisslose Hygiene.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Link href="#kontaktformular" className="btn-primary">
              Termin buchen
            </Link>
            <a
              href="https://wa.me/4915123426609"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp chat starten"
              title="WhatsApp chat starten"
              className="inline-flex items-center gap-2 rounded-md bg-green-600 px-4 py-2 text-sm uppercase text-white transition hover:bg-green-700"
            >
              <svg viewBox="0 0 32 32" width="20" height="20" aria-hidden="true" focusable="false" fill="currentColor">
                <path d="M19.11 17.23c-.3-.15-1.74-.86-2.01-.96-.27-.1-.47-.15-.68.15s-.78.96-.95 1.16-.35.22-.65.07a6.77 6.77 0 0 1-2-1.23 7.46 7.46 0 0 1-1.38-1.72c-.15-.26 0-.4.11-.55.12-.15.26-.34.39-.52.13-.18.17-.3.26-.5.09-.2.05-.37-.02-.52-.07-.15-.68-1.64-.93-2.25-.24-.58-.48-.5-.66-.51h-.56c-.19 0-.5.07-.76.37s-1 1-1 2.43 1.02 2.82 1.16 3.02c.15.2 2.02 3.08 4.9 4.32.68.29 1.2.46 1.61.59.68.22 1.3.19 1.79.11.55-.08 1.74-.71 1.98-1.4.24-.69.24-1.28.17-1.4-.07-.12-.27-.2-.57-.35z" />
                <path d="M26.7 5.3A12.5 12.5 0 0 0 5.25 23.5L4 28l4.62-1.2A12.5 12.5 0 1 0 26.7 5.31zM16 26.5a10.46 10.46 0 0 1-5.34-1.47l-.38-.22-2.74.71.73-2.67-.25-.39A10.5 10.5 0 1 1 26.5 16 10.52 10.52 0 0 1 16 26.5z" />
              </svg>
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

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
            <iframe
              src={`https://www.google.com/maps?q=https://${process.env.NEXT_PUBLIC_SITE_URL || 'blooddiamondink-79184164-7f1b7.web.app'}/maps/standorte.kml&output=embed`}
              width="100%"
              height="350"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            ></iframe>
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
