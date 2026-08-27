import React from 'react';
import { CourseFormat } from '../../types/course';
import { Radio, Monitor, Shuffle, Sparkles, Award } from 'lucide-react';

interface FormatBadgeProps {
  format: CourseFormat | 'Hybrid' | 'All';
  size?: 'sm' | 'md';
  className?: string;
}

export const FormatBadge: React.FC<FormatBadgeProps> = ({
  format,
  size = 'sm',
  className = '',
}) => {
  const sizeClasses = size === 'sm' ? 'px-2.5 py-0.5 text-xs' : 'px-3.5 py-1 text-xs font-semibold';

  switch (format) {
    case 'Physical':
      return (
        <span
          className={`inline-flex items-center gap-1.5 rounded-full font-medium bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 ${sizeClasses} ${className}`}
        >
          <Radio className="w-3 h-3 text-amber-500" />
          <span>Physical Studio</span>
        </span>
      );
    case 'Online':
      return (
        <span
          className={`inline-flex items-center gap-1.5 rounded-full font-medium bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 ${sizeClasses} ${className}`}
        >
          <Monitor className="w-3 h-3 text-cyan-400" />
          <span>Online Live LMS</span>
        </span>
      );
    case 'Hybrid':
    default:
      return (
        <span
          className={`inline-flex items-center gap-1.5 rounded-full font-semibold bg-[#FF6B00]/15 text-[#FF6B00] border border-[#FF6B00]/30 shadow-xs ${sizeClasses} ${className}`}
        >
          <Shuffle className="w-3 h-3 text-[#FF6B00]" />
          <span>Hybrid (Physical + Online)</span>
        </span>
      );
  }
};

export const CategoryBadge: React.FC<{ label: string; className?: string }> = ({
  label,
  className = '',
}) => {
  return (
    <span
      className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-200/80 dark:bg-white/10 text-slate-800 dark:text-slate-200 border border-slate-300/60 dark:border-white/10 ${className}`}
    >
      <Sparkles className="w-2.5 h-2.5 text-[#FF6B00]" />
      <span>{label}</span>
    </span>
  );
};

export const CertificateBadge: React.FC<{ text?: string; className?: string }> = ({
  text = 'Accredited Certificate',
  className = '',
}) => {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 ${className}`}
    >
      <Award className="w-3 h-3 text-emerald-500" />
      <span>{text}</span>
    </span>
  );
};
