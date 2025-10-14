import React from 'react';

const timelineEvents = [
  {
    date: '01 JAN 2026',
    title: 'IDEA SUBMISSION',
    description: 'Submit your innovative solution ideas',
    color: 'pink',
    align: 'left',
  },
  {
    date: '20 JAN 2026',
    title: 'DEADLINE',
    description: 'Last date for idea submissions',
    color: 'cyan',
    align: 'right',
  },
  {
    date: '25 JAN 2026',
    title: 'ONLINE PRELIMS',
    description: 'Virtual pitching round',
    color: 'yellow',
    align: 'left',
  },
  {
    date: '30 JAN 2026',
    title: 'FINALISTS ANNOUNCED',
    description: '42 teams selected for finale',
    color: 'purple',
    align: 'right',
  },
];

const Timeline: React.FC = () => {
  return (
    <section id="timeline" className="py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black righteous mb-3">
            <span style={{ color: 'var(--text-primary)' }}>THE </span>
            <span className="gradient-text">JOURNEY</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-pink to-neon-cyan mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-neon-pink via-neon-cyan to-neon-yellow hidden md:block"></div>
          <div className="space-y-10">
            {timelineEvents.map((event, index) => (
              <div key={index} className="flex md:justify-center items-center w-full">
                <div className="hidden md:block w-5/12 text-right">
                  {event.align === 'left' && (
                    <div
                      className="neon-box rounded-xl p-4 inline-block"
                      style={{ background: 'var(--card-bg)' }}
                    >
                      <h3 className={`text-lg font-bold mb-1 text-neon-${event.color}`}>
                        {event.title}
                      </h3>
                      <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                        {event.description}
                      </p>
                    </div>
                  )}
                </div>
                <div className="hidden md:block w-auto mx-4">
                  <div className="timeline-dot flex-shrink-0"></div>
                </div>
                <div className="w-full md:w-5/12">
                  <div className={`text-2xl font-black righteous text-neon-${event.color}`}>
                    {event.date}
                  </div>
                  <div className="md:hidden mt-1">
                    <h3 className={`text-base font-bold mb-0.5 text-neon-${event.color}`}>
                      {event.title}
                    </h3>
                    <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                      {event.description}
                    </p>
                  </div>
                  <div className="hidden md:block">
                    {event.align === 'right' && (
                      <div
                        className="neon-box rounded-xl p-4"
                        style={{ background: 'var(--card-bg)' }}
                      >
                        <h3 className={`text-lg font-bold mb-1 text-neon-${event.color}`}>
                          {event.title}
                        </h3>
                        <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                          {event.description}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
            <div className="flex md:justify-center items-center w-full">
              <div className="hidden md:block w-5/12 text-right">
                <div className="neon-box bg-gradient-to-r from-neon-pink to-neon-cyan p-6 inline-block rounded-xl">
                  <h3 className="text-2xl font-black mb-1 righteous text-white">GRAND FINALE!</h3>
                  <p className="font-bold text-sm text-white">
                    36 hours of hardcore hacking at IIT PATNA
                  </p>
                </div>
              </div>
              <div className="hidden md:block w-auto mx-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-neon-pink to-neon-cyan flex items-center justify-center flex-shrink-0 pulse-glow">
                  <i className="fas fa-trophy text-lg text-white"></i>
                </div>
              </div>
              <div className="w-full md:w-5/12">
                <div className="text-3xl font-black righteous gradient-text">13 - 15 MAR</div>
                <div className="md:hidden mt-1">
                  <h3 className="text-base font-bold mb-0.5 gradient-text">GRAND FINALE!</h3>
                  <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                    36 hours of hardcore hacking at IIT PATNA
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
