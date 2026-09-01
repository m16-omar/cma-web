import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainLayout } from './components/layout/MainLayout';
import { HomePage } from './pages/HomePage';
import { CoursesPage } from './pages/CoursesPage';
import { CourseDetailPage } from './pages/CourseDetailPage';
import { InstructorsPage } from './pages/InstructorsPage';
import { StudentDashboardPage } from './pages/StudentDashboardPage';
import { FacilitatorDashboardPage } from './pages/FacilitatorDashboardPage';
import { AboutPage } from './pages/AboutPage';
import { EventsPage } from './pages/EventsPage';
import { AdmissionsPage } from './pages/AdmissionsPage';
import { GraduationGalleryPage } from './pages/GraduationGalleryPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const App: React.FC = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/courses/:slug" element={<CourseDetailPage />} />
        <Route path="/course/:slug" element={<CourseDetailPage />} />
        <Route path="/instructors" element={<InstructorsPage />} />
        <Route path="/mentors" element={<InstructorsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/graduation-gallery" element={<GraduationGalleryPage />} />
        <Route path="/gallery" element={<GraduationGalleryPage />} />
        <Route path="/admissions" element={<AdmissionsPage />} />
        <Route path="/contact" element={<AdmissionsPage />} />
        <Route path="/dashboard" element={<StudentDashboardPage />} />
        <Route path="/student-dashboard" element={<StudentDashboardPage />} />
        <Route path="/facilitator" element={<FacilitatorDashboardPage />} />
        <Route path="/facilitator-dashboard" element={<FacilitatorDashboardPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </MainLayout>
  );
};

export default App;
