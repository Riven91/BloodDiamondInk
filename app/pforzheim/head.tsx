const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "TattooParlor",
  name: "Blood Diamond Tattoo Ink. Pforzheim",
  image: "https://blooddiamondink-79184164-7f1b7.web.app/assets/hero_pforzheim.webp",
  "@id": "https://blooddiamondink-79184164-7f1b7.web.app/pforzheim",
  url: "https://blooddiamondink-79184164-7f1b7.web.app/pforzheim",
  telephone: "+49-1512-3426609",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Maulbronner Str. 38",
    addressLocality: "Ötisheim",
    postalCode: "75443",
    addressRegion: "Baden-Württemberg",
    addressCountry: "DE",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    opens: "10:00",
    closes: "18:00",
  },
  priceRange: "$$",
  description:
    "Internationale Tattoo-Artists, preisgekrönte Designs & kompromisslose Hygiene. Realistic, Fineline, Black & Grey (Black and Grey) und Cover-Ups auf Weltklasse-Niveau.",
};

export default function Head() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
    </>
  );
}
