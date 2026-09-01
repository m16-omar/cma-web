import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Radio, ExternalLink } from 'lucide-react';
import { instructorsData } from '../data/instructors';

export const InstructorsSection: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-[#0E1017] border-b border-slate-200/80 dark:border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/25 text-xs font-bold text-[#FF6B00] uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Broadcast Pioneers & Facilitators</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-slate-900 dark:text-white tracking-tight">
              Learn from the Voices You Listen to Daily
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Our faculty comprises veteran broadcasters, diction coaches, and media strategists actively steering prime-time radio, voiceover campaigns, and television productions.
            </p>
          </div>

          <Link
            to="/instructors"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#FF6B00] hover:underline self-start md:self-end flex-shrink-0"
          >
            <span>View All 8 Faculty Profiles</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 8 Mentors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {instructorsData.map((inst, idx) => (
            <motion.div
              key={inst.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group rounded-3xl bg-slate-50 dark:bg-[#131722] border border-slate-200/80 dark:border-white/10 overflow-hidden shadow-sm hover:border-[#FF6B00]/40 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Photo */}
              <div className="relative aspect-square overflow-hidden bg-slate-900">
                <img
                  src={inst.avatar}
                  alt={inst.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                {/* Role pill on photo */}
                <div className="absolute bottom-3 left-3 right-3 text-xs text-white">
                  <div className="text-sm font-bold font-display">{inst.name}</div>
                  <div className="text-[11px] text-[#FFA048] font-medium truncate">
                    {inst.role}
                  </div>
                </div>
              </div>

              {/* Bio & Specialty */}
              <div className="p-4 space-y-3">
                <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                  {inst.bio}
                </p>

                {/* Specialties */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {inst.specialty.slice(0, 2).map((spec, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 text-slate-700 dark:text-slate-300"
                    >
                      {spec}
                    </span>
                  ))}
                </div>

                {inst.stationAffiliation && (
                  <div className="pt-2 border-t border-slate-200/60 dark:border-white/5 text-[11px] text-slate-500 flex items-center gap-1.5 truncate">
                    <Radio className="w-3 h-3 text-[#FF6B00] flex-shrink-0" />
                    <span className="truncate">{inst.stationAffiliation}</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
