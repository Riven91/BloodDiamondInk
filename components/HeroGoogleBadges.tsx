"use client";
import Image from "next/image";

type Props = {
  city?: "home" | "pforzheim" | "heilbronn" | "boeblingen";
};

export default function HeroGoogleBadges({ city = "home" }: Props) {
  const sources = {
    home: ["/blood_d1.png", "/blood_d2.png", "/blood_d3.png"],
    pforzheim: ["/blood_d1.png"],
    heilbronn: ["/blood_d2.png"],
    boeblingen: ["/blood_d3.png"],
  };

  const imgs = sources[city] || [];

  return (
    <div
      className="
        absolute inset-x-0 bottom-0 z-[30]
        flex justify-center items-end pb-3 md:pb-4
      "
    >
      <div
        className={`
          ${imgs.length > 1
            ? "grid grid-cols-3 gap-3 md:gap-6"
            : "flex justify-center"}
          justify-items-center items-end max-w-full
        `}
      >
        {imgs.map((src, i) => (
          <Image
            key={i}
            src={src}
            alt={`Google-Badge ${i + 1}`}
            width={160}
            height={160}
            priority
            loading="eager"
            className="h-10 md:h-14 w-auto object-contain"
          />
        ))}
      </div>
    </div>
  );
}
