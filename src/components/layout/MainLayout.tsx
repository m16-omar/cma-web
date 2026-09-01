import React from 'react';
import { ScrollToTop } from '../ui/ScrollToTop';
import { ToastContainer } from '../ui/ToastContainer';
import { WaitlistModal } from '../modals/WaitlistModal';
import { VideoPreviewModal } from '../modals/VideoPreviewModal';
import { LoginModal } from '../modals/LoginModal';
import { ApplyModal } from '../modals/ApplyModal';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white relative selection:bg-[#FF6B00] selection:text-white">
      <ScrollToTop />
      <ToastContainer />
      <WaitlistModal />
      <ApplyModal />
      <VideoPreviewModal />
      <LoginModal />
      <main className="flex-grow">{children}</main>
    </div>
  );
};
