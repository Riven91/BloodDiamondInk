"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";

const BACKGROUND_MAP: Record<string, string> = {
  "/": "/444205012_122127133706262146_3415427702622748042_n.jpg",
  "/pforzheim": "/Schwarz Weiß Dunkel Modern Tattoo Termin Instagram Story.png",
  "/heilbronn": "/468841914_18028447166605337_6534412387055693830_n.jpg",
  "/boeblingen": "/515710750_18054059327605337_5053906938835335426_n.jpg"
};

export function PageBackground() {
  const pathname = usePathname();

  const backgroundImage = useMemo(() => {
    if (!pathname) {
      return BACKGROUND_MAP["/"];
    }

    return BACKGROUND_MAP[pathname];
  }, [pathname]);

  if (!backgroundImage) {
    return null;
  }

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full"
      style={{
        zIndex: -5,
        opacity: 0.55,
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.55), rgba(0,0,0,0.35), rgba(0,0,0,0.55)), url(${backgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    />
  );
}
