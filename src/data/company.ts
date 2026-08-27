export interface CompanyDetails {
  name: string;
  tagline: string;
  subheadline: string;
  address: string;
  city: string;
  state: string;
  country: string;
  phone: string;
  altPhone: string;
  email: string;
  website: string;
  parentCompany: string;
  affiliates: {
    name: string;
    url: string;
    description: string;
  }[];
  stats: {
    label: string;
    value: string;
    description: string;
  }[];
}

export const companyDetails: CompanyDetails = {
  name: 'City Media Academy',
  tagline: 'Nurturing the next generation of radio professionals and media entrepreneurs.',
  subheadline: 'Nigeria’s premier broadcast presentation, voiceover, podcasting, and media entrepreneurship academy.',
  address: 'Plot 11 Lateef Jakande Road, Agidingbi, Ikeja',
  city: 'Ikeja',
  state: 'Lagos',
  country: 'Nigeria',
  phone: '0810 968 8638',
  altPhone: '0809 105 1051',
  email: 'admissions@citymediaacademy.com',
  website: 'https://city1051fm.com/cma',
  parentCompany: 'Cardinal Broadcasting Limited',
  affiliates: [
    {
      name: 'City 105.1 FM',
      url: 'https://city1051fm.com',
      description: 'Lagos Premier Lifestyle & Urban Radio Station'
    },
    {
      name: '93.5 Area FM',
      url: 'https://935areafm.com',
      description: 'Grassroots & Pidgin Community Radio Network'
    },
    {
      name: 'Cardinal Broadcasting Limited',
      url: 'https://cardinal-broadcasting-org.vercel.app',
      description: 'Broadcasting & Digital Media Conglomerate'
    },
    {
      name: 'Praise in the City',
      url: 'https://praiseinthecity.org',
      description: 'Africa’s Premier Gospel Music & Media Festival'
    }
  ],
  stats: [
    {
      value: '5,000+',
      label: 'Graduated Students',
      description: 'Trained across radio, TV, voiceover & media'
    },
    {
      value: '35+',
      label: 'Specialized Courses',
      description: 'Covering 8 media and broadcast pillars'
    },
    {
      value: '25+',
      label: 'Industry Mentors',
      description: 'Active on-air hosts & media executives'
    },
    {
      value: '94%',
      label: 'Career Placement Rate',
      description: 'In top broadcast stations & media agencies'
    }
  ]
};

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Courses', href: '/courses' },
  { label: 'Instructors', href: '/instructors' },
  { label: 'About', href: '/about' },
  { label: 'Admissions', href: '/admissions' },
  { label: 'Student Portal', href: '/dashboard' },
  { label: 'Facilitator Hub', href: '/facilitator' }
];
