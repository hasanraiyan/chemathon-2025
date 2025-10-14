import React from 'react';

const Prizes: React.FC = () => {
  return (
    <section id="prizes" className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 stripe-bg opacity-50"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black righteous mb-3">
            <span style={{ color: 'var(--text-primary)' }}>WIN </span>
            <span className="gradient-text">BIG</span>
          </h2>
          <p className="text-2xl font-bold text-neon-yellow">₹2,00,000+ Prize Pool</p>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-pink to-neon-cyan mx-auto mt-3"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
          <div className="neon-box bg-gradient-to-br from-gray-300 via-gray-200 to-gray-400 rounded-2xl p-6 text-center transform hover:scale-105 transition-all order-2 md:order-1">
            <div className="text-6xl mb-3">🥈</div>
            <h3 className="text-3xl font-black righteous text-black mb-1">SECOND</h3>
            <div className="text-5xl font-black righteous text-black mb-3">₹50K</div>
            <ul className="space-y-1 text-black font-bold text-sm">
              <li>✓ Cash Prize</li>
              <li>✓ Trophy & Certificate</li>
              <li>✓ Industry Connect</li>
            </ul>
          </div>
          <div className="neon-box bg-gradient-to-br from-yellow-500 via-yellow-400 to-yellow-600 rounded-2xl p-6 text-center transform hover:scale-105 transition-all order-1 md:order-2 md:-mt-6">
            <div className="text-7xl mb-3">🏆</div>
            <h3 className="text-4xl font-black righteous text-black mb-1">FIRST</h3>
            <div className="text-6xl font-black righteous text-black mb-3">₹1L</div>
            <ul className="space-y-1 text-black font-bold text-sm">
              <li>✓ Cash Prize</li>
              <li>✓ Trophy & Certificate</li>
              <li>✓ Mentorship Program</li>
              <li>✓ Media Coverage</li>
            </ul>
          </div>
          <div className="neon-box bg-gradient-to-br from-orange-600 via-orange-400 to-orange-700 rounded-2xl p-6 text-center transform hover:scale-105 transition-all order-3">
            <div className="text-6xl mb-3">🥉</div>
            <h3 className="text-3xl font-black righteous text-white mb-1">THIRD</h3>
            <div className="text-5xl font-black righteous text-white mb-3">₹30K</div>
            <ul className="space-y-1 text-white font-bold text-sm">
              <li>✓ Cash Prize</li>
              <li>✓ Trophy & Certificate</li>
              <li>✓ Goodies Pack</li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <div
            className="inline-block rounded-xl p-6 border-2 border-neon-cyan"
            style={{ background: 'var(--card-bg)' }}
          >
            <h4 className="text-xl font-bold mb-4 text-neon-cyan">ALL FINALISTS GET</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <i className="fas fa-certificate text-3xl text-neon-pink mb-1"></i>
                <p className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>
                  Certificates
                </p>
              </div>
              <div>
                <i className="fas fa-gift text-3xl text-neon-yellow mb-1"></i>
                <p className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>
                  Swag Kit
                </p>
              </div>
              <div>
                <i className="fas fa-utensils text-3xl text-neon-cyan mb-1"></i>
                <p className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>
                  Free Meals
                </p>
              </div>
              <div>
                <i className="fas fa-bed text-3xl text-neon-purple mb-1"></i>
                <p className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>
                  Accommodation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prizes;
