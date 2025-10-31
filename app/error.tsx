"use client";
import { useEffect } from "react";
import Image from "next/image";

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

      {/* neutrales, helles Fässchen mit dezenter grüner Aura */}
      <div className="mb-8">
        <Image
          src="/brand/ink-empty.svg"
          alt="Leeres Tintenfässchen"
          width={110}
          height={110}
          unoptimized
          onError={(e) => console.error("[500] ink-empty.svg onError", e)}
          className="opacity-80 brightness-110 [filter:drop-shadow(0_0_8px_rgba(16,185,129,0.25))]"
        />
      </div>

      {/* Blood Diamond Logo mit grünem Glow */}
      <div className="mt-2 flex justify-center">
        <Image
          src="/brand/bdi-logo-transparent.webp"
          alt="Blood Diamond Tattoo Ink. Logo"
          width={200}
          height={200}
          unoptimized
          priority
          onError={(e) => console.error("[500] bdi-logo-transparent.webp onError", e)}
          className="opacity-30 brightness-110 [filter:drop-shadow(0_0_10px_rgba(16,185,129,0.75))_drop-shadow(0_0_16px_rgba(16,185,129,0.45))]"
        />
      </div>
    </main>
  );
}
