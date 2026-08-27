import React from 'react';
import cmaLogoSrc from '../../assets/CMA.png';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export const CmaLogo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showText = false,
}) => {
  const sizeClasses = {
    sm: 'h-10 w-10',
    md: 'h-12 w-12',
    lg: 'h-16 w-16',
  };

  return (
    <div className={`inline-flex items-center gap-3 select-none group cursor-pointer ${className}`}>
      {/* Official CMA Logo Image */}
      <img
        src={cmaLogoSrc || '/CMA.png'}
        alt="City Media Academy"
        className={`${sizeClasses[size]} rounded-full object-cover drop-shadow-md transition-transform duration-200 group-hover:scale-105`}
        loading="eager"
      />

      {showText && (
        <div className="flex flex-col">
          <span
            className="font-serif italic font-extrabold text-[#FF6B00] text-xl leading-none"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            City
          </span>
          <span className="text-[10px] font-black tracking-widest text-white uppercase font-display leading-tight mt-0.5">
            MEDIA ACADEMY
          </span>
        </div>
      )}
    </div>
  );
};
