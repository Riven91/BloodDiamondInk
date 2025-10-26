import GoogleRating from "@/components/GoogleRating";

type Variant = "home" | "pforzheim" | "heilbronn" | "boeblingen";
type CityVariant = Exclude<Variant, "home">;

const cityLabels: Record<CityVariant, string> = {
  pforzheim: "Pforzheim",
  heilbronn: "Heilbronn",
  boeblingen: "Böblingen",
};

function BadgeCard({
  city,
  className,
}: {
  city: CityVariant;
  className?: string;
}) {
  const baseClassName =
    "z-10 pointer-events-auto rounded-lg border border-blooddiamond-primary/40 bg-blooddiamond-background/55 px-4 py-3 shadow-lg shadow-black/30 backdrop-blur-sm md:rounded-2xl md:bg-blooddiamond-background/80 md:px-6 md:py-6 md:shadow-xl";

  return (
    <div
      data-badge={city}
      className={[baseClassName, className].filter(Boolean).join(" ")}
    >
      <GoogleRating city={cityLabels[city]} />
    </div>
  );
}

const renderDesktopBadge = (city: CityVariant) => (
  <div className="relative h-60 w-48 sm:w-56 md:h-72 md:w-64">
    <div className="absolute inset-0 flex items-center justify-center">
      <BadgeCard city={city} />
    </div>
  </div>
);

export default function ReviewsStrip({ variant = "home" }: { variant?: Variant }) {
  const itemsHome: Array<{
    key: CityVariant;
    desktopClass?: string;
    mobileClass?: string;
  }> = [
    {
      key: "pforzheim",
      desktopClass: "md:-translate-y-6",
      mobileClass: "transform -translate-x-16 translate-y-4 scale-90"
    },
    {
      key: "heilbronn",
      desktopClass: "md:translate-y-8 md:translate-x-0",
      mobileClass: "transform -translate-y-4 scale-105"
    },
    {
      key: "boeblingen",
      desktopClass: "md:-translate-y-6",
      mobileClass: "transform translate-x-16 translate-y-4 scale-90"
    },
  ];

  if (variant === "home") {
    return (
      <div className="mx-auto w-full max-w-5xl px-6 pt-6">
        <div
          className="
            relative pointer-events-none isolation-isolate z-20 flex min-h-[320px]
            items-center justify-center
            md:min-h-0 md:flex-nowrap md:items-end md:gap-10
          "
        >
          <div className="contents md:hidden">
            <div className="relative flex items-center justify-center w-full h-full">
              {itemsHome.map((it) => (
                <div key={it.key} className={`absolute ${it.mobileClass}`}>
                  <BadgeCard city={it.key} />
                </div>
              ))}
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
                {renderDesktopBadge(it.key)}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const locationBadges: CityVariant[] = ["pforzheim", "heilbronn", "boeblingen"];

  return (
    <div className="mx-auto w-full max-w-3xl px-6 pt-4">
      <div className="badges-container flex flex-wrap items-center justify-center gap-2 md:hidden">
        {locationBadges.map((cityKey) => (
          <BadgeCard key={cityKey} city={cityKey} />
        ))}
      </div>
      <div className="hidden md:flex md:justify-center">
        <BadgeCard city={variant} />
      </div>
    </div>
  );
}
