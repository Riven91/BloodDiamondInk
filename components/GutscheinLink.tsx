"use client";

import { usePathname } from "next/navigation";

export function GutscheinLink() {
  const pathname = usePathname();
  const city = pathname?.split("/").filter(Boolean)[0]?.toLowerCase() ?? "";

  return (
    <section className="bg-blooddiamond-dark py-8 text-center">
      <div className="mx-auto max-w-5xl px-6">
        {/* Gutschein-Block – ersetzt bestehenden Inhalt, kein neuer Container */}
        {(city !== "pforzheim" && city !== "heilbronn" && city !== "boeblingen") && (
          <div className="flex flex-col items-center justify-center text-center text-white py-12 px-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-6">
              Pforzheim & Heilbronn: Wir verschenken 500 Gutscheine á 100 €!
            </h1>

            <a
              href="https://kontakt.blooddiamond-tattoo.de/gutschein/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-2 text-sm font-semibold text-black transition hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
              aria-label="Gutschein sichern"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                <path d="M20 7h-2.18A3.001 3.001 0 0 0 15 4c-1.66 0-3 1.34-3 3 0-1.66-1.34-3-3-3a3.001 3.001 0 0 0-2.82 3H4c-1.1 0-2 .9-2 2v2c0 .55.45 1 1 1h1v7c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-7h1c.55 0 1-.45 1-1V9c0-1.1-.9-2-2-2Zm-5-1c.55 0 1 .45 1 1s-.45 1-1 1h-2V7c0-.55.45-1 1-1Zm-6 0c.55 0 1 .45 1 1v1H8c-.55 0-1-.45-1-1s.45-1 1-1Zm-3 6h5v7H6v-7Zm7 7v-7h5v7h-5Zm7-9H4V9h16v1Z" />
              </svg>
              <span>Gutschein sichern</span>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
