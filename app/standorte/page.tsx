'use client';

import Link from 'next/link';
import { FormEvent, useState, useEffect } from 'react';
import Image from 'next/image';

export default function StandortePage() {
  const [consent, setConsent] = useState(false);

  useEffect(() => {
    const storedConsent = localStorage.getItem('mapConsent');
    if (storedConsent === 'true') {
      setConsent(true);
    }
  }, []);

  const handleConsent = () => {
    localStorage.setItem('mapConsent', 'true');
    setConsent(true);
  };

  const handleContactSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get('EMAIL');

    if (typeof email === 'string' && email.trim()) {
      const trimmedEmail = email.trim();
      if (typeof window !== 'undefined') {
        const mailto = `mailto:info@blooddiamond-tattoo.de?subject=${encodeURIComponent(
          'Anfrage zu den Blood Diamond Tattoo Standorten',
        )}&body=${encodeURIComponent(
          `Hallo Blood Diamond Tattoo Team,%0D%0A%0D%0AIch interessiere mich für eure Standorte. Bitte kontaktiert mich unter: ${trimmedEmail}.`,
        )}`;
        window.location.href = mailto;
      }

      event.currentTarget.reset();
    }
  };

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
            Mit Klick lädst du Inhalte von Google Maps. Es können personenbezogene Daten an Google übertragen werden. Details in unserer{' '}
            <Link href="/datenschutz" className="underline">
              Datenschutzerklärung
            </Link>
            .
          </p>
          <button onClick={handleConsent} className="btn-primary mt-3">
            Karte laden
          </button>
        </div>
      ) : (
        <div className="mt-6 overflow-hidden rounded-2xl border">
          <div className="flex justify-center">
            <iframe
              data-klaro-maps="1"
              data-src="https://www.google.com/maps/d/u/0/embed?mid=1_kecyb5qxEgIkCvVZX0YKWE_GIozRyQ&ehbc=2E312F&noprof=1"
              title="Karte blockiert – Cookie-Einwilligung erforderlich"
              aria-hidden="true"
              width="100%"
              height="400"
              style={{ borderRadius: '0.5rem', border: '1px solid #404040' }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      )}

      <section className="mt-12 rounded-2xl border p-6">
        <h2 className="text-lg font-semibold">Kontakt aufnehmen</h2>
        <p className="mt-1 text-sm text-gray-600">
          Hinterlasse uns deine E-Mail-Adresse und wir melden uns mit weiteren Informationen zu unseren Studios.
        </p>
        <form onSubmit={handleContactSubmit} className="mt-4 space-y-3">
          <label htmlFor="EMAIL" className="block text-sm font-medium text-gray-700">
            E-Mail
          </label>
          <input
            type="email"
            id="EMAIL"
            name="EMAIL"
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm shadow-sm focus:border-blooddiamond-primary focus:outline-none focus:ring-2 focus:ring-blooddiamond-primary"
            placeholder="dein.name@example.de"
            autoComplete="email"
          />
          <button type="submit" className="btn-primary">
            Anfrage senden
          </button>
        </form>
      </section>

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
