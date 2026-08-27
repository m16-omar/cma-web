import React from 'react';
import { motion } from 'framer-motion';
import { TestimonialItem } from '../../data/mockData';

export const TestimonialCard: React.FC<{ item: TestimonialItem }> = ({ item }) => {
  return (
    <motion.div
      whileHover={{ y: -4, borderColor: 'rgba(255, 107, 0, 0.5)' }}
      transition={{ duration: 0.2 }}
      className="flex flex-col justify-between p-5 sm:p-6 rounded-2xl bg-[#0A0A0A] border border-[#1A1A1A] shadow-md group h-full"
    >
      <div>
        {/* Large Orange Quote Mark */}
        <div className="text-3xl sm:text-4xl font-serif text-[#FF6B00] leading-none mb-3 font-black select-none">
          “
        </div>

        {/* Quote Text */}
        <p className="text-xs sm:text-[13px] text-[#A0A0A0] leading-relaxed mb-6 font-normal">
          {item.quote}
        </p>
      </div>

      {/* Author & Station Logo Row */}
      <div className="flex items-center justify-between gap-3 pt-4 border-t border-[#181818]">
        <div className="flex items-center gap-2.5 min-w-0">
          <img
            src={item.avatar}
            alt={item.name}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full object-cover border border-[#333333] flex-shrink-0"
            loading="lazy"
          />
          <div className="min-w-0">
            <div className="text-xs font-bold text-white truncate font-display">
              {item.name}
            </div>
            <div className="text-[10px] text-[#888888] truncate">
              {item.role}, {item.station}
            </div>
          </div>
        </div>

        {/* Station Logo / Badge */}
        {item.id === '1' && (
          <div className="w-8 h-8 rounded-full bg-[#FF6B00] text-black font-black text-[8px] flex flex-col items-center justify-center leading-none flex-shrink-0 shadow-sm border border-white/20">
            <span className="font-extrabold text-[7px] text-white">CITY</span>
            <span className="font-black text-[9px] text-black bg-white px-0.5 rounded-[2px]">105.1</span>
          </div>
        )}
        {item.id === '2' && (
          <div className="px-2 py-0.5 rounded-md bg-[#0047AB] text-white font-black text-[9px] flex items-center justify-center tracking-tighter flex-shrink-0 border border-white/10">
            <span className="text-[#FF3B30] mr-0.5">cool</span>96.9
          </div>
        )}
        {item.id === '3' && (
          <div className="px-2 py-0.5 rounded-md bg-[#006633] text-yellow-400 font-black text-[9px] flex items-center justify-center tracking-wider flex-shrink-0 border border-white/10">
            NTA
          </div>
        )}
        {item.id === '4' && (
          <div className="px-1.5 py-0.5 rounded-md bg-[#F5A623] text-black font-black text-[8px] flex items-center justify-center tracking-tighter flex-shrink-0 border border-black">
            MTV base
          </div>
        )}
      </div>
    </motion.div>
  );
};
