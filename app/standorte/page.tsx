import StandorteClientPage from './StandorteClientPage';
import { ORIGIN } from '../config/site';

export const metadata = {
  title: 'Tattoo-Studios in Baden-Württemberg – Standorte | Blood Diamond Tattoo Ink.',
  description:
    'Drei Standorte: Pforzheim, Heilbronn & Böblingen. Adresse, Öffnungszeiten und Kontakt – jetzt Termin vereinbaren.',
  alternates: {
    canonical: 'https://blooddiamond-tattoo.de/standorte',
  },
  openGraph: {
    title: 'Tattoo-Studios in Baden-Württemberg – Standorte | Blood Diamond Tattoo Ink.',
    description:
      'Drei Standorte: Pforzheim, Heilbronn & Böblingen. Adresse, Öffnungszeiten und Kontakt – jetzt Termin vereinbaren.',
    url: `${ORIGIN}/standorte`,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tattoo-Studios in Baden-Württemberg – Standorte | Blood Diamond Tattoo Ink.',
    description:
      'Drei Standorte: Pforzheim, Heilbronn & Böblingen. Adresse, Öffnungszeiten und Kontakt – jetzt Termin vereinbaren.',
    site: '@BloodDiamondInk',
  },
};

export default function StandortePage() {
  return <StandorteClientPage />;
}
