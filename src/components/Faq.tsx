import React from 'react';

const faqData = [
  {
    question: '🤔 Can I participate solo?',
    answer:
      'Nope! ChEMATHON is all about teamwork. Form a squad of 4-5 members (including 1 mentor and 1 female member) and dominate together! 💪',
    color: 'pink',
  },
  {
    question: "🔍 Don't have a team?",
    answer:
      "No worries! We'll organize a team formation session. Register individually and we'll help you find your dream team! 🤝",
    color: 'cyan',
  },
  {
    question: '🏨 Where will I stay?',
    answer:
      'All finalists get free accommodation at IIT Patna campus for the entire 36-hour hackathon. Sleep? Who needs it! 😴',
    color: 'yellow',
  },
  {
    question: '🍕 What about food?',
    answer:
      'All meals are on us! Breakfast, lunch, dinner, and unlimited coffee to keep you coding! ☕🍕',
    color: 'purple',
  },
  {
    question: '🛠️ What hardware/tools are provided?',
    answer:
      'Basic prototyping materials will be available. Bring your laptops and any specialized gear your project needs. Better safe than sorry! 🔧',
    color: 'pink',
  },
  {
    question: '🎯 Can we mix SDG themes?',
    answer:
      'Pick ONE primary SDG theme, but feel free to sprinkle in elements from other SDGs if they make your solution even more awesome! 🌟',
    color: 'cyan',
  },
];

const Faq: React.FC = () => {
  return (
    <section id="faq" className="py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black righteous mb-3">
            <span className="gradient-text">FAQ</span>
          </h2>
          <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
            Got Questions? We Got Answers!
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-pink to-neon-cyan mx-auto mt-3"></div>
        </div>
        <div className="max-w-4xl mx-auto space-y-3">
          {faqData.map((item, index) => (
            <details
              key={index}
              className="neon-box rounded-xl p-5 group cursor-pointer"
              style={{ background: 'var(--card-bg)' }}
            >
              <summary
                className="font-bold text-base flex justify-between items-center list-none"
                style={{ color: 'var(--text-primary)' }}
              >
                <span>{item.question}</span>
                <i
                  className={`fas fa-chevron-down group-open:rotate-180 transition-transform text-neon-${item.color}`}
                ></i>
              </summary>
              <p
                className="mt-3 pt-3 border-t text-sm"
                style={{ color: 'var(--text-secondary)', borderColor: 'var(--text-secondary)' }}
              >
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
