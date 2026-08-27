import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Radio, Phone, MapPin } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { companyDetails } from '../data/company';
import { useAcademyStore } from '../store/useAcademyStore';

export const CtaBanner: React.FC = () => {
  const { openWaitlistModal } = useAcademyStore();

  return (
    <section className="py-20 bg-slate-900 dark:bg-[#05060A] relative overflow-hidden">
      {/* Background orange glow aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#FF6B00]/25 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-gradient-to-r from-[#FF6B00] via-[#FFA048] to-[#E55F00] p-8 sm:p-14 text-white shadow-2xl shadow-[#FF6B00]/25 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/20 backdrop-blur-md text-xs font-bold uppercase tracking-wider text-white">
              <Sparkles className="w-4 h-4" />
              <span>Next Cohort Starts July 06, 2026</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white leading-tight">
              Ready to Kickstart Your Broadcast & Media Career?
            </h2>

            <p className="text-sm sm:text-base text-white/90 leading-relaxed">
              Limited to 25 students per cohort to guarantee direct studio microphone practice and personalized mentoring under City FM on-air hosts.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-medium text-white/80 pt-2">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4" />
                <span>{companyDetails.address}</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Phone className="w-4 h-4" />
                <span>{companyDetails.phone}</span>
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3.5 flex-shrink-0 w-full sm:w-auto">
            <Button
              variant="secondary"
              size="lg"
              icon="arrow-up-right"
              onClick={() => openWaitlistModal('broadcast-media-pro-2026')}
              className="w-full sm:w-auto shadow-2xl"
            >
              Join Priority Waitlist
            </Button>

            <Button
              href="/admissions"
              variant="outline"
              size="lg"
              className="w-full sm:w-auto bg-black/30 border-white/30 text-white hover:bg-black/50"
            >
              Speak to Admissions
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
