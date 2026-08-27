import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Clock, User, CheckCircle2 } from 'lucide-react';
import { useAcademyStore } from '../../store/useAcademyStore';
import { Button } from '../ui/Button';

export const VideoPreviewModal: React.FC = () => {
  const { isPreviewVideoOpen, closePreviewModal, previewLesson, openWaitlistModal } = useAcademyStore();

  if (!previewLesson) return null;

  return (
    <AnimatePresence>
      {isPreviewVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePreviewModal}
            className="fixed inset-0 bg-slate-950/85 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-3xl rounded-3xl bg-[#0E1017] border border-white/15 p-5 sm:p-6 shadow-2xl z-10 text-white my-8 overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={closePreviewModal}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-colors cursor-pointer z-20"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Video Player Container */}
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-black border border-white/10 shadow-lg">
              <video
                controls
                autoPlay
                className="w-full h-full object-cover"
                src={
                  previewLesson.videoUrl ||
                  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
                }
                poster="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=1200&auto=format&fit=crop"
              >
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Lesson Details */}
            <div className="mt-5 space-y-3">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#FF6B00]/20 text-[#FF6B00] border border-[#FF6B00]/30">
                  Free Sample Lesson
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-400">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{previewLesson.duration}</span>
                </span>
                {previewLesson.facilitatorName && (
                  <span className="flex items-center gap-1 text-xs text-slate-300">
                    <User className="w-3.5 h-3.5 text-[#FFA048]" />
                    <span>Facilitator: {previewLesson.facilitatorName}</span>
                  </span>
                )}
              </div>

              <h3 className="text-lg sm:text-xl font-bold font-display text-white">
                {previewLesson.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {previewLesson.description ||
                  'Sample lesson preview from City Media Academy broadcast media curriculum. Experience how our facilitators break down complex studio and presentation concepts.'}
              </p>

              {/* Bottom CTAs */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="text-xs text-slate-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Unlock all 8 pillars and 28+ lessons in the full course</span>
                </div>

                <Button
                  variant="primary"
                  size="sm"
                  icon="arrow-up-right"
                  onClick={() => {
                    closePreviewModal();
                    openWaitlistModal('broadcast-media-pro-2026');
                  }}
                >
                  Join Course Waitlist
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
