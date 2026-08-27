import React from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ScrollToTop } from '../ui/ScrollToTop';
import { ToastContainer } from '../ui/ToastContainer';
import { WaitlistModal } from '../modals/WaitlistModal';
import { VideoPreviewModal } from '../modals/VideoPreviewModal';
import { LoginModal } from '../modals/LoginModal';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const location = useLocation();
  const isReplicaPage =
    location.pathname === '/' ||
    location.pathname === '/courses' ||
    location.pathname.startsWith('/course') ||
    location.pathname === '/instructors' ||
    location.pathname === '/mentors' ||
    location.pathname === '/about' ||
    location.pathname === '/events' ||
    location.pathname === '/contact' ||
    location.pathname === '/admissions';

  if (isReplicaPage) {
    return (
      <div className="min-h-screen flex flex-col bg-black text-white relative overflow-x-hidden selection:bg-[#FF6B00] selection:text-white">
        <ScrollToTop />
        <ToastContainer />
        <WaitlistModal />
        <VideoPreviewModal />
        <LoginModal />
        <main className="flex-grow">{children}</main>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F9FC] dark:bg-[#08090E] text-slate-900 dark:text-slate-100 selection:bg-[#FF6B00] selection:text-white relative overflow-x-hidden transition-colors duration-300">
      <ScrollToTop />
      <ToastContainer />
      <WaitlistModal />
      <VideoPreviewModal />
      <LoginModal />

      {/* Background ambient lighting effects */}
      <div className="fixed top-0 left-1/4 w-[600px] h-[600px] bg-[#FF6B00]/5 dark:bg-[#FF6B00]/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="fixed top-1/2 right-1/4 w-[500px] h-[500px] bg-[#FFA048]/5 dark:bg-[#FFA048]/5 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="fixed bottom-0 left-1/3 w-[700px] h-[500px] bg-slate-200/50 dark:bg-[#0E1017]/80 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Sticky Header */}
      <Navbar />

      {/* Main Page Body */}
      <main className="flex-grow pt-24">{children}</main>

      {/* Rich Footer */}
      <Footer />
    </div>
  );
};
