import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  GraduationCap,
  Sparkles,
  CheckCircle2,
  Radio,
  Monitor,
  Shuffle,
  ArrowRight,
  User,
  Mail,
  Phone,
  BookOpen,
  Calendar,
  Building,
} from 'lucide-react';
import { useAcademyStore } from '../../store/useAcademyStore';
import { coursesData } from '../../data/courses';
import { CourseFormat } from '../../types/course';
import confetti from 'canvas-confetti';
import { CmaLogo } from '../ui/CmaLogo';

export const ApplyModal: React.FC = () => {
  const { isApplyModalOpen, closeApplyModal, activeCourseIdForModal, addToast } =
    useAcademyStore();

  const [formData, setFormData] = useState({
    selectedCourse: activeCourseIdForModal || 'broadcast-media-pro-2026',
    selectedFormat: 'Hybrid' as CourseFormat,
    fullName: '',
    email: '',
    phone: '',
    experienceLevel: 'Beginner',
    educationLevel: 'Undergraduate / Graduate',
    careerGoal: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isApplyModalOpen) return null;

  const coursesList = [
    { id: 'broadcast-media-pro-2026', name: 'Broadcast Media Pro Course 2026 (Flagship)' },
    { id: 'radio-presentation-mastery', name: 'Radio Presentation & On-Air Hosting' },
    { id: 'voiceover-audio-production', name: 'Voiceover & Audio Production Masterclass' },
    { id: 'event-hosting-public-speaking', name: 'Event Hosting, Moderation & Public Speaking' },
    { id: 'digital-media-content-creation', name: 'Digital Media & Content Strategy' },
    { id: 'broadcast-journalism-news', name: 'Broadcast Journalism & News Anchoring' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#FF6B00', '#FFA048', '#FFFFFF', '#08090E'],
      });

      addToast(
        '🎓 Application Submitted Successfully!',
        `Thank you ${formData.fullName}! Your admission application has been registered. An advisor will contact you within 24 hours.`,
        'success'
      );
    }, 800);
  };

  const handleClose = () => {
    setIsSubmitted(false);
    closeApplyModal();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-xl rounded-3xl bg-[#0A0A0A] border border-[#1E1E1E] p-6 sm:p-8 shadow-2xl z-10 text-white my-8 overflow-hidden"
        >
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF6B00]/10 rounded-full blur-[100px] pointer-events-none" />

          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 text-[#A0A0A0] hover:text-white flex items-center justify-center transition-colors cursor-pointer z-20"
          >
            <X className="w-4 h-4" />
          </button>

          {!isSubmitted ? (
            <div className="space-y-5">
              {/* Header */}
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FF6B00]">
                  <GraduationCap className="w-4 h-4" />
                  <span>Academy Admissions Application</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black font-display tracking-tight text-white">
                  Apply for Admission
                </h3>
                <p className="text-xs text-[#A0A0A0] leading-relaxed">
                  Start your training with seasoned industry broadcasters at City 105.1 FM complex.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Program Selection */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#A0A0A0] flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-[#FF6B00]" />
                    <span>Select Programme *</span>
                  </label>
                  <select
                    value={formData.selectedCourse}
                    onChange={(e) => setFormData({ ...formData, selectedCourse: e.target.value })}
                    className="w-full bg-[#0F0F0F] border border-[#1E1E1E] focus:border-[#FF6B00] rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none transition-colors"
                  >
                    {coursesList.map((c) => (
                      <option key={c.id} value={c.id} className="bg-[#141414] text-white">
                        {c.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Mode Selection */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#A0A0A0] block">
                    Preferred Study Mode *
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {(['Physical', 'Online', 'Hybrid'] as CourseFormat[]).map((mode) => (
                      <button
                        key={mode}
                        type="button"
                        onClick={() => setFormData({ ...formData, selectedFormat: mode })}
                        className={`py-2 px-2.5 rounded-xl text-xs font-bold flex flex-col items-center gap-1 border transition-all cursor-pointer ${
                          formData.selectedFormat === mode
                            ? 'bg-[#FF6B00]/15 border-[#FF6B00] text-[#FF6B00] shadow-sm'
                            : 'bg-[#0F0F0F] border-[#1E1E1E] text-[#A0A0A0] hover:text-white hover:border-[#333]'
                        }`}
                      >
                        {mode === 'Physical' && <Radio className="w-3.5 h-3.5" />}
                        {mode === 'Online' && <Monitor className="w-3.5 h-3.5" />}
                        {mode === 'Hybrid' && <Shuffle className="w-3.5 h-3.5" />}
                        <span className="text-[11px]">{mode}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Personal Information */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#A0A0A0] flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#FF6B00]" />
                    <span>Full Legal Name *</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Oluwaseun Adeleke"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-[#0F0F0F] border border-[#1E1E1E] focus:border-[#FF6B00] rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-[#555] focus:outline-none transition-colors"
                  />
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#A0A0A0] flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-[#FF6B00]" />
                      <span>Email Address *</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#0F0F0F] border border-[#1E1E1E] focus:border-[#FF6B00] rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-[#555] focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#A0A0A0] flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-[#FF6B00]" />
                      <span>Phone / WhatsApp *</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="0810 000 0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#0F0F0F] border border-[#1E1E1E] focus:border-[#FF6B00] rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-[#555] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Experience Level & Background */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#A0A0A0]">
                      Broadcasting Experience
                    </label>
                    <select
                      value={formData.experienceLevel}
                      onChange={(e) => setFormData({ ...formData, experienceLevel: e.target.value })}
                      className="w-full bg-[#0F0F0F] border border-[#1E1E1E] focus:border-[#FF6B00] rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none transition-colors"
                    >
                      <option value="Beginner" className="bg-[#141414]">Beginner (No prior experience)</option>
                      <option value="Intermediate" className="bg-[#141414]">Intermediate (Some amateur/campus radio)</option>
                      <option value="Professional" className="bg-[#141414]">Working Broadcaster / Media Professional</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#A0A0A0]">
                      Education Level
                    </label>
                    <select
                      value={formData.educationLevel}
                      onChange={(e) => setFormData({ ...formData, educationLevel: e.target.value })}
                      className="w-full bg-[#0F0F0F] border border-[#1E1E1E] focus:border-[#FF6B00] rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none transition-colors"
                    >
                      <option value="Secondary School" className="bg-[#141414]">SSCE / High School</option>
                      <option value="Undergraduate" className="bg-[#141414]">Undergraduate Student</option>
                      <option value="Graduate" className="bg-[#141414]">B.Sc / HND Graduate</option>
                      <option value="Postgraduate" className="bg-[#141414]">Postgraduate / Working Exec</option>
                    </select>
                  </div>
                </div>

                {/* Career Goal */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#A0A0A0]">
                    What is your media career aspiration? (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. I want to become an on-air radio host at a national station, launch a podcast, or produce professional voiceovers..."
                    value={formData.careerGoal}
                    onChange={(e) => setFormData({ ...formData, careerGoal: e.target.value })}
                    className="w-full bg-[#0F0F0F] border border-[#1E1E1E] focus:border-[#FF6B00] rounded-xl px-3.5 py-2 text-xs text-white placeholder-[#555] focus:outline-none transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#FF6B00] to-[#E55F00] text-white font-bold text-xs shadow-lg shadow-[#FF6B00]/30 hover:brightness-110 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 mt-2"
                >
                  {isSubmitting ? (
                    <span>Submitting Application...</span>
                  ) : (
                    <>
                      <span>Submit Admission Application</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p className="text-[10.5px] text-center text-[#777]">
                  🔒 Your information is confidential. An admissions advisor will reach out with cohort onboarding steps.
                </p>
              </form>
            </div>
          ) : (
            /* Success State */
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold font-display text-white">
                  Admission Application Received! 🎉
                </h3>
                <p className="text-xs text-[#A0A0A0] max-w-sm mx-auto leading-relaxed">
                  Thank you, <strong className="text-white">{formData.fullName}</strong>. Your application for the <strong className="text-[#FF6B00]">{formData.selectedFormat}</strong> track has been registered.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#0F0F0F] border border-[#1E1E1E] text-xs text-left space-y-2 text-[#A0A0A0]">
                <div className="flex items-start gap-2">
                  <Building className="w-3.5 h-3.5 text-[#FF6B00] flex-shrink-0 mt-0.5" />
                  <span><strong>Campus Location:</strong> Plot 11 Lateef Jakande Road, Agidingbi, Ikeja, Lagos (City FM Complex)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-[#FF6B00] flex-shrink-0" />
                  <span><strong>Upcoming Cohort:</strong> July 06, 2026 (9:00 AM WAT)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#FF6B00] flex-shrink-0" />
                  <span><strong>Admissions Officer:</strong> 0810 968 8638 / academy@city1051fm.com</span>
                </div>
              </div>

              <button
                onClick={handleClose}
                className="px-6 py-2.5 rounded-xl bg-[#FF6B00] hover:bg-[#E55F00] text-white font-bold text-xs transition-all cursor-pointer shadow-md"
              >
                Back to CMA Website
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
