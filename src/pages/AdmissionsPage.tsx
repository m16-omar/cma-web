import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  User,
  MessageSquare,
  CheckCircle2,
  ChevronDown,
  Building,
  GraduationCap,
  Sparkles,
  ArrowRight,
  HelpCircle,
  Radio,
} from 'lucide-react';
import { CmaFooter } from '../components/ui/CmaFooter';
import { CmaNavbar } from '../components/ui/CmaNavbar';
import { useAcademyStore } from '../store/useAcademyStore';

export const AdmissionsPage: React.FC = () => {
  const { addToast } = useAcademyStore();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    program: 'Broadcast Media Pro Course 2026',
    format: 'Hybrid',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Where do physical classes hold?',
      a: 'Physical studio classes take place at the City 105.1 FM Complex, Plot 11 Lateef Jakande Road, Agidingbi, Ikeja, Lagos.',
    },
    {
      q: 'Can I participate 100% online from outside Lagos or Nigeria?',
      a: 'Yes! All lectures are broadcast live via our HD student portal and Zoom with interactive breakout rooms and mentor feedback.',
    },
    {
      q: 'Is the 3-week City FM internship guaranteed?',
      a: 'Yes, every graduate of our flagship Broadcast Media Pro programme is placed on rotational shifts inside live studios at City 105.1 FM.',
    },
    {
      q: 'What certificate do I receive upon graduation?',
      a: 'You will be awarded an industry-recognized Certificate of Broadcast Excellence endorsed by City 105.1 FM and City Media Academy.',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      addToast(
        'Message Sent Successfully!',
        'An admissions advisor will contact you within 24 hours.',
        'success'
      );
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        program: 'Broadcast Media Pro Course 2026',
        format: 'Hybrid',
        message: '',
      });
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#FF6B00] selection:text-white">
      <Helmet>
        <title>Contact & Admissions | City Media Academy</title>
        <meta
          name="description"
          content="Contact City Media Academy admissions team. Plot 11 Lateef Jakande Road, Agidingbi, Ikeja, Lagos. Call 0810 968 8638."
        />
      </Helmet>

      {/* 1. TOP NAVBAR - Matching reference */}
      <CmaNavbar />

      {/* 2. HERO SECTION */}
      <section className="relative pt-12 pb-14 lg:pt-16 lg:pb-20 overflow-hidden border-b border-[#1A1A1A]">
        {/* Studio Background Ambient */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2000&auto=format&fit=crop"
            alt="Broadcast Studio"
            className="w-full h-full object-cover object-right opacity-30 filter brightness-50 contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />

          {/* ON AIR Sign */}
          <div className="absolute top-10 right-8 sm:right-24 px-3.5 py-1.5 rounded-md border-2 border-red-600 bg-red-950/80 shadow-[0_0_30px_rgba(220,38,38,0.7)] hidden sm:flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
            <span className="text-xs sm:text-sm font-black tracking-widest text-red-500 font-mono">
              ON AIR
            </span>
          </div>
        </div>

        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
          <div className="max-w-4xl space-y-6">
            {/* Pre-Heading */}
            <span className="text-xs sm:text-sm font-bold text-[#FF6B00] uppercase tracking-widest block font-display">
              GET IN TOUCH WITH CMA
            </span>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black font-display text-white tracking-tight leading-[1.06]">
              We're Here to Help<br />
              You Start Your<br />
              <span className="text-[#FF6B00]">Media Journey.</span>
            </h1>

            {/* Subtitle Copy */}
            <p className="text-sm sm:text-base text-[#A0A0A0] leading-relaxed font-normal max-w-2xl">
              Have questions about our 5-week broadcast courses, admissions, physical studio sessions or corporate training? Reach out to our admissions and academic advisory team.
            </p>

            {/* 4-Item Contact Highlights Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FF6B00]/10 border border-[#FF6B00]/20 flex items-center justify-center text-[#FF6B00] flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white leading-tight font-display">Ikeja Campus</div>
                  <div className="text-[11px] text-[#A0A0A0] mt-0.5 leading-tight">Plot 11 Lateef Jakande</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FF6B00]/10 border border-[#FF6B00]/20 flex items-center justify-center text-[#FF6B00] flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white leading-tight font-display">Direct Line</div>
                  <div className="text-[11px] text-[#A0A0A0] mt-0.5 leading-tight">0810 968 8638</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FF6B00]/10 border border-[#FF6B00]/20 flex items-center justify-center text-[#FF6B00] flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white leading-tight font-display">Official Email</div>
                  <div className="text-[11px] text-[#A0A0A0] mt-0.5 leading-tight">academy@city1051fm.com</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FF6B00]/10 border border-[#FF6B00]/20 flex items-center justify-center text-[#FF6B00] flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white leading-tight font-display">Studio Hours</div>
                  <div className="text-[11px] text-[#A0A0A0] mt-0.5 leading-tight">Mon - Fri: 8am - 5pm</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TWO-COLUMN MAIN SECTION: FORM + CAMPUS INFO */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column (7 Cols): Direct Inquiry Form */}
          <div className="lg:col-span-7 rounded-3xl bg-[#0A0A0A] border border-[#1A1A1A] p-6 sm:p-8 space-y-6 shadow-2xl">
            <div>
              <span className="text-xs font-bold text-[#FF6B00] uppercase tracking-wider block font-display">
                ONLINE INQUIRY & ADMISSIONS
              </span>
              <h2 className="text-xl sm:text-2xl font-black font-display text-white mt-1">
                Send Us a Message
              </h2>
              <p className="text-xs text-[#A0A0A0] mt-1">
                Fill out the form below and an admissions counselor will get back to you within 24 hours.
              </p>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-2xl bg-[#0F0F0F] border border-[#FF6B00]/40 text-center space-y-4 shadow-xl"
              >
                <div className="w-16 h-16 rounded-full bg-[#FF6B00]/15 border border-[#FF6B00]/30 text-[#FF6B00] flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(255,107,0,0.3)]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-white font-display">
                  Inquiry Received!
                </h3>
                <p className="text-xs text-[#A0A0A0] max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out to City Media Academy. Our admissions officer has received your details and will call or email you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl bg-[#FF6B00] hover:bg-[#E55F00] text-white font-bold text-xs transition-colors cursor-pointer"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#A0A0A0]">
                      Full Name <span className="text-[#FF6B00]">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        placeholder="e.g. Chukwuemeka Adeleke"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full bg-[#0F0F0F] border border-[#1E1E1E] focus:border-[#FF6B00] rounded-xl pl-10 pr-4 py-3 text-xs text-white placeholder-[#666] focus:outline-none transition-colors"
                      />
                      <User className="w-4 h-4 text-[#666] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#A0A0A0]">
                      Email Address <span className="text-[#FF6B00]">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        required
                        placeholder="e.g. adeleke@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#0F0F0F] border border-[#1E1E1E] focus:border-[#FF6B00] rounded-xl pl-10 pr-4 py-3 text-xs text-white placeholder-[#666] focus:outline-none transition-colors"
                      />
                      <Mail className="w-4 h-4 text-[#666] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone / WhatsApp */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#A0A0A0]">
                      Phone / WhatsApp <span className="text-[#FF6B00]">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 0810 000 0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#0F0F0F] border border-[#1E1E1E] focus:border-[#FF6B00] rounded-xl pl-10 pr-4 py-3 text-xs text-white placeholder-[#666] focus:outline-none transition-colors"
                      />
                      <Phone className="w-4 h-4 text-[#666] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    </div>
                  </div>

                  {/* Program of Interest */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#A0A0A0]">
                      Programme of Interest
                    </label>
                    <select
                      value={formData.program}
                      onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                      className="w-full bg-[#0F0F0F] border border-[#1E1E1E] focus:border-[#FF6B00] rounded-xl px-4 py-3 text-xs text-white focus:outline-none transition-colors cursor-pointer"
                    >
                      <option value="Broadcast Media Pro Course 2026">
                        Broadcast Media Pro Course 2026 (Flagship)
                      </option>
                      <option value="Radio & TV Presentation">
                        Art of Radio & TV Presentation
                      </option>
                      <option value="Voiceover & Audio Production">
                        Voiceover & Audio Production Workshop
                      </option>
                      <option value="Podcast Production Masterclass">
                        Podcast Production Masterclass
                      </option>
                      <option value="Event Hosting & Public Speaking">
                        Event Hosting & Public Speaking
                      </option>
                      <option value="Digital Media Marketing">
                        Digital Media Strategy & Brand Marketing
                      </option>
                      <option value="General Inquiry">General Inquiry / Consultation</option>
                    </select>
                  </div>
                </div>

                {/* Learning Mode */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#A0A0A0]">
                    Preferred Mode of Study
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {['Physical (Ikeja Studio)', 'Online (Live Stream)', 'Hybrid (Both)'].map(
                      (mode) => {
                        const isSelected = formData.format.startsWith(mode.split(' ')[0]);
                        return (
                          <button
                            key={mode}
                            type="button"
                            onClick={() => setFormData({ ...formData, format: mode })}
                            className={`p-3 rounded-xl text-xs font-bold transition-all text-center cursor-pointer ${
                              isSelected
                                ? 'bg-[#FF6B00]/15 border border-[#FF6B00] text-[#FF6B00]'
                                : 'bg-[#0F0F0F] border border-[#1E1E1E] text-[#A0A0A0] hover:text-white'
                            }`}
                          >
                            {mode}
                          </button>
                        );
                      }
                    )}
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#A0A0A0]">
                    Your Message / Specific Questions
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your background, career goals, or any specific questions you have..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#0F0F0F] border border-[#1E1E1E] focus:border-[#FF6B00] rounded-xl p-4 text-xs text-white placeholder-[#666] focus:outline-none transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl bg-[#FF6B00] hover:bg-[#E55F00] text-white font-bold text-xs transition-colors cursor-pointer shadow-lg flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <span>Send Message to Admissions</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Column (5 Cols): Campus Details & FAQs */}
          <div className="lg:col-span-5 space-y-6">
            {/* Card 1: Visit Our Physical Campus */}
            <div className="rounded-3xl bg-[#0A0A0A] border border-[#1A1A1A] p-6 space-y-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FF6B00]/10 border border-[#FF6B00]/20 flex items-center justify-center text-[#FF6B00]">
                  <Building className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white font-display">
                    City FM Broadcast Complex
                  </h3>
                  <p className="text-[11px] text-[#A0A0A0]">Headquarters & Training Campus</p>
                </div>
              </div>

              {/* Photo */}
              <div className="rounded-2xl overflow-hidden aspect-[16/10] relative border border-[#1A1A1A] bg-black/60">
                <img
                  src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=800&auto=format&fit=crop"
                  alt="City Media Academy Campus Complex"
                  className="w-full h-full object-cover grayscale-[15%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                  <span className="text-xs font-bold text-white">
                    Plot 11 Lateef Jakande Road, Agidingbi, Ikeja, Lagos
                  </span>
                </div>
              </div>

              <div className="space-y-2 text-xs text-[#A0A0A0] pt-1">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#FF6B00] flex-shrink-0" />
                  <span>Landmark: Opposite Cadbury / Beside City 105.1 FM</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#FF6B00] flex-shrink-0" />
                  <span>Admissions Hotline: 0810 968 8638</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#FF6B00] flex-shrink-0" />
                  <span>General: academy@city1051fm.com</span>
                </div>
              </div>
            </div>

            {/* Card 2: Frequently Asked Questions */}
            <div className="rounded-3xl bg-[#0A0A0A] border border-[#1A1A1A] p-6 space-y-4 shadow-xl">
              <div className="flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[#FF6B00]" />
                <h3 className="text-xs font-bold text-white uppercase tracking-wider font-display">
                  Frequently Asked Questions
                </h3>
              </div>

              <div className="space-y-2.5">
                {faqs.map((faq, index) => {
                  const isOpen = expandedFaq === index;
                  return (
                    <div
                      key={index}
                      className="rounded-xl bg-[#0F0F0F] border border-[#1A1A1A] overflow-hidden transition-all"
                    >
                      <button
                        type="button"
                        onClick={() => setExpandedFaq(isOpen ? null : index)}
                        className="w-full p-3.5 flex items-center justify-between text-left hover:bg-white/[0.02] cursor-pointer"
                      >
                        <span className="text-xs font-bold text-white/90 pr-2">
                          {faq.q}
                        </span>
                        <ChevronDown
                          className={`w-3.5 h-3.5 text-[#A0A0A0] transition-transform duration-200 flex-shrink-0 ${
                            isOpen ? 'rotate-180 text-[#FF6B00]' : ''
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="p-3.5 pt-0 text-[11px] text-[#A0A0A0] leading-relaxed border-t border-[#181818] mt-1">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CAMPUS TOUR BANNER */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 py-10">
        <div className="rounded-3xl bg-[#0A0A0A] border border-[#1A1A1A] p-6 sm:p-8 lg:p-10 shadow-2xl flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#FF6B00]/10 border border-[#FF6B00]/30 text-[#FF6B00] flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_rgba(255,107,0,0.25)]">
              <Radio className="w-7 h-7" />
            </div>
            <div className="space-y-1">
              <h3 className="text-xl sm:text-2xl font-black font-display text-white">
                Book an In-Person Studio Walkthrough
              </h3>
              <p className="text-xs sm:text-sm text-[#A0A0A0]">
                Experience our professional mixing consoles, live radio booths, and production facilities in Ikeja.
              </p>
            </div>
          </div>

          <a
            href="tel:08109688638"
            className="px-6 py-3 rounded-xl bg-[#FF6B00] hover:bg-[#E55F00] text-white font-bold text-xs transition-colors cursor-pointer flex-shrink-0 shadow-md text-center"
          >
            Call Admissions: 0810 968 8638
          </a>
        </div>
      </section>

      {/* 5. RICH 4-COLUMN FOOTER */}
      <CmaFooter />
    </div>
  );
};
