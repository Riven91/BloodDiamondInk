'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/standorte", label: "Standorte" },
  { href: "/pforzheim", label: "Pforzheim" },
  { href: "/heilbronn", label: "Heilbronn" },
  { href: "/boeblingen", label: "Böblingen" }
];

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const previousOverflow = useRef<string | null>(null);

  useEffect(() => {
    if (typeof document === "undefined") {
      return;
    }

    if (mobileOpen) {
      previousOverflow.current = document.body.style.overflow;
      document.body.style.overflow = "hidden";
    } else {
      if (previousOverflow.current !== null) {
        document.body.style.overflow = previousOverflow.current;
      } else {
        document.body.style.removeProperty("overflow");
      }
    }

    return () => {
      if (previousOverflow.current !== null) {
        document.body.style.overflow = previousOverflow.current;
      } else {
        document.body.style.removeProperty("overflow");
      }
    };
  }, [mobileOpen]);

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

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
        <nav aria-label="Hauptnavigation" className="hidden md:block">
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
        <button
          type="button"
          className="inline-flex h-12 w-12 items-center justify-center rounded-md border border-blooddiamond-primary/40 text-white transition hover:bg-blooddiamond-muted/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-ring focus-visible:ring-offset-2 focus-visible:ring-offset-blooddiamond-background md:hidden"
          aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          <span className="sr-only">Menü</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <path d="M3.75 6.75h16.5" />
            <path d="M3.75 12h16.5" />
            <path d="M3.75 17.25h16.5" />
          </svg>
        </button>
      </div>
      <nav
        id="mobile-menu"
        aria-label="Mobile Navigation"
        className={`md:hidden ${
          mobileOpen ? "absolute inset-x-0 top-full z-50" : "hidden"
        }`}
      >
        <div className="border-t border-blooddiamond-primary/40 bg-blooddiamond-background/98 px-6 py-4 text-sm uppercase tracking-widest shadow-xl">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    onClick={handleLinkClick}
                    className={`block rounded-md px-3 py-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-ring focus-visible:ring-offset-2 focus-visible:ring-offset-blooddiamond-background ${
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
        </div>
      </nav>
    </header>
  );
}
