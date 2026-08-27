import React from 'react';
import cmaLogoSrc from '../../assets/CMA.png';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
}

export const CmaLogo: React.FC<LogoProps> = ({
  className = '',
  size = 'lg',
  showText = true,
}) => {
  const badgeSizes = {
    sm: 'h-10 w-10 min-w-[40px]',
    md: 'h-14 w-14 min-w-[56px]',
    lg: 'h-16 w-16 sm:h-18 sm:w-18 min-w-[64px] sm:min-w-[72px]',
    xl: 'h-20 w-20 sm:h-24 sm:w-24 min-w-[80px] sm:min-w-[96px]',
  };

  const textSizes = {
    sm: { city: 'text-xl', sub: 'text-[9px] tracking-[0.18em]' },
    md: { city: 'text-2xl sm:text-3xl', sub: 'text-[11px] sm:text-xs tracking-[0.22em]' },
    lg: { city: 'text-3xl sm:text-4xl lg:text-[42px]', sub: 'text-xs sm:text-[13px] lg:text-sm tracking-[0.24em]' },
    xl: { city: 'text-4xl sm:text-5xl', sub: 'text-sm sm:text-base tracking-[0.26em]' },
  };

  const currentText = textSizes[size] || textSizes.lg;

  return (
    <div className={`inline-flex items-center gap-3.5 sm:gap-4 select-none group cursor-pointer ${className}`}>
      {/* Official CMA Circular Logo Emblem */}
      <img
        src={cmaLogoSrc || '/CMA.png'}
        alt="City Media Academy"
        className={`${badgeSizes[size]} rounded-full object-cover shadow-[0_0_20px_rgba(255,107,0,0.25)] border-2 border-white/20 transition-transform duration-300 group-hover:scale-105 flex-shrink-0`}
        loading="eager"
      />

      {showText && (
        <div className="flex flex-col justify-center">
          <span
            className={`font-serif italic font-black text-[#FF6B00] leading-none drop-shadow-sm ${currentText.city}`}
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            City
          </span>
          <span
            className={`font-sans font-black text-white uppercase leading-none font-display mt-1 pl-0.5 ${currentText.sub}`}
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            MEDIA ACADEMY
          </span>
        </div>
      )}
    </div>
  );
};
