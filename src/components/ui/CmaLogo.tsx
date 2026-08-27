import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const CmaLogo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const scale = size === 'sm' ? 0.75 : size === 'lg' ? 1.3 : 1;

  return (
    <div className={`flex flex-col select-none group cursor-pointer ${className}`} style={{ transform: `scale(${scale})`, transformOrigin: 'left center' }}>
      {/* City Script Wordmark in Orange */}
      <svg
        viewBox="0 0 160 52"
        className="w-[110px] sm:w-[130px] h-auto overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text
          x="2"
          y="42"
          fill="#FF6B00"
          fontFamily="'Playfair Display', 'Georgia', 'Times New Roman', serif"
          fontSize="46"
          fontStyle="italic"
          fontWeight="900"
          letterSpacing="-0.5px"
        >
          City
        </text>
      </svg>

      {/* MEDIA ACADEMY in Crisp Bold White */}
      <span
        className="text-[10px] sm:text-[11.5px] font-black tracking-[0.22em] text-white uppercase leading-none font-display -mt-1 pl-0.5"
        style={{ fontFamily: "'Poppins', sans-serif", textShadow: '0 0 12px rgba(255,255,255,0.1)' }}
      >
        MEDIA ACADEMY
      </span>
    </div>
  );
};
