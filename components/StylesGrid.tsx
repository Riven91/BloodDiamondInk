const styles = [
  {
    caption: "Realistik",
    title: "Realistik",
    description: "Fotorealistische Portraits und detailreiche Motive, gestochen mit höchster Präzision.",
    imageSrc: "/realistic1.jpeg",
    alt: "Realistic Tattoo – Beispiel",
  },
  {
    caption: "Fineline",
    title: "Fineline",
    description: "Feine Linien, subtile Verläufe und elegante Minimal-Designs für klare Statements.",
    imageSrc: "/fineline1.jpeg",
    alt: "Fineline Tattoo – Beispiel",
  },
  {
    caption: "Black & Grey",
    title: "Black & Grey",
    description: "Satte Kontraste, weiche Schattierungen und langlebige Ergebnisse ohne Farbverlust.",
    imageSrc: "/blackgrey1.jpeg",
    alt: "Black & Grey Tattoo – Beispiel",
  },
  {
    caption: "Cover-Up",
    title: "Cover-Up",
    description:
      "Präzise Überarbeitungen lassen alte Motive verschwinden und schaffen Raum für ein neues, stimmiges Design.",
    imageSrc: null,
    alt: "",
  },
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
            {style.imageSrc ? (
              <div className="relative w-full aspect-[3/4] overflow-hidden rounded-2xl">
                <img
                  src={style.imageSrc}
                  alt={style.alt}
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ) : (
              <div className="relative w-full aspect-[3/4] overflow-hidden rounded-2xl bg-gray-100" />
            )}
            <p className="mt-2 text-center text-sm md:text-base leading-snug">{style.caption}</p>
            <div className="p-6 pt-4">
              <h3 className="font-display text-2xl uppercase text-blooddiamond-accent">{style.title}</h3>
              {style.description ? (
                <p className="mt-2 text-sm text-white/80">{style.description}</p>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
