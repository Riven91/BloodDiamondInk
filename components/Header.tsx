"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/pforzheim", label: "Pforzheim" },
  { href: "/heilbronn", label: "Heilbronn" },
  { href: "/boeblingen", label: "Böblingen" },
  { href: "/netzwerk", label: "Netzwerk" },
  { href: "/kontakt", label: "Kontakt" }
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-blooddiamond-primary/40 bg-blooddiamond-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          aria-label="Blood Diamond Ink Startseite"
          className="font-display text-3xl uppercase tracking-[0.2em] text-blooddiamond-accent"
        >
          Blood Diamond Ink
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
