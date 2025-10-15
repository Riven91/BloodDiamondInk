import Link from "next/link";

import { Hero } from "@/components/Hero";
import { Seo } from "@/components/Seo";

const whatsappLink = "https://wa.me/4900000000000";
const mailLink = "mailto:partners@blooddiamondink.example";

export default function NetzwerkPage() {
  return (
    <>
      <Seo
        title="Studio Netzwerk | Blood Diamond Ink"
        description="Werde Teil des Blood Diamond Ink Netzwerks für neue Studio-Standorte und kollaborative Pop-up-Formate."
      />
      <Hero
        title="Studio Netzwerk"
        subtitle="Wir erweitern unser Studio-Netzwerk in Baden-Württemberg und suchen Betreiber:innen mit Tattoo-Leidenschaft, die unsere Qualitätsstandards teilen."
        ctaLabel="Kontakt aufnehmen"
        ctaHref={whatsappLink}
        backgroundImage="/og/og-pforzheim.jpg"
      />
      <section className="mx-auto max-w-5xl space-y-8 px-6 py-16">
        <h2 className="font-display text-3xl uppercase text-blooddiamond-accent">Was wir bieten</h2>
        <ul className="grid gap-6 md:grid-cols-2">
          {[
            "Erprobte Abläufe für Beratung, Terminplanung und sterile Studioarbeit",
            "Marketingpakete inklusive Contentproduktion, Paid Ads und Local SEO",
            "Weiterbildung mit internationalen Guest Artists und Hygieneschulungen",
            "Support bei Standortanalyse, Interior-Konzept und Team-Recruiting",
          ].map((benefit) => (
            <li
              key={benefit}
              className="rounded-xl border border-blooddiamond-primary/30 bg-blooddiamond-muted/60 p-6 text-sm text-blooddiamond-text/70"
            >
              {benefit}
            </li>
          ))}
        </ul>
        <div className="rounded-xl border border-blooddiamond-primary/30 bg-blooddiamond-muted/60 p-6 text-sm text-blooddiamond-text/70">
          <h3 className="font-display text-2xl uppercase text-blooddiamond-text">So funktioniert die Zusammenarbeit</h3>
          <p className="mt-2">
            Erzähle uns von deiner Location-Idee oder deinem bestehenden Studio. Wir prüfen Marktpotenziale, planen die Implementierung unseres Qualitäts-Playbooks und begleiten dich bis zum Opening.
          </p>
          <div className="mt-4 flex flex-wrap gap-4">
            <Link href={whatsappLink} className="btn-primary text-xs">
              WhatsApp Austausch starten
            </Link>
            <Link
              href={mailLink}
              className="inline-flex items-center justify-center rounded-md border border-blooddiamond-accent px-5 py-3 text-xs font-semibold uppercase tracking-widest text-blooddiamond-accent transition-colors hover:bg-blooddiamond-accent/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-ring focus-visible:ring-offset-2 focus-visible:ring-offset-blooddiamond-background"
            >
              E-Mail senden
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
