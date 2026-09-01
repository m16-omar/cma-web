import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  GraduationCap,
  Award,
  Calendar,
  MapPin,
  ChevronRight,
  ArrowRight,
  Users,
  Sparkles,
  Radio,
  X,
  Share2,
  Download,
  Filter,
  CheckCircle2,
} from 'lucide-react';
import { CmaNavbar } from '../components/ui/CmaNavbar';
import { CmaFooter } from '../components/ui/CmaFooter';
import { useAcademyStore } from '../store/useAcademyStore';

interface GalleryItem {
  id: string;
  title: string;
  category: 'Class of 2026' | 'Class of 2025' | 'Studio Sessions' | 'Awards & Honors';
  cohort: string;
  date: string;
  location: string;
  image: string;
  description: string;
  aspect?: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Broadcast Media Pro Cohort 31 Convocation',
    category: 'Class of 2026',
    cohort: 'Cohort 31',
    date: 'August 2026',
    location: 'Plot 11 Lateef Jakande Road, Agidingbin Ikeja, Lagos Nigeria',
    image: '/images/cohort_31_graduation.png',
    description: 'The graduating set of Cohort 31 (2026 Set 2) celebrating their completion of the 5-week intensive broadcast media program with certificate presentations and cake cutting.',
    aspect: 'col-span-1 lg:col-span-2 aspect-[16/10]',
  },
  {
    id: 'gal-2',
    title: 'Broadcast Media Pro Cohort 30 Studio Lecture',
    category: 'Class of 2026',
    cohort: 'Cohort 30',
    date: 'March 2026',
    location: 'Plot 11 Lateef Jakande Road, Agidingbin Ikeja, Lagos Nigeria',
    image: '/images/cma_classroom_real.jpg',
    description: 'Hands-on broadcast journalism and on-air presentation lecture in session for Cohort 30 (2026 Set 1).',
    aspect: 'col-span-1 aspect-[4/3]',
  },
  {
    id: 'gal-3',
    title: 'City 105.1 FM Cohort 29 Studio Internship',
    category: 'Class of 2025',
    cohort: 'Cohort 29',
    date: 'August 2025',
    location: 'Plot 11 Lateef Jakande Road, Agidingbin Ikeja, Lagos Nigeria',
    image: '/images/cityfm_building_real.jpg',
    description: 'Graduates of Cohort 29 (2025 Set 2) undergoing practical on-air radio training and live studio broadcasting at City 105.1 FM.',
    aspect: 'col-span-1 aspect-[4/3]',
  },
  {
    id: 'gal-4',
    title: 'State-of-the-Art Broadcast Studio Masterclass (Cohort 28)',
    category: 'Class of 2025',
    cohort: 'Cohort 28',
    date: 'March 2025',
    location: 'Plot 11 Lateef Jakande Road, Agidingbin Ikeja, Lagos Nigeria',
    image: '/images/cma_classroom_ai.jpg',
    description: 'Students in Cohort 28 (2025 Set 1) receiving interactive mentorship in acoustic direction, live audio consoles, and vocal control.',
    aspect: 'col-span-1 aspect-[4/3]',
  },
  {
    id: 'gal-5',
    title: 'Grand Convocation & Certificate Presentation (Cohort 27)',
    category: 'Studio Sessions',
    cohort: 'Cohort 27',
    date: 'August 2024',
    location: 'Plot 11 Lateef Jakande Road, Agidingbin Ikeja, Lagos Nigeria',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200&auto=format&fit=crop',
    description: 'Valedictorians and graduates of Cohort 27 (2024 Set 2) receiving their official CMA certification and media broadcast credentials.',
    aspect: 'col-span-1 lg:col-span-2 aspect-[16/10]',
  },
  {
    id: 'gal-6',
    title: 'Media Trailblazer & Best Presenter Award (Cohort 26)',
    category: 'Awards & Honors',
    cohort: 'Cohort 26',
    date: 'March 2024',
    location: 'Plot 11 Lateef Jakande Road, Agidingbin Ikeja, Lagos Nigeria',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1000&auto=format&fit=crop',
    description: 'Recognizing outstanding student projects, podcast pilots, and voiceover commercial productions from Cohort 26 (2024 Set 1).',
    aspect: 'col-span-1 aspect-[4/3]',
  },
  {
    id: 'gal-7',
    title: 'Voiceover & Podcast Production Class Group (Cohort 25)',
    category: 'Studio Sessions',
    cohort: 'Cohort 25',
    date: 'August 2023',
    location: 'Plot 11 Lateef Jakande Road, Agidingbin Ikeja, Lagos Nigeria',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=1000&auto=format&fit=crop',
    description: 'Cohort 25 graduating class (2023 Set 2) posing after recording their final syndicated radio show broadcast.',
    aspect: 'col-span-1 aspect-[4/3]',
  },
  {
    id: 'gal-8',
    title: 'Alumni Network & Station Placement Welcome (Cohort 24)',
    category: 'Awards & Honors',
    cohort: 'Cohort 24',
    date: 'March 2023',
    location: 'Plot 11 Lateef Jakande Road, Agidingbin Ikeja, Lagos Nigeria',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1000&auto=format&fit=crop',
    description: 'Welcoming CMA certified graduates from Cohort 24 (2023 Set 1) into national radio, television, and podcasting networks.',
    aspect: 'col-span-1 aspect-[4/3]',
  },
];

