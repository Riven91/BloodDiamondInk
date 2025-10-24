import Image from "next/image";

const styles = [
  {
    title: "Realistik",
    description: "Fotorealistische Portraits und detailreiche Motive, gestochen mit höchster Präzision.",
    image: "/realistic1.jpg",
    alt: "Realistisches Tattoo-Beispiel",
    priority: true,
  },
  {
    title: "Fineline",
    description: "Feine Linien, subtile Verläufe und elegante Minimal-Designs für klare Statements.",
    image: "/fineline1.jpg",
    alt: "Fineline Tattoo-Beispiel",
  },
  {
    title: "Cover-Up",
    description: "Wir verwandeln ungeliebte Tattoos in neue Kunstwerke und beraten dich zum optimalen Ablauf.",
    image: "/Herobackground.png",
  },
  {
    title: "Black & Grey",
    description: "Satte Kontraste, weiche Schattierungen und langlebige Ergebnisse ohne Farbverlust.",
    image: "/blackgrey1.jpg",
    alt: "Black & Grey Tattoo-Beispiel",
  }
];

export function StylesGrid() {
  return (
    <section
      className="mx-auto max-w-6xl px-6 pb-16"
      style={{ paddingTop: "calc(var(--hero-header-offset) + 2rem)" }}
    >
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
            <div className="relative w-full aspect-[3/4] overflow-hidden rounded-2xl">
              <Image
                src={style.image}
                alt={style.alt ?? `${style.title} Tattoo Beispiel`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover object-center"
                priority={style.priority}
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
