import type { Metadata } from 'next';
import StandorteClientPage from './StandorteClientPage';
import { ORIGIN, socialPreviewImage } from '../config/site';

export const metadata: Metadata = {
  title: 'Tattoo-Studios in Baden-Württemberg – Standorte | Blood Diamond Tattoo Ink.',
  description:
    'Drei Standorte: Pforzheim, Heilbronn & Böblingen. Adresse, Öffnungszeiten und Kontakt – jetzt Termin vereinbaren.',
  alternates: {
    canonical: `${ORIGIN}/standorte`,
  },
  openGraph: {
    title: 'Tattoo-Studios in Baden-Württemberg – Standorte | Blood Diamond Tattoo Ink.',
    description:
      'Drei Standorte: Pforzheim, Heilbronn & Böblingen. Adresse, Öffnungszeiten und Kontakt – jetzt Termin vereinbaren.',
    type: 'website',
    url: `${ORIGIN}/standorte`,
    images: [
      {
        url: socialPreviewImage,
        width: 1200,
        height: 630,
        alt: 'Blood Diamond Tattoo – Social Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tattoo-Studios in Baden-Württemberg – Standorte | Blood Diamond Tattoo Ink.',
    description:
      'Drei Standorte: Pforzheim, Heilbronn & Böblingen. Adresse, Öffnungszeiten und Kontakt – jetzt Termin vereinbaren.',
    site: '@BloodDiamondInk',
    images: [socialPreviewImage],
  },
};

export default function StandortePage() {
  return <StandorteClientPage />;
}
