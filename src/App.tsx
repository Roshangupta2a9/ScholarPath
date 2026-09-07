/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  StudentUser, 
  NavigationTab, 
  Chapter, 
  Subject, 
  QuizSubmission,
  CalendarEvent 
} from './types';
import { 
  getCurrentUser, 
  setCurrentUser, 
  getCalendarEventsForClass 
} from './data/mockDatabase';
import { getCurriculumForGrade } from './data/curriculumData';
import { recordUserActivity } from './utils/studentProgressTracker';
import { 
  isSupabaseConfigured, 
  getSupabaseClient, 
  mapSupabaseUserToStudent, 
  signOutSupabase, 
  syncProgressToSupabase 
} from './lib/supabase';

import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { AuthModal } from './components/AuthModal';
import { HomeDashboard } from './components/HomeDashboard';
import { ClassroomView } from './components/ClassroomView';
import { ChapterDetailView } from './components/ChapterDetailView';
import { QuizModule } from './components/QuizModule';
import { CourseContentView } from './components/CourseContentView';
import { ProfileView } from './components/ProfileView';
import { CalendarView } from './components/CalendarView';
import { HelpCenterView } from './components/HelpCenterView';

export default function App() {
  // 1. Current Student User State (Defaults to Aarav Sharma, Class 8 for instant rich demo)
  const [currentUser, setLocalCurrentUser] = useState<StudentUser | null>(() => getCurrentUser());
  
  // 2. Navigation Tab State
  const [activeTab, setActiveTab] = useState<NavigationTab>('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  
  // 3. Auth Modal State
  const [isAuthOpen, setIsAuthOpen] = useState<boolean>(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  
  // 4. Grade Selection for Curriculum Viewing (defaults to enrolled grade)
  const [viewingGrade, setViewingGrade] = useState<number>(currentUser?.classGrade || 8);
  
  // 5. Active Chapter Detail View State
  const [activeChapterDetail, setActiveChapterDetail] = useState<{
    chapter: Chapter;
    subject: Subject;
  } | null>(null);

  // 6. Active Quiz Target (when launched from classroom or home)
  const [activeQuizTarget, setActiveQuizTarget] = useState<{
    chapter: Chapter;
    subject: Subject;
  } | null>(null);

  // Notification Banner
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Restore session from Supabase if configured
  useEffect(() => {
    if (isSupabaseConfigured()) {
      const client = getSupabaseClient();
      if (client) {
        client.auth.getSession().then(({ data: { session } }) => {
          if (session?.user) {
            const student = mapSupabaseUserToStudent(session.user);
            setLocalCurrentUser(student);
            setCurrentUser(student);
          }
        });

        const { data: { subscription } } = client.auth.onAuthStateChange((_event, session) => {
          if (session?.user) {
            const student = mapSupabaseUserToStudent(session.user);
            setLocalCurrentUser(student);
            setCurrentUser(student);
          }
        });

        return () => {
          subscription.unsubscribe();
        };
      }
    }
  }, []);

  // Sync viewingGrade whenever currentUser changes grade
  useEffect(() => {
    if (currentUser) {
      setViewingGrade(currentUser.classGrade);
    }
  }, [currentUser?.classGrade]);

  // Load curriculum for the current viewing grade
  const currentCurriculum: Subject[] = getCurriculumForGrade(viewingGrade);
  const calendarEvents: CalendarEvent[] = getCalendarEventsForClass(viewingGrade);

  // User Handlers
  const handleOpenAuth = (mode: 'login' | 'register') => {
    setAuthMode(mode);
    setIsAuthOpen(true);
  };

  const handleAuthSuccess = (user: StudentUser) => {
    setLocalCurrentUser(user);
    setViewingGrade(user.classGrade);
    setActiveChapterDetail(null);
    setActiveQuizTarget(null);
    showToast(`Welcome ${user.name}! Curriculum automatically locked to Class ${user.classGrade}.`);
  };

  const handleLogout = () => {
    signOutSupabase();
    setCurrentUser(null);
    setLocalCurrentUser(null);
    showToast('Signed out of student session.');
  };

  const handleSwitchClass = (newGrade: number) => {
    if (currentUser) {
      const updatedUser: StudentUser = {
        ...currentUser,
        classGrade: newGrade
      };
      setCurrentUser(updatedUser);
      setLocalCurrentUser(updatedUser);
      syncProgressToSupabase(updatedUser);
    }
    setViewingGrade(newGrade);
    setActiveChapterDetail(null);
    showToast(`Classroom updated! Now displaying Class ${newGrade} Curriculum.`);
  };

  const handleUpdateProfilePhoto = (newAvatar: string) => {
    if (currentUser) {
      const updatedUser: StudentUser = {
        ...currentUser,
        avatar: newAvatar
      };
      setCurrentUser(updatedUser);
      setLocalCurrentUser(updatedUser);
      syncProgressToSupabase(updatedUser);
      showToast('Profile photo updated successfully! 📸');
    }
  };

  const handleToggleCompleteChapter = (chapterId: string) => {
    if (!currentUser) {
      handleOpenAuth('login');
      return;
    }

    const isAlreadyCompleted = currentUser.completedChapterIds.includes(chapterId);
    const updatedIds = isAlreadyCompleted
      ? currentUser.completedChapterIds.filter(id => id !== chapterId)
      : [...currentUser.completedChapterIds, chapterId];

    // Record activity to ensure streak is preserved/updated live
    const updatedUser = recordUserActivity({
      ...currentUser,
      completedChapterIds: updatedIds
    });

    setCurrentUser(updatedUser);
    setLocalCurrentUser(updatedUser);
    syncProgressToSupabase(updatedUser);
    showToast(isAlreadyCompleted ? 'Chapter marked as in-progress.' : 'Chapter marked as completed! 🎉');
  };

  const handleToggleBookmarkChapter = (chapterId: string) => {
    if (!currentUser) {
      handleOpenAuth('login');
      return;
    }

    const isBookmarked = currentUser.bookmarkedChapterIds.includes(chapterId);
    const updatedIds = isBookmarked
      ? currentUser.bookmarkedChapterIds.filter(id => id !== chapterId)
      : [...currentUser.bookmarkedChapterIds, chapterId];

    const updatedUser: StudentUser = {
      ...currentUser,
      bookmarkedChapterIds: updatedIds
    };

    setCurrentUser(updatedUser);
    setLocalCurrentUser(updatedUser);
    syncProgressToSupabase(updatedUser);
    showToast(isBookmarked ? 'Bookmark removed.' : 'Chapter added to study bookmarks! 🔖');
  };

  const handleSaveQuizResult = (submission: QuizSubmission) => {
    if (!currentUser) return;

    // Filter out previous submission for the same chapter if exists and append new
    const cleanHistory = currentUser.quizHistory.filter(q => q.chapterId !== submission.chapterId);
    // Record activity and maintain live streak
    const updatedUser = recordUserActivity({
      ...currentUser,
      quizHistory: [submission, ...cleanHistory]
    });

    setCurrentUser(updatedUser);
    setLocalCurrentUser(updatedUser);
    syncProgressToSupabase(updatedUser);
    showToast(`Assessment submitted! Score: ${submission.score}/${submission.totalQuestions} (${submission.percentage}%)`);
  };

  const handleOpenChapter = (chapter: Chapter, subject: Subject) => {
    setActiveChapterDetail({ chapter, subject });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStartQuizFromChapter = (chapter: Chapter, subject: Subject) => {
    setActiveChapterDetail(null);
    setActiveQuizTarget({ chapter, subject });
    setActiveTab('quizzes');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleTabChange = (tab: NavigationTab) => {
    setActiveTab(tab);
    setActiveChapterDetail(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans antialiased">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-5 right-5 z-50 bg-slate-900 text-white text-xs font-semibold px-4 py-3 rounded-2xl shadow-xl border border-slate-700 animate-in slide-in-from-bottom-3 duration-200">
          {toastMessage}
        </div>
      )}

      {/* 1. Header Navigation Bar */}
      <Navbar
        currentUser={currentUser}
        activeTab={activeTab}
        setActiveTab={handleTabChange}
        onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        onOpenAuth={handleOpenAuth}
        onLogout={handleLogout}
        onSwitchClass={handleSwitchClass}
      />

      {/* 2. Slide-out Collapsible Hamburger Sidebar */}
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        activeTab={activeTab}
        setActiveTab={handleTabChange}
        currentUser={currentUser}
        onOpenAuth={handleOpenAuth}
      />

      {/* 3. Authentication & Onboarding Modal */}
      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        initialMode={authMode}
        onAuthSuccess={handleAuthSuccess}
      />

      {/* 4. Main Campus Viewport */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        
        {/* If Active Chapter Detail is open, show Chapter Detail Room */}
        {activeChapterDetail ? (
          <ChapterDetailView
            chapter={activeChapterDetail.chapter}
            subject={activeChapterDetail.subject}
            isCompleted={currentUser?.completedChapterIds.includes(activeChapterDetail.chapter.id) || false}
            isBookmarked={currentUser?.bookmarkedChapterIds.includes(activeChapterDetail.chapter.id) || false}
            onBack={() => setActiveChapterDetail(null)}
            onToggleComplete={handleToggleCompleteChapter}
            onToggleBookmark={handleToggleBookmarkChapter}
            onStartQuiz={handleStartQuizFromChapter}
          />
        ) : (
          /* Render Active Campus Section */
          <>
            {activeTab === 'home' && (
              <HomeDashboard
                currentUser={currentUser}
                enrolledGrade={viewingGrade}
                subjects={currentCurriculum}
                calendarEvents={calendarEvents}
                onNavigateTab={handleTabChange}
                onOpenChapter={handleOpenChapter}
                onOpenQuiz={handleStartQuizFromChapter}
                onOpenAuth={handleOpenAuth}
              />
            )}

            {activeTab === 'classroom' && (
              <ClassroomView
                currentUser={currentUser}
                selectedGrade={viewingGrade}
                onSelectGrade={(grade) => {
                  setViewingGrade(grade);
                }}
                subjects={currentCurriculum}
                onOpenChapter={handleOpenChapter}
                onOpenQuiz={handleStartQuizFromChapter}
              />
            )}

            {activeTab === 'course-content' && (
              <CourseContentView
                currentGrade={viewingGrade}
                subjects={currentCurriculum}
                onOpenChapter={handleOpenChapter}
              />
            )}

            {activeTab === 'quizzes' && (
              <QuizModule
                subjects={currentCurriculum}
                currentGrade={viewingGrade}
                currentUser={currentUser}
                onSaveQuizResult={handleSaveQuizResult}
                initialChapterToTest={activeQuizTarget?.chapter || null}
                initialSubject={activeQuizTarget?.subject || null}
                onNavigateToChapter={handleOpenChapter}
              />
            )}

            {activeTab === 'calendar' && (
              <CalendarView
                events={calendarEvents}
                currentGrade={viewingGrade}
                currentUser={currentUser}
                onAddCustomEvent={(e) => showToast(`Schedule item saved: ${e.title}`)}
              />
            )}

            {activeTab === 'profile' && (
              <ProfileView
                currentUser={currentUser}
                onUpdateClass={handleSwitchClass}
                onUpdateProfilePhoto={handleUpdateProfilePhoto}
                onSelectDemoUser={(u) => {
                  setLocalCurrentUser(u);
                  setViewingGrade(u.classGrade);
                  showToast(`Switched profile to ${u.name} (Class ${u.classGrade})`);
                }}
                onLogout={handleLogout}
                onOpenAuth={handleOpenAuth}
              />
            )}

            {activeTab === 'help' && (
              <HelpCenterView
                currentUser={currentUser}
                currentGrade={viewingGrade}
              />
            )}
          </>
        )}
      </main>

      {/* 5. Minimal Campus Footer */}
      <footer className="bg-white border-t border-slate-200 py-6 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-800">EduCampus</span>
            <span>•</span>
            <span>K-10 Student Academic Portal</span>
            <span>•</span>
            <span className="text-indigo-600 font-semibold">Active Class: {viewingGrade}</span>
          </div>
          <p className="text-[11px] text-slate-400">
            Personalized school curriculum, interactive chapters, practice problems & assessment scoring.
          </p>
        </div>
      </footer>
    </div>
  );
}
