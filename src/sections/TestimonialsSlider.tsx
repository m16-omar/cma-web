import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles, Award } from 'lucide-react';
import { testimonialsData } from '../data/partners';

export const TestimonialsSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  // Auto-play interval
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const current = testimonialsData[currentIndex];

  return (
    <section className="py-20 bg-slate-50/50 dark:bg-[#08090E] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/25 text-xs font-bold text-[#FF6B00] uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>Alumni Impact Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-slate-900 dark:text-white tracking-tight">
            Hear from Our Working Graduates
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            From the academy studio floor to major radio drive shows, commercial voice gigs, and corporate event stages.
          </p>
        </div>

        {/* Carousel Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl bg-white dark:bg-[#131722] border border-slate-200 dark:border-white/10 p-8 sm:p-12 shadow-2xl overflow-hidden min-h-[340px] flex flex-col justify-between">
            {/* Ambient quote icon */}
            <Quote className="absolute -top-4 -right-4 w-40 h-40 text-slate-100 dark:text-white/5 pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
                className="space-y-6 relative z-10"
              >
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#FFA048] fill-current" />
                  ))}
                  <span className="text-xs font-bold text-slate-400 ml-2">
                    Verified Graduate
                  </span>
                </div>

                {/* Quote */}
                <blockquote className="text-base sm:text-xl font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
                  "{current.quote}"
                </blockquote>

                {/* Author Info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-slate-100 dark:border-white/10">
                  <div className="flex items-center gap-3.5">
                    <img
                      src={current.image}
                      alt={current.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-[#FF6B00]"
                    />
                    <div>
                      <div className="font-bold font-display text-slate-900 dark:text-white text-base">
                        {current.name}
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">
                        {current.role} • <strong>{current.company}</strong>
                      </div>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold self-start sm:self-center border border-emerald-500/20">
                    <Award className="w-3.5 h-3.5" />
                    <span>{current.course}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slider Controls */}
            <div className="flex items-center justify-between pt-6 border-t border-slate-100 dark:border-white/5 mt-4 relative z-10">
              <div className="flex items-center gap-1.5">
                {testimonialsData.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    onClick={() => setCurrentIndex(dotIdx)}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      currentIndex === dotIdx
                        ? 'w-7 bg-[#FF6B00]'
                        : 'w-2 bg-slate-300 dark:bg-white/20 hover:bg-slate-400'
                    }`}
                    aria-label={`Go to slide ${dotIdx + 1}`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-700 dark:text-slate-300 transition-colors cursor-pointer"
                  aria-label="Previous Testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-700 dark:text-slate-300 transition-colors cursor-pointer"
                  aria-label="Next Testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
