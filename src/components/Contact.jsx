import { Mail, Phone, MapPin } from "lucide-react";
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Section from './ui/Section';
import Container from './ui/Container';
import { EVENT_CONFIG } from '../config/constants';

const Contact = () => {
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true, amount: 0.5 });

  return (
    <Section id="contact" padding="py-20" background="bg-gray-50 dark:bg-gray-900">
      <Container>
        <motion.h2
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isTitleInView ? 1 : 0, y: isTitleInView ? 0 : 20 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-14 text-gray-900 dark:text-white">
          Contact <span className="text-blue-600 dark:text-blue-400">Us</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8 hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
              Get in Touch
            </h3>

            <div className="space-y-1 text-gray-700 dark:text-gray-300">
              <p className="font-medium">The Organising Secretary</p>
              <p>IIChE - ChEMATHON {EVENT_CONFIG.year}</p>
              <p>Department of Chemical Engineering</p>
              <p>{EVENT_CONFIG.venue.name}</p>
              <p>{EVENT_CONFIG.venue.location}</p>
            </div>

            <div className="mt-6 space-y-3">
              {/* Phone */}
              <p className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span className="text-gray-900 dark:text-white font-semibold">
                  Phone:
                </span>
                <span>{EVENT_CONFIG.contact.phone.join(', ')}</span>
              </p>

              <p className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <a
                  href={`mailto:${EVENT_CONFIG.contact.email}`}
                  className="hover:text-blue-800 dark:hover:text-blue-400 underline font-medium"
                  aria-label="Send email"
                >
                  {EVENT_CONFIG.contact.email}
                </a>
              </p>

              <p className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span>{EVENT_CONFIG.venue.name}, {EVENT_CONFIG.venue.shortLocation}</span>
              </p>
            </div>
          </div>

          {/* Map */}
          <div className="relative overflow-hidden rounded-2xl">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 text-center py-3">
              Our Location
            </h2>

            <iframe
              title="Google Map Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3585.599!2d85.398!3d26.120!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed11f8b8b8b8b8%3A0x8b8b8b8b8b8b8b8b!2sMIT%20Muzaffarpur!5e0!3m2!1sen!2sin!4v1698765432100!5m2!1sen!2sin"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-2xl shadow-md"
              aria-label="Map showing MIT Muzaffarpur location"
            ></iframe>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Contact;
