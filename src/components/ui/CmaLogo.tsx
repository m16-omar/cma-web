import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const CmaLogo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const isSm = size === 'sm';
  const isLg = size === 'lg';

  return (
    <div className={`inline-flex flex-col items-start select-none group cursor-pointer ${className}`}>
      {/* "City" in vibrant orange brand serif italics */}
      <span
        className={`font-serif italic font-extrabold text-[#FF6B00] tracking-tight leading-none ${
          isSm
            ? 'text-2xl'
            : isLg
            ? 'text-4xl sm:text-5xl'
            : 'text-3xl sm:text-4xl'
        }`}
        style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontStyle: 'italic',
          fontWeight: 900,
          letterSpacing: '-0.02em',
          display: 'block',
        }}
      >
        City
      </span>

      {/* "MEDIA ACADEMY" in clean bold white uppercase */}
      <span
        className={`font-sans font-black tracking-[0.22em] text-white uppercase leading-none font-display ${
          isSm
            ? 'text-[9px] -mt-0.5'
            : isLg
            ? 'text-[13px] sm:text-[15px] -mt-1'
            : 'text-[11px] sm:text-[12.5px] -mt-1'
        }`}
        style={{
          fontFamily: "'Poppins', 'Inter', system-ui, sans-serif",
          fontWeight: 900,
          letterSpacing: '0.22em',
          display: 'block',
        }}
      >
        MEDIA ACADEMY
      </span>
    </div>
  );
};
