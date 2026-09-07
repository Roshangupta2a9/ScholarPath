import React, { useState } from 'react';
import { 
  Flame, 
  Award, 
  BookOpen, 
  CheckCircle2, 
  TrendingUp, 
  Calendar, 
  Sparkles, 
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Target,
  BarChart2
} from 'lucide-react';
import { StudentUser, NavigationTab, Chapter, Subject } from '../types';
import { 
  calculateStudentAcademicStats, 
  getLast7Days, 
  getTodayDateString 
} from '../utils/studentProgressTracker';

interface LiveProgressTrackerProps {
  currentUser: StudentUser | null;
  enrolledGrade: number;
  subjects: Subject[];
  onNavigateTab: (tab: NavigationTab) => void;
  onOpenChapter?: (chapter: Chapter, subject: Subject) => void;
  onOpenAuth?: (mode: 'login' | 'register') => void;
  compact?: boolean;
}

export const LiveProgressTracker: React.FC<LiveProgressTrackerProps> = ({
  currentUser,
  enrolledGrade,
  subjects,
  onNavigateTab,
  onOpenChapter,
  onOpenAuth,
  compact = false
}) => {
  const [showSubjectBreakdown, setShowSubjectBreakdown] = useState(false);
  const stats = calculateStudentAcademicStats(currentUser, enrolledGrade);
  const last7Days = getLast7Days();
  const todayStr = getTodayDateString();

  if (!currentUser) {
    return (
      <div className="bg-gradient-to-r from-slate-900 to-indigo-950 text-white rounded-3xl p-6 border border-slate-800 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1 text-center sm:text-left">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Live Academic Progress Engine</span>
          </div>
          <h3 className="text-lg font-bold">Track Your Live Daily Streak & Syllabus %</h3>
          <p className="text-xs text-slate-300 max-w-xl leading-relaxed">
            Register or sign in with your student profile to keep your daily study streak alive, track exact syllabus completion across subjects, and record every test assessment.
          </p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => onOpenAuth?.('register')}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-xl shadow-md transition-colors flex items-center gap-1.5"
          >
            <span>Start Tracking</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => onOpenAuth?.('login')}
            className="px-3.5 py-2 bg-white/10 hover:bg-white/15 text-white text-xs font-semibold rounded-xl border border-white/15 transition-colors"
          >
            Sign In
          </button>
        </div>
      </div>
    );
  }

  // If compact version (for sidebars or quick widgets)
  if (compact) {
    return (
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
            <Flame className="w-4 h-4 text-rose-500 fill-rose-500 animate-pulse" />
            <span>{stats.currentStreak}-Day Streak</span>
          </div>
          <span className="text-[11px] font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md">
            {stats.syllabusCompletionPercentage}% Syllabus Done
          </span>
        </div>
        <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-indigo-500 to-emerald-500 transition-all duration-500 rounded-full"
            style={{ width: `${Math.max(stats.syllabusCompletionPercentage, 5)}%` }}
          />
        </div>
        <div className="flex items-center justify-between text-[11px] text-slate-500">
          <span>{stats.completedChaptersCount}/{stats.totalGradeChapters} Chapters</span>
          <span>{stats.totalTestsTaken} Tests Taken</span>
        </div>
      </div>
    );
  }

  // Find next uncompleted chapter to recommend
  let nextUncompletedChapter: { chapter: Chapter; subject: Subject } | null = null;
  for (const s of subjects) {
    const uncompleted = s.chapters.find(ch => !currentUser.completedChapterIds.includes(ch.id));
    if (uncompleted) {
      nextUncompletedChapter = { chapter: uncompleted, subject: s };
      break;
    }
  }

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden">
      
      {/* Top Banner: Status Header */}
      <div className="p-5 sm:p-6 bg-gradient-to-br from-indigo-900 via-indigo-800 to-slate-900 text-white relative overflow-hidden">
        {/* Subtle geometric circles */}
        <div className="absolute right-0 top-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-5">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                Live Syllabus & Streak Tracker
              </span>
              <span className="text-xs text-indigo-200">
                Class {enrolledGrade} Academic Profile
              </span>
            </div>
            
            <h2 className="text-xl sm:text-2xl font-black tracking-tight text-white flex items-center gap-2.5">
              <span>{currentUser.name}’s Real-Time Progress</span>
            </h2>
            
            <p className="text-xs sm:text-sm text-indigo-200 max-w-2xl leading-relaxed">
              Updated automatically on every chapter completed, quiz submitted, and daily login.
            </p>
          </div>

          {/* Quick Streak Flame Banner */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-3.5 sm:p-4 flex items-center gap-4 shrink-0">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-amber-500 to-rose-500 text-white flex items-center justify-center shadow-lg shadow-rose-500/30">
              <Flame className="w-6 h-6 fill-white" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl sm:text-2xl font-black text-white">{stats.currentStreak}</span>
                <span className="text-xs uppercase font-bold text-amber-300 tracking-wider">Days Active</span>
              </div>
              <span className="text-[11px] font-semibold text-emerald-300 block">
                {stats.isActiveToday ? '✓ Active Today (Streak Kept)' : 'Study Today to Extend!'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 3 Live Metric Pillars */}
      <div className="p-5 sm:p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* Pillar 1: Daily Streak & 7-Day Activity Heatmap */}
          <div className="bg-slate-50/80 rounded-2xl p-4 sm:p-5 border border-slate-200/80 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                  <Flame className="w-4 h-4 text-rose-500" />
                  Study Streak
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-rose-50 text-rose-700 border border-rose-100">
                  {stats.currentStreak} Days
                </span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl sm:text-3xl font-black text-slate-900">
                  {stats.currentStreak}
                </span>
                <span className="text-xs font-semibold text-slate-600">Consecutive Days</span>
              </div>
              <p className="text-[11px] text-slate-500 mt-1">
                {stats.isActiveToday 
                  ? 'Your study streak is active for today! Keep the habit going tomorrow.'
                  : 'Complete a reading section or quiz today to maintain your streak!'}
              </p>
            </div>

            {/* 7-Day mini calendar dots */}
            <div className="pt-3 border-t border-slate-200/70">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                Last 7 Days Activity
              </span>
              <div className="grid grid-cols-7 gap-1.5 text-center">
                {last7Days.map((item, idx) => {
                  const isToday = item.dateStr === todayStr;
                  const wasActive = (currentUser.activeDates || []).includes(item.dateStr) || isToday;
                  
                  return (
                    <div key={idx} className="flex flex-col items-center">
                      <span className="text-[9px] font-semibold text-slate-400 mb-1">{item.dayName}</span>
                      <div 
                        className={`w-7 h-7 rounded-xl flex items-center justify-center text-[10px] font-bold transition-all ${
                          wasActive 
                            ? 'bg-rose-500 text-white shadow-xs ring-2 ring-rose-200' 
                            : 'bg-slate-200 text-slate-500'
                        }`}
                        title={`${item.dateStr}: ${wasActive ? 'Active' : 'No Activity'}`}
                      >
                        {wasActive ? <Flame className="w-3.5 h-3.5 fill-white" /> : item.dayNumber}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Pillar 2: Total Syllabus Completion % */}
          <div className="bg-slate-50/80 rounded-2xl p-4 sm:p-5 border border-slate-200/80 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-indigo-600" />
                  Syllabus Mastered
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-indigo-50 text-indigo-700 border border-indigo-100">
                  Class {enrolledGrade}
                </span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl sm:text-3xl font-black text-indigo-600">
                  {stats.syllabusCompletionPercentage}%
                </span>
                <span className="text-xs font-semibold text-slate-600">
                  Completed
                </span>
              </div>
              <p className="text-[11px] text-slate-500 mt-1">
                {stats.completedChaptersCount} of {stats.totalGradeChapters} chapters fully marked completed.
              </p>
            </div>

            {/* Overall Progress Bar */}
            <div className="space-y-1.5 pt-3 border-t border-slate-200/70">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-700">
                <span>Class {enrolledGrade} Completion Gauge</span>
                <span className="text-indigo-600 font-bold">{stats.syllabusCompletionPercentage}%</span>
              </div>
              <div className="w-full bg-slate-200 h-3 rounded-full overflow-hidden p-0.5">
                <div 
                  className="h-full bg-gradient-to-r from-indigo-500 via-blue-500 to-emerald-500 rounded-full transition-all duration-700"
                  style={{ width: `${Math.max(stats.syllabusCompletionPercentage, 4)}%` }}
                />
              </div>
              <div className="flex items-center justify-between text-[10px] text-slate-400">
                <span>{stats.totalGradeChapters - stats.completedChaptersCount} chapters remaining</span>
                <button
                  onClick={() => setShowSubjectBreakdown(!showSubjectBreakdown)}
                  className="text-indigo-600 hover:text-indigo-800 font-bold flex items-center gap-0.5"
                >
                  <span>{showSubjectBreakdown ? 'Hide Breakdown' : 'Subject Breakdown'}</span>
                  {showSubjectBreakdown ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                </button>
              </div>
            </div>
          </div>

          {/* Pillar 3: Tests & Assessments Taken */}
          <div className="bg-slate-50/80 rounded-2xl p-4 sm:p-5 border border-slate-200/80 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-amber-500" />
                  Tests & Assessments
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-100">
                  {stats.totalTestsTaken} Taken
                </span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl sm:text-3xl font-black text-slate-900">
                  {stats.totalTestsTaken}
                </span>
                <span className="text-xs font-semibold text-slate-600">Tests Completed</span>
              </div>
              <p className="text-[11px] text-slate-500 mt-1">
                {stats.totalTestsTaken > 0 
                  ? `Average score across all tests: ${stats.averageTestScore}% (Peak: ${stats.highestTestScore}%)`
                  : 'Take chapter quizzes to evaluate conceptual accuracy.'}
              </p>
            </div>

            {/* Test Quick Summary Grid */}
            <div className="pt-3 border-t border-slate-200/70 grid grid-cols-2 gap-2 text-center">
              <div className="p-2 rounded-xl bg-white border border-slate-200">
                <span className="text-[10px] text-slate-400 block font-semibold">Average Accuracy</span>
                <span className="text-sm font-bold text-slate-900">
                  {stats.totalTestsTaken > 0 ? `${stats.averageTestScore}%` : '—'}
                </span>
              </div>
              <div className="p-2 rounded-xl bg-white border border-slate-200">
                <span className="text-[10px] text-slate-400 block font-semibold">Highest Score</span>
                <span className="text-sm font-bold text-emerald-600">
                  {stats.totalTestsTaken > 0 ? `${stats.highestTestScore}%` : '—'}
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Expandable Subject-by-Subject Syllabus Breakdown */}
        {showSubjectBreakdown && (
          <div className="p-4 sm:p-5 bg-indigo-50/40 rounded-2xl border border-indigo-100 animate-in fade-in slide-in-from-top-2 duration-200 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <BarChart2 className="w-4 h-4 text-indigo-600" />
                <h4 className="font-bold text-slate-900 text-sm">
                  Class {enrolledGrade} Subject Syllabus Completion Breakdown
                </h4>
              </div>
              <span className="text-xs font-semibold text-indigo-600">
                {stats.subjectBreakdown.length} Enrolled Subjects
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {stats.subjectBreakdown.map((item) => (
                <div key={item.subjectId} className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-800">{item.subjectName}</span>
                    <span className="font-bold text-indigo-600">{item.percentage}%</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-indigo-600 rounded-full transition-all duration-500"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                  <div className="flex items-center justify-between text-[10px] text-slate-500">
                    <span>{item.completedChapters} of {item.totalChapters} chapters</span>
                    <span className={item.percentage === 100 ? 'text-emerald-600 font-bold' : 'text-slate-400'}>
                      {item.percentage === 100 ? '✓ Complete' : `${item.totalChapters - item.completedChapters} to go`}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Action Prompt: Continue next chapter */}
        {nextUncompletedChapter && onOpenChapter && (
          <div className="p-3.5 sm:p-4 bg-slate-50 rounded-2xl border border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold shrink-0">
                <Target className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 block">
                  Next Step to Advance Your Syllabus ({stats.syllabusCompletionPercentage}%):
                </span>
                <span className="font-bold text-slate-900">
                  {nextUncompletedChapter.subject.name} • {nextUncompletedChapter.chapter.title}
                </span>
              </div>
            </div>

            <button
              onClick={() => onOpenChapter(nextUncompletedChapter!.chapter, nextUncompletedChapter!.subject)}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-xs transition-colors flex items-center justify-center gap-1.5 shrink-0"
            >
              <span>Study Chapter</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
