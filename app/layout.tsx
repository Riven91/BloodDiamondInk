import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LayoutWrapper } from "@/components/LayoutWrapper";


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
        className={`bg-blooddiamond-background text-blooddiamond-text antialiased ${bebasNeue.variable} ${inter.variable} font-body`}
      >
        <div
          className="fixed inset-0 z-[-1] opacity-5"
          style={{
            backgroundImage: "url('/Herobackground2_v5.png')",
            backgroundSize: '40%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
          }}
        />
        <Header />
        <LayoutWrapper>
          <main className="bg-transparent">{children}</main>
        </LayoutWrapper>
        <Footer />
      </body>
    </html>
  );
}
