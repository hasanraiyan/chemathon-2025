import React from 'react';
import { PROCESS_STEPS } from '../constants';

interface ProcessStepProps {
  number: string;
  title: string;
  date: string;
  description: string;
  aos: string;
  delay: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({
  number,
  title,
  date,
  description,
  aos,
  delay,
}) => {
  return (
    <div className="flex gap-8 items-start" data-aos={aos} data-aos-delay={delay}>
      <div className="number-badge flex-shrink-0">{number}</div>
      <div className="flex-1">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-3">{date}</p>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

const Process: React.FC = () => {
  return (
    <section id="process" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <div className="text-sm font-bold text-blue-600 mb-4 mono tracking-wider">
              HOW IT WORKS
            </div>
            <h2 className="text-5xl font-black">
              The{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Journey
              </span>
            </h2>
          </div>

          <div className="space-y-12">
            {PROCESS_STEPS.map((step, index) => (
              <ProcessStep
                key={index}
                number={step.number}
                title={step.title}
                date={step.date}
                description={step.description}
                aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
                delay={((index + 1) * 100).toString()}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
