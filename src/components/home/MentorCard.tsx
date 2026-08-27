import React from 'react';
import { motion } from 'framer-motion';
import { MentorItem } from '../../data/mockData';

export const MentorCard: React.FC<{ mentor: MentorItem }> = ({ mentor }) => {
  return (
    <motion.div
      whileHover={{ y: -5, borderColor: 'rgba(255, 107, 0, 0.6)' }}
      transition={{ duration: 0.2 }}
      className="flex flex-col items-center text-center p-3 sm:p-4 rounded-2xl bg-[#0A0A0A] border border-[#1A1A1A] w-full min-w-[120px] shadow-lg group cursor-pointer"
    >
      {/* Circular Avatar with Glowing Orange Ring */}
      <div className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-full p-[2px] mb-3 transition-transform duration-300 group-hover:scale-105">
        <div className="w-full h-full rounded-full overflow-hidden mentor-avatar-ring">
          <img
            src={mentor.avatar}
            alt={mentor.name}
            className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-300"
            loading="lazy"
          />
        </div>
      </div>

      {/* Name */}
      <h4 className="text-xs sm:text-[13px] font-bold text-white leading-tight font-display tracking-tight text-center">
        {mentor.name}
      </h4>

      {/* Role */}
      <p className="text-[10px] sm:text-[11px] font-medium text-[#FF7300] mt-1 text-center leading-tight">
        {mentor.role}
      </p>
    </motion.div>
  );
};
