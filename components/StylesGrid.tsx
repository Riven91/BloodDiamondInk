import Image from "next/image";

const CARD_IMG = "relative overflow-hidden rounded-xl bg-black/30 aspect-[4/5]";
const IMG = "absolute inset-0 w-full h-full object-cover";

const TITLE_CLS = "mt-3 text-blooddiamond-accent font-semibold text-base sm:text-lg";
const DESC_CLS = "mt-1 text-gray-300 text-sm sm:text-base leading-relaxed";

type StyleItem = {
  title: string;
  src: string;
  alt: string;
  desc: string;
  keywords: readonly string[];
};

const stylesData: StyleItem[] = [
  {
    title: "Black & Grey",
    src: "/blackgrey1.jpeg",
    alt: "Black & Grey Tattoo – realistische Schädel-Komposition – Blood Diamond Tattoo Ink.",
    desc: "Kontraststarke Black & Grey (Black and Grey) Tattoos mit weichen Übergängen und tiefer Dreidimensionalität – ideal für Porträts, Realismus und große Kompositionen.",
    keywords: ["tattoo", "black & grey", "realistisch", "schädel", "schattierung", "blood diamond tattoo ink"],
  },
  {
    title: "Cover-Up",
    src: "/coverup1.jpeg",
    alt: "Realistic Tattoo – Porträt mit Dornenkrone – Blood Diamond Tattoo Ink.",
    desc: "Alte Motive professionell überarbeiten: durchdachte Tonwerte, Linienführung und Fluss – das neue Design integriert die Vergangenheit nahtlos.",
    keywords: ["tattoo", "realistic", "portrait", "dornenkrone", "realismus", "black & grey", "blood diamond tattoo ink"],
  },
  {
    title: "Fineline",
    src: "/fineline1.jpeg",
    alt: "Fineline Tattoo – Schrift entlang der Wirbelsäule – Blood Diamond Tattoo Ink.",
    desc:
      "Filigrane Linien und dezente Schattierungen für elegante, minimalistische Tattoos – präzise gestochen für klare, langlebige Ergebnisse.",
    keywords: ["tattoo", "fineline", "linework", "schriftzug", "minimalistisch", "zarte linien", "blood diamond tattoo ink"],
  },
  {
    title: "Geometric",
    src: "/geometric.jpeg",
    alt: "Geometric Tattoo – Symbolik und Linienkunst – Blood Diamond Tattoo Ink.",
    desc: "Präzise geometrische Formen mit spiritueller Symbolik und feiner Linienbalance.",
    keywords: ["tattoo", "geometric", "linework", "symbolism", "moderne geometrie", "spiritual tattoo", "blood diamond tattoo ink"],
  },
  {
    title: "Lettering",
    src: "/letterworking.jpeg",
    alt: "Lettering Tattoo – Blackletter-Style – Blood Diamond Tattoo Ink.",
    desc: "Prägnantes Lettering Tattoo in markanter Schriftgestaltung, klarer Kontrast und saubere Linienführung.",
    keywords: ["tattoo", "lettering", "blackletter", "schrift", "bold style", "gothic tattoo", "blood diamond tattoo ink"],
  },
  {
    title: "Mandala",
    src: "/mandala1 (1).jpeg",
    alt: "Mandala Tattoo – ornamentale Dotwork-Komposition – Blood Diamond Tattoo Ink.",
    desc:
      "Geometrische Präzision und Dotwork-Details: symmetrische Mandalas mit klaren Linien, perfekter Ausrichtung und ruhiger Balance auf der Haut.",
    keywords: ["tattoo", "mandala", "dotwork", "ornament", "symmetry", "geometrisch", "blood diamond tattoo ink"],
  },
  {
    title: "New School",
    src: "/newschool.jpeg",
    alt: "New School Tattoo – bunte Comic-Komposition – Blood Diamond Tattoo Ink.",
    desc:
      "Kräftige Farben, dynamische Formen und illustrative Tiefe – New-School-Designs mit Comic-Einflüssen, 3D-Effekten und maximalem Bildwitz.",
    keywords: ["tattoo", "new school", "comic", "farbintensiv", "colorful tattoo", "blood diamond tattoo ink"],
  },
  {
    title: "Realistic",
    src: "/realistic1.jpeg",
    alt: "Realistic Tattoo – fotorealistisches Porträt mit fein abgestuften Schattierungen – Blood Diamond Tattoo Ink.",
    desc:
      "Fotorealistische Tattoos mit präzisem Licht-/Schatten-Spiel, feinster Textur und natürlicher Hautintegration – von Detail bis Full Backpiece.",
    keywords: ["tattoo", "realistic", "portrait", "black & grey", "realismus", "blood diamond tattoo ink"],
  },
];

const styles = [...stylesData].sort((a, b) =>
  a.title.localeCompare(b.title, "de", { sensitivity: "base" })
);

export function StylesGrid() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-10">
      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="font-display text-4xl uppercase text-blooddiamond-accent">Unsere Signature-Styles</h2>
          <p className="max-w-xl text-white">
            Wir planen jede Session individuell. Von der ersten Motivskizze bis zu den Aftercare Guidelines begleiten wir dich Schritt für Schritt. Mit sterilen Abläufen, klaren Pflegehinweisen und präziser Umsetzung erzielen wir Ergebnisse, die langfristig überzeugen.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
        {styles.map((it) => (
          <figure key={it.title} className="flex flex-col">
            <div className={CARD_IMG}>
              <Image
                src={it.src}
                alt={it.alt}
                fill
                className={IMG}
                sizes="(max-width:640px) 100vw, (max-width:1024px) 33vw, 33vw"
                loading="lazy"
              />
            </div>
            <figcaption className="pt-1">
              <h3 className={TITLE_CLS}>{it.title}</h3>
              <p className={DESC_CLS}>{it.desc}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
