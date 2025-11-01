import type { Metadata } from 'next';
import StandorteClientPage from './StandorteClientPage';
import { ORIGIN } from '../config/site';

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
    url: `${ORIGIN}/standorte`,
  },
  twitter: {
    title: 'Tattoo-Studios in Baden-Württemberg – Standorte | Blood Diamond Tattoo Ink.',
    description:
      'Drei Standorte: Pforzheim, Heilbronn & Böblingen. Adresse, Öffnungszeiten und Kontakt – jetzt Termin vereinbaren.',
  },
};

export default function StandortePage() {
  return <StandorteClientPage />;
}
