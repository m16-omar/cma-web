import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Bell,
  Sparkles,
  CheckCircle2,
  Radio,
  Monitor,
  Shuffle,
  ArrowRight,
  User,
  Mail,
  Phone,
  MessageCircle,
  Clock,
  Building,
} from 'lucide-react';
import { useAcademyStore } from '../../store/useAcademyStore';
import { coursesData } from '../../data/courses';
import { CourseFormat } from '../../types/course';
import confetti from 'canvas-confetti';

export const WaitlistModal: React.FC = () => {
  const { isWaitlistOpen, closeWaitlistModal, activeCourseIdForModal, addToast } =
    useAcademyStore();

  const activeCourse =
    coursesData.find((c) => c.id === activeCourseIdForModal) || coursesData[0];

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    selectedFormat: 'Hybrid' as CourseFormat,
    notifyVia: 'WhatsApp & Email',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isWaitlistOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#FF6B00', '#FFA048', '#FFFFFF', '#08090E'],
      });

      addToast(
        '🔔 Added to Priority Waitlist!',
        `You'll receive an early alert via ${formData.notifyVia} as soon as slots open for ${activeCourse.title}.`,
        'success'
      );
    }, 700);
  };

  const handleClose = () => {
    setIsSubmitted(false);
    closeWaitlistModal();
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
          className="relative w-full max-w-lg rounded-3xl bg-[#0A0A0A] border border-[#1E1E1E] p-6 sm:p-8 shadow-2xl z-10 text-white my-8 overflow-hidden"
        >
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-60 h-60 bg-[#FF6B00]/10 rounded-full blur-[90px] pointer-events-none" />

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
              <div className="space-y-1.5">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF6B00]/15 border border-[#FF6B00]/30 text-[11px] font-bold uppercase tracking-wider text-[#FF6B00]">
                  <Bell className="w-3.5 h-3.5" />
                  <span>Cohort Waitlist Notification</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black font-display tracking-tight text-white">
                  {activeCourse.title}
                </h3>
                <p className="text-xs text-[#A0A0A0] leading-relaxed">
                  Registration for the current batch is closed. Join the priority waitlist to get early-bird registration access before public announcement.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Learning Format */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#A0A0A0] block">
                    Preferred Learning Format *
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

                {/* Full Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#A0A0A0] flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#FF6B00]" />
                    <span>Full Name *</span>
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

                {/* Email & WhatsApp */}
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
                      <span>WhatsApp Phone *</span>
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

                {/* Notification Preference */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#A0A0A0] flex items-center gap-1.5">
                    <MessageCircle className="w-3.5 h-3.5 text-[#FF6B00]" />
                    <span>Preferred Notification Channel</span>
                  </label>
                  <select
                    value={formData.notifyVia}
                    onChange={(e) => setFormData({ ...formData, notifyVia: e.target.value })}
                    className="w-full bg-[#0F0F0F] border border-[#1E1E1E] focus:border-[#FF6B00] rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none transition-colors"
                  >
                    <option value="WhatsApp & Email" className="bg-[#141414]">WhatsApp & Email (Fastest)</option>
                    <option value="WhatsApp Only" className="bg-[#141414]">WhatsApp Direct Message</option>
                    <option value="Email Only" className="bg-[#141414]">Email Only</option>
                    <option value="Phone Call" className="bg-[#141414]">Phone Call from Admissions Officer</option>
                  </select>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#FF6B00] to-[#E55F00] text-white font-bold text-xs shadow-lg shadow-[#FF6B00]/30 hover:brightness-110 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 mt-2"
                >
                  {isSubmitting ? (
                    <span>Joining Waitlist...</span>
                  ) : (
                    <>
                      <Bell className="w-4 h-4" />
                      <span>Join Priority Waitlist</span>
                    </>
                  )}
                </button>

                <p className="text-[10.5px] text-center text-[#777]">
                  🔒 No spam. We only contact you when the new batch opens.
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
                  You're on the Priority Waitlist! 🔔
                </h3>
                <p className="text-xs text-[#A0A0A0] max-w-sm mx-auto leading-relaxed">
                  Thank you, <strong className="text-white">{formData.fullName}</strong>. You will be notified first via <strong className="text-[#FF6B00]">{formData.notifyVia}</strong> when registration opens for <strong>{activeCourse.title}</strong>.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#0F0F0F] border border-[#1E1E1E] text-xs text-left space-y-2 text-[#A0A0A0]">
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#FF6B00] flex-shrink-0" />
                  <span><strong>Next Cohort Start:</strong> July 06, 2026</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building className="w-3.5 h-3.5 text-[#FF6B00] flex-shrink-0" />
                  <span><strong>Campus:</strong> Plot 11 Lateef Jakande Road, Agidingbin Ikeja, Lagos Nigeria</span>
                </div>
              </div>

              <button
                onClick={handleClose}
                className="px-6 py-2.5 rounded-xl bg-[#FF6B00] hover:bg-[#E55F00] text-white font-bold text-xs transition-all cursor-pointer shadow-md"
              >
                Back to Academy
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
