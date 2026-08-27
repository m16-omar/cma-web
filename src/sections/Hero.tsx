import React from 'react';
import { motion } from 'framer-motion';
import {
  Calendar,
  Clock,
  Radio,
  Monitor,
  Sparkles,
  ArrowRight,
  ShieldAlert,
  Play,
  Award,
  Users,
  CheckCircle2,
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { useAcademyStore } from '../store/useAcademyStore';

export const Hero: React.FC = () => {
  const { openWaitlistModal, openPreviewModal } = useAcademyStore();

  const handleSampleVideo = () => {
    openPreviewModal({
      id: 'p1-l1',
      title: 'Anatomy of a Broadcast Studio: Microphones & Consoles',
      duration: '90 mins',
      mode: 'Hybrid',
      isLocked: false,
      isPreview: true,
      facilitatorName: 'Shola Thompson',
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    });
  };

  return (
    <section className="relative pt-6 pb-20 lg:pt-12 lg:pb-28 overflow-hidden">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#FF6B00]/15 dark:bg-[#FF6B00]/20 rounded-full blur-[160px] pointer-events-none -z-10 animate-orange-glow" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-[#FFA048]/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Info Notification Bar requested by user */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto mb-8 p-1.5 sm:p-2 rounded-2xl bg-gradient-to-r from-amber-500/20 via-[#FF6B00]/20 to-amber-500/20 border border-[#FF6B00]/30 backdrop-blur-md shadow-lg shadow-[#FF6B00]/5 text-center"
        >
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-semibold text-slate-900 dark:text-white px-3 py-1">
            <span className="flex items-center gap-1.5 text-[#FF6B00] font-bold">
              <Calendar className="w-4 h-4" />
              <span>📅 Class Starts: July 06, 2026</span>
            </span>
            <span className="text-slate-400 hidden sm:inline">•</span>
            <span className="flex items-center gap-1.5 text-slate-700 dark:text-slate-200">
              <Clock className="w-4 h-4 text-cyan-400" />
              <span>⏰ 9am – 2pm Daily</span>
            </span>
            <span className="text-slate-400 hidden sm:inline">•</span>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-600 dark:text-rose-400 text-[11px] font-bold border border-rose-500/30">
              <ShieldAlert className="w-3 h-3" />
              <span>Registration Closed (Waitlist Open)</span>
            </span>
          </div>
        </motion.div>

        {/* Hero Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Content Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Superbadge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-200/80 dark:bg-white/5 border border-slate-300/80 dark:border-white/10 text-xs font-semibold text-slate-800 dark:text-slate-200 shadow-sm">
              <div className="w-2 h-2 rounded-full bg-[#FF6B00] animate-ping" />
              <span>Nurturing the Next Generation of Media Leaders</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-slate-900 dark:text-white leading-[1.08]">
              Learn{' '}
              <span className="bg-gradient-to-r from-[#FF6B00] via-[#FFA048] to-[#FF8833] bg-clip-text text-transparent">
                Broadcasting,
              </span>{' '}
              Media & Content Creation
            </h1>

            {/* Subheadline requested by user */}
            <p className="text-lg sm:text-xl font-medium text-[#FF6B00] dark:text-[#FFA048]">
              5-Week Intensive Programme. Broadcast Media Pro Course 2026
            </p>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Master the art of on-air radio presentation, voiceovers, television hosting, digital content monetization, and diction under veteran media personalities. Includes <strong>5 hours daily practical classes</strong> and a <strong>3-week guaranteed internship at City 105.1 FM</strong>.
            </p>

            {/* Dual Mode Feature Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-1">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/25 text-amber-600 dark:text-amber-400 text-xs font-bold">
                <Radio className="w-3.5 h-3.5 text-amber-500" />
                <span>Physical: Ikeja Studio Campus</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-500/10 border border-cyan-500/25 text-cyan-600 dark:text-cyan-400 text-xs font-bold">
                <Monitor className="w-3.5 h-3.5 text-cyan-400" />
                <span>Online: Live Interactive LMS</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-600 dark:text-emerald-400 text-xs font-bold">
                <Award className="w-3.5 h-3.5 text-emerald-500" />
                <span>City FM Internship Guaranteed</span>
              </div>
            </div>

            {/* Hero CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-3">
              <Button
                href="/courses"
                variant="secondary"
                size="lg"
                icon="arrow-right"
                className="w-full sm:w-auto"
              >
                Browse Courses
              </Button>

              <Button
                variant="primary"
                size="lg"
                icon="arrow-up-right"
                onClick={() => openWaitlistModal('broadcast-media-pro-2026')}
                className="w-full sm:w-auto"
              >
                Join Waitlist
              </Button>

              <button
                onClick={handleSampleVideo}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-slate-300 dark:border-white/10 text-xs font-bold text-slate-800 dark:text-slate-200 transition-all cursor-pointer"
              >
                <Play className="w-4 h-4 text-[#FF6B00] fill-current" />
                <span>Watch Studio Tour</span>
              </button>
            </div>

            {/* Social Proof Avatars */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-4 text-xs text-slate-500">
              <div className="flex items-center -space-x-2">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop"
                  alt="Graduate"
                  className="w-8 h-8 rounded-full object-cover border-2 border-white dark:border-[#08090E]"
                />
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop"
                  alt="Graduate"
                  className="w-8 h-8 rounded-full object-cover border-2 border-white dark:border-[#08090E]"
                />
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop"
                  alt="Graduate"
                  className="w-8 h-8 rounded-full object-cover border-2 border-white dark:border-[#08090E]"
                />
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop"
                  alt="Graduate"
                  className="w-8 h-8 rounded-full object-cover border-2 border-white dark:border-[#08090E]"
                />
              </div>
              <div>
                <strong className="text-slate-900 dark:text-white font-bold">5,000+ Alumni</strong>{' '}
                broadcasting across City FM, Channels TV, Soundcity & Beat FM
              </div>
            </div>
          </motion.div>

          {/* Right Visual Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-3xl p-1 bg-gradient-to-b from-[#FF6B00]/40 via-white/10 to-[#FF6B00]/10 shadow-2xl">
              <div className="rounded-[22px] overflow-hidden bg-[#131722] border border-white/10">
                {/* Main Studio Image */}
                <div className="relative aspect-[4/3] overflow-hidden group">
                  <img
                    src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=1000&auto=format&fit=crop"
                    alt="City Media Academy Studio"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#131722] via-transparent to-black/40" />

                  {/* Top Live On Air Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-xs font-bold text-white">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
                    <span>ON AIR • STUDIO A</span>
                  </div>

                  {/* Play Sample Button Overlay */}
                  <button
                    onClick={handleSampleVideo}
                    className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-[#FF6B00] text-white flex items-center justify-center shadow-xl shadow-[#FF6B00]/40 hover:scale-110 active:scale-95 transition-all cursor-pointer"
                    aria-label="Play Studio Tour"
                  >
                    <Play className="w-6 h-6 fill-current ml-1" />
                  </button>

                  {/* Bottom Studio Location Pill */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                    <div className="bg-black/70 backdrop-blur-md px-3 py-1 rounded-xl border border-white/10">
                      City 105.1 FM Broadcast Complex, Ikeja
                    </div>
                    <div className="bg-[#FF6B00] px-2.5 py-1 rounded-xl font-bold">
                      Cohort 2026
                    </div>
                  </div>
                </div>

                {/* Card Bottom Highlights */}
                <div className="p-5 space-y-3.5">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-white text-base">
                        Broadcast Media Pro 2026
                      </h4>
                      <p className="text-xs text-slate-400">
                        8 Pillars • 75 Practical Studio Hours
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-slate-400 uppercase font-bold">Tuition</div>
                      <div className="text-lg font-black text-[#FFA048]">₦180,000</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs text-slate-300">
                    <div className="flex items-center gap-1.5 bg-white/5 p-2 rounded-xl border border-white/5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6B00]" />
                      <span>2 Weeks Intensive</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-white/5 p-2 rounded-xl border border-white/5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>3 Weeks Internship</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
