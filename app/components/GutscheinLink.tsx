"use client";

import { usePathname } from "next/navigation";

export function GutscheinLink() {
  const pathname = usePathname();

  if (!pathname || pathname.includes("standort")) {
    return null;
  }

  return (
    <>
      {/* Gutschein-Link unter Hero */}
      <div className="w-full flex justify-center bg-blooddiamond-background/70 py-6">
        <a
          href="https://app.perspective.co/funnel/6866eef2568d0d003b3b9341"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blooddiamond-primary hover:bg-blooddiamond-primary/80 text-white font-semibold px-8 py-3 rounded-xl shadow-lg transition duration-300"
        >
          🎁 Gutschein sichern & Tattoo-Termin anfragen
        </a>
      </div>
    </>
  );
}
