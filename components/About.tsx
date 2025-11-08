import React from 'react';

const About: React.FC = () => {
  const features = [
    {
      icon: 'fas fa-users',
      colorKey: 'blue',
      title: 'Team Event',
      description: '4-5 members including 1 mandatory female participant',
      delay: '100',
    },
    {
      icon: 'fas fa-trophy',
      colorKey: 'purple',
      title: 'Big Prizes',
      description: '₹2 Lakh+ in total prize money for winners',
      delay: '200',
    },
    {
      icon: 'fas fa-tools',
      colorKey: 'green',
      title: 'Hardware Focus',
      description: 'Build real, working prototypes and solutions',
      delay: '300',
    },
    {
      icon: 'fas fa-globe',
      colorKey: 'yellow',
      title: 'SDG Aligned',
      description: 'Solve problems aligned with UN sustainability goals',
      delay: '400',
    },
  ];

  const colorClasses: { [key: string]: string } = {
    blue: 'text-blue-600',
    purple: 'text-purple-600',
    green: 'text-green-600',
    yellow: 'text-yellow-600',
  };

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div data-aos="fade-right">
              <div className="text-sm font-bold text-blue-600 mb-4 mono tracking-wider">
                ABOUT THE EVENT
              </div>
              <h2 className="text-5xl font-black mb-6 leading-tight">
                India's Premier{' '}
                <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Hardware Hackathon
                </span>
              </h2>
              <div className="accent-line text-gray-700 space-y-4 text-lg">
                <p>
                  ChEMATHON 2026 brings together the brightest minds in chemical engineering to
                  solve real-world challenges through innovative hardware solutions.
                </p>
                <p>
                  Aligned with the UN Sustainable Development Goals, this 36-hour intensive
                  hackathon pushes participants to create tangible prototypes that address critical
                  global issues.
                </p>
              </div>

              <div className="mt-8 p-6 bg-white rounded-2xl border border-gray-200">
                <div className="flex items-start gap-4">
                  <i className="fas fa-quote-left text-3xl text-blue-600 mt-2"></i>
                  <div>
                    <p className="text-gray-700 italic mb-2">
                      "Innovation is no longer a choice; it has become an imperative."
                    </p>
                    <p className="text-sm text-gray-500">
                      — Shri Narendra Modi, Hon'ble PM of India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4" data-aos="fade-left">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 border border-gray-200 hover-lift"
                  data-aos="flip-left"
                  data-aos-delay={feature.delay}
                >
                  <i
                    className={`${feature.icon} text-4xl ${colorClasses[feature.colorKey]} mb-4`}
                  ></i>
                  <h3 className="font-bold text-xl mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
