import React from 'react';
import { 
  Sparkles, 
  Award, 
  BookOpen, 
  ArrowRight, 
  Calendar, 
  Flame, 
  CheckCircle2, 
  Clock, 
  HelpCircle
} from 'lucide-react';
import { StudentUser, Subject, Chapter, CalendarEvent, NavigationTab } from '../types';
import { calculateStudentAcademicStats } from '../utils/studentProgressTracker';
import { LiveProgressTracker } from './LiveProgressTracker';

interface HomeDashboardProps {
  currentUser: StudentUser | null;
  enrolledGrade: number;
  subjects: Subject[];
  calendarEvents: CalendarEvent[];
  onNavigateTab: (tab: NavigationTab) => void;
  onOpenChapter: (chapter: Chapter, subject: Subject) => void;
  onOpenQuiz: (chapter: Chapter, subject: Subject) => void;
  onOpenAuth: (mode: 'login' | 'register') => void;
}

export const HomeDashboard: React.FC<HomeDashboardProps> = ({
  currentUser,
  enrolledGrade,
  subjects,
  calendarEvents,
  onNavigateTab,
  onOpenChapter,
  onOpenQuiz,
  onOpenAuth
}) => {
  // Find a recommended or in-progress chapter
  const primarySubject = subjects[0];
  const continueChapter = primarySubject?.chapters[0];

  const stats = calculateStudentAcademicStats(currentUser, enrolledGrade);

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      
      {/* 1. Personalized Campus Welcome Hero */}
      <div className="bg-gradient-to-r from-indigo-900 via-indigo-800 to-blue-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        {/* Background decorative geometry */}
        <div className="absolute -right-10 -bottom-10 w-64 h-64 rounded-full bg-white/5 blur-2xl pointer-events-none" />
        <div className="absolute right-24 -top-10 w-48 h-48 rounded-full bg-indigo-500/10 blur-xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-indigo-100">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>
                {currentUser 
                  ? `Class ${enrolledGrade} Personalized Curriculum Hub` 
                  : 'Welcome to EduCampus Learning Portal'}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              {currentUser ? `Welcome back, ${currentUser.name.split(' ')[0]}!` : 'Master School Subjects with Clarity'}
            </h1>

            <p className="text-xs sm:text-sm text-indigo-100/90 leading-relaxed">
              {currentUser 
                ? `You are enrolled in Class ${enrolledGrade}. Your subjects, reading notes, and chapter quizzes are filtered to your academic syllabus.`
                : 'Explore interactive curriculum modules, text lessons, practice exercises, and MCQ assessments for Classes 1 to 10.'}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              {currentUser ? (
                <>
                  <button
                    onClick={() => {
                      if (continueChapter && primarySubject) {
                        onOpenChapter(continueChapter, primarySubject);
                      } else {
                        onNavigateTab('classroom');
                      }
                    }}
                    className="px-5 py-2.5 bg-white hover:bg-indigo-50 text-indigo-950 text-xs sm:text-sm font-bold rounded-xl shadow-md transition-colors flex items-center gap-2"
                  >
                    <BookOpen className="w-4 h-4 text-indigo-600" />
                    <span>Continue Learning</span>
                  </button>
                  <button
                    onClick={() => onNavigateTab('quizzes')}
                    className="px-4 py-2.5 bg-indigo-800/80 hover:bg-indigo-800 text-white text-xs sm:text-sm font-semibold rounded-xl border border-indigo-700 transition-colors flex items-center gap-2"
                  >
                    <Award className="w-4 h-4 text-amber-300" />
                    <span>Take Chapter Quiz</span>
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => onOpenAuth('register')}
                    className="px-5 py-2.5 bg-white hover:bg-indigo-50 text-indigo-950 text-xs sm:text-sm font-bold rounded-xl shadow-md transition-colors flex items-center gap-2"
                  >
                    <span>Register Student Profile</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => onOpenAuth('login')}
                    className="px-4 py-2.5 bg-indigo-800/80 hover:bg-indigo-800 text-white text-xs sm:text-sm font-semibold rounded-xl border border-indigo-700 transition-colors"
                  >
                    Sign In
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Student Progress Badge Widget */}
          {currentUser && (
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 w-full md:w-64 shrink-0 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="text-indigo-200 font-medium">Class {enrolledGrade} Syllabus</span>
                <span className="font-bold text-white">{stats.syllabusCompletionPercentage}%</span>
              </div>
              <div className="w-full h-2.5 bg-white/20 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-amber-400 to-emerald-400 rounded-full transition-all duration-500"
                  style={{ width: `${Math.max(stats.syllabusCompletionPercentage, 8)}%` }}
                />
              </div>
              <div className="flex items-center justify-between text-xs text-indigo-200 pt-1">
                <span>{stats.completedChaptersCount}/{stats.totalGradeChapters} Chapters</span>
                <span className="flex items-center gap-1 text-amber-300 font-semibold">
                  <Flame className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  {stats.currentStreak}d Streak
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 2. Live Academic Progress & Real-Time Activity Tracker */}
      <LiveProgressTracker
        currentUser={currentUser}
        enrolledGrade={enrolledGrade}
        subjects={subjects}
        onNavigateTab={onNavigateTab}
        onOpenChapter={onOpenChapter}
        onOpenAuth={onOpenAuth}
      />

      {/* 3. Quick Highlights Metrics Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs text-slate-500 block">Class Grade</span>
            <span className="text-base font-bold text-slate-900">Class {enrolledGrade}</span>
          </div>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs text-slate-500 block">Completed</span>
            <span className="text-base font-bold text-slate-900">{stats.completedChaptersCount} Chapters</span>
          </div>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs text-slate-500 block">Tests Taken</span>
            <span className="text-base font-bold text-slate-900">{stats.totalTestsTaken} Tests</span>
          </div>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center shrink-0">
            <Flame className="w-5 h-5 text-rose-500 fill-rose-500" />
          </div>
          <div>
            <span className="text-xs text-slate-500 block">Current Streak</span>
            <span className="text-base font-bold text-slate-900">{stats.currentStreak} Days 🔥</span>
          </div>
        </div>
      </div>

      {/* 3. Class Subjects Section */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              Class {enrolledGrade} Subjects
            </h2>
            <p className="text-xs text-slate-500">
              Personalized syllabus curriculum for your enrolled grade
            </p>
          </div>
          <button
            onClick={() => onNavigateTab('classroom')}
            className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 flex items-center gap-1"
          >
            <span>View All Chapters</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {subjects.map((subject) => {
            const firstCh = subject.chapters[0];
            const completedCount = subject.chapters.filter(ch => 
              currentUser?.completedChapterIds.includes(ch.id)
            ).length;

            return (
              <div
                key={subject.id}
                className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs hover:border-indigo-300 hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md bg-slate-100 text-slate-600">
                      {subject.code}
                    </span>
                    <span className="text-xs text-slate-400">
                      {subject.chapters.length} Chapters
                    </span>
                  </div>

                  <h3 className="font-bold text-slate-900 text-base group-hover:text-indigo-600 transition-colors mb-1">
                    {subject.name}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed mb-4">
                    {subject.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-slate-500">
                    {completedCount}/{subject.chapters.length} Done
                  </span>

                  <button
                    onClick={() => {
                      if (firstCh) {
                        onOpenChapter(firstCh, subject);
                      } else {
                        onNavigateTab('classroom');
                      }
                    }}
                    className="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>Open Subject</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 4. Bottom Split: Quick Continue + Upcoming Assessments */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left 2 Cols: Continue Learning Card */}
        {continueChapter && (
          <div className="lg:col-span-2 bg-white p-6 rounded-3xl border border-slate-200 shadow-xs flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">
                  Recommended Chapter to Study
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  Class {enrolledGrade} • {primarySubject.name}
                </span>
              </div>

              <h3 className="text-lg font-bold text-slate-900">
                Chapter {continueChapter.chapterNumber}: {continueChapter.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {continueChapter.summary}
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-slate-500">
                <span className="flex items-center gap-1">
                  <BookOpen className="w-3.5 h-3.5 text-indigo-500" />
                  {continueChapter.readingTimeMinutes}m Reading Notes
                </span>
                <span>•</span>
                <span>{continueChapter.practiceExercises.length} Practice Problems</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Award className="w-3.5 h-3.5 text-amber-500" />
                  {continueChapter.quizQuestions.length} Quiz Questions
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
              <button
                onClick={() => onOpenChapter(continueChapter, primarySubject)}
                className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-xs flex items-center gap-2 transition-colors"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Study Notes</span>
              </button>
              <button
                onClick={() => onOpenQuiz(continueChapter, primarySubject)}
                className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors"
              >
                <Award className="w-3.5 h-3.5 text-amber-500" />
                <span>Take Chapter Quiz</span>
              </button>
            </div>
          </div>
        )}

        {/* Right 1 Col: Upcoming Academic Deadlines */}
        <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-xs flex flex-col justify-between space-y-3">
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2">
              <h3 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-indigo-600" />
                <span>Upcoming Agenda</span>
              </h3>
              <button
                onClick={() => onNavigateTab('calendar')}
                className="text-xs text-indigo-600 hover:text-indigo-800 font-semibold"
              >
                Full Calendar
              </button>
            </div>

            <div className="space-y-2.5">
              {calendarEvents.slice(0, 3).map((event) => (
                <div key={event.id} className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="font-bold text-indigo-600 bg-indigo-50 px-1.5 py-0.5 rounded">
                      {event.subject}
                    </span>
                    <span className="text-slate-400 font-mono">{event.date}</span>
                  </div>
                  <p className="text-xs font-semibold text-slate-800 line-clamp-1">{event.title}</p>
                  <p className="text-[11px] text-slate-500">{event.time}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-2 border-t border-slate-100 text-center">
            <button
              onClick={() => onNavigateTab('help')}
              className="text-xs text-slate-600 hover:text-indigo-600 font-medium flex items-center justify-center gap-1.5 w-full"
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Need help? Ask a teacher in Help Center</span>
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};
