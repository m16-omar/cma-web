import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Calendar,
  Clock,
  MapPin,
  Award,
  ArrowRight,
  Radio,
  CheckCircle2,
  BookOpen,
} from 'lucide-react';
import { coursesData } from '../data/courses';
import { FormatBadge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { useAcademyStore } from '../store/useAcademyStore';

export const FeaturedCourseSpotlight: React.FC = () => {
  const featuredCourse = coursesData[0]; // Broadcast Media Pro Course 2026
  const { openWaitlistModal } = useAcademyStore();

  const pillarsList = [
    { num: 1, title: 'Radio & TV Presentation', desc: 'Mic technique, studio consoles, clock programming' },
    { num: 2, title: 'Interview & Show Preparation', desc: 'Deep research, questioning, live phone-ins' },
    { num: 3, title: 'Voiceover & Audio Production', desc: 'Commercial adverts, home studio setup, DAW' },
    { num: 4, title: 'Diction & Speech Training', desc: 'IPA phonetics, vowel purity, accent refinement' },
    { num: 5, title: 'Social Media Management', desc: 'Viral clip repurposing, audience monetization' },
    { num: 6, title: 'Event Hosting & Public Speaking', desc: 'Stage presence, MC protocols, room control' },
    { num: 7, title: 'Media Marketing', desc: 'Pitching to station managers, syndication' },
    { num: 8, title: 'Personal Branding', desc: 'Media kits, EPK, talent contracts & sponsorships' },
  ];

  return (
    <section className="py-20 bg-[#F8F9FC] dark:bg-[#08090E] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/25 text-xs font-bold text-[#FF6B00] uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>Flagship Academy Programme</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-slate-900 dark:text-white tracking-tight">
            Broadcast Media Pro Course 2026
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {featuredCourse.description}
          </p>
        </div>

        {/* Big Spotlight Card */}
        <div className="rounded-3xl bg-white dark:bg-[#131722] border border-slate-200 dark:border-white/10 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* Ambient Corner Glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#FF6B00]/15 rounded-full blur-[100px] pointer-events-none" />

          {/* Top Info Strip */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-white/10">
            <div className="flex flex-wrap items-center gap-3">
              <FormatBadge format="Hybrid" size="md" />
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
                5-Week Intensive Cohort
              </span>
              <span className="text-xs font-bold text-[#FF6B00] bg-[#FF6B00]/10 px-3 py-1 rounded-full border border-[#FF6B00]/20">
                Starts July 06, 2026
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-300">
              <MapPin className="w-4 h-4 text-[#FF6B00]" />
              <span>Plot 11 Lateef Jakande Road, Ikeja, Lagos + Online LMS</span>
            </div>
          </div>

          {/* 8 Pillars Grid */}
          <div className="mt-8 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg sm:text-xl font-bold font-display text-slate-900 dark:text-white">
                8 Comprehensive Learning Pillars
              </h3>
              <Link
                to="/courses/broadcast-media-pro-2026"
                className="text-xs text-[#FF6B00] font-bold hover:underline flex items-center gap-1"
              >
                <span>View Full Syllabus</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {pillarsList.map((p) => (
                <div
                  key={p.num}
                  className="p-4 rounded-2xl bg-slate-50 dark:bg-[#0E1017] border border-slate-200/80 dark:border-white/5 hover:border-[#FF6B00]/30 transition-colors space-y-1.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-black font-display text-[#FF6B00] bg-[#FF6B00]/10 px-2 py-0.5 rounded-md">
                      Pillar 0{p.num}
                    </span>
                    <Radio className="w-3.5 h-3.5 text-slate-400" />
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                    {p.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-2">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Internship & Schedule Highlight Box */}
          <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-amber-500/10 via-[#FF6B00]/10 to-transparent border border-[#FF6B00]/25 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-bold text-[#FF6B00] uppercase">
                <Clock className="w-4 h-4" />
                <span>Schedule Structure</span>
              </div>
              <p className="text-sm font-bold text-slate-900 dark:text-white">
                5 hours daily classes for 2 weeks
              </p>
              <p className="text-xs text-slate-500">9:00 AM – 2:00 PM Daily</p>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-500 uppercase">
                <Award className="w-4 h-4" />
                <span>Guaranteed Internship</span>
              </div>
              <p className="text-sm font-bold text-slate-900 dark:text-white">
                3 weeks live station internship
              </p>
              <p className="text-xs text-slate-500">At City 105.1 FM / 93.5 Area FM</p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch md:items-center justify-end gap-3">
              <Button
                variant="primary"
                size="md"
                icon="arrow-up-right"
                onClick={() => openWaitlistModal('broadcast-media-pro-2026')}
              >
                Join Waitlist
              </Button>
              <Button
                href="/courses/broadcast-media-pro-2026"
                variant="outline"
                size="md"
              >
                Course Details
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
