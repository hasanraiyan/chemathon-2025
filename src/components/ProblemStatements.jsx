import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import Section from './ui/Section';
import Container from './ui/Container';
import { sdgProblems } from '../data/problems';

// This component displays a list of Sustainable Development Goal (SDG) problem statements.
// Clicking a card opens a full-screen modal with more details.
export default function ProblemStatements() {
  const problems = sdgProblems.map(sdg => ({
    id: sdg.id,
    title: sdg.title,
    icon: sdg.icon,
    details: sdg.details
  }));

  const [selected, setSelected] = useState(null);
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true, amount: 0.5 });

  useEffect(() => {
    document.body.style.overflow = selected ? 'hidden' : '';
    return () => (document.body.style.overflow = '');
  }, [selected]);

  const listVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.09,
        delayChildren: 0.12,
        ease: 'easeOut',
        duration: 0.35,
      },
    },
    exit: { opacity: 0, y: 8, transition: { duration: 0.18 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0, transition: { ease: 'easeOut' } },
  };

  function openCard(problem) {
    setSelected(problem);
  }

  function closeModal() {
    setSelected(null);
  }

  return (
    <Section id="problems" background="bg-white dark:bg-gray-800">
      <Container>
        <motion.h2
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isTitleInView ? 1 : 0, y: isTitleInView ? 0 : 20 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12">
          Problem <span className="text-blue-600 dark:text-blue-400">Statements</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map(problem => (
            <motion.div
              key={problem.id}
              layoutId={problem.id}
              onClick={() => openCard(problem)}
              className="bg-gray-100 dark:bg-gray-900 p-6 rounded-lg shadow-lg text-center cursor-pointer"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            >
              <div className="text-4xl mb-4">{problem.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">{problem.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">Click to view problem statements related to this SDG.</p>
            </motion.div>
          ))}
        </div>
      </Container>

      {/* Modal / expanded view */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-start justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/50"
              onClick={closeModal}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
            />

            <motion.div
              layoutId={selected.id}
              className="relative z-50 max-w-2xl w-full bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-xl shadow-2xl p-8 overflow-auto max-h-[85vh]"
            >
              <button
                onClick={closeModal}
                aria-label="Close"
                className="absolute top-4 right-4 rounded-full w-9 h-9 flex items-center justify-center text-xl font-bold text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                ✕
              </button>

              <div className="flex items-center gap-4 mb-4">
                <div className="text-3xl">{selected.icon}</div>
                <h3 className="text-2xl font-extrabold">{selected.title}</h3>
              </div>

              {/* If there are details, show them with animation */}
              {selected.details && (
                <motion.ol
                  className="list-decimal ml-6 space-y-3 text-gray-700 dark:text-gray-300"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={listVariants}
                >
                  {selected.details.map((d, i) => (
                    <motion.li key={i} variants={itemVariants} className="leading-relaxed">
                      {d}
                    </motion.li>
                  ))}
                </motion.ol>
              )}

              {/* Fallback if no details */}
              {!selected.details && <p className="text-gray-600 dark:text-gray-400">No problem statements available.</p>}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
