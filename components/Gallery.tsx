"use client";

import { type TouchEventHandler, useEffect, useRef, useState } from "react";
import Image from "next/image";

const GAL_CARD = "relative overflow-hidden rounded-xl bg-black/30 aspect-[4/5]";
const GAL_IMG = "absolute inset-0 w-full h-full object-cover";

interface GalleryItem {
  src: string;
  alt: string;
}

const galleryItems: GalleryItem[] = [
  {
    src: "/blackgrey2.jpeg",
    alt: "BlackRay 2",
  },
  {
    src: "/blackgrey3.jpeg",
    alt: "BlackRay 3",
  },
  {
    src: "/blackgrey4.jpeg",
    alt: "BlackRay 4",
  },
  {
    src: "/blackgrey5.jpeg",
    alt: "BlackRay 5",
  },
  {
    src: "/blackgrey6.jpeg",
    alt: "BlackRay 6",
  },
  {
    src: "/dark1.jpeg",
    alt: "Dark 1",
  },
  {
    src: "/fineline2.jpeg",
    alt: "Fineline 2",
  },
  {
    src: "/fineline3.jpeg",
    alt: "Fineline 3",
  },
  {
    src: "/realistic2.jpeg",
    alt: "Realistik 2",
  },
  {
    src: "/realistic3.jpeg",
    alt: "Realistik 3",
  },
  {
    src: "/realistic4.jpeg",
    alt: "Realistik 4",
  },
  {
    src: "/realistic5.jpeg",
    alt: "Realistik 5",
  },
  {
    src: "/realistic6.jpeg",
    alt: "Realistik 6",
  },
  {
    src: "/realistic7.jpeg",
    alt: "Realistik 7",
  },
];

export function Gallery() {
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);
  const startX = useRef<number | null>(null);

  const openAt = (i: number) => {
    setIdx(i);
    setOpen(true);
  };
  const close = () => setOpen(false);
  const prev = () => setIdx((i) => (i - 1 + galleryItems.length) % galleryItems.length);
  const next = () => setIdx((i) => (i + 1) % galleryItems.length);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") prev();
      if (event.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  const onTouchStart: TouchEventHandler<HTMLDivElement> = (event) => {
    startX.current = event.touches[0].clientX;
  };
  const onTouchEnd: TouchEventHandler<HTMLDivElement> = (event) => {
    if (startX.current == null) return;
    const deltaX = event.changedTouches[0].clientX - startX.current;
    startX.current = null;
    if (Math.abs(deltaX) < 30) return;
    if (deltaX > 0) {
      prev();
    } else {
      next();
    }
  };

  return (
    <div className="mt-8 space-y-8">
      <div>
        <h2 className="font-display text-3xl uppercase text-blooddiamond-accent">Galerie</h2>
        <p className="text-sm md:text-base text-gray-300 mt-2">
          Einblicke in aktuelle Projekte und Heal Pieces aus unseren Studios.
        </p>
        <p className="mt-2 text-sm md:text-base text-gray-300">
          Unsere Tattoo-Galerie zeigt aktuelle Kunstwerke aus den Bereichen Realistic, Geometric, Letterworking, New School und
          Mandala. Alle Motive werden individuell entworfen, von filigranen Linien bis zu großflächigen Projekten.
        </p>
        <ul className="mt-4 list-disc list-inside text-gray-300 space-y-1">
          <li>Authentische Tattoo-Artworks aus Pforzheim, Heilbronn und Böblingen</li>
          <li>Realistic &amp; Black-and-Grey Tattoos mit höchster Präzision</li>
          <li>Geometric und Mandala Designs mit Feinlinienkunst</li>
          <li>Letterworking &amp; New School Styles mit individueller Kreativität</li>
        </ul>
        <p className="mt-6 text-center text-sm leading-relaxed text-gray-300 md:text-base">
          Entdecke noch mehr außergewöhnliche Kunstwerke unserer internationalen Tattoo-Artists aus unseren Tattoo-Studios in
          Pforzheim, Heilbronn und Böblingen. Folge{" "}
          <a
            href="#footer"
            className="font-semibold text-emerald-500 transition-colors hover:text-emerald-400"
          >
            Blood Diamond Tattoo Ink
          </a>
          . {" "}
          auf unseren Social-Media-Kanälen für weitere Einblicke in Realistic, Fineline, Black & Grey, Cover-Up und Mandala
          Tattoos.
        </p>
      </div>
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {galleryItems.map((item, i) => (
          <button
            key={item.src}
            type="button"
            onClick={() => openAt(i)}
            aria-label={`Bild ${i + 1} öffnen`}
            className={GAL_CARD}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className={GAL_IMG}
              sizes="(max-width:640px) 50vw, (max-width:1024px) 25vw, 300px"
              loading="lazy"
            />
          </button>
        ))}
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-[2px] flex items-center justify-center p-4"
          onClick={close}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div
            className="relative flex items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={galleryItems[idx].src}
              alt={galleryItems[idx].alt}
              unoptimized
              width={0}
              height={0}
              style={{
                width: "auto",
                height: "auto",
                maxWidth: "90vw",
                maxHeight: "85vh",
              }}
              className="rounded-lg shadow-lg"
              priority
            />

            <button
              type="button"
              onClick={close}
              className="absolute top-3 right-3 text-white text-2xl bg-white/10 hover:bg-white/20 rounded-full px-3 py-1"
              aria-label="Schließen"
            >
              ✕
            </button>
            <button
              type="button"
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-white text-3xl bg-white/10 hover:bg-white/20 rounded-full px-3 py-1"
              aria-label="Zurück"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-white text-3xl bg-white/10 hover:bg-white/20 rounded-full px-3 py-1"
              aria-label="Weiter"
            >
              ›
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
