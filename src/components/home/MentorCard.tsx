import React from 'react';
import { motion } from 'framer-motion';
import { MentorItem } from '../../data/mockData';

export const MentorCard: React.FC<{ mentor: MentorItem }> = ({ mentor }) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="flex flex-col items-center text-center p-6 sm:p-7 rounded-3xl bg-[#0A0A0A] border border-[#1A1A1A] hover:border-[#FF6B00]/40 transition-all duration-300 w-full shrink-0 shadow-xl group cursor-pointer"
    >
      {/* Large Circular Portrait with Warm Copper/Orange Border Ring */}
      <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-44 lg:h-44 rounded-full p-[3px] mb-5 transition-transform duration-300 group-hover:scale-105">
        <div className="w-full h-full rounded-full overflow-hidden border-[3px] border-[#a8521c] shadow-[0_0_30px_rgba(255,107,0,0.2)] bg-black/50">
          <img
            src={mentor.avatar}
            alt={mentor.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
            loading="lazy"
          />
        </div>
      </div>

      {/* Name */}
      <h4 className="text-base sm:text-lg lg:text-xl font-extrabold text-white leading-tight font-display tracking-tight text-center group-hover:text-[#FF6B00] transition-colors">
        {mentor.name}
      </h4>

      {/* Role */}
      <p className="text-xs sm:text-sm lg:text-[15px] font-semibold text-[#FF6B00] mt-1.5 text-center leading-tight">
        {mentor.role}
      </p>
    </motion.div>
  );
};

