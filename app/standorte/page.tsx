'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function StandortePage() {
  const [consent, setConsent] = useState(false);

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

      {!consent ? (
        <div className="mt-12 rounded-2xl border p-6">
          <p>
            Mit Klick lädst du Inhalte von Google Maps (KML-Daten). Es können personenbezogene Daten an Google übertragen
            werden. Details in unserer{' '}
            <Link href="/datenschutz/oetisheim" className="underline">
              Datenschutzerklärung
            </Link>
            .
          </p>
          <button onClick={() => setConsent(true)} className="btn-primary mt-3">
            Karte laden
          </button>
        </div>
      ) : (
        <div className="mt-6 overflow-hidden rounded-2xl border">
          <div className="w-full flex justify-center">
            <iframe
              src={`https://www.google.com/maps?q=https://${process.env.NEXT_PUBLIC_SITE_URL || 'blooddiamondink-79184164-7f1b7.web.app'}/maps/standorte.kml&output=embed`}
              width="100%"
              height="350"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </main>
  );
}
