import Image from "next/image";

type Variant = "home" | "pforzheim" | "heilbronn" | "boeblingen";

export default function ReviewsStrip({ variant = "home" }: { variant?: Variant }) {
  const itemsHome = [
    { src: "/bloodd1.png", alt: "Google-Bewertungen Pforzheim" },
    { src: "/bloodd2.png", alt: "Google-Bewertungen Heilbronn" },
    { src: "/bloodd%203.png", alt: "Google-Bewertungen Böblingen" }, // Leerzeichen in Dateiname
  ];

  if (variant === "home") {
    return (
      <div className="mx-auto w-full max-w-3xl px-6 pt-4">
        <div className="grid grid-cols-3 items-center gap-4">
          {itemsHome.map((it, idx) => (
            <div
              key={it.src}
              className={
                "relative h-20 md:h-24" +
                (idx === 0 ? " -translate-y-1 md:-translate-y-2" : "") +
                (idx === 2 ? " -translate-y-1 md:-translate-y-2" : "")
              }
            >
              <Image
                src={it.src}
                alt={it.alt}
                fill
                sizes="(max-width: 768px) 33vw, 240px"
                className="object-contain"
                priority={false}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  const mapOne: Record<Exclude<Variant, "home">, { src: string; alt: string }> = {
    pforzheim: { src: "/bloodd1.png", alt: "Google-Bewertungen Pforzheim" },
    heilbronn: { src: "/bloodd2.png", alt: "Google-Bewertungen Heilbronn" },
    boeblingen: { src: "/bloodd%203.png", alt: "Google-Bewertungen Böblingen" },
  };

  const it = mapOne[variant];

  return (
    <div className="mx-auto w-full max-w-3xl px-6 pt-4">
      <div className="grid grid-cols-1 items-center">
        <div className="relative h-10 md:h-12">
          <Image
            src={it.src}
            alt={it.alt}
            fill
            sizes="200px"
            className="object-contain"
            priority={false}
          />
        </div>
      </div>
    </div>
  );
}
