
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import type { GalleryItem } from "@/data/galleryData";
import { galleryDataAll } from "@/data/galleryData";

function GalleryComponent() {
  const [idx, setIdx] = useState<number | null>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const items: GalleryItem[] = galleryDataAll;
  const [visibleCount, setVisibleCount] = useState(() =>
    Math.min(3, items.length),
  );
  const open = (i: number) => setIdx(i);
  const close = () => setIdx(null);
  const prev = () =>
    setIdx((current) =>
      current === null ? current : (current + items.length - 1) % items.length,
    );
  const next = () =>
    setIdx((current) => (current === null ? current : (current + 1) % items.length));

  useEffect(() => {
    if (idx === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setIdx(null);
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        setIdx((current) =>
          current === null ? current : (current + items.length - 1) % items.length,
        );
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        setIdx((current) => (current === null ? current : (current + 1) % items.length));
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [idx, items.length]);

  return (
    <section className="mx-auto max-w-6xl px-4 md:px-6">
      <div data-no-lightbox className="mt-8 space-y-8">
        <div>
          <h2
            id="galerie"
            className="font-display text-3xl uppercase text-blooddiamond-accent"
          >
            Galerie
          </h2>
          <p className="text-sm md:text-base text-gray-300 mt-2">
            Einblicke in aktuelle Projekte und Heal Pieces aus unseren Studios.
          </p>
          <p className="mt-2 text-sm md:text-base text-gray-300">
            Unsere Tattoo-Galerie zeigt aktuelle Kunstwerke aus den Bereichen
            Realistic, Geometric, Lettering (Letterworking), New School und
            Mandala. Alle Motive werden individuell entworfen, von filigranen
            Linien bis zu großflächigen Projekten.
          </p>
          <ul className="mt-4 list-disc list-inside text-gray-300 space-y-1">
            <li>Authentische Tattoo-Artworks aus Pforzheim, Heilbronn und Böblingen</li>
            <li>Realistic &amp; Black &amp; Grey (Black and Grey) Tattoos mit höchster Präzision</li>
            <li>Geometric und Mandala Designs mit Feinlinienkunst</li>
            <li>Lettering (Letterworking) &amp; New School Styles mit individueller Kreativität</li>
          </ul>
          <p className="mt-6 text-center text-sm leading-relaxed text-gray-300 md:text-base">
            Entdecke noch mehr außergewöhnliche Kunstwerke unserer internationalen
            Tattoo-Artists aus unseren Tattoo-Studios in Pforzheim, Heilbronn und
            Böblingen. Folge uns auf {" "}
            <a
              href="#footer"
              className="font-semibold text-emerald-500 transition-colors hover:text-emerald-400 focus-visible:underline"
            >
              Social Media
            </a>
            {" "}für tägliche Einblicke und aktuelle Projekte.
          </p>
        </div>
      </div>
      {/* Abstand unterhalb des Social-Media-Absatzes, damit Galerie-Bilder nicht 'ankleben' */}
      <div>
        <div
          className="
            mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3
            [--capmin:64px]
          "
        >
          {items.slice(0, visibleCount).map((item, i) => (
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
                  sizes="(max-width:768px) 50vw, (max-width:1200px) 33vw, 25vw"
                  className="object-cover transition duration-300 group-hover:scale-[1.02]"
                  decoding="async"
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
      </div>

      <div className="mt-6 flex justify-center">
        {visibleCount < items.length && (
          <button
            type="button"
            onClick={() =>
              setVisibleCount((current) =>
                Math.min(current + 3, items.length),
              )
            }
            className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-white/90 transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-ring"
            aria-label={`Mehr Bilder laden (noch ${items.length - visibleCount})`}
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path
                d="M6 9l6 6 6-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Mehr anzeigen ({items.length - visibleCount})
          </button>
        )}
      </div>

      {idx !== null && (
        (() => {
          const item = items[idx];
          return (
            <div
              role="dialog"
              aria-modal="true"
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
              onClick={close}
            >
                <div
                  className="relative w-full max-w-4xl"
                  onClick={(event) => event.stopPropagation()}
                  onTouchStart={(event) => {
                    const touch = event.touches.item(0);
                    setTouchStartX(touch ? touch.clientX : null);
                    event.stopPropagation();
                  }}
                  onTouchEnd={(event) => {
                    if (touchStartX === null) {
                      event.stopPropagation();
                      return;
                    }
                    const changedTouch = event.changedTouches.item(0);
                    let handled = false;
                    if (changedTouch) {
                      const touchEndX = changedTouch.clientX;
                      const deltaX = touchEndX - touchStartX;
                      if (Math.abs(deltaX) > 40) {
                        handled = true;
                        if (deltaX > 0) {
                          prev();
                        } else {
                          next();
                        }
                      }
                    }
                    setTouchStartX(null);
                    if (handled) {
                      event.preventDefault();
                    }
                    event.stopPropagation();
                  }}
                  onTouchCancel={(event) => {
                    setTouchStartX(null);
                    event.stopPropagation();
                  }}
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
                  <Image
                    src={`/${item.file}`}
                    alt={item.alt}
                    fill
                    sizes="100vw"
                    className="bg-black object-contain"
                    decoding="async"
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
                    className="absolute right-3 top-3 z-20 inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white transition hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-ring"
                    aria-label="Lightbox schließen"
                  >
                    ✕
                  </button>

                    <div
                      className="absolute inset-y-0 left-0 z-10 h-full w-1/2 cursor-pointer"
                      onClick={(event) => {
                        event.stopPropagation();
                        prev();
                      }}
                    />
                    <div
                      className="absolute inset-y-0 right-0 z-10 h-full w-1/2 cursor-pointer"
                      onClick={(event) => {
                        event.stopPropagation();
                        next();
                      }}
                    />

                    <button
                      type="button"
                      onClick={(event) => {
                        event.stopPropagation();
                        prev();
                      }}
                      aria-label="Vorheriges Bild"
                      className="absolute left-3 top-1/2 z-20 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white transition hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-ring active:scale-95"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        width="20"
                        height="20"
                        aria-hidden="true"
                        fill="currentColor"
                      >
                        <path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                      </svg>
                      <span className="sr-only">Zurück</span>
                    </button>
                    <button
                      type="button"
                      onClick={(event) => {
                        event.stopPropagation();
                        next();
                      }}
                      aria-label="Nächstes Bild"
                      className="absolute right-3 top-1/2 z-20 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white transition hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-ring active:scale-95"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        width="20"
                        height="20"
                        aria-hidden="true"
                        fill="currentColor"
                      >
                        <path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6z" />
                      </svg>
                      <span className="sr-only">Weiter</span>
                    </button>
                </div>
              </div>
            </div>
          );
        })()
      )}
    </section>
  );
}

export function Gallery() {
  return <GalleryComponent />;
}

export default GalleryComponent;
