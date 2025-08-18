import React, { useState, useEffect } from 'react';

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

export default Gallery;