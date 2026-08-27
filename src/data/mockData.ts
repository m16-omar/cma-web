export interface StatItem {
  icon: string;
  value: string;
  label: string;
}

export interface PillarItem {
  id: number;
  title: string;
  iconName: string;
}

export interface MentorItem {
  id: string;
  name: string;
  role: string;
  avatar: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  name: string;
  role: string;
  station: string;
  avatar: string;
  stationLogoText?: string;
  stationBadgeBg?: string;
}

export const statsData: StatItem[] = [
  {
    icon: 'GraduationCap',
    value: '5000+',
    label: 'Students Trained',
  },
  {
    icon: 'BookOpen',
    value: '35+',
    label: 'Courses Offered',
  },
  {
    icon: 'Users',
    value: '25+',
    label: 'Industry Mentors',
  },
  {
    icon: 'TrendingUp',
    value: '94%',
    label: 'Placement Success',
  },
];

export const pillarsData: PillarItem[] = [
  { id: 1, title: 'Radio/TV Presentation', iconName: 'Radio' },
  { id: 2, title: 'Interview & Show Preparation', iconName: 'Mic2' },
  { id: 3, title: 'Voiceover & Audio Production', iconName: 'AudioWaveform' },
  { id: 4, title: 'Diction & Speech Training', iconName: 'Speech' },
  { id: 5, title: 'Social Media Management', iconName: 'Share2' },
  { id: 6, title: 'Event Hosting & Public Speaking', iconName: 'Presentation' },
  { id: 7, title: 'Media Marketing', iconName: 'TrendingUp' },
  { id: 8, title: 'Personal Branding', iconName: 'Star' },
];

export const mentorsData: MentorItem[] = [
  {
    id: 'chukwudi',
    name: 'Chukwudi Ezeugwu',
    role: 'Broadcaster & Podcast',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 'shola',
    name: 'Shola Thompson',
    role: 'Radio & TV Host',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 'tope',
    name: 'Tope Aghomatse',
    role: 'Content Strategist',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 'mazino',
    name: 'Mazino Appeal',
    role: 'Voice Over Expert',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 'nyamgul',
    name: 'Nyamgul Agaji',
    role: 'Broadcast Journalist',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 'oludolapo',
    name: 'Oludolapo Adewale',
    role: 'Diction coach',
    avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 'oscar',
    name: 'Oscar Oyinsan',
    role: 'Event Host',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 'charles',
    name: 'Charles Ezerime',
    role: 'Brand Strategist',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop',
  },
];

export const testimonialsData: TestimonialItem[] = [
  {
    id: '1',
    quote: 'CMA gave me the confidence and practical skills I needed. Today, I’m a full-time radio presenter.',
    name: 'Jessica N.',
    role: 'On-Air Personality',
    station: 'City 105.1 FM',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
    stationLogoText: 'CITY 105.1',
    stationBadgeBg: '#FF6B00',
  },
  {
    id: '2',
    quote: 'The internship at City FM was a game changer. It opened doors I never imagined.',
    name: 'Daniel O.',
    role: 'Content Producer',
    station: 'Cool FM',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    stationLogoText: 'cool 96.9 fm',
    stationBadgeBg: '#1e3a8a',
  },
  {
    id: '3',
    quote: 'From learning voiceover techniques to building my brand, CMA prepared me for real success.',
    name: 'Tunde A.',
    role: 'Voice Over Artist',
    station: 'NTA',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
    stationLogoText: 'NTA',
    stationBadgeBg: '#065f46',
  },
  {
    id: '4',
    quote: 'CMA is more than a school, it’s a launchpad for anyone serious about a career in media.',
    name: 'Mary L.',
    role: 'Digital Media Manager',
    station: 'MTV Base',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop',
    stationLogoText: 'MTV base',
    stationBadgeBg: '#d97706',
  },
];
