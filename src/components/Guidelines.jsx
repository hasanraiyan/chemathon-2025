import React, { useRef } from "react";
import { motion, useInView } from 'framer-motion';
import {
  Users,
  Mail,
  MapPin,
  Trophy,
} from "lucide-react";
import Section from './ui/Section';
import Container from './ui/Container';

const points = [
  {
    title:
      "Teams can have a maximum of 5 members, including 1 compulsory female participant and 1 mentor.",
    icon: Users,
    grad: "from-pink-500 to-rose-500",
  },
  {
    title:
      "Shortlisted teams will receive an email with the template. Prelims will be conducted online in the evening.",
    icon: Mail,
    grad: "from-amber-500 to-yellow-500",
  },
  {
    title:
      "36-hour finale at Kongu Engineering College; 42 teams (7 per SDG) from 28.02.2025 onwards.",
    icon: MapPin,
    grad: "from-emerald-500 to-green-500",
  },
  {
    title:
      "Grand Finale presentation on 02.03.2025 evening; 12 teams (2 per SDG). Prizes: ₹1 Lakh, ₹50K, ₹30K.",
    icon: Trophy,
    grad: "from-indigo-500 to-violet-500",
  },
];

const timeline = [
  { dateISO: "2024-12-26", date: "26/12/2024", label: "Idea Submission Opening", grad: "from-sky-500 to-blue-500" },
  { dateISO: "2025-01-15", date: "15/01/2025", label: "Idea Submission Closing", grad: "from-fuchsia-500 to-pink-500" },
  { dateISO: "2025-01-20", date: "20/01/2025", label: "Prelims for CheMATHON", grad: "from-amber-500 to-orange-500" },
  { dateISO: "2025-01-20", date: "20/01/2025", label: "Shortlist Announcement", grad: "from-teal-500 to-emerald-500" },
  { dateISO: "2025-01-25", date: "25/01/2025", label: "Registration Opening", grad: "from-purple-500 to-violet-500" },
  { dateISO: "2025-01-31", date: "31/01/2025", label: "Registration Closing", grad: "from-rose-500 to-red-500" },
  { dateISO: "2025-02-28", date: "28/02/2025 – 02/03/2025", label: "Finals", grad: "from-cyan-500 to-teal-500" },
];

const MotionListItem = ({ children, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  return (
    <motion.li
      ref={ref}
      className="list-none"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {children}
    </motion.li>
  );
};

const MotionTimelineItem = ({ children, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {children}
    </motion.div>
  );
};


const Guidelines = () => {
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true, amount: 0.5 });

  return (
    <Section id="guidelines" background="bg-gray-50 dark:bg-gray-900">
      <Container maxWidth="max-w-6xl">
        <div className="text-center mb-12">
          <motion.h2
            ref={titleRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isTitleInView ? 1 : 0, y: isTitleInView ? 0 : 20 }}
            transition={{ duration: 0.6 }}
            className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Event <span className="text-blue-600 dark:text-blue-400">Guidelines</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <ol className="space-y-5">
            {points.map((p, i) => {
              const Icon = p.icon;
              return (
                <MotionListItem key={i} index={i}>
                  <div className={`bg-gradient-to-br ${p.grad} p-[1px] rounded-2xl transition-transform hover:-translate-y-0.5 hover:shadow-xl`}>
                    <div className="rounded-2xl bg-white dark:bg-gray-800 p-5 flex gap-4 items-start">
                      <div className={`h-11 w-11 rounded-xl flex items-center justify-center text-white bg-gradient-to-br ${p.grad} shadow-lg`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <span className="inline-block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1">
                          {i + 1}
                        </span>
                        <p className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">
                          {p.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </MotionListItem>
              );
            })}
          </ol>

           <div className="relative">
            <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-sky-400 to-cyan-400 opacity-60" />
            <div className="space-y-4">
              {timeline.map((t, idx) => (
                <MotionTimelineItem key={idx} index={idx}>
                  <div className="relative pl-12">
                    <span
                      className={`absolute left-2 top-2 h-5 w-5 rounded-full bg-white dark:bg-gray-900 ring-4 ring-offset-2 ring-offset-white dark:ring-offset-gray-900 bg-gradient-to-br ${t.grad}`}
                    />
                    <time
                      className={`inline-block rounded-full px-2 py-0.5 text-xs font-semibold text-white bg-gradient-to-r ${t.grad}`}
                    >
                      {t.date}
                    </time>
                    <div className="mt-2 rounded-lg border border-gray-200/60 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur p-3 hover:shadow-md transition-shadow">
                      <p className="text-sm">{t.label}</p>
                    </div>
                  </div>
                </MotionTimelineItem>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Guidelines;