import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './ui/Button';

// Define navigation links for better management
const primaryLinks = [
  { href: '#about', label: 'About' },
  { href: '#problems', label: 'Problem Statements' },
  { href: '#guidelines', label: 'Guidelines' },
  { href: '#faq', label: 'FAQs' },
];

const secondaryLinks = [
  { href: '#sponsors', label: 'Sponsors' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#committee', label: 'Committee' },
  { href: '#contact', label: 'Contact Us' },
];

// Header Component
const Header = ({ toggleTheme, theme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);

  // Effect to disable body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    // Cleanup function to re-enable scroll if component unmounts while menu is open
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-md sticky top-0 z-40">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold">
            <span className="text-primary dark:text-primary-light">IIChE-</span>
            <span className="text-accent">ChEMATHON</span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {primaryLinks.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-primary transition-colors">
                {link.label}
              </a>
            ))}
            
            {/* More Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setIsMoreMenuOpen(!isMoreMenuOpen)}
                onBlur={() => setTimeout(() => setIsMoreMenuOpen(false), 150)}
                className="flex items-center gap-1 hover:text-primary transition-colors"
              >
                More <ChevronDown className={`w-4 h-4 transition-transform ${isMoreMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {isMoreMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 mt-2 w-48 bg-white dark:bg-gray-700 rounded-md shadow-lg py-1 z-50 ring-1 ring-black ring-opacity-5"
                  >
                    {secondaryLinks.map((link) => (
                      <a 
                        key={link.href} 
                        href={link.href} 
                        className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"
                        onClick={() => setIsMoreMenuOpen(false)}
                      >
                        {link.label}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button href="#registrations" variant="outline" size="sm">
              Register Now
            </Button>
            <button 
              onClick={toggleTheme} 
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </button>
          </div>
          
          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden items-center">
            <button 
              onClick={toggleTheme} 
              className="mr-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </button>
            <button 
              onClick={() => setIsMenuOpen(true)} 
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Open navigation menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Panel */}
      <AnimatePresence>
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 z-50">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-black/50"
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Panel */}
            <motion.nav 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="absolute top-0 right-0 h-full w-[80%] max-w-sm bg-white dark:bg-gray-800 flex flex-col"
              role="dialog"
              aria-modal="true"
            >
              <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
                <a href="#home" onClick={() => setIsMenuOpen(false)} className="text-xl font-bold">
                  <span className="text-primary dark:text-primary-light">IIChE-</span>
                  <span className="text-accent">ChEMATHON</span>
                </a>
                <button 
                  onClick={() => setIsMenuOpen(false)} 
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  aria-label="Close navigation menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <div className="flex-grow p-6 space-y-4 overflow-y-auto">
                {primaryLinks.map((link) => (
                  <a key={link.href} href={link.href} className="block py-2 text-lg hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                    {link.label}
                  </a>
                ))}

                <hr className="my-4 border-gray-200 dark:border-gray-700" />
                
                {secondaryLinks.map((link) => (
                  <a key={link.href} href={link.href} className="block py-2 text-lg hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                    {link.label}
                  </a>
                ))}
              </div>

              <div className="p-6 border-t border-gray-200 dark:border-gray-700">
                <Button href="#registrations" variant="primary" size="lg" className="w-full" onClick={() => setIsMenuOpen(false)}>
                  Register Now
                </Button>
              </div>
            </motion.nav>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;