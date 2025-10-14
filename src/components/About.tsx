import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2
            className="text-4xl md:text-5xl font-black righteous mb-3"
            style={{ color: 'var(--text-primary)' }}
          >
            WHAT IS <span className="gradient-text">ChEMATHON?</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-pink to-neon-cyan mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-neon-pink rounded-xl"></div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-neon-cyan rounded-xl"></div>
              <div
                className="relative rounded-xl p-6 backdrop-blur"
                style={{ background: 'var(--card-bg)' }}
              >
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-gradient-to-br from-neon-pink to-red-500 rounded-lg neon-box">
                    <div className="text-3xl font-black righteous text-white">42</div>
                    <div className="text-xs mt-1 font-bold text-white">TEAMS</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-neon-cyan to-blue-500 rounded-lg neon-box">
                    <div className="text-3xl font-black righteous text-white">36</div>
                    <div className="text-xs mt-1 font-bold text-white">HOURS</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-neon-yellow to-yellow-500 rounded-lg neon-box">
                    <div className="text-3xl font-black righteous text-black">₹2L+</div>
                    <div className="text-xs mt-1 font-bold text-black">PRIZES</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-neon-purple to-green-500 rounded-lg neon-box">
                    <div className="text-3xl font-black righteous text-white">6</div>
                    <div className="text-xs mt-1 font-bold text-white">SDG THEMES</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-5">
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-neon-pink to-neon-cyan flex items-center justify-center flex-shrink-0 pulse-glow">
                <i className="fas fa-lightbulb text-lg text-white"></i>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1 text-neon-yellow">
                  India's Premier Hardware Hackathon
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  ChEMATHON 2026 is the second edition of India's most innovative hardware hackathon
                  organized by MIT Muzaffarpur and IIT Patna.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-neon-cyan to-blue-500 flex items-center justify-center flex-shrink-0 pulse-glow">
                <i className="fas fa-globe text-lg text-white"></i>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1 text-neon-cyan">UN SDG Aligned</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  Build real-world hardware solutions aligned with 6 UN Sustainable Development
                  Goals - from clean water to climate action.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-neon-yellow to-yellow-500 flex items-center justify-center flex-shrink-0 pulse-glow">
                <i className="fas fa-tools text-lg text-black"></i>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1 text-neon-yellow">Hands-On Innovation</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  No slides, no theory - just pure hardware innovation. Build working prototypes
                  that solve real problems.
                </p>
              </div>
            </div>
            <div
              className="border-l-4 border-neon-pink pl-4 py-3 rounded-r-lg"
              style={{ background: 'var(--card-bg)' }}
            >
              <p className="text-base italic mb-1" style={{ color: 'var(--text-primary)' }}>
                "Innovation is no longer a choice; it has become an imperative."
              </p>
              <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                — Shri Narendra Modi, Hon'ble Prime Minister of India
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
