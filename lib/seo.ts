import { DefaultSeoProps } from "next-seo";

export const defaultSeo: DefaultSeoProps = {
  titleTemplate: "%s | Blood Diamond Ink",
  defaultTitle: "Blood Diamond Ink",
  description:
    "Tattoo Studios für Realistic, Fineline, Black & Grey und Cover-Up Kunst in Baden-Württemberg.",
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://blooddiamondink.de",
    siteName: "Blood Diamond Ink",
    images: [
      {
        url: "/og/og-pforzheim.jpg",
        width: 1200,
        height: 630,
        alt: "Blood Diamond Ink Tattoo Studios"
      }
    ]
  },
  twitter: {
    cardType: "summary_large_image"
  }
};
