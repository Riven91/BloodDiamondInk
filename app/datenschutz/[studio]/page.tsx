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
      title: "Datenschutz | Blood Diamond Ink",
      description: "Informationen zur Verarbeitung personenbezogener Daten durch Blood Diamond Ink.",
    };
  }

  return {
    title: `Datenschutz ${entry.city} | Blood Diamond Ink`,
    description: `Datenschutzhinweise für das Studio ${entry.city} von Blood Diamond Ink.`,
  };
}

export default function DatenschutzPage({ params }: PageProps) {
  const entry = getLegalEntry(params.studio);

  if (!entry) {
    notFound();
  }

  return (
    <LegalDocumentArticle
      document={entry.privacy}
      notice={`Verantwortlich für Datenschutzanfragen: ${entry.email} · Telefon ${entry.phone}`}
    />
  );
}
