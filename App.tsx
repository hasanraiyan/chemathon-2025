import React, { useState, useEffect } from 'react';
import Header from './src/components/Header';
import ParticleBackground from './src/components/ParticleBackground';
import Hero from './src/components/Hero';
import Sponsors from './src/components/Sponsors';
import About from './src/components/About';
import Themes from './src/components/Themes';
import Prizes from './src/components/Prizes';
import Timeline from './src/components/Timeline';
import Gallery from './src/components/Gallery';
import Registration from './src/components/Registration';
import Faq from './src/components/Faq';
import Contact from './src/components/Contact';
import Footer from './src/components/Footer';

export type Theme = 'light' | 'dark';

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    const initialTheme = savedTheme || 'dark';
    setTheme(initialTheme);
    document.documentElement.setAttribute('data-theme', initialTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <>
      <ParticleBackground theme={theme} />
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Sponsors />
        <About />
        <Themes />
        <Prizes />
        <Timeline />
        <Gallery />
        <Registration />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
