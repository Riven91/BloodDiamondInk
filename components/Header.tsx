'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/standorte", label: "Standorte" },
  { href: "/pforzheim", label: "Pforzheim" },
  { href: "/heilbronn", label: "Heilbronn" },
  { href: "/boeblingen", label: "Böblingen" }
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-blooddiamond-primary/40 bg-blooddiamond-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          aria-label="Blood Diamond Ink Startseite"
          className="flex items-center gap-3"
        >
          <Image
            src="/brand/bdi-logo-transparent.webp"
            alt="Blood Diamond Ink Logo"
            width={80}
            height={80}
            priority
          />
          <span className="font-display text-4xl uppercase tracking-[0.2em] text-blooddiamond-accent">
            Blood Diamond Tattoo Ink.
          </span>
        </Link>
        <nav aria-label="Hauptnavigation">
          <ul className="flex items-center gap-4 text-sm uppercase tracking-widest">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`rounded-md px-3 py-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-ring focus-visible:ring-offset-2 focus-visible:ring-offset-blooddiamond-background ${
                      isActive
                        ? "bg-brand text-blooddiamond-text"
                        : "hover:bg-blooddiamond-muted/70 hover:text-blooddiamond-accent"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
