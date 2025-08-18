import React from 'react';

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

export default Contact;
