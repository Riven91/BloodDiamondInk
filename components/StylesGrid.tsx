import Image from "next/image";

const styles = [
  {
    title: "Realistic",
    description: "Fotorealistische Portraits und detailreiche Motive, gestochen mit höchster Präzision.",
    image: "/styles/style1.jpg",
  },
  {
    title: "Fineline",
    description: "Feine Linien, subtile Verläufe und elegante Minimal-Designs für klare Statements.",
    image: "/styles/style2.jpg",
  },
  {
    title: "Cover-Up",
    description: "Wir verwandeln ungeliebte Tattoos in neue Kunstwerke und beraten dich zum optimalen Ablauf.",
    image: "/styles/style3.jpg",
  },
  {
    title: "Black & Grey",
    description: "Satte Kontraste, weiche Schattierungen und langlebige Ergebnisse ohne Farbverlust.",
    image: "/styles/style3.jpg",
  }
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
      <div className="grid gap-6 sm:grid-cols-2">
        {styles.map((style) => (
          <article
            key={style.title}
            className="overflow-hidden rounded-xl border border-blooddiamond-primary/30 bg-blooddiamond-muted/60 shadow-lg shadow-black/20"
          >
            <div className="relative h-40 w-full">
              <Image
                src={style.image}
                alt={`${style.title} Tattoo Beispiel`}
                fill
                className="object-cover object-center opacity-80"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
            <div className="p-6">
              <h3 className="font-display text-2xl uppercase text-blooddiamond-accent">{style.title}</h3>
              <p className="mt-2 text-sm text-white/80">{style.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
