"use client";

/**
 * Blood Diamond Ink. – Lokales Business-Schema (TattooParlor)
 * Reale Standortdaten + Öffnungszeiten 10–18 Uhr (Mo–Sa)
 * Brandname mit Punkt: "Blood Diamond Ink."
 */

import Script from "next/script";

export default function SeoSchemas() {
  const baseUrl = "https://blooddiamondink-79184164-7f1b7.web.app";

  const socialCommon = [
    "https://www.facebook.com/profile.php?id=61557864394966",
    "https://www.tiktok.com/@blood.diamond.ink",
    "https://www.youtube.com/@blooddiamondtattooink6955"
  ];

  const studios = [
    {
      "@context": "https://schema.org",
      "@type": "TattooParlor",
      "@id": `${baseUrl}/pforzheim#tattoostudio`,
      "name": "Blood Diamond Ink. Pforzheim",
      "brand": { "@type": "Brand", "name": "Blood Diamond Ink." },
      "image": `${baseUrl}/social_media_pre_cropped.png`,
      "url": `${baseUrl}/pforzheim`,
      "email": "pforzheim@blooddiamond-tattoo.de",
      "telephone": "+49 1512 3426609",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Maulbronner Straße 38",
        "addressLocality": "Ötisheim (Pforzheim)",
        "postalCode": "75443",
        "addressCountry": "DE"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 48.9588,
        "longitude": 8.7692
      },
      "openingHours": "Mo-Sa 10:00-18:00",
      "sameAs": [
        "https://www.instagram.com/blood_diamond_tattoo_ink/",
        ...socialCommon
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "TattooParlor",
      "@id": `${baseUrl}/boeblingen#tattoostudio`,
      "name": "Blood Diamond Ink. Böblingen",
      "brand": { "@type": "Brand", "name": "Blood Diamond Ink." },
      "image": `${baseUrl}/social_media_pre_cropped.png`,
      "url": `${baseUrl}/boeblingen`,
      "email": "boeblingen@blooddiamond-tattoo.de",
      "telephone": "+49 162 4204789",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Stuttgarter Straße 21",
        "addressLocality": "Herrenberg (Böblingen)",
        "postalCode": "71083",
        "addressCountry": "DE"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 48.5949,
        "longitude": 8.8696
      },
      "openingHours": "Mo-Sa 10:00-18:00",
      "sameAs": [
        "https://www.instagram.com/blood_diamond_ink_boeblingen/",
        ...socialCommon
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "TattooParlor",
      "@id": `${baseUrl}/heilbronn#tattoostudio`,
      "name": "Blood Diamond Ink. Heilbronn",
      "brand": { "@type": "Brand", "name": "Blood Diamond Ink." },
      "image": `${baseUrl}/social_media_pre_cropped.png`,
      "url": `${baseUrl}/heilbronn`,
      "email": "heilbronn@blooddiamond-tattoo.de",
      "telephone": "+49 176 30573128",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Lautenbacherstraße 6",
        "addressLocality": "Neckarsulm (Heilbronn)",
        "postalCode": "74172",
        "addressCountry": "DE"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 49.1882,
        "longitude": 9.2293
      },
      "openingHours": "Mo-Sa 10:00-18:00",
      "sameAs": [
        "https://www.instagram.com/blood_diamond_ink_heilbronn/",
        ...socialCommon
      ]
    }
  ];

  return (
    <>
      {studios.map((schema, index) => (
        <Script
          key={index}
          id={`schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
        />
      ))}
    </>
  );
}
