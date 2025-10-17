import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getLegalEntry, legalSlugs } from "@/lib/legal.config";

interface PageProps {
  params: {
    studio: string;
  };
}

const BRAND_NAME = "Blood Diamond Tattoo Ink.";
const studioReplacements: Record<string, string> = {
  "Studio Ötisheim": "Blood Diamond Tattoo Ink. Ötisheim",
  "Studio Heilbronn": "Blood Diamond Tattoo Ink. Heilbronn",
  "Studio Böblingen": "Blood Diamond Tattoo Ink. Böblingen",
};

function sanitizeText(value: string): string {
  let sanitized = value;

  Object.entries(studioReplacements).forEach(([search, replacement]) => {
    sanitized = sanitized.replaceAll(search, replacement);
  });

  sanitized = sanitized.replace(/Blood Diamond Tattoo Ink(?!\.)/g, BRAND_NAME);

  return sanitized;
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

  const sections = (entry.terms?.sections ?? []).map((section) => ({
    title: sanitizeText(section.title),
    paragraphs: section.paragraphs.map((paragraph) => sanitizeText(paragraph)),
  }));

  const updated = sanitizeText(entry.terms?.updated ?? "");

  return (
    <section className="mx-auto max-w-3xl px-6 text-center">
      <h1 className="font-display text-4xl uppercase text-blooddiamond-accent pt-10 mb-6 text-center">
        Allgemeine Geschäftsbedingungen
      </h1>
      {updated ? (
        <div className="text-sm text-blooddiamond-text/70 mb-6">{updated}</div>
      ) : null}

      <div className="space-y-8 text-blooddiamond-text/90">
        {sections.map((section) => (
          <div key={section.title} className="space-y-3">
            <h2 className="mt-4 mb-2 font-semibold text-blooddiamond-accent text-center">{section.title}</h2>
            <div className="space-y-2 text-center">
              {section.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-center">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
