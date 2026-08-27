import React, { useState } from 'react';
import { Radio } from 'lucide-react';

interface CmaLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export const CmaLogo: React.FC<CmaLogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
}) => {
  const [imageError, setImageError] = useState(false);

  const sizeDimensions = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
  };

  return (
    <div className={`flex items-center gap-3 group focus:outline-none select-none ${className}`}>
      {/* Logo Emblem */}
      <div className={`relative ${sizeDimensions[size]} rounded-2xl bg-gradient-to-br from-[#FF6B00] via-[#FFA048] to-[#CC5500] p-0.5 shadow-lg shadow-[#FF6B00]/25 flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:shadow-[#FF6B00]/40 flex-shrink-0`}>
        <div className="w-full h-full bg-[#08090E] rounded-[14px] flex items-center justify-center overflow-hidden p-1">
          {!imageError ? (
            <img
              src="/CMA.png"
              alt="City Media Academy"
              className="w-full h-full object-contain filter drop-shadow-sm transition-transform duration-300 group-hover:scale-110"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="flex items-center justify-center font-black tracking-tighter text-[#FF6B00] text-xs">
              <Radio className="w-4 h-4 text-[#FF6B00] animate-pulse" />
            </div>
          )}
        </div>
      </div>

      {/* Brand Text */}
      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className="text-lg sm:text-xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-none group-hover:text-[#FF6B00] transition-colors">
              CITY MEDIA
            </span>
            <span className="text-xs px-1.5 py-0.5 rounded-full bg-[#FF6B00]/15 text-[#FF6B00] font-bold tracking-wider uppercase border border-[#FF6B00]/30 hidden sm:inline-block">
              LMS
            </span>
          </div>
          <span className="text-[10px] sm:text-[11px] font-semibold tracking-widest text-slate-500 dark:text-slate-400 uppercase mt-0.5">
            Academy • Cardinal Network
          </span>
        </div>
      )}
    </div>
  );
};
