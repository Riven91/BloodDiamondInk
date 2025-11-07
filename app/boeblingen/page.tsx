import Image from "next/image";
import Script from "next/script";
import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import OtherLocations from "@/components/OtherLocations";
import StudioGallery from "@/components/StudioGallery";
import LightboxAuto from "@/components/LightboxAuto";
import { studioImages } from "@/app/_content/studioImages";
import { ORIGIN } from "../config/site";

const TITLE = "Tattoo Studio Böblingen – Blood Diamond Tattoo Ink. | Kunst, Präzision und Sicherheit";
const DESCRIPTION =
  "Blood Diamond Tattoo Ink. Böblingen – Tattoo-Kunst zwischen Stuttgart und Herrenberg. Internationale Artists, präzise Linienführung und ausgezeichnete Hygienestandards mit der „Goldenen Nadel“. Termin vereinbaren & Qualität erleben.";

const studioCaptions = [
  "Einblick in eines unserer Studios in Böblingen, Heilbronn und Pforzheim – klare Struktur, präzise Abläufe und ruhige, professionelle Arbeitsumgebung.",
  "Tattoo-Arbeit mit klarer Struktur – präzise Ausführung, aufgeräumte Arbeitsfläche und Fokus auf jedes Detail.",
  "Willkommen bei Blood Diamond Tattoo Ink. – stilvoller Empfangsbereich mit markantem Neon-Logo und entspannter Atmosphäre.",
] as const;

if (process.env.NODE_ENV !== "production" && studioCaptions.length !== studioImages.length) {
  console.warn("BoeblingenPage: studio captions length does not match studio images count.");
}

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: `${ORIGIN}/boeblingen`,
  },
  // images entfernt – zentrales Bild via app/layout.tsx
  robots: { index: true, follow: true },
};

function ContactNotice() {
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
        href="https://kontakt.blooddiamond-tattoo.de/boeblingen/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-brand hover:bg-brand-hover text-white py-3 px-6 rounded-md uppercase tracking-wide focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-ring"
      >
        Kontaktseite öffnen
      </a>
    </section>
  );
}

