import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Header Component
const Header = ({ toggleTheme, theme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold">
          <span className="text-primary dark:text-primary-light">IIChE-</span>
          <span className="text-accent">ChEMATHON</span>
        </a>
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-primary transition-colors">Home</a>
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#guidelines" className="hover:text-primary transition-colors">Guidelines</a>
          <a href="#problems" className="hover:text-primary transition-colors">Problem Statements</a>
          <a href="#registrations" className="hover:text-primary transition-colors">Registration</a>
          <a href="#gallery" className="hover:text-primary transition-colors">Gallery</a>
          <a href="#faq" className="hover:text-primary transition-colors">FAQs</a>
          <a href="#sponsors" className="hover:text-primary transition-colors">Sponsors</a>
          <a href="#committee" className="hover:text-primary transition-colors">Committee</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact Us</a>
        </nav>
        <div className="flex items-center">
          <button 
            onClick={toggleTheme} 
            className="mr-4 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
          </button>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav 
            className="md:hidden bg-white dark:bg-gray-800 px-6 pt-2 pb-4 space-y-2 border-t border-gray-200 dark:border-gray-700"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
          >
            <a href="#home" className="block py-2 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#about" className="block py-2 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#guidelines" className="block py-2 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Guidelines</a>
            <a href="#problems" className="block py-2 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Problem Statements</a>
            <a href="#registrations" className="block py-2 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Registration</a>
            <a href="#gallery" className="block py-2 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Gallery</a>
            <a href="#faq" className="block py-2 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>FAQs</a>
            <a href="#sponsors" className="block py-2 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Sponsors</a>
            <a href="#committee" className="block py-2 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Committee</a>
            <a href="#contact" className="block py-2 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Contact Us</a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header