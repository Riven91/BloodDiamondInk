import GoogleRating from "@/components/GoogleRating";

type Variant = "home" | "pforzheim" | "heilbronn" | "boeblingen";
type CityVariant = Exclude<Variant, "home">;

const cityLabels: Record<CityVariant, string> = {
  pforzheim: "Pforzheim",
  heilbronn: "Heilbronn",
  boeblingen: "Böblingen",
};

export default function ReviewsStrip({ variant = "home" }: { variant?: Variant }) {
  const itemsHome: Array<{
    key: CityVariant;
    src?: string;
    alt?: string;
    dataReview: "pforzheim" | "heilbronn" | "boeblingen";
    className: string;
    desktopClass?: string;
  }> = [
    {
      key: "pforzheim",
      src: "/bloodd1.png",
      alt: "Google-Bewertungen Pforzheim",
      dataReview: "pforzheim",
      className:
        "md:static md:transform-none md:scale-100 absolute top-[65%] left-[2vw] -translate-y-1/2 scale-[0.6] sm:scale-[0.7] pointer-events-auto z-20",
      desktopClass: "md:-translate-y-6",
    },
    {
      key: "heilbronn",
      dataReview: "heilbronn",
      className:
        "md:static md:translate-x-0 md:scale-100 absolute top-[87%] left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[0.6] sm:scale-[0.7] pointer-events-auto z-10",
      desktopClass: "md:translate-y-8 md:translate-x-0",
    },
    {
      key: "boeblingen",
      src: "/bloodd%203.png",
      alt: "Google-Bewertungen Böblingen",
      dataReview: "boeblingen",
      className:
        "md:static md:transform-none md:scale-100 absolute top-[65%] right-[2vw] -translate-y-1/2 scale-[0.6] sm:scale-[0.7] pointer-events-auto z-20",
      desktopClass: "md:-translate-y-6",
    },
  ];

  if (variant === "home") {
    return (
      <div className="mx-auto w-full max-w-5xl px-6 pt-6">
        <div
          className="
            relative pointer-events-none overflow-visible isolation-isolate z-20 min-h-[320px]
            md:min-h-0 md:flex md:flex-nowrap md:items-end md:justify-center md:gap-10
          "
        >
          {itemsHome.map((it) => (
            <div key={it.key} data-review={it.dataReview} className="md:contents">
              <div
                className={
                  [
                    "absolute origin-center",
                    it.className,
                    "md:flex-none",
                    it.desktopClass,
                  ]
                    .filter(Boolean)
                    .join(" ")
                }
              >
                <div className="relative h-60 w-48 sm:w-56 md:h-72 md:w-64">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="
                        rounded-lg border border-blooddiamond-primary/40 bg-blooddiamond-background/55 px-2.5 py-3
                        shadow-lg shadow-black/30 backdrop-blur-sm
                        md:rounded-2xl md:bg-blooddiamond-background/80 md:px-6 md:py-6 md:shadow-xl
                      "
                    >
                      <GoogleRating city={cityLabels[it.key]} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-3xl px-6 pt-4 flex justify-center">
      <div
        className="
          rounded-lg border border-blooddiamond-primary/40 bg-blooddiamond-background/55 px-2.5 py-3
          shadow-lg shadow-black/30 backdrop-blur-sm
          md:rounded-2xl md:bg-blooddiamond-background/80 md:px-6 md:py-6 md:shadow-xl
        "
      >
        <GoogleRating city={cityLabels[variant]} />
      </div>
    </div>
  );
}
