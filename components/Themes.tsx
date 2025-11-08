import React from 'react';
import { THEMES } from '../constants';

interface ThemeCardProps {
  emoji: string;
  sdg: string;
  title: string;
  description: string;
  color: string;
  delay: string;
}

const colorClasses: { [key: string]: { border: string; text: string } } = {
  blue: { border: 'hover:border-blue-500', text: 'text-blue-600' },
  purple: { border: 'hover:border-purple-500', text: 'text-purple-600' },
  green: { border: 'hover:border-green-500', text: 'text-green-600' },
  yellow: { border: 'hover:border-yellow-500', text: 'text-yellow-600' },
  red: { border: 'hover:border-red-500', text: 'text-red-600' },
  indigo: { border: 'hover:border-indigo-500', text: 'text-indigo-600' },
};

const ThemeCard: React.FC<ThemeCardProps> = ({ emoji, sdg, title, description, color, delay }) => {
  const classes = colorClasses[color] || { border: '', text: '' };

  return (
    <div
      className={`bg-white rounded-2xl p-8 border-2 border-gray-200 ${classes.border} hover-lift cursor-pointer`}
      data-aos="zoom-in"
      data-aos-delay={delay}
    >
      <div className="text-5xl mb-4">{emoji}</div>
      <div className={`text-xs font-bold ${classes.text} mb-2 mono`}>{sdg}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      <button className={`text-sm font-semibold ${classes.text} hover:underline`}>
        View Problems →
      </button>
    </div>
  );
};

const Themes: React.FC = () => {
  return (
    <section id="themes" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <div className="text-sm font-bold text-blue-600 mb-4 mono tracking-wider">
              CHALLENGE THEMES
            </div>
            <h2 className="text-5xl font-black">
              Six{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                SDG Tracks
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {THEMES.map((theme, index) => (
              <ThemeCard
                key={index}
                emoji={theme.emoji}
                sdg={theme.sdg}
                title={theme.title}
                description={theme.description}
                color={theme.color}
                delay={((index + 1) * 100).toString()}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Themes;
