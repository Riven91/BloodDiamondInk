"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";

const BACKGROUND_MAP: Record<string, string> = {
const BACKGROUND_MAP = {
  "/": "/444205012_122127133706262146_3415427702622748042_n.jpg",
  "/boeblingen": "/515710750_18054059327605337_5053906938835335426_n.jpg",
  "/heilbronn": "/468841914_18028447166605337_6534412387055693830_n.jpg",
  "/pforzheim": "/Schwarz Weiß Dunkel Modern Tattoo Termin Instagram Story.png"
};
} as const satisfies Record<string, string>;

const DEFAULT_BACKGROUND = BACKGROUND_MAP["/"];

export function Background() {
  const pathname = usePathname();

  const backgroundSrc = useMemo(() => {
    if (!pathname) {
      return DEFAULT_BACKGROUND;
    }

    return BACKGROUND_MAP[pathname] ?? DEFAULT_BACKGROUND;
  }, [pathname]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 relative">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundSrc})`,
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      <div className="absolute inset-0 bg-black/60" />
    </div>
  );
}
