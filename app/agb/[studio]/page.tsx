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
      title: "AGB | Blood Diamond Tattoo Ink.",
      description: "Allgemeine Geschäftsbedingungen für Termine bei Blood Diamond Tattoo Ink.",
    };
  }

  return {
    title: `Tattoo Studio ${entry.city} | AGB – Blood Diamond Tattoo Ink.`,
    description: `AGB und Studioregeln für Blood Diamond Tattoo Ink. ${entry.city}.`,
  };
}

export default function AgbPage({ params }: PageProps) {
  const entry = getLegalEntry(params.studio);

  if (!entry) {
    notFound();
  }

  const notice =
    entry.slug === "oetisheim"
      ? undefined
      : `Gültig für Termine im Studio ${entry.city}. Rückfragen an ${entry.email}.`;

  return <LegalDocumentArticle document={entry.terms} notice={notice} />;
}
