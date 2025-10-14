import React from 'react';
import { type Theme } from '../../App';
interface ThemeToggleProps {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, toggleTheme }) => {
  return (
    <div
      onClick={toggleTheme}
      className="relative w-14 h-7 bg-gradient-to-r from-neon-pink to-neon-cyan rounded-full cursor-pointer transition-all duration-300 flex items-center px-1"
    >
      <div
        className={`absolute w-6 h-6 bg-white rounded-full transition-transform duration-300 flex items-center justify-center text-xs ${theme === 'light' ? 'translate-x-7' : 'translate-x-0'}`}
      >
        <i className={`fa-solid ${theme === 'dark' ? 'fa-moon' : 'fa-sun'} text-gray-800`}></i>
      </div>
    </div>
  );
};

export default ThemeToggle;
