import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Process from './components/Process';
import Themes from './components/Themes';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Registration from './components/Registration';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Schedule from './components/Schedule';

const App: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Process />
        <Themes />
        <Gallery />
        <Schedule />
        <Testimonials />
        <Registration />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
