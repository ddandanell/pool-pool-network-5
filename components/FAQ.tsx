'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  faqs: FAQItem[];
  title?: string;
}

export default function FAQ({ faqs, title = 'Frequently Asked Questions' }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50" aria-labelledby="faq-heading">
      <div className="section-container">
        <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold text-center mb-12 text-pool-darker">
          {title}
        </h2>
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="card bg-white border border-gray-200"
              itemScope
              itemType="https://schema.org/Question"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-pool focus:ring-offset-2 rounded-lg"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className="font-semibold text-lg text-pool-darker pr-4" itemProp="name">
                  {faq.question}
                </h3>
                <span className="text-pool flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="h-6 w-6" aria-hidden="true" />
                  ) : (
                    <ChevronDown className="h-6 w-6" aria-hidden="true" />
                  )}
                </span>
              </button>
              <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 mt-4 pt-4 border-t border-gray-200' : 'max-h-0'
                }`}
                itemScope
                itemType="https://schema.org/Answer"
                itemProp="acceptedAnswer"
                role="region"
                aria-hidden={openIndex !== index}
              >
                <p className="text-gray-700" itemProp="text">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
