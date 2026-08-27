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
import { CmaLogo } from '../components/ui/CmaLogo';
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
    id: 'evt-1',
    tag: 'MASTERCLASS',
    month: 'JUN',
    day: '15',
    year: '2026',
    title: 'The Art of On-Air Presentation',
    description: 'A practical masterclass on building a powerful on-air presence and connecting with your audience.',
    time: '10:00 AM – 1:00 PM',
    location: 'Ikeja Studio + Online',
    image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'evt-2',
    tag: 'INDUSTRY TALK',
    month: 'JUN',
    day: '22',
    year: '2026',
    title: 'The Future of Radio & Digital Media',
    description: 'Industry leaders discuss trends shaping broadcasting, podcasting and digital content creation.',
    time: '11:00 AM – 2:00 PM',
    location: 'City 105.1 FM Studio',
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'evt-3',
    tag: 'WORKSHOP',
    month: 'JUL',
    day: '06',
    year: '2026',
    title: 'Voiceover & Audio Production Workshop',
    description: 'Hands-on training on recording, editing and producing professional voiceovers and audio content.',
    time: '9:00 AM – 2:00 PM',
    location: 'Ikeja Studio',
    image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'evt-4',
    tag: 'CEREMONY',
    month: 'AUG',
    day: '29',
    year: '2026',
    title: 'CMA Graduation Ceremony 2026',
    description: 'Celebrating a new generation of broadcast media professionals and media entrepreneurs.',
    time: '10:00 AM – 1:00 PM',
    location: 'Eko Hotel & Suites, Lagos',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop',
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
      <header className="sticky top-0 z-50 bg-black/85 backdrop-blur-md border-b border-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center group select-none">
            <CmaLogo size="lg" showText={true} />
          </Link>

          {/* Centered Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-[13px] font-medium tracking-wide">
            <Link to="/" className="text-[#A0A0A0] hover:text-white transition-colors">
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
            <Link
              to="/events"
              className="text-[#FF6B00] font-bold relative py-1 border-b-2 border-[#FF6B00]"
            >
              Events
            </Link>
            <Link to="/contact" className="text-[#A0A0A0] hover:text-white transition-colors">
              Contact
            </Link>
          </nav>

          {/* Right Badge / Pill */}
          <div className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#0A0A0A] border border-[#1A1A1A] text-xs font-semibold text-white shadow-xs">
            <div className="w-5 h-5 rounded-full bg-[#FF6B00]/15 text-[#FF6B00] flex items-center justify-center">
              <GraduationCap className="w-3 h-3" />
            </div>
            <div className="flex flex-col text-left leading-none">
              <span className="text-[10px] font-bold text-white uppercase tracking-wider">CMA</span>
              <span className="text-[9px] text-[#A0A0A0]">Experience Excellence</span>
            </div>
          </div>
        </div>
      </header>

      {/* 2. HERO SECTION */}
      <section className="relative pt-12 pb-14 lg:pt-16 lg:pb-20 overflow-hidden border-b border-[#1A1A1A]">
        {/* Stage Lighting & Auditorium Visual Background */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2000&auto=format&fit=crop"
            alt="CMA Stage Events"
            className="w-full h-full object-cover object-right opacity-35 filter brightness-75 contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            {/* Pre-Heading */}
            <span className="text-xs sm:text-sm font-bold text-[#FF6B00] uppercase tracking-widest block font-display">
              CMA EVENTS
            </span>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display text-white tracking-tight leading-[1.08]">
              Learn. Connect.<br />
              Be Inspired.<br />
              <span className="text-[#FF6B00]">Grow Your Future.</span>
            </h1>

            {/* Subtitle Copy */}
            <p className="text-xs sm:text-sm text-[#A0A0A0] leading-relaxed font-normal max-w-xl">
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

      {/* 3. UPCOMING EVENTS (4-CARD GRID) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between pb-6 border-b border-[#1A1A1A]">
          <div className="flex items-center gap-3">
            <h2 className="text-sm sm:text-base font-bold text-white uppercase tracking-wider font-display">
              UPCOMING EVENTS
            </h2>
            <div className="w-12 h-[2px] bg-[#FF6B00]" />
          </div>

          <Link
            to="/courses"
            className="text-xs font-bold text-[#FF6B00] hover:text-white transition-colors flex items-center gap-1"
          >
            <span>View All Events</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 pt-6">
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

                {/* Title */}
                <h3 className="text-sm sm:text-base font-bold text-white font-display mt-3.5 leading-snug line-clamp-2">
                  {evt.title}
                </h3>

                {/* Description */}
                <p className="text-[11px] sm:text-xs text-[#A0A0A0] leading-relaxed line-clamp-2 mt-1.5 font-normal">
                  {evt.description}
                </p>
              </div>

              {/* Meta & Button */}
              <div className="pt-3 mt-3 border-t border-[#181818] space-y-3">
                <div className="space-y-1 text-[11px] text-[#A0A0A0]">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#FF6B00] flex-shrink-0" />
                    <span>{evt.time}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#FF6B00] flex-shrink-0" />
                    <span className="truncate">{evt.location}</span>
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
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-sm font-bold text-white uppercase tracking-wider font-display mb-6">
          EVENT CATEGORIES
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
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

      {/* 5. PAST EVENTS HIGHLIGHTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center justify-between pb-6">
          <h2 className="text-sm font-bold text-white uppercase tracking-wider font-display">
            PAST EVENTS HIGHLIGHTS
          </h2>
          <Link
            to="/courses"
            className="text-xs font-bold text-[#FF6B00] hover:text-white transition-colors flex items-center gap-1"
          >
            <span>View Gallery</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 5 Photos Row */}
        <div className="relative">
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 overflow-hidden rounded-2xl">
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
        <div className="mt-8 rounded-2xl bg-[#0F0F0F] border border-[#1A1A1A] p-6 sm:p-7 text-center max-w-3xl mx-auto space-y-3 shadow-lg">
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
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
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
      <footer className="border-t border-[#1A1A1A] bg-black text-xs text-[#A0A0A0] pt-14 pb-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-8 border-b border-[#1A1A1A]">
            {/* Col 1: Brand Logo & Socials */}
            <div className="space-y-4">
              <CmaLogo size="md" showText={true} />
              <p className="text-xs text-[#A0A0A0] leading-relaxed max-w-xs">
                Nurturing the next generation of radio professionals and media entrepreneurs.
              </p>
              <div className="flex items-center gap-2.5 pt-1">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-full bg-[#0A0A0A] border border-[#1A1A1A] hover:border-[#FF6B00] text-white flex items-center justify-center transition-colors"
                >
                  <span className="font-bold text-xs">f</span>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-full bg-[#0A0A0A] border border-[#1A1A1A] hover:border-[#FF6B00] text-white flex items-center justify-center transition-colors"
                >
                  <span className="font-bold text-[10px]">ig</span>
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-full bg-[#0A0A0A] border border-[#1A1A1A] hover:border-[#FF6B00] text-white flex items-center justify-center transition-colors"
                >
                  <span className="font-bold text-[10px]">𝕏</span>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-full bg-[#0A0A0A] border border-[#1A1A1A] hover:border-[#FF6B00] text-white flex items-center justify-center transition-colors"
                >
                  <span className="font-bold text-[10px]">yt</span>
                </a>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-full bg-[#0A0A0A] border border-[#1A1A1A] hover:border-[#FF6B00] text-white flex items-center justify-center transition-colors"
                >
                  <span className="font-bold text-[9px]">tk</span>
                </a>
              </div>
            </div>

            {/* Col 2: Quick Links */}
            <div className="space-y-3">
              <div className="font-bold text-white uppercase tracking-wider text-xs font-display">
                QUICK LINKS
              </div>
              <ul className="space-y-1.5 text-xs text-[#A0A0A0]">
                <li>
                  <Link to="/" className="hover:text-[#FF6B00] transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/courses" className="hover:text-[#FF6B00] transition-colors">
                    Courses
                  </Link>
                </li>
                <li>
                  <Link to="/instructors" className="hover:text-[#FF6B00] transition-colors">
                    Mentors
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-[#FF6B00] transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/events" className="hover:text-[#FF6B00] transition-colors">
                    Events
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-[#FF6B00] transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 3: Popular Courses */}
            <div className="space-y-3">
              <div className="font-bold text-white uppercase tracking-wider text-xs font-display">
                POPULAR COURSES
              </div>
              <ul className="space-y-1.5 text-xs text-[#A0A0A0]">
                <li>
                  <Link to="/courses" className="hover:text-[#FF6B00] transition-colors">
                    Broadcast Media Pro Course
                  </Link>
                </li>
                <li>
                  <Link to="/courses" className="hover:text-[#FF6B00] transition-colors">
                    Radio Presentation
                  </Link>
                </li>
                <li>
                  <Link to="/courses" className="hover:text-[#FF6B00] transition-colors">
                    Voiceover & Audio Production
                  </Link>
                </li>
                <li>
                  <Link to="/courses" className="hover:text-[#FF6B00] transition-colors">
                    Event Hosting & Public Speaking
                  </Link>
                </li>
                <li>
                  <Link to="/courses" className="hover:text-[#FF6B00] transition-colors">
                    Media Marketing
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 4: Contact Us & Campus */}
            <div className="space-y-3">
              <div className="font-bold text-white uppercase tracking-wider text-xs font-display">
                CONTACT US
              </div>
              <div className="space-y-2 text-xs">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#FF6B00] flex-shrink-0 mt-0.5" />
                  <span className="text-[#A0A0A0]">
                    Plot 11 Lateef Jakande Road, Agidingbi, Ikeja, Lagos.
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#FF6B00] flex-shrink-0" />
                  <span className="text-[#A0A0A0]">0810 968 8638</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#FF6B00] flex-shrink-0" />
                  <span className="text-[#A0A0A0]">academy@city1051fm.com</span>
                </div>
              </div>

              {/* Campus Preview Box */}
              <div className="pt-2">
                <div className="rounded-xl overflow-hidden border border-[#1A1A1A] aspect-[16/9] relative group">
                  <img
                    src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=400&auto=format&fit=crop"
                    alt="Campus"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-between px-3">
                    <span className="text-[10px] font-bold text-white">VISIT OUR CAMPUS</span>
                    <span className="text-[9px] font-bold text-[#FF6B00] flex items-center gap-0.5">
                      Get Directions <ArrowRight className="w-2.5 h-2.5" />
                    </span>
                  </div>
                </div>
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
