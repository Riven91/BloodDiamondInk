import type { ReactNode } from "react";
import Link from "next/link";

interface HeroProps {
  title?: ReactNode;
  description?: ReactNode;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
}

export function Hero({
  title = "Tattoo Studios in Baden-Württemberg – Blood Diamond Tattoo Ink.",
  description =
    "Top-Künstler aus aller Welt – mehrfach mit der \"Goldenen Nadel\" ausgezeichnet. Realistic, Fineline, Cover-Up & Black-and-grey. Studios in Pforzheim (Ötisheim), Heilbronn (Neckarsulm) & Böblingen (Herrenberg).",
  ctaLabel,
  ctaHref,
  secondaryCtaLabel,
  secondaryCtaHref,
}: HeroProps) {
  const isWhatsAppCta =
    typeof secondaryCtaLabel === "string" && secondaryCtaLabel.toLowerCase().includes("whatsapp");

  const secondaryCtaClassName = isWhatsAppCta
    ? "inline-flex items-center gap-2 rounded-2xl bg-brand px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-ring"
    : "rounded-2xl border px-5 py-3 hover:bg-gray-50";

  return (
    <section className="hero-section relative flex items-center justify-center overflow-hidden text-white md:bg-none">
      <picture className="absolute inset-0 md:hidden pointer-events-none" aria-hidden="true">
        <source srcSet="/herobackground3.webp?v=pfz" type="image/webp" />
        <img src="/herobackground3.webp?v=pfz" alt="" className="h-full w-full object-cover" />
      </picture>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[100dvh] max-w-3xl flex-col justify-start px-6 pb-0 pt-4 text-center sm:min-h-0 sm:justify-center sm:py-32">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-widest text-blooddiamond-accent">
            Blood Diamond Tattoo Ink.
          </p>
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl">{title}</h1>
          <p className="mx-auto max-w-2xl text-white/90">{description}</p>
        </div>

        {ctaLabel && ctaHref ? (
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href={ctaHref} className="btn-primary">
              {ctaLabel}
            </Link>
            {secondaryCtaLabel && secondaryCtaHref ? (
              <Link
                href={secondaryCtaHref}
                className={secondaryCtaClassName}
                aria-label={isWhatsAppCta ? "WhatsApp chat öffnen" : undefined}
              >
                {isWhatsAppCta ? (
                  <>
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      className="h-5 w-5 fill-current"
                      viewBox="0 0 32 32"
                    >
                      <path d="M16 3C9.373 3 4 8.373 4 15c0 2.554.815 4.919 2.207 6.864L4.52 27.48a1 1 0 0 0 1.207 1.29l5.595-1.676A11.89 11.89 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3Zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10a9.9 9.9 0 0 1-3.78-.75.999.999 0 0 0-.692-.048l-4.41 1.323 1.335-4.009a1 1 0 0 0-.137-.88A9.94 9.94 0 0 1 6 15c0-5.514 4.486-10 10-10Zm-4.18 5a1 1 0 0 0-.81.396c-.476.605-1.042 1.53-1.12 2.4-.18 2.074 1.165 4.395 3.784 6.84 2.64 2.465 5.106 3.61 7.287 3.37.856-.086 1.717-.582 2.276-1.02a1 1 0 0 0 .142-1.44l-1.86-2.02a1 1 0 0 0-1.178-.233l-2.003.9a1 1 0 0 1-1.083-.178l-2.42-2.24a1 1 0 0 1-.138-1.27l.966-1.448a1 1 0 0 0-.01-1.125l-1.34-2.02A1 1 0 0 0 11.82 10Z" />
                    </svg>
                    {secondaryCtaLabel}
                  </>
                ) : (
                  secondaryCtaLabel
                )}
              </Link>
            ) : null}
          </div>
        ) : secondaryCtaLabel && secondaryCtaHref ? (
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href={secondaryCtaHref}
              className={secondaryCtaClassName}
              aria-label={isWhatsAppCta ? "WhatsApp chat öffnen" : undefined}
            >
              {isWhatsAppCta ? (
                <>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    className="h-5 w-5 fill-current"
                    viewBox="0 0 32 32"
                  >
                    <path d="M16 3C9.373 3 4 8.373 4 15c0 2.554.815 4.919 2.207 6.864L4.52 27.48a1 1 0 0 0 1.207 1.29l5.595-1.676A11.89 11.89 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3Zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10a9.9 9.9 0 0 1-3.78-.75.999.999 0 0 0-.692-.048l-4.41 1.323 1.335-4.009a1 1 0 0 0-.137-.88A9.94 9.94 0 0 1 6 15c0-5.514 4.486-10 10-10Zm-4.18 5a1 1 0 0 0-.81.396c-.476.605-1.042 1.53-1.12 2.4-.18 2.074 1.165 4.395 3.784 6.84 2.64 2.465 5.106 3.61 7.287 3.37.856-.086 1.717-.582 2.276-1.02a1 1 0 0 0 .142-1.44l-1.86-2.02a1 1 0 0 0-1.178-.233l-2.003.9a1 1 0 0 1-1.083-.178l-2.42-2.24a1 1 0 0 1-.138-1.27l.966-1.448a1 1 0 0 0-.01-1.125l-1.34-2.02A1 1 0 0 0 11.82 10Z" />
                  </svg>
                  {secondaryCtaLabel}
                </>
              ) : (
                secondaryCtaLabel
              )}
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
