"use client";
import { useEffect } from "react";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ErrorPage({ error }: ErrorPageProps) {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.error(error);
  }, [error]);

  // eslint-disable-next-line no-console
  console.log("[500] Rendering ErrorPage – entering <main> block");
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-5xl flex-col items-center justify-center px-6 text-center">
      <h1 className="mb-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
        Oh nein – uns ist die Tinte ausgegangen.
      </h1>
      <p className="mx-auto mb-10 max-w-xl text-white/70">
        Ein kurzer Schluck aus dem Farbtopf – gleich läuft alles wieder.
      </p>

      {/* neutrales, helles Fässchen als Inline-SVG (kein Asset-Load nötig) */}
      <div className="mb-8 opacity-80 brightness-110 [filter:drop-shadow(0_0_8px_rgba(16,185,129,0.25))]">
        <svg aria-hidden="true" viewBox="0 0 64 64" width="110" height="110" className="inline-block">
          <g fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 10h20" />
            <path d="M26 10v6a4 4 0 0 1-1.3 3L22 22v4h20v-4l-2.7-3a4 4 0 0 1-1.3-3v-6" />
            <rect x="16" y="26" width="32" height="24" rx="4" ry="4"/>
            <rect x="22" y="34" width="20" height="8" rx="2" ry="2"/>
            <path d="M24 10v-2h16v2" />
          </g>
        </svg>
      </div>

      {/* Blood Diamond Logo mit grünem Glow */}
      <div className="mt-2 flex justify-center">
        <img
          src="/brand/bdi-logo-transparent.webp"
          alt="Blood Diamond Tattoo Ink. Logo"
          width="200"
          height="200"
          style={{
            opacity: 0.3,
            filter:
              "drop-shadow(0 0 10px rgba(16,185,129,0.75)) drop-shadow(0 0 16px rgba(16,185,129,0.45)) brightness(1.1)"
          }}
        />
      </div>
    </main>
  );
}
