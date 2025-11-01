// Primärdomain produktiv
const DEFAULT_ORIGIN = "https://blooddiamond-tattoo.de";
// Optional: Previews/Emulatoren dürfen per ENV überschreiben
export const ORIGIN =
  (typeof process !== "undefined" && process.env.NEXT_PUBLIC_ORIGIN) ||
  DEFAULT_ORIGIN;
export const metadataBase = new URL(ORIGIN);
export const socialPreviewImage = new URL(
  "/social_media_pre_cropped.png",
  metadataBase,
).toString();
