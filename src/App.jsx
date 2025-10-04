import React, { useState, useEffect } from 'react';

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Guidelines from './components/Guidelines';
import ProblemStatements from './components/ProblemStatements';
import Registration from './components/Registration';
import Gallery from './components/Gallery';
import FAQ from './components/FAQ';
import Sponsors from './components/Sponsors';
import Committee from './components/Committee';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTopButton from './components/ui/BackToTopButton';


// Main App Component
const App = () => {
  // Initialize theme from localStorage or system preference
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme;
    }
    // Check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  });

  useEffect(() => {
    // Apply theme to document
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    // Save to localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Listen for system theme changes when no manual preference is set
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (!savedTheme) {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = (e) => {
        if (e.matches) {
          setTheme('dark');
        } else {
          setTheme('light');
        }
      };

      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, []);

  const toggleTheme = () => {
    console.log('Toggling theme from', theme, 'to', theme === 'light' ? 'dark' : 'light');
    setTheme(prevTheme => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      console.log('New theme set to:', newTheme);
      return newTheme;
    });
  };

  // Debug: Log current theme state
  useEffect(() => {
    console.log('Current theme state:', theme);
    console.log('Dark class on document:', document.documentElement.classList.contains('dark'));
  }, [theme]);

  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-sans">
      <Header toggleTheme={toggleTheme} theme={theme} />
      <main>
        <Home />
        <About />
        <Guidelines />
        <ProblemStatements />
        <Registration />
        <Gallery />
        <FAQ />
        <Sponsors />
        <Committee />
        <Contact />
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  );
};























export default App;
