import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-blooddiamond-primary/30 bg-blooddiamond-muted/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-blooddiamond-text/60 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <span className="font-display text-2xl uppercase text-blooddiamond-text">Blood Diamond Ink</span>
          <p className="mt-2 max-w-sm text-xs text-blooddiamond-text/60">
            Moderne Tattoo-Studios in Baden-Württemberg. Adresse folgt für jeden Standort.
          </p>
        </div>
        <div className="flex flex-col gap-2 text-xs sm:text-right">
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
    </footer>
  );
}
