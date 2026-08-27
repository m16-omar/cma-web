import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Radio, ArrowLeft, Home } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const NotFoundPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found | City Media Academy</title>
      </Helmet>

      <div className="min-h-[60vh] flex items-center justify-center py-16 px-4 text-center">
        <div className="max-w-md space-y-6">
          <div className="w-20 h-20 rounded-3xl bg-[#FF6B00]/15 text-[#FF6B00] border border-[#FF6B00]/30 flex items-center justify-center mx-auto shadow-lg shadow-[#FF6B00]/20">
            <Radio className="w-10 h-10 animate-pulse" />
          </div>

          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl font-black font-display text-slate-900 dark:text-white">
              404
            </h1>
            <h2 className="text-xl font-bold text-slate-800 dark:text-slate-200">
              Station Off-Air / Page Not Found
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 max-w-sm mx-auto">
              The broadcast frequency or curriculum page you are looking for has moved or does not exist.
            </p>
          </div>

          <div className="flex items-center justify-center gap-3">
            <Button href="/" variant="primary" size="md" icon="arrow-right">
              Back to Home
            </Button>
            <Button href="/courses" variant="outline" size="md">
              Browse Courses
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
