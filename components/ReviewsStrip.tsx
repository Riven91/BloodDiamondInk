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
    "z-10 pointer-events-auto rounded-lg border border-blooddiamond-primary/40 bg-blooddiamond-background/55 px-2.5 py-3 shadow-lg shadow-black/30 backdrop-blur-sm md:rounded-2xl md:bg-blooddiamond-background/80 md:px-6 md:py-6 md:shadow-xl";

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

  if (variant === "home") {
    return (
      <div className="mx-auto w-full max-w-5xl px-6 pt-6">
        <div
          className="
            relative pointer-events-none isolation-isolate z-20 min-h-[320px]
            md:min-h-0 md:flex md:flex-nowrap md:items-end md:justify-center md:gap-10
          "
        >
          <div className="md:hidden flex w-full justify-center">
            <div className="relative flex flex-col items-center gap-3 mt-4 px-4 z-10 max-md:mt-5">
              <BadgeCard
                city="pforzheim"
                className="scale-[0.6] sm:scale-[0.7] md:scale-100 max-md:translate-x-[-90px] max-md:translate-y-[-18px]"
              />
              <BadgeCard
                city="heilbronn"
                className="scale-[0.6] sm:scale-[0.7] md:scale-100 max-md:translate-x-0 max-md:translate-y-0"
              />
              <BadgeCard
                city="boeblingen"
                className="scale-[0.6] sm:scale-[0.7] md:scale-100 max-md:translate-x-[90px] max-md:translate-y-[-18px]"
              />
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

  return (
    <div className="mx-auto w-full max-w-3xl px-6 pt-4 flex justify-center">
      <BadgeCard city={variant} />
    </div>
  );
}
