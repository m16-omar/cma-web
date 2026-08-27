export interface IndustryMentor {
  id: string;
  name: string;
  role: string;
  bio: string;
  category: 'Broadcasting' | 'Presentation' | 'Voiceover' | 'Content Creation' | 'Marketing & Branding' | 'Events & Hosting';
  avatar: string;
  iconNames: string[];
}

export const industryMentorsList: IndustryMentor[] = [
  {
    id: 'chukwudi',
    name: 'Chukwudi Ezeugwu',
    role: 'Broadcaster & Podcast',
    bio: 'Award-winning broadcaster and podcast host with 15+ years in radio and digital media.',
    category: 'Broadcasting',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop',
    iconNames: ['Mic2', 'Radio', 'Play', 'Building'],
  },
  {
    id: 'shola',
    name: 'Shola Thompson',
    role: 'Radio & TV Host',
    bio: 'Seasoned radio and TV host known for engaging audiences and compelling on-air presence.',
    category: 'Presentation',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop',
    iconNames: ['Mic2', 'Radio', 'Calendar', 'Users'],
  },
  {
    id: 'tope',
    name: 'Tope Aghomatse',
    role: 'Content Strategist',
    bio: 'Content strategist and digital storyteller helping brands communicate with impact.',
    category: 'Content Creation',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop',
    iconNames: ['PenTool', 'MessageSquare', 'Megaphone', 'TrendingUp'],
  },
  {
    id: 'mazino',
    name: 'Mazino Appeal',
    role: 'Voice Over Expert',
    bio: 'Professional voiceover artist with a rich, versatile voice trusted by top brands.',
    category: 'Voiceover',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop',
    iconNames: ['Mic2', 'AudioWaveform', 'Volume2', 'Sparkles'],
  },
  {
    id: 'nyamgul',
    name: 'Nyamgul Agaji',
    role: 'Broadcast Journalist',
    bio: 'Experienced broadcast journalist and news anchor with a passion for storytelling.',
    category: 'Broadcasting',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format&fit=crop',
    iconNames: ['Newspaper', 'Mic2', 'Radio', 'Tv'],
  },
  {
    id: 'oludolapo',
    name: 'Oludolapo Adewale',
    role: 'Diction Coach',
    bio: 'Diction and speech coach helping professionals speak with clarity and confidence.',
    category: 'Presentation',
    avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=600&auto=format&fit=crop',
    iconNames: ['Languages', 'AudioWaveform', 'Mic2', 'Users'],
  },
  {
    id: 'oscar',
    name: 'Oscar Oyinsan',
    role: 'Event Host',
    bio: 'Dynamic event host and MC who connects people and creates memorable experiences.',
    category: 'Events & Hosting',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop',
    iconNames: ['Mic2', 'Calendar', 'Users', 'Star'],
  },
  {
    id: 'charles',
    name: 'Charles Ezerime',
    role: 'Brand Strategist',
    bio: 'Brand strategist focused on helping individuals and brands build influence and legacy.',
    category: 'Marketing & Branding',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop',
    iconNames: ['Target', 'TrendingUp', 'Megaphone', 'ShieldCheck'],
  },
];
