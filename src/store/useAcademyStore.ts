import { create } from 'zustand';
import { CourseFormat, Lesson, StudentEnrollment, FacilitatorClassRosterItem, AttendanceStatus, LessonMode } from '../types/course';

interface Toast {
  id: string;
  title: string;
  message: string;
  type: 'success' | 'info' | 'warning';
}

const initialStudentEnrollment: StudentEnrollment = {
  id: 'enr-cma-2026-001',
  courseId: 'broadcast-media-pro-2026',
  courseTitle: 'Broadcast Media Pro Course 2026',
  selectedFormat: 'Hybrid',
  enrolledDate: 'July 01, 2026',
  progressPercent: 42,
  completedLessons: ['p1-l1', 'p1-l2', 'p2-l1', 'p3-l1', 'p4-l1'],
  nextClassDate: 'Monday, July 13, 2026 (9:00 AM)',
  nextClassLocationOrLink: 'City FM Live Studio A (Plot 11 Lateef Jakande Road, Ikeja)',
  attendanceRecord: [
    {
      sessionId: 'ses-1',
      lessonId: 'p1-l1',
      lessonTitle: 'Anatomy of a Broadcast Studio: Microphones & Consoles',
      date: 'July 06, 2026',
      time: '9:00 AM - 11:30 AM',
      mode: 'Physical',
      facilitator: 'Shola Thompson',
      status: 'Present',
      notes: 'Excellent grasp of Rodecaster Pro & Shure SM7B gain staging.',
    },
    {
      sessionId: 'ses-2',
      lessonId: 'p1-l2',
      lessonTitle: 'On-Air Persona Development & Natural Delivery',
      date: 'July 07, 2026',
      time: '9:00 AM - 12:00 PM',
      mode: 'Physical',
      facilitator: 'Chukwudi Ezeugwu',
      status: 'Present',
      notes: 'Great conversational tone; reduce filler sounds in transitions.',
    },
    {
      sessionId: 'ses-3',
      lessonId: 'p2-l1',
      lessonTitle: 'Deep Research Methodologies & Pre-Interview Briefing',
      date: 'July 08, 2026',
      time: '10:00 AM - 11:30 AM',
      mode: 'Online',
      facilitator: 'Chukwudi Ezeugwu',
      status: 'Present',
      joinLink: 'https://zoom.us/j/cma-broadcast-room',
      recordingUrl: 'https://cma-cloud.tv/recordings/ses-3-research',
    },
    {
      sessionId: 'ses-4',
      lessonId: 'p3-l1',
      lessonTitle: 'Script Analysis & Commercial Beats',
      date: 'July 09, 2026',
      time: '9:00 AM - 11:30 AM',
      mode: 'Hybrid',
      facilitator: 'Mazino Appeal',
      status: 'Late',
      notes: 'Logged in 15 mins late; submitted vocal drill assignments promptly.',
      joinLink: 'https://zoom.us/j/cma-broadcast-room',
    },
    {
      sessionId: 'ses-5',
      lessonId: 'p4-l1',
      lessonTitle: 'IPA & Pure Vowel Sounds Mastery',
      date: 'July 10, 2026',
      time: '9:00 AM - 11:30 AM',
      mode: 'Physical',
      facilitator: 'Oludolapo Adewale',
      status: 'Present',
      notes: 'Cleared monophthong assessment with high marks.',
    },
    {
      sessionId: 'ses-6',
      lessonId: 'p4-l2',
      lessonTitle: 'Consonant Articulation & Dental Clarity',
      date: 'July 13, 2026',
      time: '9:00 AM - 12:00 PM',
      mode: 'Physical',
      facilitator: 'Oludolapo Adewale',
      status: 'Pending',
      notes: 'Scheduled for tomorrow morning in Studio A.',
    }
  ],
  certificateIssued: false,
  internshipPlacement: {
    station: 'City 105.1 FM (Drive Time Show)',
    status: 'Confirmed',
    supervisor: 'Shola Thompson'
  }
};

