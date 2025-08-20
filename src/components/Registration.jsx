import React from 'react';
import { motion } from 'framer-motion';

// Registration Component
const Registration = () => {
  // Define the animation variants for the border's color and rotation
  const borderVariants = {
    // The animation sequence
    animate: {
      rotate: [0, 90, 180, 270, 360], // Rotate 360 degrees
      borderColor: ['#3b82f6', '#10b981', '#ef4444', '#eab308', '#3b82f6'], // Change color at each stage
      transition: {
        duration: 2,
        ease: "linear",
        repeat: Infinity,
      },
    },
  };

  return (
    <section id="registrations" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Registration <span className="text-blue-600 dark:text-blue-400">Desk</span></h2>
        <div className="max-w-4xl mx-auto">
          {/* Start of the button with the running border effect */}
          <div className="relative rounded-lg overflow-hidden inline-block mb-12">
            {/* This motion.div creates the animated border.
                We use the `variants` prop to define the animation sequence.
                The `animate` prop triggers the animation defined in the `animate` variant. */}
            <motion.div
              className="absolute inset-0 z-0 rounded-lg"
              style={{
                border: '2px solid transparent',
              }}
              variants={borderVariants}
              animate="animate"
            >
            </motion.div>

            {/* The actual link/button element. It's positioned on top of the border. */}
            <a 
              href="https://forms.gle/jxpmH1FBL9BkRGd36" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="relative z-10 bg-blue-600 text-white font-bold py-4 px-8 rounded-lg text-xl hover:bg-blue-900 transition duration-300 inline-block"
            >
              Register Now
            </a>
          </div>
          {/* End of the button with the running border effect */}

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

export default Registration;
