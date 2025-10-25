import GoogleRating from "@/components/GoogleRating";

type Variant = "home" | "pforzheim" | "heilbronn" | "boeblingen";

export default function ReviewsStrip({ variant = "home" }: { variant?: Variant }) {
  const itemsHome = [
    {
      city: "pforzheim",
      src: "/bloodd1.png",
      alt: "Google-Bewertungen Pforzheim",
      mobileClass: "top-[66%] left-[2%] -translate-y-1/2",
      desktopClass: "md:-translate-y-6",
    },
    {
      city: "heilbronn",
      mobileClass: "top-[88%] left-1/2 -translate-x-1/2 -translate-y-1/2",
      desktopClass: "md:translate-y-8 md:translate-x-0",
    },
    {
      city: "boeblingen",
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
            relative pointer-events-none isolation-isolate z-20 min-h-[320px]
            md:min-h-0 md:flex md:flex-nowrap md:items-end md:justify-center md:gap-10
          "
        >
          <div className="md:contents">
            {itemsHome.map((it) => (
              <div
                key={it.city}
                className={
                  [
                    "pointer-events-auto absolute transform origin-center",
                    it.mobileClass,
                    "scale-[0.65] sm:scale-[0.75] md:scale-100 max-[360px]:scale-[0.6]",
                    "md:static md:flex-none md:transform",
                    it.desktopClass,
                  ].join(" ")
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

  return (
    <div className="mx-auto w-full max-w-3xl px-6 pt-4 flex justify-center">
      <div
        className="
          rounded-lg border border-blooddiamond-primary/40 bg-blooddiamond-background/55 px-2.5 py-3
          shadow-lg shadow-black/30 backdrop-blur-sm
          md:rounded-2xl md:bg-blooddiamond-background/80 md:px-6 md:py-6 md:shadow-xl
        "
      >
        <GoogleRating city={variant} />
      </div>
    </div>
  );
}
