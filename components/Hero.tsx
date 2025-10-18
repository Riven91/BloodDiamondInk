
import Image from "next/image";
import Link from "next/link";

interface HeroProps {
  ctaLabel?: string;
  ctaHref?: string;
}

// Cache-Buster: 16.10.2025 20:38

export function Hero({ ctaLabel, ctaHref }: HeroProps) {
  return (
    <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden bg-blooddiamond-background text-white">
      <div className="absolute inset-0 z-0">
        <Image
          src="/backgrounds/hero-bg-1.jpg"
          alt="Tattoo Artist bei der Arbeit"
          fill
          className="object-cover object-center opacity-10"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blooddiamond-background via-blooddiamond-background/80 to-transparent" />
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
        {ctaLabel && ctaHref ? (
          <div className="mt-6 flex justify-center gap-3">
            <Link href={ctaHref} className="btn-primary">
              {ctaLabel}
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
