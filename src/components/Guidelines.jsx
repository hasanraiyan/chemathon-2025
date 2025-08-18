import React, { useState, useEffect } from 'react';

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


export default Guidelines;