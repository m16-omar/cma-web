export interface Partner {
  id: string;
  name: string;
  category: string;
  badge?: string;
}

export const partnersData: Partner[] = [
  { id: 'cityfm', name: 'City 105.1 FM', category: 'Broadcasting Partner', badge: 'Flagship Station' },
  { id: 'areafm', name: '93.5 Area FM', category: 'Community Radio', badge: 'Affiliate Station' },
  { id: 'cardinal', name: 'Cardinal Broadcasting Limited', category: 'Media Network', badge: 'Parent Company' },
  { id: 'praise', name: 'Praise in the City', category: 'Media Events', badge: 'Event Partner' },
  { id: 'dstv', name: 'DStv / MultiChoice', category: 'Broadcast Distribution', badge: 'Industry Partner' },
  { id: 'channelstv', name: 'Channels Television', category: 'News Network', badge: 'Media Partner' },
  { id: 'soundcity', name: 'Soundcity Radio & TV', category: 'Music & Entertainment', badge: 'Affiliate' },
  { id: 'beatfm', name: 'The Beat FM', category: 'Urban Radio', badge: 'Industry Partner' },
  { id: 'nbc', name: 'National Broadcasting Commission (NBC)', category: 'Regulatory Standards', badge: 'Curriculum Aligned' },
];

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
  course: string;
  year: string;
  rating: number;
}

export const testimonialsData: Testimonial[] = [
  {
    id: 't-1',
    name: 'Adaeze Nwosu',
    role: 'On-Air Personality & Newscaster',
    company: 'City 105.1 FM',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop',
    quote: 'The 3-week internship after the 2-week intensive classes was the game changer. Walking into City FM live studios and co-hosting real shows gave me the practical edge no university mass communication degree ever could.',
    course: 'Broadcast Media Pro Course 2026',
    year: '2025 Graduate',
    rating: 5
  },
  {
    id: 't-2',
    name: 'Korede Balogun',
    role: 'Lead Voice Actor & Commercial Producer',
    company: 'VoiceOver Africa Studio',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
    quote: 'Mazino Appeal broke down audio mixing, script interpretation and setting up a professional home booth. Within 30 days of graduating, I booked national radio commercial campaigns.',
    course: 'Broadcast Media Pro Course (Voiceover Pillar)',
    year: '2025 Graduate',
    rating: 5
  },
  {
    id: 't-3',
    name: 'Favour Danladi',
    role: 'Podcast Host & Content Director',
    company: 'The Naija Tech Pulse',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop',
    quote: 'From microphone etiquette to guest interviewing and digital syndication, CMA provides the exact modern curriculum the Nigerian media landscape desperately needs.',
    course: 'Broadcast Media Pro Course 2026',
    year: '2026 Graduate',
    rating: 5
  },
  {
    id: 't-4',
    name: 'Seun Adeleye',
    role: 'Corporate MC & Event Compere',
    company: 'Lagos Gala & Awards Host',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop',
    quote: 'Learning stage presence and speech delivery under Oscar Oyinsan and Coach Dolapo elevated my speaking rate from ₦50,000 to over ₦350,000 per corporate event.',
    course: 'Executive Diction & Public Speaking',
    year: '2025 Graduate',
    rating: 5
  }
];
