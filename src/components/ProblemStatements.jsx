import React, { useState, useEffect } from 'react';

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

export default ProblemStatements