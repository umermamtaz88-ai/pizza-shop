"use client";

import { useState, type ReactNode } from "react";

export type AccordionItem = {
  id: string;
  question: string;
  answer: ReactNode;
};

type AccordionProps = {
  items: AccordionItem[];
  allowMultiple?: boolean;
  className?: string;
};

export default function Accordion({
  items,
  allowMultiple = false,
  className = "",
}: AccordionProps) {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        if (!allowMultiple) next.clear();
        next.add(id);
      }
      return next;
    });
  };

  return (
    <div className={`divide-y divide-neutral-200 rounded-xl border border-neutral-200 bg-white shadow-sm ${className}`}>
      {items.map(({ id, question, answer }) => {
        const isOpen = openIds.has(id);
        return (
          <div key={id} className="first:rounded-t-xl last:rounded-b-xl overflow-hidden">
            <button
              type="button"
              onClick={() => toggle(id)}
              className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left text-sm font-medium text-neutral-900 hover:bg-neutral-50 transition-colors focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#ea580c]"
              aria-expanded={isOpen}
              aria-controls={`accordion-answer-${id}`}
              id={`accordion-question-${id}`}
            >
              <span>{question}</span>
              <svg
                className={`h-5 w-5 shrink-0 text-neutral-500 ${isOpen ? "rotate-180" : ""}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            <div
              id={`accordion-answer-${id}`}
              role="region"
              aria-labelledby={`accordion-question-${id}`}
              className={`grid ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
            >
              <div className="overflow-hidden">
                <div className="border-t border-neutral-100 px-4 py-3 text-sm text-neutral-600">
                  {answer}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
