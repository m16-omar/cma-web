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
      whileHover={{ scale: 1.04, borderColor: 'rgba(255, 107, 0, 0.7)', backgroundColor: '#161616' }}
      transition={{ duration: 0.2 }}
      className="flex flex-col items-center justify-center p-3 sm:p-4 text-center rounded-xl bg-[#0F0F0F] border border-[#222222] min-h-[98px] sm:min-h-[110px] shadow-sm group cursor-default"
    >
      <div className="text-[#FF6B00] mb-2 group-hover:scale-115 transition-transform">
        <Icon className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.8]" />
      </div>
      <span className="text-[11px] sm:text-xs leading-tight font-bold text-white/95">
        {pillar.title}
      </span>
    </motion.div>
  );
};
