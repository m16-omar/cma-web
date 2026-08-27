import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Radio, Award, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { useAcademyStore } from '../store/useAcademyStore';

export const HowItWorks: React.FC = () => {
  const { openWaitlistModal } = useAcademyStore();

  const steps = [
    {
      number: '01',
      title: 'Apply & Select Your Path',
      subtitle: 'Physical or Online Live LMS',
      description:
        'Choose the learning format that suits your schedule. Train in-person at our Ikeja broadcast studios or join live interactive video LMS sessions from anywhere.',
      badge: 'Step 1: Enrollment',
      icon: Radio,
    },
    {
      number: '02',
      title: 'Learn in Hands-On Live Studios',
      subtitle: '5 Hours Daily + 3 Weeks Internship',
      description:
        'Engage in 2 weeks of immersive classes (9am–2pm daily) covering all 8 pillars, followed by 3 weeks of hands-on internship co-hosting live shows at City 105.1 FM.',
      badge: 'Step 2: Practical Training',
      icon: Sparkles,
    },
    {
      number: '03',
      title: 'Get Certified & Land Opportunities',
      subtitle: 'Accreditation & Industry Placement',
      description:
        'Receive your verified CMA Broadcast Competency Certificate, a professional audio/video demo reel, and direct access to our media agency hiring network.',
      badge: 'Step 3: Career Launch',
      icon: Award,
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-[#0E1017] border-y border-slate-200/80 dark:border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/25 text-xs font-bold text-[#FF6B00] uppercase tracking-wider">
            <span>3-Step Blueprint</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-slate-900 dark:text-white tracking-tight">
            How It Works
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            From complete beginner to certified broadcast professional in 5 weeks.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative flex flex-col justify-between p-8 rounded-3xl bg-slate-50 dark:bg-[#131722] border border-slate-200/80 dark:border-white/10 hover:border-[#FF6B00]/40 transition-all duration-300 group hover:-translate-y-1 shadow-sm"
              >
                {/* Large Background Step Number */}
                <div className="absolute top-4 right-6 text-5xl font-black font-display text-slate-200 dark:text-white/5 select-none pointer-events-none group-hover:text-[#FF6B00]/10 transition-colors">
                  {step.number}
                </div>

                <div className="space-y-4 relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-[#FF6B00]/15 text-[#FF6B00] border border-[#FF6B00]/30 flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#FF6B00]">
                    {step.badge}
                  </span>

                  <div>
                    <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#FFA048] mt-1">
                      {step.subtitle}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200/80 dark:border-white/5 flex items-center gap-2 text-xs font-bold text-[#FF6B00]">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6B00]" />
                  <span>CMA Quality Guaranteed</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <Button
            variant="primary"
            size="lg"
            icon="arrow-up-right"
            onClick={() => openWaitlistModal('broadcast-media-pro-2026')}
          >
            Start Your Journey Today
          </Button>
        </div>
      </div>
    </section>
  );
};
