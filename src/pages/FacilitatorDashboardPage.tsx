import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FacilitatorAttendanceTool } from '../components/lms/FacilitatorAttendanceTool';
import { ShieldCheck } from 'lucide-react';
import { useAcademyStore } from '../store/useAcademyStore';

export const FacilitatorDashboardPage: React.FC = () => {
  const { roster } = useAcademyStore();

  const avgAttendance = Math.round(
    roster.reduce((acc, curr) => acc + curr.attendanceRate, 0) / roster.length
  );
  const avgProgress = Math.round(
    roster.reduce((acc, curr) => acc + curr.progressPercent, 0) / roster.length
  );

  return (
    <>
      <Helmet>
        <title>Facilitator Hub | City Media Academy</title>
        <meta
          name="description"
          content="City Media Academy Facilitator Hub. Manage cohort class rosters, mark live physical and online attendance, and publish session notes."
        />
      </Helmet>

      <div className="py-10 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Facilitator Header */}
        <div className="rounded-3xl bg-white dark:bg-[#131722] border border-slate-200 dark:border-white/10 p-6 sm:p-8 shadow-xl mb-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 p-0.5 flex-shrink-0 shadow-lg shadow-cyan-500/30">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop"
                  alt="Facilitator Avatar"
                  className="w-full h-full object-cover rounded-[14px]"
                />
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-cyan-500/15 text-cyan-400 border border-cyan-500/30 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Faculty Lead & Mentor</span>
                  </span>
                  <span className="text-xs font-semibold text-slate-500">
                    City 105.1 FM
                  </span>
                </div>
                <h1 className="text-xl sm:text-2xl font-black font-display text-slate-900 dark:text-white mt-1">
                  Facilitator Hub: Shola Thompson
                </h1>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Assigned Cohort: <strong>Broadcast Media Pro Course 2026 (Cohort Alpha)</strong>
                </p>
              </div>
            </div>

            {/* Quick Cohort Summary */}
            <div className="grid grid-cols-3 gap-3">
              <div className="p-3 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 text-center min-w-[90px]">
                <div className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">
                  {roster.length}
                </div>
                <div className="text-[10px] uppercase font-bold text-slate-500">Cohort Size</div>
              </div>

              <div className="p-3 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 text-center min-w-[90px]">
                <div className="text-lg sm:text-xl font-black text-cyan-400">
                  {avgAttendance}%
                </div>
                <div className="text-[10px] uppercase font-bold text-slate-500">Avg Attendance</div>
              </div>

              <div className="p-3 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 text-center min-w-[90px]">
                <div className="text-lg sm:text-xl font-black text-[#FF6B00]">
                  {avgProgress}%
                </div>
                <div className="text-[10px] uppercase font-bold text-slate-500">Avg LMS Done</div>
              </div>
            </div>
          </div>
        </div>

        {/* Live Attendance Tool Component */}
        <FacilitatorAttendanceTool />
      </div>
    </>
  );
};
