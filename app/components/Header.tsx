"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-black/80 backdrop-blur supports-[backdrop-filter]:bg-black/60 bg-[url('/herobackground3.webp')] bg-cover bg-center md:bg-none">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <Link href="/" onClick={closeMenu} className="shrink-0 inline-flex items-center gap-2">
            <img src="/logo-blooddiamond.svg" alt="Blood Diamond Ink" className="h-8 w-auto" draggable={false} />
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            <Link href="/pforzheim" className="hover:opacity-80">Pforzheim</Link>
            <Link href="/boeblingen" className="hover:opacity-80">Böblingen</Link>
            <Link href="/heilbronn" className="hover:opacity-80">Heilbronn</Link>
          </nav>

          <button
            aria-label="Menü öffnen"
            onClick={() => setOpen(v => !v)}
            className="lg:hidden inline-flex items-center justify-center size-10 rounded-lg"
          >
            <span className="sr-only">Menü</span>
            <div className="relative w-5 h-3.5">
              <span className={`absolute inset-x-0 top-0 h-0.5 bg-white transition ${open ? "translate-y-1.5 rotate-45" : ""}`} />
              <span className={`absolute inset-x-0 top-1.5 h-0.5 bg-white transition ${open ? "opacity-0" : ""}`} />
              <span className={`absolute inset-x-0 top-3 h-0.5 bg-white transition ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      <div className={`lg:hidden origin-top overflow-hidden transition-transform duration-300 ${open ? "max-h-screen" : "max-h-0"}`}>
        <nav className="px-4 pb-4 pt-2 flex flex-col items-center space-y-4">
          <Link href="/" onClick={closeMenu} className="block py-3 text-lg">Home</Link>
          <Link href="/standorte" onClick={closeMenu} className="block py-3 text-lg">Standorte</Link>
          <Link href="/pforzheim" onClick={closeMenu} className="block py-3 text-lg">Pforzheim</Link>
          <Link href="/heilbronn" onClick={closeMenu} className="block py-3 text-lg">Heilbronn</Link>
          <Link href="/boeblingen" onClick={closeMenu} className="block py-3 text-lg">Böblingen</Link>
        </nav>
      </div>
    </header>
  );
}
