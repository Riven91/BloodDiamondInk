import Image from "next/image";

type Variant = "home" | "pforzheim" | "heilbronn" | "boeblingen";

export default function ReviewsStrip({ variant = "home" }: { variant?: Variant }) {
  const itemsHome = [
    { src: "/bloodd1.png", alt: "Google-Bewertungen Pforzheim" },
    { src: "/bloodd2.png", alt: "Google-Bewertungen Heilbronn" },
    { src: "/bloodd%203.png", alt: "Google-Bewertungen Böblingen" }, // Leerzeichen in Dateiname
  ];

  if (variant === "home") {
    const offsets = [
      "-translate-y-4 md:-translate-y-6",
      "translate-y-6 md:translate-y-8",
      "-translate-y-4 md:-translate-y-6",
    ];

    return (
      <div className="mx-auto w-full max-w-5xl px-6 pt-6">
        <div className="relative isolation-isolate z-20 flex flex-wrap items-end justify-center gap-6 md:flex-nowrap md:gap-10">
          {itemsHome.map((it, idx) => (
            <div
              key={it.src}
              className={`pointer-events-auto transform ${offsets[idx] ?? ""}`}
            >
              <div className="relative h-60 w-48 sm:w-56 md:h-72 md:w-64">
                <Image
                  src={it.src}
                  alt={it.alt}
                  fill
                  sizes="(max-width: 768px) 60vw, 320px"
                  className="object-contain"
                  priority={false}
                />
              </div>
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
