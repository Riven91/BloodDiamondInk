import { ORIGIN } from "./config/site";

export default function Head() {
  // Ein Host, zwei Umgebungen: ORIGIN aus Config, via ENV übersteuerbar
  const origin =
    (typeof process !== "undefined" && process.env.NEXT_PUBLIC_ORIGIN) || ORIGIN;
  const og = `${origin}/social_media_pre_cropped.png`;

  return (
    <>
      {/* Open Graph – nur Bild ergänzen, Titel/Desc/URL existieren bereits */}
      <meta property="og:image" content={og} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/png" />

      {/* Twitter */}
      <meta name="twitter:image" content={og} />
    </>
  );
}
