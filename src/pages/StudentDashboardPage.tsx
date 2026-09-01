import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useAcademyStore } from '../store/useAcademyStore';
import { coursesData } from '../data/courses';
import { CurriculumAccordion } from '../components/course/CurriculumAccordion';
import { SessionTracker } from '../components/lms/SessionTracker';
import { FormatBadge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import {
  GraduationCap,
  Calendar,
  Clock,
  MapPin,
  Video,
  Award,
  BookOpen,
  CheckCircle2,
  AlertCircle,
  Radio,
  FileText,
  Download,
} from 'lucide-react';
import { CmaNavbar } from '../components/ui/CmaNavbar';
import { CmaFooter } from '../components/ui/CmaFooter';

export const StudentDashboardPage: React.FC = () => {
  const { studentEnrollment, addToast } = useAcademyStore();
  const [activeTab, setActiveTab] = useState<'sessions' | 'curriculum' | 'internship' | 'certificate'>('sessions');

  const course = coursesData.find((c) => c.id === studentEnrollment.courseId) || coursesData[0];

  const presentCount = studentEnrollment.attendanceRecord.filter((s) => s.status === 'Present').length;
  const totalCompletedSessions = studentEnrollment.attendanceRecord.filter((s) => s.status !== 'Pending').length;
  const attendanceRate = totalCompletedSessions > 0 ? Math.round((presentCount / totalCompletedSessions) * 100) : 100;

  const handleDownloadCertificate = () => {
    if (studentEnrollment.progressPercent < 100) {
      addToast(
        'Certificate Locked',
        'Complete all 8 pillars and submit your studio demo reel to unlock your official verified certificate.',
        'warning'
      );
    } else {
      addToast(
        'Downloading Certificate...',
        'Your CMA Broadcast Competency Certificate is generating in PDF format.',
        'success'
      );
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-between selection:bg-[#FF6B00] selection:text-white">
      <Helmet>
        <title>Student Portal (LMS) | City Media Academy</title>
        <meta
          name="description"
          content="City Media Academy Student Portal. Track your live physical and online sessions, attendance records, curriculum progress, and City FM internship."
        />
      </Helmet>

      <CmaNavbar />

      <div className="py-10 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Student Welcome Header */}
        <div className="rounded-3xl bg-white dark:bg-[#131722] border border-slate-200 dark:border-white/10 p-6 sm:p-8 shadow-xl mb-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF6B00]/10 rounded-full blur-[100px] pointer-events-none -z-10" />

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FF6B00] to-[#E55F00] p-0.5 flex-shrink-0 shadow-lg shadow-[#FF6B00]/30">
                <img
                  src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=300&auto=format&fit=crop"
                  alt="Student Avatar"
                  className="w-full h-full object-cover rounded-[14px]"
                />
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#FF6B00]/15 text-[#FF6B00] border border-[#FF6B00]/30">
                    Active Student • Cohort Alpha
                  </span>
                  <FormatBadge format={studentEnrollment.selectedFormat} size="sm" />
                </div>
                <h1 className="text-xl sm:text-2xl font-black font-display text-slate-900 dark:text-white mt-1">
                  Welcome Back, David Adeleke
                </h1>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Enrolled in: <strong className="text-slate-700 dark:text-slate-200">{course.title}</strong>
                </p>
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-3">
              <div className="p-3 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 text-center min-w-[90px]">
                <div className="text-lg sm:text-xl font-black text-[#FF6B00]">
                  {studentEnrollment.progressPercent}%
                </div>
                <div className="text-[10px] uppercase font-bold text-slate-500">Course Progress</div>
              </div>

              <div className="p-3 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 text-center min-w-[90px]">
                <div className="text-lg sm:text-xl font-black text-emerald-500">
                  {attendanceRate}%
                </div>
                <div className="text-[10px] uppercase font-bold text-slate-500">Attendance</div>
              </div>

              <div className="p-3 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 text-center min-w-[90px]">
                <div className="text-lg sm:text-xl font-black text-cyan-400">
                  {studentEnrollment.completedLessons.length}/28
                </div>
                <div className="text-[10px] uppercase font-bold text-slate-500">Lessons Done</div>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-6 pt-5 border-t border-slate-100 dark:border-white/10 space-y-2">
            <div className="flex items-center justify-between text-xs font-semibold">
              <span className="text-slate-600 dark:text-slate-300">
                LMS Curriculum Completion
              </span>
              <span className="text-[#FF6B00] font-bold">
                {studentEnrollment.completedLessons.length} of 28 Lessons ({studentEnrollment.progressPercent}%)
              </span>
            </div>
            <div className="w-full h-3 rounded-full bg-slate-200 dark:bg-white/10 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#FF6B00] to-[#FFA048] rounded-full transition-all duration-500"
                style={{ width: `${studentEnrollment.progressPercent}%` }}
              />
            </div>
          </div>
        </div>

        {/* Next Class Alert Card */}
        <div className="p-5 rounded-2xl bg-gradient-to-r from-amber-500/15 via-[#FF6B00]/15 to-transparent border border-[#FF6B00]/30 shadow-md mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#FF6B00] text-white flex items-center justify-center flex-shrink-0 shadow-md">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#FF6B00]">
                Next Scheduled Session
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Session 6: Consonant Articulation & Dental Clarity
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#FF6B00]" />
                <span>{studentEnrollment.nextClassLocationOrLink}</span>
                <span>•</span>
                <span>{studentEnrollment.nextClassDate}</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://zoom.us/j/cma-live-broadcast-studio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#FF6B00] hover:bg-[#E55F00] text-white text-xs font-bold shadow-md shadow-[#FF6B00]/25 transition-all"
            >
              <Video className="w-4 h-4" />
              <span>Join Online Studio Room</span>
            </a>
          </div>
        </div>

        {/* LMS Tabs */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-200 dark:border-white/10 scrollbar-none">
            {[
              { id: 'sessions', label: 'Session Attendance Tracker', icon: Calendar },
              { id: 'curriculum', label: 'Curriculum & Mark Completed', icon: BookOpen },
              { id: 'internship', label: 'City FM Internship Placement', icon: Radio },
              { id: 'certificate', label: 'Certificate & Credentials', icon: Award },
            ].map((tab) => {
              const Icon = tab.icon;
              const isSelected = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#FF6B00] text-white shadow-md shadow-[#FF6B00]/25'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* TAB 1: SESSIONS ATTENDANCE */}
          {activeTab === 'sessions' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold font-display text-slate-900 dark:text-white">
                    Live Session Attendance Records
                  </h3>
                  <p className="text-xs text-slate-500">
                    Tracks both Physical in-studio attendance in Ikeja and Online live stream participation.
                  </p>
                </div>
                <div className="text-xs font-bold text-emerald-500 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                  {presentCount} of {totalCompletedSessions} Sessions Present
                </div>
              </div>

              <SessionTracker sessions={studentEnrollment.attendanceRecord} />
            </div>
          )}

          {/* TAB 2: CURRICULUM WITH COMPLETION TOGGLE */}
          {activeTab === 'curriculum' && (
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#131722] border border-slate-200 dark:border-white/10 shadow-sm space-y-4 animate-fadeIn">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-white/10">
                <div>
                  <h3 className="text-lg font-bold font-display text-slate-900 dark:text-white">
                    Self-Paced & Practical Lesson Tracking
                  </h3>
                  <p className="text-xs text-slate-500">
                    Click the checkbox next to any lesson once you have submitted your drills and attended the class.
                  </p>
                </div>
                <span className="text-xs font-bold text-[#FF6B00]">
                  {studentEnrollment.progressPercent}% Complete
                </span>
              </div>

              <CurriculumAccordion pillars={course.pillars} allowCompletionToggle={true} />
            </div>
          )}

          {/* TAB 3: INTERNSHIP PLACEMENT */}
          {activeTab === 'internship' && (
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#131722] border border-slate-200 dark:border-white/10 shadow-sm space-y-6 animate-fadeIn">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#FF6B00]/15 text-[#FF6B00] flex items-center justify-center flex-shrink-0">
                  <Radio className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white">
                      City 105.1 FM Internship Assignment
                    </h3>
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-500 border border-emerald-500/30">
                      Confirmed Placement
                    </span>
                  </div>
                  <p className="text-xs text-slate-500">
                    3-Week Hands-On Live Studio Placement (Weeks 3 to 5 of your programme)
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#0E1017] border border-slate-200/80 dark:border-white/5 space-y-1.5 text-xs">
                  <div className="text-slate-400 font-bold uppercase">Assigned Show / Unit:</div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">
                    The Drive Time Show & Weekend Sports Hub
                  </div>
                  <div className="text-slate-500">Station: City 105.1 FM (Lagos)</div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#0E1017] border border-slate-200/80 dark:border-white/5 space-y-1.5 text-xs">
                  <div className="text-slate-400 font-bold uppercase">Assigned Supervisor:</div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">
                    Shola Thompson (Head of Presentation)
                  </div>
                  <div className="text-slate-500">Contact: via Academy Internal Slack</div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs text-slate-700 dark:text-slate-300 space-y-2">
                <div className="font-bold text-amber-500">Internship Requirements & Guidelines:</div>
                <ul className="list-disc pl-4 space-y-1 text-slate-600 dark:text-slate-400">
                  <li>Punctuality is strictly enforced for live studio call times (minimum 30 mins before broadcast clock).</li>
                  <li>Dress code is smart casual for television sets and radio interviews.</li>
                  <li>Interns will submit weekly show logs signed by the on-air executive producer.</li>
                </ul>
              </div>
            </div>
          )}

          {/* TAB 4: CERTIFICATE */}
          {activeTab === 'certificate' && (
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#131722] border border-slate-200 dark:border-white/10 shadow-sm space-y-6 text-center animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-500 flex items-center justify-center mx-auto">
                <Award className="w-8 h-8" />
              </div>

              <div className="max-w-md mx-auto space-y-2">
                <h3 className="text-2xl font-black font-display text-slate-900 dark:text-white">
                  CMA Certificate of Professional Competency
                </h3>
                <p className="text-xs sm:text-sm text-slate-500">
                  Accredited by Cardinal Broadcasting Limited & aligned with National Broadcasting Commission (NBC) industry standards.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#0E1017] border border-slate-200/80 dark:border-white/5 max-w-sm mx-auto text-xs space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-slate-400">Student Name:</span>
                  <strong className="text-slate-800 dark:text-slate-200">David Adeleke</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Programme:</span>
                  <strong className="text-slate-800 dark:text-slate-200">Broadcast Media Pro 2026</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Completion Status:</span>
                  <strong className={studentEnrollment.progressPercent >= 100 ? 'text-emerald-500' : 'text-amber-500'}>
                    {studentEnrollment.progressPercent >= 100 ? 'Certified' : 'In Progress (42%)'}
                  </strong>
                </div>
              </div>

              <Button
                variant={studentEnrollment.progressPercent >= 100 ? 'primary' : 'outline'}
                size="md"
                onClick={handleDownloadCertificate}
                icon="check"
              >
                {studentEnrollment.progressPercent >= 100 ? 'Download Verified PDF Certificate' : 'Complete All Lessons to Unlock'}
              </Button>
            </div>
          )}
        </div>
      </div>
      <CmaFooter />
    </div>
  );
};
