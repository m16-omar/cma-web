import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Calendar,
  MapPin,
  Wifi,
  Monitor,
  Radio,
  Mic2,
  AudioWaveform,
  Languages,
  Share2,
  UserCheck,
  Headphones,
  TrendingUp,
  Volume2,
  Users,
  Star,
  BarChart3,
  Globe,
  Presentation,
  Award,
  Smartphone,
  Heart,
  Tv,
} from 'lucide-react';
import { ReplicaCourse } from '../../data/replicaCourses';
import { useAcademyStore } from '../../store/useAcademyStore';
import cmaLogoSrc from '../../assets/CMA.png';

const iconLookup: Record<string, React.ElementType> = {
  Radio,
  Mic2,
  AudioWaveform,
  Languages,
  Share2,
  UserCheck,
  Headphones,
  TrendingUp,
  Volume2,
  Users,
  Star,
  BarChart3,
  Globe,
  Presentation,
  Award,
  Smartphone,
  Heart,
  Tv,
};

export const CourseCard: React.FC<{ course: ReplicaCourse; index: number }> = ({
  course,
  index,
}) => {
  const { openWaitlistModal } = useAcademyStore();

  const FormatIcon =
    course.format === 'Physical'
      ? MapPin
      : course.format === 'Online'
      ? Wifi
      : Monitor;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      className="flex flex-col justify-between p-3.5 sm:p-4 rounded-2xl bg-[#0A0A0A] border border-[#1A1A1A] hover:border-[#FF6B00]/50 transition-all duration-300 group shadow-md"
    >
      <div>
        {/* Thumbnail + Overlays */}
        <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-black/60 border border-[#1A1A1A]">
          <img
            src={course.thumbnail}
            alt={course.title}
            className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Registration Closed Badge if applicable */}
          {course.badge && (
            <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-md bg-[#380b0f] border border-red-900/60 text-[#ff6b6b] text-[9px] font-black tracking-wider uppercase">
              {course.badge}
            </div>
          )}

          {/* Bottom Duration & Format Pills */}
          <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between gap-2">
            <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-black/75 backdrop-blur-md border border-white/10 text-[10px] font-medium text-white shadow-xs">
              <Calendar className="w-3 h-3 text-[#FF6B00]" />
              <span>{course.duration}</span>
            </div>

            <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-black/75 backdrop-blur-md border border-white/10 text-[10px] font-medium text-white shadow-xs">
              <FormatIcon className="w-3 h-3 text-[#FF6B00]" />
              <span>{course.format}</span>
            </div>
          </div>
        </div>

        {/* Title */}
        <Link to={`/course/${course.slug}`}>
          <h3 className="text-sm sm:text-base font-bold font-display text-white group-hover:text-[#FF6B00] transition-colors line-clamp-1 mt-3.5 leading-snug">
            {course.title}
          </h3>
        </Link>

        {/* Short Description */}
        <p className="text-[11px] sm:text-xs text-[#A0A0A0] leading-relaxed line-clamp-2 mt-1.5 font-normal">
          {course.description}
        </p>

        {/* Course Skills / Pillar Icons Row */}
        <div className="flex items-center gap-2 mt-3 pt-2 text-[#FF6B00]">
          {course.iconNames.map((iconName, i) => {
            const Icon = iconLookup[iconName] || Star;
            return (
              <div
                key={i}
                className="w-5 h-5 rounded-md bg-[#FF6B00]/10 border border-[#FF6B00]/20 flex items-center justify-center text-[#FF6B00]"
                title={iconName}
              >
                <Icon className="w-3 h-3 stroke-[1.8]" />
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer Area */}
      <div className="mt-4 pt-3 border-t border-[#181818] space-y-3">
        {/* CMA Brand Author */}
        <div className="flex items-center gap-2">
          <img
            src={cmaLogoSrc || '/CMA.png'}
            alt="CMA"
            className="w-5 h-5 rounded-full object-cover border border-[#333333]"
          />
          <span className="text-[11px] font-medium text-[#A0A0A0]">
            City Media Academy
          </span>
        </div>

        {/* CTA Button */}
        <button
          onClick={() => openWaitlistModal(course.id)}
          className="w-full py-2 px-3 rounded-xl border border-[#FF6B00]/30 hover:border-[#FF6B00] bg-[#FF6B00]/5 hover:bg-[#FF6B00] text-[#FF6B00] hover:text-white text-xs font-bold transition-all duration-200 cursor-pointer text-center"
        >
          Join Waitlist
        </button>
      </div>
    </motion.div>
  );
};
