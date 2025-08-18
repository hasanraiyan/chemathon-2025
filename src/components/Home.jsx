import React, { useState, useEffect } from 'react';

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

export default Home