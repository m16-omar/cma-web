import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { coursesData } from '../data/courses';
import { FormatBadge, CategoryBadge, CertificateBadge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { CurriculumAccordion } from '../components/course/CurriculumAccordion';
import { useAcademyStore } from '../store/useAcademyStore';
import { CourseFormat } from '../types/course';
import {
  Calendar,
  Clock,
  MapPin,
  Award,
  Users,
  Star,
  CheckCircle2,
  Bookmark,
  Share2,
  Radio,
  Monitor,
  Shuffle,
  Play,
  Sparkles,
  BookOpen,
  ArrowRight,
  ShieldAlert,
} from 'lucide-react';

export const CourseDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const course = coursesData.find((c) => c.slug === slug) || coursesData[0];

  const [activeTab, setActiveTab] = useState<'overview' | 'curriculum' | 'instructors' | 'schedule' | 'reviews'>('overview');
  const [selectedFormat, setSelectedFormat] = useState<CourseFormat>('Hybrid');

  const { savedCourseIds, toggleSaveCourse, openWaitlistModal, openPreviewModal, addToast } = useAcademyStore();
  const isSaved = savedCourseIds.includes(course.id);

  const getPriceForFormat = (fmt: CourseFormat) => {
    switch (fmt) {
      case 'Physical':
        return { formatted: '₦180,000', raw: 180000 };
      case 'Online':
        return { formatted: '₦120,000', raw: 120000 };
      case 'Hybrid':
      default:
        return { formatted: '₦220,000', raw: 220000 };
    }
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      addToast('Link Copied!', 'Course URL copied to clipboard', 'info');
    }
  };

  const currentPrice = getPriceForFormat(selectedFormat);

  return (
    <>
      <Helmet>
        <title>{`${course.title} | City Media Academy`}</title>
        <meta name="description" content={course.shortDescription} />
      </Helmet>

      <div className="py-8 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-6">
          <Link to="/" className="hover:text-slate-900 dark:hover:text-white">
            Home
          </Link>
          <span>/</span>
          <Link to="/courses" className="hover:text-slate-900 dark:hover:text-white">
            Courses
          </Link>
          <span>/</span>
          <span className="text-[#FF6B00] font-bold truncate max-w-xs">{course.title}</span>
        </div>

        {/* Top Hero Banner */}
        <div className="rounded-3xl bg-white dark:bg-[#131722] border border-slate-200 dark:border-white/10 p-6 sm:p-10 shadow-xl mb-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6B00]/10 rounded-full blur-[100px] pointer-events-none -z-10" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-2.5">
                <CategoryBadge label={course.category} />
                <FormatBadge format={course.format} />
                <CertificateBadge text="Certificate + 3-Week Internship" />
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-slate-900 dark:text-white tracking-tight leading-tight">
                {course.title}
              </h1>

              <p className="text-base sm:text-lg font-medium text-[#FFA048]">
                {course.tagline}
              </p>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
                {course.description}
              </p>

              {/* Meta pills */}
              <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-600 dark:text-slate-300 pt-2 border-t border-slate-100 dark:border-white/10">
                <div className="flex items-center gap-1.5 font-bold text-[#FF6B00]">
                  <Calendar className="w-4 h-4" />
                  <span>Next Cohort: {course.schedule.startDate}</span>
                </div>

                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-cyan-400" />
                  <span>{course.schedule.dailyHours}</span>
                </div>

                <div className="flex items-center gap-1.5">
                  <Star className="w-4 h-4 text-[#FFA048] fill-current" />
                  <span>
                    <strong>{course.rating.toFixed(2)}</strong> ({course.reviewCount} reviews)
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-emerald-400" />
                  <span>{course.studentsCount.toLocaleString()}+ Enrolled</span>
                </div>
              </div>
            </div>

            {/* Quick Actions in Banner */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end lg:items-end w-full">
              <Button
                variant="primary"
                size="lg"
                icon="arrow-up-right"
                onClick={() => openWaitlistModal(course.id)}
                className="w-full sm:w-auto lg:w-full"
              >
                Join Waitlist for July 2026
              </Button>

              <div className="flex items-center gap-2 w-full sm:w-auto lg:w-full">
                <button
                  onClick={() => toggleSaveCourse(course.id)}
                  className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-bold border transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                    isSaved
                      ? 'bg-[#FF6B00]/15 text-[#FF6B00] border-[#FF6B00]'
                      : 'bg-slate-100 dark:bg-white/5 border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:border-slate-300'
                  }`}
                >
                  <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-current' : ''}`} />
                  <span>{isSaved ? 'Saved in Wishlist' : 'Save Course'}</span>
                </button>

                <button
                  onClick={handleShare}
                  className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
                  title="Share Course"
                >
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Layout (Tabs on Left + Sticky Pricing Sidebar on Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: LMS Tabs */}
          <div className="lg:col-span-8 space-y-6">
            {/* Tabs Navigation */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-200 dark:border-white/10 scrollbar-none">
              {[
                { id: 'overview', label: 'Overview' },
                { id: 'curriculum', label: `Curriculum (${course.pillars.length} Pillars)` },
                { id: 'instructors', label: `Instructors (${course.instructors.length})` },
                { id: 'schedule', label: 'Schedule & Internship' },
                { id: 'reviews', label: `Reviews (${course.reviewCount})` },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                    activeTab === tab.id
                      ? 'bg-[#FF6B00] text-white shadow-md shadow-[#FF6B00]/25'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* TAB 1: OVERVIEW */}
            {activeTab === 'overview' && (
              <div className="space-y-8 animate-fadeIn">
                {/* What You'll Get */}
                <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#131722] border border-slate-200 dark:border-white/10 space-y-4 shadow-sm">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FF6B00]">
                    <Sparkles className="w-4 h-4" />
                    <span>Course Inclusions</span>
                  </div>
                  <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white">
                    What You'll Gain from This Course
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                    {course.whatYouWillGet.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-[#FF6B00] mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Target Audience */}
                <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#131722] border border-slate-200 dark:border-white/10 space-y-4 shadow-sm">
                  <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white">
                    Who Is This Course For?
                  </h3>
                  <div className="space-y-2.5">
                    {course.targetAudience.map((aud, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00]" />
                        <span>{aud}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Prerequisites */}
                <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#131722] border border-slate-200 dark:border-white/10 space-y-4 shadow-sm">
                  <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white">
                    Requirements
                  </h3>
                  <div className="space-y-2.5">
                    {course.requirements.map((req, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                        <span>{req}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: CURRICULUM */}
            {activeTab === 'curriculum' && (
              <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#131722] border border-slate-200 dark:border-white/10 shadow-sm animate-fadeIn">
                <CurriculumAccordion pillars={course.pillars} allowCompletionToggle={false} />
              </div>
            )}

            {/* TAB 3: INSTRUCTORS */}
            {activeTab === 'instructors' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#131722] border border-slate-200 dark:border-white/10 shadow-sm space-y-6">
                  <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white">
                    Your Faculty & Lead Mentors
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {course.instructors.map((inst) => (
                      <div
                        key={inst.id}
                        className="p-4 rounded-2xl bg-slate-50 dark:bg-[#0E1017] border border-slate-200/80 dark:border-white/5 space-y-3"
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={inst.avatar}
                            alt={inst.name}
                            className="w-12 h-12 rounded-full object-cover border-2 border-[#FF6B00]"
                          />
                          <div>
                            <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                              {inst.name}
                            </h4>
                            <p className="text-[11px] text-[#FFA048]">{inst.role}</p>
                          </div>
                        </div>
                        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                          {inst.bio}
                        </p>
                        <div className="text-[11px] text-slate-500 flex items-center gap-1 font-medium">
                          <Radio className="w-3 h-3 text-[#FF6B00]" />
                          <span>{inst.stationAffiliation}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 4: SCHEDULE */}
            {activeTab === 'schedule' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#131722] border border-slate-200 dark:border-white/10 shadow-sm space-y-6">
                  <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white">
                    5-Week Intensive Cohort Breakdown
                  </h3>

                  {/* Schedule Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/20 space-y-2">
                      <div className="text-xs font-bold uppercase tracking-wider text-amber-500">
                        Phase 1: Classes & Studio Drills (Weeks 1 – 2)
                      </div>
                      <h4 className="text-base font-bold text-slate-900 dark:text-white">
                        5 Hours Daily Live Instruction
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        Monday through Friday, 9:00 AM – 2:00 PM. Covers all 8 core pillars with live microphone and camera console drills.
                      </p>
                      <div className="text-xs font-semibold text-amber-600 dark:text-amber-400 pt-1">
                        📍 Studio Campus: Plot 11 Lateef Jakande Road, Ikeja, Lagos
                      </div>
                    </div>

                    <div className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 space-y-2">
                      <div className="text-xs font-bold uppercase tracking-wider text-emerald-500">
                        Phase 2: Live Radio Internship (Weeks 3 – 5)
                      </div>
                      <h4 className="text-base font-bold text-slate-900 dark:text-white">
                        3 Weeks Hands-On Station Placement
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        Co-host live radio programmes, shadow sound engineers, edit news bulletins, and produce real commercial jingles on City 105.1 FM & 93.5 Area FM.
                      </p>
                      <div className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 pt-1">
                        📻 Live On-Air Broadcast Experience
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 text-xs text-slate-600 dark:text-slate-300 space-y-2">
                    <div>
                      <strong>Online LMS Stream:</strong> Live HD audio/video broadcast feed with live chat, break-out rooms, and cloud session recordings available within 2 hours of class conclusion.
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 5: REVIEWS */}
            {activeTab === 'reviews' && (
              <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#131722] border border-slate-200 dark:border-white/10 shadow-sm space-y-6 animate-fadeIn">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-white/10">
                  <div>
                    <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white">
                      Student Reviews & Feedback
                    </h3>
                    <p className="text-xs text-slate-500">
                      Based on {course.reviewCount} verified graduate evaluations
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-3xl font-black text-slate-900 dark:text-white font-display">
                      {course.rating.toFixed(2)}
                    </div>
                    <div className="space-y-0.5">
                      <div className="flex text-[#FFA048]">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-current" />
                        ))}
                      </div>
                      <span className="text-[10px] text-slate-400 font-bold uppercase">
                        Exceptional
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  {course.reviews.map((rev) => (
                    <div
                      key={rev.id}
                      className="p-4 rounded-2xl bg-slate-50 dark:bg-[#0E1017] border border-slate-200/80 dark:border-white/5 space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <img
                            src={rev.avatar}
                            alt={rev.author}
                            className="w-8 h-8 rounded-full object-cover"
                          />
                          <div>
                            <div className="font-bold text-xs text-slate-900 dark:text-white">
                              {rev.author}
                            </div>
                            <div className="text-[10px] text-[#FFA048]">{rev.role}</div>
                          </div>
                        </div>
                        <span className="text-[11px] text-slate-400">{rev.date}</span>
                      </div>
                      <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                        "{rev.comment}"
                      </p>
                      <div className="text-[10px] text-slate-400 font-semibold">
                        Format Taken: {rev.courseFormatTaken}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Sticky Pricing & Enrollment Widget */}
          <div className="lg:col-span-4 sticky top-28 space-y-5">
            <div className="rounded-3xl bg-white dark:bg-[#131722] border border-slate-200 dark:border-white/10 p-6 shadow-2xl space-y-5 overflow-hidden relative">
              {/* Top Video Preview Thumbnail */}
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-900 border border-white/10 group">
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <button
                    onClick={() =>
                      openPreviewModal({
                        id: 'p1-l1',
                        title: 'Anatomy of a Broadcast Studio: Microphones & Consoles',
                        duration: '90 mins',
                        mode: 'Hybrid',
                        isLocked: false,
                        isPreview: true,
                        facilitatorName: 'Shola Thompson',
                        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
                      })
                    }
                    className="w-12 h-12 rounded-full bg-[#FF6B00] text-white flex items-center justify-center shadow-lg shadow-[#FF6B00]/40 hover:scale-110 active:scale-95 transition-all cursor-pointer"
                  >
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </button>
                </div>
                <div className="absolute bottom-2 left-2 right-2 text-center text-[10px] text-white bg-black/70 backdrop-blur-xs py-1 rounded-lg">
                  Click to watch free curriculum preview
                </div>
              </div>

              {/* Format Selection Toggle */}
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                  Select Your Learning Track:
                </label>
                <div className="grid grid-cols-3 gap-1.5 p-1 bg-slate-100 dark:bg-white/5 rounded-2xl border border-slate-200 dark:border-white/10">
                  {(['Physical', 'Online', 'Hybrid'] as CourseFormat[]).map((fmt) => (
                    <button
                      key={fmt}
                      onClick={() => setSelectedFormat(fmt)}
                      className={`py-2 px-2 rounded-xl text-xs font-bold flex flex-col items-center gap-0.5 transition-all cursor-pointer ${
                        selectedFormat === fmt
                          ? 'bg-[#FF6B00] text-white shadow-xs'
                          : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                      }`}
                    >
                      {fmt === 'Physical' && <Radio className="w-3.5 h-3.5" />}
                      {fmt === 'Online' && <Monitor className="w-3.5 h-3.5" />}
                      {fmt === 'Hybrid' && <Shuffle className="w-3.5 h-3.5" />}
                      <span>{fmt}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Display */}
              <div className="space-y-1 pt-2 border-t border-slate-100 dark:border-white/10">
                <div className="text-xs text-slate-500 uppercase font-bold">
                  Tuition ({selectedFormat} Mode)
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black text-slate-900 dark:text-white font-display">
                    {currentPrice.formatted}
                  </span>
                  {course.price.originalPrice && (
                    <span className="text-sm text-slate-400 line-through">
                      ₦{(currentPrice.raw * 1.35).toLocaleString()}
                    </span>
                  )}
                </div>
                <div className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold">
                  ✓ Installment payment plan available upon request
                </div>
              </div>

              {/* Primary Enrollment CTA */}
              <Button
                variant="primary"
                size="lg"
                className="w-full text-center"
                icon="arrow-up-right"
                onClick={() => openWaitlistModal(course.id)}
              >
                Join Waitlist for July 2026
              </Button>

              {/* Inclusions Checklist */}
              <div className="space-y-2.5 pt-3 border-t border-slate-100 dark:border-white/10 text-xs text-slate-600 dark:text-slate-300">
                <div className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider mb-2">
                  What's Included:
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6B00] flex-shrink-0" />
                  <span>2 Weeks 5-Hour Daily Studio Classes</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>3 Weeks Guaranteed Live Radio Internship</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6B00] flex-shrink-0" />
                  <span>Personal Broadcast Demo Reel Produced</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6B00] flex-shrink-0" />
                  <span>Verified CMA Certificate of Competency</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6B00] flex-shrink-0" />
                  <span>1-on-1 Mentorship with On-Air Hosts</span>
                </div>
              </div>

              {/* Campus Studio Address Box */}
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-[#0E1017] border border-slate-200 dark:border-white/10 text-[11px] text-slate-500 space-y-1">
                <div className="font-bold text-slate-800 dark:text-slate-200">
                  📍 Physical Campus Studio
                </div>
                <div>Plot 11 Lateef Jakande Road, Agidingbi, Ikeja, Lagos (City 105.1 FM)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
