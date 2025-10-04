// Event Configuration
export const EVENT_CONFIG = {
  name: 'IIChE-ChEMATHON 2026',
  year: 2026,
  edition: 'First Edition',
  theme: 'Redefining Progress Through Sustainable Solutions',
  
  dates: {
    start: '2026-03-13T00:00:00',
    end: '2026-03-15T23:59:59',
    display: '13th - 15th March, 2026',
    shortDisplay: 'Mar 13-15, 2026',
  },
  
  venue: {
    name: 'MIT Muzaffarpur',
    location: 'Muzaffarpur, Bihar, India',
    shortLocation: 'Muzaffarpur, Bihar',
  },
  
  contact: {
    email: 'chemathon2026@mitmuzaffarpur.org',
    phone: ['+91 98765 43210', '+91 98765 43211'],
    supportEmail: 'support@chemathon2026.org',
  },
  
  social: {
    linkedin: 'https://linkedin.com/company/iiche-chemathon',
    instagram: 'https://instagram.com/iiche_chemathon',
    twitter: 'https://twitter.com/iiche_chemathon',
  },
  
  registration: {
    url: 'https://forms.gle/jxpmH1FBL9BkRGd36',
    deadline: '2026-01-31',
  },
  
  timeline: [
    { dateISO: '2025-12-26', date: '26 Dec 2025', label: 'Idea Submission Opens' },
    { dateISO: '2026-01-15', date: '15 Jan 2026', label: 'Idea Submission Closes' },
    { dateISO: '2026-01-20', date: '20 Jan 2026', label: 'Preliminary Round (Online)' },
    { dateISO: '2026-01-25', date: '25 Jan 2026', label: 'Shortlist Announcement' },
    { dateISO: '2026-01-31', date: '31 Jan 2026', label: 'Registration Closes' },
    { dateISO: '2026-03-13', date: '13-15 Mar 2026', label: 'Grand Finale (36 hours)' },
  ],
};

export const ANIMATION_DURATION = {
  fast: 0.2,
  normal: 0.3,
  slow: 0.6,
};
