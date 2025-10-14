import React, { useEffect } from 'react';
import { type Theme } from '../App';

// Inform TypeScript that particlesJS exists on the window object
declare const particlesJS: any;

interface ParticleBackgroundProps {
  theme: Theme;
}

const ParticleBackground: React.FC<ParticleBackgroundProps> = ({ theme }) => {
  useEffect(() => {
    const isDark = theme === 'dark';
    const particleColors = isDark
      ? ['#FF6B6B', '#4ECDC4', '#FFE66D']
      : ['#4A5568', '#DD6B20', '#3182CE'];
    const linkColor = isDark ? '#FF6B6B' : '#4A5568';
    const particleOpacity = isDark ? 0.5 : 0.6;
    const linkOpacity = isDark ? 0.2 : 0.4;

    if (typeof particlesJS !== 'undefined') {
      particlesJS('particles-js', {
        particles: {
          number: { value: 60, density: { enable: true, value_area: 800 } },
          color: { value: particleColors },
          shape: { type: 'circle' },
          opacity: { value: particleOpacity, random: true },
          size: { value: 3, random: true },
          line_linked: {
            enable: true,
            distance: 150,
            color: linkColor,
            opacity: linkOpacity,
            width: 1,
          },
          move: { enable: true, speed: 2, direction: 'none', random: true, out_mode: 'out' },
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: { enable: true, mode: 'repulse' },
            onclick: { enable: true, mode: 'push' },
          },
        },
      });
    }
  }, [theme]);

  return <div id="particles-js" className="particle-bg"></div>;
};

export default ParticleBackground;
