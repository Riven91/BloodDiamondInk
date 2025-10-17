
import Link from 'next/link';

export default function StandortePage() {

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

      <div className="mt-12 flex justify-center">
         <iframe
           src="https://www.google.com/maps/d/u/0/embed?mid=1_kecyb5qxEgIkCvVZX0YKWE_GIozRyQ&ehbc=2E312F&noprof=1"
           width="100%"
           height="400"
           style={{ borderRadius: '0.5rem', border: '1px solid #404040' }}
           allowFullScreen
           loading="lazy"
         ></iframe>
       </div>
    </main>
  );
}
