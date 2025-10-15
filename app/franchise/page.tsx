import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Seo } from "@/components/Seo";

const whatsappLink = "https://wa.me/4900000000000";
const mailLink = "mailto:franchise@blooddiamondink.example";

export default function FranchisePage() {
  return (
    <>
      <Seo
        title="Franchise | Blood Diamond Ink"
        description="Starte dein eigenes Blood Diamond Ink Tattoo Studio mit unserem Franchise-System."
      />
      <Hero
        title="Franchise Partnerschaft"
        subtitle="Wir suchen unternehmerische Köpfe, die unsere Tattoo-Expertise in neue Städte bringen. Hol dir unser Playbook für Aufbau, Recruiting und Marketing."
        ctaLabel="Franchise anfragen"
        ctaHref={whatsappLink}
        backgroundImage="/og/og-pforzheim.jpg"
      />
      <section className="mx-auto max-w-5xl space-y-8 px-6 py-16">
        <h2 className="font-display text-3xl uppercase text-blooddiamond-accent">Warum Blood Diamond Ink?</h2>
        <ul className="grid gap-6 md:grid-cols-2">
          {[
            "Eingespielte Prozesse für Beratung, Design und sterile Abläufe",
            "Marketingpakete inklusive Social Content, Paid Ads und Pressearbeit",
            "Artist-Weiterbildung mit internationalen Gästen",
            "Support bei Standortwahl, Interior-Konzept und Pre-Opening"
          ].map((benefit) => (
            <li key={benefit} className="rounded-xl border border-blooddiamond-primary/30 bg-blooddiamond-muted/60 p-6 text-sm text-blooddiamond-text/70">
              {benefit}
            </li>
          ))}
        </ul>
        <div className="rounded-xl border border-blooddiamond-primary/30 bg-blooddiamond-muted/60 p-6 text-sm text-blooddiamond-text/70">
          <h3 className="font-display text-2xl uppercase text-blooddiamond-text">So startest du</h3>
          <p className="mt-2">
            Fülle unser kurzes Franchise-Formular aus (folgt) oder melde dich direkt per WhatsApp. Wir planen anschließend ein digitales Kennenlernen und senden dir unser Infopaket.
          </p>
          <div className="mt-4 flex flex-wrap gap-4">
            <Link
              href={whatsappLink}
              className="rounded-md bg-blooddiamond-primary px-5 py-3 text-xs font-semibold uppercase tracking-widest text-blooddiamond-text transition hover:bg-blooddiamond-accent/90"
            >
              WhatsApp Kontakt
            </Link>
            <Link
              href={mailLink}
              className="rounded-md border border-blooddiamond-accent px-5 py-3 text-xs font-semibold uppercase tracking-widest text-blooddiamond-accent transition hover:bg-blooddiamond-accent/10"
            >
              E-Mail senden
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
