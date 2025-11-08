import React from 'react';

const Contact: React.FC = () => {
  const socialLinks = [
    { icon: 'fab fa-facebook-f', href: '#' },
    { icon: 'fab fa-twitter', href: '#' },
    { icon: 'fab fa-instagram', href: '#' },
    { icon: 'fab fa-linkedin-in', href: '#' },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div data-aos="fade-right">
              <div className="text-sm font-bold text-blue-600 mb-4 mono tracking-wider">
                GET IN TOUCH
              </div>
              <h2 className="text-5xl font-black mb-8 leading-tight">
                Contact{' '}
                <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Us
                </span>
              </h2>

              <div className="space-y-6 mb-8">
                <div>
                  <h4 className="font-bold mb-2">Organizing Secretary</h4>
                  <p className="text-gray-600">IIChE-ChEMATHON 2026</p>
                  <p className="text-gray-600">Department of Chemical Engineering</p>
                  <p className="text-gray-600">MIT Muzaffarpur and IIT Patna</p>
                  <p className="text-gray-600">Muzaffarpur - 842003</p>
                  <p className="text-gray-600">Bihar, India</p>
                </div>

                <div className="space-y-3">
                  <a
                    href="tel:+919876543210"
                    className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition"
                  >
                    <i className="fas fa-phone w-6"></i>
                    <span>+91-9876543210</span>
                  </a>
                  <a
                    href="tel:+919876543210"
                    className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition"
                  >
                    <i className="fas fa-phone w-6"></i>
                    <span>+91-9876543210</span>
                  </a>
                  <a
                    href="mailto:chemathon2026@mitmuzaffarpur.org"
                    className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition"
                  >
                    <i className="fas fa-envelope w-6"></i>
                    <span>chemathon2026@mitmuzaffarpur.org</span>
                  </a>
                </div>

                <div className="flex gap-4 pt-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-blue-600 hover:text-blue-600 transition"
                    >
                      <i className={link.icon}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div data-aos="fade-left">
              <div className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14325!2d85.366807!3d26.141191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed16b4d4e5a2d7%3A0x4b7b1b1b1b1b1b!2sMuzaffarpur%20Institute%20of%20Technology!5e1!3m2!1sen!2sin!4v1733844541408!5m2!1sen!2sin"
                  className="w-full h-full"
                  allowFullScreen={true}
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
