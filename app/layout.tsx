import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LayoutWrapper } from "@/components/LayoutWrapper";
import { PageBackground } from "@/components/PageBackground";


const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas-neue"
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: "Blood Diamond Ink",
  description:
    "Tattoo Studios für Realistic, Fineline und Cover-Up Artworks in Pforzheim, Heilbronn und Böblingen."
};

export default function RootLayout({
  children
}: {
  children: ReactNode;
}) {

  return (
    <html lang="de">
      <body
        className={`relative bg-black text-white antialiased font-sans min-h-dvh ${bebasNeue.variable} ${inter.variable}`}
      >
        <PageBackground />
        <div className="relative z-10">
          <Header />
          <LayoutWrapper>
            <main className="bg-transparent">{children}</main>
          </LayoutWrapper>
          <Footer />
        </div>
      </body>
    </html>
  );
}