export default function BoeblingenPage() {
  return (
    <>
      <Hero
        title="Tattoo-Studio Böblingen — Präzision, Design und Atmosphäre"
        description={`Von Böblingen inspiriert, in der Welt vernetzt: Unsere Tattoo-Artists aus Europa, Asien und Amerika stehen für individuelle Designs, Präzision und Sicherheit. Viele unserer Künstler wurden bereits mit der „Goldenen Nadel“ ausgezeichnet und bringen diese Erfahrung mit zu Blood Diamond Tattoo Ink. Böblingen.`}
        ctaLabel="Termin buchen"
        ctaHref="#kontaktformular"
        secondaryCtaLabel="WhatsApp"
        secondaryCtaHref="https://wa.me/491624204789"
        city="boeblingen"
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

      <section className="bg-blooddiamond-muted/30 pt-8 md:pt-10 pb-8 md:pb-10">
        <div className="mx-auto grid max-w-5xl gap-10 px-6 md:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl uppercase text-blooddiamond-accent">Studio-Infos Böblingen / Herrenberg</h2>
            <p className="mt-4 text-sm text-blooddiamond-text/80">
              <strong>Blood Diamond Tattoo Ink.</strong> steht für moderne Tattoo-Kunst in der Region <strong>Böblingen</strong> und <strong>Herrenberg</strong>. 
              Unser Studio verbindet ästhetisches Design, präzises Handwerk und ruhige Private Rooms, 
              in denen du und dein Motiv im Mittelpunkt stehen.
            </p>
            <p className="mt-4 text-sm text-blooddiamond-text/80">
              Wir entwickeln maßgeschneiderte Tattoos, abgestimmt auf deinen Stil und deine Persönlichkeit.
              Ob <strong>Fineline</strong>, <strong>Realismus</strong> oder <strong>Black &amp; Grey (Black and Grey)</strong> – jedes Motiv entsteht mit echter Hingabe und höchster Sorgfalt.
              Keine Eile, kein Massenbetrieb. Qualität, Hygiene und Atmosphäre haben Vorrang.
            </p>
            <p className="mt-4 text-sm text-blooddiamond-text/80">
              Kundinnen und Kunden aus <strong>Böblingen</strong>, <strong>Herrenberg</strong>, <strong>Sindelfingen</strong> und der gesamten Umgebung 
              schätzen die diskrete Beratung, die moderne Ausstattung und die Möglichkeit, 
              ihr Tattoo in einer ruhigen, konzentrierten Umgebung zu planen.
            </p>
            <p className="mt-4 text-sm text-blooddiamond-text/80">
              Buche deinen Termin und erlebe die Kombination aus Ruhe, Präzision und Verlässlichkeit, 
              für die <strong>Blood Diamond Tattoo Ink.</strong> Böblingen bekannt ist.
            </p>
            <div className="sr-only">
              Tattoo Böblingen, Tattoo Herrenberg, Tattoo Studio Böblingen,
              Tattoo Studio Herrenberg, Fineline Tattoo Böblingen,
              Realismus Tattoo Böblingen, Black & Grey Tattoo Böblingen,
              individuelle Tattoos Böblingen, Private Rooms
            </div>
          </div>
          <div className="grid gap-4 text-sm text-white">
            <div className="rounded-xl border border-blooddiamond-primary/40 bg-blooddiamond-background/70 p-4">
              <h3 className="font-semibold uppercase tracking-wide text-blooddiamond-accent">Adresse</h3>
              <p className="mt-2">Stuttgarter Str. 21<br />71083 Herrenberg (Böblingen)</p>
            </div>
            <div className="rounded-xl border border-blooddiamond-primary/40 bg-blooddiamond-background/70 p-4">
              <h3 className="font-semibold uppercase tracking-wide text-blooddiamond-accent">Kontakt</h3>
              <p className="mt-2">
                Telefon: <a href="tel:+491624204789" className="hover:text-blooddiamond-accent focus-visible:underline">0162 4204789</a>
                <br />E-Mail: <a href="mailto:boeblingen@blooddiamond-tattoo.de" className="hover:text-blooddiamond-accent focus-visible:underline">boeblingen@blooddiamond-tattoo.de</a>
              </p>
            </div>
            <div className="rounded-xl border border-blooddiamond-primary/40 bg-blooddiamond-background/70 p-4">
              <h3 className="font-semibold uppercase tracking-wide text-blooddiamond-accent">Öffnungszeiten</h3>
              <p className="mt-2">Montag bis Samstag, 10–18 Uhr</p>
            </div>
            <div className="rounded-xl border border-blooddiamond-primary/40 bg-blooddiamond-background/70 p-4">
              <h3 className="font-semibold uppercase tracking-wide text-blooddiamond-accent">Inhaber</h3>
              <p className="mt-2">Kevin Kaiser</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blooddiamond-background pt-2 md:pt-3 pb-4 md:pb-6">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="font-display text-3xl uppercase text-blooddiamond-accent">Hier finden Sie uns</h2>
          <p className="mt-3 text-sm text-blooddiamond-text/80">
            Der Standort von Blood Diamond Tattoo Ink. in Böblingen / Herrenberg ist zentral gelegen und über die A81 und B14 optimal erreichbar. Nutzen Sie die Karte, um Ihre Route zu planen.
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

      <OtherLocations current="boeblingen" />

      <section className="bg-blooddiamond-muted/20 pt-8 md:pt-10 pb-8 md:pb-10">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="font-display text-3xl uppercase text-blooddiamond-accent">Unser Studio</h2>
          <div className="mt-8">
            <StudioGallery captions={[...studioCaptions]} />
          </div>
        </div>
      </section>

      <section className="bg-blooddiamond-background pt-2 md:pt-3 pb-4 md:pb-6">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="font-display text-3xl uppercase text-blooddiamond-accent">Unser Team</h2>
          <div id="team-gallery" className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="relative w-full aspect-[4/3] rounded-2xl border border-blooddiamond-primary/40 bg-blooddiamond-muted/30 p-2">
              <Image
                src="/Team1.jpeg"
                alt="Team von Blood Diamond Tattoo Ink. in Böblingen"
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
              Das Team von <strong>Blood Diamond Tattoo Ink. Studios</strong> wurde auf Tattoo-Conventions in
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

      <section className="py-4 sm:py-5 bg-transparent">
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

      <section className="bg-blooddiamond-muted/30 pt-4 sm:pt-5 pb-6 sm:pb-8">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="font-display text-3xl uppercase text-blooddiamond-accent">Studio Highlights – Tattoo Böblingen</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-blooddiamond-primary/40 bg-blooddiamond-background/80 p-6">
              <h3 className="text-lg font-semibold text-white">Individuelles Design</h3>
              <p className="mt-3 text-sm text-blooddiamond-text/70">
                In persönlichen Design-Sessions entstehen maßgeschneiderte Motive von
                Fineline über Realistic bis Cover-Up, präzise abgestimmt auf deine
                Ideen und den Stil von Blood Diamond Tattoo Ink. Böblingen.
              </p>
            </div>
            <div className="rounded-2xl border border-blooddiamond-primary/40 bg-blooddiamond-background/80 p-6">
              <h3 className="text-lg font-semibold text-white">Premium Hygiene</h3>
              <p className="mt-3 text-sm text-blooddiamond-text/70">
                Sterile Arbeitsplätze, UV-Desinfektion und medizinische
                Aftercare-Produkte sichern höchste Hygiene- und
                Sicherheitsstandards im Tattoo-Studio Böblingen.
              </p>
            </div>
            <div className="rounded-2xl border border-blooddiamond-primary/40 bg-blooddiamond-background/80 p-6">
              <h3 className="text-lg font-semibold text-white">Ganzheitliche Betreuung</h3>
              <p className="mt-3 text-sm text-blooddiamond-text/70">
                Von der individuellen Beratung bis zur Nachsorge begleiten wir jeden
                Tattoo-Prozess mit digitalem Check-in, klarer Planung und präziser
                Nachpflege für dauerhaft brillante Ergebnisse.
              </p>
            </div>
            <div className="rounded-2xl border border-blooddiamond-primary/40 bg-blooddiamond-background/80 p-6">
              <h3 className="text-lg font-semibold text-white">Regionale Verankerung</h3>
              <p className="mt-3 text-sm text-blooddiamond-text/70">
                Blood Diamond Tattoo Ink. ist im Südwesten Deutschlands fest
                verwurzelt. Die Studios in Böblingen, Pforzheim und Heilbronn
                stehen für Weltklassequalität, Verlässlichkeit und die gemeinsame
                Leidenschaft für moderne Tattoo-Kunst. Alle Tattoos entstehen nach
                fester Terminvereinbarung.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactNotice />

      <Script id="website-searchaction-bb" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          url: "https://blooddiamond-tattoo.de/",
          name: "Blood Diamond Tattoo Ink.",
          potentialAction: {
            "@type": "SearchAction",
            target:
              "https://www.google.com/search?q=site:blooddiamond-tattoo.de+{search_term_string}",
            "query-input": "required name=search_term_string",
          },
        })}
      </Script>
      <Script id="localbusiness-boeblingen" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TattooParlor",
          name: "Blood Diamond Tattoo Ink. Böblingen",
          image: "https://blooddiamond-tattoo.de/static/boeblingen-cover.jpg",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Stuttgarter Str. 21",
            postalCode: "71083",
            addressLocality: "Herrenberg",
            addressRegion: "Baden-Württemberg",
            addressCountry: "DE",
          },
          telephone: "+49 162 4204789",
          email: "boeblingen@blooddiamond-tattoo.de",
          url: "https://blooddiamond-tattoo.de/boeblingen",
          openingHours: "Mo-Sa 10:00-18:00",
          priceRange: "$$",
          founder: "Kevin Kaiser",
          areaServed: [
            "Böblingen",
            "Herrenberg",
            "Sindelfingen",
            "Region Stuttgart",
          ],
        })}
      </Script>
    </>
  );
}
