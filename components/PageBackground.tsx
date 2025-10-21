"use client";

import { useMemo } from "react";
import { usePathname, useSearchParams } from "next/navigation";

const BACKGROUND_MAP: Record<string, string> = {
  "/": "/styles/style1.jpg",
  "/pforzheim": "/ChatGPT Image 20. Okt. 2025, 21_03_42.png",
  "/heilbronn": "/styles/style2.jpg",
  "/boeblingen": "/styles/style3.jpg"
};

export function PageBackground() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const { key, src } = useMemo(() => {
    const normalizedKey = (pathname || "/").replace(/\/+$/, "") || "/";
    const resolvedSrc = BACKGROUND_MAP[normalizedKey] ?? BACKGROUND_MAP["/"];

    return {
      key: normalizedKey,
      src: resolvedSrc
    };
  }, [pathname]);

  const showDebug = searchParams?.get("dbg") === "bg";

  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage:
            `linear-gradient(to bottom, rgba(0,0,0,.55), rgba(0,0,0,.35), rgba(0,0,0,.55)), url("${src}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          pointerEvents: "none"
        }}
      />
      {showDebug ? (
        <div className="fixed left-2 top-2 z-50 rounded bg-black/80 px-3 py-1 text-xs font-mono text-white shadow-lg">
          <div>{key}</div>
          <div className="truncate max-w-[75vw]">{src}</div>
        </div>
      ) : null}
    </>
  );
}
