import React, { useRef } from "react";
import { motion, useInView } from 'framer-motion';
import galleryImg1 from "./../assets/galleryfinal.jpeg";
import galleryImg2 from "./../assets/gallery1.jpeg";
import Section from './ui/Section';
import Container from './ui/Container';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true, amount: 0.5 });

  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const textVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <Section id="about" background="bg-white dark:bg-gray-800">
      <Container>
        <motion.h2
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isTitleInView ? 1 : 0, y: isTitleInView ? 0 : 20 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 text-blue-600 dark:text-blue-400">
          About
        </motion.h2>

        <div ref={ref} className="flex flex-col md:flex-row items-center gap-10">
          <motion.div
            className="md:w-1/2 flex flex-col justify-center items-center gap-5 bg-white dark:bg-gray-800 p-6 rounded-xl"
            variants={imageVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <img
              src={galleryImg1}
              alt="Chemathon 2026"
              className="rounded-xl shadow-lg transform hover:scale-103 transition duration-500"
            />
            <img
              src={galleryImg2}
              alt="Innovation 2026"
              className="rounded-xl shadow-lg transform hover:scale-103 transition duration-500"
            />
          </motion.div>

          <motion.div
            className="md:w-1/2 text-center md:text-left"
            variants={textVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <h2 className="text-3xl font-bold mb-6">
              <span className="dark:text-white">IIChE-ChEMATHON 2026</span>
            </h2>
            <p className="text-lg leading-relaxed mb-4 text-gray-700 dark:text-gray-300">
              <span className="font-semibold">IIChE-ChEMATHON</span>, the annual
              <span className="text-blue-600 dark:text-blue-400 font-medium">
                {" "}
                hardware hackathon{" "}
              </span>
              organized by the Indian Institute of Chemical Engineers (IIChE)
              and the Indian Chemical Society (ICS), is a unique event that
              unites students from diverse engineering disciplines to develop{" "}
              <span className="text-green-600 font-medium">
                innovative hardware solutions
              </span>{" "}
              aligned with the{" "}
              <span className="font-semibold">
                United Nations’ Sustainable Development Goals (SDG6, SDG7, SDG9,
                SDG11, SDG12, SDG13)
              </span>
              .
            </p>

            <p className="text-lg leading-relaxed mb-4 text-gray-700 dark:text-gray-300">
              The hackathon provides a platform for participants to tackle{" "}
              <span className="text-green-600 font-medium">
                real-world challenges
              </span>{" "}
              in areas such as
              <span className="italic">
                {" "}
                sustainability, process optimization, and industrial innovation
              </span>
              , while fostering{" "}
              <span className="font-semibold">
                collaborative problem-solving
              </span>
              , hands-on project development, and{" "}
              <span className="font-semibold">
                mentoring from industry experts
              </span>
              .
            </p>

            <p className="text-lg leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              With its 36-hour grand finale,{" "}
              <span className="font-semibold">ChEMATHON 2026</span> promises to
              push the boundaries of{" "}
              <span className="text-blue-500 font-medium">
                creativity and technological advancement
              </span>
              , bringing together{" "}
              <span className="font-semibold">
                students, researchers, and professionals
              </span>{" "}
              from across the country in a dynamic celebration of{" "}
              <span className="text-blue-500 font-medium">
                innovation and sustainability
              </span>
              .
            </p>

            <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-600 dark:text-gray-300 text-lg">
              “Innovation is the key to realizing the dream of an{" "}
              <span className="font-semibold text-blue-500">
                Atmanirbhar Bharat
              </span>
              . Our youth must lead the way in finding sustainable solutions for
              the challenges of tomorrow.”
            </blockquote>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 text-right">
              — Shri Narendra Modi, Hon’ble Prime Minister of India
            </p>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};

export default About;