import type { LegalDocument } from "@/lib/legal.config";

interface LegalDocumentProps {
  document: LegalDocument;
  notice?: string;
}

export function LegalDocumentArticle({ document, notice }: LegalDocumentProps) {
  return (
    <article className="mx-auto max-w-4xl space-y-8 px-6 py-16 text-sm leading-relaxed text-blooddiamond-text/80">
      <header className="space-y-2">
        <h1 className="font-display text-4xl uppercase text-blooddiamond-accent">{document.heading}</h1>
        <p className="text-xs uppercase tracking-wide text-blooddiamond-text/50">{document.updated}</p>
        {notice ? <p className="text-xs text-blooddiamond-text/60">{notice}</p> : null}
      </header>
      {document.sections.map((section) => (
        <section
          key={section.title}
          className="rounded-xl border border-blooddiamond-primary/30 bg-blooddiamond-muted/60 p-6 shadow-sm shadow-black/20"
        >
          <h2 className="font-display text-lg uppercase text-blooddiamond-text">{section.title}</h2>
          <div className="mt-3 space-y-2">
            {section.paragraphs.map((paragraph, index) => (
              <p key={`${section.title}-${index}`}>{paragraph}</p>
            ))}
          </div>
        </section>
      ))}
    </article>
  );
}
