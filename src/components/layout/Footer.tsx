import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Sparkles,
  Send,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';
import { companyDetails } from '../../data/company';
import { CmaLogo } from '../ui/CmaLogo';
import { useAcademyStore } from '../../store/useAcademyStore';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const { addToast } = useAcademyStore();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    addToast(
      'Subscribed to CMA Bulletin',
      'You will receive early notifications for upcoming academy cohorts and masterclasses.',
      'success'
    );
    setEmail('');
  };

  const pillarsList = [
    'Radio & TV Presentation',
    'Interview & Show Preparation',
    'Voiceover & Audio Production',
    'Diction & Speech Training',
    'Social Media Management',
    'Event Hosting & Public Speaking',
    'Media Marketing',
    'Personal Branding'
  ];

  return (
    <footer className="relative bg-[#05060A] text-slate-400 pt-16 pb-12 border-t border-slate-200/10 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FF6B00]/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#CC5500]/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Info Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#131722] via-[#1A2030] to-[#131722] border border-white/10 shadow-2xl mb-14 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="w-14 h-14 rounded-2xl bg-[#FF6B00]/15 border border-[#FF6B00]/30 flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-7 h-7 text-[#FF6B00]" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white font-display">
                Ready to Join Broadcast Media Pro Course 2026?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                5 weeks intensive physical + online classes with 3 weeks live internship at City 105.1 FM.
              </p>
            </div>
          </div>

          <Link
            to="/courses/broadcast-media-pro-2026"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#FF6B00] hover:bg-[#E55F00] text-white font-bold text-sm shadow-lg shadow-[#FF6B00]/25 transition-all hover:scale-105 active:scale-95 flex-shrink-0"
          >
            <span>Explore Course Curriculum</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Tagline */}
          <div className="lg:col-span-2 space-y-4">
            <CmaLogo size="lg" />
            <p className="text-sm text-slate-300 leading-relaxed max-w-sm mt-3">
              {companyDetails.tagline}
            </p>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Nigeria’s definitive practical training ground for on-air presenters, newscasters, podcasters, voice actors, and media entrepreneurs. Powered by Cardinal Broadcasting Limited.
            </p>

            {/* Direct Contact Badges */}
            <div className="pt-3 space-y-2 text-xs">
              <div className="flex items-start gap-2.5 text-slate-300">
                <MapPin className="w-4 h-4 text-[#FF6B00] mt-0.5 flex-shrink-0" />
                <span>{companyDetails.address}, {companyDetails.state}, {companyDetails.country}</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300">
                <Phone className="w-4 h-4 text-[#FF6B00] flex-shrink-0" />
                <a href={`tel:${companyDetails.phone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors font-medium">
                  {companyDetails.phone}
                </a>
                <span className="text-slate-500">•</span>
                <a href={`tel:${companyDetails.altPhone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors font-medium">
                  {companyDetails.altPhone}
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300">
                <Mail className="w-4 h-4 text-[#FF6B00] flex-shrink-0" />
                <a href={`mailto:${companyDetails.email}`} className="hover:text-white transition-colors font-medium">
                  {companyDetails.email}
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: 8 Comprehensive Pillars */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              8 Core Pillars
            </h4>
            <ul className="space-y-2 text-xs">
              {pillarsList.map((pillar, idx) => (
                <li key={idx}>
                  <Link
                    to="/courses/broadcast-media-pro-2026"
                    className="hover:text-[#FF6B00] transition-colors flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00]/60" />
                    <span>{pillar}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Academy Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Academy & LMS
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/courses" className="hover:text-white transition-colors">
                  All Courses Catalog
                </Link>
              </li>
              <li>
                <Link to="/instructors" className="hover:text-white transition-colors">
                  Faculty & Mentors
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About CMA & Studios
                </Link>
              </li>
              <li>
                <Link to="/admissions" className="hover:text-white transition-colors">
                  Admissions & Schedules
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="hover:text-[#FF6B00] transition-colors font-semibold">
                  Student Portal (LMS)
                </Link>
              </li>
              <li>
                <Link to="/facilitator" className="hover:text-cyan-400 transition-colors font-semibold">
                  Facilitator Dashboard
                </Link>
              </li>
            </ul>

            <div className="pt-3">
              <h5 className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">
                Broadcast Network
              </h5>
              <div className="space-y-1.5 text-xs">
                {companyDetails.affiliates.map((aff) => (
                  <a
                    key={aff.name}
                    href={aff.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 hover:text-white transition-colors text-slate-400"
                  >
                    <span>{aff.name}</span>
                    <ExternalLink className="w-3 h-3 text-slate-500" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Col 4: Newsletter */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Stay Updated
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Get notified when registration opens for new studio cohorts, masterclasses, and scholarship opportunities.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-[#FF6B00] focus:ring-1 focus:ring-[#FF6B00]"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#FF6B00] to-[#E55F00] text-white text-xs font-bold shadow-md hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                {subscribed ? (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Subscribed!</span>
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Subscribe to Updates</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} City Media Academy. All Rights Reserved. A division of Cardinal Broadcasting Limited.
          </div>
          <div className="flex items-center gap-6">
            <Link to="/about" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/about" className="hover:text-slate-300 transition-colors">
              Terms of Training
            </Link>
            <Link to="/admissions" className="hover:text-slate-300 transition-colors">
              NBC Compliance
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
