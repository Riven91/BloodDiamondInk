import Link from "next/link";
import Image from "next/image";

import { MapWithConsent } from "@/components/MapWithConsent";

export default function StandorteClientPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-bold">Standorte</h1>
      <div className="mt-8 grid gap-6 sm:grid-cols-3">
        <div className="rounded-2xl border p-5">
          <h2 className="text-lg font-semibold">Pforzheim (Ötisheim)</h2>
          <p className="mt-1 text-sm text-gray-600">Maulbronner Str. 38, 75443 Ötisheim</p>
          <p className="mt-1 text-sm text-gray-600">Telefon: 01512 3426609</p>
          <p className="mt-1 text-sm text-gray-600">E-Mail: pforzheim@blooddiamond-tattoo.de</p>
          <Link href="/pforzheim" className="btn-primary mt-3">
            Studio ansehen
          </Link>
        </div>
        <div className="rounded-2xl border p-5">
          <h2 className="text-lg font-semibold">Heilbronn (Neckarsulm)</h2>
          <p className="mt-1 text-sm text-gray-600">Lautenbacher Str. 6, 74172 Neckarsulm</p>
          <p className="mt-1 text-sm text-gray-600">Telefon: 0176 30573128</p>
          <p className="mt-1 text-sm text-gray-600">E-Mail: heilbronn@blooddiamond-tattoo.de</p>
          <Link href="/heilbronn" className="btn-primary mt-3">
            Studio ansehen
          </Link>
        </div>
        <div className="rounded-2xl border p-5">
          <h2 className="text-lg font-semibold">Böblingen (Herrenberg)</h2>
          <p className="mt-1 text-sm text-gray-600">Stuttgarter Str. 21, 71083 Herrenberg</p>
          <p className="mt-1 text-sm text-gray-600">Telefon: 0162 4204789</p>
          <p className="mt-1 text-sm text-gray-600">E-Mail: boeblingen@blooddiamond-tattoo.de</p>
          <Link href="/boeblingen" className="btn-primary mt-3">
            Studio ansehen
          </Link>
        </div>
      </div>

      <div className="mt-12 overflow-hidden rounded-2xl border">
        <div className="flex justify-center">
          <MapWithConsent
            src="https://www.google.com/maps/d/u/0/embed?mid=1_kecyb5qxEgIkCvVZX0YKWE_GIozRyQ&ehbc=2E312F&noprof=1"
            title="Google Maps – Blood Diamond Tattoo Ink. Standorte"
            height="400"
            className="h-[400px] w-full"
            placeholderClassName="h-[400px] w-full"
            allowFullScreen
          />
        </div>
      </div>

      <div className="mt-12 flex justify-center">
        <Image
          src="/brand/bdi-logo-transparent.webp"
          alt="Blood Diamond Tattoo Ink. Logo"
          width={200}
          height={200}
          className="opacity-30 brightness-110 [filter:drop-shadow(0_0_10px_rgba(16,185,129,0.75))_drop-shadow(0_0_16px_rgba(16,185,129,0.45))]"
        />
      </div>
    </main>
  );
}
