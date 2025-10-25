import { useEffect, useRef, type ReactNode } from "react";
import Link from "next/link";
import ReviewsStrip from "@/components/ReviewsStrip";

let safeAreaProbe: HTMLDivElement | null = null;

function readSafeAreaInsetBottom(): number {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return 0;
  }

  const docStyle = getComputedStyle(document.documentElement);
  const rawEnv = docStyle.getPropertyValue("env(safe-area-inset-bottom)").trim();
  if (rawEnv && rawEnv.endsWith("px")) {
    const parsed = Number(rawEnv.slice(0, -2));
    if (Number.isFinite(parsed)) {
      return parsed;
    }
  }

  if (!safeAreaProbe) {
    safeAreaProbe = document.createElement("div");
    safeAreaProbe.style.cssText =
      "position:fixed; bottom:0; left:0; width:0; height:env(safe-area-inset-bottom); height:constant(safe-area-inset-bottom); pointer-events:none; opacity:0; z-index:-1;";
    document.body.appendChild(safeAreaProbe);
  }

  const computed = window.getComputedStyle(safeAreaProbe);
  const raw = computed.height.trim();
  const parsed = Number(raw.replace("px", ""));
  return Number.isFinite(parsed) ? parsed : 0;
}

function computeCtaBottom(): string {
  const vh = typeof window !== "undefined" ? Math.max(window.innerHeight, 1) : 1;
  const vw = typeof window !== "undefined" ? Math.max(window.innerWidth, 1) : 1;
  const ar = vw / vh;

  const safe = readSafeAreaInsetBottom();

  let percent: number;
  if (ar < 0.55) {
    percent = 16;
  } else if (ar < 0.7) {
    percent = 14;
  } else if (ar < 0.85) {
    percent = 12;
  } else {
    percent = 10;
  }

  if (vh < 640) percent += 2;

  percent = Math.max(8, Math.min(percent, 18));

  const pxExtra = Math.min(16, safe || 8);

  return `calc(${percent}vh + ${pxExtra}px)`;
}

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
  const heroRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = heroRef.current ?? document.documentElement;

    if (city === "home") {
      el?.style.removeProperty("--cta-bottom");
      return;
    }

    if (!el || typeof window === "undefined") {
      return;
    }

    const apply = () => {
      el.style.setProperty("--cta-bottom", computeCtaBottom());
    };

    apply();
    window.addEventListener("resize", apply, { passive: true });
    window.addEventListener("orientationchange", apply);

    return () => {
      window.removeEventListener("resize", apply);
      window.removeEventListener("orientationchange", apply);
      el.style.removeProperty("--cta-bottom");
      if (safeAreaProbe && safeAreaProbe.parentNode) {
        safeAreaProbe.parentNode.removeChild(safeAreaProbe);
        safeAreaProbe = null;
      }
    };
  }, [city]);

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

  const hasPrimaryCta = Boolean(ctaLabel && ctaHref);
  const hasSecondaryCta = Boolean(secondaryCtaLabel && secondaryCtaHref);

  const renderButtonBlock = () => {
    if (hasPrimaryCta) {
      return (
        <div
          className={
            "mt-6 flex flex-wrap justify-center gap-3 " +
            (city !== "home" ? "order-[40]" : "")
          }
        >
          <Link href={ctaHref!} className="btn-primary">
            {ctaLabel}
          </Link>
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
      );
    }

    if (hasSecondaryCta) {
      return (
        <div
          className={
            "mt-6 flex flex-wrap justify-center gap-3 " +
            (city !== "home" ? "order-[40]" : "")
          }
        >
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
        </div>
      );
    }

    return null;
  };

  return (
    <section
      ref={heroRef}
      className="hero-section relative isolation-isolate flex items-center justify-center overflow-hidden text-white md:bg-none"
    >
      <picture className="absolute inset-0 md:hidden pointer-events-none" aria-hidden="true">
        <source srcSet="/herobackground3.webp?v=pfz" type="image/webp" />
        <img
          src="/herobackground3.webp?v=pfz"
          alt=""
          className="h-full w-full object-contain md:object-cover object-center"
          decoding="async"
          loading="eager"
        />
      </picture>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-3xl flex-col justify-start px-6 pb-0 pt-4 text-center md:min-h-0 md:justify-center md:py-32">
        <div className="space-y-3">
          {/* Kicker */}
          <p
            className="inline-block md:hidden text-sm uppercase tracking-widest text-blooddiamond-accent px-2 py-1 rounded-md order-[30]"
            style={{ backgroundColor: "rgba(0,0,0,0.65)" }}
          >
            Blood Diamond Tattoo Ink.
          </p>
          <p className="hidden md:inline-block text-sm uppercase tracking-widest text-blooddiamond-accent order-[30]" style={kickerDesktopStyle}>
            Blood Diamond Tattoo Ink.
          </p>
          
          {/* Title */}
          <h1 className="block md:hidden text-3xl font-extrabold tracking-tight md:text-5xl">{title}</h1>
          <h1 className="hidden md:inline-block text-3xl font-extrabold tracking-tight md:text-5xl" style={desktopStyle}>{title}</h1>

          {hasPrimaryCta || hasSecondaryCta ? (
            <>
              <div className="hidden md:block">{renderButtonBlock()}</div>
              <div
                className={
                  "md:hidden absolute left-1/2 -translate-x-1/2 flex flex-col gap-3 w-[90%] max-w-sm text-center z-20 " +
                  (city === "home"
                    ? "bottom-[max(1rem,env(safe-area-inset-bottom))]"
                    : "bottom-[var(--cta-bottom,12%)]")
                }
              >
                {renderButtonBlock()}
              </div>
            </>
          ) : null}

          {/* Desktop description (styled) */}
          <p className="hidden md:block mx-auto max-w-2xl" style={desktopStyle}>{description}</p>

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

      {/* Rezensionen unten im Bild (mobil + desktop) */}
      <div className="absolute inset-x-0 bottom-0 z-10 px-4 pb-4 md:px-6 md:pb-6">
        {city === "home" ? (
          <div className="hidden md:block">
            <ReviewsStrip variant="home" />
          </div>
        ) : (
          <div className="hidden md:block">
            <ReviewsStrip variant={city} />
          </div>
        )}
        {/* mobil */}
        {city === "home" ? (
          <div className="md:hidden">
            <ReviewsStrip variant="home" />
          </div>
        ) : (
          <div className="md:hidden">
            <ReviewsStrip variant={city} />
          </div>
        )}
      </div>
    </section>
  );
}
