
import Link from "next/link";

export function GutscheinLink() {
  return (
    <section className="bg-blooddiamond-dark py-8 text-center">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-2xl font-semibold uppercase tracking-wide text-white">
          Auf der Suche nach dem perfekten Geschenk?
        </h2>
        <p className="mt-2 text-neutral-300">
          Überrasche deine Liebsten mit einem Tattoo-Gutschein von Blood Diamond Ink.
        </p>
        <a
          href="https://kontakt.blooddiamond-tattoo.de/gutschein/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block rounded-md bg-blooddiamond-accent px-8 py-3 text-lg font-bold text-white transition-colors hover:bg-blooddiamond-accent/90"
        >
          Jetzt Gutschein kaufen
        </a>
      </div>
    </section>
  );
}
