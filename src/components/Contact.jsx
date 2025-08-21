import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-15 bg-gray-50 dark:bg-gray-900 px-15">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-14 text-gray-900 dark:text-white">
          Contact <span className="text-blue-600 dark:text-blue-400">Us</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8 hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
              Get in Touch
            </h3>

            <div className="space-y-1 text-gray-700 dark:text-gray-300">
              <p className="font-medium">The Organising Secretary</p>
              <p>IIChE - ChEMATHON 2025</p>
              <p>Department of Chemical Engineering</p>
              <p>Kongu Engineering College</p>
              <p>Perundurai, Erode - 638060</p>
              <p>Tamil Nadu, India</p>
            </div>

            <div className="mt-6 space-y-3">
              {/* Phone */}
              <p className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span className="text-gray-900 dark:text-white font-semibold">
                  Phone:
                </span>
                <span>+91 98428 23432, +91 97503 83957</span>
              </p>

              <p className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <a
                  href="mailto:info@yourwebsite.com"
                  className="hover:text-blue-800 dark:hover:text-blue-400 underline font-medium"
                  aria-label="Send email"
                >
                  info@yourwebsite.com
                </a>
              </p>

              <p className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span>Kongu Engineering College, Perundurai</span>
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1193.301292434001!2d77.60650500877561!3d11.272611141769897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96d787153ee27%3A0x71bd1b7928ab4e35!2sDepartment%20of%20Chemical%20Engineering%2C%20KEC!5e1!3m2!1sen!2sin!4v1733844541408!5m2!1sen!2sin"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-2xl shadow-md"
              aria-label="Map showing Kongu Engineering College location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
