import React from 'react';
import { motion } from 'framer-motion';
import { Users, BookOpen, UserCheck, Award } from 'lucide-react';
import { companyDetails } from '../data/company';

export const StatsSection: React.FC = () => {
  const icons = [Users, BookOpen, UserCheck, Award];

  return (
    <section className="py-12 relative border-y border-slate-200/80 dark:border-white/10 bg-white/60 dark:bg-[#0E1017]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {companyDetails.stats.map((stat, idx) => {
            const Icon = icons[idx % icons.length];

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="flex flex-col items-center text-center p-4 rounded-2xl bg-slate-50/70 dark:bg-white/5 border border-slate-200/60 dark:border-white/5 group hover:border-[#FF6B00]/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-[#FF6B00]/10 text-[#FF6B00] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black font-display text-slate-900 dark:text-white tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 mt-1">
                  {stat.label}
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 max-w-[180px]">
                  {stat.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
