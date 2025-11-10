'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Footer() {
  const pathname = usePathname();
  const isHeilbronn = pathname?.toLowerCase().includes('/heilbronn');
  const isBoeblingen = pathname?.toLowerCase().includes('/boeblingen');
  const impressumHref = isBoeblingen ? '/impressum/boeblingen' : isHeilbronn ? '/heilbronn/impressum' : '/impressum';
  const datenschutzHref = isBoeblingen ? '/datenschutz/boeblingen' : '/datenschutz';
  const agbHref = isBoeblingen ? '/agb/boeblingen' : '/agb';
  const contactHref = isBoeblingen
    ? 'https://kontakt.blooddiamond-tattoo.de/boeblingen/'
    : isHeilbronn
      ? 'https://kontakt.blooddiamond-tattoo.de/heilbronn/'
      : 'https://kontakt.blooddiamond-tattoo.de/pforzheim/';
  const instagramHref = isBoeblingen
    ? 'https://www.instagram.com/blood_diamond_ink_boeblingen/'
    : isHeilbronn
      ? 'https://www.instagram.com/blood_diamond_ink_heilbronn/'
      : 'https://www.instagram.com/blood_diamond_tattoo_ink/';
  const handleCookieSettings = () => {
    if (typeof window !== 'undefined') {
      const klaro = (window as typeof window & { klaro?: { show: () => void } }).klaro;
      if (klaro && typeof klaro.show === 'function') {
        klaro.show();
      }
    }
  };

  return (
    <footer id="footer" className="border-t border-blooddiamond-primary/30 bg-blooddiamond-muted/80">
      <div className="mx-auto max-w-6xl px-6 pb-4 pt-10">
        <div className="grid grid-cols-3 gap-4 text-sm text-blooddiamond-text/60 md:flex md:flex-row md:items-start md:justify-between md:gap-8">
          <div className="max-w-sm space-y-4 text-left">
            <span className="block font-display text-2xl uppercase text-blooddiamond-text">
              Blood Diamond Tattoo Ink.
            </span>
            <div className="flex flex-col items-start gap-3 md:flex-row md:flex-wrap md:items-center md:gap-5">
              <a
                href={instagramHref}
                aria-label="Instagram"
                title="Instagram"
                target="_blank"
                rel="noopener noreferrer nofollow ugc"
                className="social-link instagram inline-flex items-center gap-2 p-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 hover:opacity-80 active:opacity-70 text-blooddiamond-text/70 transition hover:text-blooddiamond-accent focus-visible:underline"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <span className="text-xs uppercase tracking-wider">Instagram</span>
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=61557864394966"
                aria-label="Facebook"
                title="Facebook"
                target="_blank"
                rel="noopener noreferrer nofollow ugc"
                className="social-link facebook inline-flex items-center gap-2 p-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 hover:opacity-80 active:opacity-70 text-blooddiamond-text/70 transition hover:text-blooddiamond-accent focus-visible:underline"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
                  <path d="M22 12.06C22 6.52 17.52 2 12 2S2 6.52 2 12.06c0 5.02 3.66 9.19 8.44 9.94v-7.03H7.9v-2.9h2.54V9.86c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.25 0-1.64.78-1.64 1.57v1.89h2.79l-.45 2.9h-2.34V22c4.78-.75 8.44-4.92 8.44-9.94z" />
                </svg>
                <span className="text-xs uppercase tracking-wider">Facebook</span>
              </a>

              <a
                href="https://www.tiktok.com/@blood.diamond.ink"
                aria-label="TikTok"
                title="TikTok"
                target="_blank"
                rel="noopener noreferrer nofollow ugc"
                className="social-link tiktok inline-flex items-center gap-2 p-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 hover:opacity-80 active:opacity-70 text-blooddiamond-text/70 transition hover:text-blooddiamond-accent focus-visible:underline"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
                  <path d="M16.6 5.82s.51.5 0 0A4.27 4.27 0 0 0 15.2 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.59 2.59 2.59 0 0 1-2.59-2.59 2.59 2.59 0 0 1 2.59-2.59h.12V9.35a6.08 6.08 0 0 0-6.12 6.12 6.08 6.08 0 0 0 6.12 6.12 6.08 6.08 0 0 0 6.12-6.12V9.92a8.55 8.55 0 0 1 3.48-2.19v3.47A2.59 2.59 0 0 1 16.6 5.82z"/>
                </svg>
                <span className="text-xs uppercase tracking-wider">TikTok</span>
              </a>

              <a
                href="https://www.youtube.com/@blooddiamondtattooink6955"
                aria-label="YouTube"
                title="YouTube"
                target="_blank"
                rel="noopener noreferrer nofollow ugc"
                className="social-link youtube inline-flex items-center gap-2 p-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 hover:opacity-80 active:opacity-70 text-blooddiamond-text/70 transition hover:text-blooddiamond-accent focus-visible:underline"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
                  <path d="M21.58 7.19c-.23-.86-.9-1.52-1.76-1.75C18.25 5 12 5 12 5s-6.25 0-7.82.44c-.86.23-1.52.9-1.76 1.75C2 8.75 2 12 2 12s0 3.25.42 4.81c.23.86.9 1.52 1.76 1.75C5.75 19 12 19 12 19s6.25 0 7.82-.44c.86.23 1.52-.9 1.76-1.75C22 15.25 22 12 22 12s0-3.25-.42-4.81zM9.5 15.5V8.5l6.5 3.5-6.5 3.5z"/>
                </svg>
                <span className="text-xs uppercase tracking-wider">YouTube</span>
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start gap-1.5 text-center mt-0 md:items-center md:text-center md:gap-3 md:mt-0">
            <a href="/#faq" className="text-neutral-300 transition hover:text-white focus-visible:underline">
              FAQ
            </a>
            <a
              href={contactHref}
              target="_blank"
              rel="noopener noreferrer nofollow ugc"
              className="text-neutral-300 transition hover:text-white focus-visible:underline"
            >
              Kontakt
            </a>
          </div>

          <div className="flex flex-col items-start text-left justify-start self-start gap-3 md:items-end md:text-right md:self-start">
            <span className="font-display text-base uppercase text-blooddiamond-text">Rechtliches</span>
            <Link href={impressumHref} className="transition hover:text-white focus-visible:underline">
              Impressum
            </Link>
            <Link href={datenschutzHref} className="transition hover:text-white focus-visible:underline">
              Datenschutz
            </Link>
            <Link href={agbHref} className="transition hover:text-white focus-visible:underline">
              AGB
            </Link>
            <button
              type="button"
              onClick={handleCookieSettings}
              className="cursor-pointer border-none bg-transparent text-neutral-300 transition hover:text-white text-left md:text-right focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-ring"
            >
              Cookie-Einstellungen
            </button>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-blooddiamond-primary/30 pt-4 text-center text-xs text-blooddiamond-accent">
        © 2025 Blood Diamond Tattoo Ink. – Alle Rechte vorbehalten.
      </div>
    </footer>
  );
}
