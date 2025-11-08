import React, { useState, useEffect, useRef, useCallback } from 'react';
import Particles from 'react-tsparticles';
import type { Engine } from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim';

interface CounterProps {
  target: number;
  isPlus?: boolean;
}

const Counter: React.FC<CounterProps> = ({ target, isPlus = false }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, target]);

  return (
    <div
      ref={ref}
      className="text-4xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
    >
      {count}
      {isPlus && '+'}
    </div>
  );
};

interface CountdownState {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

const Hero: React.FC = () => {
  const [countdown, setCountdown] = useState<CountdownState>({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  // Countdown Timer
  useEffect(() => {
    const countdownDate = new Date('January 20, 2026 23:59:59').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      if (distance < 0) {
        setCountdown({
          days: '00',
          hours: '00',
          minutes: '00',
          seconds: '00',
        });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown({
        days: days.toString().padStart(2, '0'),
        hours: hours.toString().padStart(2, '0'),
        minutes: minutes.toString().padStart(2, '0'),
        seconds: seconds.toString().padStart(2, '0'),
      });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="pt-32 pb-20 bg-grid overflow-hidden relative">
      {/* Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: {
            color: {
              value: 'transparent',
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: 'push',
              },
              onHover: {
                enable: true,
                mode: 'repulse',
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: '#3B82F6',
            },
            links: {
              color: '#3B82F6',
              distance: 150,
              enable: true,
              opacity: 0.4,
              width: 1,
            },
            move: {
              direction: 'none',
              enable: true,
              outModes: {
                default: 'out',
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: 'circle',
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 z-0"
      />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Event Date Badge */}
          <div
            className="inline-block bg-blue-100 text-blue-600 px-6 py-2 rounded-full text-sm font-semibold mb-6 mono"
            data-aos="fade-down"
          >
            FEBRUARY 27 - MARCH 01, 2026
          </div>

          {/* Main Title */}
          <h1
            className="text-6xl lg:text-8xl font-black mb-6 leading-none"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            ChEMATHON
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent gradient-animate">
              2026
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Engineering Tomorrow's Sustainable World
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-wrap justify-center gap-4 mb-12"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <a
              href="#register"
              className="bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition inline-flex items-center gap-2 pulse-button"
            >
              <i className="fas fa-rocket"></i>
              Register Your Team
            </a>
            <a
              href="#"
              className="border-2 border-black text-black px-8 py-4 rounded-full font-semibold hover:bg-black hover:text-white transition inline-flex items-center gap-2"
            >
              <i className="fas fa-file-pdf"></i>
              Download Brochure
            </a>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-12">
            <div className="text-center" data-aos="zoom-in" data-aos-delay="400">
              <Counter target={36} />
              <div className="text-sm text-gray-600 mt-1">Hours</div>
            </div>
            <div className="text-center" data-aos="zoom-in" data-aos-delay="500">
              <Counter target={42} />
              <div className="text-sm text-gray-600 mt-1">Teams</div>
            </div>
            <div className="text-center" data-aos="zoom-in" data-aos-delay="600">
              <div className="text-4xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                ₹2L+
              </div>
              <div className="text-sm text-gray-600 mt-1">Prize Pool</div>
            </div>
            <div className="text-center" data-aos="zoom-in" data-aos-delay="700">
              <Counter target={6} />
              <div className="text-sm text-gray-600 mt-1">SDG Themes</div>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="max-w-3xl mx-auto" data-aos="zoom-in" data-aos-delay="800">
            <p className="text-sm font-bold text-gray-600 mb-4 mono">REGISTRATION CLOSES IN:</p>
            <div className="grid grid-cols-4 gap-4">
              <div className="countdown-box">
                <div className="countdown-number">{countdown.days}</div>
                <div className="countdown-label">DAYS</div>
              </div>
              <div className="countdown-box">
                <div className="countdown-number">{countdown.hours}</div>
                <div className="countdown-label">HOURS</div>
              </div>
              <div className="countdown-box">
                <div className="countdown-number">{countdown.minutes}</div>
                <div className="countdown-label">MINUTES</div>
              </div>
              <div className="countdown-box">
                <div className="countdown-number">{countdown.seconds}</div>
                <div className="countdown-label">SECONDS</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
