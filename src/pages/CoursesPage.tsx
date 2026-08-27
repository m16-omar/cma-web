import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Search,
  Languages,
  Award,
  Grid,
  List,
  MapPin,
  Wifi,
  Monitor,
  Check,
  RotateCcw,
  ChevronDown,
  HelpCircle,
  MessageSquare,
  ChevronRight,
} from 'lucide-react';
import { replicaCoursesData, ReplicaCourse } from '../data/replicaCourses';
import { CourseCard } from '../components/course/CourseCard';
import { CmaFooter } from '../components/ui/CmaFooter';
import { CmaNavbar } from '../components/ui/CmaNavbar';
import { useAcademyStore } from '../store/useAcademyStore';

export const CoursesPage: React.FC = () => {
  const { openWaitlistModal } = useAcademyStore();

  // Filters State
  const [selectedFormat, setSelectedFormat] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [sortBy, setSortBy] = useState<string>('Most Popular');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'All Categories',
    'Broadcasting',
    'Voiceover',
    'Public Speaking',
    'Digital Media',
    'Content Creation',
    'Marketing',
  ];

  const handleClearFilters = () => {
    setSelectedFormat('All');
    setSelectedCategory('All');
    setSearchQuery('');
    setCurrentPage(1);
  };

  // Filter and sort courses
  const filteredCourses = useMemo(() => {
    return replicaCoursesData.filter((course) => {
      // Format filter
      if (selectedFormat !== 'All' && course.format !== selectedFormat) {
        return false;
      }
      // Category filter
      if (
        selectedCategory !== 'All' &&
        selectedCategory !== 'All Categories' &&
        course.category !== selectedCategory
      ) {
        return false;
      }
      // Search query
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchTitle = course.title.toLowerCase().includes(query);
        const matchDesc = course.description.toLowerCase().includes(query);
        const matchCat = course.category.toLowerCase().includes(query);
        if (!matchTitle && !matchDesc && !matchCat) return false;
      }
      return true;
    });
  }, [selectedFormat, selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#FF6B00] selection:text-white">
      <Helmet>
        <title>All Courses | City Media Academy</title>
        <meta
          name="description"
          content="Explore our industry-focused courses designed to transform you from a novice into a professional broadcaster, speaker or creator."
        />
      </Helmet>

      {/* 1. TOP NAVBAR - Matching reference */}
      <CmaNavbar />

      {/* 2. HERO / PAGE TITLE BANNER */}
      <section className="relative pt-10 pb-12 lg:pt-14 lg:pb-16 overflow-hidden border-b border-[#1A1A1A]">
        {/* Background dark studio mixer console */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2000&auto=format&fit=crop"
            alt="Studio Background"
            className="w-full h-full object-cover opacity-20 filter brightness-50 contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            {/* Left Title & Subtitle */}
            <div className="space-y-3 max-w-xl">
              <h1 className="text-4xl sm:text-5xl font-black font-display text-white tracking-tight">
                All Courses
              </h1>
              <p className="text-xs sm:text-sm text-[#A0A0A0] leading-relaxed font-normal">
                Explore our industry-focused courses designed to transform you from a novice into a professional broadcaster, speaker or creator.
              </p>
            </div>

            {/* Right 2 Feature Cards */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-4">
              {/* Feature 1: Hybrid Learning */}
              <div className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-[#0A0A0A]/90 border border-[#1A1A1A] backdrop-blur-md min-w-[210px] shadow-md">
                <div className="text-[#FF6B00] p-2 rounded-xl bg-[#FF6B00]/10 border border-[#FF6B00]/20 flex items-center justify-center">
                  <Languages className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white font-display">
                    Hybrid Learning
                  </h4>
                  <p className="text-[10px] sm:text-[11px] text-[#A0A0A0] mt-0.5 leading-tight">
                    Physical at Ikeja + Online Access
                  </p>
                </div>
              </div>

              {/* Feature 2: Industry Certified */}
              <div className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-[#0A0A0A]/90 border border-[#1A1A1A] backdrop-blur-md min-w-[210px] shadow-md">
                <div className="text-[#FF6B00] p-2 rounded-xl bg-[#FF6B00]/10 border border-[#FF6B00]/20 flex items-center justify-center">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white font-display">
                    Industry Certified
                  </h4>
                  <p className="text-[10px] sm:text-[11px] text-[#A0A0A0] mt-0.5 leading-tight">
                    Get recognized with practical skills
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MAIN CATALOG BODY (2 Columns: Left Filter Sidebar + Right Courses Grid) */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT SIDEBAR FILTERS (col-span-3) */}
          <aside className="lg:col-span-3 space-y-6">
            <div className="rounded-2xl bg-[#0A0A0A] border border-[#1A1A1A] p-5 space-y-6 shadow-xl">
              {/* Filter by Format */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold text-[#FF6B00] tracking-wider uppercase">
                  Filter by Format
                </h3>

                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedFormat('All')}
                    className={`w-full flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      selectedFormat === 'All'
                        ? 'bg-[#FF6B00] text-white shadow-md'
                        : 'bg-[#0F0F0F] border border-[#1A1A1A] text-[#A0A0A0] hover:text-white'
                    }`}
                  >
                    <Grid className="w-4 h-4" />
                    <span>All Formats</span>
                  </button>

                  <button
                    onClick={() => setSelectedFormat('Physical')}
                    className={`w-full flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                      selectedFormat === 'Physical'
                        ? 'bg-[#FF6B00] text-white font-bold shadow-md'
                        : 'bg-[#0F0F0F] border border-[#1A1A1A] text-[#A0A0A0] hover:text-white'
                    }`}
                  >
                    <MapPin className="w-4 h-4 text-[#FF6B00]" />
                    <span>Physical</span>
                  </button>

                  <button
                    onClick={() => setSelectedFormat('Online')}
                    className={`w-full flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                      selectedFormat === 'Online'
                        ? 'bg-[#FF6B00] text-white font-bold shadow-md'
                        : 'bg-[#0F0F0F] border border-[#1A1A1A] text-[#A0A0A0] hover:text-white'
                    }`}
                  >
                    <Wifi className="w-4 h-4 text-[#FF6B00]" />
                    <span>Online</span>
                  </button>

                  <button
                    onClick={() => setSelectedFormat('Hybrid')}
                    className={`w-full flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                      selectedFormat === 'Hybrid'
                        ? 'bg-[#FF6B00] text-white font-bold shadow-md'
                        : 'bg-[#0F0F0F] border border-[#1A1A1A] text-[#A0A0A0] hover:text-white'
                    }`}
                  >
                    <Monitor className="w-4 h-4 text-[#FF6B00]" />
                    <span>Hybrid</span>
                  </button>
                </div>
              </div>

              {/* Course Category */}
              <div className="space-y-3 pt-4 border-t border-[#1A1A1A]">
                <h3 className="text-xs font-bold text-[#FF6B00] tracking-wider uppercase">
                  Course Category
                </h3>

                <div className="space-y-2.5">
                  {categories.map((cat) => {
                    const isChecked =
                      selectedCategory === cat ||
                      (cat === 'All Categories' && selectedCategory === 'All');

                    return (
                      <label
                        key={cat}
                        onClick={() => setSelectedCategory(cat === 'All Categories' ? 'All' : cat)}
                        className="flex items-center gap-2.5 text-xs text-[#A0A0A0] hover:text-white cursor-pointer select-none py-0.5"
                      >
                        <div
                          className={`w-4 h-4 rounded-[4px] border flex items-center justify-center transition-colors ${
                            isChecked
                              ? 'bg-[#FF6B00] border-[#FF6B00] text-white'
                              : 'bg-[#0E0E0E] border-[#2A2A2A]'
                          }`}
                        >
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <span className={isChecked ? 'text-white font-semibold' : ''}>{cat}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Clear Filters Button */}
              <div className="pt-2">
                <button
                  onClick={handleClearFilters}
                  className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-[#0F0F0F] border border-[#1A1A1A] hover:border-[#FF6B00]/40 text-[#A0A0A0] hover:text-white text-xs font-medium transition-all cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Clear Filters</span>
                </button>
              </div>
            </div>
          </aside>

          {/* RIGHT COURSE GRID (col-span-9) */}
          <div className="lg:col-span-9 space-y-6">
            {/* Top Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-2">
              <span className="text-xs sm:text-sm text-[#A0A0A0] font-medium">
                Showing {filteredCourses.length} courses
              </span>

              <div className="flex items-center gap-3">
                {/* Sort Dropdown */}
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-[#0A0A0A] border border-[#1A1A1A] rounded-xl px-3.5 py-2 pr-8 text-xs text-white focus:outline-none focus:border-[#FF6B00] cursor-pointer"
                  >
                    <option value="Most Popular">Sort by: Most Popular</option>
                    <option value="Newest">Sort by: Newest</option>
                    <option value="Duration">Sort by: Duration</option>
                  </select>
                  <ChevronDown className="w-3.5 h-3.5 text-[#A0A0A0] absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>

                {/* View Mode Switcher */}
                <div className="flex items-center gap-1 bg-[#0A0A0A] border border-[#1A1A1A] p-1 rounded-xl">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                      viewMode === 'grid'
                        ? 'bg-[#FF6B00] text-white shadow-xs'
                        : 'text-[#A0A0A0] hover:text-white'
                    }`}
                    aria-label="Grid View"
                  >
                    <Grid className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                      viewMode === 'list'
                        ? 'bg-[#FF6B00] text-white shadow-xs'
                        : 'text-[#A0A0A0] hover:text-white'
                    }`}
                    aria-label="List View"
                  >
                    <List className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* 4-Column Course Cards Grid */}
            {filteredCourses.length > 0 ? (
              <div
                className={
                  viewMode === 'grid'
                    ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'
                    : 'space-y-4'
                }
              >
                {filteredCourses.map((course, idx) => (
                  <CourseCard key={course.id} course={course} index={idx} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 px-4 rounded-2xl bg-[#0A0A0A] border border-[#1A1A1A] space-y-4">
                <p className="text-sm text-[#A0A0A0]">No courses match your selected filters.</p>
                <button
                  onClick={handleClearFilters}
                  className="px-4 py-2 rounded-xl bg-[#FF6B00] text-white text-xs font-bold cursor-pointer"
                >
                  Reset Filters
                </button>
              </div>
            )}

            {/* Pagination Row */}
            <div className="flex items-center justify-center gap-2 pt-8 pb-4">
              <button
                onClick={() => setCurrentPage(1)}
                className={`w-8 h-8 rounded-lg text-xs font-bold flex items-center justify-center transition-colors cursor-pointer ${
                  currentPage === 1
                    ? 'bg-[#FF6B00] text-white shadow-sm'
                    : 'bg-[#0A0A0A] border border-[#1A1A1A] text-[#A0A0A0] hover:text-white'
                }`}
              >
                1
              </button>
              <button
                onClick={() => setCurrentPage(2)}
                className={`w-8 h-8 rounded-lg text-xs font-bold flex items-center justify-center transition-colors cursor-pointer ${
                  currentPage === 2
                    ? 'bg-[#FF6B00] text-white shadow-sm'
                    : 'bg-[#0A0A0A] border border-[#1A1A1A] text-[#A0A0A0] hover:text-white'
                }`}
              >
                2
              </button>
              <button
                onClick={() => setCurrentPage(2)}
                className="w-8 h-8 rounded-lg bg-[#0A0A0A] border border-[#1A1A1A] text-[#A0A0A0] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Next Page"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 4. BOTTOM ADVISORY GUIDANCE BANNER */}
        <section className="mt-16">
          <div className="rounded-2xl bg-[#0A0A0A] border border-[#1A1A1A] p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-xl">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border border-[#FF6B00]/40 bg-[#FF6B00]/10 flex items-center justify-center flex-shrink-0 text-[#FF6B00] shadow-[0_0_15px_rgba(255,107,0,0.2)]">
                <HelpCircle className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm sm:text-base font-bold text-white font-display">
                  Not sure which course is right for you?
                </h3>
                <p className="text-xs sm:text-sm text-[#A0A0A0]">
                  Chat with our academic advisor for personalized guidance.
                </p>
              </div>
            </div>

            <button
              onClick={() => openWaitlistModal('broadcast-media-pro-2026')}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-[#FF6B00] bg-transparent hover:bg-[#FF6B00] text-[#FF6B00] hover:text-white text-xs font-bold transition-all duration-200 cursor-pointer flex-shrink-0 shadow-sm"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Get Guidance</span>
            </button>
          </div>
        </section>
      </main>

      {/* 5. FOOTER */}
      <CmaFooter />
    </div>
  );
};
