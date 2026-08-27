export interface ReplicaCourse {
  id: string;
  slug: string;
  title: string;
  description: string;
  duration: string;
  durationWeeks: number;
  format: 'Physical' | 'Online' | 'Hybrid';
  category: string;
  badge?: string;
  thumbnail: string;
  iconNames: string[];
}

export const replicaCoursesData: ReplicaCourse[] = [
  {
    id: 'broadcast-media-pro-2026',
    slug: 'broadcast-media-pro-2026',
    title: 'Broadcast Media Pro Course 2026',
    description: 'Kickstart your career in broadcast media, public speaking, voiceover and content creation in just 5 weeks!',
    duration: '5 Weeks',
    durationWeeks: 5,
    format: 'Hybrid',
    category: 'Broadcasting',
    badge: 'REGISTRATION CLOSED',
    thumbnail: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=800&auto=format&fit=crop',
    iconNames: ['Radio', 'Mic2', 'AudioWaveform', 'Languages', 'Share2', 'UserCheck'],
  },
  {
    id: 'podcast-production-masterclass',
    slug: 'podcast-production-masterclass',
    title: 'Podcast Production Masterclass',
    description: 'Learn to plan, record, edit and launch your podcast like a pro.',
    duration: '4 Weeks',
    durationWeeks: 4,
    format: 'Online',
    category: 'Content Creation',
    thumbnail: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=800&auto=format&fit=crop',
    iconNames: ['Mic2', 'AudioWaveform', 'Headphones', 'Share2', 'TrendingUp'],
  },
  {
    id: 'voiceover-mastery',
    slug: 'voiceover-mastery',
    title: 'Voiceover Mastery',
    description: 'Build a professional voice and master the art of voiceover for media, brands, and more.',
    duration: '4 Weeks',
    durationWeeks: 4,
    format: 'Physical',
    category: 'Voiceover',
    thumbnail: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=800&auto=format&fit=crop',
    iconNames: ['Mic2', 'AudioWaveform', 'Volume2', 'Users', 'Share2', 'Star'],
  },
  {
    id: 'digital-media-marketing',
    slug: 'digital-media-marketing',
    title: 'Digital Media Marketing',
    description: 'Learn strategies to grow brands and engage audiences online.',
    duration: '6 Weeks',
    durationWeeks: 6,
    format: 'Online',
    category: 'Marketing',
    thumbnail: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&auto=format&fit=crop',
    iconNames: ['Share2', 'TrendingUp', 'BarChart3', 'Globe', 'UserCheck'],
  },
  {
    id: 'event-hosting-public-speaking',
    slug: 'event-hosting-public-speaking',
    title: 'Event Hosting & Public Speaking',
    description: 'Command any stage and connect with your audience with confidence.',
    duration: '4 Weeks',
    durationWeeks: 4,
    format: 'Physical',
    category: 'Public Speaking',
    thumbnail: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=800&auto=format&fit=crop',
    iconNames: ['Mic2', 'Presentation', 'Users', 'Share2', 'Award'],
  },
  {
    id: 'social-media-management',
    slug: 'social-media-management',
    title: 'Social Media Management',
    description: 'Create content, grow communities and manage social platforms like a pro.',
    duration: '4 Weeks',
    durationWeeks: 4,
    format: 'Online',
    category: 'Digital Media',
    thumbnail: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop',
    iconNames: ['Share2', 'Smartphone', 'TrendingUp', 'Heart', 'Globe'],
  },
  {
    id: 'radio-tv-presentation',
    slug: 'radio-tv-presentation',
    title: 'Radio/TV Presentation',
    description: 'Master on-air presentation, camera presence and audience engagement.',
    duration: '5 Weeks',
    durationWeeks: 5,
    format: 'Hybrid',
    category: 'Broadcasting',
    thumbnail: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?q=80&w=800&auto=format&fit=crop',
    iconNames: ['Radio', 'Tv', 'Mic2', 'Users', 'TrendingUp', 'UserCheck'],
  },
  {
    id: 'diction-speech-training',
    slug: 'diction-speech-training',
    title: 'Diction & Speech Training',
    description: 'Improve your diction, articulation and communication for any platform.',
    duration: '4 Weeks',
    durationWeeks: 4,
    format: 'Physical',
    category: 'Voiceover',
    thumbnail: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop',
    iconNames: ['Languages', 'AudioWaveform', 'TrendingUp', 'Share2', 'Award'],
  },
];
