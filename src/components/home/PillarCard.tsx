import React from 'react';
import { motion } from 'framer-motion';
import {
  Radio,
  Mic2,
  AudioWaveform,
  Speech,
  Share2,
  Presentation,
  TrendingUp,
  Star,
} from 'lucide-react';
import { PillarItem } from '../../data/mockData';

const pillarIconMap: Record<string, React.ElementType> = {
  Radio,
  Mic2,
  AudioWaveform,
  Speech,
  Share2,
  Presentation,
  TrendingUp,
  Star,
};

export const PillarCard: React.FC<{ pillar: PillarItem }> = ({ pillar }) => {
  const Icon = pillarIconMap[pillar.iconName] || Radio;

  return (
    <motion.div
      whileHover={{ scale: 1.04, borderColor: '#FF6B00' }}
      transition={{ duration: 0.2 }}
      className="flex flex-col items-center justify-center p-3 text-center rounded-xl bg-[#0F0F0F] border border-[#222222] min-h-[90px] shadow-sm group cursor-default"
    >
      <div className="text-[#FF6B00] mb-2 group-hover:scale-110 transition-transform">
        <Icon className="w-5 h-5" />
      </div>
      <span className="text-[11px] leading-tight font-medium text-white/90">
        {pillar.title}
      </span>
    </motion.div>
  );
};
