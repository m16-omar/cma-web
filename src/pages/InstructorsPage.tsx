import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Users,
  Radio,
  Star,
  Tv,
  Search,
  Mic2,
  Play,
  Building,
  Calendar,
  PenTool,
  MessageSquare,
  Megaphone,
  TrendingUp,
  AudioWaveform,
  Volume2,
  Sparkles,
  Newspaper,
  Languages,
  Target,
  ShieldCheck,
  GraduationCap,
  Handshake,
  ArrowRight,
  Instagram,
  Facebook,
  Linkedin,
  Twitter,
} from 'lucide-react';
import { industryMentorsList, IndustryMentor } from '../data/mentorsData';
import { CmaFooter } from '../components/ui/CmaFooter';
import { CmaNavbar } from '../components/ui/CmaNavbar';
import { useAcademyStore } from '../store/useAcademyStore';

const mentorIconLookup: Record<string, React.ElementType> = {
  Mic2,
  Radio,
  Play,
  Building,
  Calendar,
  Users,
  PenTool,
  MessageSquare,
  Megaphone,
  TrendingUp,
  AudioWaveform,
  Volume2,
  Sparkles,
  Newspaper,
  Tv,
  Languages,
  Star,
  Target,
  ShieldCheck,
};

export const InstructorsPage: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All Mentors');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const { openWaitlistModal } = useAcademyStore();

  const filterCategories = [
    'All Mentors',
    'Broadcasting',
    'Presentation',
    'Voiceover',
    'Content Creation',
    'Marketing & Branding',
    'Events & Hosting',
  ];

  const filteredMentors = useMemo(() => {
    return industryMentorsList.filter((mentor) => {
      // Category filter
      if (selectedFilter !== 'All Mentors' && mentor.category !== selectedFilter) {
        return false;
      }
      // Search query filter
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchName = mentor.name.toLowerCase().includes(query);
        const matchRole = mentor.role.toLowerCase().includes(query);
        const matchBio = mentor.bio.toLowerCase().includes(query);
        if (!matchName && !matchRole && !matchBio) return false;
      }
      return true;
    });
  }, [selectedFilter, searchQuery]);

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#FF6B00] selection:text-white">
      <Helmet>
        <title>Industry Mentors | City Media Academy</title>
        <meta
          name="description"
          content="Meet Our Industry Mentors - Learn from seasoned broadcast media professionals, on-air personalities, and voiceover artists at City Media Academy."
        />
      </Helmet>

      {/* 1. TOP NAVBAR - Matching reference */}
      <CmaNavbar />

      {/* 2. HERO SECTION */}
      <section className="relative pt-12 pb-14 lg:pt-16 lg:pb-20 overflow-hidden border-b border-[#1A1A1A]">
        {/* Broadcast Studio Ambient Background */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <img
            src="/images/cma_classroom_real.jpg"
            alt="Studio Class"
            className="w-full h-full object-cover object-right opacity-35 filter brightness-85 contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />
        </div>

        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
          <div className="max-w-4xl space-y-6">
            {/* Pre-Heading */}
            <span className="text-xs sm:text-sm font-bold text-[#FF6B00] uppercase tracking-widest block font-display">
              MEET OUR INDUSTRY MENTORS
            </span>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black font-display text-white tracking-tight leading-[1.06]">
              Learn From the Best<br />
              in the Industry
            </h1>

            {/* Subtitle Copy */}
            <p className="text-sm sm:text-base text-[#A0A0A0] leading-relaxed font-normal max-w-2xl">
              Our facilitators are seasoned broadcast media professionals with years of on-air and industry experience, ready to guide your transformation.
            </p>

            {/* Mentor Statistics Bar (4 Items) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FF6B00]/10 border border-[#FF6B00]/20 flex items-center justify-center text-[#FF6B00] flex-shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-2xl font-black text-white leading-none font-display">8</div>
                  <div className="text-[11px] text-[#A0A0A0] mt-0.5 leading-tight">Industry Mentors</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FF6B00]/10 border border-[#FF6B00]/20 flex items-center justify-center text-[#FF6B00] flex-shrink-0">
                  <Radio className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-2xl font-black text-white leading-none font-display">150+</div>
                  <div className="text-[11px] text-[#A0A0A0] mt-0.5 leading-tight">Years Combined Experience</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FF6B00]/10 border border-[#FF6B00]/20 flex items-center justify-center text-[#FF6B00] flex-shrink-0">
                  <Star className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-2xl font-black text-white leading-none font-display">1000+</div>
                  <div className="text-[11px] text-[#A0A0A0] mt-0.5 leading-tight">Students Mentored</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FF6B00]/10 border border-[#FF6B00]/20 flex items-center justify-center text-[#FF6B00] flex-shrink-0">
                  <Tv className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-base sm:text-lg font-black text-white leading-tight font-display">Top Industry</div>
                  <div className="text-[11px] text-[#A0A0A0] leading-tight">Experts</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FILTERS & SEARCH BAR */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 py-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-[#1A1A1A]">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {filterCategories.map((cat) => {
              const isActive = selectedFilter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedFilter(cat)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#FF6B00] text-white shadow-md'
                      : 'bg-[#0A0A0A] border border-[#1A1A1A] text-[#A0A0A0] hover:text-white hover:border-[#333]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search mentors..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full sm:w-64 bg-[#0A0A0A] border border-[#1A1A1A] focus:border-[#FF6B00] rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-[#666] focus:outline-none transition-colors"
            />
            <Search className="w-4 h-4 text-[#666] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* 4. MENTORS GRID (4 Columns x 2 Rows = 8 Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7 pt-8">
          {filteredMentors.map((mentor) => (
            <motion.div
              key={mentor.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -6 }}
              className="rounded-3xl bg-[#0A0A0A] border border-[#1A1A1A] hover:border-[#FF6B00]/40 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-xl group"
            >
              <div className="flex flex-col items-center text-center">
                {/* Large Circular Portrait with Glowing Copper Border */}
                <div className="relative w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 rounded-full p-[3px] mb-5 transition-transform duration-300 group-hover:scale-105">
                  <div className="w-full h-full rounded-full overflow-hidden border-[3px] border-[#a8521c] shadow-[0_0_30px_rgba(255,107,0,0.2)] bg-black/60">
                    <img
                      src={mentor.avatar}
                      alt={mentor.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Name & Specialty */}
                <h3 className="text-base sm:text-lg lg:text-xl font-extrabold text-white font-display leading-tight tracking-tight group-hover:text-[#FF6B00] transition-colors">
                  {mentor.name}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-[#FF6B00] mt-1 leading-tight">
                  {mentor.role}
                </p>

                {/* Short Bio */}
                <p className="text-xs sm:text-[13px] text-[#A0A0A0] leading-relaxed line-clamp-3 mt-4 font-normal text-center">
                  {mentor.bio}
                </p>
              </div>

              {/* Bottom: Real Social Media Links & Connect Action */}
              <div className="flex items-center justify-between pt-5 mt-5 border-t border-[#181818]">
                {/* Real Social Media Links (Instagram, X, Facebook, LinkedIn) */}
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <a
                    href={mentor.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-[#141414] border border-[#262626] hover:border-[#FF6B00] hover:bg-[#FF6B00]/15 text-[#A0A0A0] hover:text-[#FF6B00] flex items-center justify-center transition-all duration-200 shadow-sm group/social"
                    title={`${mentor.name} on Instagram`}
                    aria-label="Instagram"
                  >
                    <Instagram className="w-4 h-4 group-hover/social:scale-110 transition-transform" />
                  </a>

                  <a
                    href={mentor.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-[#141414] border border-[#262626] hover:border-[#FF6B00] hover:bg-[#FF6B00]/15 text-[#A0A0A0] hover:text-[#FF6B00] flex items-center justify-center transition-all duration-200 shadow-sm group/social"
                    title={`${mentor.name} on X (Twitter)`}
                    aria-label="X (Twitter)"
                  >
                    <Twitter className="w-4 h-4 group-hover/social:scale-110 transition-transform" />
                  </a>

                  <a
                    href={mentor.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-[#141414] border border-[#262626] hover:border-[#FF6B00] hover:bg-[#FF6B00]/15 text-[#A0A0A0] hover:text-[#FF6B00] flex items-center justify-center transition-all duration-200 shadow-sm group/social"
                    title={`${mentor.name} on Facebook`}
                    aria-label="Facebook"
                  >
                    <Facebook className="w-4 h-4 group-hover/social:scale-110 transition-transform" />
                  </a>

                  <a
                    href={mentor.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-[#141414] border border-[#262626] hover:border-[#FF6B00] hover:bg-[#FF6B00]/15 text-[#A0A0A0] hover:text-[#FF6B00] flex items-center justify-center transition-all duration-200 shadow-sm group/social"
                    title={`${mentor.name} on LinkedIn`}
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4 group-hover/social:scale-110 transition-transform" />
                  </a>
                </div>

                {/* Connect Action */}
                <button
                  onClick={() => openWaitlistModal('broadcast-media-pro-2026')}
                  className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-[#FF6B00] hover:text-white transition-colors cursor-pointer group-hover:translate-x-0.5 transition-transform"
                >
                  <span>Connect</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. BOTTOM SECTION: "Learn. Connect. Be Inspired." */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 py-12">
        <div className="rounded-3xl bg-[#0A0A0A] border border-[#1A1A1A] p-6 sm:p-8 lg:p-10 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Side: Brand Promise */}
          <div className="lg:col-span-5 flex items-start gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#FF6B00]/10 border border-[#FF6B00]/30 text-[#FF6B00] flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_rgba(255,107,0,0.2)]">
              <GraduationCap className="w-7 h-7" />
            </div>
            <div className="space-y-1.5">
              <h3 className="text-xl sm:text-2xl font-black font-display text-white">
                Learn. Connect. Be Inspired.
              </h3>
              <p className="text-xs sm:text-sm text-[#A0A0A0] leading-relaxed">
                Our mentors are more than teachers — they are industry leaders who are passionate about raising the next generation of media professionals.
              </p>
            </div>
          </div>

          {/* Right Side: 3 Benefit Columns */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 lg:pt-0 lg:border-l lg:border-[#1A1A1A] lg:pl-8">
            <div className="space-y-2">
              <div className="w-9 h-9 rounded-xl bg-[#FF6B00]/10 border border-[#FF6B00]/20 flex items-center justify-center text-[#FF6B00]">
                <Users className="w-4 h-4" />
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-white font-display">
                One-on-One Guidance
              </h4>
              <p className="text-[11px] text-[#A0A0A0] leading-relaxed">
                Get personalized advice and mentorship from industry experts.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-9 h-9 rounded-xl bg-[#FF6B00]/10 border border-[#FF6B00]/20 flex items-center justify-center text-[#FF6B00]">
                <Handshake className="w-4 h-4" />
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-white font-display">
                Real Industry Experience
              </h4>
              <p className="text-[11px] text-[#A0A0A0] leading-relaxed">
                Learn from real-world experiences and practical case studies.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-9 h-9 rounded-xl bg-[#FF6B00]/10 border border-[#FF6B00]/20 flex items-center justify-center text-[#FF6B00]">
                <TrendingUp className="w-4 h-4" />
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-white font-display">
                Career Transformation
              </h4>
              <p className="text-[11px] text-[#A0A0A0] leading-relaxed">
                Build the skills and confidence to transform your career.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FOOTER */}
      <CmaFooter />
    </div>
  );
};