const initialRoster: FacilitatorClassRosterItem[] = [
  {
    studentId: 'cma-std-01',
    name: 'David Adeleke',
    email: 'david.a@example.com',
    phone: '0812 345 6789',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200&auto=format&fit=crop',
    format: 'Hybrid',
    attendanceRate: 92,
    progressPercent: 42,
    status: 'Active',
    currentAttendanceStatus: 'Present'
  },
  {
    studentId: 'cma-std-02',
    name: 'Chidinma Eze',
    email: 'chidinma.e@example.com',
    phone: '0803 987 6543',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
    format: 'Physical',
    attendanceRate: 100,
    progressPercent: 50,
    status: 'Active',
    currentAttendanceStatus: 'Present'
  },
  {
    studentId: 'cma-std-03',
    name: 'Oluwaseun Bakare',
    email: 'oluwaseun.b@example.com',
    phone: '0818 234 5678',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    format: 'Online',
    attendanceRate: 85,
    progressPercent: 38,
    status: 'Active',
    currentAttendanceStatus: 'Late'
  },
  {
    studentId: 'cma-std-04',
    name: 'Amina Yusuf',
    email: 'amina.y@example.com',
    phone: '0809 876 5432',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop',
    format: 'Physical',
    attendanceRate: 95,
    progressPercent: 45,
    status: 'Active',
    currentAttendanceStatus: 'Present'
  },
  {
    studentId: 'cma-std-05',
    name: 'Tariq Ibrahim',
    email: 'tariq.i@example.com',
    phone: '0814 112 2334',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
    format: 'Online',
    attendanceRate: 60,
    progressPercent: 25,
    status: 'At Risk',
    currentAttendanceStatus: 'Absent'
  }
];

interface AcademyState {
  // Theme & User Profile
  isDarkMode: boolean;
  toggleTheme: () => void;
  userRole: 'student' | 'facilitator' | 'guest';
  setUserRole: (role: 'student' | 'facilitator' | 'guest') => void;

  // Filter & Search
  selectedFormatFilter: 'All' | CourseFormat;
  setSelectedFormatFilter: (format: 'All' | CourseFormat) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;

  // Saved Courses / Wishlist
  savedCourseIds: string[];
  toggleSaveCourse: (courseId: string) => void;

  // Modals
  isWaitlistOpen: boolean;
  activeCourseIdForModal: string | null;
  openWaitlistModal: (courseId?: string) => void;
  closeWaitlistModal: () => void;

  isLoginModalOpen: boolean;
  openLoginModal: () => void;
  closeLoginModal: () => void;

  isPreviewVideoOpen: boolean;
  previewLesson: Lesson | null;
  openPreviewModal: (lesson: Lesson) => void;
  closePreviewModal: () => void;

  // Toast System
  toasts: Toast[];
  addToast: (title: string, message: string, type?: 'success' | 'info' | 'warning') => void;
  removeToast: (id: string) => void;

  // Student LMS State
  studentEnrollment: StudentEnrollment;
  toggleLessonCompletion: (lessonId: string) => void;

  // Facilitator LMS State
  roster: FacilitatorClassRosterItem[];
  updateStudentAttendance: (studentId: string, status: AttendanceStatus) => void;
  addSessionNote: (sessionId: string, note: string, recordingUrl?: string) => void;
  markSessionCompletedForCohort: (lessonId: string) => void;
}

