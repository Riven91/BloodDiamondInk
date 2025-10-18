export interface LegalSection {
  title: string;
  paragraphs: string[];
}

export interface LegalDocument {
  title: string;
  lastUpdated: string;
  sections: LegalSection[];
  rawHtml?: string;
}
