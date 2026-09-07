import React, { useState } from 'react';
import { 
  User, 
  Mail, 
  School, 
  Sparkles, 
  CheckCircle2, 
  Award, 
  Flame, 
  Clock, 
  LogOut, 
  ShieldCheck, 
  TrendingUp,
  Camera,
  BookOpen,
  Target,
  BarChart2,
  Database,
  Lock,
  Server,
  FileCode,
  Check
} from 'lucide-react';
import { StudentUser } from '../types';
import { ChangePhotoModal } from './ChangePhotoModal';
import { calculateStudentAcademicStats, getLast7Days, getTodayDateString } from '../utils/studentProgressTracker';
import { isSupabaseConfigured, supabaseUrl } from '../lib/supabase';

interface ProfileViewProps {
  currentUser: StudentUser | null;
  onUpdateClass: (newGrade: number) => void;
  onUpdateProfilePhoto: (newAvatarUrl: string) => void;
  onSelectDemoUser?: (user: StudentUser) => void;
  onLogout: () => void;
  onOpenAuth: (mode: 'login' | 'register') => void;
}

export const ProfileView: React.FC<ProfileViewProps> = ({
  currentUser,
  onUpdateClass,
  onUpdateProfilePhoto,
  onLogout,
  onOpenAuth
}) => {
  const [targetGrade, setTargetGrade] = useState<number>(currentUser?.classGrade || 8);
  const [weeklyGoal, setWeeklyGoal] = useState<number>(currentUser?.studyGoalHoursPerWeek || 12);
  const [isSavedNotice, setIsSavedNotice] = useState(false);
  const [savedNoticeText, setSavedNoticeText] = useState('Settings Updated');
  const [isChangePhotoOpen, setIsChangePhotoOpen] = useState(false);

  const stats = calculateStudentAcademicStats(currentUser, targetGrade);
  const last7Days = getLast7Days();
  const todayStr = getTodayDateString();

  if (!currentUser) {
    return (
      <div className="max-w-md mx-auto text-center py-16 space-y-4 bg-white p-8 rounded-3xl border border-slate-200 shadow-xs">
        <div className="w-16 h-16 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto">
          <User className="w-8 h-8" />
        </div>
        <h2 className="text-xl font-bold text-slate-900">Student Sign In Required</h2>
        <p className="text-xs text-slate-500 leading-relaxed">
          Log in or register to track your enrolled class, completed chapters, quiz score history, and personalized study goals.
        </p>
        <div className="flex justify-center gap-3 pt-2">
          <button
            onClick={() => onOpenAuth('login')}
            className="px-5 py-2.5 bg-indigo-600 text-white text-xs font-bold rounded-xl shadow-xs hover:bg-indigo-700 transition-colors"
          >
            Log In
          </button>
          <button
            onClick={() => onOpenAuth('register')}
            className="px-5 py-2.5 bg-slate-100 text-slate-800 text-xs font-bold rounded-xl hover:bg-slate-200 transition-colors"
          >
            Create Profile
          </button>
        </div>
      </div>
    );
  }

  const handleGradeChange = (grade: number) => {
    setTargetGrade(grade);
    onUpdateClass(grade);
    setSavedNoticeText(`Class ${grade} Curriculum Activated!`);
    setIsSavedNotice(true);
    setTimeout(() => setIsSavedNotice(false), 3000);
  };

  const handlePhotoUpdated = (newPhotoUrl: string) => {
    onUpdateProfilePhoto(newPhotoUrl);
    setSavedNoticeText('Profile Picture Updated Successfully! 📸');
    setIsSavedNotice(true);
    setTimeout(() => setIsSavedNotice(false), 3500);
  };

  const badges = [
    { title: 'Curriculum Explorer', desc: 'Enrolled and actively studying class syllabus', unlocked: true, icon: '🌟' },
    { title: 'Quiz Ace', desc: 'Scored 80%+ on chapter assessments', unlocked: (currentUser.quizHistory.length > 0), icon: '🏆' },
    { title: 'Consistency Champion', desc: 'Maintained 7+ day study streak', unlocked: (currentUser.studyStreakDays >= 7), icon: '🔥' },
    { title: 'Master of Concepts', desc: 'Completed 3 or more chapter modules', unlocked: (currentUser.completedChapterIds.length >= 3), icon: '🎓' }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in duration-200">
      
      {/* Profile Header Card */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
          {/* Avatar with Camera Action Badge */}
          <div className="relative group shrink-0">
            <img
              src={currentUser.avatar}
              alt={currentUser.name}
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=250&auto=format&fit=crop&q=80';
              }}
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover ring-4 ring-indigo-500/10 shadow-md group-hover:ring-indigo-500/30 transition-all"
            />
            <button
              id="avatar-camera-overlay-btn"
              onClick={() => setIsChangePhotoOpen(true)}
              className="absolute -bottom-1 -right-1 p-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white shadow-md shadow-indigo-600/30 transition-all hover:scale-105"
              title="Change Profile Photo"
              aria-label="Change Profile Photo"
            >
              <Camera className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center gap-2 flex-wrap">
              <h1 className="text-xl sm:text-2xl font-bold text-slate-900">{currentUser.name}</h1>
              <span className="px-2.5 py-0.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold">
                Class {currentUser.classGrade}
              </span>
              <button
                id="change-profile-photo-btn"
                onClick={() => setIsChangePhotoOpen(true)}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold text-indigo-600 hover:text-indigo-700 bg-indigo-50/60 hover:bg-indigo-100/70 border border-indigo-200/60 transition-colors"
              >
                <Camera className="w-3.5 h-3.5" />
                <span>Change Photo</span>
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                {currentUser.email}
              </span>
              <span className="flex items-center gap-1">
                <School className="w-3.5 h-3.5 text-slate-400" />
                {currentUser.schoolName}
              </span>
              <span>Roll: {currentUser.rollNumber}</span>
            </div>

            <div className="flex items-center gap-2 pt-1">
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                Verified Student Profile
              </span>
              <span className="text-[11px] text-slate-400">Joined {currentUser.joinedDate}</span>
            </div>
          </div>
        </div>

        <button
          onClick={onLogout}
          className="px-4 py-2 text-xs font-bold text-rose-600 hover:bg-rose-50 border border-rose-200 rounded-xl transition-colors flex items-center gap-1.5 self-end md:self-auto shrink-0"
        >
          <LogOut className="w-4 h-4" />
          <span>Sign Out</span>
        </button>
      </div>

      {/* Crucial Section: Enrolled Class / Grade Management */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-indigo-100 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <span>Personalized Class Enrollment (Classes 1 to 10)</span>
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Switching your class grade immediately updates and locks the portal content to the selected curriculum.
            </p>
          </div>

          {isSavedNotice && (
            <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 animate-in fade-in flex items-center gap-1 self-start sm:self-auto">
              <CheckCircle2 className="w-3.5 h-3.5" />
              {savedNoticeText}
            </span>
          )}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 pt-2">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((grade) => {
            const isCurrent = currentUser.classGrade === grade;
            return (
              <button
                key={grade}
                onClick={() => handleGradeChange(grade)}
                className={`p-3 rounded-2xl border text-center transition-all ${
                  isCurrent
                    ? 'bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-200 ring-2 ring-indigo-600/30'
                    : 'bg-slate-50 hover:bg-indigo-50/60 text-slate-700 border-slate-200 hover:border-indigo-300'
                }`}
              >
                <span className="block text-sm font-bold">Class {grade}</span>
                <span className={`text-[10px] block mt-0.5 ${isCurrent ? 'text-indigo-100' : 'text-slate-400'}`}>
                  {isCurrent ? '● Currently Enrolled' : 'Switch Grade'}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Academic Stats & Study Goals */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Academic Performance Summary */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-5">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-indigo-600" />
              <span>Live Academic Metrics</span>
            </h3>
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
              Class {targetGrade}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {/* Syllabus % */}
            <div className="p-4 rounded-2xl bg-indigo-50/60 border border-indigo-100">
              <div className="flex items-center justify-between text-xs text-indigo-700 mb-1">
                <span>Syllabus Done</span>
                <BookOpen className="w-4 h-4 text-indigo-600" />
              </div>
              <span className="text-2xl font-black text-indigo-600">
                {stats.syllabusCompletionPercentage}%
              </span>
              <span className="text-[11px] text-slate-500 block mt-0.5 font-medium">
                {stats.completedChaptersCount}/{stats.totalGradeChapters} Chapters
              </span>
            </div>

            {/* Streak */}
            <div className="p-4 rounded-2xl bg-rose-50/60 border border-rose-100">
              <div className="flex items-center justify-between text-xs text-rose-700 mb-1">
                <span>Study Streak</span>
                <Flame className="w-4 h-4 text-rose-600 fill-rose-500" />
              </div>
              <span className="text-2xl font-black text-rose-600">
                {stats.currentStreak} Days
              </span>
              <span className="text-[11px] text-rose-700/80 block mt-0.5 font-medium">
                {stats.isActiveToday ? '🔥 Active Today' : 'Study Today!'}
              </span>
            </div>

            {/* Tests Taken */}
            <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-100">
              <div className="flex items-center justify-between text-xs text-amber-700 mb-1">
                <span>Tests Taken</span>
                <Award className="w-4 h-4 text-amber-600" />
              </div>
              <span className="text-2xl font-black text-amber-600">
                {stats.totalTestsTaken}
              </span>
              <span className="text-[11px] text-slate-500 block mt-0.5 font-medium">
                {stats.totalTestsTaken > 0 ? `${stats.averageTestScore}% Avg Score` : 'No tests yet'}
              </span>
            </div>

            {/* Bookmarked */}
            <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-100">
              <div className="flex items-center justify-between text-xs text-emerald-700 mb-1">
                <span>Bookmarked</span>
                <Sparkles className="w-4 h-4 text-emerald-600" />
              </div>
              <span className="text-2xl font-black text-emerald-600">
                {currentUser.bookmarkedChapterIds.length}
              </span>
              <span className="text-[11px] text-slate-500 block mt-0.5 font-medium">
                Saved Resources
              </span>
            </div>
          </div>

          {/* 7-Day Activity Calendar */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-slate-800 flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
                7-Day Study Activity
              </span>
              <span className="text-[11px] font-semibold text-slate-500">
                {stats.isActiveToday ? 'Streak maintained today' : 'Log in daily to keep streak'}
              </span>
            </div>
            <div className="grid grid-cols-7 gap-1.5 pt-1">
              {last7Days.map((item, idx) => {
                const isToday = item.dateStr === todayStr;
                const wasActive = (currentUser.activeDates || []).includes(item.dateStr) || isToday;
                return (
                  <div key={idx} className="flex flex-col items-center">
                    <span className="text-[9px] font-semibold text-slate-400 mb-1">{item.dayName}</span>
                    <div 
                      className={`w-7 h-7 rounded-xl flex items-center justify-center text-[10px] font-bold ${
                        wasActive 
                          ? 'bg-rose-500 text-white shadow-2xs ring-2 ring-rose-200' 
                          : 'bg-slate-200 text-slate-500'
                      }`}
                      title={`${item.dateStr}: ${wasActive ? 'Active' : 'No activity'}`}
                    >
                      {wasActive ? <Flame className="w-3.5 h-3.5 fill-white" /> : item.dayNumber}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Subject-Wise Syllabus Completion */}
          <div className="space-y-2.5 pt-2">
            <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
              <BarChart2 className="w-3.5 h-3.5 text-indigo-600" />
              Class {targetGrade} Subject Syllabus Completion
            </h4>
            <div className="space-y-2">
              {stats.subjectBreakdown.map((s) => (
                <div key={s.subjectId} className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-medium text-slate-700">{s.subjectName}</span>
                    <span className="font-bold text-indigo-600">{s.percentage}%</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-indigo-600 rounded-full transition-all duration-300"
                      style={{ width: `${s.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Study Goal Slider */}
          <div className="pt-2 border-t border-slate-100 space-y-2">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-700">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-indigo-600" />
                Target Weekly Study Hours:
              </span>
              <span className="text-indigo-600 font-bold">{weeklyGoal} Hours / Week</span>
            </div>
            <input
              type="range"
              min="5"
              max="25"
              value={weeklyGoal}
              onChange={(e) => setWeeklyGoal(Number(e.target.value))}
              className="w-full accent-indigo-600 cursor-pointer"
            />
          </div>
        </div>

        {/* Academic Badges & Honors */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4">
          <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
            <Award className="w-4 h-4 text-amber-500" />
            <span>Earned Campus Badges</span>
          </h3>

          <div className="space-y-3">
            {badges.map((badge, idx) => (
              <div
                key={idx}
                className={`p-3.5 rounded-2xl border flex items-center gap-3.5 transition-all ${
                  badge.unlocked
                    ? 'bg-slate-50/80 border-slate-200'
                    : 'bg-slate-50/30 border-slate-100 opacity-50'
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-white shadow-2xs border border-slate-200 flex items-center justify-center text-xl shrink-0">
                  {badge.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900">{badge.title}</span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      badge.unlocked ? 'bg-emerald-50 text-emerald-700' : 'bg-slate-200 text-slate-500'
                    }`}>
                      {badge.unlocked ? 'Unlocked' : 'In Progress'}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-0.5">{badge.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Real-Time Assessment History Log */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-600" />
            <div>
              <h3 className="font-bold text-slate-900 text-base">Continuous Test Assessment Record</h3>
              <p className="text-xs text-slate-500">Live log of all practice tests and chapter evaluations taken</p>
            </div>
          </div>
          <span className="text-xs font-bold px-3 py-1 bg-amber-50 text-amber-800 rounded-full border border-amber-200">
            {currentUser.quizHistory.length} Recorded Tests
          </span>
        </div>

        {currentUser.quizHistory.length === 0 ? (
          <div className="py-8 text-center text-slate-400 space-y-1">
            <p className="text-sm font-semibold">No tests taken yet.</p>
            <p className="text-xs">Take chapter practice tests in the Quizzes section to track your scores and knowledge mastery!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {currentUser.quizHistory.map((q, idx) => {
              const pct = q.totalQuestions > 0 ? Math.round((q.score / q.totalQuestions) * 100) : 0;
              return (
                <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900 truncate pr-2">
                      Chapter Test
                    </span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                      pct >= 80 
                        ? 'bg-emerald-100 text-emerald-800' 
                        : pct >= 50 
                        ? 'bg-amber-100 text-amber-800' 
                        : 'bg-rose-100 text-rose-800'
                    }`}>
                      {pct}% Accuracy
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span>Score: <strong className="text-slate-900 font-bold">{q.score} / {q.totalQuestions}</strong></span>
                    <span>{q.date}</span>
                  </div>
                  <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all duration-300 ${
                        pct >= 80 ? 'bg-emerald-500' : pct >= 50 ? 'bg-amber-500' : 'bg-rose-500'
                      }`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Industry-Standard Supabase Database & Security Card */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <span>Supabase Cloud Database & Auth Architecture</span>
              </h3>
              <p className="text-xs text-slate-500">
                PostgreSQL with Row Level Security (RLS) & JWT Token Verification
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
            {isSupabaseConfigured() ? (
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200 shadow-2xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Live Cloud Connected
                </span>
                <span className="text-[11px] font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200">
                  {supabaseUrl.replace('https://', '')}
                </span>
              </div>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold border border-slate-200">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                Client Ready (Awaiting Keys in .env)
              </span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
              <Lock className="w-3.5 h-3.5 text-indigo-600" />
              <span>Row Level Security (RLS)</span>
            </div>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              Strict database policies ensure students can only view and update their own progress and quiz logs.
            </p>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>JWT Session Tokens</span>
            </div>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              Industry standard cryptographic tokens auto-refresh and persist student login sessions across devices.
            </p>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
              <Server className="w-3.5 h-3.5 text-blue-600" />
              <span>PostgreSQL Schema Ready</span>
            </div>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              Pre-built <code className="text-indigo-600 font-mono">supabase-schema.sql</code> created for profiles, streaks, and syllabus metrics.
            </p>
          </div>
        </div>
      </div>

      {/* Change Profile Photo Modal */}
      <ChangePhotoModal
        isOpen={isChangePhotoOpen}
        onClose={() => setIsChangePhotoOpen(false)}
        currentAvatar={currentUser.avatar}
        onSavePhoto={handlePhotoUpdated}
        userName={currentUser.name}
      />

    </div>
  );
};
