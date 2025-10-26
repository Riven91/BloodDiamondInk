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
    desktopClass?: string;
  }> = [
    {
      key: "pforzheim",
      desktopClass: "md:-translate-y-6",
    },
    {
      key: "heilbronn",
      desktopClass: "md:translate-y-8 md:translate-x-0",
    },
    {
      key: "boeblingen",
      desktopClass: "md:-translate-y-6",
    },
  ];

  const renderBadge = (city: CityVariant) => (
    <div className="relative h-60 w-48 sm:w-56 md:h-72 md:w-64">
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="
            rounded-lg border border-blooddiamond-primary/40 bg-blooddiamond-background/55 px-2.5 py-3
            shadow-lg shadow-black/30 backdrop-blur-sm
            md:rounded-2xl md:bg-blooddiamond-background/80 md:px-6 md:py-6 md:shadow-xl
          "
        >
          <GoogleRating city={cityLabels[city]} />
        </div>
      </div>
    </div>
  );

  if (variant === "home") {
    return (
      <div className="mx-auto w-full max-w-5xl px-6 pt-6">
        <div
          className="
            relative pointer-events-none isolation-isolate z-20 min-h-[320px]
            md:min-h-0 md:flex md:flex-nowrap md:items-end md:justify-center md:gap-10
          "
        >
          {/* MOBILE OVERLAY: Pforzheim links, Böblingen rechts */}
          <div className="md:hidden absolute inset-x-0 bottom-[14%] z-30 px-3 pointer-events-none">
            <div className="flex items-end justify-between gap-1 [@media(max-width:360px)]:[&>*]:scale-[0.55]">
              <div className="pointer-events-auto scale-[0.6] sm:scale-[0.7]">
                {renderBadge("pforzheim")}
              </div>

              <div className="pointer-events-auto scale-[0.6] sm:scale-[0.7]">
                {renderBadge("boeblingen")}
              </div>
            </div>
          </div>

          {/* MOBILE: Heilbronn unten mittig */}
          <div className="md:hidden absolute left-1/2 bottom-[6%] -translate-x-1/2 z-20 pointer-events-none">
            <div className="pointer-events-auto scale-[0.6] sm:scale-[0.7]">
              {renderBadge("heilbronn")}
            </div>
          </div>

          <div className="hidden md:contents">
            {itemsHome.map((it) => (
              <div
                key={it.key}
                className={[
                  "md:flex md:flex-none md:transform md:origin-center md:pointer-events-auto",
                  it.desktopClass,
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                {renderBadge(it.key)}
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
        <GoogleRating city={cityLabels[variant]} />
      </div>
    </div>
  );
}
