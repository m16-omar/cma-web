import React from 'react';
import {
  Calendar,
  Clock,
  Radio,
  Monitor,
  Shuffle,
  CheckCircle2,
  AlertCircle,
  XCircle,
  HelpCircle,
  ExternalLink,
  Video,
  FileText,
  MapPin,
} from 'lucide-react';
import { StudentSessionAttendance, AttendanceStatus } from '../../types/course';

interface SessionTrackerProps {
  sessions: StudentSessionAttendance[];
  onJoinClick?: (url: string) => void;
}

export const SessionTracker: React.FC<SessionTrackerProps> = ({ sessions }) => {
  const getStatusBadge = (status: AttendanceStatus) => {
    switch (status) {
      case 'Present':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Present</span>
          </span>
        );
      case 'Late':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>Late</span>
          </span>
        );
      case 'Absent':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold bg-rose-500/15 text-rose-600 dark:text-rose-400 border border-rose-500/30">
            <XCircle className="w-3.5 h-3.5" />
            <span>Absent</span>
          </span>
        );
      case 'Pending':
      default:
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-200/80 dark:bg-white/10 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-white/10">
            <HelpCircle className="w-3.5 h-3.5 text-slate-400" />
            <span>Upcoming / Scheduled</span>
          </span>
        );
    }
  };

  return (
    <div className="space-y-3">
      {sessions.map((ses, idx) => (
        <div
          key={ses.sessionId || idx}
          className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#131722] border border-slate-200/90 dark:border-white/10 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all hover:border-[#FF6B00]/40"
        >
          {/* Left Column: Lesson Title, Date, Time, Mode */}
          <div className="space-y-2 min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/5">
                Session #{idx + 1}
              </span>

              {/* Mode */}
              <span
                className={`inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-md border ${
                  ses.mode === 'Physical'
                    ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20'
                    : ses.mode === 'Online'
                    ? 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20'
                    : 'bg-[#FF6B00]/10 text-[#FF6B00] border-[#FF6B00]/20'
                }`}
              >
                {ses.mode === 'Physical' && <Radio className="w-3 h-3" />}
                {ses.mode === 'Online' && <Monitor className="w-3 h-3" />}
                {ses.mode === 'Hybrid' && <Shuffle className="w-3 h-3" />}
                <span>{ses.mode} Class</span>
              </span>

              {/* Attendance Status */}
              {getStatusBadge(ses.status)}
            </div>

            <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-tight">
              {ses.lessonTitle}
            </h4>

            {/* Date, Time & Facilitator */}
            <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#FF6B00]" />
                <span>{ses.date}</span>
              </span>

              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                <span>{ses.time}</span>
              </span>

              <span>
                Facilitator: <strong className="text-slate-800 dark:text-slate-200">{ses.facilitator}</strong>
              </span>
            </div>

            {/* Facilitator Feedback Note */}
            {ses.notes && (
              <div className="flex items-start gap-2 text-xs bg-slate-50 dark:bg-black/30 p-2.5 rounded-xl border border-slate-200/60 dark:border-white/5 text-slate-700 dark:text-slate-300">
                <FileText className="w-3.5 h-3.5 text-[#FF6B00] mt-0.5 flex-shrink-0" />
                <span>
                  <strong>Session Notes:</strong> {ses.notes}
                </span>
              </div>
            )}
          </div>

          {/* Right Column: Actions (Join Online, Studio Location, Recording) */}
          <div className="flex items-center gap-2 self-start md:self-center flex-shrink-0">
            {ses.mode === 'Physical' && (
              <div className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                <MapPin className="w-3.5 h-3.5" />
                <span>City FM Studio A</span>
              </div>
            )}

            {ses.joinLink && (
              <a
                href={ses.joinLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#FF6B00] hover:bg-[#E55F00] text-white text-xs font-bold shadow-sm transition-all hover:scale-105"
              >
                <Video className="w-3.5 h-3.5" />
                <span>Join Online Studio</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}

            {ses.recordingUrl && (
              <a
                href={ses.recordingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-white/10 dark:hover:bg-white/15 text-slate-800 dark:text-slate-200 text-xs font-semibold transition-colors"
              >
                <span>Watch Replay</span>
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
