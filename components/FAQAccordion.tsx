"use client";

import { useState } from "react";
import type { ReactNode } from "react";

export interface FAQItem {
  question: string;
  answer: ReactNode;
}

interface FAQAccordionProps {
  items: FAQItem[];
  id?: string;
}

export function FAQAccordion({ items, id }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id={id} className="mx-auto max-w-4xl px-6 py-16">
      <h2 className="mb-8 font-display text-4xl uppercase text-blooddiamond-accent">FAQ</h2>
      <div className="space-y-4">
        {items.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={item.question} className="rounded-xl border border-blooddiamond-primary/30 bg-blooddiamond-muted/60">
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${index}`}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-4 rounded-xl px-4 py-4 text-left text-sm font-semibold uppercase tracking-wide text-blooddiamond-text transition hover:bg-blooddiamond-accent/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blooddiamond-accent"
              >
                <span>{item.question}</span>
                <span aria-hidden="true" className="text-blooddiamond-accent">
                  {isOpen ? "−" : "+"}
                </span>
              </button>
              {isOpen ? (
                <div id={`faq-panel-${index}`} className="px-4 pb-4 text-sm text-blooddiamond-text/70">
                  {item.answer}
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </section>
  );
}
