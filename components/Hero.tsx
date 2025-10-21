
import Link from "next/link";

interface HeroProps {
  ctaLabel?: string;
  ctaHref?: string;
  whatsAppHref?: string;
  whatsAppLabel?: string;
}

// Cache-Buster: 17.10.2025 10:30

export function Hero({ ctaLabel, ctaHref, whatsAppHref, whatsAppLabel }: HeroProps) {
  const hasPrimaryCta = Boolean(ctaLabel && ctaHref);
  const hasWhatsAppCta = Boolean(whatsAppHref);

  return (
    <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden bg-transparent text-white">
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "url('/ChatGPT Image 20. Okt. 2025, 21_03_42.png')",
            backgroundSize: '40%',
            backgroundPosition: 'center 30px',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
          }}
        />
      </div>
      <div className="relative mx-auto max-w-3xl px-6 py-24 text-center sm:py-32">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-widest text-blooddiamond-accent">
            Blood Diamond Tattoo Ink.
          </p>
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl">
            Tattoo Studios in Baden-Württemberg – Blood Diamond Tattoo Ink.
          </h1>
          <p className="mx-auto max-w-2xl text-white/90">
            Top-Künstler aus aller Welt – mehrfach mit der „Goldenen Nadel“ ausgezeichnet. Realistic, Fineline, Cover-Up & Black-and-Grey. Studios in Pforzheim (Ötisheim), Heilbronn (Neckarsulm) & Böblingen (Herrenberg).
          </p>
        </div>
        {hasPrimaryCta || hasWhatsAppCta ? (
          <div className="mt-6 flex justify-center gap-3">
            {hasPrimaryCta ? (
              <Link href={ctaHref!} className="btn-primary">
                {ctaLabel}
              </Link>
            ) : null}
            {hasWhatsAppCta ? (
              <a
                href={whatsAppHref}
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
                <span>{whatsAppLabel ?? "WhatsApp"}</span>
              </a>
            ) : null}
          </div>
        ) : null}
      </div>
    </section>
  );
}
