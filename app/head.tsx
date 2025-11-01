import {
  socialPreviewImage,
  FB_APP_ID,
  SITE_NAME,
  defaultTitle,
  defaultDescription,
} from "./config/site";

export default function Head() {
  const og = socialPreviewImage; // absolute HTTPS-URL mit Cachebuster (?v=…)
  return (
    <>
      {/* Open Graph (serverseitig, im View-Source sichtbar) */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={defaultTitle} />
      <meta property="og:description" content={defaultDescription} />
      <meta property="og:image" content={og} />
      {/* width/height optional – wenn FB meckert, können wir sie später wieder hinzufügen */}
      <meta property="fb:app_id" content={FB_APP_ID} />

      {/* Twitter minimal halten, um nur eine Bildquelle zu haben */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={defaultTitle} />
      <meta name="twitter:description" content={defaultDescription} />
      {/* twitter:image weglassen (bewusst), um Doppelquellen zu vermeiden */}
    </>
  );
}
