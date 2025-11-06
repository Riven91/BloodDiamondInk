// Fester Preview-Host; beim Umzug wieder ENV-Logik reaktivieren.
export const ORIGIN = "https://blooddiamond-tattoo.de";
export const metadataBase = new URL(ORIGIN);
// Harte Cache-Busting-Version, damit Crawler garantiert neu ziehen
export const socialPreviewImage: string = new URL(
  "/social_media_pre_cropped.png?v=20251101d",
  metadataBase
).toString();
export const FB_APP_ID = "743928489653716";
export const fbAppId = FB_APP_ID;
export const SITE_NAME = "Blood Diamond Tattoo Ink.";
export const siteName = SITE_NAME;
export const defaultTitle = "Tattoo Studios in Baden-Württemberg";
export const defaultDescription =
  "Blood Diamond Ink. vereint Realistic, Fineline und Cover-Up Artists in Pforzheim, Heilbronn und Böblingen.";
