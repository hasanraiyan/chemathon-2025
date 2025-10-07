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


// Main App Component
const App = () => {
  const [theme, setTheme] = useState(() => {
    // Check localStorage for saved theme, default to 'light'
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'light';
  });

  useEffect(() => {
    // Apply theme to document and save to localStorage
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

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
    </div>
  );
};























export default App;
