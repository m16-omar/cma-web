import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Radio, Mic2, Tv, Headphones, Sparkles, CheckCircle2 } from 'lucide-react';

export const StudioFacilities: React.FC = () => {
  const [activeFacilityIndex, setActiveFacilityIndex] = useState(0);

  const facilities = [
    {
      id: 'live-radio-studio',
      name: 'City FM Live On-Air Suite',
      icon: Radio,
      tag: 'Studio A (On-Air)',
      image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=1200&auto=format&fit=crop',
      description:
        'Equipped with broadcast-standard Axia and Rode consoles, Shure SM7B microphones, telephone hybrid screening units, and Dalet broadcast automation systems.',
      features: [
        'Direct connection to City 105.1 FM transmission desk',
        'Multi-guest microphone isolation arms',
        'NBC profanity delay dumpers & caller screeners',
        'Live acoustic treatment and soundproof vocal booths'
      ]
    },
    {
      id: 'tv-production-suite',
      name: '4K Multi-Camera TV Suite',
      icon: Tv,
      tag: 'Studio B (Television & Video)',
      image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1200&auto=format&fit=crop',
      description:
        'Professional broadcast video set with Blackmagic 4K studio cameras, teleprompters, green-screen virtual set integration, and motorized studio lighting rigs.',
      features: [
        'Multi-angle motorized PTZ & cinema broadcast cameras',
        'Dual presidential & speech teleprompters',
        'RGB ambient studio lighting with customizable mood boards',
        'Live switcher and real-time streaming encoder'
      ]
    },
    {
      id: 'voiceover-lab',
      name: 'Acoustic Voiceover & Foley Lab',
      icon: Mic2,
      tag: 'Studio C (Voiceover & Jingles)',
      image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=1200&auto=format&fit=crop',
      description:
        'Double-walled floating acoustic vocal booth with Neumann and Sennheiser condenser microphones, Apollo Twin interfaces, and pro audio DAWs.',
      features: [
        'Zero-noise floor (< -70dB) vocal booth isolation',
        'Universal Audio Apollo preamps and LA-2A compressors',
        'Commercial jingle production & dubbing monitors',
        'Pro Tools, Adobe Audition & Logic Pro workstations'
      ]
    },
    {
      id: 'podcast-hub',
      name: 'Digital Podcast & Creator Lounge',
      icon: Headphones,
      tag: 'Studio D (Podcasting & Social Clips)',
      image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop',
      description:
        'Modern 4-seat podcast table setup with dynamic mood backdrops, automated multi-camera podcast switching, and instant social media video clipping rigs.',
      features: [
        'Rodecaster Pro II integrated audio-visual engine',
        'Automated AI face-tracking camera switching',
        'Custom brand backdrops and neon light installations',
        'High-speed cloud rendering for Reels/TikTok/Shorts'
      ]
    }
  ];

  const current = facilities[activeFacilityIndex];

  return (
    <section className="py-20 bg-slate-50 dark:bg-[#08090E] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/25 text-xs font-bold text-[#FF6B00] uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>World-Class Infrastructure</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-slate-900 dark:text-white tracking-tight">
            Learn on Real Broadcast Hardware
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            No simulated toys. CMA students train on the exact broadcast equipment used by Nigeria’s biggest commercial radio and television networks.
          </p>
        </div>

        {/* Interactive Facilities Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {facilities.map((fac, idx) => {
            const Icon = fac.icon;
            const isSelected = activeFacilityIndex === idx;

            return (
              <button
                key={fac.id}
                onClick={() => setActiveFacilityIndex(idx)}
                className={`p-4 rounded-2xl text-left transition-all border cursor-pointer ${
                  isSelected
                    ? 'bg-white dark:bg-[#131722] border-[#FF6B00] shadow-lg shadow-[#FF6B00]/10'
                    : 'bg-white/60 dark:bg-white/5 border-slate-200 dark:border-white/5 text-slate-600 dark:text-slate-400 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                      isSelected
                        ? 'bg-[#FF6B00] text-white shadow-xs'
                        : 'bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-400'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase">
                    0{idx + 1}
                  </span>
                </div>
                <h4
                  className={`text-xs sm:text-sm font-bold leading-tight ${
                    isSelected ? 'text-slate-900 dark:text-white' : 'text-slate-700 dark:text-slate-300'
                  }`}
                >
                  {fac.name}
                </h4>
              </button>
            );
          })}
        </div>

        {/* Selected Facility Detail Card */}
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="rounded-3xl bg-white dark:bg-[#131722] border border-slate-200 dark:border-white/10 p-6 sm:p-10 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          {/* Facility Photo */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden aspect-[16/10] bg-slate-900 border border-white/10 relative group">
            <img
              src={current.image}
              alt={current.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold text-white border border-white/10">
              {current.tag}
            </div>
            <div className="absolute bottom-4 left-4 right-4 bg-black/75 backdrop-blur-md p-3 rounded-xl border border-white/10 text-xs text-slate-300">
              📍 Plot 11 Lateef Jakande Road, Agidingbi, Ikeja, Lagos
            </div>
          </div>

          {/* Facility Info */}
          <div className="lg:col-span-5 space-y-5">
            <div>
              <span className="text-xs font-bold text-[#FF6B00] uppercase tracking-wider">
                {current.tag}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black font-display text-slate-900 dark:text-white mt-1">
                {current.name}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                {current.description}
              </p>
            </div>

            {/* Features Checkgrid */}
            <div className="space-y-2.5 pt-2 border-t border-slate-100 dark:border-white/10">
              {current.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6B00] mt-0.5 flex-shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
