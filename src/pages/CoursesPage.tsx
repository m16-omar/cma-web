import React, { useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { coursesData } from '../data/courses';
import { CourseCard } from '../components/course/CourseCard';
import { CourseFilters } from '../components/course/CourseFilters';
import { useAcademyStore } from '../store/useAcademyStore';
import { BookOpen, Sparkles, AlertCircle } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const CoursesPage: React.FC = () => {
  const { searchQuery, selectedCategory, selectedFormatFilter } = useAcademyStore();

  const categories = useMemo(() => {
    const set = new Set<string>();
    coursesData.forEach((c) => set.add(c.category));
    return ['All', ...Array.from(set)];
  }, []);

  const filteredCourses = useMemo(() => {
    return coursesData.filter((course) => {
      // Category filter
      if (selectedCategory !== 'All' && course.category !== selectedCategory) {
        return false;
      }

      // Format filter (Physical / Online / Hybrid)
      if (selectedFormatFilter !== 'All') {
        const matchesFormat =
          course.format === selectedFormatFilter ||
          course.supportedFormats.includes(selectedFormatFilter);
        if (!matchesFormat) return false;
      }

      // Search Query filter
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const inTitle = course.title.toLowerCase().includes(query);
        const inDesc = course.description.toLowerCase().includes(query);
        const inCategory = course.category.toLowerCase().includes(query);
        const inPillars = course.pillars.some((p) =>
          p.title.toLowerCase().includes(query) || p.description.toLowerCase().includes(query)
        );
        const inInstructors = course.instructors.some((inst) =>
          inst.name.toLowerCase().includes(query) || inst.role.toLowerCase().includes(query)
        );

        if (!inTitle && !inDesc && !inCategory && !inPillars && !inInstructors) {
          return false;
        }
      }

      return true;
    });
  }, [searchQuery, selectedCategory, selectedFormatFilter]);

  return (
    <>
      <Helmet>
        <title>Course Catalog | City Media Academy</title>
        <meta
          name="description"
          content="Explore City Media Academy courses in broadcast presentation, voiceover mastery, podcast production, digital journalism, and media entrepreneurship."
        />
      </Helmet>

      <div className="py-12 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="space-y-4 mb-10 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/25 text-xs font-bold text-[#FF6B00] uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>Interactive Media Catalog</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-slate-900 dark:text-white tracking-tight">
            Explore CMA Media Programmes
          </h1>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl">
            Choose between <strong>Physical Studio bootcamps</strong> in Ikeja, <strong>Online Interactive LMS</strong> classes, or comprehensive <strong>Hybrid cohorts</strong> with live station internships.
          </p>
        </div>

        {/* Filters & Search Component */}
        <div className="mb-10 p-6 rounded-3xl bg-slate-50 dark:bg-[#0E1017] border border-slate-200 dark:border-white/10 shadow-sm">
          <CourseFilters categories={categories} totalResults={filteredCourses.length} />
        </div>

        {/* Course Cards Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course, idx) => (
              <CourseCard key={course.id} course={course} index={idx} />
            ))}
          </div>
        ) : (
          /* Empty Search State */
          <div className="text-center py-16 px-4 rounded-3xl bg-white dark:bg-[#131722] border border-slate-200 dark:border-white/10 space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center mx-auto">
              <AlertCircle className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white">
              No Courses Match Your Filter
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
              We couldn't find any courses matching your search query or format preference. Try resetting the filters.
            </p>
            <div className="pt-2">
              <Button
                variant="primary"
                size="sm"
                onClick={() => {
                  useAcademyStore.getState().setSearchQuery('');
                  useAcademyStore.getState().setSelectedCategory('All');
                  useAcademyStore.getState().setSelectedFormatFilter('All');
                }}
              >
                Reset All Filters
              </Button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
