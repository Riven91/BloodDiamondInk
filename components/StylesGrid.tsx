import Image from "next/image";

const styles = [
  {
    caption: "Realistic",
    title: "Realistic",
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
    imageSrc: "/coverup1.jpeg",
    alt: "Signature Style – Cover-Up",
    imageVariant: "contain" as const,
    imageWidth: 1200,
    imageHeight: 1500,
  },
  {
    caption: "Geometric",
    title: "Geometric",
    description: "Symmetrische Muster und klare Linien, die Körperformen präzise betonen.",
    imageSrc: "/geometric.jpeg",
    alt: "Geometric Tattoo – Beispiel",
  },
  {
    caption: "Letterworking",
    title: "Letterworking",
    description: "Handgezeichnete Schriftzüge mit individuellen Typografien für persönliche Statements.",
    imageSrc: "/letterworking.jpeg",
    alt: "Letterworking Tattoo – Beispiel",
  },
  {
    caption: "New School",
    title: "New School",
    description: "Farbintensive Motive mit dynamischen Formen und illustrativen Details.",
    imageSrc: "/newschool.jpeg",
    alt: "New School Tattoo – Beispiel",
  },
  {
    caption: "Mandala",
    title: "Mandala",
    description: "Meditative Ornamentik mit feinen Linien und perfekter Symmetrie.",
    imageSrc: "/mandala1 (1).jpeg",
    alt: "Signature Style – Mandala",
    imageVariant: "contain" as const,
    imageWidth: 1200,
    imageHeight: 1500,
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
              style.imageVariant === "contain" ? (
                <div className="relative rounded-lg bg-black/30 p-2">
                  <Image
                    src={style.imageSrc}
                    alt={style.alt || style.title}
                    width={style.imageWidth ?? 1200}
                    height={style.imageHeight ?? 1500}
                    className="w-full h-auto object-contain rounded-md"
                    sizes="(max-width: 768px) 90vw, (max-width: 1200px) 40vw, 400px"
                    loading="lazy"
                  />
                </div>
              ) : (
                <div
                  className={`relative w-full ${style.aspectRatioClass ?? "aspect-[3/4]"} overflow-hidden rounded-2xl`}
                >
                  <Image
                    src={style.imageSrc}
                    alt={style.alt || style.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                    loading="lazy"
                  />
                </div>
              )
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
