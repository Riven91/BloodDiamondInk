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
    "z-10 pointer-events-auto";

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
  <div className="relative h-40 w-36 sm:w-40 md:h-48 md:w-44">
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
      desktopClass: "md:translate-y-4",
      mobileClass: "transform -translate-x-16 -translate-y-6 scale-75"
    },
    {
      key: "heilbronn",
      desktopClass: "md:-translate-y-5",
      mobileClass: "transform translate-y-0 scale-75"
    },
    {
      key: "boeblingen",
      desktopClass: "md:translate-y-4",
      mobileClass: "transform translate-x-16 -translate-y-6 scale-75"
    },
  ];

  if (variant === "home") {
    return (
      <div className="mx-auto w-full max-w-5xl px-6 pt-6">
        <div
          className={
            "relative pointer-events-none isolation-isolate z-20 flex min-h-40 items-end justify-center md:min-h-0 md:flex-nowrap md:items-end md:gap-4"
          }
        >
          {/* Mobile layout */}
          <div className="contents md:hidden">
            <div className="relative flex items-center justify-center w-full h-full">
              {itemsHome.map((it) => (
                <div key={it.key} className={`absolute ${it.mobileClass}`}>
                  <BadgeCard city={it.key} />
                </div>
              ))}
            </div>
          </div>

          {/* Desktop layout */}
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

  // For city-specific pages, render only the badge for that city.
  return (
    <div className="flex w-full items-center justify-center">
      <BadgeCard city={variant} />
    </div>
  );
}
