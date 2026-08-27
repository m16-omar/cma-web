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
      whileHover={{ scale: 1.03, borderColor: 'rgba(255, 107, 0, 0.7)', backgroundColor: '#141414' }}
      transition={{ duration: 0.2 }}
      className="flex flex-col items-center justify-center p-2.5 sm:p-3 text-center rounded-xl bg-[#0F0F0F] border border-[#222222] min-h-[84px] shadow-sm group cursor-default"
    >
      <div className="text-[#FF6B00] mb-1.5 group-hover:scale-110 transition-transform">
        <Icon className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.8]" />
      </div>
      <span className="text-[10px] sm:text-[11px] leading-tight font-medium text-white/90">
        {pillar.title}
      </span>
    </motion.div>
  );
};
