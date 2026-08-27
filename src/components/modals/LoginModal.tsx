import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  X,
  Lock,
  Mail,
  User,
  GraduationCap,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Radio,
  Check,
} from 'lucide-react';
import { useAcademyStore } from '../../store/useAcademyStore';
import { CmaLogo } from '../ui/CmaLogo';

export const LoginModal: React.FC = () => {
  const { isLoginModalOpen, closeLoginModal, setUserRole, addToast } = useAcademyStore();
  const navigate = useNavigate();

  const [role, setRole] = useState<'student' | 'facilitator'>('student');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  if (!isLoginModalOpen) return null;

  const handleDemoFill = (selectedRole: 'student' | 'facilitator') => {
    setRole(selectedRole);
    if (selectedRole === 'student') {
      setEmail('student@city1051fm.com');
      setPassword('cma2026pass');
    } else {
      setEmail('facilitator@city1051fm.com');
      setPassword('mentor2026pass');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setUserRole(role);
      closeLoginModal();
      addToast(
        'Login Successful! 🎙️',
        role === 'student'
          ? 'Welcome back to your CMA Student Portal!'
          : 'Welcome back to the CMA Facilitator Hub!',
        'success'
      );
      if (role === 'student') {
        navigate('/dashboard');
      } else {
        navigate('/facilitator');
      }
    }, 800);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeLoginModal}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-md rounded-3xl bg-[#0A0A0A] border border-[#1E1E1E] p-6 sm:p-8 shadow-2xl z-10 space-y-6 text-white"
        >
          {/* Close button */}
          <button
            onClick={closeLoginModal}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 text-[#A0A0A0] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Header */}
          <div className="text-center space-y-2">
            <div className="flex justify-center">
              <CmaLogo size="md" showText={true} />
            </div>
            <h3 className="text-xl font-bold font-display text-white mt-2">
              Academy Portal Login
            </h3>
            <p className="text-xs text-[#A0A0A0]">
              Sign in to access your course modules, live broadcasts, and grades.
            </p>
          </div>

          {/* Role Switcher */}
          <div className="grid grid-cols-2 p-1 rounded-xl bg-[#0F0F0F] border border-[#1E1E1E] gap-1">
            <button
              type="button"
              onClick={() => handleDemoFill('student')}
              className={`py-2 px-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                role === 'student'
                  ? 'bg-[#FF6B00] text-white shadow-md'
                  : 'text-[#A0A0A0] hover:text-white'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Student LMS</span>
            </button>

            <button
              type="button"
              onClick={() => handleDemoFill('facilitator')}
              className={`py-2 px-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                role === 'facilitator'
                  ? 'bg-[#FF6B00] text-white shadow-md'
                  : 'text-[#A0A0A0] hover:text-white'
              }`}
            >
              <Radio className="w-3.5 h-3.5" />
              <span>Facilitator</span>
            </button>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-[#A0A0A0]">
                Email Address or Student ID
              </label>
              <div className="relative">
                <input
                  type="text"
                  required
                  placeholder={role === 'student' ? 'student@city1051fm.com' : 'facilitator@city1051fm.com'}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#0F0F0F] border border-[#1E1E1E] focus:border-[#FF6B00] rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-[#555] focus:outline-none transition-colors"
                />
                <Mail className="w-4 h-4 text-[#666] absolute left-3.5 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-semibold text-[#A0A0A0]">Password</label>
                <span className="text-[11px] text-[#FF6B00] hover:underline cursor-pointer">
                  Forgot?
                </span>
              </div>
              <div className="relative">
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-[#0F0F0F] border border-[#1E1E1E] focus:border-[#FF6B00] rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-[#555] focus:outline-none transition-colors"
                />
                <Lock className="w-4 h-4 text-[#666] absolute left-3.5 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 rounded-xl bg-[#FF6B00] hover:bg-[#E55F00] text-white font-bold text-xs shadow-lg shadow-[#FF6B00]/25 transition-all cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isLoading ? (
                <span>Signing in...</span>
              ) : (
                <>
                  <span>Sign In to Portal</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Quick Demo Fill hint */}
          <div className="p-3 rounded-xl bg-[#0F0F0F] border border-[#1E1E1E] text-center space-y-1">
            <span className="text-[10px] text-[#A0A0A0] block">
              Quick demo access: Click either role tab above to auto-fill credentials.
            </span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
