import React, { useState, useEffect } from 'react';

const Countdown: React.FC = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date('2026-03-13T00:00:00') - +new Date();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const formatTime = (time: number) => String(time).padStart(2, '0');

  return (
    <div className="grid grid-cols-4 gap-3 max-w-lg mx-auto mb-8 animate__animated animate__fadeInUp">
      <div
        className="neon-box rounded-xl p-4 backdrop-blur"
        style={{ background: 'var(--card-bg)' }}
      >
        <div className="text-3xl md:text-4xl font-black text-neon-pink righteous">
          {formatTime(timeLeft.days)}
        </div>
        <div className="text-xs mt-1" style={{ color: 'var(--text-secondary)' }}>
          DAYS
        </div>
      </div>
      <div
        className="neon-box rounded-xl p-4 backdrop-blur"
        style={{ background: 'var(--card-bg)' }}
      >
        <div className="text-3xl md:text-4xl font-black text-neon-cyan righteous">
          {formatTime(timeLeft.hours)}
        </div>
        <div className="text-xs mt-1" style={{ color: 'var(--text-secondary)' }}>
          HOURS
        </div>
      </div>
      <div
        className="neon-box rounded-xl p-4 backdrop-blur"
        style={{ background: 'var(--card-bg)' }}
      >
        <div className="text-3xl md:text-4xl font-black text-neon-yellow righteous">
          {formatTime(timeLeft.minutes)}
        </div>
        <div className="text-xs mt-1" style={{ color: 'var(--text-secondary)' }}>
          MINS
        </div>
      </div>
      <div
        className="neon-box rounded-xl p-4 backdrop-blur"
        style={{ background: 'var(--card-bg)' }}
      >
        <div className="text-3xl md:text-4xl font-black text-neon-purple righteous">
          {formatTime(timeLeft.seconds)}
        </div>
        <div className="text-xs mt-1" style={{ color: 'var(--text-secondary)' }}>
          SECS
        </div>
      </div>
    </div>
  );
};

export default Countdown;
