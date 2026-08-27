import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Users, TrendingUp } from 'lucide-react';
import { StatItem } from '../../data/mockData';

const iconMap: Record<string, React.ElementType> = {
  GraduationCap,
  BookOpen,
  Users,
  TrendingUp,
};

export const StatCard: React.FC<{ stat: StatItem; index: number }> = ({ stat, index }) => {
  const Icon = iconMap[stat.icon] || Users;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="flex items-center gap-4 p-4 lg:p-6"
    >
      {/* Orange circle with icon */}
      <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full border border-[#FF6B00]/40 bg-[#FF6B00]/10 flex items-center justify-center flex-shrink-0 text-[#FF6B00] shadow-[0_0_15px_rgba(255,107,0,0.15)]">
        <Icon className="w-6 h-6" />
      </div>

      <div>
        <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-display tracking-tight leading-none">
          {stat.value}
        </div>
        <div className="text-xs sm:text-sm text-[#A0A0A0] font-normal mt-1">
          {stat.label}
        </div>
      </div>
    </motion.div>
  );
};
