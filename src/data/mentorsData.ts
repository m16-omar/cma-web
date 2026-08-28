export interface IndustryMentor {
  id: string;
  name: string;
  role: string;
  bio: string;
  category: 'Broadcasting' | 'Presentation' | 'Voiceover' | 'Content Creation' | 'Marketing & Branding' | 'Events & Hosting';
  avatar: string;
  socials: {
    instagram: string;
    twitter: string;
    facebook: string;
    linkedin: string;
  };
}

export const industryMentorsList: IndustryMentor[] = [
  {
    id: 'mazino',
    name: 'Mazino Appeal',
    role: 'Voice Over Expert',
    bio: 'Professional voiceover artist with a rich, versatile voice trusted by top brands across Africa.',
    category: 'Voiceover',
    avatar: '/images/mentors/mazino-appeal.png',
    socials: {
      instagram: 'https://instagram.com/mazinoappeal',
      twitter: 'https://x.com/mazinoappeal',
      facebook: 'https://facebook.com/mazinoappeal',
      linkedin: 'https://linkedin.com/in/mazinoappeal',
    },
  },
  {
    id: 'nyamgul',
    name: 'Nyamgul Agaji',
    role: 'Broadcast Journalist',
    bio: 'Experienced broadcast journalist and news anchor with a passion for storytelling and live coverage.',
    category: 'Broadcasting',
    avatar: '/images/mentors/nyamgul-agaji.png',
    socials: {
      instagram: 'https://instagram.com/nyamgulagaji',
      twitter: 'https://x.com/nyamgulagaji',
      facebook: 'https://facebook.com/nyamgulagaji',
      linkedin: 'https://linkedin.com/in/nyamgulagaji',
    },
  },
  {
    id: 'oludolapo',
    name: 'Oludolapo Adewale',
    role: 'Diction coach',
    bio: 'Diction and speech coach helping professionals speak with clarity, resonance, and confidence.',
    category: 'Presentation',
    avatar: '/images/mentors/oludolapo-adewale.png',
    socials: {
      instagram: 'https://instagram.com/oludolapoadewale',
      twitter: 'https://x.com/oludolapoadewale',
      facebook: 'https://facebook.com/oludolapoadewale',
      linkedin: 'https://linkedin.com/in/oludolapoadewale',
    },
  },
  {
    id: 'oscar',
    name: 'Oscar Oyinsan',
    role: 'Event Host',
    bio: 'Dynamic event host and television presenter who connects audiences and creates memorable experiences.',
    category: 'Events & Hosting',
    avatar: '/images/mentors/oscar-oyinsan.png',
    socials: {
      instagram: 'https://instagram.com/oscaroyinsan',
      twitter: 'https://x.com/oscaroyinsan',
      facebook: 'https://facebook.com/oscaroyinsan',
      linkedin: 'https://linkedin.com/in/oscaroyinsan',
    },
  },
  {
    id: 'charles',
    name: 'Charles Ezerime',
    role: 'Brand Strategist',
    bio: 'Brand strategist focused on helping media personalities and corporate brands build influence and market legacy.',
    category: 'Marketing & Branding',
    avatar: '/images/mentors/charles-ezerime.png',
    socials: {
      instagram: 'https://instagram.com/charlesezerime',
      twitter: 'https://x.com/charlesezerime',
      facebook: 'https://facebook.com/charlesezerime',
      linkedin: 'https://linkedin.com/in/charlesezerime',
    },
  },
  {
    id: 'chukwudi',
    name: 'Chukwudi Ezeugwu',
    role: 'Broadcaster & Podcast',
    bio: 'Award-winning broadcaster and podcast host with over 15 years in radio presentation and digital media.',
    category: 'Broadcasting',
    avatar: '/images/mentors/chukwudi-ezeugwu.png',
    socials: {
      instagram: 'https://instagram.com/chukwudiezeugwu',
      twitter: 'https://x.com/chukwudiezeugwu',
      facebook: 'https://facebook.com/chukwudiezeugwu',
      linkedin: 'https://linkedin.com/in/chukwudiezeugwu',
    },
  },
  {
    id: 'shola',
    name: 'Shola Thompson',
    role: 'Radio & TV Host',
    bio: 'Seasoned radio and TV host known for engaging prime-time audiences and compelling on-air presence.',
    category: 'Presentation',
    avatar: '/images/mentors/shola-thompson.png',
    socials: {
      instagram: 'https://instagram.com/sholathompson',
      twitter: 'https://x.com/sholathompson',
      facebook: 'https://facebook.com/sholathompson',
      linkedin: 'https://linkedin.com/in/sholathompson',
    },
  },
  {
    id: 'tope',
    name: 'Tope Aghomatse',
    role: 'Content Strategist',
    bio: 'Content strategist and digital media creator helping modern broadcasters communicate with impact.',
    category: 'Content Creation',
    avatar: '/images/mentors/tope-aghomatse.png',
    socials: {
      instagram: 'https://instagram.com/topeaghomatse',
      twitter: 'https://x.com/topeaghomatse',
      facebook: 'https://facebook.com/topeaghomatse',
      linkedin: 'https://linkedin.com/in/topeaghomatse',
    },
  },
];
