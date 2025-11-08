export const NAV_LINKS = [
  { href: '#home', label: 'HOME' },
  { href: '#about', label: 'ABOUT' },
  { href: '#process', label: 'PROCESS' },
  { href: '#themes', label: 'THEMES' },
  { href: '#gallery', label: 'GALLERY' },
  { href: '#faq', label: 'FAQ' },
];

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Submit Your Idea',
    date: 'Jan 1 - Jan 20, 2026',
    description:
      'Choose one of our six SDG-aligned themes and submit your innovative hardware solution idea. Be creative, be bold, and think sustainable!',
  },
  {
    number: '02',
    title: 'Online Prelims',
    date: 'Jan 25, 2026',
    description:
      'Shortlisted teams present their concepts virtually to our panel of expert judges. Show us your vision and technical approach.',
  },
  {
    number: '03',
    title: 'Get Selected',
    date: 'Jan 30, 2026',
    description:
      '42 finalist teams (7 per SDG theme) receive confirmation and registration details for the grand finale at KEC campus.',
  },
  {
    number: '04',
    title: '36-Hour Hackathon',
    date: 'Feb 27 - Mar 1, 2026',
    description:
      'Build your working prototype on-site with mentorship, materials, and unlimited energy drinks! Accommodations and meals provided.',
  },
  {
    number: '05',
    title: 'Present & Win',
    date: 'Mar 1, 2026',
    description:
      'Demo your solution to judges and compete for ₹1 Lakh (1st), ₹50K (2nd), and ₹30K (3rd) prizes. Top 12 teams present in finals.',
  },
];

export const THEMES = [
  {
    emoji: '💧',
    sdg: 'SDG 6',
    title: 'Clean Water & Sanitation',
    description: 'Water purification, IoT monitoring, desalination, wastewater treatment',
    color: 'blue',
  },
  {
    emoji: '⚡',
    sdg: 'SDG 7',
    title: 'Clean Energy',
    description: 'Hydrogen generation, waste-to-energy, renewable storage solutions',
    color: 'purple',
  },
  {
    emoji: '🏭',
    sdg: 'SDG 9',
    title: 'Industry & Innovation',
    description: 'Smart monitoring, AI quality control, industrial safety devices',
    color: 'green',
  },
  {
    emoji: '🏙️',
    sdg: 'SDG 11',
    title: 'Sustainable Cities',
    description: 'Air purification, smart waste management, urban sustainability',
    color: 'yellow',
  },
  {
    emoji: '♻️',
    sdg: 'SDG 12',
    title: 'Responsible Consumption',
    description: 'Waste tracking, plastic upcycling, circular economy solutions',
    color: 'red',
  },
  {
    emoji: '🌍',
    sdg: 'SDG 13',
    title: 'Climate Action',
    description: 'Carbon capture, emission monitoring, climate resilience tools',
    color: 'indigo',
  },
];

export const GALLERY_IMAGES = [
  {
    src: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800',
    alt: 'Team working on prototype',
    title: 'Innovation in Action',
    description: 'Teams building sustainable solutions',
  },
  {
    src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800',
    alt: 'Winners celebration',
    title: 'Winning Moments',
    description: 'Celebrating groundbreaking prototypes',
  },
  {
    src: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800',
    alt: 'Mentorship session',
    title: 'Expert Mentorship',
    description: 'Industry leaders guiding participants',
  },
  {
    src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800',
    alt: 'Hardware building session',
    title: 'Hardware Building',
    description: '36 hours of intense development',
  },
  {
    src: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800',
    alt: 'Project presentation',
    title: 'Final Presentations',
    description: 'Teams showcasing their innovations',
  },
  {
    src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800',
    alt: 'Networking',
    title: 'Networking & Collaboration',
    description: 'Building connections that last',
  },
];

export const TESTIMONIALS = [
  {
    name: 'Rahul Sharma',
    title: 'Winner, ChEMATHON 2024',
    quote:
      'ChEMATHON was a game-changer! The 36-hour hackathon pushed us to think creatively and build a working prototype that could actually make a difference. The mentorship and resources provided were exceptional.',
    color: 'bg-gradient-to-br from-blue-500 to-purple-600',
  },
  {
    name: 'Priya Patel',
    title: '2nd Prize, ChEMATHON 2024',
    quote:
      'An incredible platform to showcase innovation! The focus on sustainability and SDGs made it even more meaningful. We learned so much and made amazing connections with fellow engineers.',
    color: 'bg-gradient-to-br from-purple-500 to-pink-600',
  },
  {
    name: 'Arjun Kumar',
    title: 'Finalist, ChEMATHON 2024',
    quote:
      "The energy during ChEMATHON was unmatched! From ideation to final presentation, every step was well-organized. The judges' feedback helped us refine our solution significantly.",
    color: 'bg-gradient-to-br from-green-500 to-teal-600',
  },
];

export const FAQS = [
  {
    question: 'Can I participate as an individual?',
    answer:
      'No, ChEMATHON is a team event. You must form a team of 4-5 members including 1 mentor and 1 mandatory female participant.',
  },
  {
    question: "What if I don't have a team?",
    answer:
      "We'll organize a team formation session! You can register individually and we'll help connect you with other participants looking for teams.",
  },
  {
    question: 'Is accommodation provided?',
    answer:
      'Yes! Accommodation will be provided for all finalist teams during the 36-hour hackathon at the KEC campus. All meals are also included.',
  },
  {
    question: 'What materials/equipment will be provided?',
    answer:
      'Basic prototyping materials and tools will be available on-site. However, we recommend bringing your own laptops and any specialized equipment your project might need.',
  },
  {
    question: 'Can we work on multiple SDG themes?',
    answer:
      "Your project must primarily focus on one SDG theme, but you can incorporate elements from multiple SDGs if they're relevant to your solution.",
  },
];
