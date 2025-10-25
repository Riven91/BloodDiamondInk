import GoogleRating from "@/components/GoogleRating";

type Variant = "home" | "pforzheim" | "heilbronn" | "boeblingen";

export default function ReviewsStrip({ variant = "home" }: { variant?: Variant }) {
  const itemsHome = [
    {
      src: "/bloodd1.png",
      alt: "Google-Bewertungen Pforzheim",
      mobileClass: "top-[66%] left-[2%] -translate-y-1/2",
      desktopClass: "md:-translate-y-6",
    },
    {
      city: "Heilbronn",
      mobileClass: "top-[88%] left-1/2 -translate-x-1/2 -translate-y-1/2",
      desktopClass: "md:translate-y-8 md:translate-x-0",
    },
    {
      src: "/bloodd%203.png",
      alt: "Google-Bewertungen Böblingen",
      mobileClass: "top-[66%] right-[2%] -translate-y-1/2",
      desktopClass: "md:-translate-y-6",
    },
  ];

  if (variant === "home") {
    return (
      <div className="mx-auto w-full max-w-5xl px-6 pt-6">
        <div
          className="
            relative isolation-isolate z-20 min-h-[320px]
            md:min-h-0 md:flex md:flex-nowrap md:items-end md:justify-center md:gap-10
          "
        >
          <div className="md:contents">
            {itemsHome.map((it) => (
              <div
                key={it.city}
                className={
                  [
                    "pointer-events-auto absolute transform",
                    it.mobileClass,
                    "md:static md:flex-none md:transform",
                    it.desktopClass,
                  ].join(" ")
                }
              >
                <div className="relative h-60 w-48 sm:w-56 md:h-72 md:w-64">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="rounded-2xl border border-blooddiamond-primary/40 bg-blooddiamond-background/80 px-4 py-6 shadow-lg shadow-black/30">
                      <GoogleRating city={it.city} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const cityLabel: Record<Exclude<Variant, "home">, string> = {
    pforzheim: "Pforzheim",
    heilbronn: "Heilbronn",
    boeblingen: "Böblingen",
  };

  return (
    <div className="mx-auto w-full max-w-3xl px-6 pt-4">
      <div className="grid grid-cols-1 items-center justify-items-center overflow-hidden min-h-[5rem] md:min-h-[6rem]">
        <div className="relative h-10 md:h-12">
          <Image
            src={it.src}
            alt={it.alt}
            fill
            sizes="200px"
            className="object-contain transform origin-center scale-[2] md:scale-[2]"
            priority={false}
          />
        </div>
      </div>
    </div>
  );
}