const stats = [
  { label: 'Certified Graduates', value: '600+' },
  { label: 'Graduation Sets', value: '31 Cohorts' },
  { label: 'Station Placement Rate', value: '95%' },
  { label: 'Industry Awards Won', value: '30+' },
];

export const GraduationGalleryPage: React.FC = () => {
  const { openApplyModal } = useAcademyStore();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Class of 2026', 'Class of 2025', 'Studio Sessions', 'Awards & Honors'];

  const filteredItems = selectedCategory === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#FF6B00] selection:text-white">
      <Helmet>
        <title>Graduation Gallery & Alumni Sets | City Media Academy</title>
        <meta
          name="description"
          content="Explore the City Media Academy Convocation & Graduation Ceremony Gallery. Celebrating our graduating cohorts, award winners, and certified broadcast media professionals."
        />
      </Helmet>

      {/* 1. TOP NAVBAR */}
      <CmaNavbar />

      {/* 2. HERO SECTION */}
      <section className="relative pt-12 pb-16 lg:pt-18 lg:pb-24 overflow-hidden border-b border-[#1A1A1A]">
        {/* Background Image Ambient */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <img
            src="/images/cma_students_classroom.jpg"
            alt="CMA Graduation Sets"
            className="w-full h-full object-cover object-center opacity-30 filter brightness-90 contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />
        </div>

        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
          <div className="max-w-4xl space-y-6">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-semibold text-[#888888]">
              <Link to="/" className="hover:text-[#FF6B00] transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <Link to="/events" className="hover:text-[#FF6B00] transition-colors">
                Events
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-[#FF6B00]">Graduation Gallery</span>
            </div>

            {/* Pre-Heading */}
            <span className="text-xs sm:text-sm font-bold text-[#FF6B00] uppercase tracking-widest block font-display">
              CMA ALUMNI & CONVOCATIONS
            </span>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black font-display text-white tracking-tight leading-[1.06]">
              Celebrating Our <br />
              <span className="text-[#FF6B00]">Graduating Cohorts</span> &amp; Media Leaders.
            </h1>

            {/* Subtitle Copy */}
            <p className="text-sm sm:text-base text-[#C0C0C0] leading-relaxed font-normal max-w-2xl">
              Step inside the memorable convocation ceremonies, studio triumphs, and celebratory moments of our certified graduates making waves in radio, television, voiceover, and digital media across Africa.
            </p>

            {/* Stats Overview */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              {stats.map((stat, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-[#0A0A0A]/90 border border-[#1E1E1E] backdrop-blur-md space-y-1">
                  <div className="text-2xl sm:text-3xl font-black text-white font-display tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold text-[#888888]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. FILTER TABS */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 pt-10 pb-4">
        <div className="flex items-center justify-between flex-wrap gap-4 border-b border-[#1A1A1A] pb-6">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-[#FF6B00] text-black shadow-lg shadow-[#FF6B00]/25'
                    : 'bg-[#0E0E0E] text-[#A0A0A0] hover:text-white hover:bg-[#1A1A1A] border border-[#222222]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="text-xs text-[#888888] font-medium">
            Showing <strong className="text-white font-bold">{filteredItems.length}</strong> graduation moments
          </div>
        </div>
      </section>

      {/* 4. GALLERY GRID */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 py-8">
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -6 }}
                onClick={() => setSelectedImage(item)}
                className="group relative rounded-3xl overflow-hidden bg-[#0A0A0A] border border-[#1E1E1E] hover:border-[#FF6B00]/60 shadow-xl cursor-pointer transition-all duration-300 flex flex-col justify-between"
              >
                {/* Photo Image with Hover Zoom */}
                <div className="relative aspect-[16/11] overflow-hidden bg-black/60">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />

                  {/* Top Category Badge */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-lg bg-[#FF6B00] text-black text-[10px] font-black uppercase tracking-wider shadow-md">
                    {item.cohort}
                  </div>

                  {/* Date Pill */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-black/80 border border-white/10 backdrop-blur-md text-[11px] font-bold text-white">
                    {item.date}
                  </div>
                </div>

                {/* Card Content Details */}
                <div className="p-5 sm:p-6 space-y-3">
                  <h3 className="text-base sm:text-lg font-extrabold text-white font-display leading-tight group-hover:text-[#FF6B00] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-[13px] text-[#A0A0A0] leading-relaxed line-clamp-2 font-normal">
                    {item.description}
                  </p>

                  <div className="flex items-center justify-between pt-3 border-t border-[#181818] text-xs text-[#888888]">
                    <div className="flex items-center gap-1.5 truncate">
                      <MapPin className="w-3.5 h-3.5 text-[#FF6B00] flex-shrink-0" />
                      <span className="truncate">{item.location}</span>
                    </div>

                    <span className="text-[#FF6B00] font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform flex-shrink-0">
                      <span>View</span>
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* 5. LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 lg:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full rounded-3xl bg-[#0E0E0E] border border-[#262626] overflow-hidden shadow-2xl space-y-0"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/80 border border-white/20 text-white hover:text-[#FF6B00] flex items-center justify-center transition-colors cursor-pointer shadow-lg"
                aria-label="Close Preview"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Full Image */}
              <div className="relative aspect-[16/10] bg-black">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-lg bg-[#FF6B00] text-black text-xs font-black uppercase">
                    {selectedImage.cohort}
                  </span>
                  <span className="text-xs text-[#A0A0A0] font-medium">
                    {selectedImage.date} • {selectedImage.location}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-white font-display leading-tight">
                  {selectedImage.title}
                </h3>

                <p className="text-sm text-[#CCCCCC] leading-relaxed">
                  {selectedImage.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-[#222222]">
                  <div className="flex items-center gap-2 text-xs text-[#888888]">
                    <CheckCircle2 className="w-4 h-4 text-[#FF6B00]" />
                    <span>Official City Media Academy Commencement Archive</span>
                  </div>

                  <button
                    onClick={() => {
                      if (navigator.share) {
                        navigator.share({
                          title: selectedImage.title,
                          text: selectedImage.description,
                          url: window.location.href,
                        }).catch(() => {});
                      }
                    }}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#181818] border border-[#2E2E2E] hover:border-[#FF6B00] text-xs font-bold text-white transition-colors cursor-pointer"
                  >
                    <Share2 className="w-3.5 h-3.5 text-[#FF6B00]" />
                    <span>Share</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 6. CALL TO ACTION: JOIN NEXT COHORT */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 py-16">
        <div className="rounded-3xl bg-gradient-to-r from-[#0F0F0F] via-[#141414] to-[#0F0F0F] border border-[#222222] p-8 sm:p-12 lg:p-14 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/30 text-[#FF6B00] text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Next Graduation Set Forming</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-white tracking-tight leading-tight">
              Ready to Join Our Next <br />
              <span className="text-[#FF6B00]">Graduating Class</span>?
            </h2>

            <p className="text-sm sm:text-base text-[#A0A0A0] leading-relaxed">
              Step into the world of radio, podcasting, and media presenting. Gain 5 weeks of rigorous hands-on training, industry mentorship, and City 105.1 FM internship.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3.5 flex-shrink-0 w-full sm:w-auto">
            <button
              onClick={() => openApplyModal('broadcast-media-pro-2026')}
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-gradient-to-r from-[#FF6B00] to-[#E55F00] hover:brightness-110 active:scale-95 text-white font-black text-sm tracking-wide shadow-lg shadow-[#FF6B00]/30 flex items-center justify-center gap-2 cursor-pointer transition-all"
            >
              <GraduationCap className="w-4 h-4" />
              <span>Apply for Next Cohort</span>
            </button>

            <Link
              to="/courses"
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-[#141414] hover:bg-[#1E1E1E] border border-[#282828] hover:border-[#FF6B00] text-white font-bold text-sm flex items-center justify-center gap-2 cursor-pointer transition-all"
            >
              <span>Explore Courses</span>
              <ArrowRight className="w-4 h-4 text-[#FF6B00]" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. FOOTER */}
      <CmaFooter />
    </div>
  );
};
