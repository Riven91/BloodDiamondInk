import Image from "next/image";
import Link from "next/link";

interface HeroProps {
  title: string;
  subtitle: string;
  ctaLabel?: string;
  ctaHref?: string;
  backgroundImage?: string;
  videoSrc?: string;
  videoPoster?: string;
}

export function Hero({
  title,
  subtitle,
  ctaLabel,
  ctaHref,
  backgroundImage = "/og/og-pforzheim.jpg",
  videoSrc,
  videoPoster,
}: HeroProps) {
  const hasVideo = Boolean(videoSrc);
  const poster = videoPoster ?? backgroundImage;

  return (
    <section className="relative overflow-hidden border-b border-blooddiamond-primary/40">
      <div className="absolute inset-0">
        {hasVideo ? (
          <video
            className="h-full w-full object-cover object-center opacity-40"
            autoPlay
            loop
            muted
            playsInline
            poster={poster}
            aria-hidden="true"
          >
            <source src={videoSrc!} type="video/mp4" />
          </video>
        ) : (
          <Image
            src={backgroundImage}
            alt="Tattoo Artist bei der Arbeit"
            fill
            priority={!hasVideo}
            className="object-cover object-center opacity-30"
            sizes="100vw"
          />
        )}
        <div
          className="absolute inset-0 bg-gradient-to-b from-blooddiamond-background via-blooddiamond-background/90 to-blooddiamond-background"
          aria-hidden="true"
        />
      </div>
      <div className="relative mx-auto flex max-w-6xl flex-col gap-6 px-6 py-24 text-left sm:py-32">
        <span className="font-display text-sm uppercase tracking-[0.5em] text-blooddiamond-accent">Blood Diamond Ink</span>
        <h1 className="font-display text-5xl uppercase sm:text-6xl md:text-7xl">{title}</h1>
        <p className="max-w-2xl text-lg text-blooddiamond-text/80">{subtitle}</p>
        {ctaLabel && ctaHref ? (
          <Link href={ctaHref} className="btn-primary">
            {ctaLabel}
          </Link>
        ) : null}
      </div>
    </section>
  );
}
