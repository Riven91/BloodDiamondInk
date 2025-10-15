"use client";

import Image from "next/image";
import { useState } from "react";

type GalleryLocation = "Alle" | "Pforzheim" | "Heilbronn" | "Böblingen";

interface GalleryItem {
  src: string;
  alt: string;
  location: Exclude<GalleryLocation, "Alle">;
}

const filters: GalleryLocation[] = ["Alle", "Pforzheim", "Heilbronn", "Böblingen"];

const galleryItems: GalleryItem[] = [
  {
    src: "/gallery/pforzheim-1.jpg",
    alt: "Feine Linienarbeit eines floralen Sleeves in Pforzheim",
    location: "Pforzheim",
  },
  {
    src: "/gallery/pforzheim-2.jpg",
    alt: "Black & Grey Portrait mit weichen Schattierungen in Pforzheim",
    location: "Pforzheim",
  },
  {
    src: "/gallery/pforzheim-3.jpg",
    alt: "Cover-Up Konzept mit Zeichnung und finalem Ergebnis in Pforzheim",
    location: "Pforzheim",
  },
  {
    src: "/gallery/heilbronn-1.jpg",
    alt: "Aftercare-Snapshot eines healed Realistic Tattoos in Heilbronn",
    location: "Heilbronn",
  },
  {
    src: "/gallery/heilbronn-2.jpg",
    alt: "Artist bei der Fineline-Vorzeichnung in Heilbronn",
    location: "Heilbronn",
  },
  {
    src: "/gallery/heilbronn-3.jpg",
    alt: "Detailaufnahme eines Blackwork-Ornaments in Heilbronn",
    location: "Heilbronn",
  },
  {
    src: "/gallery/boeblingen-1.jpg",
    alt: "Lettering mit dezentem Glow in Böblingen",
    location: "Böblingen",
  },
  {
    src: "/gallery/boeblingen-2.jpg",
    alt: "Matching Tattoos aus einer Duo-Session in Böblingen",
    location: "Böblingen",
  },
  {
    src: "/gallery/boeblingen-3.jpg",
    alt: "Micro-Realistic Floral Detail in Böblingen",
    location: "Böblingen",
  },
];

export function Gallery() {
  const [activeFilter, setActiveFilter] = useState<GalleryLocation>("Alle");

  const filteredItems =
    activeFilter === "Alle"
      ? galleryItems
      : galleryItems.filter((item) => item.location === activeFilter);

  return (
    <div className="mt-8 space-y-8">
      <div className="flex flex-wrap gap-3">
        {filters.map((filter) => {
          const isActive = activeFilter === filter;
          return (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`btn-primary text-xs ${
                isActive
                  ? ""
                  : "bg-transparent text-blooddiamond-text/70 hover:text-blooddiamond-text border border-blooddiamond-primary/40 hover:bg-blooddiamond-muted/60"
              }`}
              aria-pressed={isActive}
            >
              {filter}
            </button>
          );
        })}
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {filteredItems.map((item) => (
          <figure
            key={`${item.location}-${item.src}`}
            className="group relative overflow-hidden rounded-2xl border border-blooddiamond-primary/30 bg-blooddiamond-muted/60 shadow-lg shadow-black/30 transition-transform duration-500 hover:scale-105"
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={400}
              height={500}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-blooddiamond-background/90 via-blooddiamond-background/50 to-transparent p-3 text-xs uppercase tracking-wide text-blooddiamond-text">
              {item.location}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
