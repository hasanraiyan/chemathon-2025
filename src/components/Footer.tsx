import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-10 border-t" style={{ borderColor: 'var(--border-color)' }}>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="hexagon w-10 h-10 bg-gradient-to-br from-neon-pink to-neon-cyan flex items-center justify-center">
                <i className="fas fa-atom text-white text-lg"></i>
              </div>
              <div className="text-xl font-black righteous gradient-text">ChEMATHON 2026</div>
            </div>
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
              Hack the Future. Build Hardware. Save the Planet.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-3 text-neon-yellow text-sm">Quick Links</h4>
            <ul className="space-y-1 text-sm" style={{ color: 'var(--text-secondary)' }}>
              <li>
                <a href="#about" className="hover:text-neon-pink transition">
                  About
                </a>
              </li>
              <li>
                <a href="#themes" className="hover:text-neon-cyan transition">
                  Themes
                </a>
              </li>
              <li>
                <a href="#prizes" className="hover:text-neon-yellow transition">
                  Prizes
                </a>
              </li>
              <li>
                <a href="#register" className="hover:text-neon-purple transition">
                  Register
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3 text-neon-cyan text-sm">Organized By</h4>
            <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
              MIT Muzaffarpur
              <br />
              <span className="text-neon-purple">In association with</span>
              <br />
              Indian Institute of Technology (IIT) Patna
            </p>
          </div>
        </div>
        <div className="border-t pt-6 text-center" style={{ borderColor: 'var(--text-secondary)' }}>
          <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
            &copy; 2026 ChEMATHON. All rights reserved.
          </p>
          <p className="text-neon-pink text-xs mt-1">Designed with 💖 & ⚡ by ChEMATHON Web Team</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
