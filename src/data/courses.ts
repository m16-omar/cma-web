import { Course } from '../types/course';
import { instructorsData } from './instructors';

export const coursesData: Course[] = [
  {
    id: 'broadcast-media-pro-2026',
    slug: 'broadcast-media-pro-2026',
    title: 'Broadcast Media Pro Course 2026',
    tagline: '5-Week Intensive Programme. Nurturing the next generation of radio professionals and media entrepreneurs.',
    description: 'Kickstart your career in broadcast media, public speaking, voiceover and content creation in just 5 weeks! Learn how to build a lucrative on-air presentation, event hosting, voiceover and digital media business with direct 3-week internship placement at City 105.1 FM.',
    shortDescription: 'Master radio/TV presentation, voiceover, diction, podcasting, and media branding with 2 weeks intensive classes and 3 weeks live radio internship.',
    badge: '5 Weeks | Physical + Online | Certificate + Internship',
    category: 'Broadcasting',
    level: 'All Levels',
    format: 'Hybrid',
    supportedFormats: ['Physical', 'Online', 'Hybrid'],
    durationWeeks: 5,
    totalHours: 75,
    price: {
      physical: 180000,
      online: 120000,
      hybrid: 220000,
      currency: 'NGN',
      formatted: '₦180,000',
      originalPrice: 250000,
    },
    featured: true,
    popular: true,
    rating: 4.96,
    reviewCount: 480,
    studentsCount: 3200,
    thumbnail: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=1200&auto=format&fit=crop',
    schedule: {
      startDate: 'July 06, 2026',
      durationWeeks: 5,
      dailyHours: '9:00 AM – 2:00 PM (5 hours daily)',
      classDays: 'Monday to Friday',
      physicalLocation: 'Plot 11 Lateef Jakande Road, Agidingbin Ikeja, Lagos Nigeria (City 105.1 FM Complex)',
      onlinePlatform: 'CMA Interactive LMS + Live Zoom HD Broadcast Studio',
      internshipDuration: '3 Weeks Guaranteed Hands-on Internship at City 105.1 FM / 93.5 Area FM',
      registrationStatus: 'Waitlist',
    },
    whatYouWillGet: [
      'Accredited Certificate of Professional Media Competency',
      'The Art & Psychology of Radio & TV Presentation',
      'Advanced Interviewing & Show Structuring Skills',
      'Professional Voiceover Production & Home Acoustic Setup',
      'Phonetics, Diction & Executive Public Speaking',
      'Social Media Management & Creator Monetization Blueprint',
      'Journalism, Investigative Research & Newscasting',
      '3-Week Guaranteed Live Studio Internship at City 105.1 FM',
      'Personal Demo Reel & Portfolio Reviewed by Veteran Broadcasters'
    ],
    requirements: [
      'Passion for broadcasting, media storytelling, or content creation',
      'Basic English communication proficiency',
      'Smartphone or laptop for digital assignments (for Online/Hybrid students)',
      'No prior broadcast experience required — beginner to advanced welcome'
    ],
    targetAudience: [
      'Aspiring Radio Presenters, On-Air Personalities (OAPs) & TV Hosts',
      'Content Creators, Podcasters, and Digital Media Influencers',
      'Voiceover Artists, Jingles Performers & Audio Storytellers',
      'Corporate Executives, Comperes, MCs & Public Speakers',
      'Journalists, Newscasters & Media Entrepreneurs'
    ],
    instructors: instructorsData,
    pillars: [
      {
        id: 'pillar-1',
        number: 1,
        title: 'Radio & TV Presentation',
        description: 'Master the core fundamentals of broadcast presentation, microphone technique, studio consoles, clock programming, and holding listener attention.',
        duration: '10 Hours (4 Lessons)',
        lessons: [
          {
            id: 'p1-l1',
            title: 'Anatomy of a Broadcast Studio: Microphones, Consoles & Transmission',
            duration: '90 mins',
            mode: 'Hybrid',
            isLocked: false,
            isPreview: true,
            videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            description: 'Introduction to professional on-air consoles, dynamic vs condenser mics, broadcast processing, and acoustic discipline.',
            facilitatorName: 'Shola Thompson'
          },
          {
            id: 'p1-l2',
            title: 'On-Air Persona Development & Natural Conversational Delivery',
            duration: '120 mins',
            mode: 'Physical',
            isLocked: false,
            isPreview: true,
            description: 'Discovering your authentic radio voice, tone modulation, eliminating robotic delivery, and connecting emotionally.',
            facilitatorName: 'Chukwudi Ezeugwu'
          },
          {
            id: 'p1-l3',
            title: 'Radio Clocks, Rundowns & Live Time Management',
            duration: '90 mins',
            mode: 'Physical',
            isLocked: true,
            description: 'Understanding commercial breaks, station IDs, top-of-the-hour bulletins, and seamless cue management.',
            facilitatorName: 'Shola Thompson'
          },
          {
            id: 'p1-l4',
            title: 'TV Studio Poise, Teleprompter Reading & Camera Angles',
            duration: '120 mins',
            mode: 'Physical',
            isLocked: true,
            description: 'Physical studio posture, eye-line discipline with multi-camera setups, pacing with teleprompters.',
            facilitatorName: 'Nyamgul Agaji'
          }
        ]
      },
      {
        id: 'pillar-2',
        number: 2,
        title: 'Interview & Show Preparation',
        description: 'From researching high-profile guests to crafting compelling questions and managing live crisis on-air.',
        duration: '8 Hours (3 Lessons)',
        lessons: [
          {
            id: 'p2-l1',
            title: 'Deep Research Methodologies & Pre-Interview Briefing',
            duration: '90 mins',
            mode: 'Online',
            isLocked: false,
            isPreview: true,
            description: 'Finding the untold story angle, fact-checking, background dossiers, and preparing the guest.',
            facilitatorName: 'Chukwudi Ezeugwu'
          },
          {
            id: 'p2-l2',
            title: 'The Art of the Hard-Hitting & Conversational Interview',
            duration: '120 mins',
            mode: 'Hybrid',
            isLocked: true,
            description: 'Open-ended questioning, active listening, follow-up agility, steering talkative or evasive guests.',
            facilitatorName: 'Chukwudi Ezeugwu'
          },
          {
            id: 'p2-l3',
            title: 'Phone-in Show Dynamics & Live Defamation Control',
            duration: '90 mins',
            mode: 'Physical',
            isLocked: true,
            description: 'Managing angry callers, delay profanity dumpers, NBC broadcast regulations, and caller screening.',
            facilitatorName: 'Shola Thompson'
          }
        ]
      },
      {
        id: 'pillar-3',
        number: 3,
        title: 'Voiceover & Audio Production',
        description: 'Produce high-converting commercial adverts, documentary narrations, and establish your home recording studio.',
        duration: '10 Hours (4 Lessons)',
        lessons: [
          {
            id: 'p3-l1',
            title: 'Script Analysis, Commercial Beats & Voice Characterization',
            duration: '90 mins',
            mode: 'Hybrid',
            isLocked: false,
            isPreview: true,
            description: 'Deciphering client briefs, pacing emotional inflections, accent accents, and corporate vs hype delivery.',
            facilitatorName: 'Mazino Appeal'
          },
          {
            id: 'p3-l2',
            title: 'Home Audio Engineering & DAW Essentials (Adobe Audition/Reaper)',
            duration: '120 mins',
            mode: 'Online',
            isLocked: true,
            description: 'Gain staging, room treatment on a budget, noise gates, EQ, compression, and mastering voice tracks.',
            facilitatorName: 'Mazino Appeal'
          },
          {
            id: 'p3-l3',
            title: 'Building a High-Impact Voiceover Demo Reel',
            duration: '90 mins',
            mode: 'Physical',
            isLocked: true,
            description: 'Selecting royalty-free beds, mastering 60-second industry showcase reels for agency pitches.',
            facilitatorName: 'Mazino Appeal'
          },
          {
            id: 'p3-l4',
            title: 'Audio Jingles, Sweepers & Podcast Post-Production',
            duration: '90 mins',
            mode: 'Physical',
            isLocked: true,
            description: 'Multi-track layering, sound design, sound effects timing, and export loudness standards (LUFS).',
            facilitatorName: 'Chukwudi Ezeugwu'
          }
        ]
      },
      {
        id: 'pillar-4',
        number: 4,
        title: 'Diction & Speech Training',
        description: 'Comprehensive phonetics, articulation, breath support, vowel purity, consonant crispness, and accent refinement.',
        duration: '10 Hours (4 Lessons)',
        lessons: [
          {
            id: 'p4-l1',
            title: 'International Phonetic Alphabet (IPA) & Pure Vowel Sounds',
            duration: '90 mins',
            mode: 'Hybrid',
            isLocked: false,
            isPreview: true,
            description: 'Mastering the 44 English sounds, short and long monophthongs, diphthongs, and reducing regional interference.',
            facilitatorName: 'Oludolapo Adewale'
          },
          {
            id: 'p4-l2',
            title: 'Consonant Articulation, Dental & Plosive Clarity',
            duration: '120 mins',
            mode: 'Physical',
            isLocked: true,
            description: 'Eliminating consonant omission, mastering the "th", "p/b", "t/d" clarity, and tongue gymnastics.',
            facilitatorName: 'Oludolapo Adewale'
          },
          {
            id: 'p4-l3',
            title: 'Diaphragmatic Breath Control & Vocal Resonance',
            duration: '90 mins',
            mode: 'Physical',
            isLocked: true,
            description: 'Chest voice vs head voice, sustaining long sentences without gasping, preventing vocal fatigue.',
            facilitatorName: 'Oludolapo Adewale'
          },
          {
            id: 'p4-l4',
            title: 'Stress, Rhythm & Intonation in News & Talk Broadcast',
            duration: '90 mins',
            mode: 'Hybrid',
            isLocked: true,
            description: 'Syllabic stress patterns, upward/downward inflections, and delivering authority in speech.',
            facilitatorName: 'Oludolapo Adewale'
          }
        ]
      },
      {
        id: 'pillar-5',
        number: 5,
        title: 'Social Media Management & Creator Growth',
        description: 'Turn broadcast shows into viral digital clips, master algorithm mechanics, platform growth, and monetization.',
        duration: '8 Hours (3 Lessons)',
        lessons: [
          {
            id: 'p5-l1',
            title: 'Repurposing Studio Audio & Video for Reels/TikTok/Shorts',
            duration: '90 mins',
            mode: 'Online',
            isLocked: false,
            isPreview: true,
            description: 'Hook architecture, dynamic subtitles, clipping viral punchlines, and multi-format aspect ratios.',
            facilitatorName: 'Tope Aghomatse'
          },
          {
            id: 'p5-l2',
            title: 'Community Building, Live Streams & Engagement Algorithms',
            duration: '120 mins',
            mode: 'Online',
            isLocked: true,
            description: 'Hosting X Spaces, YouTube live premieres, audience conversion funnels, and newsletter integration.',
            facilitatorName: 'Tope Aghomatse'
          },
          {
            id: 'p5-l3',
            title: 'Digital Creator Monetization: Brand Deals & Affiliate Funnels',
            duration: '90 mins',
            mode: 'Online',
            isLocked: true,
            description: 'Rate cards for creators, sponsored segments, brand media kits, and direct viewer monetization.',
            facilitatorName: 'Tope Aghomatse'
          }
        ]
      },
      {
        id: 'pillar-6',
        number: 6,
        title: 'Event Hosting & Public Speaking',
        description: 'Command stages, host prestigious corporate events, state galas, and weddings with effortless stage presence.',
        duration: '8 Hours (3 Lessons)',
        lessons: [
          {
            id: 'p6-l1',
            title: 'Stage Presence, Protocol & Audience Energy Calibration',
            duration: '90 mins',
            mode: 'Physical',
            isLocked: false,
            isPreview: true,
            description: 'Entering the stage, greeting dignitaries, reading audience vibes, and managing room transitions.',
            facilitatorName: 'Oscar Oyinsan'
          },
          {
            id: 'p6-l2',
            title: 'Scripting the Event: Agendas, Speaker Introductions & Humor',
            duration: '120 mins',
            mode: 'Physical',
            isLocked: true,
            description: 'Writing compelling MC cue cards, tasteful humor, handling unexpected delays or technical breakdowns.',
            facilitatorName: 'Oscar Oyinsan'
          },
          {
            id: 'p6-l3',
            title: 'Live Stage Simulation & Impromptu Speech Masterclass',
            duration: '120 mins',
            mode: 'Physical',
            isLocked: true,
            description: 'Simulated stage situations, off-the-cuff speaking drills, and managing panic under spotlight.',
            facilitatorName: 'Oscar Oyinsan'
          }
        ]
      },
      {
        id: 'pillar-7',
        number: 7,
        title: 'Media Marketing & Business Development',
        description: 'Package yourself, pitch to commercial stations, win advertising clients, and negotiate lucrative media contracts.',
        duration: '8 Hours (3 Lessons)',
        lessons: [
          {
            id: 'p7-l1',
            title: 'Pitching Show Concepts to Radio & TV Programme Directors',
            duration: '90 mins',
            mode: 'Online',
            isLocked: false,
            isPreview: true,
            description: 'Writing 1-page show synopsis, pilot episode packaging, target demographics, and commercial viability pitch.',
            facilitatorName: 'Charles Ezerime'
          },
          {
            id: 'p7-l2',
            title: 'Commercial Airtime Syndication & Independent Production',
            duration: '120 mins',
            mode: 'Hybrid',
            isLocked: true,
            description: 'Barter syndication, buying airtime, selling spots to sponsors, and managing broadcast profitability.',
            facilitatorName: 'Charles Ezerime'
          },
          {
            id: 'p7-l3',
            title: 'Media Contracts, Copyright & Royalties Protection',
            duration: '90 mins',
            mode: 'Online',
            isLocked: true,
            description: 'Understanding talent contracts, exclusivity clauses, voiceover buyout rates, and IP ownership.',
            facilitatorName: 'Charles Ezerime'
          }
        ]
      },
      {
        id: 'pillar-8',
        number: 8,
        title: 'Personal Branding for Media Talent',
        description: 'Position yourself as an authority in the creative economy, build prestige press kits, and attract brand endorsements.',
        duration: '8 Hours (3 Lessons)',
        lessons: [
          {
            id: 'p8-l1',
            title: 'Media Persona Identity, Visual Style & Signature Brand',
            duration: '90 mins',
            mode: 'Hybrid',
            isLocked: false,
            isPreview: true,
            description: 'Defining your unique value proposition, wardrobe & style alignment, signature catchphrases.',
            facilitatorName: 'Charles Ezerime'
          },
          {
            id: 'p8-l2',
            title: 'Digital Media Kit & EPK (Electronic Press Kit) Creation',
            duration: '90 mins',
            mode: 'Online',
            isLocked: true,
            description: 'Building professional portfolio websites, high-res media photoshoots, bio summaries for media houses.',
            facilitatorName: 'Tope Aghomatse'
          },
          {
            id: 'p8-l3',
            title: 'Career Launchpad & City FM Live Internship Kickoff',
            duration: '120 mins',
            mode: 'Physical',
            isLocked: true,
            description: 'Orientation into the 3-week City 105.1 FM live studio internship, mentor assignments, and graduate network.',
            facilitatorName: 'Chukwudi Ezeugwu'
          }
        ]
      }
    ],
    reviews: [
      {
        id: 'rev-1',
        author: 'Emmanuel Adebayo',
        avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=300&auto=format&fit=crop',
        rating: 5,
        date: '3 weeks ago',
        role: 'Now On-Air Personality @ City 105.1 FM',
        comment: 'CMA changed my life completely. I went from having mic fright to co-hosting the evening drive show during my 3-week internship. The diction coaching with Coach Dolapo and radio drills with Shola gave me confidence.',
        courseFormatTaken: 'Physical'
      },
      {
        id: 'rev-2',
        author: 'Blessing Okon',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop',
        rating: 5,
        date: '1 month ago',
        role: 'Freelance Voiceover Artist & Podcaster',
        comment: 'The Voiceover pillar with Mazino Appeal taught me how to set up my home recording booth and land international client bookings. In my second month after graduating, I made back triple my course fee!',
        courseFormatTaken: 'Hybrid'
      },
      {
        id: 'rev-3',
        author: 'Tunde Bakare',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop',
        rating: 5,
        date: '2 months ago',
        role: 'Corporate MC & Event Host',
        comment: 'Oscar Oyinsan’s sessions on stage control and reading audience cues are world-class. If you are serious about media and broadcasting in Nigeria, City Media Academy is the definitive standard.',
        courseFormatTaken: 'Physical'
      }
    ]
  },
  {
    id: 'voiceover-mastery-bootcamp',
    slug: 'voiceover-mastery-bootcamp',
    title: 'Voiceover Mastery & Audio Monetization',
    tagline: 'Master commercial commercials, documentaries, audiobooks, and global voice marketplaces.',
    description: 'A focused intensive on voice control, script acting, acoustic mastering, and pitching on global voiceover platforms.',
    shortDescription: 'Learn script interpretation, character voices, sound engineering, and international freelance voice acting.',
    badge: '3 Weeks | Physical / Online | Certificate',
    category: 'Voiceover & Audio',
    level: 'Beginner',
    format: 'Online',
    supportedFormats: ['Physical', 'Online', 'Hybrid'],
    durationWeeks: 3,
    totalHours: 36,
    price: {
      physical: 120000,
      online: 85000,
      hybrid: 140000,
      currency: 'NGN',
      formatted: '₦85,000',
      originalPrice: 130000,
    },
    featured: true,
    popular: false,
    rating: 4.92,
    reviewCount: 215,
    studentsCount: 1450,
    thumbnail: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=1200&auto=format&fit=crop',
    schedule: {
      startDate: 'August 10, 2026',
      durationWeeks: 3,
      dailyHours: '10:00 AM – 1:00 PM',
      classDays: 'Tuesday & Thursday',
      physicalLocation: 'City Studio B, Ikeja Lagos',
      onlinePlatform: 'Zoom Studio + CMA Cloud',
      internshipDuration: 'Studio Recording Sessions Included',
      registrationStatus: 'Open',
    },
    whatYouWillGet: [
      'Commercial Voiceover Certificate',
      '2 Polished Industry Demo Reels',
      'Home Studio Setup Guide & Acoustic Templates',
      'Direct Voice Talent Agency Directory Access'
    ],
    requirements: ['Microphone / Smartphone', 'Quiet recording space for assignments'],
    targetAudience: ['Voice Talents', 'Podcasters', 'Radio Ad Producers', 'Creatives'],
    instructors: [instructorsData[3], instructorsData[0]],
    pillars: [
      {
        id: 'vm-p1',
        number: 1,
        title: 'Voice Characterization & Commercial Delivery',
        description: 'Inflection, energy levels, pacing for 15/30/60-second radio & TV spots.',
        duration: '12 Hours (3 Lessons)',
        lessons: [
          {
            id: 'vm-l1',
            title: 'Vocal Warmups & Resonance Placement',
            duration: '60 mins',
            mode: 'Online',
            isLocked: false,
            isPreview: true,
            facilitatorName: 'Mazino Appeal'
          },
          {
            id: 'vm-l2',
            title: 'Commercial Scripts vs Documentary Narrations',
            duration: '90 mins',
            mode: 'Online',
            isLocked: true,
            facilitatorName: 'Mazino Appeal'
          }
        ]
      }
    ],
    reviews: []
  },
  {
    id: 'digital-journalism-newscasting',
    slug: 'digital-journalism-newscasting',
    title: 'Digital Journalism & On-Air Newscasting',
    tagline: 'Investigative reporting, bulletin writing, live field broadcasting and teleprompter mastery.',
    description: 'Learn modern journalistic research, ethical verification, breaking news broadcasting, and teleprompter presentation.',
    shortDescription: 'Master broadcast news writing, field interviews, teleprompter delivery, and live television poise.',
    badge: '4 Weeks | Hybrid | City Newsroom Access',
    category: 'Journalism',
    level: 'Intermediate',
    format: 'Hybrid',
    supportedFormats: ['Physical', 'Online', 'Hybrid'],
    durationWeeks: 4,
    totalHours: 48,
    price: {
      physical: 140000,
      online: 95000,
      hybrid: 160000,
      currency: 'NGN',
      formatted: '₦140,000',
      originalPrice: 195000,
    },
    featured: true,
    popular: false,
    rating: 4.88,
    reviewCount: 160,
    studentsCount: 980,
    thumbnail: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1200&auto=format&fit=crop',
    schedule: {
      startDate: 'August 17, 2026',
      durationWeeks: 4,
      dailyHours: '11:00 AM – 3:00 PM',
      classDays: 'Monday, Wednesday, Friday',
      physicalLocation: 'City News Central Newsroom, Ikeja Lagos',
      onlinePlatform: 'CMA News Portal',
      internshipDuration: '2 Weeks Newsroom Shadowing',
      registrationStatus: 'Open',
    },
    whatYouWillGet: [
      'Broadcast Journalism Certificate',
      'Television News Anchor Demo Reel',
      'Fact-Checking & OSINT Tools Mastery',
      'Newsroom Bulletin Writing Portfolio'
    ],
    requirements: ['Keen interest in current affairs, journalism ethics and writing'],
    targetAudience: ['Aspiring Newscasters', 'Reporters', 'Editors', 'Media Students'],
    instructors: [instructorsData[4], instructorsData[1]],
    pillars: [],
    reviews: []
  },
  {
    id: 'podcast-production-audio-storytelling',
    slug: 'podcast-production-audio-storytelling',
    title: 'Podcast Production & Audio Storytelling',
    tagline: 'Launch, syndicate, produce and monetize chart-topping podcasts across Spotify & Apple.',
    description: 'End-to-end masterclass in audio storytelling, guest curation, DAW audio mixing, RSS distribution, and brand sponsor pitching.',
    shortDescription: 'From show concept and microphone setup to Spotify syndication and landing podcast sponsors.',
    badge: '3 Weeks | Online + Studio Practicals',
    category: 'Broadcasting',
    level: 'Beginner',
    format: 'Online',
    supportedFormats: ['Physical', 'Online', 'Hybrid'],
    durationWeeks: 3,
    totalHours: 30,
    price: {
      physical: 110000,
      online: 75000,
      hybrid: 125000,
      currency: 'NGN',
      formatted: '₦75,000',
      originalPrice: 115000,
    },
    featured: false,
    popular: true,
    rating: 4.95,
    reviewCount: 310,
    studentsCount: 1820,
    thumbnail: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=1200&auto=format&fit=crop',
    schedule: {
      startDate: 'September 01, 2026',
      durationWeeks: 3,
      dailyHours: '6:00 PM – 8:30 PM (Evening Class)',
      classDays: 'Tuesday & Thursday',
      physicalLocation: 'CMA Podcast Lab, Ikeja',
      onlinePlatform: 'Live Zoom HD',
      internshipDuration: 'Studio Recording Pass Included',
      registrationStatus: 'Open',
    },
    whatYouWillGet: [
      'Certified Podcast Producer Credential',
      'Season 1 Show Plan & 3 Fully Produced Episodes',
      'Distribution Setup on Spotify, Apple & YouTube',
      'Sponsor Pitch Deck Template'
    ],
    requirements: ['Laptop or smartphone with internet'],
    targetAudience: ['Podcasters', 'Storytellers', 'Marketers', 'Entrepreneurs'],
    instructors: [instructorsData[0], instructorsData[2]],
    pillars: [],
    reviews: []
  },
  {
    id: 'advanced-diction-public-speaking',
    slug: 'advanced-diction-public-speaking',
    title: 'Executive Diction, Speech & Public Speaking',
    tagline: 'Transform your voice into an instrument of authority, clarity, and irresistible persuasion.',
    description: 'Comprehensive phonetic training, accent refinement, breath control, speech delivery, and executive stage confidence.',
    shortDescription: 'Master the 44 phonemes, clear articulation, eliminate speech flaws, and command attention in boardrooms and on stage.',
    badge: '3 Weeks | Physical & Hybrid',
    category: 'Diction & Speech',
    level: 'All Levels',
    format: 'Physical',
    supportedFormats: ['Physical', 'Online', 'Hybrid'],
    durationWeeks: 3,
    totalHours: 32,
    price: {
      physical: 130000,
      online: 90000,
      hybrid: 150000,
      currency: 'NGN',
      formatted: '₦130,000',
      originalPrice: 175000,
    },
    featured: false,
    popular: true,
    rating: 4.97,
    reviewCount: 420,
    studentsCount: 2100,
    thumbnail: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=1200&auto=format&fit=crop',
    schedule: {
      startDate: 'September 14, 2026',
      durationWeeks: 3,
      dailyHours: '10:00 AM – 2:00 PM',
      classDays: 'Saturdays Only (Weekend Special)',
      physicalLocation: 'CMA Executive Speech Lounge, Ikeja',
      onlinePlatform: 'Interactive LMS',
      internshipDuration: 'Speech Clinics Included',
      registrationStatus: 'Open',
    },
    whatYouWillGet: [
      'Executive Diction & Elocution Certificate',
      'Personal Voice & Speech Diagnostic Assessment',
      'Daily IPA Practice Audio Library',
      'Stage Presence & Public Speaking Blueprint'
    ],
    requirements: ['Desire to elevate vocal presence and articulation'],
    targetAudience: ['Executives', 'Lawyers', 'Broadcasters', 'Pastors', 'MC Candidates'],
    instructors: [instructorsData[5], instructorsData[6]],
    pillars: [],
    reviews: []
  },
  {
    id: 'media-branding-talent-monetization',
    slug: 'media-branding-talent-monetization',
    title: 'Media Entrepreneurship & Personal Branding',
    tagline: 'Turn your media talent into a thriving commercial business with lucrative brand sponsorships.',
    description: 'Learn how to package, price, protect, and scale your personal brand as a broadcaster, speaker, creator, or agency founder.',
    shortDescription: 'Master media contracts, rate cards, influencer marketing, sponsorships, and agency business models.',
    badge: '2 Weeks Intensive | Online Special',
    category: 'Digital & Social Media',
    level: 'Advanced',
    format: 'Online',
    supportedFormats: ['Physical', 'Online', 'Hybrid'],
    durationWeeks: 2,
    totalHours: 24,
    price: {
      physical: 110000,
      online: 70000,
      hybrid: 120000,
      currency: 'NGN',
      formatted: '₦70,000',
      originalPrice: 100000,
    },
    featured: false,
    popular: false,
    rating: 4.89,
    reviewCount: 135,
    studentsCount: 750,
    thumbnail: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1200&auto=format&fit=crop',
    schedule: {
      startDate: 'October 05, 2026',
      durationWeeks: 2,
      dailyHours: '7:00 PM – 9:00 PM',
      classDays: 'Monday to Thursday',
      physicalLocation: 'Online Virtual Masterclass',
      onlinePlatform: 'CMA Cloud + Notion Hub',
      internshipDuration: '1-on-1 Strategy Review',
      registrationStatus: 'Open',
    },
    whatYouWillGet: [
      'Media Business Executive Certificate',
      'Custom Rate Card & Sponsorship Pitch Deck',
      'Standard Talent & Broadcast Contract Templates',
      'Brand Endorsement Strategy Roadmap'
    ],
    requirements: ['Active or aspiring media career / personal brand'],
    targetAudience: ['Media Talents', 'Agency Founders', 'Content Creators', 'Managers'],
    instructors: [instructorsData[7], instructorsData[2]],
    pillars: [],
    reviews: []
  }
];