export const useAcademyStore = create<AcademyState>((set, get) => ({
  // Theme
  isDarkMode: true,
  toggleTheme: () => {
    const nextDark = !get().isDarkMode;
    set({ isDarkMode: nextDark });
    if (nextDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  },

  userRole: 'student',
  setUserRole: (role) => set({ userRole: role }),

  // Filters
  selectedFormatFilter: 'All',
  setSelectedFormatFilter: (format) => set({ selectedFormatFilter: format }),
  searchQuery: '',
  setSearchQuery: (query) => set({ searchQuery: query }),
  selectedCategory: 'All',
  setSelectedCategory: (cat) => set({ selectedCategory: cat }),

  // Saved
  savedCourseIds: ['broadcast-media-pro-2026'],
  toggleSaveCourse: (courseId) => {
    const current = get().savedCourseIds;
    const exists = current.includes(courseId);
    const updated = exists ? current.filter((id) => id !== courseId) : [...current, courseId];
    set({ savedCourseIds: updated });
    get().addToast(
      exists ? 'Removed from Saved' : 'Course Saved',
      exists ? 'Course removed from your wishlist' : 'Course bookmarked to your learning wishlist',
      'info'
    );
  },

  // Modals
  isWaitlistOpen: false,
  activeCourseIdForModal: null,
  openWaitlistModal: (courseId) =>
    set({ isWaitlistOpen: true, activeCourseIdForModal: courseId || 'broadcast-media-pro-2026' }),
  closeWaitlistModal: () => set({ isWaitlistOpen: false, activeCourseIdForModal: null }),

  isLoginModalOpen: false,
  openLoginModal: () => set({ isLoginModalOpen: true }),
  closeLoginModal: () => set({ isLoginModalOpen: false }),

  isPreviewVideoOpen: false,
  previewLesson: null,
  openPreviewModal: (lesson) => set({ isPreviewVideoOpen: true, previewLesson: lesson }),
  closePreviewModal: () => set({ isPreviewVideoOpen: false, previewLesson: null }),

  // Toasts
  toasts: [],
  addToast: (title, message, type = 'success') => {
    const id = `toast-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`;
    set((state) => ({ toasts: [...state.toasts, { id, title, message, type }] }));
    setTimeout(() => {
      get().removeToast(id);
    }, 4500);
  },
  removeToast: (id) => {
    set((state) => ({ toasts: state.toasts.filter((t) => t.id !== id) }));
  },

  // Student LMS actions
  studentEnrollment: initialStudentEnrollment,
  toggleLessonCompletion: (lessonId) => {
    const { studentEnrollment } = get();
    const isCompleted = studentEnrollment.completedLessons.includes(lessonId);
    const updatedLessons = isCompleted
      ? studentEnrollment.completedLessons.filter((id) => id !== lessonId)
      : [...studentEnrollment.completedLessons, lessonId];

    const totalLessonsCount = 28;
    const newPercent = Math.min(100, Math.round((updatedLessons.length / totalLessonsCount) * 100));

    set({
      studentEnrollment: {
        ...studentEnrollment,
        completedLessons: updatedLessons,
        progressPercent: newPercent,
        certificateIssued: newPercent >= 100
      }
    });

    get().addToast(
      isCompleted ? 'Lesson Marked Incomplete' : 'Lesson Completed! 🎉',
      isCompleted ? 'Progress updated' : 'Great progress! Your course completion score is advancing.',
      'success'
    );
  },

  // Facilitator LMS actions
  roster: initialRoster,
  updateStudentAttendance: (studentId, status) => {
    set((state) => ({
      roster: state.roster.map((s) =>
        s.studentId === studentId ? { ...s, currentAttendanceStatus: status } : s
      )
    }));
    get().addToast('Attendance Updated', `Student attendance marked as ${status}`, 'info');
  },

  addSessionNote: (sessionId, note, recordingUrl) => {
    set((state) => ({
      studentEnrollment: {
        ...state.studentEnrollment,
        attendanceRecord: state.studentEnrollment.attendanceRecord.map((ses) =>
          ses.sessionId === sessionId
            ? { ...ses, notes: note, ...(recordingUrl ? { recordingUrl } : {}) }
            : ses
        )
      }
    }));
    get().addToast('Session Material Uploaded', 'Notes and recording link published to student portal', 'success');
  },

  markSessionCompletedForCohort: (lessonId) => {
    get().toggleLessonCompletion(lessonId);
    get().addToast('Session Concluded', 'Session marked completed and attendance synchronized with student portals', 'success');
  }
}));
