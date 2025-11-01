import {
  socialPreviewImage,
  FB_APP_ID,
  SITE_NAME,
  defaultTitle,
  defaultDescription,
} from "./config/site";

export default function Head() {
  const og = socialPreviewImage; // Muss eine ABSOLUTE https-URL sein
  return (
    <>
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={defaultTitle} />
      <meta property="og:description" content={defaultDescription} />
      <meta property="og:image" content={og} />
      <meta property="fb:app_id" content={FB_APP_ID} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={defaultTitle} />
      <meta name="twitter:description" content={defaultDescription} />
      <meta name="twitter:image" content={og} />
    </>
  );
}
