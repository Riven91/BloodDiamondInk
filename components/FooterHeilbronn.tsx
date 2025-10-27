export default function FooterHeilbronn() {
  return (
    <footer className="mt-12 border-t border-neutral-800 pt-8 pb-6 text-center text-sm text-neutral-400">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm my-4">
        <a href="/#faq" className="text-neutral-400 hover:text-white transition">
          FAQ
        </a>
        <a
          href="https://kontakt.blooddiamond-tattoo.de/heilbronn/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-400 hover:text-white transition"
        >
          Kontakt
        </a>
        <a href="/impressum" className="text-neutral-400 hover:text-white transition">
          Impressum
        </a>
        <a href="/datenschutz" className="text-neutral-400 hover:text-white transition">
          Datenschutz
        </a>
        <a href="/agb" className="text-neutral-400 hover:text-white transition">
          AGB
        </a>
        <a
          onClick={() => (window as any).klaro?.show()}
          className="text-neutral-400 hover:text-white transition cursor-pointer"
        >
          Cookie-Einstellungen
        </a>
      </div>
      <p className="text-neutral-500 mt-2">© 2025 Blood Diamond Tattoo Ink.</p>
    </footer>
  );
}
