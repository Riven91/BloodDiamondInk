import StandorteClientPage from './StandorteClientPage';

const ORIGIN = 'https://blooddiamondink-79184164-7f1b7.web.app';

export const metadata = {
  title: 'Tattoo-Studios in Baden-Württemberg – Standorte | Blood Diamond Tattoo Ink.',
  description:
    'Drei Standorte: Pforzheim, Heilbronn & Böblingen. Adresse, Öffnungszeiten und Kontakt – jetzt Termin vereinbaren.',
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
