"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

import type { GalleryItem } from "@/data/galleryData";
import { galleryDataAll } from "@/data/galleryData";

function GalleryComponent() {
  // Index statt Objekt – stabilere Navigation und 1:1-Order
  const [idx, setIdx] = useState<number | null>(null);
  const items: GalleryItem[] = galleryDataAll;
  const open = useCallback((i: number) => setIdx(i), []);
  const close = useCallback(() => setIdx(null), []);
  const prev = useCallback(
    () => setIdx((i) => (i === null ? i : (i + items.length - 1) % items.length)),
    [items.length],
  );
  const next = useCallback(
    () => setIdx((i) => (i === null ? i : (i + 1) % items.length)),
    [items.length],
  );

  // Keyboard: ESC, ←, →
  useEffect(() => {
    if (idx === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") prev();
      if (event.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [idx, close, prev, next]);

  return (
    <section className="mx-auto max-w-6xl px-4 md:px-6">
      <div
        className="
          grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3
          [--capmin:64px]
        "
      >
        {items.map((item, i) => (
          <figure
            key={`${item.file}-${i}`}
            className="group flex flex-col overflow-hidden rounded-2xl bg-black/20 shadow-sm ring-1 ring-white/5"
          >
            <button
              type="button"
              onClick={() => open(i)}
              className="relative aspect-[4/5] w-full overflow-hidden"
              aria-label="Bild in großer Ansicht öffnen"
            >
              <Image
                src={`/${item.file}`}
                alt={item.alt}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition duration-300 group-hover:scale-[1.02]"
                priority={false}
              />
            </button>

            <figcaption
              className="
                min-h-[var(--capmin)] bg-blooddiamond-muted/50 p-3 text-sm leading-relaxed text-neutral-200 md:p-4
              "
            >
              {item.caption}
            </figcaption>
          </figure>
        ))}
      </div>

      {idx !== null && (() => {
        const item = items[idx];
        return (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={close}
          >
            <div className="relative w-full max-w-4xl" onClick={(event) => event.stopPropagation()}>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
                <Image
                  src={`/${item.file}`}
                  alt={item.alt}
                  fill
                  sizes="100vw"
                  className="bg-black object-contain"
                  priority
                />

                <div className="pointer-events-none absolute inset-x-0 bottom-0">
                  <div className="h-24 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="pointer-events-auto absolute inset-x-0 bottom-0 p-4">
                    <p className="text-sm text-neutral-100 md:text-base">{item.caption}</p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={close}
                  className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80"
                  aria-label="Lightbox schließen"
                >
                  ✕
                </button>
                {/* Klick-Zonen für Vor/Zurück */}
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Vorheriges Bild"
                  className="absolute left-0 top-0 h-full w-1/2 bg-transparent hover:bg-white/0"
                  style={{ cursor: "w-resize" }}
                />
                <button
                  type="button"
                  onClick={next}
                  aria-label="Nächstes Bild"
                  className="absolute right-0 top-0 h-full w-1/2 bg-transparent hover:bg-white/0"
                  style={{ cursor: "e-resize" }}
                />
              </div>
            </div>
          </div>
        );
      })()}
    </section>
  );
}

export function Gallery() {
  return <GalleryComponent />;
}

export default GalleryComponent;
