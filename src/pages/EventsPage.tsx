import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar,
  Users,
  Mic,
  Tv,
  Clock,
  MapPin,
  ArrowRight,
  BookOpen,
  Monitor,
  Share2,
  GraduationCap,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Phone,
  Mail,
  Send,
  X,
  Check,
  Award,
  Radio,
  ExternalLink,
} from 'lucide-react';
import { CmaFooter } from '../components/ui/CmaFooter';
import { CmaNavbar } from '../components/ui/CmaNavbar';
import { useAcademyStore } from '../store/useAcademyStore';

interface EventItem {
  id: string;
  tag: string;
  month: string;
  day: string;
  year: string;
  title: string;
  description: string;
  longDescription?: string;
  highlights?: string[];
  time: string;
  location: string;
  image: string;
}

const upcomingEventsData: EventItem[] = [
  {
    id: 'grad-31',
    tag: 'COHORT 31',
    month: 'AUG',
    day: '29',
    year: '2026',
    title: 'Broadcast Media Pro Cohort 31',
    description: 'Celebrating 38 newly certified radio presentation and broadcast media specialists entering top stations.',
    longDescription: 'The grand convocation and certification ceremony for Cohort 31 (2026 Set 2) at City Media Academy. Students successfully completed 5 weeks of rigorous hands-on studio training in on-air presentation, vocal dynamics, audio console operations, news writing, and commercial voice acting, followed by a guaranteed 3-week live station internship at City 105.1 FM.',
    highlights: [
      '38 Certified Broadcast Media Professionals',
      '5 Weeks Intensive In-Studio & Diction Masterclasses',
      '3 Weeks Guaranteed On-Air Radio Internship at City 105.1 FM',
      'Live Studio Production & Audio Console Operation Mastery',
      'Official Certificate of Professional Competence Issued',
    ],
    time: 'Convocation Ceremony (2026 Set 2)',
    location: 'Plot 11 Lateef Jakande Road, Agidingbin Ikeja, Lagos Nigeria',
    image: '/images/cohort_31_graduation.png',
  },
  {
    id: 'grad-30',
    tag: 'COHORT 30',
    month: 'MAR',
    day: '28',
    year: '2026',
    title: 'Broadcast Media Pro Cohort 30',
    description: 'Graduating set of on-air presenters, podcast producers, and broadcast journalists.',
    longDescription: 'Cohort 30 (2026 Set 1) celebrated their graduation following 5 weeks of intensive broadcast media instruction, podcast pilot productions, and live radio broadcasting at City 105.1 FM studios.',
    highlights: [
      '35 Certified Radio & TV Presenters',
      'Prime-Time Radio Pilot Productions',
      'Commercial Voiceover Demos Produced',
      'Guaranteed Station Internship at City 105.1 FM',
    ],
    time: 'Certification Ceremony (2026 Set 1)',
    location: 'Plot 11 Lateef Jakande Road, Agidingbin Ikeja, Lagos Nigeria',
    image: '/images/cma_classroom_real.jpg',
  },
  {
    id: 'grad-29',
    tag: 'COHORT 29',
    month: 'AUG',
    day: '30',
    year: '2025',
    title: 'Executive Voiceover & Media Cohort 29',
    description: 'Trained and guided by premier industry voice talents and live studio directors.',
    longDescription: 'Cohort 29 (2025 Set 2) specialized in commercial voice acting, audiobook narration, documentary voiceover, and broadcast presentation with personalized feedback from leading on-air personalities.',
    highlights: [
      '32 Certified Voiceover Specialists',
      'Studio Demo Reel Recordings Produced',
      'Live Radio Commercial Audio Direction',
      'Hands-on Internship Placements at City 105.1 FM',
    ],
    time: 'Commencement Event (2025 Set 2)',
    location: 'Plot 11 Lateef Jakande Road, Agidingbin Ikeja, Lagos Nigeria',
    image: '/images/cityfm_building_real.jpg',
  },
  {
    id: 'grad-28',
    tag: 'COHORT 28',
    month: 'MAR',
    day: '29',
    year: '2025',
    title: 'Broadcast Media Pro Cohort 28',
    description: 'Graduating set honored with industry excellence awards and radio station placements.',
    longDescription: 'Cohort 28 (2025 Set 1) marked a benchmark in live studio broadcasting excellence with graduates accepted into leading media agencies and broadcast stations across Nigeria.',
    highlights: [
      '40 Certified Media Specialists',
      'Live Studio Presentation Projects',
      'Academic & On-Air Excellence Honors',
      'Direct Placements into Broadcast Teams',
    ],
    time: 'Grand Ceremony (2025 Set 1)',
    location: 'Plot 11 Lateef Jakande Road, Agidingbin Ikeja, Lagos Nigeria',
    image: '/images/cma_classroom_ai.jpg',
  },
];

