import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronDown,
  Play,
  Lock,
  Clock,
  Radio,
  Monitor,
  Shuffle,
  CheckCircle2,
  Sparkles,
  BookOpen,
} from 'lucide-react';
import { PillarModule, Lesson } from '../../types/course';
import { useAcademyStore } from '../../store/useAcademyStore';

interface CurriculumAccordionProps {
  pillars: PillarModule[];
  allowCompletionToggle?: boolean;
}

export const CurriculumAccordion: React.FC<CurriculumAccordionProps> = ({
  pillars,
  allowCompletionToggle = false,
}) => {
  // Expand first pillar by default
  const [expandedPillars, setExpandedPillars] = useState<string[]>([
    pillars[0]?.id || 'pillar-1',
  ]);

  const { openPreviewModal, studentEnrollment, toggleLessonCompletion } = useAcademyStore();

  const togglePillar = (id: string) => {
    setExpandedPillars((prev) =>
      prev.includes(id) ? prev.filter((pId) => pId !== id) : [...prev, id]
    );
  };

  const expandAll = () => {
    setExpandedPillars(pillars.map((p) => p.id));
  };

  const collapseAll = () => {
    setExpandedPillars([]);
  };

  const totalLessons = pillars.reduce((sum, p) => sum + p.lessons.length, 0);

  return (
    <div className="space-y-4">
      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-2">
        <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
          <span className="font-bold text-slate-900 dark:text-white">
            {pillars.length} Comprehensive Pillars
          </span>
          <span>•</span>
          <span>{totalLessons} Studio & LMS Lessons</span>
          <span>•</span>
          <span>75 Total Hours</span>
        </div>

        <div className="flex items-center gap-2 text-xs">
          <button
            onClick={expandAll}
            className="text-[#FF6B00] hover:underline font-semibold cursor-pointer"
          >
            Expand All
          </button>
          <span className="text-slate-400">|</span>
          <button
            onClick={collapseAll}
            className="text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 cursor-pointer"
          >
            Collapse All
          </button>
        </div>
      </div>

      {/* Accordion Pillars List */}
      <div className="space-y-3">
        {pillars.map((pillar) => {
          const isExpanded = expandedPillars.includes(pillar.id);

          return (
            <div
              key={pillar.id}
              className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                isExpanded
                  ? 'bg-white dark:bg-[#131722] border-[#FF6B00]/30 shadow-md shadow-black/5 dark:shadow-black/30'
                  : 'bg-slate-50/80 dark:bg-white/5 border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20'
              }`}
            >
              {/* Pillar Header */}
              <button
                onClick={() => togglePillar(pillar.id)}
                className="w-full p-4 sm:p-5 flex items-center justify-between gap-4 text-left cursor-pointer focus:outline-none"
              >
                <div className="flex items-start sm:items-center gap-3.5 min-w-0">
                  {/* Pillar Number Badge */}
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 font-display font-black text-sm transition-colors ${
                      isExpanded
                        ? 'bg-[#FF6B00] text-white shadow-md shadow-[#FF6B00]/25'
                        : 'bg-slate-200 dark:bg-white/10 text-slate-800 dark:text-slate-200'
                    }`}
                  >
                    P{pillar.number}
                  </div>

                  <div>
                    <h4 className="text-sm sm:text-base font-bold font-display text-slate-900 dark:text-white leading-tight">
                      Pillar {pillar.number}: {pillar.title}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-1">
                      {pillar.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 flex-shrink-0">
                  <span className="hidden sm:inline-block text-xs font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-white/5 px-2.5 py-1 rounded-lg border border-slate-200/60 dark:border-white/5">
                    {pillar.lessons.length} Lessons • {pillar.duration}
                  </span>

                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${
                      isExpanded ? 'rotate-180 text-[#FF6B00]' : ''
                    }`}
                  />
                </div>
              </button>

              {/* Collapsible Lessons */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="border-t border-slate-100 dark:border-white/10"
                  >
                    <div className="p-3 sm:p-4 space-y-2 bg-slate-50/50 dark:bg-black/20">
                      {pillar.lessons.map((lesson: Lesson) => {
                        const isCompleted =
                          studentEnrollment.completedLessons.includes(lesson.id);

                        return (
                          <div
                            key={lesson.id}
                            className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-xl bg-white dark:bg-[#0E1017] border border-slate-200/80 dark:border-white/5 gap-3 hover:border-slate-300 dark:hover:border-white/15 transition-colors"
                          >
                            <div className="flex items-start gap-3 min-w-0">
                              {/* Play or Lock Icon */}
                              <div className="mt-0.5 flex-shrink-0">
                                {allowCompletionToggle ? (
                                  <button
                                    onClick={() => toggleLessonCompletion(lesson.id)}
                                    className={`w-5 h-5 rounded-md flex items-center justify-center border transition-all cursor-pointer ${
                                      isCompleted
                                        ? 'bg-emerald-500 text-white border-emerald-500'
                                        : 'border-slate-300 dark:border-white/20 hover:border-[#FF6B00]'
                                    }`}
                                    title={isCompleted ? 'Mark Incomplete' : 'Mark Completed'}
                                  >
                                    {isCompleted && <CheckCircle2 className="w-3.5 h-3.5" />}
                                  </button>
                                ) : lesson.isPreview ? (
                                  <button
                                    onClick={() => openPreviewModal(lesson)}
                                    className="w-7 h-7 rounded-lg bg-[#FF6B00]/15 text-[#FF6B00] hover:bg-[#FF6B00] hover:text-white flex items-center justify-center transition-all cursor-pointer border border-[#FF6B00]/30 shadow-xs"
                                    title="Watch Free Lesson Preview"
                                  >
                                    <Play className="w-3 h-3 fill-current ml-0.5" />
                                  </button>
                                ) : (
                                  <div className="w-7 h-7 rounded-lg bg-slate-100 dark:bg-white/5 text-slate-400 flex items-center justify-center border border-slate-200 dark:border-white/10">
                                    <Lock className="w-3.5 h-3.5" />
                                  </div>
                                )}
                              </div>

                              <div>
                                <div className="flex items-center gap-2 flex-wrap">
                                  <h5 className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">
                                    {lesson.title}
                                  </h5>
                                  {lesson.isPreview && (
                                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                                      Free Preview
                                    </span>
                                  )}
                                </div>

                                {lesson.description && (
                                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1">
                                    {lesson.description}
                                  </p>
                                )}
                              </div>
                            </div>

                            {/* Lesson Mode & Duration Meta */}
                            <div className="flex items-center gap-2.5 self-end sm:self-center text-xs flex-shrink-0">
                              {lesson.facilitatorName && (
                                <span className="text-[11px] text-slate-500 dark:text-slate-400 hidden md:inline-block">
                                  Mentor: <strong className="text-slate-700 dark:text-slate-200">{lesson.facilitatorName}</strong>
                                </span>
                              )}

                              {/* Mode badge */}
                              <span
                                className={`inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-md border ${
                                  lesson.mode === 'Physical'
                                    ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20'
                                    : lesson.mode === 'Online'
                                    ? 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20'
                                    : 'bg-[#FF6B00]/10 text-[#FF6B00] border-[#FF6B00]/20'
                                }`}
                              >
                                {lesson.mode === 'Physical' && <Radio className="w-2.5 h-2.5" />}
                                {lesson.mode === 'Online' && <Monitor className="w-2.5 h-2.5" />}
                                {lesson.mode === 'Hybrid' && <Shuffle className="w-2.5 h-2.5" />}
                                <span>{lesson.mode}</span>
                              </span>

                              <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400 font-mono text-[11px]">
                                <Clock className="w-3 h-3" />
                                <span>{lesson.duration}</span>
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
};
