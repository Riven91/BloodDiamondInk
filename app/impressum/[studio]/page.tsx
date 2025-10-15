import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { LegalDocumentArticle } from "@/components/LegalDocument";
import { getLegalEntry, legalSlugs } from "@/lib/legal.config";

interface PageProps {
  params: {
    studio: string;
  };
}

export function generateStaticParams() {
  return legalSlugs.map((studio) => ({ studio }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const entry = getLegalEntry(params.studio);

  if (!entry) {
    return {
      title: "Impressum | Blood Diamond Ink",
      description: "Rechtliche Angaben für die Studios von Blood Diamond Ink.",
    };
  }

  return {
    title: `Impressum ${entry.city} | Blood Diamond Ink`,
    description: `Rechtliche Angaben und Kontaktinformationen für das Studio ${entry.city}.`,
  };
}

export default function ImpressumPage({ params }: PageProps) {
  const entry = getLegalEntry(params.studio);

  if (!entry) {
    notFound();
  }

  return (
    <LegalDocumentArticle
      document={entry.imprint}
      notice={`Studioadresse: ${entry.addressNotice} · Telefon ${entry.phone}`}
    />
  );
}
