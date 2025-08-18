import React, { useState, useEffect } from 'react';

// Main App Component
const App = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-sans">
      <Header toggleTheme={toggleTheme} theme={theme} />
      <main>
        <Home />
        <About />
        <Guidelines />
        <ProblemStatements />
        <Registration />
        <Gallery />
        <FAQ />
        <Sponsors />
        <Committee />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

// Header Component
const Header = ({ toggleTheme, theme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
          <span>IIChE</span>-ChEMATHON
        </a>
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-blue-600">Home</a>
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#guidelines" className="hover:text-blue-600">Guidelines</a>
          <a href="#problems" className="hover:text-blue-600">Problem Statements</a>
          <a href="#registrations" className="hover:text-blue-600">Registration</a>
          <a href="#gallery" className="hover:text-blue-600">Gallery</a>
          <a href="#faq" className="hover:text-blue-600">FAQs</a>
          <a href="#sponsors" className="hover:text-blue-600">Sponsors</a>
          <a href="#committee" className="hover:text-blue-600">Committee</a>
          <a href="#contact" className="hover:text-blue-600">Contact Us</a>
        </nav>
        <div className="flex items-center">
          <button onClick={toggleTheme} className="mr-4">
            {theme === 'light' ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            )}
          </button>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden bg-white dark:bg-gray-800 px-6 pt-2 pb-4 space-y-2">
          <a href="#home" className="block hover:text-blue-600">Home</a>
          <a href="#about" className="block hover:text-blue-600">About</a>
          <a href="#guidelines" className="block hover:text-blue-600">Guidelines</a>
          <a href="#problems" className="block hover:text-blue-600">Problem Statements</a>
          <a href="#registrations" className="block hover:text-blue-600">Registration</a>
          <a href="#gallery" className="block hover:text-blue-600">Gallery</a>
          <a href="#faq" className="block hover:text-blue-600">FAQs</a>
          <a href="#sponsors" className="block hover:text-blue-600">Sponsors</a>
          <a href="#committee" className="block hover:text-blue-600">Committee</a>
          <a href="#contact" className="block hover:text-blue-600">Contact Us</a>
        </nav>
      )}
    </header>
  );
};

// Home Component
const Home = () => {
    return (
      <section id="home" className="py-20 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-6 text-center">
          <p className="text-lg text-gray-600 dark:text-gray-400">First Edition of IIChE-TI Hardware Hackathon</p>
          <h1 className="text-4xl md:text-6xl font-bold my-4">
            IICHE-CHEMATHON <span className="text-blue-600 dark:text-blue-400">2025</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold my-4">
            <span className="text-gray-700 dark:text-gray-300">THEME:</span> Redefining Progress Through Sustainable Solutions
          </h2>
          <h2 className="text-xl md:text-2xl font-semibold my-4">
            <span className="text-gray-700 dark:text-gray-300">DATE:</span> 28th Feb to 2nd March, 2025
          </h2>
          <h2 className="text-xl md:text-2xl font-semibold my-4">
            <span className="text-gray-700 dark:text-gray-300">VENUE:</span> Kongu Engineering College, Perundurai, Tamil Nadu.
          </h2>
          <div className="mt-8">
            <a href="/assets/IIChE-ChEMATHON.pdf" target="_blank" className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
              Download Brochure
            </a>
          </div>
        </div>
      </section>
    );
  };

