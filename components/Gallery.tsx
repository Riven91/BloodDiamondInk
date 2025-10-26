"use client";

import Image from "next/image";

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
  // Caption-Option: Standard = ohne Bildunterschriften.
  // Falls später gewünscht, kann pro Bild eine optionale caption angezeigt werden.
  return (
    <div className="mt-8 space-y-8">
      <div>
        <h2 className="font-display text-3xl uppercase text-blooddiamond-accent">Galerie</h2>
        <p className="text-sm md:text-base text-gray-300 mt-2">
          Einblicke in aktuelle Projekte und Heal Pieces aus unseren Studios.
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
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {galleryItems.map((item) => (
          <figure
            key={item.src}
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
          </figure>
        ))}
      </div>
    </div>
  );
}
