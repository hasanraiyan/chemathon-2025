import React from 'react';

interface TimelineEvent {
  icon: string;
  title: string;
  time: string;
  description: string;
}

interface DaySchedule {
  day: string;
  date: string;
  color: string;
  events: TimelineEvent[];
}

const Schedule: React.FC = () => {
  const scheduleData: DaySchedule[] = [
    {
      day: 'Day 1',
      date: 'February 27, 2026',
      color: 'blue',
      events: [
        {
          icon: 'fa-flag-checkered',
          title: 'Registration & Check-in',
          time: '08:00 AM',
          description: 'Team registration, kit distribution, and venue tour',
        },
        {
          icon: 'fa-bullhorn',
          title: 'Opening Ceremony',
          time: '10:00 AM',
          description: 'Welcome address, event briefing, and keynote speech',
        },
        {
          icon: 'fa-rocket',
          title: 'Hackathon Begins!',
          time: '11:00 AM',
          description: 'Teams start building their prototypes',
        },
        {
          icon: 'fa-utensils',
          title: 'Lunch Break',
          time: '01:00 PM',
          description: 'Networking lunch with mentors',
        },
        {
          icon: 'fa-chalkboard-teacher',
          title: 'Mentor Sessions',
          time: '03:00 PM',
          description: 'One-on-one guidance from industry experts',
        },
        {
          icon: 'fa-moon',
          title: 'Midnight Snacks & Fun Activities',
          time: '12:00 AM',
          description: 'Refreshments, games, and team bonding',
        },
      ],
    },
    {
      day: 'Day 2',
      date: 'February 28, 2026',
      color: 'purple',
      events: [
        {
          icon: 'fa-coffee',
          title: 'Breakfast & Progress Check',
          time: '08:00 AM',
          description: 'Morning refreshments and mentor feedback',
        },
        {
          icon: 'fa-tools',
          title: 'Final Development Sprint',
          time: '09:00 AM',
          description: 'Last hours to complete prototypes',
        },
        {
          icon: 'fa-stop-circle',
          title: 'Submission Deadline',
          time: '11:00 AM',
          description: 'Code freeze and project submission',
        },
      ],
    },
    {
      day: 'Day 3',
      date: 'March 1, 2026',
      color: 'green',
      events: [
        {
          icon: 'fa-presentation',
          title: 'Presentations & Judging',
          time: '12:00 PM',
          description: 'Top 12 teams present to judges',
        },
        {
          icon: 'fa-award',
          title: 'Prize Distribution & Closing',
          time: '04:00 PM',
          description: 'Winner announcement and celebration',
        },
      ],
    },
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: { dot: string; time: string } } = {
      blue: { dot: 'bg-blue-600', time: 'text-blue-600' },
      purple: { dot: 'bg-purple-600', time: 'text-purple-600' },
      green: { dot: 'bg-green-600', time: 'text-green-600' },
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section id="schedule" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16" data-aos="fade-up">
            <div className="text-sm font-bold text-blue-600 mb-4 mono tracking-wider">
              EVENT SCHEDULE
            </div>
            <h2 className="text-5xl font-black">
              36-Hour{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Timeline
              </span>
            </h2>
          </div>

          {/* Schedule Days */}
          <div className="space-y-8">
            {scheduleData.map((daySchedule, dayIndex) => (
              <div key={dayIndex} data-aos="fade-up">
                {/* Day Header */}
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <span
                    className={`w-3 h-3 ${getColorClasses(daySchedule.color).dot} rounded-full`}
                  ></span>
                  {daySchedule.day} - {daySchedule.date}
                </h3>

                {/* Events for the day */}
                <div className="space-y-6">
                  {daySchedule.events.map((event, eventIndex) => (
                    <div
                      key={eventIndex}
                      className="timeline-item"
                      data-aos="fade-right"
                      data-aos-delay={100 * (eventIndex + 1)}
                    >
                      {/* Timeline Dot */}
                      <div className="timeline-dot">
                        <i className={`fas ${event.icon}`}></i>
                      </div>

                      {/* Event Card */}
                      <div className="bg-white rounded-xl p-6 border border-gray-200">
                        <div className="flex justify-between items-start mb-2 flex-wrap gap-2">
                          <h4 className="font-bold text-lg">{event.title}</h4>
                          <span
                            className={`${
                              getColorClasses(daySchedule.color).time
                            } font-semibold mono text-sm`}
                          >
                            {event.time}
                          </span>
                        </div>
                        <p className="text-gray-600">{event.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
