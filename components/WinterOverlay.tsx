"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Flake = {
  id: number;
  left: string;
  duration: string;
  delay: string;
  size: number;
  src: string;
  opacity: number;
};

const FLAKE_COUNT = 16;
const SOURCES = ["/dsnow1.png"];

export default function WinterOverlay() {
  const [flakes, setFlakes] = useState<Flake[]>([]);

  useEffect(() => {
    const generated: Flake[] = Array.from({ length: FLAKE_COUNT }).map((_, i) => {
      const src = SOURCES[Math.floor(Math.random() * SOURCES.length)];
      const left = `${Math.random() * 100}%`;
      const duration = `${12 + Math.random() * 10}s`; // 12–22 Sekunden
      const delay = `${Math.random() * 12}s`;
      const size = 14 + Math.random() * 18; // ca. 14–32 px
      const opacity = 0.35 + Math.random() * 0.35; // 0.35–0.7

      return { id: i, left, duration, delay, size, src, opacity };
    });

    setFlakes(generated);
  }, []);

  if (!flakes.length) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[90] overflow-hidden"
      aria-hidden="true"
    >
      {flakes.map((flake) => (
        <div
          key={flake.id}
          className="absolute animate-snow-fall will-change-transform"
          style={{
            left: flake.left,
            animationDuration: flake.duration,
            animationDelay: flake.delay,
            opacity: flake.opacity,
          }}
        >
          <Image
            src={flake.src}
            alt=""
            width={flake.size}
            height={flake.size}
            aria-hidden="true"
          />
        </div>
      ))}
    </div>
  );
}
