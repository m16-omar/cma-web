import React from 'react';
import { Search, Radio, Monitor, Shuffle, SlidersHorizontal } from 'lucide-react';
import { CourseFormat } from '../../types/course';
import { useAcademyStore } from '../../store/useAcademyStore';

interface CourseFiltersProps {
  categories: string[];
  totalResults: number;
}

export const CourseFilters: React.FC<CourseFiltersProps> = ({ categories, totalResults }) => {
  const {
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    selectedFormatFilter,
    setSelectedFormatFilter,
  } = useAcademyStore();

  const formats: { value: 'All' | CourseFormat; label: string; icon: any }[] = [
    { value: 'All', label: 'All Formats', icon: SlidersHorizontal },
    { value: 'Hybrid', label: 'Hybrid (Physical + Online)', icon: Shuffle },
    { value: 'Physical', label: 'Physical Studio Only', icon: Radio },
    { value: 'Online', label: 'Online Live LMS', icon: Monitor },
  ];

  return (
    <div className="space-y-5">
      {/* Top Row: Search Input & Format Toggles */}
      <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between">
        {/* Search Bar */}
        <div className="relative flex-1 max-w-lg">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search courses, broadcasting pillars, radio presentation, voiceover..."
            className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white dark:bg-[#131722] border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 text-sm shadow-sm focus:outline-none focus:border-[#FF6B00] focus:ring-1 focus:ring-[#FF6B00]"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              Clear
            </button>
          )}
        </div>

        {/* Dual Mode Format Filter Buttons */}
        <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-slate-100 dark:bg-[#131722] border border-slate-200 dark:border-white/10 overflow-x-auto scrollbar-none">
          {formats.map((fmt) => {
            const Icon = fmt.icon;
            const isSelected = selectedFormatFilter === fmt.value;

            return (
              <button
                key={fmt.value}
                onClick={() => setSelectedFormatFilter(fmt.value)}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#FF6B00] text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{fmt.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
        <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 whitespace-nowrap mr-1">
          Categories:
        </span>
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat;

          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                isSelected
                  ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-sm font-bold'
                  : 'bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:border-[#FF6B00]/40'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Results Counter & Active Query Feedback */}
      <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
        <span>
          Showing <strong>{totalResults}</strong> course{totalResults === 1 ? '' : 's'}
        </span>
        {(searchQuery || selectedCategory !== 'All' || selectedFormatFilter !== 'All') && (
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('All');
              setSelectedFormatFilter('All');
            }}
            className="text-[#FF6B00] hover:underline font-semibold cursor-pointer"
          >
            Reset Filters
          </button>
        )}
      </div>
    </div>
  );
};
