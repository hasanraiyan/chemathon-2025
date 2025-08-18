import React from 'react';

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

export default Sponsors;
