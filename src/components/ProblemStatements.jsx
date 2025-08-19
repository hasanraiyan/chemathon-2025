import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';



export default function ProblemStatements() {
  const CLOSE_ANIM_DURATION = 320;
  const problems = [
    {
      id: 'sdg6',
      title: 'SDG6 - Clean Water and Sanitation',
      icon: '💧',
      details: [
        'Design A Low-Cost, Portable Water Purification Device Using Sustainable Materials.',
        'Develop An IoT-Based Water Quality Monitoring System For Rural Areas.',
        'Innovate A Membrane Technology For Efficient Desalination With Reduced Energy Consumption.',
        'Create A Smart Rainwater Harvesting System For Industrial Use.',
        'Develop A Decentralized Wastewater Treatment System For Small Communities.',
        'Design An Automatic Irrigation System Using Recycled Wastewater.',
        'Create A Biosensor For Real-Time Monitoring Of Heavy Metals In Water.',
        'Innovate A Compact System For Removing Microplastics From Wastewater.',
        'Design A Self-Sustaining Sewage Treatment Unit Using Microbial Fuel Cells.',
        'Create A Low-Energy, Solar-Powered System For Arsenic Removal From Groundwater.',
      ],
    },
    { id: 'sdg7', title: 'SDG7 - Affordable and Clean Energy', icon: '☀️', details: ['Example idea 1', 'Example idea 2'] },
    { id: 'sdg9', title: 'SDG9 - Industry, Innovation, and Infrastructure', icon: '🏭', details: ['Example A', 'Example B'] },
    { id: 'sdg11', title: 'SDG11 - Sustainable Cities and Communities', icon: '🏙️', details: ['Example A', 'Example B'] },
    { id: 'sdg12', title: 'SDG12 - Responsible Consumption and Production', icon: '♻️', details: ['Example A', 'Example B'] },
    { id: 'sdg13', title: 'SDG13 - Climate Action', icon: '🌍', details: ['Example A', 'Example B'] },
  ];

  const [selected, setSelected] = useState(null);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    document.body.style.overflow = selected && !isClosing ? 'hidden' : '';
    return () => (document.body.style.overflow = '');
  }, [selected, isClosing]);

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
    setIsClosing(false);
    setSelected(problem);
  }


  function closeModal() {
    setIsClosing(true);
    setTimeout(() => {
      setSelected(null);
      setIsClosing(false);
    }, CLOSE_ANIM_DURATION);
  }

  return (
    <section id="problems" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Problem <span className="text-blue-600 dark:text-blue-400">Statements</span>
        </h2>

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
      </div>

      {/* Modal / expanded view */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-start justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop - uses isClosing to animate out */}
            <motion.div
              className="absolute inset-0 bg-black/50"
              onClick={closeModal}
              initial={{ opacity: 0 }}
              animate={isClosing ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: CLOSE_ANIM_DURATION / 1000, ease: 'easeInOut' }}
            />

            
            <motion.div
              layoutId={selected.id}
              className="relative z-50 max-w-2xl w-full bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-xl shadow-2xl p-8 overflow-auto max-h-[85vh]"
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
           
              animate={isClosing ? { opacity: 0, y: 12, scale: 0.995 } : { opacity: 1, y: 0, scale: 1 }}
              initial={false}
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
    </section>
  );
}
