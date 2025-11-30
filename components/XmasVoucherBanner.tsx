// components/XmasVoucherBanner.tsx
import Image from "next/image";
import Link from "next/link";

export default function XmasVoucherBanner() {
  return (
    <section className="mt-10 mb-16">
      <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-black/70 p-[2px] shadow-xl">
        <div className="relative overflow-hidden rounded-[22px]">
          <Image
            src="/winter/gutscheinaktion-wide.jpg"
            alt="Gutschein Aktion bei Blood Diamond Tattoo Ink: Zahle 100 € erhalte 150 €, Zahle 250 € erhalte 300 €, Zahle 450 € erhalte 600 €."
            width={1600}
            height={1067}
            className="h-auto w-full"
            priority
          />

          {/* Kleiner Call-to-Action Button auf dem Banner */}
          <div className="pointer-events-auto absolute bottom-4 right-4">
            <Link
              href="https://kontakt.blooddiamond-tattoo.de"
              className="rounded-full bg-yellow-400 px-6 py-2 text-sm font-semibold uppercase tracking-wide text-black shadow-lg hover:bg-yellow-300"
            >
              Jetzt Gutschein sichern
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
