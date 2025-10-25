"use client";

import Image from "next/image";

interface GalleryItem {
  src: string;
  alt: string;
}

const galleryItems: GalleryItem[] = [
  {
    src: "/gallery/pforzheim-1.jpg",
    alt: "Feine Linienarbeit eines floralen Sleeves in Pforzheim",
  },
  {
    src: "/gallery/pforzheim-2.jpg",
    alt: "Black & Grey Portrait mit weichen Schattierungen in Pforzheim",
  },
  {
    src: "/gallery/pforzheim-3.jpg",
    alt: "Cover-Up Konzept mit Zeichnung und finalem Ergebnis in Pforzheim",
  },
  {
    src: "/gallery/heilbronn-1.jpg",
    alt: "Aftercare-Snapshot eines healed Realistic Tattoos in Heilbronn",
  },
  {
    src: "/gallery/heilbronn-2.jpg",
    alt: "Artist bei der Fineline-Vorzeichnung in Heilbronn",
  },
  {
    src: "/gallery/heilbronn-3.jpg",
    alt: "Detailaufnahme eines Blackwork-Ornaments in Heilbronn",
  },
  {
    src: "/gallery/boeblingen-1.jpg",
    alt: "Lettering mit dezentem Glow in Böblingen",
  },
  {
    src: "/gallery/boeblingen-2.jpg",
    alt: "Matching Tattoos aus einer Duo-Session in Böblingen",
  },
  {
    src: "/gallery/boeblingen-3.jpg",
    alt: "Micro-Realistic Floral Detail in Böblingen",
  },
];

export function Gallery() {
  // Caption-Option: Standard = ohne Bildunterschriften.
  // Falls später gewünscht, kann pro Bild eine optionale caption angezeigt werden.
  return (
    <div className="mt-8 space-y-8">
      <div>
        <h2 className="font-display text-3xl uppercase text-blooddiamond-accent">Galerie</h2>
        <p className="text-sm md:text-base text-gray-300 mt-2">
          Einblicke in aktuelle Projekte und Heal Pieces aus unseren Tattoo Studios.
        </p>
        <p className="mt-8 text-gray-300 text-sm md:text-base leading-relaxed">
          Dir gefallen unsere Tattoos? Für noch mehr Einblicke besuche einfach unseren Social-Media-Auftritt. In der Galerie
          findest du außerdem viele weitere Projekte und Heal-Pieces.
        </p>
        <p className="mt-2 text-sm md:text-base text-gray-300">
          Unsere Tattoo-Galerie zeigt aktuelle Kunstwerke aus den Bereichen Realistic, Geometric, Letterworking, New School und Mandala.
          Alle Motive werden individuell entworfen, von filigranen Linien bis zu großflächigen Projekten.
        </p>
        <ul className="mt-4 list-disc list-inside text-gray-300 space-y-1">
          <li>Authentische Tattoo-Artworks aus Pforzheim, Heilbronn und Böblingen</li>
          <li>Realistic &amp; Black-and-Grey Tattoos mit höchster Präzision</li>
          <li>Geometric und Mandala Designs mit Feinlinienkunst</li>
          <li>Letterworking &amp; New School Styles mit individueller Kreativität</li>
        </ul>
      </div>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
        {galleryItems.map((item, index) => (
          <figure
            key={item.src}
            className="group relative w-full overflow-hidden rounded-2xl border border-blooddiamond-primary/30 bg-blooddiamond-muted/60 shadow-lg shadow-black/30 transition-transform duration-500 hover:scale-105"
          >
            <div className="relative aspect-[4/5] w-full">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                priority={index < 6}
                sizes="(min-width:1280px) 25vw, (min-width:768px) 33vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </figure>
        ))}
      </div>
    </div>
  );
}
