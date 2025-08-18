import React, { useState } from 'react';

const Header = ({ toggleTheme, theme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
          <span>IIChE</span>-ChEMATHON
        </a>
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-blue-600">Home</a>
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#guidelines" className="hover:text-blue-600">Guidelines</a>
          <a href="#problems" className="hover:text-blue-600">Problem Statements</a>
          <a href="#registrations" className="hover:text-blue-600">Registration</a>
          <a href="#gallery" className="hover:text-blue-600">Gallery</a>
          <a href="#faq" className="hover:text-blue-600">FAQs</a>
          <a href="#sponsors" className="hover:text-blue-600">Sponsors</a>
          <a href="#committee" className="hover:text-blue-600">Committee</a>
          <a href="#contact" className="hover:text-blue-600">Contact Us</a>
        </nav>
        <div className="flex items-center">
          <button onClick={toggleTheme} className="mr-4">
            {theme === 'light' ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            )}
          </button>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden bg-white dark:bg-gray-800 px-6 pt-2 pb-4 space-y-2">
          <a href="#home" className="block hover:text-blue-600">Home</a>
          <a href="#about" className="block hover:text-blue-600">About</a>
          <a href="#guidelines" className="block hover:text-blue-600">Guidelines</a>
          <a href="#problems" className="block hover:text-blue-600">Problem Statements</a>
          <a href="#registrations" className="block hover:text-blue-600">Registration</a>
          <a href="#gallery" className="block hover:text-blue-600">Gallery</a>
          <a href="#faq" className="block hover:text-blue-600">FAQs</a>
          <a href="#sponsors" className="block hover:text-blue-600">Sponsors</a>
          <a href="#committee" className="block hover:text-blue-600">Committee</a>
          <a href="#contact" className="block hover:text-blue-600">Contact Us</a>
        </nav>
      )}
    </header>
  );
};

export default Header;
