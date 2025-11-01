import Link from "next/link";

export function LocationsTeaser() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-10">
      <h2 className="text-2xl font-semibold">Studios in Baden-Württemberg</h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-3">
        <Link href="/pforzheim" className="rounded-2xl border p-5 hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-ring">
          <h3 className="font-semibold">Pforzheim (Ötisheim)</h3>
        </Link>
        <Link href="/heilbronn" className="rounded-2xl border p-5 hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-ring">
          <h3 className="font-semibold">Heilbronn (Neckarsulm)</h3>
        </Link>
        <Link href="/boeblingen" className="rounded-2xl border p-5 hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-ring">
          <h3 className="font-semibold">Böblingen (Herrenberg)</h3>
        </Link>
      </div>
      <div className="mt-8">
        <Link href="/standorte" className="rounded-2xl border px-5 py-3 hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-ring">
          Standorte ansehen
        </Link>
      </div>
    </section>
  );
}
