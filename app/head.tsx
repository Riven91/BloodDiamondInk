// Harter Fallback im <head> – stellt sicher, dass OG nie fehlt,
// selbst wenn irgendeine Page-Metadata mal überschreibt.
import {
  socialPreviewImage,
  fbAppId,
  siteName,
  defaultTitle,
  defaultDescription,
} from "./config/site";

export default function Head() {
  const og = socialPreviewImage;

  return (
    <>
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={defaultTitle} />
      <meta property="og:description" content={defaultDescription} />
      <meta property="og:image" content={og} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="fb:app_id" content={fbAppId} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={defaultTitle} />
      <meta name="twitter:description" content={defaultDescription} />
      <meta name="twitter:image" content={og} />
    </>
  );
}