const pastGalleryImages = [
  'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=600&auto=format&fit=crop',
];

export const EventsPage: React.FC = () => {
  const { openWaitlistModal, openApplyModal } = useAcademyStore();
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const [copied, setCopied] = useState<boolean>(false);
  const [emailInput, setEmailInput] = useState<string>('');
  const [subscribed, setSubscribed] = useState<boolean>(false);

  const handleShareEvent = async (evt: EventItem) => {
    const shareData = {
      title: `${evt.title} | City Media Academy`,
      text: evt.description,
      url: window.location.href,
    };
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmailInput('');
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#FF6B00] selection:text-white">
      <Helmet>
        <title>Events & Masterclasses | City Media Academy</title>
        <meta
          name="description"
          content="Learn. Connect. Be Inspired. Grow Your Future. CMA events, broadcast workshops, industry talks and masterclasses."
        />
      </Helmet>

      {/* 1. TOP NAVBAR - Matching reference */}
      <CmaNavbar />

      {/* 2. HERO SECTION */}
      <section className="relative pt-12 pb-14 lg:pt-16 lg:pb-20 overflow-hidden border-b border-[#1A1A1A]">
        {/* Authentic CMA Students Classroom Background */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <img
            src="/images/cma_students_classroom.jpg"
            alt="City Media Academy Students Classroom Session"
            className="w-full h-full object-cover object-right sm:object-center opacity-40 filter brightness-90 contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
        </div>

        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
          <div className="max-w-4xl space-y-6">
            {/* Pre-Heading */}
            <span className="text-xs sm:text-sm font-bold text-[#FF6B00] uppercase tracking-widest block font-display">
              CMA EVENTS
            </span>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black font-display text-white tracking-tight leading-[1.06]">
              Learn. Connect.<br />
              Be Inspired.<br />
              <span className="text-[#FF6B00]">Grow Your Future.</span>
            </h1>

            {/* Subtitle Copy */}
            <p className="text-sm sm:text-base text-[#A0A0A0] leading-relaxed font-normal max-w-2xl">
              From masterclasses and workshops to industry talks and graduation ceremonies — our events are designed to inspire, connect and accelerate your journey in broadcast media.
            </p>

            {/* Event Statistics Bar (4 Items) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FF6B00]/10 border border-[#FF6B00]/20 flex items-center justify-center text-[#FF6B00] flex-shrink-0">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-2xl font-black text-white leading-none font-display">30+</div>
                  <div className="text-[11px] text-[#A0A0A0] mt-0.5 leading-tight">Events Hosted</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FF6B00]/10 border border-[#FF6B00]/20 flex items-center justify-center text-[#FF6B00] flex-shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-2xl font-black text-white leading-none font-display">5000+</div>
                  <div className="text-[11px] text-[#A0A0A0] mt-0.5 leading-tight">Participants</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FF6B00]/10 border border-[#FF6B00]/20 flex items-center justify-center text-[#FF6B00] flex-shrink-0">
                  <Mic className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-2xl font-black text-white leading-none font-display">80+</div>
                  <div className="text-[11px] text-[#A0A0A0] mt-0.5 leading-tight">Industry Speakers</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FF6B00]/10 border border-[#FF6B00]/20 flex items-center justify-center text-[#FF6B00] flex-shrink-0">
                  <Tv className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-base sm:text-lg font-black text-white leading-tight font-display">Live & Online</div>
                  <div className="text-[11px] text-[#A0A0A0] leading-tight">Hybrid Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. RECENT GRADUANTS (4-CARD GRID) */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 py-12">
        <div className="flex items-center justify-between pb-6 border-b border-[#1A1A1A]">
          <div className="flex items-center gap-3">
            <h2 className="text-sm sm:text-base font-bold text-white uppercase tracking-wider font-display">
              RECENT GRADUANTS
            </h2>
            <div className="w-12 h-[2px] bg-[#FF6B00]" />
          </div>

          <Link
            to="/graduation-gallery"
            className="text-xs font-bold text-[#FF6B00] hover:text-white transition-colors flex items-center gap-1"
          >
            <span>View All Graduants</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
          {upcomingEventsData.map((evt) => (
            <motion.div
              key={evt.id}
              whileHover={{ y: -4, borderColor: 'rgba(255, 107, 0, 0.5)' }}
              transition={{ duration: 0.2 }}
              className="rounded-2xl bg-[#0A0A0A] border border-[#1A1A1A] p-4 flex flex-col justify-between shadow-lg group hover:border-[#FF6B00]/40 transition-colors"
            >
              <div>
                {/* Image + Badges */}
                <div
                  onClick={() => setSelectedEvent(evt)}
                  className="relative aspect-[16/10] rounded-xl overflow-hidden bg-black/60 border border-[#1A1A1A] cursor-pointer"
                >
                  <img
                    src={evt.image}
                    alt={evt.title}
                    className="w-full h-full object-cover grayscale-[15%] group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                  {/* Top-Left Category Tag */}
                  <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-md bg-[#FF6B00] text-black text-[9px] font-black tracking-wider uppercase shadow-sm">
                    {evt.tag}
                  </div>

                  {/* Top-Right Date Box */}
                  <div className="absolute top-2.5 right-2.5 px-2 py-1 rounded-lg bg-black/80 backdrop-blur-md border border-white/10 text-center leading-none shadow-md">
                    <div className="text-[8px] font-bold text-[#FF6B00]">{evt.month}</div>
                    <div className="text-xs font-black text-white">{evt.day}</div>
                    <div className="text-[7px] text-[#A0A0A0]">{evt.year}</div>
                  </div>
                </div>

                {/* Event Details */}
                <div className="pt-4 space-y-2">
                  <h3
                    onClick={() => setSelectedEvent(evt)}
                    className="text-sm font-bold text-white font-display line-clamp-2 group-hover:text-[#FF6B00] transition-colors cursor-pointer"
                  >
                    {evt.title}
                  </h3>
                  <p className="text-[11px] text-[#A0A0A0] line-clamp-2 leading-relaxed">
                    {evt.description}
                  </p>
                </div>
              </div>

              {/* Event Time, Location & CTA */}
              <div className="pt-4 mt-3 border-t border-[#181818] space-y-3">
                <div className="space-y-1 text-[10px] text-[#888]">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3 h-3 text-[#FF6B00]" />
                    <span>{evt.time}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3 h-3 text-[#FF6B00]" />
                    <span>{evt.location}</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedEvent(evt)}
                  className="w-full py-2.5 px-3 rounded-xl border border-[#FF6B00]/40 hover:border-[#FF6B00] bg-[#FF6B00]/10 hover:bg-[#FF6B00] text-[#FF6B00] hover:text-white text-xs font-bold transition-all cursor-pointer text-center shadow-md active:scale-95 flex items-center justify-center gap-1.5"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. EVENT CATEGORIES (7 CARDS) */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 py-10">
        <h2 className="text-sm font-bold text-white uppercase tracking-wider font-display mb-6">
          EVENT CATEGORIES
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
          <div className="p-4 rounded-xl bg-[#0A0A0A] border border-[#1A1A1A] text-center space-y-2 hover:border-[#FF6B00]/40 transition-all group">
            <div className="w-8 h-8 rounded-lg bg-[#FF6B00]/10 text-[#FF6B00] flex items-center justify-center mx-auto">
              <Mic className="w-4 h-4" />
            </div>
            <h4 className="text-xs font-bold text-white font-display">Masterclasses</h4>
            <p className="text-[10px] text-[#A0A0A0] leading-tight">
              Practical skill training from industry experts
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#0A0A0A] border border-[#1A1A1A] text-center space-y-2 hover:border-[#FF6B00]/40 transition-all group">
            <div className="w-8 h-8 rounded-lg bg-[#FF6B00]/10 text-[#FF6B00] flex items-center justify-center mx-auto">
              <Users className="w-4 h-4" />
            </div>
            <h4 className="text-xs font-bold text-white font-display">Industry Talks</h4>
            <p className="text-[10px] text-[#A0A0A0] leading-tight">
              Insights on trends and career growth
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#0A0A0A] border border-[#1A1A1A] text-center space-y-2 hover:border-[#FF6B00]/40 transition-all group">
            <div className="w-8 h-8 rounded-lg bg-[#FF6B00]/10 text-[#FF6B00] flex items-center justify-center mx-auto">
              <BookOpen className="w-4 h-4" />
            </div>
            <h4 className="text-xs font-bold text-white font-display">Workshops</h4>
            <p className="text-[10px] text-[#A0A0A0] leading-tight">
              Hands-on learning experiences
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#0A0A0A] border border-[#1A1A1A] text-center space-y-2 hover:border-[#FF6B00]/40 transition-all group">
            <div className="w-8 h-8 rounded-lg bg-[#FF6B00]/10 text-[#FF6B00] flex items-center justify-center mx-auto">
              <Monitor className="w-4 h-4" />
            </div>
            <h4 className="text-xs font-bold text-white font-display">Webinars</h4>
            <p className="text-[10px] text-[#A0A0A0] leading-tight">
              Live online learning sessions
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#0A0A0A] border border-[#1A1A1A] text-center space-y-2 hover:border-[#FF6B00]/40 transition-all group">
            <div className="w-8 h-8 rounded-lg bg-[#FF6B00]/10 text-[#FF6B00] flex items-center justify-center mx-auto">
              <Share2 className="w-4 h-4" />
            </div>
            <h4 className="text-xs font-bold text-white font-display">Networking Events</h4>
            <p className="text-[10px] text-[#A0A0A0] leading-tight">
              Connect with peers and professionals
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#0A0A0A] border border-[#1A1A1A] text-center space-y-2 hover:border-[#FF6B00]/40 transition-all group">
            <div className="w-8 h-8 rounded-lg bg-[#FF6B00]/10 text-[#FF6B00] flex items-center justify-center mx-auto">
              <GraduationCap className="w-4 h-4" />
            </div>
            <h4 className="text-xs font-bold text-white font-display">Ceremonies</h4>
            <p className="text-[10px] text-[#A0A0A0] leading-tight">
              Graduations and special celebrations
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#0A0A0A] border border-[#1A1A1A] text-center space-y-2 hover:border-[#FF6B00]/40 transition-all group col-span-2 sm:col-span-1">
            <div className="w-8 h-8 rounded-lg bg-[#FF6B00]/10 text-[#FF6B00] flex items-center justify-center mx-auto">
              <Calendar className="w-4 h-4" />
            </div>
            <h4 className="text-xs font-bold text-white font-display">Open Days</h4>
            <p className="text-[10px] text-[#A0A0A0] leading-tight">
              Explore CMA and meet our team
            </p>
          </div>
        </div>
      </section>

      {/* 5. PAST GRADUATION HIGHLIGHTS */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 py-10">
        <div className="flex items-center justify-between pb-6">
          <h2 className="text-sm font-bold text-white uppercase tracking-wider font-display">
            PAST GRADUATION HIGHLIGHTS
          </h2>
          <Link
            to="/graduation-gallery"
            className="text-xs font-bold text-[#FF6B00] hover:text-white transition-colors flex items-center gap-1"
          >
            <span>View Graduation Gallery</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 5 Photos Row */}
        <div className="relative">
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 overflow-hidden rounded-2xl">
            {pastGalleryImages.map((img, idx) => (
              <div
                key={idx}
                className="relative aspect-[4/3] rounded-xl overflow-hidden bg-black/60 border border-[#1A1A1A] group"
              >
                <img
                  src={img}
                  alt={`Past Event ${idx + 1}`}
                  className="w-full h-full object-cover grayscale-[20%] group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors" />
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial Quote Box Below */}
        <div className="mt-8 rounded-2xl bg-[#0F0F0F] border border-[#1A1A1A] p-6 sm:p-7 text-center max-w-4xl mx-auto space-y-3 shadow-lg">
          <div className="text-3xl font-serif text-[#FF6B00] leading-none font-black select-none">
            “
          </div>
          <p className="text-xs sm:text-sm font-medium text-white/95 leading-relaxed">
            CMA events opened my eyes to real opportunities in the media industry. The connections and knowledge I gained were priceless.
          </p>
          <div className="text-xs font-bold text-[#FF6B00]">
            — Praise Johnson, CMA Graduate
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-1.5 pt-2">
            <span className="w-2 h-2 rounded-full bg-[#FF6B00]" />
            <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
            <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
            <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
            <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
          </div>
        </div>
      </section>

      {/* 6. NEWSLETTER / EVENT NOTIFICATION BANNER */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 py-10">
        <div className="rounded-3xl bg-[#0A0A0A] border border-[#1A1A1A] p-6 sm:p-8 lg:p-10 shadow-2xl flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#FF6B00]/10 border border-[#FF6B00]/30 text-[#FF6B00] flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_rgba(255,107,0,0.25)]">
              <Calendar className="w-7 h-7" />
            </div>
            <div className="space-y-1">
              <h3 className="text-xl sm:text-2xl font-black font-display text-white">
                Don't Miss Our Next Event!
              </h3>
              <p className="text-xs sm:text-sm text-[#A0A0A0]">
                Be the first to know about upcoming masterclasses, workshops and industry events.
              </p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              required
              className="w-full sm:w-80 bg-[#0F0F0F] border border-[#1E1E1E] focus:border-[#FF6B00] rounded-xl px-4 py-3 text-xs text-white placeholder-[#666] focus:outline-none transition-colors"
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#FF6B00] hover:bg-[#E55F00] text-white font-bold text-xs transition-colors cursor-pointer flex-shrink-0 shadow-md"
            >
              {subscribed ? 'Subscribed!' : 'Notify Me'}
            </button>
          </form>
        </div>
      </section>

      {/* 7. EVENT DETAILS LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedEvent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md">
            {/* Backdrop click */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedEvent(null)}
              className="fixed inset-0"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="relative w-full max-w-2xl bg-[#0A0A0A] border border-[#222222] rounded-3xl overflow-hidden shadow-2xl z-10 my-8 max-h-[90vh] flex flex-col"
            >
              {/* Sticky Top Header */}
              <div className="flex items-center justify-between p-4 sm:p-5 border-b border-[#1A1A1A] bg-[#0A0A0A]/90 backdrop-blur-md z-20">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#FF6B00] text-black font-black text-xs uppercase tracking-wider">
                    {selectedEvent.tag}
                  </span>
                  <span className="text-xs text-[#A0A0A0] font-semibold">
                    {selectedEvent.time}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleShareEvent(selectedEvent)}
                    className="p-2 rounded-xl bg-[#141414] hover:bg-[#222] text-[#A0A0A0] hover:text-white transition-colors cursor-pointer flex items-center gap-1.5 text-xs font-bold"
                    title="Share Event"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-400" />
                        <span className="text-emerald-400 text-xs">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Share2 className="w-4 h-4" />
                        <span className="hidden sm:inline">Share</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => setSelectedEvent(null)}
                    className="p-2 rounded-xl bg-[#141414] hover:bg-[#222] text-[#A0A0A0] hover:text-white transition-colors cursor-pointer"
                    aria-label="Close Modal"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Scrollable Modal Content */}
              <div className="overflow-y-auto p-5 sm:p-7 space-y-6 scrollbar-thin">
                {/* Hero Image */}
                <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-black/60 border border-[#1A1A1A] shadow-inner">
                  <img
                    src={selectedEvent.image}
                    alt={selectedEvent.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                    <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-black/70 backdrop-blur-sm border border-white/10">
                      City Media Academy Convocation
                    </span>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-[#FF6B00]/90 text-black">
                      {selectedEvent.month} {selectedEvent.day}, {selectedEvent.year}
                    </span>
                  </div>
                </div>

                {/* Title & Description */}
                <div className="space-y-3">
                  <h2 className="text-xl sm:text-2xl font-black font-display text-white">
                    {selectedEvent.title}
                  </h2>
                  <p className="text-sm text-[#CCCCCC] leading-relaxed">
                    {selectedEvent.longDescription || selectedEvent.description}
                  </p>
                </div>

                {/* Meta details cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-2xl bg-[#0F0F0F] border border-[#1A1A1A]">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#FF6B00]/10 text-[#FF6B00] flex items-center justify-center shrink-0">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] text-[#A0A0A0] uppercase font-bold">Date & Cohort</div>
                      <div className="text-xs font-bold text-white mt-0.5">
                        {selectedEvent.month} {selectedEvent.day}, {selectedEvent.year} ({selectedEvent.tag})
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#FF6B00]/10 text-[#FF6B00] flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] text-[#A0A0A0] uppercase font-bold">Venue & Studios</div>
                      <div className="text-xs font-bold text-white mt-0.5 leading-snug">
                        {selectedEvent.location}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Key Highlights */}
                {selectedEvent.highlights && (
                  <div className="space-y-3">
                    <h4 className="text-xs font-black uppercase tracking-wider text-[#FF6B00] font-display">
                      Program & Convocation Highlights
                    </h4>
                    <div className="grid grid-cols-1 gap-2.5">
                      {selectedEvent.highlights.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2.5 p-3 rounded-xl bg-[#0F0F0F] border border-[#181818] text-xs text-white"
                        >
                          <Check className="w-4 h-4 text-[#FF6B00] shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Sticky Action Bar */}
              <div className="p-4 sm:p-5 border-t border-[#1A1A1A] bg-[#0A0A0A] flex flex-col sm:flex-row items-center justify-between gap-3">
                <Link
                  to="/graduation-gallery"
                  onClick={() => setSelectedEvent(null)}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-[#333] hover:border-[#FF6B00] text-[#CCCCCC] hover:text-white text-xs font-bold transition-all text-center flex items-center justify-center gap-1.5 group"
                >
                  <span>View Graduation Gallery</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>

                <div className="flex items-center gap-2.5 w-full sm:w-auto">
                  <button
                    onClick={() => {
                      setSelectedEvent(null);
                      openApplyModal();
                    }}
                    className="flex-1 sm:flex-none px-6 py-2.5 rounded-xl bg-[#FF6B00] hover:bg-[#E55F00] text-white font-bold text-xs transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                  >
                    <GraduationCap className="w-4 h-4" />
                    <span>Apply for Next Cohort</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 8. RICH 4-COLUMN FOOTER */}
      <CmaFooter />
    </div>
  );
};
