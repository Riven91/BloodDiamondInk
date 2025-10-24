import Image from "next/image";
import type { ReactNode } from "react";
import Link from "next/link";
import HeroGoogleBadges from "./HeroGoogleBadges";

interface HeroProps {
  title?: ReactNode;
  description?: ReactNode;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  city?: "home" | "pforzheim" | "heilbronn" | "boeblingen";
}

export function Hero({
  title = "Tattoo Studios in Baden-Württemberg – Blood Diamond Tattoo Ink.",
  description =
    "Top-Künstler aus aller Welt – mehrfach mit der \"Goldenen Nadel\" ausgezeichnet. Realistic, Fineline, Cover-Up & Black-and-grey. Studios in Pforzheim (Ötisheim), Heilbronn (Neckarsulm) & Böblingen (Herrenberg).",
  ctaLabel,
  ctaHref,
  secondaryCtaLabel,
  secondaryCtaHref,
  city = "home",
}: HeroProps) {
  const isWhatsAppCta =
    typeof secondaryCtaLabel === "string" && secondaryCtaLabel.toLowerCase().includes("whatsapp");

  const secondaryCtaClassName = isWhatsAppCta
    ? "inline-flex items-center gap-2 rounded-2xl bg-brand px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-ring"
    : "rounded-2xl border px-5 py-3 hover:bg-gray-50";
    
  const desktopStyle = {
    backgroundColor: 'rgba(0,0,0,0.55)',
    padding: '0.5rem 0.75rem',
    borderRadius: '6px',
    color: '#FFFFFF'
  };

  const kickerDesktopStyle = {
    backgroundColor: 'rgba(0,0,0,0.55)',
    padding: '0.5rem 0.75rem',
    borderRadius: '6px',
  };

  return (
    <section className="hero-section relative min-h-[60svh] md:min-h-[70vh] pt-16 md:pt-0 pb-[calc(env(safe-area-inset-bottom)+5rem)] md:pb-0 flex items-center justify-center overflow-visible text-white">
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <picture>
          <source media="(min-width: 768px)" srcSet="/herobackground3.webp" type="image/webp" />
          <source media="(min-width: 768px)" srcSet="/herofinal.png" type="image/png" />
          <source media="(max-width: 767px)" srcSet="/herobackground3.webp" type="image/webp" />
          <source media="(max-width: 767px)" srcSet="/herofinal.png" type="image/png" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/herofinal.png"
            alt=""
            className="h-full w-full object-cover"
            decoding="async"
            loading="eager"
          />
        </picture>
      </div>

      <div className="absolute md:hidden bottom-6 right-6 pointer-events-none z-0">
        <Image
          src="/bdi-logo-transparent-600.webp"
          alt="Blood Diamond Tattoo Ink Logo"
          width={192}
          height={192}
          priority
          className="w-32 sm:w-36 opacity-100 [filter:drop-shadow(0_0_4px_rgba(255,255,255,0.55))_drop-shadow(0_0_12px_rgba(16,185,129,0.55))] brightness-110"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-3xl flex-col justify-start px-6 pb-0 pt-4 text-center md:min-h-0 md:justify-center md:py-32">
        <div className="relative flex flex-col items-center md:items-start">
          <div className="relative text-center md:text-left md:absolute md:inset-x-0 md:top-4">
            {/* Kicker */}
            <p className="block md:hidden text-sm uppercase tracking-widest text-blooddiamond-accent">
              Blood Diamond Tattoo Ink.
            </p>
            <p className="hidden md:inline-block text-sm uppercase tracking-widest text-blooddiamond-accent" style={kickerDesktopStyle}>
              Blood Diamond Tattoo Ink.
            </p>

            {/* Title */}
            <h1 className="block md:hidden text-3xl font-extrabold tracking-tight md:text-5xl">{title}</h1>
            <h1 className="hidden md:inline-block text-3xl font-extrabold tracking-tight md:text-5xl" style={desktopStyle}>{title}</h1>
          </div>

          <div className="absolute left-1/2 -translate-x-1/2 top-[48%] px-4 md:static md:translate-x-0 md:top-auto md:px-0">
            {/* Desktop description (styled) */}
            <p className="hidden md:block mx-auto max-w-2xl" style={desktopStyle}>{description}</p>

            {/* Mobile description (pre-existing style) */}
            <p
              className="block md:hidden mx-auto max-w-2xl"
              style={{
                color: '#FFFFFF',
                backgroundColor: 'rgba(0,0,0,0.7)',
                padding: '0.35rem 0.5rem',
                borderRadius: '4px',
                textShadow: '0 1px 3px rgba(0,0,0,0.6)'
              }}
            >
              {description}
            </p>
          </div>
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
                      <path d="M16 3C9.373 3 4 8.373 4 15c0 2.554.815 4.919 2.207 6.864L4.52 27.48a1 1 0 0 0 1.207 1.29l5.595-1.676A11.89 11.89 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3Zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10a9.9 9.9 0 0 1-3.78-.75.999.999 0 0 0-.692-.048l-4.41 1.323 1.335-4.009a1 1 0 0 0-.137-.88A9.94 9.94 0 0 1 6 15c0-5.514 4.486-10 10-10Zm-4.18 5a1 1 0 0 0-.81.396c-.476.605-1.042 1.53-1.12 2.4-.18 2.074 1.165 4.395 3.784 6.84 2.64 2.465 5.106 3.61 7.287 3.37.856-.086 1.717-.582 2.276-1.02a1 1 0 0 0 .142-1.44l-1.86-2.02a1 1 0 0 0-1.178-.233l-2.003.9a1 1 0 0 1-1.083-.178l-2.24-2.24a1 1 0 0 1-.138-1.27l.966-1.448a1 1 0 0 0-.01-1.125l-1.34-2.02A1 1 0 0 0 11.82 10Z" />
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
      <HeroGoogleBadges city={city} />
    </section>
  );
}
