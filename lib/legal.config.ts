export type LegalStudioSlug = "oetisheim" | "heilbronn" | "boeblingen";

export interface LegalSection {
  title: string;
  paragraphs: string[];
}

export interface LegalDocument {
  heading: string;
  updated: string;
  sections: LegalSection[];
}

export interface LegalEntry {
  slug: LegalStudioSlug;
  label: string;
  city: string;
  email: string;
  phone: string;
  addressNotice: string;
  imprint: LegalDocument;
  privacy: LegalDocument;
  terms: LegalDocument;
}

const baseCompanyParagraphs = [
  "Blood Diamond Ink Studios GmbH",
  "Geschäftsführung: Mira Schenk & Leonard Barth",
  "Registergericht: Amtsgericht Stuttgart (Eintragung in Vorbereitung)",
  "USt-IdNr.: wird nachgereicht",
];

function buildImprint({
  studio,
  address,
  email,
  phone,
}: {
  studio: string;
  address: string;
  email: string;
  phone: string;
}): LegalDocument {
  return {
    heading: `Impressum – ${studio}`,
    updated: "Stand: 02. Mai 2024",
    sections: [
      {
        title: "Angaben gemäß § 5 TMG",
        paragraphs: [...baseCompanyParagraphs, `Studio: ${studio}`, `Adresse: ${address}`],
      },
      {
        title: "Kontakt",
        paragraphs: [
          `Telefon: ${phone} (Studioleitung)`,
          `E-Mail: ${email}`,
          "Termine ausschließlich nach vorheriger Abstimmung",
        ],
      },
      {
        title: "Berufsrechtliche Regelungen",
        paragraphs: [
          "Tattoo-Dienstleistungen gemäß den Hygieneanforderungen des Landes Baden-Württemberg",
          "Mitgliedschaften und Zertifizierungen werden nach Veröffentlichung ergänzt",
        ],
      },
      {
        title: "Verbraucherstreitbeilegung / OS-Plattform",
        paragraphs: [
          "Wir sind weder verpflichtet noch bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.",
          "Plattform der EU-Kommission zur Online-Streitbeilegung: https://ec.europa.eu/consumers/odr",
        ],
      },
      {
        title: "Haftung für Inhalte & Links",
        paragraphs: [
          "Wir prüfen Inhalte mit größter Sorgfalt, übernehmen jedoch keine Haftung für externe Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.",
        ],
      },
    ],
  };
}

function buildPrivacy({
  studio,
  email,
  phone,
}: {
  studio: string;
  email: string;
  phone: string;
}): LegalDocument {
  return {
    heading: `Datenschutzerklärung – ${studio}`,
    updated: "Stand: 02. Mai 2024",
    sections: [
      {
        title: "1. Einleitung",
        paragraphs: [
          `${studio} verarbeitet personenbezogene Daten ausschließlich zur Terminorganisation, Beratung und Nachbetreuung von Tattoo-Dienstleistungen.`,
          "Diese Erklärung informiert dich über Art, Umfang und Zweck der Verarbeitung sowie deine Rechte.",
        ],
      },
      {
        title: "2. Verantwortliche Stelle",
        paragraphs: [
          "Verantwortlich: Blood Diamond Ink Studios GmbH",
          `Studioleitung: ${studio}`,
          `Kontakt: ${email} · Telefon ${phone}`,
        ],
      },
      {
        title: "3. Termin- und Beratungsanfragen",
        paragraphs: [
          "Wir verarbeiten Namen, Kontaktinformationen, Motivdetails und Referenzbilder, um deine Anfrage zu prüfen und Termine vorzuschlagen.",
          "Die Daten werden innerhalb unseres CRM-Systems gespeichert und nach Abschluss des Projekts gemäß gesetzlichen Aufbewahrungsfristen gelöscht.",
        ],
      },
      {
        title: "4. Zahlungs- und Vertragsabwicklung",
        paragraphs: [
          "Rechnungs- und Zahlungsdaten werden zur Erfüllung steuerrechtlicher Pflichten verarbeitet und an unsere Steuerberatung weitergegeben.",
          "Anzahlungen werden dokumentiert, um Terminreservierungen zu bestätigen.",
        ],
      },
      {
        title: "5. Foto- und Videodokumentation",
        paragraphs: [
          "Nur mit deiner ausdrücklichen Zustimmung fertigen wir Foto- oder Videoaufnahmen an, z. B. zur Ergebnisdokumentation oder für Social-Media-Beiträge.",
          "Widerrufst du deine Einwilligung, löschen wir die betreffenden Aufnahmen unverzüglich, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.",
        ],
      },
      {
        title: "6. Deine Rechte",
        paragraphs: [
          "Du hast das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit sowie Widerspruch.",
          "Beschwerden können an den Landesbeauftragten für den Datenschutz und die Informationsfreiheit Baden-Württemberg (Königstraße 10a, 70173 Stuttgart) gerichtet werden.",
        ],
      },
      {
        title: "7. Datenschutzkontakt",
        paragraphs: [
          `Für Datenschutzanfragen wende dich an ${email}. Wir beantworten Anfragen in der Regel innerhalb von 14 Tagen.`,
        ],
      },
    ],
  };
}

