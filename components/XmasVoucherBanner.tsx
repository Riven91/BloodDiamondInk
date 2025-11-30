import Image from "next/image";
import Link from "next/link";

export default function XmasVoucherBanner({ href }: { href: string }) {
  return (
    <section className="mt-10 mb-16">
      <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-black/70 p-[2px] shadow-xl">
        <div className="relative overflow-hidden rounded-[22px]">
          <Image
            src="/gut3.jpeg"
            alt="Tattoo-Gutschein Aktion von Blood Diamond Tattoo Ink im Weihnachtsdesign – Geschenke, rote Schleifen und Hinweis auf die Gutschein-Promotion"
            width={1600}
            height={1067}
            className="h-auto w-full"
            priority
          />

          <div className="pointer-events-auto absolute bottom-4 right-4">
            <Link
              href={href}
              className="rounded-full bg-yellow-400 px-6 py-2 text-sm font-semibold uppercase tracking-wide text-black shadow-lg hover:bg-yellow-300"
            >
              Jetzt Gutschein sichern
            </Link>
          </div>
        </div>
      </div>

      <p className="mt-4 text-sm text-white/90 text-center max-w-2xl mx-auto">
        Wenn du auf <strong>„Jetzt Gutschein sichern“</strong> klickst, wirst du direkt zu unserer Kontaktseite
        weitergeleitet. Dort wählst du im ersten Schritt <strong>„Ich möchte ein Tattoo“</strong> aus und
        beantwortest ein paar kurze Fragen zu deinem Motiv. Danach erhältst du automatisch Zugang zu deinem
        Gutschein. Du kannst uns alternativ jederzeit auch über Instagram, Facebook oder per WhatsApp
        kontaktieren.
      </p>
    </section>
  );
}
