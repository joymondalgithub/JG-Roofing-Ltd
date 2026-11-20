import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { ServiceFAQ } from "../data/servicesData";

interface ServiceFAQAccordionProps {
  faqs: ServiceFAQ[];
  eyebrow?: string;
  heading?: string;
}

export default function ServiceFAQAccordion({
  faqs,
  eyebrow = "TECHNICAL QUESTIONS & ANSWERS",
  heading = "Frequently Asked Questions",
}: ServiceFAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2.5 h-2.5 bg-copper" />
          <span className="font-display text-xs font-bold text-copper uppercase tracking-widest">
            {eyebrow}
          </span>
        </div>
        <h2 className="font-display text-2xl sm:text-3xl text-white font-extrabold uppercase tracking-tight">
          {heading}
        </h2>
      </div>

      <div className="space-y-3">
        {faqs.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={item.question}
              className={`rounded-xl border transition-colors ${
                isOpen
                  ? "bg-navy-slate border-copper/50"
                  : "bg-navy-slate/70 border-navy-border hover:border-slate-700"
              }`}
            >
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full px-5 sm:px-6 py-4 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
              >
                <span className="font-display text-sm sm:text-base font-bold text-white leading-snug">
                  {item.question}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-copper shrink-0 transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isOpen && (
                <div className="px-5 sm:px-6 pb-5 pt-0 border-t border-navy-border/50 animate-fadeIn">
                  <p className="font-body text-xs sm:text-sm text-slate-300 leading-relaxed pt-3.5">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
