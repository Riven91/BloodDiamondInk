import fs from "node:fs";
import Image from "next/image";
import path from "node:path";

const galerieDir = path.join(process.cwd(), "public", "Galerie 2");

function getGalleryImages(): string[] {
  if (!fs.existsSync(galerieDir)) {
    return [];
  }

  return fs
    .readdirSync(galerieDir)
    .filter((file) => /\.(png|jpe?g|webp)$/i.test(file))
    .sort();
}

export function Gallery() {
  const images = getGalleryImages();

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
        {images.map((image, index) => (
          <figure
            key={image}
            className="group relative w-full overflow-hidden rounded-2xl border border-blooddiamond-primary/30 bg-blooddiamond-muted/60 shadow-lg shadow-black/30 transition-transform duration-500 hover:scale-105"
          >
            <div className="relative aspect-[4/5] w-full">
              <Image
                src={`/Galerie 2/${image}`}
                alt={`Galerie-Bild ${index + 1}`}
                fill
                priority={index < 6}
                sizes="(min-width:1280px) 25vw, (min-width:768px) 33vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </figure>
        ))}
      </div>
      {images.length === 0 && (
        <p className="text-gray-400 text-sm italic">
          Noch keine Bilder vorhanden. Bald folgen neue Projekte.
        </p>
      )}
    </div>
  );
}
