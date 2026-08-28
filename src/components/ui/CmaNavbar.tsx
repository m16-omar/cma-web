import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GraduationCap, LogIn, Menu, X, Radio } from 'lucide-react';
import { CmaLogo } from './CmaLogo';
import { useAcademyStore } from '../../store/useAcademyStore';

export const CmaNavbar: React.FC = () => {
  const location = useLocation();
  const { openLoginModal, openWaitlistModal } = useAcademyStore();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses', matchPrefix: true },
    { name: 'Mentors', path: '/instructors', alias: '/mentors' },
    { name: 'About Us', path: '/about' },
    { name: 'Events', path: '/events' },
    { name: 'Contact', path: '/contact', alias: '/admissions' },
  ];

  const isLinkActive = (link: (typeof navLinks)[0]) => {
    if (link.path === '/') {
      return location.pathname === '/';
    }
    if (link.matchPrefix && location.pathname.startsWith('/course')) {
      return true;
    }
    if (location.pathname === link.path) {
      return true;
    }
    if (link.alias && location.pathname === link.alias) {
      return true;
    }
    return false;
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/95 backdrop-blur-xl border-b border-[#242424] shadow-[0_12px_35px_rgba(0,0,0,0.85)]'
          : 'bg-black/85 backdrop-blur-md border-b border-[#1A1A1A]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between">
        {/* Left: Brand Logo */}
        <Link to="/" className="flex items-center group select-none flex-shrink-0">
          <CmaLogo size="lg" showText={true} />
        </Link>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-9 text-[13px] font-medium tracking-wide">
          {navLinks.map((link) => {
            const active = isLinkActive(link);
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`transition-colors relative py-1 ${
                  active
                    ? 'text-[#FF6B00] font-bold border-b-2 border-[#FF6B00]'
                    : 'text-[#A0A0A0] hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right: Login + Apply Now Buttons */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Login Button (Secondary Dark) */}
          <button
            onClick={openLoginModal}
            className="flex items-center gap-1.5 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-[#0A0A0A] border border-[#1E1E1E] hover:border-[#FF6B00]/60 text-[#D1D5DB] hover:text-white text-xs font-bold transition-all hover:bg-white/[0.04] shadow-xs cursor-pointer flex-shrink-0"
          >
            <LogIn className="w-3.5 h-3.5 text-[#FF6B00]" />
            <span>Login</span>
          </button>

          {/* Apply Now Button (Primary Orange Gradient CTA) */}
          <button
            onClick={() => openWaitlistModal('broadcast-media-pro-2026')}
            className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl bg-gradient-to-r from-[#FF6B00] to-[#E55F00] hover:brightness-110 active:scale-95 text-white text-xs font-bold transition-all shadow-md shadow-[#FF6B00]/25 flex items-center gap-1.5 cursor-pointer flex-shrink-0"
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Apply Now</span>
          </button>

          {/* Mobile menu hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-[#0A0A0A] border border-[#1A1A1A] text-[#A0A0A0] hover:text-white"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A0A0A] border-b border-[#1A1A1A] px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const active = isLinkActive(link);
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 rounded-lg text-xs font-semibold ${
                    active
                      ? 'bg-[#FF6B00]/15 text-[#FF6B00]'
                      : 'text-[#A0A0A0] hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="pt-3 border-t border-[#1A1A1A] space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openWaitlistModal('broadcast-media-pro-2026');
              }}
              className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#FF6B00] to-[#E55F00] text-white text-xs font-bold flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-[#FF6B00]/20"
            >
              <GraduationCap className="w-4 h-4" />
              <span>Apply Now</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openLoginModal();
              }}
              className="w-full py-2.5 px-4 rounded-xl bg-[#0A0A0A] border border-[#1E1E1E] text-[#D1D5DB] hover:text-white text-xs font-bold flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:border-[#FF6B00]"
            >
              <LogIn className="w-4 h-4 text-[#FF6B00]" />
              <span>Portal Login</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
