import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { instructorsData } from '../data/instructors';
import { Sparkles, Radio, Award, ArrowRight, ExternalLink } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { useAcademyStore } from '../store/useAcademyStore';

export const InstructorsPage: React.FC = () => {
  const { openWaitlistModal } = useAcademyStore();

  return (
    <>
      <Helmet>
        <title>Faculty & Mentors | City Media Academy</title>
        <meta
          name="description"
          content="Meet the veteran broadcasters, on-air personalities, voiceover artists, and diction coaches leading City Media Academy."
        />
      </Helmet>

      <div className="py-12 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/25 text-xs font-bold text-[#FF6B00] uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>World-Class Faculty</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-slate-900 dark:text-white tracking-tight">
            Learn from Broadcast Masters
          </h1>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Our 8 lead mentors are active industry titans with decades of cumulative experience anchoring prime-time broadcasts, directing multi-million Naira voice commercial campaigns, and coaching corporate leaders.
          </p>
        </div>

        {/* 8 Mentors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {instructorsData.map((inst, idx) => (
            <motion.div
              key={inst.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="rounded-3xl bg-white dark:bg-[#131722] border border-slate-200 dark:border-white/10 overflow-hidden shadow-lg shadow-black/5 dark:shadow-black/30 flex flex-col justify-between hover:border-[#FF6B00]/40 transition-all duration-300 hover:-translate-y-1.5 group"
            >
              <div>
                {/* Photo */}
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-900">
                  <img
                    src={inst.avatar}
                    alt={inst.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#131722] via-transparent to-transparent" />
                  {inst.stationAffiliation && (
                    <div className="absolute bottom-3 left-3 right-3 flex items-center gap-1.5 text-xs font-semibold text-white bg-black/70 backdrop-blur-md px-3 py-1 rounded-xl border border-white/10">
                      <Radio className="w-3.5 h-3.5 text-[#FF6B00]" />
                      <span className="truncate">{inst.stationAffiliation}</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <div>
                    <h3 className="text-lg font-bold font-display text-slate-900 dark:text-white group-hover:text-[#FF6B00] transition-colors">
                      {inst.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#FFA048] mt-0.5">
                      {inst.role}
                    </p>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {inst.bio}
                  </p>

                  {/* Specialties */}
                  <div className="pt-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                      Core Pillars & Specialties:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {inst.specialty.map((spec, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5 text-slate-700 dark:text-slate-300"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-6 pt-0 border-t border-slate-100 dark:border-white/5 mt-4">
                <button
                  onClick={() => openWaitlistModal('broadcast-media-pro-2026')}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-[#FF6B00] text-slate-800 hover:text-white dark:bg-white/5 dark:hover:bg-[#FF6B00] text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Train with {inst.name.split(' ')[0]}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Join Faculty CTA */}
        <div className="mt-16 p-8 rounded-3xl bg-slate-50 dark:bg-[#0E1017] border border-slate-200 dark:border-white/10 text-center space-y-3">
          <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white">
            Want to Join the CMA Mentorship Faculty?
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto">
            Are you an accomplished broadcaster, voice coach, audio engineer, or media executive passionate about training the next generation?
          </p>
          <div className="pt-2">
            <Button href="/admissions" variant="outline" size="sm">
              Contact Faculty Admissions
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
