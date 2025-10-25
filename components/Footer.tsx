'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Footer() {
  const pathname = usePathname();
  const isBoeblingen = pathname?.toLowerCase().includes('/boeblingen');
  const impressumHref = isBoeblingen ? '/impressum/boeblingen' : '/impressum';
  const datenschutzHref = isBoeblingen ? '/datenschutz/boeblingen' : '/datenschutz';
  const agbHref = isBoeblingen ? '/agb/boeblingen' : '/agb';

  return (
    <footer className="border-t border-blooddiamond-primary/30 bg-blooddiamond-muted/80">
      <div className="mx-auto max-w-6xl px-6 pb-4 pt-10">
        <div className="flex flex-col gap-8 text-sm text-blooddiamond-text/60 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm space-y-4">
            <span className="block font-display text-2xl uppercase text-blooddiamond-text">Blood Diamond Tattoo Ink.</span>
            <div className="flex flex-wrap items-center gap-5">
              <a
                href="https://www.instagram.com/blood_diamond_tattoo_ink/"
                aria-label="Instagram"
                title="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link instagram group inline-flex items-center gap-2 text-blooddiamond-text/70 transition hover:text-blooddiamond-accent"
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
                rel="noopener noreferrer"
                className="social-link facebook group inline-flex items-center gap-2 text-blooddiamond-text/70 transition hover:text-blooddiamond-accent"
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
                rel="noopener noreferrer"
                className="social-link tiktok group inline-flex items-center gap-2 text-blooddiamond-text/70 transition hover:text-blooddiamond-accent"
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
                rel="noopener noreferrer"
                className="social-link youtube group inline-flex items-center gap-2 text-blooddiamond-text/70 transition hover:text-blooddiamond-accent"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
                  <path d="M21.58 7.19c-.23-.86-.9-1.52-1.76-1.75C18.25 5 12 5 12 5s-6.25 0-7.82.44c-.86.23-1.52.9-1.76 1.75C2 8.75 2 12 2 12s0 3.25.42 4.81c.23.86.9 1.52 1.76 1.75C5.75 19 12 19 12 19s6.25 0 7.82-.44c.86.23 1.52-.9 1.76-1.75C22 15.25 22 12 22 12s0-3.25-.42-4.81zM9.5 15.5V8.5l6.5 3.5-6.5 3.5z"/>
                </svg>
                <span className="text-xs uppercase tracking-wider">YouTube</span>
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-3 text-xs uppercase tracking-wide text-blooddiamond-text/70 md:text-right">
            <span className="font-display text-sm text-blooddiamond-text">Rechtliches</span>
            <Link href={impressumHref} className="hover:text-blooddiamond-accent">
              Impressum
            </Link>
            <Link href={datenschutzHref} className="hover:text-blooddiamond-accent">
              Datenschutz
            </Link>
            <Link href={agbHref} className="hover:text-blooddiamond-accent">
              AGB
            </Link>
          </div>
        </div>
        <div className="mt-8 border-t border-blooddiamond-primary/30 pt-4 text-center text-xs text-blooddiamond-accent">
          © 2025 Blood Diamond Ink – Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
}
