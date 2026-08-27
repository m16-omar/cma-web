import React from 'react';
import { motion } from 'framer-motion';
import { TestimonialItem } from '../../data/mockData';

export const TestimonialCard: React.FC<{ item: TestimonialItem }> = ({ item }) => {
  return (
    <motion.div
      whileHover={{ y: -4, borderColor: '#FF6B00', scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="flex flex-col justify-between p-6 rounded-2xl bg-[#0A0A0A] border border-[#1A1A1A] shadow-md group"
    >
      <div>
        {/* Orange Quote Mark */}
        <div className="text-3xl sm:text-4xl font-serif text-[#FF6B00] leading-none mb-3 font-bold">
          “
        </div>

        {/* Quote Text */}
        <p className="text-xs sm:text-sm text-[#A0A0A0] leading-relaxed mb-6 font-normal">
          {item.quote}
        </p>
      </div>

      {/* Author & Station Row */}
      <div className="flex items-center justify-between gap-3 pt-4 border-t border-[#1A1A1A]">
        <div className="flex items-center gap-2.5 min-w-0">
          <img
            src={item.avatar}
            alt={item.name}
            className="w-9 h-9 rounded-full object-cover border border-[#333333] flex-shrink-0"
          />
          <div className="min-w-0">
            <div className="text-xs font-bold text-white truncate font-display">
              {item.name}
            </div>
            <div className="text-[10px] text-[#A0A0A0] truncate">
              {item.role}, {item.station}
            </div>
          </div>
        </div>

        {/* Station Logo Badge */}
        {item.stationLogoText && (
          <div
            className="px-2 py-1 rounded-md text-[9px] font-black uppercase tracking-wider text-white flex-shrink-0 border border-white/10"
            style={{ backgroundColor: item.stationBadgeBg || '#FF6B00' }}
          >
            {item.stationLogoText}
          </div>
        )}
      </div>
    </motion.div>
  );
};
