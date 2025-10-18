'use client';

import { usePathname } from 'next/navigation';
import { Footer } from '@/components/Footer';
import { FooterBoeblingen } from '@/components/FooterBoeblingen';

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isBoeblingen = pathname.startsWith('/boeblingen');

  return (
    <>
      {children}
      {isBoeblingen ? <FooterBoeblingen /> : <Footer />}
    </>
  );
}
