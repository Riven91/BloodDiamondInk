"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import type { LegalStudioSlug } from "@/lib/legal.config";

function resolveLegalSlug(pathname: string | null): LegalStudioSlug {
  if (!pathname) {
    return "oetisheim";
  }

  if (pathname.startsWith("/heilbronn")) {
    return "heilbronn";
  }

  if (pathname.startsWith("/boeblingen")) {
    return "boeblingen";
  }

  return "oetisheim";
}

export function Footer() {
  const pathname = usePathname();
  const legalSlug = resolveLegalSlug(pathname);

  return (
    <footer className="border-t border-blooddiamond-primary/30 bg-blooddiamond-muted/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-10 text-sm text-blooddiamond-text/60 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm space-y-3">
          <span className="block font-display text-2xl uppercase text-blooddiamond-text">Blood Diamond Ink</span>
          <p className="text-xs text-blooddiamond-text/60">
            Moderne Tattoo-Studios in Baden-Württemberg. Unsere Studio-Adressen werden nach Abschluss der Ausbauarbeiten ergänzt.
          </p>
          <div className="flex flex-wrap gap-4 text-xs text-blooddiamond-text/50">
            <Link href="mailto:hello@blooddiamondink.example" className="hover:text-blooddiamond-accent">
              hello@blooddiamondink.example
            </Link>
            <Link href="https://www.instagram.com" className="hover:text-blooddiamond-accent" aria-label="Instagram">
              Instagram
            </Link>
            <Link href="https://www.facebook.com" className="hover:text-blooddiamond-accent" aria-label="Facebook">
              Facebook
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-3 text-xs uppercase tracking-wide text-blooddiamond-text/70 md:text-right">
          <span className="font-display text-sm text-blooddiamond-text">Rechtliches</span>
          <Link href={`/impressum/${legalSlug}`} className="hover:text-blooddiamond-accent">
            Impressum
          </Link>
          <Link href={`/datenschutz/${legalSlug}`} className="hover:text-blooddiamond-accent">
            Datenschutz
          </Link>
          <Link href={`/agb/${legalSlug}`} className="hover:text-blooddiamond-accent">
            AGB
          </Link>
        </div>
      </div>
    </footer>
  );
}
