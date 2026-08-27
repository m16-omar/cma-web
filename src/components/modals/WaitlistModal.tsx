import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, CheckCircle2, Radio, Monitor, Shuffle, ArrowRight } from 'lucide-react';
import { useAcademyStore } from '../../store/useAcademyStore';
import { coursesData } from '../../data/courses';
import { CourseFormat } from '../../types/course';
import confetti from 'canvas-confetti';

export const WaitlistModal: React.FC = () => {
  const { isWaitlistOpen, closeWaitlistModal, activeCourseIdForModal, addToast } = useAcademyStore();

  const activeCourse = coursesData.find((c) => c.id === activeCourseIdForModal) || coursesData[0];

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    selectedFormat: 'Hybrid' as CourseFormat,
    experienceLevel: 'Beginner',
    motivation: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone) return;

    // Trigger celebratory confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#FF6B00', '#FFA048', '#FFFFFF', '#08090E']
    });

    setIsSubmitted(true);
    addToast(
      '🎉 Application Received!',
      `You have joined the priority waitlist for ${activeCourse.title} (${formData.selectedFormat} mode). Our admissions officer will contact you via WhatsApp/Email.`,
      'success'
    );
  };

  const handleClose = () => {
    setIsSubmitted(false);
    closeWaitlistModal();
  };

  return (
    <AnimatePresence>
      {isWaitlistOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg rounded-3xl bg-white dark:bg-[#131722] border border-slate-200 dark:border-white/10 p-6 sm:p-8 shadow-2xl z-10 text-slate-900 dark:text-white my-8 overflow-hidden"
          >
            {/* Ambient orange highlight */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#FF6B00]/15 rounded-full blur-[80px] pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {!isSubmitted ? (
              <div>
                {/* Header */}
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FF6B00] mb-1.5">
                  <Sparkles className="w-4 h-4" />
                  <span>Priority Admission Waitlist</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black tracking-tight font-display">
                  {activeCourse.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                  Join the next cohort starting <strong>July 06, 2026</strong>. Class slots are limited to ensure 1-on-1 studio microphone time.
                </p>

                {/* Form */}
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  {/* Mode Selector */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                      Preferred Learning Format
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
                              : 'bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-white/20'
                          }`}
                        >
                          {mode === 'Physical' && <Radio className="w-4 h-4" />}
                          {mode === 'Online' && <Monitor className="w-4 h-4" />}
                          {mode === 'Hybrid' && <Shuffle className="w-4 h-4" />}
                          <span>{mode}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Oluwaseun Adeleke"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-[#FF6B00] focus:ring-1 focus:ring-[#FF6B00]"
                    />
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
                        className="w-full px-4 py-2.5 text-sm rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-[#FF6B00] focus:ring-1 focus:ring-[#FF6B00]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="0810 000 0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 text-sm rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-[#FF6B00] focus:ring-1 focus:ring-[#FF6B00]"
                      />
                    </div>
                  </div>

                  {/* Motivation / Background */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      What is your media career goal? (Optional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="e.g. Aspiring on-air radio host, voiceover artist, or podcaster..."
                      value={formData.motivation}
                      onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                      className="w-full px-4 py-2 text-sm rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-[#FF6B00] focus:ring-1 focus:ring-[#FF6B00] resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#FF6B00] via-[#FFA048] to-[#E55F00] text-white font-bold text-sm shadow-lg shadow-[#FF6B00]/30 hover:brightness-110 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer mt-4"
                  >
                    <span>Confirm Priority Registration</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <p className="text-[11px] text-center text-slate-500">
                    🔒 No spam. We only contact you with admission confirmations and schedule details.
                  </p>
                </form>
              </div>
            ) : (
              /* Success State */
              <div className="text-center py-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black font-display text-slate-900 dark:text-white">
                  You're on the Priority List!
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 max-w-sm mx-auto leading-relaxed">
                  Thank you, <strong>{formData.fullName}</strong>. We have registered your interest in the <strong>{formData.selectedFormat}</strong> track of <strong>{activeCourse.title}</strong>.
                </p>
                <div className="p-4 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs text-left space-y-1.5 text-slate-600 dark:text-slate-300">
                  <div>📍 <strong>Campus Location:</strong> Plot 11 Lateef Jakande Road, Agidingbi, Ikeja, Lagos</div>
                  <div>📅 <strong>Class Start:</strong> July 06, 2026 (9:00 AM)</div>
                  <div>📞 <strong>Admissions Hotline:</strong> 0810 968 8638</div>
                </div>

                <button
                  onClick={handleClose}
                  className="px-6 py-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-xs hover:bg-slate-800 dark:hover:bg-slate-100 transition-all cursor-pointer"
                >
                  Done & Back to Academy
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