function buildTerms({
  studio,
  email,
}: {
  studio: string;
  email: string;
}): LegalDocument {
  return {
    heading: `Allgemeine Geschäftsbedingungen – ${studio}`,
    updated: "Stand: 02. Mai 2024",
    sections: [
      {
        title: "1. Geltungsbereich",
        paragraphs: [
          "Diese AGB gelten für alle Dienstleistungen von Blood Diamond Ink gegenüber Kund:innen des jeweiligen Studios.",
          "Abweichende Vereinbarungen bedürfen der Schriftform.",
        ],
      },
      {
        title: "2. Terminvereinbarung & Anzahlungen",
        paragraphs: [
          "Termine werden verbindlich, sobald die vereinbarte Anzahlung eingegangen ist. Die Höhe richtet sich nach Projektumfang und wird vorab kommuniziert.",
          "Bei Absagen bis 72 Stunden vor dem Termin wird die Anzahlung als Guthaben für einen Ersatztermin gutgeschrieben. Danach verfällt sie zugunsten des Studios, es sei denn, der Termin kann neu vergeben werden.",
        ],
      },
      {
        title: "3. Vorbereitung & Gesundheit",
        paragraphs: [
          "Kund:innen sind verpflichtet, uns über relevante Vorerkrankungen, Allergien oder Medikamenteneinnahme zu informieren.",
          "Wir behalten uns vor, Termine bei gesundheitlichen Bedenken oder fehlender Vorbereitung (z. B. Sonnenbrand) kurzfristig abzusagen.",
        ],
      },
      {
        title: "4. Preise & Zahlungsmodalitäten",
        paragraphs: [
          "Die Abrechnung erfolgt nach Zeitaufwand ab 150 € pro Stunde oder zum Festpreis. Zahlungsarten: Barzahlung oder EC-/Kreditkarte.",
          "Offene Restbeträge sind unmittelbar nach der Session zu begleichen.",
        ],
      },
      {
        title: "5. Nachsorge & Haftung",
        paragraphs: [
          "Wir stellen Aftercare-Hinweise bereit und leisten innerhalb von sechs Wochen kostenfreie Nachkontrollen, sofern Pflegehinweise befolgt wurden.",
          "Für Komplikationen, die auf unsachgemäße Pflege zurückzuführen sind, übernehmen wir keine Haftung.",
        ],
      },
      {
        title: "6. Gutscheine & Übertragbarkeit",
        paragraphs: [
          "Gutscheine sind drei Jahre gültig und auf andere Personen übertragbar, sofern das Studio informiert wird.",
          `Rückfragen zu Gutscheinen richten Sie bitte an ${email}.`,
        ],
      },
      {
        title: "7. Schlussbestimmungen",
        paragraphs: [
          "Es gilt deutsches Recht. Gerichtsstand ist der Sitz des Studios, sofern gesetzlich zulässig.",
        ],
      },
    ],
  };
}

export const legalConfig: Record<LegalStudioSlug, LegalEntry> = {
  oetisheim: {
    slug: "oetisheim",
    label: "Studio Oetisheim",
    city: "Oetisheim",
    email: "hello@blooddiamondink.example",
    phone: "+49 7041 000000",
    addressNotice: "Adresse folgt, 75443 Oetisheim",
    imprint: buildImprint({
      studio: "Studio Oetisheim (Backoffice)",
      address: "Adresse folgt, 75443 Oetisheim",
      email: "hello@blooddiamondink.example",
      phone: "+49 7041 000000",
    }),
    privacy: buildPrivacy({
      studio: "Studio Oetisheim",
      email: "hello@blooddiamondink.example",
      phone: "+49 7041 000000",
    }),
    terms: buildTerms({
      studio: "Studio Oetisheim",
      email: "hello@blooddiamondink.example",
    }),
  },
  heilbronn: {
    slug: "heilbronn",
    label: "Studio Heilbronn",
    city: "Heilbronn",
    email: "heilbronn@blooddiamondink.example",
    phone: "+49 7131 000000",
    addressNotice: "Adresse folgt, 74072 Heilbronn",
    imprint: buildImprint({
      studio: "Studio Heilbronn",
      address: "Adresse folgt, 74072 Heilbronn",
      email: "heilbronn@blooddiamondink.example",
      phone: "+49 7131 000000",
    }),
    privacy: buildPrivacy({
      studio: "Studio Heilbronn",
      email: "heilbronn@blooddiamondink.example",
      phone: "+49 7131 000000",
    }),
    terms: buildTerms({
      studio: "Studio Heilbronn",
      email: "heilbronn@blooddiamondink.example",
    }),
  },
  boeblingen: {
    slug: "boeblingen",
    label: "Studio Böblingen",
    city: "Böblingen",
    email: "boeblingen@blooddiamondink.example",
    phone: "+49 7031 000000",
    addressNotice: "Adresse folgt, 71032 Böblingen",
    imprint: buildImprint({
      studio: "Studio Böblingen",
      address: "Adresse folgt, 71032 Böblingen",
      email: "boeblingen@blooddiamondink.example",
      phone: "+49 7031 000000",
    }),
    privacy: buildPrivacy({
      studio: "Studio Böblingen",
      email: "boeblingen@blooddiamondink.example",
      phone: "+49 7031 000000",
    }),
    terms: buildTerms({
      studio: "Studio Böblingen",
      email: "boeblingen@blooddiamondink.example",
    }),
  },
};

export const legalSlugs: LegalStudioSlug[] = Object.keys(legalConfig) as LegalStudioSlug[];

export function getLegalEntry(slug: string): LegalEntry | undefined {
  return legalConfig[slug as LegalStudioSlug];
}