// About Component
const About = () => {
    return (
      <section id="about" className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">About <span className="text-blue-600 dark:text-blue-400">IIChE-ChEMATHON</span></h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img src="https://placehold.co/600x400/E2E8F0/333333?text=Chemathon+2025" alt="About Chemathon" className="rounded-lg shadow-lg" />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <p className="text-lg leading-relaxed mb-4">
                IIChE-ChEMATHON, the annual hardware hackathon organized by the Indian Institute of Chemical Engineers (IIChE) Training Institute and Indian Chemical Society (ICS), is a unique event that brings together students from diverse engineering disciplines to develop innovative hardware solutions based on the United Nations' Sustainable Development Goals.
              </p>
              <p className="text-lg leading-relaxed">
                The event serves as a platform for participants to engage with real-world challenges in areas such as sustainability, process optimization, and industrial innovation. This year's event promises to push the boundaries of creativity and technological advancement.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };

// Guidelines Component
const Guidelines = () => {
    return (
      <section id="guidelines" className="py-20 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Event <span className="text-blue-600 dark:text-blue-400">Guidelines</span></h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <ul className="space-y-4 text-lg">
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 font-bold mr-2">1.</span>
                  <span>Teams can have a maximum of 5 members, including 1 compulsory female participant and 1 mentor.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 font-bold mr-2">2.</span>
                  <span>Shortlisted teams will be notified via email for the online prelims.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 font-bold mr-2">3.</span>
                  <span>The 36-hour finale will be held at Kongu Engineering College.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 font-bold mr-2">4.</span>
                  <span>The grand finale presentation will take place on March 2nd, 2025.</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Important Dates</h3>
                <ul className="space-y-2">
                  <li><strong>Idea Submission Opening:</strong> Dec 26, 2024</li>
                  <li><strong>Idea Submission Closing:</strong> Jan 15, 2025</li>
                  <li><strong>Prelims:</strong> Jan 20, 2025</li>
                  <li><strong>Registration Opening:</strong> Jan 25, 2025</li>
                  <li><strong>Registration Closing:</strong> Jan 31, 2025</li>
                  <li><strong>Finals:</strong> Feb 28 - Mar 2, 2025</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

// Problem Statements Component
const ProblemStatements = () => {
    const problems = [
      { id: 'sdg6', title: 'SDG6 - Clean Water and Sanitation', icon: '💧' },
      { id: 'sdg7', title: 'SDG7 - Affordable and Clean Energy', icon: '☀️' },
      { id: 'sdg9', title: 'SDG9 - Industry, Innovation, and Infrastructure', icon: '🏭' },
      { id: 'sdg11', title: 'SDG11 - Sustainable Cities and Communities', icon: '🏙️' },
      { id: 'sdg12', title: 'SDG12 - Responsible Consumption and Production', icon: '♻️' },
      { id: 'sdg13', title: 'SDG13 - Climate Action', icon: '🌍' },
    ];
  
    return (
      <section id="problems" className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Problem <span className="text-blue-600 dark:text-blue-400">Statements</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {problems.map(problem => (
              <div key={problem.id} className="bg-gray-100 dark:bg-gray-900 p-6 rounded-lg shadow-lg text-center">
                <div className="text-4xl mb-4">{problem.icon}</div>
                <h3 className="text-xl font-bold mb-2">{problem.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">Click to view problem statements related to this SDG.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

// Registration Component
const Registration = () => {
    return (
      <section id="registrations" className="py-20 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Registration <span className="text-blue-600 dark:text-blue-400">Desk</span></h2>
          <div className="max-w-4xl mx-auto">
            <a href="https://forms.gle/jxpmH1FBL9BkRGd36" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white font-bold py-4 px-8 rounded-lg text-xl hover:bg-blue-700 transition duration-300 inline-block mb-12">
              Register Now
            </a>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Registration Fees</h3>
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b dark:border-gray-700">
                    <th className="py-2">Participants</th>
                    <th className="py-2">IIChE Member</th>
                    <th className="py-2">Non-IIChE Member</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2">Student (UG/PG)</td>
                    <td className="py-2">Rs. 750</td>
                    <td className="py-2">Rs. 1000</td>
                  </tr>
                  <tr>
                    <td className="py-2">Research Scholar</td>
                    <td className="py-2">Rs. 1000</td>
                    <td className="py-2">Rs. 1500</td>
                  </tr>
                </tbody>
              </table>
              <p className="mt-6 text-gray-600 dark:text-gray-400">No Spot Registration. Prelims will be conducted online.</p>
            </div>
          </div>
        </div>
      </section>
    );
  };

// Gallery Component
const Gallery = () => {
    const images = [
        'https://placehold.co/400x300/E2E8F0/333333?text=Gallery+1',
        'https://placehold.co/400x300/E2E8F0/333333?text=Gallery+2',
        'https://placehold.co/400x300/E2E8F0/333333?text=Gallery+3',
        'https://placehold.co/400x300/E2E8F0/333333?text=Gallery+4',
        'https://placehold.co/400x300/E2E8F0/333333?text=Gallery+5',
        'https://placehold.co/400x300/E2E8F0/333333?text=Gallery+6',
    ];
  
    return (
      <section id="gallery" className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our <span className="text-blue-600 dark:text-blue-400">Gallery</span></h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((src, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-lg">
                <img src={src} alt={`Gallery image ${index + 1}`} className="w-full h-full object-cover transform hover:scale-105 transition duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

// FAQ Component
const FAQ = () => {
    const faqs = [
        { q: 'What is the eligibility criteria for participating?', a: 'You must be a student or professional as per the event’s criteria. Teams should consist of 2-4 members.' },
        { q: 'Can I register for the hackathon on the spot?', a: 'No, there will be no on-spot registration. All participants must complete the online registration process before the deadline.' },
        { q: 'Can I change my team members after registration?', a: 'No, once the team registration is closed, no changes can be made to the team members.' },
        { q: 'What happens if my idea is shortlisted for the finals?', a: 'You will be notified to prepare a detailed presentation and demo of your project for the finals.' },
    ];
  
    return (
      <section id="faq" className="py-20 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked <span className="text-blue-600 dark:text-blue-400">Questions</span></h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                <summary className="font-semibold cursor-pointer">{faq.q}</summary>
                <p className="mt-2 text-gray-600 dark:text-gray-400">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    );
  };

// Sponsors Component
const Sponsors = () => {
    return (
      <section id="sponsors" className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Our <span className="text-blue-600 dark:text-blue-400">Sponsors</span></h2>
          <div className="max-w-2xl mx-auto">
            <table className="w-full text-left bg-gray-100 dark:bg-gray-900 rounded-lg shadow-lg">
              <thead>
                <tr className="border-b dark:border-gray-700">
                  <th className="p-4">Category</th>
                  <th className="p-4">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="p-4">Diamond</td><td className="p-4">Rs. 3,00,000</td></tr>
                <tr><td className="p-4">Platinum</td><td className="p-4">Rs. 2,00,000</td></tr>
                <tr><td className="p-4">Gold</td><td className="p-4">Rs. 1,00,000</td></tr>
                <tr><td className="p-4">Silver</td><td className="p-4">Rs. 75,000</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    );
  };

// Committee Component
const Committee = () => {
    return (
      <section id="committee" className="py-20 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Organizing <span className="text-blue-600 dark:text-blue-400">Committee</span></h2>
          <p className="text-lg">Details about the committee members will be updated soon.</p>
        </div>
      </section>
    );
  };

// Contact Component
const Contact = () => {
    return (
      <section id="contact" className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Contact <span className="text-blue-600 dark:text-blue-400">Us</span></h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
              <p>The Organising Secretary</p>
              <p>IIChE-ChEMATHON 2025</p>
              <p>Department of Chemical Engineering,</p>
              <p>Kongu Engineering College,</p>
              <p>Perundurai, Erode- 638060, Tamil Nadu, India</p>
              <p className="mt-4"><strong>Phone:</strong> +91-9842823432, +91-9750383957</p>
              <p><strong>Email:</strong> chemathon2025@kongu.edu</p>
            </div>
            <div className="md:w-1/2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1193.301292434001!2d77.60650500877561!3d11.272611141769897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96d787153ee27%3A0x71bd1b7928ab4e35!2sDepartment%20of%20Chemical%20Engineering%2C%20KEC!5e1!3m2!1sen!2sin!4v1733844541408!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg shadow-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    );
  };

// Footer Component
const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2025 IIChE-ChEMATHON. All Rights Reserved.</p>
          <p className="mt-2">Created by KEC Aravindh 21ITR005</p>
        </div>
      </footer>
    );
  };

export default App;
