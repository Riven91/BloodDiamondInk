import { socialPreviewImage } from "./config/site";

export default function Head() {
  return (
    <>
      {/* FB benötigt EXPLIZIT property, kein name */}
      <meta property="fb:app_id" content="743928489653716" />
      {/* optional: redundante Sicherheit */}
      <meta property="og:type" content="website" />
      <meta property="og:image" content={socialPreviewImage} />
    </>
  );
}
