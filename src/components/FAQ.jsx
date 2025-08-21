// FAQ Component
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question:
      "What Is The Eligibility Criteria For Participating In The Hackathon?",
    answer:
      "All undergraduate and postgraduate students from recognized institutions are eligible to participate.",
  },
  {
    question: "Can I Register For The Hackathon On The Spot?",
    answer:
      "No, registrations must be completed before the deadline through the official portal.",
  },
  {
    question: "Can I Change My Team Members After Registration?",
    answer:
      "Team member changes are allowed only before the registration deadline.",
  },
  {
    question: "What Happens If My Idea Is Shortlisted For The Finals?",
    answer:
      "Shortlisted teams will be invited to present their projects in the grand finale.",
  },
  {
    question:
      "What Is The Format Of The Prelims, And Will They Be Held Online?",
    answer:
      "Yes, the prelims will be held online. Shortlisted teams must submit project demos and presentations before the given date.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="max-w-4xl mx-auto py-12 px-6">
      <h2 className="text-4xl font-bold text-center mb-12 text-blue-600 dark:text-blue-400">
        FAQ'S
      </h2>
      {faqs.map((faq, index) => (
        <div key={index} className="border-b py-4">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="flex justify-between items-center w-full text-left transition-colors duration-300"
          >
            <span
              className={`text-lg font-semibold transition-colors duration-300 ${
                openIndex === index
                  ? "text-red-600"
                  : "text-gray-900 dark:text-gray-100 hover:text-red-500"
              }`}
            >
              {faq.question}
            </span>
            {openIndex === index ? (
              <ChevronUp className="w-5 h-5 text-red-600 transition-transform duration-300" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-500 group-hover:text-red-500 transition-transform duration-300" />
            )}
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <p className="mt-3 pl-4 border-l-4 border-red-500 text-gray-600 dark:text-gray-300">
              {faq.answer}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}
