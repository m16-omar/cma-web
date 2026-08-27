import React, { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Calendar,
  Clock,
  MapPin,
  Phone,
  Mail,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  Radio,
  Award,
  Headphones,
  Sliders,
  Share2,
  Tv,
  Globe,
} from 'lucide-react';
import { statsData, pillarsData, mentorsData, testimonialsData } from '../data/mockData';
import { StatCard } from '../components/home/StatCard';
import { PillarCard } from '../components/home/PillarCard';
import { MentorCard } from '../components/home/MentorCard';
import { TestimonialCard } from '../components/home/TestimonialCard';

export const HomePage: React.FC = () => {
  const mentorsScrollRef = useRef<HTMLDivElement>(null);

  const scrollMentors = (direction: 'left' | 'right') => {
    if (mentorsScrollRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      mentorsScrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#FF6B00] selection:text-white">
      <Helmet>
        <title>City Media Academy | Learn Broadcasting, Media & Content Creation</title>
        <meta
          name="description"
          content="City Media Academy - 5-Week Intensive Broadcast Media Pro Course 2026. Nurturing the next generation of radio professionals and media entrepreneurs."
        />
      </Helmet>

      {/* 1. NAVBAR - Matching reference */}
      <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-[#1A1A1A]/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex flex-col group">
            <span className="text-xl sm:text-2xl font-serif italic text-[#FF6B00] leading-none font-bold tracking-wide">
              City
            </span>
            <span className="text-xs sm:text-sm font-black tracking-widest text-white uppercase mt-0.5 font-display">
              MEDIA ACADEMY
            </span>
          </Link>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link
              to="/"
              className="text-[#FF6B00] font-semibold relative py-1 border-b-2 border-[#FF6B00]"
            >
              Home
            </Link>
            <Link to="/courses" className="text-[#A0A0A0] hover:text-white transition-colors">
              Courses
            </Link>
            <Link to="/instructors" className="text-[#A0A0A0] hover:text-white transition-colors">
              Mentors
            </Link>
            <Link to="/about" className="text-[#A0A0A0] hover:text-white transition-colors">
              About Us
            </Link>
            <Link to="/courses" className="text-[#A0A0A0] hover:text-white transition-colors">
              Events
            </Link>
            <Link to="/contact" className="text-[#A0A0A0] hover:text-white transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* 2. HERO SECTION */}
      <section className="relative pt-12 pb-16 lg:pt-20 lg:pb-24 overflow-hidden">
        {/* Background broadcast studio graphic & ON AIR neon light */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2000&auto=format&fit=crop"
            alt="Studio Console"
            className="w-full h-full object-cover object-right opacity-35 filter brightness-50 contrast-125"
          />
          {/* Studio Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />

          {/* Glowing Red ON AIR Sign in background */}
          <div className="absolute top-10 right-8 sm:right-24 px-4 py-1.5 rounded-md border-2 border-red-600 bg-red-950/80 shadow-[0_0_30px_rgba(220,38,38,0.7)] hidden sm:flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
            <span className="text-sm font-black tracking-widest text-red-500 font-mono">
              ON AIR
            </span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-1"
            >
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-display tracking-tight leading-[1.08]">
                <span className="text-white block">Learn</span>
                <span className="text-[#FF6B00] block">Broadcasting,</span>
                <span className="text-[#FF6B00] block">Media &</span>
                <span className="text-[#FF6B00] block">Content Creation</span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-base sm:text-lg text-[#A0A0A0] max-w-2xl font-normal leading-relaxed"
            >
              Nurturing the next generation of radio professionals and media entrepreneurs.
            </motion.p>

            {/* 4 Pill Badges in a Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap items-center gap-2.5 pt-2"
            >
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0A0A0A] border border-[#1A1A1A] text-xs font-semibold text-white shadow-sm">
                <Calendar className="w-3.5 h-3.5 text-[#FF6B00]" />
                <span>5-Week Intensive</span>
              </div>

              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0A0A0A] border border-[#1A1A1A] text-xs font-semibold text-white shadow-sm">
                <Calendar className="w-3.5 h-3.5 text-[#FF6B00]" />
                <span>Starts July 06, 2026</span>
              </div>

              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0A0A0A] border border-[#1A1A1A] text-xs font-semibold text-white shadow-sm">
                <Clock className="w-3.5 h-3.5 text-[#FF6B00]" />
                <span>9am - 2pm Daily</span>
              </div>

              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0A0A0A] border border-[#1A1A1A] text-xs font-semibold text-white shadow-sm">
                <MapPin className="w-3.5 h-3.5 text-[#FF6B00]" />
                <span>Ikeja + Online</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. STATS BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="rounded-2xl bg-[#0A0A0A] border border-[#1A1A1A] grid grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 lg:divide-x divide-[#1A1A1A] shadow-xl">
          {statsData.map((stat, idx) => (
            <StatCard key={stat.label} stat={stat} index={idx} />
          ))}
        </div>
      </section>

      {/* 4. FEATURED COURSE CONTAINER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="rounded-2xl bg-[#0A0A0A] border border-[#1A1A1A] p-6 lg:p-8 shadow-2xl space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Col 1: Course Title, Badge & Vintage Mic Image */}
            <div className="lg:col-span-4 space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-md bg-[#450a0a] border border-red-800/40 text-red-400 text-[11px] font-black tracking-wider uppercase">
                REGISTRATION CLOSED
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold font-display leading-tight">
                  <span className="text-white block">BROADCAST</span>
                  <span className="text-white">MEDIA </span>
                  <span className="text-[#FF6B00]">PRO </span>
                  <span className="text-[#FF6B00] block">COURSE 2026</span>
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-[#A0A0A0] mt-2 font-medium">
                  <Calendar className="w-3.5 h-3.5 text-[#FF6B00]" />
                  <span>5-Week Intensive Programme</span>
                </div>
              </div>

              {/* Vintage Mic Thumbnail */}
              <div className="rounded-xl overflow-hidden aspect-[4/3] bg-black/60 border border-[#1A1A1A] relative shadow-inner">
                <img
                  src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=800&auto=format&fit=crop"
                  alt="Studio Microphone"
                  className="w-full h-full object-cover grayscale brightness-90 contrast-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
              </div>
            </div>

            {/* Col 2: Course Description & 4 Meta items */}
            <div className="lg:col-span-4 space-y-6">
              <p className="text-xs sm:text-sm text-[#A0A0A0] leading-relaxed font-normal">
                Kickstart your career in broadcast media, public speaking, voiceover and content creation in just 5 weeks! Learn how to build a lucrative on-air presentation, event hosting, voiceover and digital media business with the Broadcast Media Pro Course.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-xs text-[#A0A0A0]">
                    <Calendar className="w-3.5 h-3.5 text-[#FF6B00]" />
                    <span>Class Starts:</span>
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-white">July 06, 2026</div>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-xs text-[#A0A0A0]">
                    <Clock className="w-3.5 h-3.5 text-[#FF6B00]" />
                    <span>Time:</span>
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-white">9am - 2pm Daily</div>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-xs text-[#A0A0A0]">
                    <Globe className="w-3.5 h-3.5 text-[#FF6B00]" />
                    <span>Format:</span>
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-white">Hybrid (Physical + Online)</div>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-xs text-[#A0A0A0]">
                    <Clock className="w-3.5 h-3.5 text-[#FF6B00]" />
                    <span>Duration:</span>
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-white">5 Weeks</div>
                </div>
              </div>
            </div>

            {/* Col 3: 8 Comprehensive Pillars Grid */}
            <div className="lg:col-span-4 space-y-3">
              <h4 className="text-sm font-bold text-white font-display">
                8 Comprehensive Pillars
              </h4>

              <div className="grid grid-cols-2 gap-2.5">
                {pillarsData.map((pillar) => (
                  <PillarCard key={pillar.id} pillar={pillar} />
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar: Structure Details */}
          <div className="pt-4 border-t border-[#1A1A1A]">
            <div className="p-3.5 rounded-xl bg-[#0F0F0F] border border-[#1A1A1A] flex items-center gap-3">
              <div className="w-7 h-7 rounded-full border border-[#FF6B00]/40 bg-[#FF6B00]/10 flex items-center justify-center flex-shrink-0 text-[#FF6B00]">
                <Headphones className="w-3.5 h-3.5" />
              </div>
              <p className="text-xs sm:text-sm leading-snug">
                <strong className="text-[#FF6B00] font-bold">Structure:</strong>{' '}
                <span className="text-[#A0A0A0]">
                  5 hour classes a day for 2 weeks and 3 weeks internship at City FM — a leading urban contemporary radio station
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. HOW IT WORKS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
            How It Works
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {/* Connecting Line behind steps on Desktop */}
          <div className="hidden md:block absolute top-7 left-1/6 right-1/6 h-[1px] bg-gradient-to-r from-transparent via-[#FF6B00]/30 to-transparent -z-0" />

          {/* Step 1 */}
          <div className="relative flex flex-col items-center text-center p-6 rounded-2xl bg-[#0A0A0A] border border-[#1A1A1A] space-y-4">
            {/* Step Number Bubble */}
            <div className="w-10 h-10 rounded-full border border-[#FF6B00] bg-black text-[#FF6B00] font-bold text-sm flex items-center justify-center -mt-10 shadow-[0_0_15px_rgba(255,107,0,0.3)] z-10">
              1
            </div>

            <div className="text-[#FF6B00]">
              <ClipboardList className="w-8 h-8 mx-auto" />
            </div>

            <h3 className="text-sm sm:text-base font-bold text-white font-display">
              Apply & Select<br />Physical or Online
            </h3>

            <p className="text-xs text-[#A0A0A0] leading-relaxed">
              Apply for the course and choose to learn on-site at Ikeja or online from anywhere.
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative flex flex-col items-center text-center p-6 rounded-2xl bg-[#0A0A0A] border border-[#1A1A1A] space-y-4">
            {/* Step Number Bubble */}
            <div className="w-10 h-10 rounded-full border border-[#FF6B00] bg-black text-[#FF6B00] font-bold text-sm flex items-center justify-center -mt-10 shadow-[0_0_15px_rgba(255,107,0,0.3)] z-10">
              2
            </div>

            <div className="text-[#FF6B00]">
              <Radio className="w-8 h-8 mx-auto" />
            </div>

            <h3 className="text-sm sm:text-base font-bold text-white font-display">
              Learn: 2 Weeks Class +<br />3 Weeks City FM Internship
            </h3>

            <p className="text-xs text-[#A0A0A0] leading-relaxed">
              5 hour classes a day for 2 weeks and 3 weeks internship at City FM — a leading urban contemporary radio station.
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative flex flex-col items-center text-center p-6 rounded-2xl bg-[#0A0A0A] border border-[#1A1A1A] space-y-4">
            {/* Step Number Bubble */}
            <div className="w-10 h-10 rounded-full border border-[#FF6B00] bg-black text-[#FF6B00] font-bold text-sm flex items-center justify-center -mt-10 shadow-[0_0_15px_rgba(255,107,0,0.3)] z-10">
              3
            </div>

            <div className="text-[#FF6B00]">
              <Award className="w-8 h-8 mx-auto" />
            </div>

            <h3 className="text-sm sm:text-base font-bold text-white font-display">
              Get Certified
            </h3>

            <p className="text-xs text-[#A0A0A0] leading-relaxed">
              Complete the program and receive your certificate of participation and industry-recognized skills.
            </p>
          </div>
        </div>
      </section>

      {/* 6. MEET OUR INDUSTRY MENTORS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="flex items-center justify-between mb-8">
          <div className="w-10" />
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-white text-center">
            Meet Our Industry Mentors
          </h2>
          {/* Left / Right Nav buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => scrollMentors('left')}
              className="w-9 h-9 rounded-full border border-[#1A1A1A] bg-[#0A0A0A] hover:border-[#FF6B00] text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Previous Mentors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollMentors('right')}
              className="w-9 h-9 rounded-full border border-[#1A1A1A] bg-[#0A0A0A] hover:border-[#FF6B00] text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Next Mentors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Mentors Track */}
        <div
          ref={mentorsScrollRef}
          className="flex items-stretch gap-4 overflow-x-auto pb-4 scrollbar-none scroll-smooth"
        >
          {mentorsData.map((mentor) => (
            <MentorCard key={mentor.id} mentor={mentor} />
          ))}
        </div>
      </section>

      {/* 7. SUCCESS STORIES / TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center space-y-1 mb-10">
          <span className="text-xs sm:text-sm font-bold text-[#FF6B00] uppercase tracking-wider">
            Success Stories
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
            Hear from graduates thriving in the industry
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonialsData.map((item) => (
            <TestimonialCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* 8. FOOTER */}
      <footer className="border-t border-[#1A1A1A] bg-black text-xs text-[#A0A0A0] pt-12 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-8 border-b border-[#1A1A1A]">
            {/* Col 1: Physical Campus */}
            <div className="flex items-start gap-3">
              <div className="text-[#FF6B00] mt-0.5">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <div className="font-bold text-white">Physical Campus</div>
                <div className="leading-relaxed">
                  Plot 11 Lateef Jakande Road, Agidingbi, Ikeja, Lagos
                </div>
              </div>
            </div>

            {/* Col 2: Phone */}
            <div className="flex items-start gap-3">
              <div className="text-[#FF6B00] mt-0.5">
                <Phone className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <div className="font-bold text-white">Phone</div>
                <div>0810 968 8638</div>
              </div>
            </div>

            {/* Col 3: Email */}
            <div className="flex items-start gap-3">
              <div className="text-[#FF6B00] mt-0.5">
                <Mail className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <div className="font-bold text-white">Email</div>
                <div>academy@city1051fm.com</div>
              </div>
            </div>

            {/* Col 4: Socials */}
            <div className="space-y-2">
              <div className="font-bold text-white">Follow Us</div>
              <div className="flex items-center gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-[#0A0A0A] border border-[#1A1A1A] hover:border-[#FF6B00] text-white flex items-center justify-center transition-colors"
                >
                  <span className="font-bold text-xs">f</span>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-[#0A0A0A] border border-[#1A1A1A] hover:border-[#FF6B00] text-white flex items-center justify-center transition-colors"
                >
                  <span className="font-bold text-xs">ig</span>
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-[#0A0A0A] border border-[#1A1A1A] hover:border-[#FF6B00] text-white flex items-center justify-center transition-colors"
                >
                  <span className="font-bold text-xs">𝕏</span>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-[#0A0A0A] border border-[#1A1A1A] hover:border-[#FF6B00] text-white flex items-center justify-center transition-colors"
                >
                  <span className="font-bold text-xs">yt</span>
                </a>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-[#0A0A0A] border border-[#1A1A1A] hover:border-[#FF6B00] text-white flex items-center justify-center transition-colors"
                >
                  <span className="font-bold text-xs">tk</span>
                </a>
              </div>
            </div>
          </div>

          <div className="text-center text-[#A0A0A0] text-xs">
            © 2026 City Media Academy. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};
