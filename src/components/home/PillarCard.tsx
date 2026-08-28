import React from 'react';
import { motion } from 'framer-motion';
import {
  Radio,
  Mic2,
  AudioWaveform,
  Languages,
  Share2,
  Presentation,
  TrendingUp,
  UserCheck,
} from 'lucide-react';
import { PillarItem } from '../../data/mockData';

const pillarIconMap: Record<string, React.ElementType> = {
  Radio,
  Mic2,
  AudioWaveform,
  Speech: Languages,
  Languages,
  Share2,
  Presentation,
  TrendingUp,
  Star: UserCheck,
  UserCheck,
};

export const PillarCard: React.FC<{ pillar: PillarItem }> = ({ pillar }) => {
  const Icon = pillarIconMap[pillar.iconName] || Radio;

  return (
    <motion.div
      whileHover={{ y: -3, borderColor: '#FF6B00', backgroundColor: '#181818' }}
      transition={{ duration: 0.2 }}
      className="flex items-center gap-3 p-3.5 sm:p-4 rounded-2xl bg-[#121212] border border-[#262626] shadow-md group cursor-pointer transition-all duration-300"
    >
      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#FF6B00]/15 border border-[#FF6B00]/30 text-[#FF6B00] flex items-center justify-center flex-shrink-0 group-hover:bg-[#FF6B00] group-hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(255,107,0,0.2)]">
        <Icon className="w-5 h-5 stroke-[2]" />
      </div>
      <span className="text-xs sm:text-[13px] font-extrabold text-white leading-snug tracking-tight group-hover:text-[#FF6B00] transition-colors">
        {pillar.title}
      </span>
    </motion.div>
  );
};
