import React from 'react';

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

export default About;
