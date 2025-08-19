import React, { useState } from 'react';
import { Linkedin, Github, Instagram } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Terms from './Terms';
import Privacy from './Privacy';

export default function Footer() {
  const year = new Date().getFullYear();
  const [openDoc, setOpenDoc] = useState(null); // 'privacy' | 'terms' | null
  const CLOSE_ANIM_DURATION = 280; // ms

  return (
    <>
      <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-6 py-10">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
            {/* Branding + short description */}
            <div className="max-w-md">
              <h4 className="text-lg font-bold text-gray-900 dark:text-gray-100">IIChE — ChEMATHON</h4>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                A student-led challenge to design sustainable solutions for real-world problems.
              </p>

              
              <div className="mt-4 flex items-center gap-3">
                <a
                  aria-label="GitHub"
                  href="#"
                  className="hover:opacity-80"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-5 h-5 text-gray-700 dark:text-gray-200" />
                </a>

                <a
                  aria-label="LinkedIn"
                  href="#"
                  className="hover:opacity-80"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-5 h-5 text-gray-700 dark:text-gray-200" />
                </a>

                <a
                  aria-label="Instagram"
                  href="#"
                  className="hover:opacity-80"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="w-5 h-5 text-gray-700 dark:text-gray-200" />
                </a>
              </div>
            </div>

            {/* Quick links / sitemap */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <h5 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Quick links</h5>
                <ul className="mt-3 space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li><a href="#home" className="hover:underline">Home</a></li>
                  <li><a href="#problems" className="hover:underline">Problem Statements</a></li>
                  <li><a href="#rules" className="hover:underline">Rules & Guidelines</a></li>
                  <li><a href="#faq" className="hover:underline">FAQ</a></li>
                </ul>
              </div>

              <div>
                <h5 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Support</h5>
                <ul className="mt-3 space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li><a href="mailto:team@mitmuzaffarpur.edu"  className="hover:underline">Contact: team@mitmuzaffarpur.edu</a></li> // email to be updated
                  <li><a href="#sponsors" className="hover:underline">Sponsors</a></li>
                  <li><a href="#volunteer" className="hover:underline">Volunteer</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* bottom row */}
          <div className="mt-8 border-t border-gray-100 dark:border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {year} IIChE-ChEMATHON. All Rights Reserved. <span className="mx-1">•</span> Created by 23IT MIT Muzaffarpur
            </p>

            <div className="flex items-center gap-4 text-sm">
              {/* open modal instead of navigating away */}
              <button
                onClick={(e) => { e.preventDefault(); setOpenDoc('privacy'); }}
                className="hover:underline text-gray-600 dark:text-gray-300"
              >
                Privacy
              </button>

              <button
                onClick={(e) => { e.preventDefault(); setOpenDoc('terms'); }}
                className="hover:underline text-gray-600 dark:text-gray-300"
              >
                Terms
              </button>

              <span className="text-gray-400">|</span>
              <span className="text-gray-500 text-xs">v1.2 • last updated Aug 18, 2025</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Modal that renders Privacy or Terms component */}
      <AnimatePresence>
        {openDoc && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpenDoc(null)}
              transition={{ duration: CLOSE_ANIM_DURATION / 1000 }}
            />

            {/* panel */}
            <motion.div
              className="relative z-10 w-full max-w-3xl mx-auto bg-white dark:bg-gray-900 rounded-lg shadow-xl overflow-auto max-h-[80vh] p-6"
              initial={{ y: 12, opacity: 0, scale: 0.995 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 12, opacity: 0, scale: 0.995 }}
              transition={{ duration: CLOSE_ANIM_DURATION / 1000, ease: 'easeInOut' }}
              role="dialog"
              aria-modal="true"
            >
              <button
                onClick={() => setOpenDoc(null)}
                className="absolute top-3 right-3 rounded-full w-9 h-9 flex items-center justify-center text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                aria-label="Close"
              >
                ✕
              </button>

              <div className="prose max-w-none text-gray-800 dark:text-gray-200">
                {openDoc === 'privacy' ? <Privacy /> : <Terms />}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
