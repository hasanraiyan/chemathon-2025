import React from 'react';
import Countdown from './Countdown';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden"
    >
      <div className="absolute top-20 left-10 w-40 h-40 bg-neon-pink opacity-20 rounded-full blur-3xl floating-element"></div>
      <div
        className="absolute bottom-20 right-10 w-60 h-60 bg-neon-cyan opacity-20 rounded-full blur-3xl floating-element"
        style={{ animationDelay: '1s' }}
      ></div>
      <div
        className="absolute top-1/2 left-1/2 w-80 h-80 bg-neon-yellow opacity-10 rounded-full blur-3xl floating-element"
        style={{ animationDelay: '2s' }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          <div className="flex flex-wrap justify-center gap-3 mb-6 animate__animated animate__fadeInDown">
            <span className="bg-gradient-to-r from-neon-pink to-red-500 px-4 py-1.5 rounded-full text-xs font-bold text-white">
              🔥 36 HOURS
            </span>
            <span className="bg-gradient-to-r from-neon-cyan to-blue-500 px-4 py-1.5 rounded-full text-xs font-bold text-white">
              💰 ₹2L+ PRIZES
            </span>
            <span className="bg-gradient-to-r from-neon-yellow to-yellow-500 px-4 py-1.5 rounded-full text-xs font-bold text-black">
              ⚡ HARDWARE HACK
            </span>
          </div>

          <h1
            className="text-5xl md:text-7xl font-black mb-4 righteous animate__animated animate__zoomIn"
            style={{ color: 'var(--text-primary)' }}
          >
            <div className="wave-text">
              {'ChEMATHON'.split('').map((char, index) => (
                <span key={index}>{char}</span>
              ))}
            </div>
            <div className="glitch gradient-text text-4xl md:text-6xl" data-text="2026">
              2026
            </div>
          </h1>

          <div className="max-w-3xl mx-auto mb-8 animate__animated animate__fadeInUp">
            <p className="text-xl md:text-3xl font-bold mb-2 text-neon-yellow">HACK THE FUTURE</p>
            <p className="text-base" style={{ color: 'var(--text-secondary)' }}>
              Build Hardware Solutions • Save the Planet • Win Big
            </p>
          </div>

          <Countdown />

          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8 text-sm">
            <div className="flex items-center gap-2">
              <i className="fas fa-calendar-alt text-xl text-neon-pink"></i>
              <div className="text-left">
                <div className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                  DATE
                </div>
                <div className="font-bold" style={{ color: 'var(--text-primary)' }}>
                  13 - 15 March 2026
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-map-marker-alt text-xl text-neon-cyan"></i>
              <div className="text-left">
                <div className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                  VENUE
                </div>
                <div className="font-bold" style={{ color: 'var(--text-primary)' }}>
                  IIT PATNA
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#register"
              className="btn-explosive bg-gradient-to-r from-neon-pink via-red-500 to-neon-pink px-8 py-3 rounded-full font-black text-base hover:scale-110 transition-all shadow-2xl text-white"
            >
              <i className="fas fa-rocket mr-2"></i> REGISTER NOW
            </a>
            <a
              href="#"
              className="border-2 border-neon-cyan text-neon-cyan px-8 py-3 rounded-full font-black text-base hover:bg-neon-cyan hover:text-black transition-all"
            >
              <i className="fas fa-download mr-2"></i> BROCHURE
            </a>
          </div>

          <div className="mt-12 animate-bounce">
            <i className="fas fa-chevron-down text-2xl text-neon-yellow"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
