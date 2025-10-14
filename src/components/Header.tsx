import React, { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import { type Theme } from '../../App';

interface HeaderProps {
  theme: Theme;
  toggleTheme: () => void;
}

const navItems = [
  { href: '#home', text: 'HOME', color: 'pink' },
  { href: '#about', text: 'ABOUT', color: 'cyan' },
  { href: '#themes', text: 'THEMES', color: 'yellow' },
  { href: '#prizes', text: 'PRIZES', color: 'purple' },
  { href: '#timeline', text: 'TIMELINE', color: 'pink' },
  { href: '#gallery', text: 'GALLERY', color: 'cyan' },
  { href: '#faq', text: 'FAQ', color: 'yellow' },
];

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <nav
        className="fixed w-full z-50 backdrop-blur-md border-b transition-all duration-300"
        style={{ background: 'var(--bg-glass)', borderColor: 'var(--border-color)' }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="hexagon w-10 h-10 bg-gradient-to-br from-neon-pink to-neon-cyan flex items-center justify-center pulse-glow">
                <i className="fas fa-atom text-white text-lg"></i>
              </div>
              <div>
                <div className="text-xl font-black righteous gradient-text">ChEMATHON</div>
                <div className="text-xs text-neon-yellow">2026 EDITION</div>
              </div>
            </div>

            <div className="hidden lg:flex items-center gap-6">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`hover:text-neon-${item.color} transition font-semibold text-sm`}
                  style={{ color: 'var(--text-primary)' }}
                >
                  {item.text}
                </a>
              ))}
              <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
              <a
                href="#register"
                className="btn-explosive bg-gradient-to-r from-neon-pink to-neon-cyan px-6 py-2 rounded-full font-bold text-black hover:scale-105 transition text-sm"
              >
                REGISTER NOW
              </a>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden text-2xl text-neon-pink"
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 transition-all duration-300 lg:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}
        style={{ background: 'var(--bg-primary)' }}
      >
        <button
          onClick={closeMobileMenu}
          className="absolute top-6 right-6 text-3xl text-neon-pink"
        >
          <i className="fas fa-times"></i>
        </button>
        <div className="flex flex-col items-center justify-center h-full space-y-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMobileMenu}
              className={`text-2xl font-bold hover:text-neon-${item.color} transition`}
              style={{ color: 'var(--text-primary)' }}
            >
              {item.text}
            </a>
          ))}
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <a
            href="#register"
            onClick={closeMobileMenu}
            className="bg-gradient-to-r from-neon-pink to-neon-cyan px-10 py-3 rounded-full font-black text-black text-lg"
          >
            REGISTER NOW
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
