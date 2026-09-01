import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
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
    description: 'Trained and mentored by premier industry voice talents and live studio directors.',
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
  const { openWaitlistModal } = useAcademyStore();
  const [emailInput, setEmailInput] = useState<string>('');
  const [subscribed, setSubscribed] = useState<boolean>(false);

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
              className="rounded-2xl bg-[#0A0A0A] border border-[#1A1A1A] p-4 flex flex-col justify-between shadow-lg group"
            >
              <div>
                {/* Image + Badges */}
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-black/60 border border-[#1A1A1A]">
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
                  <h3 className="text-sm font-bold text-white font-display line-clamp-2 group-hover:text-[#FF6B00] transition-colors">
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
                  onClick={() => openWaitlistModal(evt.id)}
                  className="w-full py-2 px-3 rounded-xl border border-[#FF6B00]/30 hover:border-[#FF6B00] bg-[#FF6B00]/5 hover:bg-[#FF6B00] text-[#FF6B00] hover:text-white text-xs font-bold transition-all cursor-pointer text-center"
                >
                  View Details
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

      {/* 7. RICH 4-COLUMN FOOTER */}
      <CmaFooter />
    </div>
  );
};
