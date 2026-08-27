export type CourseFormat = 'Physical' | 'Online' | 'Hybrid';
export type AttendanceStatus = 'Present' | 'Late' | 'Absent' | 'Pending';
export type LessonMode = 'Physical' | 'Online' | 'Hybrid' | 'Self-Paced';

export interface Lesson {
  id: string;
  title: string;
  duration: string; // e.g. "45 mins" or "2 hours"
  mode: LessonMode;
  date?: string;
  time?: string;
  facilitatorName?: string;
  isLocked: boolean;
  isPreview?: boolean;
  videoUrl?: string; // sample video preview
  description?: string;
  resources?: string[];
  onlineMeetingUrl?: string;
}

export interface PillarModule {
  id: string;
  number: number;
  title: string;
  description: string;
  duration: string;
  lessons: Lesson[];
}

export interface Instructor {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  specialty: string[];
  stationAffiliation?: string;
  socials?: {
    twitter?: string;
    linkedin?: string;
    instagram?: string;
  };
}

export interface Review {
  id: string;
  author: string;
  avatar: string;
  rating: number;
  date: string;
  role: string;
  comment: string;
  courseFormatTaken: CourseFormat;
}

export interface CourseScheduleInfo {
  startDate: string;
  durationWeeks: number;
  dailyHours: string;
  classDays: string;
  physicalLocation: string;
  onlinePlatform: string;
  internshipDuration: string;
  registrationStatus: 'Open' | 'Waitlist' | 'Closed' | 'Coming Soon';
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  shortDescription: string;
  badge: string;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  format: CourseFormat;
  supportedFormats: CourseFormat[];
  durationWeeks: number;
  totalHours: number;
  price: {
    physical: number;
    online: number;
    hybrid: number;
    currency: string;
    formatted: string;
    originalPrice?: number;
  };
  featured: boolean;
  popular: boolean;
  rating: number;
  reviewCount: number;
  studentsCount: number;
  thumbnail: string;
  schedule: CourseScheduleInfo;
  pillars: PillarModule[];
  whatYouWillGet: string[];
  requirements: string[];
  targetAudience: string[];
  instructors: Instructor[];
  reviews: Review[];
}

export interface StudentSessionAttendance {
  sessionId: string;
  lessonId: string;
  lessonTitle: string;
  date: string;
  time: string;
  mode: LessonMode;
  facilitator: string;
  status: AttendanceStatus;
  notes?: string;
  recordingUrl?: string;
  joinLink?: string;
}

export interface StudentEnrollment {
  id: string;
  courseId: string;
  courseTitle: string;
  selectedFormat: CourseFormat;
  enrolledDate: string;
  progressPercent: number;
  completedLessons: string[];
  nextClassDate: string;
  nextClassLocationOrLink: string;
  attendanceRecord: StudentSessionAttendance[];
  certificateIssued: boolean;
  certificateDate?: string;
  internshipPlacement?: {
    station: string;
    status: 'Pending' | 'Confirmed' | 'Active' | 'Completed';
    supervisor?: string;
  };
}

export interface FacilitatorClassRosterItem {
  studentId: string;
  name: string;
  email: string;
  phone: string;
  avatar: string;
  format: CourseFormat;
  attendanceRate: number;
  progressPercent: number;
  status: 'Active' | 'At Risk' | 'Graduated';
  currentAttendanceStatus: AttendanceStatus;
}
