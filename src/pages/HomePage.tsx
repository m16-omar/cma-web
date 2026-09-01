import React, { useRef, useState, useEffect } from 'react';
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
  Monitor,
  Hourglass,
  ArrowRight,
} from 'lucide-react';
import { statsData, pillarsData, mentorsData, testimonialsData } from '../data/mockData';
import { StatCard } from '../components/home/StatCard';
import { PillarCard } from '../components/home/PillarCard';
import { MentorCard } from '../components/home/MentorCard';
import { TestimonialCard } from '../components/home/TestimonialCard';
import { CmaFooter } from '../components/ui/CmaFooter';
import { CmaNavbar } from '../components/ui/CmaNavbar';

export const HomePage: React.FC = () => {
  const [mentorIndex, setMentorIndex] = useState<number>(0);
  const [visibleCount, setVisibleCount] = useState<number>(4);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  // Dynamically track visible cards per screen width
  useEffect(() => {
    const handleResize = () => {
      if (typeof window === 'undefined') return;
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(4);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, mentorsData.length - visibleCount);

  // Auto-sliding interval (every 3 seconds)
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setMentorIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(timer);
  }, [isPaused, maxIndex]);

  const handlePrev = () => {
    setMentorIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setMentorIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
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

      {/* 1. NAVBAR - Matching reference UI */}
      <CmaNavbar />

      {/* 2. HERO SECTION */}
      <section className="relative pt-12 pb-14 lg:pt-16 lg:pb-20 overflow-hidden">
        {/* Background broadcast studio graphic */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <img
            src="/images/cma_classroom_real.jpg"
            alt="City Media Academy Classroom Training"
            className="w-full h-full object-cover object-right opacity-45 filter brightness-90 contrast-110"
          />
          {/* Subtle Gradient Vignette Overlay to ensure perfect text readability on the left */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />
        </div>

        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
          <div className="max-w-5xl space-y-6">
            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
            >
              <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-[80px] font-extrabold font-display tracking-tight leading-[1.04]">
                <span className="text-white block">Learn</span>
                <span className="text-[#FF6B00] block">Broadcasting,</span>
                <span className="text-[#FF6B00] block">Media &</span>
                <span className="text-[#FF6B00] block">Content Creation</span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="text-base sm:text-lg text-[#A0A0A0] max-w-2xl font-normal leading-relaxed"
            >
              Nurturing the next generation of radio professionals and media entrepreneurs.
            </motion.p>

            {/* 4 Pill Badges in a Row */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.2 }}
              className="flex flex-wrap items-center gap-2.5 pt-2"
            >
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#0E0E0E] border border-[#222222] text-xs font-medium text-white shadow-sm">
                <Calendar className="w-3.5 h-3.5 text-[#FF6B00]" />
                <span>5-Week Intensive</span>
              </div>

              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#0E0E0E] border border-[#222222] text-xs font-medium text-white shadow-sm">
                <Calendar className="w-3.5 h-3.5 text-[#FF6B00]" />
                <span>Starts July 06, 2026</span>
              </div>

              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#0E0E0E] border border-[#222222] text-xs font-medium text-white shadow-sm">
                <Clock className="w-3.5 h-3.5 text-[#FF6B00]" />
                <span>9am - 2pm Daily</span>
              </div>

              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#0E0E0E] border border-[#222222] text-xs font-medium text-white shadow-sm">
                <MapPin className="w-3.5 h-3.5 text-[#FF6B00]" />
                <span>Ikeja + Online</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. STATS BAR */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 mb-16">
        <div className="rounded-2xl bg-[#0A0A0A] border border-[#1A1A1A] grid grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 lg:divide-x divide-[#1A1A1A] shadow-xl">
          {statsData.map((stat, idx) => (
            <StatCard key={stat.label} stat={stat} index={idx} />
          ))}
        </div>
      </section>

      {/* 4. FEATURED COURSE CONTAINER */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 mb-24">
        <div className="rounded-3xl bg-[#0A0A0A] border border-[#1A1A1A] p-7 sm:p-9 lg:p-11 shadow-2xl space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Col 1: Course Title, Badge & Vintage Mic Image */}
            <div className="lg:col-span-4 space-y-5">
              <div className="inline-flex items-center px-3.5 py-1.5 rounded-lg bg-[#380b0f] border border-red-900/70 text-[#ff6b6b] text-xs font-black tracking-wider uppercase shadow-sm">
                REGISTRATION CLOSED
              </div>

              <div>
                <h3 className="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-black font-display leading-[1.05] tracking-tight">
                  <span className="text-white block">BROADCAST</span>
                  <span className="text-white">MEDIA </span>
                  <span className="text-[#FF6B00]">PRO </span>
                  <span className="text-[#FF6B00] block">COURSE 2026</span>
                </h3>
                <div className="flex items-center gap-2 text-sm sm:text-base text-[#A0A0A0] mt-3 font-semibold">
                  <Calendar className="w-4 h-4 text-[#FF6B00]" />
                  <span>5-Week Intensive Programme</span>
                </div>
              </div>

              {/* Vintage Mic Thumbnail */}
              <div className="rounded-2xl overflow-hidden aspect-[16/10] sm:aspect-[4/3] bg-black/60 border border-[#1A1A1A] relative shadow-2xl group">
                <img
                  src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=1000&auto=format&fit=crop"
                  alt="Broadcast Studio Microphone"
                  className="w-full h-full object-cover grayscale brightness-95 contrast-125 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
              </div>
            </div>

            {/* Col 2: Course Description & 4 Meta items in 2x2 grid */}
            <div className="lg:col-span-4 space-y-6 flex flex-col justify-between h-full">
              <p className="text-sm sm:text-base text-[#C0C0C0] leading-relaxed font-normal">
                Kickstart your career in broadcast media, public speaking, voiceover and content creation in just 5 weeks! Learn how to build a lucrative on-air presentation, event hosting, voiceover and digital media business with the Broadcast Media Pro Course.
              </p>

              <div className="grid grid-cols-2 gap-3.5 sm:gap-4">
                <div className="p-3.5 sm:p-4 rounded-2xl bg-[#0F0F0F] border border-[#1E1E1E] space-y-1.5">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#888888]">
                    <Calendar className="w-4 h-4 text-[#FF6B00]" />
                    <span>Class Starts:</span>
                  </div>
                  <div className="text-sm sm:text-base font-extrabold text-white">July 06, 2026</div>
                </div>

                <div className="p-3.5 sm:p-4 rounded-2xl bg-[#0F0F0F] border border-[#1E1E1E] space-y-1.5">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#888888]">
                    <Clock className="w-4 h-4 text-[#FF6B00]" />
                    <span>Time:</span>
                  </div>
                  <div className="text-sm sm:text-base font-extrabold text-white">9am - 2pm Daily</div>
                </div>

                <div className="p-3.5 sm:p-4 rounded-2xl bg-[#0F0F0F] border border-[#1E1E1E] space-y-1.5">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#888888]">
                    <Monitor className="w-4 h-4 text-[#FF6B00]" />
                    <span>Format:</span>
                  </div>
                  <div className="text-sm sm:text-base font-extrabold text-white">Hybrid (Physical + Online)</div>
                </div>

                <div className="p-3.5 sm:p-4 rounded-2xl bg-[#0F0F0F] border border-[#1E1E1E] space-y-1.5">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#888888]">
                    <Hourglass className="w-4 h-4 text-[#FF6B00]" />
                    <span>Duration:</span>
                  </div>
                  <div className="text-sm sm:text-base font-extrabold text-white">5 Weeks</div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <Link
                  to="/courses/broadcast-media-pro-2026"
                  className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl bg-[#141414] hover:bg-[#FF6B00] border border-[#262626] hover:border-[#FF6B00] text-white font-bold text-sm transition-all duration-300 shadow-md group"
                >
                  <span>Explore Course Curriculum</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Col 3: 8 Comprehensive Pillars Grid (4x2) */}
            <div className="lg:col-span-4 space-y-4">
              <h4 className="text-base sm:text-lg font-extrabold text-white font-display text-center lg:text-left">
                8 Comprehensive Pillars
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {pillarsData.map((pillar) => (
                  <PillarCard key={pillar.id} pillar={pillar} />
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar: Structure Details */}
          <div className="pt-6 border-t border-[#1A1A1A]">
            <div className="p-5 sm:p-6 rounded-2xl bg-[#0F0F0F] border border-[#1E1E1E] flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="w-10 h-10 rounded-full border border-[#FF6B00]/40 bg-[#FF6B00]/10 flex items-center justify-center flex-shrink-0 text-[#FF6B00]">
                <Headphones className="w-5 h-5" />
              </div>
              <p className="text-sm sm:text-base leading-relaxed">
                <strong className="text-[#FF6B00] font-bold">Structure:</strong>{' '}
                <span className="text-[#CCCCCC]">
                  5 hour classes a day for 2 weeks and 3 weeks internship at City FM — a leading urban contemporary radio station
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. HOW IT WORKS */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 mb-24">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
            How It Works
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {/* Step 1 */}
          <div className="relative flex flex-col items-center text-center p-6 rounded-2xl bg-[#0A0A0A] border border-[#1A1A1A] space-y-4">
            <div className="w-9 h-9 rounded-full border border-[#FF6B00] bg-black text-[#FF6B00] font-bold text-sm flex items-center justify-center -mt-10 shadow-[0_0_15px_rgba(255,107,0,0.35)] z-10">
              1
            </div>

            <div className="text-[#FF6B00]">
              <ClipboardList className="w-7 h-7 mx-auto" />
            </div>

            <h3 className="text-sm sm:text-base font-bold text-white font-display leading-tight">
              Apply & Select<br />Physical or Online
            </h3>

            <p className="text-xs text-[#A0A0A0] leading-relaxed">
              Apply for the course and choose to learn on-site at Ikeja or online from anywhere.
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative flex flex-col items-center text-center p-6 rounded-2xl bg-[#0A0A0A] border border-[#1A1A1A] space-y-4">
            <div className="w-9 h-9 rounded-full border border-[#FF6B00] bg-black text-[#FF6B00] font-bold text-sm flex items-center justify-center -mt-10 shadow-[0_0_15px_rgba(255,107,0,0.35)] z-10">
              2
            </div>

            <div className="text-[#FF6B00]">
              <Radio className="w-7 h-7 mx-auto" />
            </div>

            <h3 className="text-sm sm:text-base font-bold text-white font-display leading-tight">
              Learn: 2 Weeks Class +<br />3 Weeks City FM Internship
            </h3>

            <p className="text-xs text-[#A0A0A0] leading-relaxed">
              5 hour classes a day for 2 weeks and 3 weeks internship at City FM — a leading urban contemporary radio station.
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative flex flex-col items-center text-center p-6 rounded-2xl bg-[#0A0A0A] border border-[#1A1A1A] space-y-4">
            <div className="w-9 h-9 rounded-full border border-[#FF6B00] bg-black text-[#FF6B00] font-bold text-sm flex items-center justify-center -mt-10 shadow-[0_0_15px_rgba(255,107,0,0.35)] z-10">
              3
            </div>

            <div className="text-[#FF6B00]">
              <Award className="w-7 h-7 mx-auto" />
            </div>

            <h3 className="text-sm sm:text-base font-bold text-white font-display leading-tight">
              Get Certified
            </h3>

            <p className="text-xs text-[#A0A0A0] leading-relaxed">
              Complete the program and receive your certificate of participation and industry-recognized skills.
            </p>
          </div>
        </div>
      </section>

      {/* 6. MEET OUR INDUSTRY MENTORS */}
      <section
        className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 mb-24"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={handlePrev}
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-[#262626] bg-[#0E0E0E] hover:border-[#FF6B00] hover:bg-[#FF6B00]/10 text-white hover:text-[#FF6B00] flex items-center justify-center transition-all cursor-pointer shadow-lg active:scale-95 group"
            aria-label="Previous Facilitators"
          >
            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
          </button>

          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-white text-center">
            Meet Our Industry Facilitators
          </h2>

          <button
            onClick={handleNext}
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-[#262626] bg-[#0E0E0E] hover:border-[#FF6B00] hover:bg-[#FF6B00]/10 text-white hover:text-[#FF6B00] flex items-center justify-center transition-all cursor-pointer shadow-lg active:scale-95 group"
            aria-label="Next Facilitators"
          >
            <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Ultra-Smooth Framer Motion Animated Slider Track */}
        <div className="overflow-hidden w-full py-2">
          <motion.div
            className="flex gap-6"
            animate={{
              x: `calc(-${mentorIndex} * (${100 / visibleCount}% + ${24 / visibleCount}px))`,
            }}
            transition={{
              type: 'spring',
              stiffness: 220,
              damping: 26,
              mass: 0.8,
            }}
          >
            {mentorsData.map((mentor) => (
              <div
                key={mentor.id}
                className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] shrink-0"
              >
                <MentorCard mentor={mentor} />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Interactive Indicator Dots */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setMentorIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                mentorIndex === idx
                  ? 'w-7 bg-[#FF6B00]'
                  : 'w-2 bg-[#2A2A2A] hover:bg-[#444444]'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* 7. SUCCESS STORIES / TESTIMONIALS */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 mb-24">
        <div className="text-center space-y-1 mb-10">
          <span className="text-xs sm:text-sm font-bold text-[#FF6B00] uppercase tracking-wider">
            Success Stories
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
            Hear from graduates thriving in the industry
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonialsData.map((item) => (
            <TestimonialCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* 8. FOOTER */}
      <CmaFooter />
    </div>
  );
};
