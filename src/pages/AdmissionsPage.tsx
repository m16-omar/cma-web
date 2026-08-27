import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Sparkles,
  MapPin,
  Phone,
  Mail,
  Calendar,
  Clock,
  Radio,
  Monitor,
  Shuffle,
  Send,
  CheckCircle2,
  ChevronDown,
  HelpCircle,
} from 'lucide-react';
import { companyDetails } from '../data/company';
import { useAcademyStore } from '../store/useAcademyStore';
import { CourseFormat } from '../types/course';
import confetti from 'canvas-confetti';

export const AdmissionsPage: React.FC = () => {
  const { addToast } = useAcademyStore();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    coursePreference: 'broadcast-media-pro-2026',
    format: 'Hybrid' as CourseFormat,
    cityLocation: 'Lagos',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone) return;

    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#FF6B00', '#FFA048', '#FFFFFF']
    });

    setSubmitted(true);
    addToast(
      'Application Submitted!',
      'Thank you. An admissions counselor from City Media Academy will reach out to you within 24 hours.',
      'success'
    );
  };

  const faqs = [
    {
      q: 'When does the next Broadcast Media Pro Course cohort start?',
      a: 'The upcoming cohort officially kicks off on July 06, 2026. Daily classes run from 9:00 AM to 2:00 PM (Monday through Friday) for 2 weeks, followed by 3 weeks of hands-on station internship at City 105.1 FM and 93.5 Area FM.',
    },
    {
      q: 'Can I participate online if I live outside Lagos or Nigeria?',
      a: 'Yes! Our Dual-Mode LMS architecture provides live high-definition video streaming, direct audio interaction with instructors, online assignments, and downloadable session recordings. Online students receive full mentorship and verified certification.',
    },
    {
      q: 'Do I need prior broadcasting experience before applying?',
      a: 'No prior experience is necessary. We train individuals from ground zero — from microphone basics and vocal resonance to professional news writing and commercial voice acting.',
    },
    {
      q: 'Is the 3-week internship guaranteed for all students?',
      a: 'Yes, all students enrolled in the Broadcast Media Pro Course Physical and Hybrid tracks are placed directly in active show production and on-air shadowing at City 105.1 FM / 93.5 Area FM upon completing their 2-week intensive classes.',
    },
    {
      q: 'Are installment payments accepted?',
      a: 'Yes, we provide flexible 2-part tuition installment options upon request during the admissions review process.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Admissions & Contact | City Media Academy</title>
        <meta
          name="description"
          content="Apply to City Media Academy. Plot 11 Lateef Jakande Road, Agidingbi, Ikeja, Lagos. Phone: 0810 968 8638."
        />
      </Helmet>

      <div className="py-12 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/25 text-xs font-bold text-[#FF6B00] uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>Admissions Desk & Campus Hub</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-slate-900 dark:text-white tracking-tight leading-tight">
            Take Your Seat Behind the Microphone
          </h1>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Have questions about tuition, schedules, or learning tracks? Complete the admissions enquiry below or visit our Ikeja broadcast campus.
          </p>
        </div>

        {/* Form + Contact Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Form */}
          <div className="lg:col-span-7 rounded-3xl bg-white dark:bg-[#131722] border border-slate-200 dark:border-white/10 p-6 sm:p-10 shadow-2xl space-y-6">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white">
                    Apply / Enquire for Next Cohort
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Fill out your details and our admissions coordinator will contact you directly.
                  </p>
                </div>

                {/* Track Selector */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                    Preferred Format Track:
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {(['Physical', 'Online', 'Hybrid'] as CourseFormat[]).map((fmt) => (
                      <button
                        key={fmt}
                        type="button"
                        onClick={() => setFormData({ ...formData, format: fmt })}
                        className={`py-2 px-2 rounded-xl text-xs font-bold flex flex-col items-center gap-1 border transition-all cursor-pointer ${
                          formData.format === fmt
                            ? 'bg-[#FF6B00]/15 border-[#FF6B00] text-[#FF6B00] shadow-sm'
                            : 'bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300'
                        }`}
                      >
                        {fmt === 'Physical' && <Radio className="w-3.5 h-3.5" />}
                        {fmt === 'Online' && <Monitor className="w-3.5 h-3.5" />}
                        {fmt === 'Hybrid' && <Shuffle className="w-3.5 h-3.5" />}
                        <span>{fmt}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Full Legal Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Oluwaseun Adeleke"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-[#FF6B00]"
                  />
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-[#FF6B00]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="0810 000 0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-[#FF6B00]"
                    />
                  </div>
                </div>

                {/* Questions / Career Goals */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Your Questions or Media Career Aspirations
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us what you hope to achieve or any specific questions about the curriculum..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2 text-sm rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-[#FF6B00] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#FF6B00] via-[#FFA048] to-[#E55F00] text-white font-bold text-sm shadow-lg shadow-[#FF6B00]/30 hover:brightness-110 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Admissions Enquiry</span>
                </button>
              </form>
            ) : (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/15 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold font-display text-slate-900 dark:text-white">
                  Enquiry Received!
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                  Thank you, <strong>{formData.fullName}</strong>. An admissions advisor has received your request and will reach out via WhatsApp/Phone shortly.
                </p>
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs text-left space-y-1 text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                  <div>📍 <strong>Campus:</strong> {companyDetails.address}, Lagos</div>
                  <div>📞 <strong>Hotline:</strong> {companyDetails.phone}</div>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Campus Details & Direct Lines */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-[#131722] border border-slate-200 dark:border-white/10 shadow-lg space-y-6">
              <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white">
                Campus Location & Hotlines
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#FF6B00]/15 text-[#FF6B00] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 dark:text-white">
                      Physical Campus Studios
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
                      {companyDetails.address}, {companyDetails.state}, Nigeria (Inside City 105.1 FM Complex)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-cyan-500/15 text-cyan-400 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 dark:text-white">
                      Admissions Phone / WhatsApp
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 mt-0.5">
                      <a href={`tel:${companyDetails.phone.replace(/\s+/g, '')}`} className="hover:text-[#FF6B00]">
                        {companyDetails.phone}
                      </a>
                      {' '}•{' '}
                      <a href={`tel:${companyDetails.altPhone.replace(/\s+/g, '')}`} className="hover:text-[#FF6B00]">
                        {companyDetails.altPhone}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 dark:text-white">
                      Official Admissions Email
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 mt-0.5">
                      <a href={`mailto:${companyDetails.email}`} className="hover:text-[#FF6B00]">
                        {companyDetails.email}
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="p-4 rounded-2xl bg-white dark:bg-[#0E1017] border border-slate-200/80 dark:border-white/5 text-xs space-y-1">
                <div className="font-bold text-slate-900 dark:text-white">
                  🕒 Campus & Admissions Office Hours:
                </div>
                <div className="text-slate-500">Monday – Friday: 8:00 AM – 5:00 PM</div>
                <div className="text-slate-500">Saturday: 9:00 AM – 3:00 PM (By Appointment)</div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQs Accordion */}
        <div className="space-y-6 max-w-4xl mx-auto pt-8">
          <div className="text-center space-y-2">
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 dark:text-white">
              Frequently Asked Questions
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              Everything you need to know about our cohorts, studio drills, and internship placement.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;

              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-white dark:bg-[#131722] border border-slate-200 dark:border-white/10 overflow-hidden shadow-xs"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  >
                    <span className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 transition-transform ${
                        isOpen ? 'rotate-180 text-[#FF6B00]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-white/5 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
