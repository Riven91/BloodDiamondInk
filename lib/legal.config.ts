export type LegalStudioSlug = "oetisheim" | "heilbronn" | "boeblingen";

export interface LegalSection {
  title: string;
  paragraphs: string[];
}

export interface LegalDocument {
  heading: string;
  updated: string;
  sections: LegalSection[];
  rawHtml?: string;
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

const oetisheimImprintHtml = `
<div style="max-width: 800px; margin: auto; color: #e9ecef; padding: 1rem;">

  <h2 style="color: #0f5132; font-size: 2.5rem; font-weight: bold; text-align: center; margin-bottom: 0.5rem;">
    Impressum
  </h2>

  <p style="text-align: center; font-style: italic; margin-bottom: 2.5rem; color: #adb5bd;">
    Stand: 16. Mai 2025
  </p>

  <!-- Studioadresse -->
  <div style="margin-bottom: 2.5rem;">
    <h3 style="font-size: 1.5rem; font-weight: bold; border-bottom: 1px solid #495057; padding-bottom: 0.5rem; margin-bottom: 1rem;">
      Anbieterkennzeichnung & Studioadresse
    </h3>
    <p style="margin: 0; line-height: 1.6;">
      <strong>Blood Diamond Tattoo Ink</strong><br>
      Inhaber: Kasper Nowicki<br>
      Maulbronner Str. 38<br>
      75443 Ötisheim (Pforzheim)<br>
    </p>
  </div>

  <!-- Rechtliche Angaben -->
  <div style="margin-bottom: 2.5rem;">
    <h3 style="font-size: 1.5rem; font-weight: bold; border-bottom: 1px solid #495057; padding-bottom: 0.5rem; margin-bottom: 1rem;">
      Rechtliche Angaben
    </h3>
    <p style="margin: 0; line-height: 1.6;">
      <strong>Telefon:</strong> 01512 3426609<br>
      <strong>E-Mail:</strong> <a href="mailto:pforzheim@blooddiamond-tattoo.de" style="color: #6ea8fe; text-decoration: none;">pforzheim@blooddiamond-tattoo.de</a><br>
      <br>
      <strong>Angaben gemäß § 5 DDG</strong><br>
      Umsatzsteuer-Identifikationsnummer gemäß § 27 a UStG: DE [USt-ID einsetzen]<br>
      <br>
      <strong>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV:</strong><br>
      Kasper Nowicki, Maulbronner Str. 38, 75443 Ötisheim<br>
      <br>
      <strong>Aufsichtsbehörde:</strong> Handwerkskammer Karlsruhe<br>
      <strong>Berufsbezeichnung:</strong> Tätowierer – Handwerksbetrieb gemäß HwO<br>
      <br>
      <strong>Online-Streitbeilegung gemäß Art. 14 Abs. 1 ODR-VO:</strong><br>
      Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit, die Sie hier finden: <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" style="color: #6ea8fe; text-decoration: none;">https://ec.europa.eu/consumers/odr/</a>
    </p>
  </div>

  <!-- Haftungsausschluss -->
  <div style="margin-bottom: 2.5rem;">
    <h3 style="color: #0f5132; font-size: 1.5rem; font-weight: bold; border-bottom: 1px solid #495057; padding-bottom: 0.5rem; margin-bottom: 1rem;">
      Haftungsausschluss
    </h3>
    <div style="line-height: 1.6;">
        <p style="margin-bottom: 1rem;">
          <strong>Haftung für Inhalte</strong><br>
          Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
        </p>
        <p style="margin-bottom: 1rem;">
          <strong>Haftung für Links</strong><br>
          Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
        </p>
        <p>
          <strong>Urheberrecht</strong><br>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Beiträge Dritter sind als solche gekennzeichnet. Eine Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
        </p>
    </div>
  </div>

  <!-- Copyright -->
  <p style="text-align: center; margin-top: 3rem; padding-top: 1.5rem; border-top: 1px solid #495057; font-size: 0.9rem; color: #adb5bd;">
    © 2025 Blood Diamond Tattoo Ink – Alle Rechte vorbehalten.
  </p>

</div>
`;

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

const boeblingenImprint: LegalDocument = {
  heading: "Impressum – Blood Diamond Tattoo Ink. Böblingen",
  updated: "Stand: 16. Oktober 2025",
  sections: [
    {
      title: "Angaben gemäß § 5 DDG",
      paragraphs: [
        "Blood Diamond Tattoo Ink. Böblingen",
        "Leitung: Kevin Kaiser",
        "Stuttgarter Str. 21",
        "71083 Herrenberg (Böblingen)",
        "Telefon: 0162 4204789",
        "E-Mail: boeblingen@blooddiamond-tattoo.de",
      ],
    },
    {
      title: "Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV",
      paragraphs: [
        "Kevin Kaiser",
        "Stuttgarter Str. 21",
        "71083 Herrenberg (Böblingen)",
      ],
    },
    {
      title: "Umsatzsteuer-Identifikationsnummer gemäß § 27 a UStG",
      paragraphs: ["DE [Nummer folgt]"],
    },
    {
      title: "Haftungsausschluss",
      paragraphs: [
        "Haftung für Inhalte: Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.",
        "Haftung für Links: Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.",
      ],
    },
    {
      title: "Urheberrecht",
      paragraphs: [
        "Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Beiträge Dritter sind als solche gekennzeichnet. Eine Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.",
      ],
    },
    {
      title: "Copyright",
      paragraphs: ["© 2025 Blood Diamond Tattoo Ink. – Alle Rechte vorbehalten."],
    },
  ],
};

const boeblingenPrivacy: LegalDocument = {
  heading: "Datenschutzerklärung – Blood Diamond Tattoo Ink. Böblingen",
  updated: "Stand: 16. Oktober 2025",
  sections: [
    {
      title: "1. Einleitung",
      paragraphs: [
        "Blood Diamond Tattoo Ink. Böblingen nimmt den Schutz personenbezogener Daten sehr ernst. Wir verarbeiten deine Informationen ausschließlich zur Terminplanung, Beratung und Nachbetreuung unserer Tattoo-Dienstleistungen.",
        "Diese Datenschutzerklärung informiert dich über Art, Umfang und Zweck der Datenverarbeitung sowie über deine Rechte als betroffene Person.",
      ],
    },
    {
      title: "2. Verantwortliche Stelle",
      paragraphs: [
        "Verantwortlich im Sinne der DSGVO: Blood Diamond Tattoo Ink. Böblingen",
        "Leitung: Kevin Kaiser",
        "Stuttgarter Str. 21, 71083 Herrenberg (Böblingen)",
        "Telefon: 0162 4204789",
        "E-Mail: boeblingen@blooddiamond-tattoo.de",
      ],
    },
    {
      title: "3. Erhebung personenbezogener Daten",
      paragraphs: [
        "Wir verarbeiten personenbezogene Daten, die du uns freiwillig zur Verfügung stellst, insbesondere über unser Kontaktformular, per E-Mail oder telefonisch. Dazu gehören Name, Kontaktinformationen, Motivdetails sowie Referenzbilder.",
        "Darüber hinaus erheben wir technische Daten (z. B. IP-Adresse, Browsertyp) bei der Nutzung unserer Website zur Gewährleistung der Systemsicherheit.",
      ],
    },
    {
      title: "4. Zwecke und Rechtsgrundlagen",
      paragraphs: [
        "Die Verarbeitung erfolgt zur Vorbereitung und Durchführung von Tattoo-Terminen, zur Kundenkommunikation und zur Erfüllung gesetzlicher Pflichten (Art. 6 Abs. 1 lit. b und c DSGVO).",
        "Mit deiner Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) können wir deine Kontaktdaten für Follow-up-Kommunikation und Aftercare-Hinweise verwenden.",
      ],
    },
    {
      title: "5. Speicherdauer und Sicherheit",
      paragraphs: [
        "Personenbezogene Daten speichern wir nur so lange, wie es für die genannten Zwecke erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen.",
        "Unsere Systeme sind durch technische und organisatorische Maßnahmen geschützt, um Daten vor Verlust, Manipulation oder unbefugtem Zugriff zu bewahren.",
      ],
    },
    {
      title: "6. Weitergabe an Dritte",
      paragraphs: [
        "Eine Weitergabe deiner Daten erfolgt ausschließlich, wenn dies zur Vertragserfüllung erforderlich ist (z. B. Steuerberatung) oder eine gesetzliche Verpflichtung besteht.",
        "Dienstleister, die wir einsetzen, werden vertraglich zur Einhaltung der Datenschutzstandards verpflichtet.",
        "Blood Diamond Tattoo Ink. Böblingen nutzt zentrale Systeme der Blood Diamond Tattoo Ink. Studios zur Termin- und Kund:innenverwaltung. Der Zugriff ist auf autorisierte Personen beschränkt und erfolgt auf Grundlage eines gemeinsamen Datenschutzkonzepts.",
      ],
    },
    {
      title: "7. Einsatz von Cookies und Tracking-Technologien",
      paragraphs: [
        "Unsere Website kann Cookies und vergleichbare Technologien einsetzen, um die Benutzerfreundlichkeit zu verbessern. Du kannst den Einsatz von Cookies jederzeit über die Einstellungen deines Browsers steuern.",
        "Analysedienste werden nur aktiviert, wenn du zuvor eingewilligt hast.",
      ],
    },
    {
      title: "8. Rechte der betroffenen Personen",
      paragraphs: [
        "Du hast das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit sowie Widerspruch gegen die Verarbeitung deiner personenbezogenen Daten.",
        "Beschwerden kannst du an den Landesbeauftragten für den Datenschutz und die Informationsfreiheit Baden-Württemberg, Königstraße 10a, 70173 Stuttgart, richten.",
      ],
    },
    {
      title: "9. Kontakt für Datenschutzanfragen",
      paragraphs: [
        "Für Fragen zum Datenschutz wende dich bitte an boeblingen@blooddiamond-tattoo.de oder telefonisch an 0162 4204789. Wir beantworten Anfragen in der Regel innerhalb von 14 Tagen.",
      ],
    },
  ],
};

const boeblingenTerms: LegalDocument = {
  heading: "Allgemeine Geschäftsbedingungen – Blood Diamond Tattoo Ink. Böblingen",
  updated: "Stand: 16. Oktober 2025",
  sections: [
    {
      title: "1. Geltungsbereich",
      paragraphs: [
        "Diese AGB gelten für alle Dienstleistungen von Blood Diamond Tattoo Ink. Böblingen gegenüber Kund:innen des Studios Böblingen.",
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
        "Rückfragen zu Gutscheinen richten Sie bitte an boeblingen@blooddiamond-tattoo.de.",
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

export const legalConfig: Record<LegalStudioSlug, LegalEntry> = {
  oetisheim: {
    slug: "oetisheim",
    label: "Studio Ötisheim",
    city: "Ötisheim",
    email: "pforzheim@blooddiamond-tattoo.de",
    phone: "01512 3426609",
    addressNotice: "Maulbronner Str. 38, 75443 Ötisheim",
    imprint: {
      heading: "Impressum – Studio Ötisheim",
      updated: "Stand: 16. Mai 2025",
      sections: [],
      rawHtml: oetisheimImprintHtml,
    },
    privacy: buildPrivacy({
      studio: "Studio Ötisheim",
      email: "pforzheim@blooddiamond-tattoo.de",
      phone: "01512 3426609",
    }),
    terms: {
      ...buildTerms({
        studio: "Studio Ötisheim",
        email: "pforzheim@blooddiamond-tattoo.de",
      }),
      heading: "Allgemeine Geschäftsbedingungen",
      updated: "Stand: 16. Oktober 2025",
    },
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
    email: "boeblingen@blooddiamond-tattoo.de",
    phone: "0162 4204789",
    addressNotice: "Stuttgarter Str. 21, 71083 Herrenberg (Böblingen)",
    imprint: boeblingenImprint,
    privacy: boeblingenPrivacy,
    terms: boeblingenTerms,
  },
};

export const legalSlugs: LegalStudioSlug[] = Object.keys(legalConfig) as LegalStudioSlug[];

export function getLegalEntry(slug: string): LegalEntry | undefined {
  return legalConfig[slug as LegalStudioSlug];
}
