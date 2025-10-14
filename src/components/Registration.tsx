import React from 'react';

const Registration: React.FC = () => {
  return (
    <section id="register" className="py-16 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-neon-pink opacity-20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-neon-cyan opacity-20 blur-3xl rounded-full"></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black righteous mb-3">
            <span style={{ color: 'var(--text-primary)' }}>JOIN THE </span>
            <span className="gradient-text">REVOLUTION</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-pink to-neon-cyan mx-auto"></div>
        </div>
        <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <div className="space-y-5">
            <div className="neon-box rounded-xl p-6" style={{ background: 'var(--card-bg)' }}>
              <h3 className="text-2xl font-black mb-5 righteous">
                <i className="fas fa-users text-neon-pink mr-2"></i> TEAM RULES
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <i className="fas fa-check-circle text-xl text-neon-cyan mt-0.5"></i>
                  <div>
                    <strong className="text-neon-yellow text-sm">4-5 Members</strong>
                    <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                      Including 1 mentor
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fas fa-check-circle text-xl text-neon-cyan mt-0.5"></i>
                  <div>
                    <strong className="text-neon-yellow text-sm">1 Female Mandatory</strong>
                    <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                      Diversity is our strength
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fas fa-check-circle text-xl text-neon-cyan mt-0.5"></i>
                  <div>
                    <strong className="text-neon-yellow text-sm">UG/PG/Research Scholars</strong>
                    <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                      All welcome
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fas fa-times-circle text-xl text-neon-pink mt-0.5"></i>
                  <div>
                    <strong className="text-neon-yellow text-sm">No Spot Registration</strong>
                    <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                      Register online only
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="neon-box bg-gradient-to-br from-neon-pink via-neon-purple to-neon-cyan rounded-xl p-6">
              <h3 className="text-2xl font-black mb-4 righteous text-white">WHAT YOU GET</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="text-center">
                  <i className="fas fa-box-open text-3xl mb-1 text-white"></i>
                  <p className="font-bold text-sm text-white">Swag Kit</p>
                </div>
                <div className="text-center">
                  <i className="fas fa-utensils text-3xl mb-1 text-white"></i>
                  <p className="font-bold text-sm text-white">All Meals</p>
                </div>
                <div className="text-center">
                  <i className="fas fa-bed text-3xl mb-1 text-white"></i>
                  <p className="font-bold text-sm text-white">Stay</p>
                </div>
                <div className="text-center">
                  <i className="fas fa-certificate text-3xl mb-1 text-white"></i>
                  <p className="font-bold text-sm text-white">Certificate</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="neon-box rounded-xl p-6" style={{ background: 'var(--card-bg)' }}>
              <h3 className="text-2xl font-black mb-5 righteous">
                <i className="fas fa-rupee-sign text-neon-yellow mr-2"></i> FEES
              </h3>
              <table className="w-full mb-5">
                <thead>
                  <tr className="border-b-2 border-neon-pink">
                    <th
                      className="text-left py-3 font-black text-sm"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      Category
                    </th>
                    <th
                      className="text-left py-3 font-black text-sm"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      IIChE
                    </th>
                    <th
                      className="text-left py-3 font-black text-sm"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      Non-Member
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b" style={{ borderColor: 'var(--text-secondary)' }}>
                    <td className="py-3 text-sm" style={{ color: 'var(--text-primary)' }}>
                      UG/PG
                    </td>
                    <td className="py-3 text-neon-yellow font-black text-lg">₹750</td>
                    <td className="py-3 text-neon-yellow font-black text-lg">₹1,000</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-sm" style={{ color: 'var(--text-primary)' }}>
                      Research Scholar
                    </td>
                    <td className="py-3 text-neon-cyan font-black text-lg">₹1,000</td>
                    <td className="py-3 text-neon-cyan font-black text-lg">₹1,500</td>
                  </tr>
                </tbody>
              </table>
              <div className="bg-neon-pink bg-opacity-20 border-2 border-neon-pink rounded-lg p-3 mb-5">
                <p className="text-xs" style={{ color: 'var(--text-primary)' }}>
                  <i className="fas fa-info-circle mr-1"></i> Fee includes everything: Kit, Meals,
                  Stay & Certificate
                </p>
              </div>
              <a
                href="#"
                className="btn-explosive block w-full bg-gradient-to-r from-neon-pink via-neon-purple to-neon-cyan text-center py-4 rounded-full font-black text-base hover:scale-105 transition-all shadow-2xl text-white"
              >
                <i className="fas fa-rocket mr-2"></i> REGISTER YOUR TEAM NOW
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
