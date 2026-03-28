"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How fast can you deliver a landing page?",
    answer: "Most premium landing pages are delivered in 4-7 days depending on scope and revisions.",
  },
  {
    question: "Do you provide copywriting?",
    answer: "Yes. I craft conversion-focused copy tailored to your offer, audience, and positioning.",
  },
  {
    question: "Can you redesign my current landing?",
    answer: "Absolutely. I can rebuild it with higher conversion flow, better visuals, and improved clarity.",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {faqs.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question} className="glass-card overflow-hidden">
            <button
              className="flex w-full items-center justify-between px-5 py-4 text-left"
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <span className="text-sm font-semibold">{item.question}</span>
              <span className="text-xs text-white/60">{isOpen ? "−" : "+"}</span>
            </button>
            <div
              className={`grid transition-all duration-300 ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden px-5 pb-4 text-sm text-white/70">
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
