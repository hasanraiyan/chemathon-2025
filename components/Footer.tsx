import React from 'react';

const Footer: React.FC = () => {
  const quickLinks = [
    { href: '#about', label: 'About' },
    { href: '#process', label: 'Process' },
    { href: '#themes', label: 'Themes' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#register', label: 'Register' },
  ];

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <i className="fas fa-atom text-white"></i>
              </div>
              <div className="font-bold text-lg">ChEMATHON 2026</div>
            </div>
            <p className="text-gray-400 text-sm">
              Engineering Tomorrow's Sustainable World through Hardware Innovation.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-white transition">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Organized By</h4>
            <p className="text-gray-400 text-sm">
              Indian Institute of Chemical Engineers (IIChE)
              <br />
              KEC Student Chapter & Erode Regional Centre
              <br />
              In association with Indian Chemical Society (ICS)
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2026 ChEMATHON. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
