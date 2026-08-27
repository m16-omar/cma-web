import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Radio,
  Award,
  Users,
  CheckCircle2,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  ShieldCheck,
  Building2,
} from 'lucide-react';
import { companyDetails } from '../data/company';
import { Button } from '../components/ui/Button';
import { useAcademyStore } from '../store/useAcademyStore';

export const AboutPage: React.FC = () => {
  const { openWaitlistModal } = useAcademyStore();

  const values = [
    {
      title: 'Practical Studio Rigour',
      description: 'Zero theoretical fluff. Every student handles live broadcast consoles, teleprompters, and studio mics from day one.',
    },
    {
      title: 'Active Industry Mentorship',
      description: 'Taught exclusively by working on-air personalities, news directors, and commercial voice actors.',
    },
    {
      title: 'Guaranteed Station Internship',
      description: 'Direct 3-week transition into live radio production at City 105.1 FM and 93.5 Area FM.',
    },
    {
      title: 'Modern Creator Monetization',
      description: 'Equipping graduates not just for jobs, but to build lucrative independent media agencies and personal brands.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>About City Media Academy | Cardinal Broadcasting Network</title>
        <meta
          name="description"
          content="Learn about City Media Academy (CMA), Nigeria's premier broadcast and media training institution in Ikeja, Lagos, powered by Cardinal Broadcasting."
        />
      </Helmet>

      <div className="py-12 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/25 text-xs font-bold text-[#FF6B00] uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>Our Story & Mission</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-slate-900 dark:text-white tracking-tight leading-tight">
            Nurturing the Next Generation of Broadcast Leaders
          </h1>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            City Media Academy (CMA) was founded by <strong>Cardinal Broadcasting Limited</strong> to bridge the critical gap between traditional media education and the practical demands of modern 21st-century broadcasting and digital content creation.
          </p>
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 rounded-3xl overflow-hidden aspect-[4/3] bg-slate-900 border border-slate-200 dark:border-white/10 relative shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=1200&auto=format&fit=crop"
              alt="City FM Studios"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-black/70 backdrop-blur-md border border-white/10 text-white text-xs space-y-1">
              <div className="font-bold text-sm text-[#FF6B00]">City 105.1 FM Broadcast Headquarters</div>
              <div>Plot 11 Lateef Jakande Road, Agidingbi, Ikeja, Lagos</div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-bold text-slate-700 dark:text-slate-300">
              <Building2 className="w-4 h-4 text-[#FF6B00]" />
              <span>Cardinal Broadcasting Network</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 dark:text-white">
              From the Airwaves to the Academy Classroom
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Operating under the umbrella of Cardinal Broadcasting Limited — home to <strong>City 105.1 FM</strong>, <strong>93.5 Area FM</strong>, and <strong>Praise in the City</strong> — CMA has trained over 5,000 students who now anchor flagship morning drive shows, voice national commercials, produce chart-topping podcasts, and host prestigious corporate events across Africa.
            </p>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Our unique 5-week model combines <strong>2 weeks of intensive, 5-hour daily masterclasses</strong> with <strong>3 weeks of hands-on station internship</strong>, ensuring our alumni enter the job market with verified live broadcast experience.
            </p>

            <div className="pt-2">
              <Button
                variant="primary"
                size="md"
                icon="arrow-up-right"
                onClick={() => openWaitlistModal('broadcast-media-pro-2026')}
              >
                Join Next Cohort (July 06, 2026)
              </Button>
            </div>
          </div>
        </div>

        {/* Core Pillars / Values Grid */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 dark:text-white">
              The CMA Distinction
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              Why Nigeria’s leading broadcasters trust City Media Academy for talent development.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white dark:bg-[#131722] border border-slate-200 dark:border-white/10 shadow-sm space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-[#FF6B00]/15 text-[#FF6B00] flex items-center justify-center font-black">
                  0{idx + 1}
                </div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white">
                  {val.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Campus & Facilities Info */}
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-50 dark:bg-[#0E1017] border border-slate-200 dark:border-white/10 shadow-lg grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FF6B00]">
              <MapPin className="w-4 h-4" />
              <span>Campus Address</span>
            </div>
            <h4 className="text-base font-bold text-slate-900 dark:text-white">
              Ikeja Studio Complex
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              {companyDetails.address}, {companyDetails.state}, Nigeria
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-400">
              <Phone className="w-4 h-4" />
              <span>Admissions Hotlines</span>
            </div>
            <h4 className="text-base font-bold text-slate-900 dark:text-white">
              Direct Phone & WhatsApp
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              {companyDetails.phone} • {companyDetails.altPhone}
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400">
              <Mail className="w-4 h-4" />
              <span>Email Enquiries</span>
            </div>
            <h4 className="text-base font-bold text-slate-900 dark:text-white">
              Official Desk
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              {companyDetails.email}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
