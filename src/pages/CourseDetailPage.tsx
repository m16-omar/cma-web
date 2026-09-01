import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar,
  Clock,
  MapPin,
  Wifi,
  Award,
  Play,
  Check,
  ChevronRight,
  Phone,
  Radio,
  Mic2,
  Presentation,
  Tv,
  TrendingUp,
  GraduationCap,
  Building,
  FileText,
  Grid,
  Users,
  MessageSquare,
  Search,
  CheckCircle2,
  Lock,
  Sparkles,
  ChevronDown,
} from 'lucide-react';
import { coursesData } from '../data/courses';
import { mentorsData } from '../data/mockData';
import { CmaFooter } from '../components/ui/CmaFooter';
import { CmaNavbar } from '../components/ui/CmaNavbar';
import { useAcademyStore } from '../store/useAcademyStore';

export const CourseDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const course = coursesData.find((c) => c.slug === slug) || coursesData[0];
  const { openWaitlistModal, openPreviewModal } = useAcademyStore();

  const [activeTab, setActiveTab] = useState<'overview' | 'pillars' | 'schedule' | 'facilitators' | 'reviews'>('overview');
  const [expandedPillar, setExpandedPillar] = useState<string | null>('pillar-1');

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#FF6B00] selection:text-white">
      <Helmet>
        <title>{course.title} | City Media Academy</title>
        <meta name="description" content={course.description} />
      </Helmet>

      {/* 1. NAVBAR - Matching reference */}
      <CmaNavbar />

      {/* 2. BREADCRUMBS */}
      <div className="border-b border-[#1A1A1A]/80 bg-black/60">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 py-3 flex items-center gap-2 text-xs text-[#A0A0A0]">
          <Link to="/" className="hover:text-[#FF6B00] transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#444]" />
          <Link to="/courses" className="hover:text-[#FF6B00] transition-colors">Courses</Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#444]" />
          <span className="text-white font-medium truncate">{course.title}</span>
        </div>
      </div>

      {/* 3. MAIN PAGE CONTAINER (2 Columns) */}
      <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 py-8 lg:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* ================= LEFT MAIN CONTENT (8 Cols) ================= */}
          <div className="lg:col-span-8 space-y-8">
            {/* HERO CARD WITH STUDIO BACKGROUND */}
            <div className="relative rounded-3xl bg-[#0A0A0A] border border-[#1A1A1A] p-6 sm:p-8 overflow-hidden shadow-2xl space-y-6">
              {/* Broadcast Studio Ambient Image */}
              <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <img
                  src="/images/cma_classroom_real.jpg"
                  alt="City Media Academy Classroom Training"
                  className="w-full h-full object-cover object-right opacity-35 filter brightness-85 contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/85 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
              </div>

              <div className="relative z-10 space-y-5">
                {/* Course Main Title */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-white tracking-tight leading-[1.1]">
                  {course.title}
                </h1>

                {/* 4 Pill Badges in a Row */}
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/60 border border-white/10 text-xs font-medium text-white backdrop-blur-md">
                    <Calendar className="w-3.5 h-3.5 text-[#FF6B00]" />
                    <span>5-Week Intensive Programme</span>
                  </div>

                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/60 border border-white/10 text-xs font-medium text-white backdrop-blur-md">
                    <Calendar className="w-3.5 h-3.5 text-[#FF6B00]" />
                    <span>Starts July 06, 2026</span>
                  </div>

                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/60 border border-white/10 text-xs font-medium text-white backdrop-blur-md">
                    <Clock className="w-3.5 h-3.5 text-[#FF6B00]" />
                    <span>9am - 2pm Daily</span>
                  </div>

                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/60 border border-white/10 text-xs font-medium text-white backdrop-blur-md">
                    <Wifi className="w-3.5 h-3.5 text-[#FF6B00]" />
                    <span>Hybrid</span>
                  </div>
                </div>

                {/* Registration Closed Badge */}
                <div>
                  <span className="inline-flex items-center px-3 py-1 rounded-md bg-[#380b0f] border border-red-900/60 text-[#ff6b6b] text-[10px] font-black tracking-wider uppercase">
                    REGISTRATION CLOSED
                  </span>
                </div>

                {/* Main Paragraph Description */}
                <p className="text-xs sm:text-sm text-[#A0A0A0] leading-relaxed font-normal max-w-2xl">
                  Kickstart your career in broadcast media, public speaking, voiceover and content creation in just 5 weeks! Learn how to build a lucrative on-air presentation, event hosting, voiceover and digital media business with the Broadcast Media Pro Course.
                </p>

                {/* 4-Item Feature Container Bar */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-3.5 sm:p-4 rounded-2xl bg-[#0F0F0F] border border-[#1E1E1E]">
                  <div className="flex items-center gap-2.5">
                    <div className="text-[#FF6B00] p-2 rounded-xl bg-[#FF6B00]/10 border border-[#FF6B00]/20 flex-shrink-0">
                      <Building className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] text-[#A0A0A0] leading-tight">Physical Campus</div>
                      <div className="text-xs font-bold text-white">Ikeja Studio</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <div className="text-[#FF6B00] p-2 rounded-xl bg-[#FF6B00]/10 border border-[#FF6B00]/20 flex-shrink-0">
                      <Wifi className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] text-[#A0A0A0] leading-tight">Online Access</div>
                      <div className="text-xs font-bold text-white">Live Classes</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <div className="text-[#FF6B00] p-2 rounded-xl bg-[#FF6B00]/10 border border-[#FF6B00]/20 flex-shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] text-[#A0A0A0] leading-tight">Structure</div>
                      <div className="text-xs font-bold text-white leading-tight">2 Wks Class + 3 Wks Internship</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <div className="text-[#FF6B00] p-2 rounded-xl bg-[#FF6B00]/10 border border-[#FF6B00]/20 flex-shrink-0">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] text-[#A0A0A0] leading-tight">Certificate</div>
                      <div className="text-xs font-bold text-white">Upon Completion</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* INTERACTIVE NAVIGATION TABS */}
            <div className="border-b border-[#1A1A1A] flex items-center gap-2 sm:gap-6 overflow-x-auto pb-0.5">
              <button
                onClick={() => setActiveTab('overview')}
                className={`flex items-center gap-2 py-3 px-2 text-xs sm:text-sm font-bold border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === 'overview'
                    ? 'border-[#FF6B00] text-[#FF6B00]'
                    : 'border-transparent text-[#A0A0A0] hover:text-white'
                }`}
              >
                <FileText className="w-4 h-4" />
                <span>Overview</span>
              </button>

              <button
                onClick={() => setActiveTab('pillars')}
                className={`flex items-center gap-2 py-3 px-2 text-xs sm:text-sm font-bold border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === 'pillars'
                    ? 'border-[#FF6B00] text-[#FF6B00]'
                    : 'border-transparent text-[#A0A0A0] hover:text-white'
                }`}
              >
                <Grid className="w-4 h-4" />
                <span>8 Pillars</span>
              </button>

              <button
                onClick={() => setActiveTab('schedule')}
                className={`flex items-center gap-2 py-3 px-2 text-xs sm:text-sm font-bold border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === 'schedule'
                    ? 'border-[#FF6B00] text-[#FF6B00]'
                    : 'border-transparent text-[#A0A0A0] hover:text-white'
                }`}
              >
                <Calendar className="w-4 h-4" />
                <span>Schedule</span>
              </button>

              <button
                onClick={() => setActiveTab('facilitators')}
                className={`flex items-center gap-2 py-3 px-2 text-xs sm:text-sm font-bold border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === 'facilitators'
                    ? 'border-[#FF6B00] text-[#FF6B00]'
                    : 'border-transparent text-[#A0A0A0] hover:text-white'
                }`}
              >
                <Users className="w-4 h-4" />
                <span>Facilitators</span>
              </button>

              <button
                onClick={() => setActiveTab('reviews')}
                className={`flex items-center gap-2 py-3 px-2 text-xs sm:text-sm font-bold border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === 'reviews'
                    ? 'border-[#FF6B00] text-[#FF6B00]'
                    : 'border-transparent text-[#A0A0A0] hover:text-white'
                }`}
              >
                <MessageSquare className="w-4 h-4" />
                <span>Reviews</span>
              </button>
            </div>

            {/* TAB 1: OVERVIEW */}
            {activeTab === 'overview' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-8"
              >
                {/* Overview Card */}
                <div className="rounded-3xl bg-[#0A0A0A] border border-[#1A1A1A] p-6 sm:p-8 space-y-6 shadow-xl">
                  <h2 className="text-xl sm:text-2xl font-bold font-display text-white">
                    Overview
                  </h2>

                  <p className="text-xs sm:text-sm text-[#A0A0A0] leading-relaxed">
                    This 5-week intensive program is structured to equip you with the practical skills, industry knowledge and real-world experience you need to thrive in the broadcast and digital media industry.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                    {/* Left: 4 Checkmark Bullets */}
                    <div className="md:col-span-7 space-y-3.5">
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-[#FF6B00]/15 text-[#FF6B00] flex items-center justify-center flex-shrink-0 mt-0.5 border border-[#FF6B00]/30">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                        <span className="text-xs sm:text-sm text-white/90 leading-snug">
                          5 hour classes a day for 2 weeks at our state-of-the-art studio in Ikeja.
                        </span>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-[#FF6B00]/15 text-[#FF6B00] flex items-center justify-center flex-shrink-0 mt-0.5 border border-[#FF6B00]/30">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                        <span className="text-xs sm:text-sm text-white/90 leading-snug">
                          3 weeks internship at City FM — a leading urban contemporary radio station.
                        </span>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-[#FF6B00]/15 text-[#FF6B00] flex items-center justify-center flex-shrink-0 mt-0.5 border border-[#FF6B00]/30">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                        <span className="text-xs sm:text-sm text-white/90 leading-snug">
                          Blend of theoretical knowledge, practical training and on-air experience.
                        </span>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-[#FF6B00]/15 text-[#FF6B00] flex items-center justify-center flex-shrink-0 mt-0.5 border border-[#FF6B00]/30">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                        <span className="text-xs sm:text-sm text-white/90 leading-snug">
                          Hands-on projects, assignments and real industry exposure.
                        </span>
                      </div>
                    </div>

                    {/* Right: Quote Box */}
                    <div className="md:col-span-5 p-6 rounded-2xl bg-[#0F0F0F] border border-[#1A1A1A] relative shadow-inner">
                      <div className="text-4xl font-serif text-[#FF6B00] leading-none mb-2 font-black select-none">
                        “
                      </div>
                      <p className="text-xs sm:text-sm font-medium text-white leading-relaxed mb-4">
                        We don't just teach, we transform talents into media professionals.
                      </p>
                      <div className="text-xs font-bold text-[#FF6B00]">
                        — City Media Academy
                      </div>
                    </div>
                  </div>
                </div>

                {/* Who This Course Is For */}
                <div className="rounded-3xl bg-[#0A0A0A] border border-[#1A1A1A] p-6 sm:p-8 space-y-6 shadow-xl">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold font-display text-white">
                      Who This Course Is For
                    </h3>
                    <p className="text-xs text-[#A0A0A0] mt-1">
                      Aspiring and emerging professionals who want to build a career in:
                    </p>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                    <div className="p-3.5 rounded-xl bg-[#0F0F0F] border border-[#1A1A1A] flex flex-col items-center text-center space-y-2 group hover:border-[#FF6B00]/50 transition-all">
                      <div className="text-[#FF6B00] p-2 rounded-lg bg-[#FF6B00]/10 border border-[#FF6B00]/20">
                        <Radio className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-bold text-white/90 leading-tight">
                        Radio & TV Presentation
                      </span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#0F0F0F] border border-[#1A1A1A] flex flex-col items-center text-center space-y-2 group hover:border-[#FF6B00]/50 transition-all">
                      <div className="text-[#FF6B00] p-2 rounded-lg bg-[#FF6B00]/10 border border-[#FF6B00]/20">
                        <Mic2 className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-bold text-white/90 leading-tight">
                        Voiceover & Audio Production
                      </span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#0F0F0F] border border-[#1A1A1A] flex flex-col items-center text-center space-y-2 group hover:border-[#FF6B00]/50 transition-all">
                      <div className="text-[#FF6B00] p-2 rounded-lg bg-[#FF6B00]/10 border border-[#FF6B00]/20">
                        <Presentation className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-bold text-white/90 leading-tight">
                        Event Hosting & Public Speaking
                      </span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#0F0F0F] border border-[#1A1A1A] flex flex-col items-center text-center space-y-2 group hover:border-[#FF6B00]/50 transition-all">
                      <div className="text-[#FF6B00] p-2 rounded-lg bg-[#FF6B00]/10 border border-[#FF6B00]/20">
                        <Tv className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-bold text-white/90 leading-tight">
                        Digital Media & Content Creation
                      </span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#0F0F0F] border border-[#1A1A1A] flex flex-col items-center text-center space-y-2 group hover:border-[#FF6B00]/50 transition-all">
                      <div className="text-[#FF6B00] p-2 rounded-lg bg-[#FF6B00]/10 border border-[#FF6B00]/20">
                        <TrendingUp className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-bold text-white/90 leading-tight">
                        Media & Brand Management
                      </span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#0F0F0F] border border-[#1A1A1A] flex flex-col items-center text-center space-y-2 group hover:border-[#FF6B00]/50 transition-all">
                      <div className="text-[#FF6B00] p-2 rounded-lg bg-[#FF6B00]/10 border border-[#FF6B00]/20">
                        <GraduationCap className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-bold text-white/90 leading-tight">
                        Students & Graduates
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 2: 8 PILLARS */}
            {activeTab === 'pillars' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
              >
                <div className="rounded-3xl bg-[#0A0A0A] border border-[#1A1A1A] p-6 sm:p-8 space-y-6 shadow-xl">
                  <div className="space-y-1">
                    <h2 className="text-xl sm:text-2xl font-bold font-display text-white">
                      8 Comprehensive Programme Pillars
                    </h2>
                    <p className="text-xs text-[#A0A0A0]">
                      Master every facet of modern broadcasting, voice artistry, elocution, and creator monetisation.
                    </p>
                  </div>

                  <div className="space-y-3">
                    {course.pillars.map((pillar) => {
                      const isExpanded = expandedPillar === pillar.id;
                      return (
                        <div
                          key={pillar.id}
                          className="rounded-2xl bg-[#0F0F0F] border border-[#1A1A1A] overflow-hidden transition-all"
                        >
                          <button
                            onClick={() => setExpandedPillar(isExpanded ? null : pillar.id)}
                            className="w-full p-4 flex items-center justify-between text-left hover:bg-white/[0.02] cursor-pointer"
                          >
                            <div className="flex items-center gap-3">
                              <span className="w-8 h-8 rounded-xl bg-[#FF6B00]/10 border border-[#FF6B00]/30 text-[#FF6B00] font-bold text-xs flex items-center justify-center">
                                {pillar.number}
                              </span>
                              <div>
                                <h4 className="text-sm font-bold text-white font-display">
                                  {pillar.title}
                                </h4>
                                <span className="text-[10px] text-[#A0A0A0]">
                                  {pillar.duration}
                                </span>
                              </div>
                            </div>

                            <ChevronDown
                              className={`w-4 h-4 text-[#A0A0A0] transition-transform duration-200 ${
                                isExpanded ? 'rotate-180 text-[#FF6B00]' : ''
                              }`}
                            />
                          </button>

                          {isExpanded && (
                            <div className="p-4 pt-0 border-t border-[#181818] space-y-3 mt-2">
                              <p className="text-xs text-[#A0A0A0] leading-relaxed">
                                {pillar.description}
                              </p>

                              <div className="space-y-2 pt-2">
                                {pillar.lessons.map((lesson) => (
                                  <div
                                    key={lesson.id}
                                    className="flex items-center justify-between p-3 rounded-xl bg-black/40 border border-[#1A1A1A] text-xs"
                                  >
                                    <div className="flex items-center gap-2.5 min-w-0">
                                      {lesson.isPreview ? (
                                        <button
                                          onClick={() =>
                                            openPreviewModal(lesson)
                                          }
                                          className="text-[#FF6B00] hover:scale-110 transition-transform cursor-pointer"
                                        >
                                          <Play className="w-4 h-4 fill-current" />
                                        </button>
                                      ) : (
                                        <Lock className="w-4 h-4 text-[#555]" />
                                      )}
                                      <div className="min-w-0">
                                        <div className="text-white font-medium truncate">
                                          {lesson.title}
                                        </div>
                                        {lesson.facilitatorName && (
                                          <div className="text-[10px] text-[#A0A0A0]">
                                            Facilitator: {lesson.facilitatorName}
                                          </div>
                                        )}
                                      </div>
                                    </div>

                                    <div className="flex items-center gap-2 flex-shrink-0">
                                      <span className="px-2 py-0.5 rounded-md bg-white/5 text-[10px] text-[#A0A0A0]">
                                        {lesson.mode}
                                      </span>
                                      <span className="text-[10px] text-[#FF6B00] font-semibold">
                                        {lesson.duration}
                                      </span>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 3: SCHEDULE */}
            {activeTab === 'schedule' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-3xl bg-[#0A0A0A] border border-[#1A1A1A] p-6 sm:p-8 space-y-6 shadow-xl"
              >
                <h2 className="text-xl sm:text-2xl font-bold font-display text-white">
                  5-Week Intensive Roadmap
                </h2>

                <div className="space-y-6">
                  <div className="p-5 rounded-2xl bg-[#0F0F0F] border border-[#1A1A1A] space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 rounded-md bg-[#FF6B00]/15 text-[#FF6B00] text-xs font-bold">
                        Weeks 1 & 2: Classroom & Studio Bootcamps
                      </span>
                      <span className="text-xs text-[#A0A0A0]">9:00 AM – 2:00 PM Daily</span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#A0A0A0] leading-relaxed pt-1">
                      Intensive masterclasses in Ikeja Studios and HD live online stream. Covers on-air presentation, diction drills, voice acting, interview architecture, and digital creator monetization.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#0F0F0F] border border-[#1A1A1A] space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 rounded-md bg-emerald-500/15 text-emerald-400 text-xs font-bold">
                        Weeks 3, 4 & 5: Live City 105.1 FM Internship
                      </span>
                      <span className="text-xs text-[#A0A0A0]">Rotational Shifts</span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#A0A0A0] leading-relaxed pt-1">
                      Hands-on studio console operation, shadow veteran on-air presenters, produce live radio shows, voice commercials, record news bulletins, and graduate with a verified industry portfolio.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 4: FACILITATORS */}
            {activeTab === 'facilitators' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-3xl bg-[#0A0A0A] border border-[#1A1A1A] p-6 sm:p-8 space-y-6 shadow-xl"
              >
                <h2 className="text-xl sm:text-2xl font-bold font-display text-white">
                  Meet Your Industry Facilitators
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {mentorsData.map((mentor) => (
                    <div
                      key={mentor.id}
                      className="p-4 rounded-2xl bg-[#0F0F0F] border border-[#1A1A1A] text-center space-y-3 group hover:border-[#FF6B00]/40 transition-all"
                    >
                      <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mentor-avatar-ring">
                        <img
                          src={mentor.avatar}
                          alt={mentor.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm font-bold text-white font-display leading-tight">
                          {mentor.name}
                        </div>
                        <div className="text-[10px] text-[#FF6B00] font-medium mt-0.5">
                          {mentor.role}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* TAB 5: REVIEWS */}
            {activeTab === 'reviews' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-3xl bg-[#0A0A0A] border border-[#1A1A1A] p-6 sm:p-8 space-y-6 shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-xl sm:text-2xl font-bold font-display text-white">
                    Graduate Reviews & Outcomes
                  </h2>
                  <div className="flex items-center gap-1 text-[#FF6B00] text-sm font-bold">
                    ★ 4.96 <span className="text-[#A0A0A0] text-xs font-normal">(480+ Alumni)</span>
                  </div>
                </div>

                <div className="space-y-4">
                  {course.reviews.map((rev) => (
                    <div
                      key={rev.id}
                      className="p-5 rounded-2xl bg-[#0F0F0F] border border-[#1A1A1A] space-y-3"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <img
                            src={rev.avatar}
                            alt={rev.author}
                            className="w-9 h-9 rounded-full object-cover border border-[#333]"
                          />
                          <div>
                            <div className="text-xs font-bold text-white font-display">
                              {rev.author}
                            </div>
                            <div className="text-[10px] text-[#FF6B00]">
                              {rev.role}
                            </div>
                          </div>
                        </div>
                        <span className="text-[10px] text-[#A0A0A0]">{rev.date}</span>
                      </div>
                      <p className="text-xs text-[#A0A0A0] leading-relaxed">
                        "{rev.comment}"
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* ================= RIGHT SIDEBAR (4 Cols) ================= */}
          <div className="lg:col-span-4 space-y-5">
            {/* Card 1: Video Preview & CTA */}
            <div className="rounded-3xl bg-[#0A0A0A] border border-[#1A1A1A] p-4 sm:p-5 shadow-2xl space-y-4">
              {/* Video Preview Box */}
              <div
                onClick={() =>
                  openPreviewModal({
                    id: 'course-preview',
                    title: course.title,
                    duration: '2 mins',
                    mode: 'Hybrid',
                    isLocked: false,
                    videoUrl:
                      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
                    description: course.description,
                  })
                }
                className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-black/80 border border-[#1A1A1A] group cursor-pointer shadow-inner"
              >
                <img
                  src="/images/cma_classroom_ai.jpg"
                  alt="City Media Academy Broadcast Training Class"
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors flex flex-col items-center justify-center gap-2">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#FF6B00] text-white flex items-center justify-center shadow-[0_0_25px_rgba(255,107,0,0.5)] group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-current ml-0.5" />
                  </div>
                  <span className="text-xs font-bold text-white drop-shadow-md">
                    Watch Course Preview
                  </span>
                </div>
              </div>

              {/* Registration Closed Full-Width Bar */}
              <div className="w-full py-2.5 rounded-xl bg-[#380b0f] border border-red-900/60 text-[#ff6b6b] text-xs font-black text-center tracking-wider uppercase">
                REGISTRATION CLOSED
              </div>

              {/* Join Waitlist CTA Button */}
              <button
                onClick={() => openWaitlistModal(course.id)}
                className="w-full py-3.5 rounded-xl border border-[#FF6B00] bg-transparent hover:bg-[#FF6B00] text-[#FF6B00] hover:text-white font-bold text-xs sm:text-sm tracking-wide transition-all duration-200 cursor-pointer text-center shadow-md"
              >
                Join Waitlist
              </button>

              <p className="text-center text-[11px] text-[#A0A0A0]">
                Be the first to know when next batch opens.
              </p>
            </div>

            {/* Card 2: What You'll Get */}
            <div className="rounded-3xl bg-[#0A0A0A] border border-[#1A1A1A] p-5 sm:p-6 space-y-4 shadow-xl">
              <h3 className="text-sm font-bold text-white font-display">
                What You'll Get
              </h3>

              <div className="grid grid-cols-2 gap-3 text-[11px] text-[#A0A0A0]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6B00] flex-shrink-0" />
                  <span className="text-white/90">Certificate of Participation</span>
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6B00] flex-shrink-0" />
                  <span className="text-white/90">Diction & Public Speaking</span>
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6B00] flex-shrink-0" />
                  <span className="text-white/90">Art of Radio Presentation</span>
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6B00] flex-shrink-0" />
                  <span className="text-white/90">Social Media Management</span>
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6B00] flex-shrink-0" />
                  <span className="text-white/90">Interviewing Skills</span>
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6B00] flex-shrink-0" />
                  <span className="text-white/90">Journalism & Newscasting</span>
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6B00] flex-shrink-0" />
                  <span className="text-white/90">Voiceover Production</span>
                </div>
              </div>
            </div>

            {/* Card 3: Location & Access */}
            <div className="rounded-3xl bg-[#0A0A0A] border border-[#1A1A1A] p-5 sm:p-6 space-y-4 shadow-xl">
              <h3 className="text-sm font-bold text-white font-display">
                Location & Access
              </h3>

              <div className="space-y-3 text-xs text-[#A0A0A0]">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#FF6B00] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white font-semibold block">Physical Campus:</strong>
                    Plot 11 Lateef Jakande Road, Agidingbin Ikeja, Lagos Nigeria.
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Wifi className="w-4 h-4 text-[#FF6B00] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white font-semibold block">Online Access:</strong>
                    Live classes via Zoom
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Phone className="w-4 h-4 text-[#FF6B00] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white font-semibold block">Phone:</strong>
                    0810 968 8638
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4: Course Highlights */}
            <div className="rounded-3xl bg-[#0A0A0A] border border-[#1A1A1A] p-5 sm:p-6 space-y-4 shadow-xl">
              <h3 className="text-sm font-bold text-white font-display">
                Course Highlights
              </h3>

              <div className="grid grid-cols-4 gap-2 text-center">
                <div className="p-2.5 rounded-xl bg-[#0F0F0F] border border-[#1A1A1A] space-y-1">
                  <Calendar className="w-4 h-4 text-[#FF6B00] mx-auto" />
                  <div className="text-sm font-extrabold text-white">5</div>
                  <div className="text-[10px] text-[#A0A0A0]">Weeks</div>
                </div>

                <div className="p-2.5 rounded-xl bg-[#0F0F0F] border border-[#1A1A1A] space-y-1">
                  <Clock className="w-4 h-4 text-[#FF6B00] mx-auto" />
                  <div className="text-sm font-extrabold text-white">40+</div>
                  <div className="text-[10px] text-[#A0A0A0]">Hours</div>
                </div>

                <div className="p-2.5 rounded-xl bg-[#0F0F0F] border border-[#1A1A1A] space-y-1">
                  <Grid className="w-4 h-4 text-[#FF6B00] mx-auto" />
                  <div className="text-sm font-extrabold text-white">8</div>
                  <div className="text-[10px] text-[#A0A0A0]">Pillars</div>
                </div>

                <div className="p-2.5 rounded-xl bg-[#0F0F0F] border border-[#1A1A1A] space-y-1">
                  <Award className="w-4 h-4 text-[#FF6B00] mx-auto" />
                  <div className="text-sm font-extrabold text-white">100%</div>
                  <div className="text-[10px] text-[#A0A0A0]">Practical</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. FOOTER */}
      <CmaFooter />
    </div>
  );
};
