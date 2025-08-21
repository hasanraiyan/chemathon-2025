// FAQ Component
import { useState, useRef } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Section from './ui/Section';
import Container from './ui/Container';

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
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true, amount: 0.5 });

  return (
    <Section id="faq" background="bg-white dark:bg-gray-800" padding="py-20">
      <Container maxWidth="max-w-4xl">
        <motion.h2
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isTitleInView ? 1 : 0, y: isTitleInView ? 0 : 20 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 text-blue-600 dark:text-blue-400">
          Frequently Asked Questions
        </motion.h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div key={index} layout className="border-b dark:border-gray-700 pb-4">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex justify-between items-center w-full text-left transition-colors duration-300 group"
              >
                <span
                  className={`text-lg font-semibold transition-colors duration-300 ${
                    openIndex === index
                      ? "text-primary dark:text-primary-light"
                      : "text-gray-900 dark:text-gray-100 group-hover:text-primary dark:group-hover:text-primary-light"
                  }`}
                >
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-primary dark:text-primary-light transition-transform duration-300" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500 group-hover:text-primary dark:group-hover:text-primary-light transition-transform duration-300" />
                )}
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p className="mt-3 pl-4 border-l-4 border-accent text-gray-600 dark:text-gray-300">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}