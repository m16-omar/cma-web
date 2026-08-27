import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Clock,
  Star,
  Users,
  Award,
  Bookmark,
  ArrowUpRight,
  Radio,
  Monitor,
  Shuffle,
  Play,
  Calendar,
} from 'lucide-react';
import { Course } from '../../types/course';
import { FormatBadge, CategoryBadge } from '../ui/Badge';
import { useAcademyStore } from '../../store/useAcademyStore';

interface CourseCardProps {
  course: Course;
  index?: number;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course, index = 0 }) => {
  const { savedCourseIds, toggleSaveCourse, openWaitlistModal } = useAcademyStore();
  const isSaved = savedCourseIds.includes(course.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="group relative flex flex-col rounded-3xl bg-white dark:bg-[#131722] border border-slate-200/90 dark:border-white/10 overflow-hidden shadow-lg shadow-black/5 dark:shadow-black/40 hover:border-[#FF6B00]/40 transition-all duration-300 hover:-translate-y-1.5"
    >
      {/* Card Thumbnail */}
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
        <img
          src={course.thumbnail}
          alt={course.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2">
          <CategoryBadge label={course.category} />

          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleSaveCourse(course.id);
            }}
            className={`w-9 h-9 rounded-full flex items-center justify-center backdrop-blur-md border transition-all cursor-pointer ${
              isSaved
                ? 'bg-[#FF6B00] text-white border-[#FF6B00]'
                : 'bg-black/40 hover:bg-black/60 text-white/80 hover:text-white border-white/20'
            }`}
            aria-label="Save Course"
          >
            <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
          </button>
        </div>

        {/* Bottom Thumbnail Overlay Info */}
        <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between text-xs text-white">
          <FormatBadge format={course.format} />
          <div className="flex items-center gap-1 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 font-bold">
            <Star className="w-3.5 h-3.5 text-[#FFA048] fill-current" />
            <span>{course.rating.toFixed(2)}</span>
            <span className="text-white/60 font-normal">({course.reviewCount})</span>
          </div>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2.5">
          {/* Schedule / Cohort start badge */}
          <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[#FF6B00]">
            <Calendar className="w-3.5 h-3.5" />
            <span>Starts {course.schedule.startDate} • {course.durationWeeks} Weeks</span>
          </div>

          <Link to={`/courses/${course.slug}`}>
            <h3 className="text-base sm:text-lg font-bold font-display text-slate-900 dark:text-white leading-snug group-hover:text-[#FF6B00] transition-colors line-clamp-2">
              {course.title}
            </h3>
          </Link>

          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-2">
            {course.shortDescription}
          </p>
        </div>

        {/* Feature Highlights Pills */}
        <div className="pt-3 border-t border-slate-100 dark:border-white/5 grid grid-cols-2 gap-2 text-[11px] text-slate-600 dark:text-slate-400">
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#FF6B00]" />
            <span>{course.totalHours} Total Hours</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5 text-cyan-400" />
            <span>{course.studentsCount.toLocaleString()}+ Alumni</span>
          </div>
          <div className="flex items-center gap-1.5 col-span-2 text-emerald-600 dark:text-emerald-400 font-medium">
            <Award className="w-3.5 h-3.5 flex-shrink-0" />
            <span className="truncate">City FM Internship Included</span>
          </div>
        </div>

        {/* Instructors Avatars Row */}
        {course.instructors && course.instructors.length > 0 && (
          <div className="flex items-center justify-between text-xs pt-2">
            <div className="flex items-center -space-x-2">
              {course.instructors.slice(0, 3).map((inst) => (
                <img
                  key={inst.id}
                  src={inst.avatar}
                  alt={inst.name}
                  className="w-7 h-7 rounded-full object-cover border-2 border-white dark:border-[#131722]"
                  title={inst.name}
                />
              ))}
              {course.instructors.length > 3 && (
                <div className="w-7 h-7 rounded-full bg-slate-200 dark:bg-white/10 text-slate-700 dark:text-slate-300 text-[10px] font-bold flex items-center justify-center border-2 border-white dark:border-[#131722]">
                  +{course.instructors.length - 3}
                </div>
              )}
            </div>
            <span className="text-[11px] text-slate-500">
              {course.instructors.length} Lead Mentors
            </span>
          </div>
        )}

        {/* Card Footer: Pricing & Action Button */}
        <div className="pt-4 border-t border-slate-100 dark:border-white/10 flex items-center justify-between gap-3">
          <div>
            <div className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">
              Tuition Fee
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                {course.price.formatted}
              </span>
              {course.price.originalPrice && (
                <span className="text-[11px] text-slate-400 line-through">
                  ₦{course.price.originalPrice.toLocaleString()}
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <Link
              to={`/courses/${course.slug}`}
              className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-slate-800 dark:text-slate-200 transition-colors"
              title="View Curriculum Details"
            >
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <button
              onClick={() => openWaitlistModal(course.id)}
              className="px-3.5 py-2 text-xs font-bold rounded-xl bg-[#FF6B00] hover:bg-[#E55F00] text-white shadow-md shadow-[#FF6B00]/25 transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              Join Waitlist
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
