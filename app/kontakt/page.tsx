import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Seo } from "@/components/Seo";

export default function KontaktPage() {
  return (
    <>
      <Seo
        title="Kontakt | Blood Diamond Ink"
        description="Kontaktiere das Blood Diamond Ink Team für Termine, Anfragen und Kooperationen."
      />
      <Hero
        title="Kontakt"
        subtitle="Sag uns, welche Tattoo-Idee dich begeistert. Unser Team meldet sich persönlich mit Terminoptionen und Beratung."
        ctaLabel="WhatsApp öffnen"
        ctaHref="https://wa.me/4900000000000"
        backgroundImage="/og/og-pforzheim.jpg"
      />
      <section className="mx-auto max-w-5xl space-y-10 px-6 py-16 text-sm text-blooddiamond-text/70">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-blooddiamond-primary/30 bg-blooddiamond-muted/60 p-6">
            <h2 className="font-display text-2xl uppercase text-blooddiamond-accent">Studios</h2>
            <p className="mt-2">
              Adresse folgt für Pforzheim, Heilbronn und Böblingen. Termine erfolgen ausschließlich nach bestätigter Buchung.
            </p>
          </div>
          <div className="rounded-xl border border-blooddiamond-primary/30 bg-blooddiamond-muted/60 p-6">
            <h2 className="font-display text-2xl uppercase text-blooddiamond-accent">Kontaktkanäle</h2>
            <ul className="mt-2 space-y-2">
              <li>
                <Link href="mailto:hello@blooddiamondink.example" className="hover:text-blooddiamond-accent">
                  hello@blooddiamondink.example
                </Link>
              </li>
              <li>
                <Link href="https://wa.me/4900000000000" className="hover:text-blooddiamond-accent">
                  WhatsApp Chat starten
                </Link>
              </li>
              <li>
                <Link href="https://www.instagram.com" className="hover:text-blooddiamond-accent">
                  Instagram DMs
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="rounded-xl border border-blooddiamond-primary/30 bg-blooddiamond-muted/60 p-6">
          <h2 className="font-display text-2xl uppercase text-blooddiamond-accent">Kooperationen</h2>
          <p className="mt-2">
            Du planst ein Event, Pop-up oder eine Zusammenarbeit? Schreib uns mit deiner Idee und wir stimmen die Details gemeinsam ab.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-blooddiamond-primary/30 bg-blooddiamond-muted/60 p-6">
            <h2 className="font-display text-2xl uppercase text-blooddiamond-accent">Impressum</h2>
            <p className="mt-2">Blood Diamond Ink GmbH (Gründung in Vorbereitung)</p>
            <p className="text-xs text-blooddiamond-text/60">Geschäftsadresse folgt · Geschäftsführer:innen werden ergänzt</p>
            <p className="mt-3">E-Mail: hello@blooddiamondink.example</p>
            <p>Telefon: +49 711 000000</p>
          </div>
          <div className="rounded-xl border border-blooddiamond-primary/30 bg-blooddiamond-muted/60 p-6">
            <h2 className="font-display text-2xl uppercase text-blooddiamond-accent">Datenschutz</h2>
            <p className="mt-2">
              Wir verarbeiten deine Angaben ausschließlich zur Terminabstimmung und Franchise-Kommunikation. Detaillierte Informationen folgen in unserer Datenschutzerklärung.
            </p>
            <p className="mt-3 text-xs text-blooddiamond-text/60">Hinweis: Rechtstexte werden durch unsere Kanzlei ergänzt.</p>
          </div>
        </div>
      </section>
    </>
  );
}
