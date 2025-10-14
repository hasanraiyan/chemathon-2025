import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 stripe-bg opacity-30"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black righteous mb-3">
            <span className="gradient-text">CONTACT US</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-pink to-neon-cyan mx-auto"></div>
        </div>
        <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <div className="neon-box rounded-xl p-6" style={{ background: 'var(--card-bg)' }}>
            <h3 className="text-2xl font-black mb-5 righteous gradient-text">GET IN TOUCH</h3>
            <div className="space-y-5 mb-6">
              <div>
                <h4 className="font-bold text-neon-yellow mb-2 text-sm">📍 Address</h4>
                <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                  ChEMATHON 2026 Organizing Committee
                  <br />
                  Indian Institute of Technology Patna
                  <br />
                  Bihta, Bihar - 801106
                  <br />
                  India
                </p>
              </div>
              <div>
                <h4 className="font-bold text-neon-cyan mb-2 text-sm">📞 Contact</h4>
                <a
                  href="tel:+919842823432"
                  className="flex items-center gap-2 hover:text-neon-pink transition mb-1 text-sm"
                  style={{ color: 'var(--text-primary)' }}
                >
                  <i className="fas fa-phone w-5"></i>
                  <span>+91-9842823432</span>
                </a>
                <a
                  href="tel:+919750383957"
                  className="flex items-center gap-2 hover:text-neon-pink transition mb-1 text-sm"
                  style={{ color: 'var(--text-primary)' }}
                >
                  <i className="fas fa-phone w-5"></i>
                  <span>+91-9750383957</span>
                </a>
                <a
                  href="mailto:chemathon2026@iitp.ac.in"
                  className="flex items-center gap-2 hover:text-neon-cyan transition text-sm"
                  style={{ color: 'var(--text-primary)' }}
                >
                  <i className="fas fa-envelope w-5"></i>
                  <span>chemathon2026@iitp.ac.in</span>
                </a>
              </div>
              <div>
                <h4 className="font-bold text-neon-purple mb-2 text-sm">🌐 Follow Us</h4>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-neon-pink to-red-500 flex items-center justify-center hover:scale-110 transition"
                  >
                    <i className="fab fa-facebook-f text-sm text-white"></i>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-neon-cyan to-blue-500 flex items-center justify-center hover:scale-110 transition"
                  >
                    <i className="fab fa-twitter text-sm text-white"></i>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-neon-yellow to-yellow-500 flex items-center justify-center hover:scale-110 transition"
                  >
                    <i className="fab fa-instagram text-sm text-black"></i>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-neon-purple to-purple-500 flex items-center justify-center hover:scale-110 transition"
                  >
                    <i className="fab fa-linkedin-in text-sm text-white"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="neon-box rounded-xl p-2 overflow-hidden"
            style={{ background: 'var(--card-bg)' }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3601.13943484252!2d84.84344431501655!3d25.50020898375624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2a245a195e5e3%3A0x7c78950542456e4e!2sIIT%20Patna!5e0!3m2!1sen!2sin!4v1615984634123!5m2!1sen!2sin"
              className="w-full h-full rounded-lg min-h-[400px]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
