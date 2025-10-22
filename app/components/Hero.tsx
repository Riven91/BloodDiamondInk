
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section
      id="hero"
      className="hero-section bg-hero-mobile bg-cover bg-center md:bg-none"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-16 sm:flex-row sm:items-center sm:gap-10">
        <div className="relative h-20 w-48 sm:h-24 sm:w-60">
          <Image
            src="/brand/logo-diamond-transparent.webp"
            alt="Blood Diamond Tattoo Ink – Logo"
            fill
            className="object-contain logo-safe"
            priority
          />
        </div>
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl">
            Tattoo Studio in Baden-Württemberg – Blood Diamond Ink
          </h1>
          <p className="mt-2 text-sm uppercase tracking-widest text-gray-600">
            Realistic, Fineline, Cover-Up & Black-and-Grey in Ötisheim/Pforzheim, Heilbronn (Neckarsulm) & Böblingen (Herrenberg).
          </p>
          <p className="mt-3 max-w-2xl text-gray-700">
            Preisgekrönte Artists, saubere Beratung – vom ersten Scribble bis zur perfekten Heilung.
          </p>
          <div className="mt-6 flex gap-3">
            <Link href="/booking" className="btn-primary">
              Termin buchen
            </Link>
            <Link href="/standorte" className="rounded-2xl border px-5 py-3 hover:bg-gray-50">
              Standorte
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
