"use client";

import { useEffect, useRef, type ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import ReviewsStrip from "@/components/ReviewsStrip";
import { StickyMobileCta } from "@/components/StickyMobileCta";

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
  description = "Top-Künstler aus aller Welt – mehrfach mit der \"Goldenen Nadel\" ausgezeichnet. Realistic, Fineline, Cover-Up & Black & Grey (Black and Grey). Studios in Pforzheim (Ötisheim), Heilbronn (Neckarsulm) & Böblingen (Herrenberg).",
  ctaLabel,
  ctaHref,
  secondaryCtaLabel,
  secondaryCtaHref,
  city,
}: HeroProps) {

  if (!city) {
    console.warn("Hero city prop missing – rendering disabled");
    return null;
  }

  const isWhatsAppCta =
    typeof secondaryCtaLabel === "string" && secondaryCtaLabel.toLowerCase().includes("whatsapp");

  const secondaryCtaClassName = isWhatsAppCta
    ? "inline-flex items-center gap-2 rounded-2xl bg-brand px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-ring"
    : "rounded-2xl border px-5 py-3 hover:bg-gray-50";

  const kickerDesktopStyle = {
    backgroundColor: 'rgba(0,0,0,0.55)',
    padding: '0.5rem 0.75rem',
    borderRadius: '6px',
  };

  const hasPrimaryCta = Boolean(ctaLabel && ctaHref);
  const hasSecondaryCta = Boolean(secondaryCtaLabel && secondaryCtaHref);

  const renderButtons = () => (
    <>
      {hasPrimaryCta ? (
        <Link href={ctaHref!} className="btn-primary">
          {ctaLabel}
        </Link>
      ) : null}
      {hasSecondaryCta ? (
        <Link
          href={secondaryCtaHref!}
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
    </>
  );

  // TODO: optionally reduce diamond glow intensity by ~15% later if required.
  return (
    <section
      className="hero-section relative isolation-isolate flex items-center justify-center overflow-hidden text-white md:bg-none"
    >
      {/* Mobile Hero (unter 768px): einziges Bild */}
      <div className="pointer-events-none absolute inset-0 md:hidden">
        <div className="relative h-[100svh] w-full">
          <Image
            src="/herobackground3.webp?v=pfz"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-[50%_35%]"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-3xl flex-col justify-start px-6 pb-0 pt-4 text-center md:min-h-0 md:justify-center md:py-32">
        <div className="space-y-3">
          {/* Kicker */}
          {/* protected: keep black background on brand badge */}
          <p
            className="hero-brand-badge inline-block md:hidden text-sm uppercase tracking-widest text-blooddiamond-accent px-2 py-1 rounded-md order-[30]"
            style={{ backgroundColor: "rgba(0,0,0,0.65)" }}
          >
            Blood Diamond Tattoo Ink.
          </p>
          <p
            className="hero-brand-badge hidden md:inline-block text-sm uppercase tracking-widest text-blooddiamond-accent order-[30]"
            style={kickerDesktopStyle}
          >
            Blood Diamond Tattoo Ink.
          </p>
          
          {/* Title */}
          <h1 className="block md:hidden text-3xl font-extrabold tracking-tight md:text-5xl">{title}</h1>
          <h1 className="hidden md:inline-block text-3xl font-extrabold tracking-tight md:text-5xl">{title}</h1>

          {hasPrimaryCta || hasSecondaryCta ? (
            <div
              className={[
                "mt-4 md:mt-6 hidden md:flex flex-wrap justify-center gap-3",
                city !== "home" ? "order-[40]" : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {renderButtons()}
            </div>
          ) : null}

          {/* Desktop description (styled) */}
          <p className="hidden md:block mx-auto max-w-2xl">{description}</p>

          {/* MOBILE: Fließtext fest über dem Diamanten */}
          <p
            className="
              md:hidden
              absolute left-1/2 top-[52%] 
              -translate-x-1/2 -translate-y-1/2
              z-10 w-[88%] max-w-md
              text-center text-white leading-snug
            "
          >
            {description}
          </p>
        </div>

      </div>

      {/* === CONDITIONAL GOOGLE BADGE AREA === */}
      {city === "home" ? (
        <>
          {/* === BEGIN BLOOD DIAMOND GOOGLE TRUST BADGE (HOME) === */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 text-white text-center drop-shadow-md pointer-events-auto">
            <div className="flex flex-col items-center gap-2">

              {/* Text Block */}
              <div>
                <div className="text-sm md:text-base font-semibold tracking-wide underline">
                  Blood Diamond Tattoo Ink. Studios
                </div>
                <div className="text-xs opacity-90">
                  in Pforzheim, Heilbronn & Böblingen
                </div>
              </div>

              {/* Logo + Stars Row */}
              <div className="flex items-center justify-center" style={{ gap: '8px' }}>
                <Image
                  src="/Google__G__logo.svg.png"
                  alt="Google Logo"
                  width={32}
                  height={32}
                  className="w-7 h-7 md:w-8 md:h-8"
                />
                <div style={{ color: '#FFD700', fontSize: '18px', letterSpacing: '3px' }} aria-label="5 von 5 Sternen">
                  ★★★★★
                </div>
              </div>

            </div>
          </div>
          {/* === END BLOOD DIAMOND GOOGLE TRUST BADGE (HOME) === */}
        </>
      ) : (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center justify-center space-x-4 md:space-x-8">
          <ReviewsStrip variant={city} />
        </div>
      )}
      {/* === END CONDITIONAL GOOGLE BADGE AREA === */}

      {/* === GLOBAL MOBILE STICKY CTA (Home & Standorte) === */}
      {hasPrimaryCta || hasSecondaryCta ? (
        <StickyMobileCta
          bookingHref={hasPrimaryCta ? ctaHref : undefined}
          bookingLabel={hasPrimaryCta ? ctaLabel : undefined}
          bookingAriaLabel={hasPrimaryCta ? "Termin buchen" : undefined}
          bookingClassName="btn-primary"
          whatsappHref={hasSecondaryCta ? secondaryCtaHref : undefined}
          whatsappLabel={hasSecondaryCta ? secondaryCtaLabel : undefined}
          whatsappAriaLabel={isWhatsAppCta ? "WhatsApp chat öffnen" : undefined}
          whatsappClassName={hasSecondaryCta ? secondaryCtaClassName : undefined}
        />
      ) : null}
    </section>
  );
}

/* Entfernt: alte, inline definierte MobileCta – jetzt vollständig durch StickyMobileCta ersetzt */
