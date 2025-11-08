import React from 'react';
import { FAQS } from '../constants';

interface FaqItemProps {
  question: string;
  answer: string;
  delay: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer, delay }) => {
  return (
    <details
      className="bg-white rounded-xl p-6 border border-gray-200 group"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <summary className="cursor-pointer font-bold text-lg flex justify-between items-center">
        <span>{question}</span>
        <i className="fas fa-chevron-down group-open:rotate-180 transition-transform"></i>
      </summary>
      <p className="mt-4 text-gray-600 pt-4 border-t border-gray-100">{answer}</p>
    </details>
  );
};

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <div className="text-sm font-bold text-blue-600 mb-4 mono tracking-wider">
              GOT QUESTIONS?
            </div>
            <h2 className="text-5xl font-black">
              <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                FAQ
              </span>
            </h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <FaqItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                delay={((index + 1) * 100).toString()}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
