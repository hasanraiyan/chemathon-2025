import galleryImg1 from "./../assets/galleryfinal.jpeg"
import galleryImg2 from "./../assets/gallery1.jpeg"

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-600 dark:text-blue-400">
          About
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Image */}
          <div className="md:w-1/2 flex flex-col justify-center items-center gap-5 bg-white dark:bg-gray-800 p-6 rounded-xl">
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
          </div>

          {/* Text */}
          <div className="md:w-1/2 text-center md:text-left">
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
              and the Indian Chemical Society (ICS), is a unique event uniting
              students from diverse engineering disciplines.
            </p>

            <p className="text-lg leading-relaxed mb-4 text-gray-700 dark:text-gray-300">
              Aligned with the
              <span className="font-semibold">
                {" "}
                United Nations’ Sustainable Development Goals
              </span>
              , the hackathon challenges participants to design{" "}
              <span className="text-green-600 font-medium">
                sustainable, impactful solutions
              </span>{" "}
              addressing real-world problems in areas such as
              <span className="italic">
                {" "}
                sustainability, process optimization, and industrial innovation
              </span>
              .
            </p>

            <p className="text-lg leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              With its 36-hour grand finale,{" "}
              <span className="font-semibold">ChEMATHON 2026 </span>
              promises to push the boundaries of creativity and technology,
              offering a platform where
              <span className="text-blue-500 font-medium">
                {" "}
                innovation meets sustainability
              </span>
              .
            </p>

            {/* Quote Section */}
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
