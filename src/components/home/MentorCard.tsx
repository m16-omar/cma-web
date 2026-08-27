import React from 'react';
import { motion } from 'framer-motion';
import { MentorItem } from '../../data/mockData';

export const MentorCard: React.FC<{ mentor: MentorItem }> = ({ mentor }) => {
  return (
    <motion.div
      whileHover={{ y: -4, borderColor: '#FF6B00', scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="flex flex-col items-center text-center p-4 rounded-2xl bg-[#0A0A0A] border border-[#1A1A1A] w-[130px] sm:w-[140px] flex-shrink-0 shadow-md group"
    >
      {/* Circular Avatar with glowing border */}
      <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full p-[2px] bg-gradient-to-b from-[#FF6B00]/70 to-[#FF6B00]/10 mb-3 shadow-[0_0_12px_rgba(255,107,0,0.2)] group-hover:shadow-[0_0_20px_rgba(255,107,0,0.4)] transition-all">
        <img
          src={mentor.avatar}
          alt={mentor.name}
          className="w-full h-full rounded-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all"
          loading="lazy"
        />
      </div>

      <h4 className="text-xs sm:text-sm font-bold text-white leading-tight font-display">
        {mentor.name}
      </h4>

      <p className="text-[10px] sm:text-[11px] font-medium text-[#FFA048] mt-1 line-clamp-2">
        {mentor.role}
      </p>
    </motion.div>
  );
};
