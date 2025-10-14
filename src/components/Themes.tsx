import React from 'react';

const themesData = [
  {
    emoji: '💧',
    sdg: 'SDG 6',
    title: 'CLEAN WATER',
    description: 'Water purification • IoT monitoring • Desalination • Wastewater treatment',
    gradient: 'from-blue-500 to-cyan-400',
    textColor: 'purple-900',
  },
  {
    emoji: '⚡',
    sdg: 'SDG 7',
    title: 'CLEAN ENERGY',
    description: 'Hydrogen generation • Waste-to-energy • Renewable storage • Bio-batteries',
    gradient: 'from-pink-500 to-red-500',
    textColor: 'pink-900',
  },
  {
    emoji: '🏭',
    sdg: 'SDG 9',
    title: 'INDUSTRY 4.0',
    description: 'IoT monitoring • AI quality control • Safety devices • Smart systems',
    gradient: 'from-cyan-400 to-blue-600',
    textColor: 'blue-900',
  },
  {
    emoji: '🏙️',
    sdg: 'SDG 11',
    title: 'SMART CITIES',
    description: 'Air purification • Waste management • Urban sustainability • Flood control',
    gradient: 'from-green-400 to-teal-500',
    textColor: 'green-900',
  },
  {
    emoji: '♻️',
    sdg: 'SDG 12',
    title: 'CIRCULAR ECONOMY',
    description: 'Waste tracking • Plastic upcycling • E-waste recycling • Composting',
    gradient: 'from-yellow-400 to-orange-500',
    textColor: 'pink-900',
  },
  {
    emoji: '🌍',
    sdg: 'SDG 13',
    title: 'CLIMATE ACTION',
    description: 'Carbon capture • Emission monitoring • CO2 utilization • Climate tools',
    gradient: 'from-indigo-400 to-purple-500',
    textColor: 'purple-900',
  },
];

const Themes: React.FC = () => {
  return (
    <section id="themes" className="py-16 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black righteous mb-3">
            <span style={{ color: 'var(--text-primary)' }}>CHOOSE YOUR </span>
            <span className="gradient-text">BATTLE</span>
          </h2>
          <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
            6 SDG Themes • 10 Problems Each
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-pink to-neon-cyan mx-auto mt-3"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {themesData.map((theme, index) => (
            <div
              key={index}
              className={`card-3d neon-box bg-gradient-to-br ${theme.gradient} rounded-2xl p-6 cursor-pointer group`}
            >
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                {theme.emoji}
              </div>
              <div className="text-xs font-black mb-1 text-white">{theme.sdg}</div>
              <h3 className="text-2xl font-black mb-3 righteous text-white">{theme.title}</h3>
              <p className="mb-4 text-white text-opacity-90 text-sm">{theme.description}</p>
              <button
                className={`bg-white text-${theme.textColor} px-5 py-2 rounded-full font-bold hover:scale-105 transition-transform text-sm`}
              >
                10 PROBLEMS <i className="fas fa-arrow-right ml-1"></i>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Themes;
