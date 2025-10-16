import { LegalDocument, LegalSection } from "@/lib/legal.config";

interface LegalDocumentArticleProps {
  document: LegalDocument;
  notice?: string;
}

function Section({ section }: { section: LegalSection }) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold tracking-tight">{section.title}</h2>
      <div className="space-y-3">
        {section.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </div>
  );
}

export function LegalDocumentArticle({ document, notice }: LegalDocumentArticleProps) {
  if (document.rawHtml) {
    return <div dangerouslySetInnerHTML={{ __html: document.rawHtml }} />;
  }

  return (
    <article className="prose prose-invert mx-auto py-12 lg:py-24">
      <div className="space-y-2 not-prose">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          {document.heading}
        </h1>
        <p className="text-muted-foreground">Zuletzt aktualisiert: {document.updated}</p>
        {notice && <p className="text-amber-300">{notice}</p>}
      </div>

      <div className="mt-12 space-y-12">
        {document.sections.map((section) => (
          <Section key={section.title} section={section} />
        ))}
      </div>
    </article>
  );
}
