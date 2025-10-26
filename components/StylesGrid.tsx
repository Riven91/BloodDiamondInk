import Image from "next/image";

const CARD = "relative overflow-hidden rounded-xl bg-black/30 aspect-[2/3]";
const IMG = "absolute inset-0 w-full h-full object-cover";

const styles = [
  { src: "/blackgrey1.jpeg", alt: "Signature Style – Black & Grey" },
  { src: "/realistic1.jpeg", alt: "Signature Style – Realistic" },
  { src: "/fineline1.jpeg", alt: "Signature Style – Fineline" },
  { src: "/newschool.jpeg", alt: "Signature Style – New School" },
  { src: "/coverup1.jpeg", alt: "Signature Style – Cover-Up" },
  { src: "/mandala1 (1).jpeg", alt: "Signature Style – Mandala" },
];

export function StylesGrid() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="font-display text-4xl uppercase text-blooddiamond-accent">Unsere Signature-Styles</h2>
          <p className="max-w-xl text-white">
            Wir planen jede Session individuell. Von der ersten Motivskizze bis zu den Aftercare Guidelines begleiten wir dich Schritt für Schritt. Mit sterilen Abläufen, klaren Pflegehinweisen und präziser Umsetzung erzielen wir Ergebnisse, die langfristig überzeugen.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
        {styles.map((it, i) => (
          <div key={i} className={CARD}>
            <Image
              src={it.src}
              alt={it.alt}
              fill
              className={IMG}
              sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 300px"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
