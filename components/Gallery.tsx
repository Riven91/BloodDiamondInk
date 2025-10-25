import Image from "next/image";
import fs from "fs";
import path from "path";

const CARD_WRAPPER = "relative overflow-hidden rounded-xl bg-black/30 aspect-[4/5]";
const IMG_CLASS = "absolute inset-0 w-full h-full object-cover";

export default function Gallery() {
  const dir = path.join(process.cwd(), "public", "Galerie 2");
  let images: string[] = [];
  try {
    images = fs
      .readdirSync(dir)
      .filter((f) => /\.(png|jpe?g|webp)$/i.test(f))
      .sort();
  } catch (_) {
    images = [];
  }

  return (
    <section id="galerie" className="mt-10">
      <h2 className="text-2xl font-bold mb-3">Galerie</h2>
      <p className="text-gray-300 mb-6">
        Einblicke in aktuelle Projekte und Heal Pieces aus unseren Tattoo Studios.
      </p>

      {/* Social-Hinweis ohne Links (bereits gewünscht) */}
      <p className="mt-8 text-gray-300 text-sm md:text-base leading-relaxed">
        Dir gefallen unsere Tattoos? Für noch mehr Einblicke besuche einfach unseren Social-Media-Auftritt.
        In der Galerie findest du außerdem viele weitere Projekte und Heal-Pieces.
      </p>

      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {images.map((name, i) => (
          <div key={i} className={CARD_WRAPPER}>
            <Image
              src={`/Galerie 2/${name}`}
              alt={`Galerie-Bild ${i + 1}`}
              fill
              className={IMG_CLASS}
              sizes="(max-width:640px) 50vw, (max-width:1024px) 25vw, 300px"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {images.length === 0 && (
        <p className="mt-6 text-gray-400 text-sm italic">
          Noch keine Bilder vorhanden. Bald folgen neue Projekte.
        </p>
      )}
    </section>
  );
}
