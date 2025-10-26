import Image from "next/image";

export function AwardsSection() {
  return (
    <section className="py-10 sm:py-14 bg-black/20">
      <h2 className="text-center text-emerald-500 text-2xl sm:text-3xl font-semibold mb-8">
        Erfolge & Teamgeist
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto px-4">
        {/* Teamfoto */}
        <div className="relative h-[420px] sm:h-[480px] overflow-hidden rounded-xl bg-black/30 shadow-lg shadow-black/40 flex items-center justify-center">
          <Image
            src="/Team1.jpeg"
            alt="Blood Diamond Ink – Teamfoto"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={false}
          />
        </div>

        {/* Pokale */}
        <div className="relative h-[420px] sm:h-[480px] overflow-hidden rounded-xl bg-black/30 shadow-lg shadow-black/40 flex items-center justify-center">
          <Image
            src="/pokale.jpeg"
            alt="Blood Diamond Ink – Awards und Pokale"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={false}
          />
        </div>
      </div>

      <p className="text-center text-gray-300 text-sm sm:text-base mt-6 leading-relaxed max-w-3xl mx-auto px-4">
        Gemeinsam stark: Das Team von Blood Diamond Tattoo Ink wurde mehrfach auf nationalen Conventions ausgezeichnet – darunter „Best of Show“, „Best of Color“ und „Best of Blackwork“. Diese Auszeichnungen spiegeln unsere Leidenschaft, Präzision und Hingabe zur Tattoo-Kunst wider.
      </p>
    </section>
  );
}
