import React from 'react';
import { partnersData } from '../data/partners';
import { Radio } from 'lucide-react';

export const PartnersMarquee: React.FC = () => {
  return (
    <section className="py-10 bg-slate-100/60 dark:bg-[#08090E] border-b border-slate-200/80 dark:border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <span className="text-[11px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
          Broadcasting Affiliates & Industry Internship Partners
        </span>
      </div>

      {/* Marquee Track */}
      <div className="relative w-full overflow-hidden mask-fade-edges">
        <div className="animate-marquee flex items-center gap-6 sm:gap-8">
          {[...partnersData, ...partnersData].map((partner, idx) => (
            <div
              key={`${partner.id}-${idx}`}
              className="flex items-center gap-2.5 px-5 py-3 rounded-2xl bg-white dark:bg-[#131722] border border-slate-200/90 dark:border-white/10 shadow-xs hover:border-[#FF6B00]/40 transition-colors whitespace-nowrap flex-shrink-0"
            >
              <div className="w-8 h-8 rounded-lg bg-[#FF6B00]/10 text-[#FF6B00] flex items-center justify-center flex-shrink-0">
                <Radio className="w-4 h-4" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-white">
                  {partner.name}
                </span>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">
                  {partner.badge || partner.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
