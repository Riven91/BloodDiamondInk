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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const originalOverflowRef = useRef<string | null>(null);
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const headerElement = headerRef.current;
    if (!headerElement || typeof window === "undefined") {
      return;
    }

    const updateOffset = () => {
      const height = headerElement.getBoundingClientRect().height;
      const clampedHeight = Math.max(0, Math.min(height, 120));
      document.documentElement.style.setProperty("--hero-header-offset", `${clampedHeight}px`);
    };

    updateOffset();

    const resizeObserver = new ResizeObserver(() => {
      updateOffset();
    });

    resizeObserver.observe(headerElement);
    window.addEventListener("resize", updateOffset);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateOffset);
      document.documentElement.style.setProperty("--hero-header-offset", "0px");
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      if (originalOverflowRef.current === null) {
        originalOverflowRef.current = document.body.style.overflow;
      }
      document.body.style.overflow = "hidden";
    } else {
      if (originalOverflowRef.current !== null) {
        document.body.style.overflow = originalOverflowRef.current;
        originalOverflowRef.current = null;
      } else {
        document.body.style.overflow = "";
      }
    }

    return () => {
      if (originalOverflowRef.current !== null) {
        document.body.style.overflow = originalOverflowRef.current;
        originalOverflowRef.current = null;
      } else {
        document.body.style.overflow = "";
      }
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 border-b border-blooddiamond-primary/40 bg-blooddiamond-background/95 backdrop-blur"
    >
      <div
        className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 max-[360px]:gap-2 max-[360px]:px-2 max-[360px]:py-2 md:px-6 md:py-4"
        style={{
          paddingLeft: "max(env(safe-area-inset-left), 0.5rem)",
          paddingRight: "max(env(safe-area-inset-right), 0.5rem)",
        }}
      >
        <Link
          href="/"
          aria-label="Blood Diamond Ink Startseite"
          className="flex min-w-0 items-center gap-3 max-[360px]:gap-2"
        >
          <Image
            src="/brand/bdi-logo-transparent.webp"
            alt="Blood Diamond Ink Logo"
            width={80}
            height={80}
            priority
          />
          <span className="min-w-0">
            <span className="font-display text-4xl uppercase tracking-[0.2em] text-blooddiamond-accent max-[360px]:text-base">
              <span className="max-[360px]:hidden">Blood Diamond Tattoo Ink.</span>
              <span className="hidden max-[360px]:inline">BD Tattoo</span>
            </span>
          </span>
        </Link>
        <nav aria-label="Hauptnavigation" className="hidden md:block">
          <ul className="hidden items-center gap-4 text-sm uppercase tracking-widest md:flex">
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
          aria-label={isMenuOpen ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
          className="relative ml-2 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 focus:outline-none focus:ring-2 focus:ring-white/30 max-[360px]:h-9 max-[360px]:w-9 md:hidden"
          style={{
            zIndex: 60,
          }}
        >
          <span className="sr-only">Navigation</span>
          <span className="pointer-events-none absolute inset-0" aria-hidden />
          <span aria-hidden className="flex flex-col items-center justify-center gap-[6px]">
            <span
              className="block h-[2px] w-6 bg-blooddiamond-text transition-transform"
              style={
                isMenuOpen
                  ? { transform: "translateY(7px) rotate(45deg)" }
                  : { transform: "translateY(0) rotate(0deg)" }
              }
            />
            <span
              className="block h-[2px] w-6 bg-blooddiamond-text transition-opacity"
              style={{ opacity: isMenuOpen ? 0 : 1 }}
            />
            <span
              className="block h-[2px] w-6 bg-blooddiamond-text transition-transform"
              style={
                isMenuOpen
                  ? { transform: "translateY(-7px) rotate(-45deg)" }
                  : { transform: "translateY(0) rotate(0deg)" }
              }
            />
          </span>
        </button>
      </div>
      {isMenuOpen && (
        <nav
          aria-label="Mobile Navigation"
          className="md:hidden"
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            zIndex: 55,
          }}
        >
          <ul className="space-y-2 border-b border-blooddiamond-primary/40 bg-blooddiamond-background px-6 py-4 text-base uppercase tracking-widest">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={handleLinkClick}
                    aria-current={isActive ? "page" : undefined}
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
        </nav>
      )}
    </header>
  );
}
