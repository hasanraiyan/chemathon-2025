import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.pageYOffset - 80, // 80px offset for fixed header
        behavior: 'smooth',
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed w-full bg-white border-b border-gray-200 z-50 shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="flex items-center gap-3 cursor-pointer"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <i className="fas fa-atom text-white text-xl"></i>
            </div>
            <div>
              <div className="font-bold text-xl">ChEMATHON</div>
              <div className="text-xs text-gray-500 mono">2026 Edition</div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-sm font-medium hover:text-blue-600 transition"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#register"
              onClick={(e) => handleLinkClick(e, '#register')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:shadow-lg transition"
            >
              REGISTER
            </a>
          </nav>

          <button className="lg:hidden text-2xl" onClick={() => setIsMenuOpen(true)}>
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-full h-screen bg-white lg:hidden z-50 transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex justify-end p-6">
          <button className="text-2xl" onClick={() => setIsMenuOpen(false)}>
            <i className="fas fa-times"></i>
          </button>
        </div>
        <nav className="flex flex-col items-center gap-6 px-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-lg font-medium hover:text-blue-600 transition"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#register"
            onClick={(e) => handleLinkClick(e, '#register')}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold"
          >
            REGISTER
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
