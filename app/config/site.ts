// AKTUELLER HOST (Preview). Beim Live-Umzug wieder ENV-Logik reaktivieren.
export const ORIGIN = "https://blooddiamondink-79184164-7f1b7.web.app";
export const metadataBase = new URL(ORIGIN);
// Cache-Buster zwingt alle Crawler zu frischem Abruf
export const socialPreviewImage = new URL(
  "/social_media_pre_cropped.png?v=20251101",
  metadataBase
).toString();
export const FB_APP_ID = "743928489653716";
export const fbAppId = FB_APP_ID;
export const SITE_NAME = "Blood Diamond Tattoo Ink.";
export const siteName = SITE_NAME;
export const defaultTitle = "Tattoo Studios in Baden-Württemberg";
export const defaultDescription =
  "Blood Diamond Ink. vereint Realistic, Fineline und Cover-Up Artists in Pforzheim, Heilbronn und Böblingen.";
