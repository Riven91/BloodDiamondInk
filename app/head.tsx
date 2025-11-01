import { headers } from "next/headers";

export default function Head() {
  const h = headers();
  const host = h.get("x-forwarded-host") || h.get("host") || "localhost";
  const proto = h.get("x-forwarded-proto") || "https";
  const origin = `${proto}://${host}`;
  const URL = `${origin}/`;
  const IMG = `${origin}/social_media_pre_cropped.png`;
  const TITLE = "Blood Diamond Tattooing – Tattoo-Kunst in Baden-Württemberg";
  const DESC = "Internationale Artists, preisgekrönte Designs und kompromisslose Hygiene.";

  return (
    <>
      {/* Canonical */}
      <link rel="canonical" href={URL} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={URL} />
      <meta property="og:title" content={TITLE} />
      <meta property="og:description" content={DESC} />
      <meta property="og:image" content={IMG} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:site_name" content="Blood Diamond Tattoo Ink." />
      <meta property="og:locale" content="de_DE" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={TITLE} />
      <meta name="twitter:description" content={DESC} />
      <meta name="twitter:image" content={IMG} />
    </>
  );
}
