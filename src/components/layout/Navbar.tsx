import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Bookmark, GraduationCap, ShieldCheck, ArrowRight } from 'lucide-react';
import { navLinks, companyDetails } from '../../data/company';
import { Button } from '../ui/Button';
import { ThemeToggle } from '../ui/ThemeToggle';
import { CmaLogo } from '../ui/CmaLogo';
import { useAcademyStore } from '../../store/useAcademyStore';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { savedCourseIds, openWaitlistModal, userRole, setUserRole } = useAcademyStore();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'py-3 bg-white/90 dark:bg-[#08090E]/90 backdrop-blur-xl border-b border-slate-200/80 dark:border-white/10 shadow-lg shadow-black/5 dark:shadow-black/50'
            : 'py-5 bg-gradient-to-b from-white/90 via-white/50 to-transparent dark:from-[#08090E]/90 dark:via-[#08090E]/50 dark:to-transparent backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link to="/" aria-label="City Media Academy Home" className="focus:outline-none">
            <CmaLogo size="md" />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              const isPortal = link.href.includes('dashboard') || link.href.includes('facilitator');

              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`relative px-3 py-2 text-sm font-medium transition-all rounded-full ${
                    isActive
                      ? 'text-[#FF6B00] dark:text-white font-bold'
                      : isPortal
                      ? 'text-slate-600 dark:text-slate-300 hover:text-[#FF6B00] dark:hover:text-[#FF6B00] hover:bg-slate-100/70 dark:hover:bg-white/5'
                      : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/70 dark:hover:bg-white/5'
                  }`}
                >
                  <span className="flex items-center gap-1.5">
                    {link.href === '/dashboard' && <GraduationCap className="w-3.5 h-3.5 text-[#FF6B00]" />}
                    {link.href === '/facilitator' && <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />}
                    {link.label}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="activeNavTab"
                      className="absolute inset-0 bg-[#FF6B00]/10 dark:bg-[#FF6B00]/15 border border-[#FF6B00]/30 dark:border-[#FF6B00]/40 rounded-full -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-2.5">
            {/* Wishlist Link */}
            <Link
              to="/courses"
              className="relative p-2 rounded-xl text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
              title="Saved Courses"
            >
              <Bookmark className="w-4 h-4" />
              {savedCourseIds.length > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-[#FF6B00] text-white text-[10px] font-bold flex items-center justify-center">
                  {savedCourseIds.length}
                </span>
              )}
            </Link>

            {/* Role Switcher Pill */}
            <div className="flex items-center bg-slate-100 dark:bg-white/5 p-1 rounded-xl border border-slate-200 dark:border-white/10 text-xs font-semibold">
              <button
                onClick={() => setUserRole('student')}
                className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
                  userRole === 'student'
                    ? 'bg-[#FF6B00] text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
                title="Student Mode"
              >
                Student
              </button>
              <button
                onClick={() => setUserRole('facilitator')}
                className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
                  userRole === 'facilitator'
                    ? 'bg-cyan-600 text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
                title="Facilitator Mode"
              >
                Facilitator
              </button>
            </div>

            <ThemeToggle />

            {/* Apply / Join Waitlist CTA */}
            <Button
              variant="primary"
              size="sm"
              icon="arrow-up-right"
              onClick={() => openWaitlistModal('broadcast-media-pro-2026')}
            >
              Join Waitlist
            </Button>
          </div>

          {/* Mobile Hamburger & Actions */}
          <div className="flex lg:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100 hover:bg-slate-200/80 dark:bg-white/5 hover:dark:bg-white/10 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-200 transition-all focus:outline-none cursor-pointer"
              aria-label="Open Mobile Menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-in Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 lg:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-slate-900/70 dark:bg-[#08090E]/90 backdrop-blur-xl"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Drawer Body */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="absolute top-0 right-0 bottom-0 w-full max-w-sm bg-white dark:bg-[#0E1017] border-l border-slate-200 dark:border-white/10 p-6 flex flex-col justify-between shadow-2xl overflow-y-auto"
            >
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-white/10">
                  <CmaLogo size="sm" />
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-9 h-9 flex items-center justify-center rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-200 cursor-pointer"
                    aria-label="Close Menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Role Switcher in Mobile Drawer */}
                <div className="bg-slate-100 dark:bg-white/5 p-2 rounded-2xl border border-slate-200 dark:border-white/10">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5 px-1">
                    Select LMS View Mode
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setUserRole('student')}
                      className={`flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold transition-all ${
                        userRole === 'student'
                          ? 'bg-[#FF6B00] text-white shadow-sm'
                          : 'bg-white dark:bg-white/5 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      <GraduationCap className="w-4 h-4" />
                      Student
                    </button>
                    <button
                      onClick={() => setUserRole('facilitator')}
                      className={`flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold transition-all ${
                        userRole === 'facilitator'
                          ? 'bg-cyan-600 text-white shadow-sm'
                          : 'bg-white dark:bg-white/5 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      <ShieldCheck className="w-4 h-4" />
                      Facilitator
                    </button>
                  </div>
                </div>

                {/* Navigation Links */}
                <nav className="flex flex-col space-y-1">
                  {navLinks.map((link) => {
                    const isActive = location.pathname === link.href;
                    return (
                      <Link
                        key={link.href}
                        to={link.href}
                        className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all ${
                          isActive
                            ? 'bg-[#FF6B00]/10 dark:bg-[#FF6B00]/15 border border-[#FF6B00]/30 text-[#FF6B00] dark:text-white font-bold'
                            : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5'
                        }`}
                      >
                        <span>{link.label}</span>
                        {isActive && <div className="w-2 h-2 rounded-full bg-[#FF6B00]" />}
                      </Link>
                    );
                  })}
                </nav>

                {/* Broadcast Affiliates */}
                <div className="pt-4 border-t border-slate-200 dark:border-white/10 space-y-2">
                  <div className="text-[11px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 px-2">
                    Network & Radio Affiliates
                  </div>
                  {companyDetails.affiliates.map((aff) => (
                    <a
                      key={aff.name}
                      href={aff.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-[#FF6B00] hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
                    >
                      <span>{aff.name}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="pt-6 border-t border-slate-200 dark:border-white/10 mt-6 space-y-3">
                <Button
                  variant="primary"
                  size="md"
                  className="w-full"
                  icon="arrow-right"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openWaitlistModal('broadcast-media-pro-2026');
                  }}
                >
                  Join Course Waitlist
                </Button>
                <p className="text-center text-[11px] text-slate-500">
                  {companyDetails.address}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
