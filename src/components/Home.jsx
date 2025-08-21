import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Calendar, MapPin } from 'lucide-react';
import Button from './ui/Button';

// Countdown Timer Component
const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex justify-center gap-4 mt-8">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 min-w-[60px]">
            <div className="text-2xl font-bold text-white">{value}</div>
            <div className="text-xs text-gray-200 uppercase">{unit}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

// Home Component
const Home = () => {
  const eventDate = new Date('2025-02-28T00:00:00').getTime();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-accent">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        <motion.div 
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 40% 80%, rgba(120, 219, 255, 0.3) 0%, transparent 50%)'
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, repeatType: 'reverse' }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-lg text-gray-200 mb-4">First Edition of IIChE-TI Hardware Hackathon</p>
          
          <motion.h1 
            className="text-4xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            IIChE-ChEMATHON <span className="text-yellow-300">2025</span>
          </motion.h1>
          
          <motion.h2 
            className="text-xl md:text-3xl font-semibold mb-6 text-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="text-yellow-300">THEME:</span> Redefining Progress Through Sustainable Solutions
          </motion.h2>
          
          <motion.div 
            className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-yellow-300" />
              <span>28th Feb - 2nd March, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-yellow-300" />
              <span>Kongu Engineering College, Tamil Nadu</span>
            </div>
          </motion.div>

          <CountdownTimer targetDate={eventDate} />
          
          <motion.div 
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button
              href="/assets/IIChE-ChEMATHON.pdf"
              variant="accent"
              size="lg"
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold shadow-lg"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Brochure
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home