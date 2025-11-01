import Image from "next/image";

export function AwardsSection() {
  return (
    <section className="py-8 sm:py-12 bg-black/20">
      <h2 className="text-center text-emerald-500 text-2xl sm:text-3xl font-semibold mb-8">
        Erfolge & Teamgeist
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto px-4">
        {/* Teamfoto */}
        <div className="relative h-[420px] sm:h-[480px] overflow-hidden rounded-xl bg-black/30 shadow-lg shadow-black/40 flex items-center justify-center">
          <Image
            src="/Team1.jpeg"
            alt="Blood Diamond Ink. – Teamfoto"
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
            alt="Blood Diamond Ink. – Awards und Pokale"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={false}
          />
        </div>
      </div>

      <section className="text-center max-w-2xl mx-auto mt-6 text-gray-200">
        <h3 className="text-lg font-semibold mb-3">Gemeinsam stark.</h3>
        <p className="text-sm leading-relaxed">
          Das Team von <strong>Blood Diamond Tattoo Ink. Studios</strong> wurde auf Tattoo-Conventions in
          <strong> Stuttgart</strong> und <strong> Rastatt</strong> ausgezeichnet, darunter in den Kategorien
          <em> „Best of Show“</em>, <em>„Best of Color“</em> und <em>„Best of Blackwork“</em>.
        </p>
        <p className="text-sm leading-relaxed mt-2">
          <strong>Diese Erfolge stehen für das, was uns antreibt: Leidenschaft, Präzision und Hingabe zu Tattoo Art.</strong>
        </p>
        <p className="text-sm leading-relaxed mt-2">
          Unsere Künstler bringen diese Erfahrung in jedes Studio ein, in <strong>Pforzheim</strong>, <strong>Heilbronn</strong> und <strong>Böblingen</strong>.
        </p>
      </section>
    </section>
  );
}
