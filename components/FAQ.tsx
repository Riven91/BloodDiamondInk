
interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "Wie buche ich einen Termin?",
    answer: "Trage dich in wenigen Minuten über unser Formular ein. Wir melden uns für eine Erstberatung und finden gemeinsam einen Termin."
  },
  {
    question: "Wie bereite ich mich auf meinen Termin vor?",
    answer: "Komm ausgeruht und iss etwas. Vermeide Alkohol und blutverdünnende Medikamente. Trage bequeme Kleidung, die Zugang zur Stelle ermöglicht. Trink genug Wasser."
  },
  {
    question: "Wie läuft ein Cover-Up ab?",
    answer: "Wir prüfen dein bestehendes Tattoo, planen Größe und Stil und erstellen einen passenden Entwurf. Je nach Motiv sind mehrere Sitzungen sinnvoll."
  },
  {
    question: "Wie lange dauert die Heilung und wie pflege ich mein Tattoo?",
    answer: "Die Heilung dauert meistens zwei bis vier Wochen. Reinige die Stelle regelmäßig, trage Pflegeprodukte dünn auf und meide Sonne, Sauna und Schwimmbad. Du bekommst von uns klare Aftercare Guidelines."
  },
  {
    question: "Welche Hygienemaßnahmen werden ergriffen?",
    answer: "Wir arbeiten mit Einwegnadeln und Handschuhen. Geräte und Flächen werden regelmäßig desinfiziert. Die Abläufe sind steril und dokumentiert."
  },
  {
    question: "Kann ich mein Design vorher besprechen oder ändern?",
    answer: "Ja. Teile deine Ideen vorab mit deinem Artist. Kleine Anpassungen sind bis kurz vor dem Termin möglich. Wichtig ist, dass du dich mit dem Motiv wohlfühlst."
  },
  {
    question: "Wo sind eure Studios?",
    answer: "Pforzheim (Ötisheim), Heilbronn (Neckarsulm) und Böblingen (Herrenberg). Die Adressen findest du auf den jeweiligen Studioseiten."
  }
];

export function FAQ() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <div className="mb-8 text-center">
        <h2 className="font-display text-4xl uppercase text-blooddiamond-accent">Häufige Fragen</h2>
        <p className="max-w-xl mx-auto text-blooddiamond-text/70">
          Antworten auf deine Fragen zu Terminbuchung, Vorbereitung und Pflege.
        </p>
      </div>
      <div className="space-y-4">
        {faqItems.map((item) => (
          <details 
            key={item.question} 
            className="group rounded-lg bg-blooddiamond-muted/60 p-6 [&_summary::-webkit-details-marker]:hidden"
          >
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-blooddiamond-text">
              <h3 className="text-lg font-medium">{item.question}</h3>
              <span className="relative size-5 shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute inset-0 size-5 opacity-100 group-open:opacity-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute inset-0 size-5 opacity-0 group-open:opacity-100"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12H9"
                  />
                </svg>
              </span>
            </summary>
            <p className="mt-4 leading-relaxed text-blooddiamond-text/70">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
