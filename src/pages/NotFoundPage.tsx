import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Radio } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { CmaNavbar } from '../components/ui/CmaNavbar';
import { CmaFooter } from '../components/ui/CmaFooter';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-between selection:bg-[#FF6B00] selection:text-white">
      <Helmet>
        <title>Page Not Found | City Media Academy</title>
      </Helmet>

      <CmaNavbar />

      <div className="flex-grow flex items-center justify-center py-20 px-4 text-center">
        <div className="max-w-md space-y-6">
          <div className="w-20 h-20 rounded-3xl bg-[#FF6B00]/15 text-[#FF6B00] border border-[#FF6B00]/30 flex items-center justify-center mx-auto shadow-lg shadow-[#FF6B00]/20">
            <Radio className="w-10 h-10 animate-pulse" />
          </div>

          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl font-black font-display text-white">
              404
            </h1>
            <h2 className="text-xl font-bold text-white/90">
              Station Off-Air / Page Not Found
            </h2>
            <p className="text-xs sm:text-sm text-[#A0A0A0] max-w-sm mx-auto">
              The broadcast frequency or curriculum page you are looking for has moved or does not exist.
            </p>
          </div>

          <div className="flex items-center justify-center gap-3 pt-2">
            <Button href="/" variant="primary" size="md" icon="arrow-right">
              Back to Home
            </Button>
            <Button href="/courses" variant="outline" size="md">
              Browse Courses
            </Button>
          </div>
        </div>
      </div>

      <CmaFooter />
    </div>
  );
};
