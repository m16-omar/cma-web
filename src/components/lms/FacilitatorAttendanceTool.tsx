import React, { useState } from 'react';
import {
  Users,
  CheckCircle2,
  AlertCircle,
  XCircle,
  Upload,
  Radio,
  Monitor,
  Shuffle,
  Sparkles,
  Save,
  Clock,
  Calendar,
} from 'lucide-react';
import { AttendanceStatus } from '../../types/course';
import { useAcademyStore } from '../../store/useAcademyStore';

export const FacilitatorAttendanceTool: React.FC = () => {
  const { roster, updateStudentAttendance, addSessionNote } = useAcademyStore();
  const [selectedSessionId, setSelectedSessionId] = useState('ses-6');
  const [sessionNotes, setSessionNotes] = useState('');
  const [recordingLink, setRecordingLink] = useState('');

  const handlePublishMaterials = (e: React.FormEvent) => {
    e.preventDefault();
    if (!sessionNotes && !recordingLink) return;
    addSessionNote(selectedSessionId, sessionNotes, recordingLink);
    setSessionNotes('');
    setRecordingLink('');
  };

  return (
    <div className="space-y-8">
      {/* Facilitator Action Bar */}
      <div className="p-6 rounded-3xl bg-white dark:bg-[#131722] border border-slate-200 dark:border-white/10 shadow-lg">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-white/10">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-500 mb-1">
              <Radio className="w-4 h-4 text-cyan-400" />
              <span>Live Class Roster & Attendance Sync</span>
            </div>
            <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white">
              Broadcast Media Pro Course 2026 (Cohort Alpha)
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Plot 11 Lateef Jakande Road, Ikeja Studio A + CMA Live Stream Hub
            </p>
          </div>

          {/* Quick Stats */}
          <div className="flex items-center gap-4">
            <div className="text-center p-3 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 min-w-[90px]">
              <div className="text-lg font-black text-slate-900 dark:text-white">
                {roster.length}
              </div>
              <div className="text-[10px] text-slate-500 uppercase font-bold">Enrolled</div>
            </div>
            <div className="text-center p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 min-w-[90px]">
              <div className="text-lg font-black text-emerald-500">
                {roster.filter((r) => r.currentAttendanceStatus === 'Present').length}
              </div>
              <div className="text-[10px] text-emerald-600 dark:text-emerald-400 uppercase font-bold">Present</div>
            </div>
            <div className="text-center p-3 rounded-2xl bg-rose-500/10 border border-rose-500/20 min-w-[90px]">
              <div className="text-lg font-black text-rose-500">
                {roster.filter((r) => r.currentAttendanceStatus === 'Absent').length}
              </div>
              <div className="text-[10px] text-rose-600 dark:text-rose-400 uppercase font-bold">Absent</div>
            </div>
          </div>
        </div>

        {/* Student Roster Table */}
        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-100 dark:border-white/10 text-slate-400 uppercase tracking-wider font-bold">
                <th className="pb-3 px-2">Student</th>
                <th className="pb-3 px-2">Format</th>
                <th className="pb-3 px-2">Attendance %</th>
                <th className="pb-3 px-2">LMS Progress</th>
                <th className="pb-3 px-2 text-right">Mark Today's Attendance</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-white/5">
              {roster.map((student) => (
                <tr key={student.studentId} className="hover:bg-slate-50/50 dark:hover:bg-white/5 transition-colors">
                  {/* Student Info */}
                  <td className="py-3.5 px-2">
                    <div className="flex items-center gap-3">
                      <img
                        src={student.avatar}
                        alt={student.name}
                        className="w-9 h-9 rounded-full object-cover border border-slate-200 dark:border-white/10"
                      />
                      <div>
                        <div className="font-bold text-slate-900 dark:text-white text-sm">
                          {student.name}
                        </div>
                        <div className="text-[11px] text-slate-500 font-mono">
                          {student.email} • {student.phone}
                        </div>
                      </div>
                    </div>
                  </td>

                  {/* Format */}
                  <td className="py-3.5 px-2">
                    <span
                      className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full font-semibold ${
                        student.format === 'Physical'
                          ? 'bg-amber-500/10 text-amber-500'
                          : student.format === 'Online'
                          ? 'bg-cyan-500/10 text-cyan-400'
                          : 'bg-[#FF6B00]/10 text-[#FF6B00]'
                      }`}
                    >
                      {student.format}
                    </span>
                  </td>

                  {/* Attendance Rate */}
                  <td className="py-3.5 px-2">
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-2 rounded-full bg-slate-200 dark:bg-white/10 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-[#FF6B00]"
                          style={{ width: `${student.attendanceRate}%` }}
                        />
                      </div>
                      <span className="font-bold text-slate-800 dark:text-slate-200">
                        {student.attendanceRate}%
                      </span>
                    </div>
                  </td>

                  {/* Progress */}
                  <td className="py-3.5 px-2">
                    <span className="font-semibold text-slate-700 dark:text-slate-300">
                      {student.progressPercent}% Completed
                    </span>
                  </td>

                  {/* Action Status Pills */}
                  <td className="py-3.5 px-2 text-right">
                    <div className="inline-flex items-center gap-1 bg-slate-100 dark:bg-white/5 p-1 rounded-xl border border-slate-200 dark:border-white/10">
                      {(['Present', 'Late', 'Absent'] as AttendanceStatus[]).map((status) => {
                        const isSelected = student.currentAttendanceStatus === status;
                        return (
                          <button
                            key={status}
                            onClick={() => updateStudentAttendance(student.studentId, status)}
                            className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                              isSelected
                                ? status === 'Present'
                                  ? 'bg-emerald-500 text-white shadow-xs'
                                  : status === 'Late'
                                  ? 'bg-amber-500 text-white shadow-xs'
                                  : 'bg-rose-500 text-white shadow-xs'
                                : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                            }`}
                          >
                            {status}
                          </button>
                        );
                      })}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Upload Session Notes & Replay Links */}
      <div className="p-6 rounded-3xl bg-white dark:bg-[#131722] border border-slate-200 dark:border-white/10 shadow-lg">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FF6B00] mb-1">
          <Upload className="w-4 h-4" />
          <span>Facilitator Session Publishing Hub</span>
        </div>
        <h4 className="text-lg font-bold font-display text-slate-900 dark:text-white">
          Publish Lesson Notes & Cloud Recording Replay
        </h4>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
          Push facilitator feedback and Zoom/studio session recordings to student portals automatically.
        </p>

        <form onSubmit={handlePublishMaterials} className="mt-5 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Select Lesson Session
              </label>
              <select
                value={selectedSessionId}
                onChange={(e) => setSelectedSessionId(e.target.value)}
                className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white focus:outline-none focus:border-[#FF6B00]"
              >
                <option value="ses-6">Session 6: Consonant Articulation & Dental Clarity</option>
                <option value="ses-5">Session 5: IPA & Pure Vowel Sounds Mastery</option>
                <option value="ses-4">Session 4: Script Analysis & Commercial Beats</option>
                <option value="ses-3">Session 3: Deep Research & Pre-Interview Briefing</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Session Cloud Replay Video Link (Zoom / YouTube Unlisted)
              </label>
              <input
                type="url"
                placeholder="https://zoom.us/rec/play/cma-session-replay"
                value={recordingLink}
                onChange={(e) => setRecordingLink(e.target.value)}
                className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-[#FF6B00]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Facilitator Remarks & Homework Assignment
            </label>
            <textarea
              rows={3}
              placeholder="e.g. Students must record a 60-second dental consonant drill and upload to their LMS dashboard before Thursday..."
              value={sessionNotes}
              onChange={(e) => setSessionNotes(e.target.value)}
              className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-[#FF6B00] resize-none"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl bg-[#FF6B00] hover:bg-[#E55F00] text-white font-bold text-xs shadow-md shadow-[#FF6B00]/25 transition-all flex items-center gap-2 cursor-pointer"
            >
              <Save className="w-3.5 h-3.5" />
              <span>Publish to Student LMS Portals</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
