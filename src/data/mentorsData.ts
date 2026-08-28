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
    id: 'mazino',
    name: 'Mazino Appeal',
    role: 'Voice Over Expert',
    bio: 'Professional voiceover artist with a rich, versatile voice trusted by top brands across Africa.',
    category: 'Voiceover',
    avatar: '/images/mentors/mazino-appeal.png',
    iconNames: ['Mic2', 'AudioWaveform', 'Volume2', 'Sparkles'],
  },
  {
    id: 'nyamgul',
    name: 'Nyamgul Agaji',
    role: 'Broadcast Journalist',
    bio: 'Experienced broadcast journalist and news anchor with a passion for storytelling and live coverage.',
    category: 'Broadcasting',
    avatar: '/images/mentors/nyamgul-agaji.png',
    iconNames: ['Newspaper', 'Mic2', 'Radio', 'Tv'],
  },
  {
    id: 'oludolapo',
    name: 'Oludolapo Adewale',
    role: 'Diction coach',
    bio: 'Diction and speech coach helping professionals speak with clarity, resonance, and confidence.',
    category: 'Presentation',
    avatar: '/images/mentors/oludolapo-adewale.png',
    iconNames: ['Languages', 'AudioWaveform', 'Mic2', 'Users'],
  },
  {
    id: 'oscar',
    name: 'Oscar Oyinsan',
    role: 'Event Host',
    bio: 'Dynamic event host and television presenter who connects audiences and creates memorable experiences.',
    category: 'Events & Hosting',
    avatar: '/images/mentors/oscar-oyinsan.png',
    iconNames: ['Mic2', 'Calendar', 'Users', 'Star'],
  },
  {
    id: 'charles',
    name: 'Charles Ezerime',
    role: 'Brand Strategist',
    bio: 'Brand strategist focused on helping media personalities and corporate brands build influence and market legacy.',
    category: 'Marketing & Branding',
    avatar: '/images/mentors/charles-ezerime.png',
    iconNames: ['Target', 'TrendingUp', 'Megaphone', 'ShieldCheck'],
  },
  {
    id: 'chukwudi',
    name: 'Chukwudi Ezeugwu',
    role: 'Broadcaster & Podcast',
    bio: 'Award-winning broadcaster and podcast host with over 15 years in radio presentation and digital media.',
    category: 'Broadcasting',
    avatar: '/images/mentors/chukwudi-ezeugwu.png',
    iconNames: ['Mic2', 'Radio', 'Play', 'Building'],
  },
  {
    id: 'shola',
    name: 'Shola Thompson',
    role: 'Radio & TV Host',
    bio: 'Seasoned radio and TV host known for engaging prime-time audiences and compelling on-air presence.',
    category: 'Presentation',
    avatar: '/images/mentors/shola-thompson.png',
    iconNames: ['Mic2', 'Radio', 'Calendar', 'Users'],
  },
  {
    id: 'tope',
    name: 'Tope Aghomatse',
    role: 'Content Strategist',
    bio: 'Content strategist and digital media creator helping modern broadcasters communicate with impact.',
    category: 'Content Creation',
    avatar: '/images/mentors/tope-aghomatse.png',
    iconNames: ['PenTool', 'MessageSquare', 'Megaphone', 'TrendingUp'],
  },
];
