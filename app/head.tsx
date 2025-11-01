import { socialPreviewImage } from "./config/site";

export default function Head() {
  const og = socialPreviewImage;

  return (
    <>
      {/* Open Graph – nur Bild ergänzen, Titel/Desc/URL existieren bereits */}
      <meta property="fb:app_id" content="743928489653716" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={og} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/png" />

      {/* Twitter */}
      <meta name="twitter:image" content={og} />
    </>
  );
}
