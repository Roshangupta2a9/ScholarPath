import React, { useState } from 'react';
import { 
  Menu, 
  GraduationCap, 
  Search, 
  Bell, 
  User as UserIcon, 
  LogOut, 
  BookOpen, 
  Award, 
  CheckCircle2, 
  ChevronDown,
  Sparkles,
  ArrowRight,
  Flame
} from 'lucide-react';
import { StudentUser, NavigationTab } from '../types';
import { calculateStudentAcademicStats } from '../utils/studentProgressTracker';

interface NavbarProps {
  currentUser: StudentUser | null;
  activeTab: NavigationTab;
  setActiveTab: (tab: NavigationTab) => void;
  onToggleSidebar: () => void;
  onOpenAuth: (mode: 'login' | 'register') => void;
  onLogout: () => void;
  onSwitchClass: (grade: number) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentUser,
  activeTab: _activeTab,
  setActiveTab,
  onToggleSidebar,
  onOpenAuth,
  onLogout,
  onSwitchClass
}) => {
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const stats = calculateStudentAcademicStats(currentUser);

  const notifications = [
    {
      id: 1,
      title: `Class ${currentUser?.classGrade || 8} Chapter Quiz Live`,
      desc: 'Test your understanding on key concepts and earn streak points.',
      time: '10m ago',
      unread: true
    },
    {
      id: 2,
      title: 'Teacher Feedback Available',
      desc: 'Your recent science practice exercise answers have been evaluated.',
      time: '2h ago',
      unread: true
    },
    {
      id: 3,
      title: 'Upcoming Diagnostic Test',
      desc: 'Term-1 Mathematics online test scheduled this Saturday.',
      time: '1d ago',
      unread: false
    }
  ];

  return (
    <header id="app-header" className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          
          {/* Left: Hamburger & Brand */}
          <div className="flex items-center gap-3">
            <button
              id="sidebar-toggle-btn"
              onClick={onToggleSidebar}
              className="p-2 -ml-2 rounded-xl text-slate-700 hover:text-indigo-600 hover:bg-slate-100 transition-colors focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
              aria-label="Toggle Navigation Sidebar"
            >
              <Menu className="w-6 h-6" />
            </button>

            <button
              id="brand-logo-btn"
              onClick={() => setActiveTab('home')}
              className="flex items-center gap-2.5 text-left group"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-blue-600 flex items-center justify-center text-white shadow-md shadow-indigo-200 group-hover:scale-105 transition-transform">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div className="hidden sm:block">
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-slate-900 text-lg tracking-tight">EduCampus</span>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-indigo-100 text-indigo-700">
                    K-10
                  </span>
                </div>
                <p className="text-xs text-slate-500 font-medium">School Student Learning Portal</p>
              </div>
            </button>

            {/* Enrolled Grade & Live Progress Quick Indicators */}
            {currentUser && (
              <div className="flex items-center gap-1.5 ml-1 sm:ml-2">
                <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 bg-indigo-50 border border-indigo-200 rounded-full text-xs font-semibold text-indigo-700">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Class {currentUser.classGrade}</span>
                </div>

                {/* Live Streak Pill */}
                <button
                  id="navbar-streak-pill"
                  onClick={() => setActiveTab('profile')}
                  title={`Study Streak: ${stats.currentStreak} consecutive days! Click to view profile.`}
                  className="flex items-center gap-1.5 px-2.5 py-1 bg-rose-50 hover:bg-rose-100 border border-rose-200/80 rounded-full text-xs font-bold text-rose-700 transition-all hover:scale-105"
                >
                  <Flame className="w-3.5 h-3.5 text-rose-500 fill-rose-500 animate-pulse" />
                  <span>{stats.currentStreak}d Streak</span>
                </button>

                {/* Live Syllabus % Pill */}
                <button
                  id="navbar-syllabus-pill"
                  onClick={() => setActiveTab('classroom')}
                  title={`Class ${currentUser.classGrade} Syllabus: ${stats.syllabusCompletionPercentage}% completed (${stats.completedChaptersCount}/${stats.totalGradeChapters} chapters)`}
                  className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/80 rounded-full text-xs font-bold text-emerald-700 transition-all hover:scale-105"
                >
                  <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{stats.syllabusCompletionPercentage}% Syllabus</span>
                </button>

                {/* Live Tests Taken Pill */}
                <button
                  id="navbar-tests-pill"
                  onClick={() => setActiveTab('quizzes')}
                  title={`Completed Assessments: ${stats.totalTestsTaken} tests taken`}
                  className="hidden xl:flex items-center gap-1.5 px-2.5 py-1 bg-amber-50 hover:bg-amber-100 border border-amber-200/80 rounded-full text-xs font-bold text-amber-800 transition-all hover:scale-105"
                >
                  <Award className="w-3.5 h-3.5 text-amber-600" />
                  <span>{stats.totalTestsTaken} Tests</span>
                </button>
              </div>
            )}
          </div>

          {/* Middle: Search bar */}
          <div className="flex-1 max-w-md hidden lg:block">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                id="global-search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={currentUser ? `Search Class ${currentUser.classGrade} chapters, formulas, topics...` : "Search curriculum, chapters, tests..."}
                className="w-full pl-9 pr-4 py-1.5 bg-slate-100/80 hover:bg-slate-100 focus:bg-white text-sm text-slate-900 placeholder-slate-500 rounded-xl border border-transparent focus:border-indigo-400 focus:outline-hidden focus:ring-2 focus:ring-indigo-100 transition-all"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && searchQuery.trim()) {
                    setActiveTab('classroom');
                  }
                }}
              />
            </div>
          </div>

          {/* Right: Auth State & Profile */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Notification Bell */}
            <div className="relative">
              <button
                id="notifications-btn"
                onClick={() => {
                  setShowNotifications(!showNotifications);
                  setShowProfileDropdown(false);
                }}
                className="p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors relative"
                aria-label="View notifications"
              >
                <Bell className="w-5 h-5" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-indigo-600 rounded-full ring-2 ring-white"></span>
              </button>

              {/* Notification Popover */}
              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-white rounded-2xl shadow-xl border border-slate-200 py-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-4 pb-2 border-b border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold text-slate-900 text-sm">Academic Alerts</h4>
                      <span className="px-1.5 py-0.5 rounded-full text-[10px] font-bold bg-indigo-100 text-indigo-700">
                        2 New
                      </span>
                    </div>
                    <button 
                      onClick={() => setShowNotifications(false)}
                      className="text-xs text-indigo-600 hover:text-indigo-700 font-medium"
                    >
                      Mark all read
                    </button>
                  </div>
                  <div className="max-h-72 overflow-y-auto divide-y divide-slate-100">
                    {notifications.map((n) => (
                      <div key={n.id} className={`p-3.5 hover:bg-slate-50 transition-colors ${n.unread ? 'bg-indigo-50/30' : ''}`}>
                        <div className="flex items-start justify-between gap-2">
                          <p className="text-xs font-semibold text-slate-800">{n.title}</p>
                          <span className="text-[10px] text-slate-400 shrink-0">{n.time}</span>
                        </div>
                        <p className="text-xs text-slate-500 mt-1 leading-relaxed">{n.desc}</p>
                      </div>
                    ))}
                  </div>
                  <div className="px-3 pt-2 border-t border-slate-100 text-center">
                    <button
                      onClick={() => {
                        setShowNotifications(false);
                        setActiveTab('calendar');
                      }}
                      className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 flex items-center justify-center gap-1 w-full py-1"
                    >
                      View Academic Calendar <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Dynamic Auth Header State */}
            {currentUser ? (
              // Logged-in State: Avatar with Quick Dropdown
              <div className="relative">
                <button
                  id="user-profile-menu-btn"
                  onClick={() => {
                    setShowProfileDropdown(!showProfileDropdown);
                    setShowNotifications(false);
                  }}
                  className="flex items-center gap-2.5 p-1 sm:pl-2 sm:pr-3 rounded-full sm:rounded-xl hover:bg-slate-100 transition-all border border-transparent hover:border-slate-200"
                  aria-label="Open User Menu"
                >
                  <img
                    src={currentUser.avatar}
                    alt={currentUser.name}
                    className="w-9 h-9 rounded-full object-cover ring-2 ring-indigo-500/20 shadow-xs"
                    onError={(e) => {
                      // Fallback avatar
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80';
                    }}
                  />
                  <div className="hidden sm:block text-left">
                    <div className="text-xs font-semibold text-slate-900 leading-tight">
                      {currentUser.name.split(' ')[0]}
                    </div>
                    <div className="text-[11px] font-medium text-slate-500">
                      Class {currentUser.classGrade}
                    </div>
                  </div>
                  <ChevronDown className="w-4 h-4 text-slate-400 hidden sm:block" />
                </button>

                {/* Profile Summary Dropdown */}
                {showProfileDropdown && (
                  <div className="absolute right-0 mt-2 w-72 sm:w-80 bg-white rounded-2xl shadow-xl border border-slate-200 p-4 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                      <img
                        src={currentUser.avatar}
                        alt={currentUser.name}
                        className="w-12 h-12 rounded-full object-cover ring-2 ring-indigo-500/30"
                      />
                      <div className="overflow-hidden">
                        <h4 className="font-semibold text-slate-900 text-sm truncate">{currentUser.name}</h4>
                        <p className="text-xs text-slate-500 truncate">{currentUser.email}</p>
                        <div className="inline-flex items-center gap-1 mt-1 px-2 py-0.5 rounded-md bg-indigo-50 text-[11px] font-semibold text-indigo-700">
                          Class {currentUser.classGrade} • Roll: {currentUser.rollNumber}
                        </div>
                      </div>
                    </div>

                    {/* Quick Stats Grid with Live Syllabus and Streak */}
                    <div className="py-3 border-b border-slate-100 space-y-2">
                      <div className="grid grid-cols-3 gap-2 text-center">
                        <div className="bg-slate-50 rounded-xl p-2">
                          <span className="block text-[10px] text-slate-500 font-semibold uppercase">Syllabus</span>
                          <span className="font-bold text-slate-900 text-sm flex items-center justify-center gap-1">
                            <BookOpen className="w-3.5 h-3.5 text-indigo-600" />
                            {stats.syllabusCompletionPercentage}%
                          </span>
                        </div>
                        <div className="bg-slate-50 rounded-xl p-2">
                          <span className="block text-[10px] text-slate-500 font-semibold uppercase">Tests</span>
                          <span className="font-bold text-slate-900 text-sm flex items-center justify-center gap-1">
                            <Award className="w-3.5 h-3.5 text-amber-500" />
                            {stats.totalTestsTaken}
                          </span>
                        </div>
                        <div className="bg-slate-50 rounded-xl p-2">
                          <span className="block text-[10px] text-slate-500 font-semibold uppercase">Streak</span>
                          <span className="font-bold text-rose-600 text-sm flex items-center justify-center gap-1">
                            <Flame className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
                            {stats.currentStreak}d
                          </span>
                        </div>
                      </div>

                      {/* Mini syllabus progress indicator */}
                      <div className="bg-slate-50 rounded-xl p-2.5 space-y-1.5 border border-slate-100">
                        <div className="flex items-center justify-between text-[11px]">
                          <span className="font-semibold text-slate-700">Class {currentUser.classGrade} Syllabus</span>
                          <span className="font-bold text-indigo-600">{stats.completedChaptersCount}/{stats.totalGradeChapters} Done</span>
                        </div>
                        <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-indigo-600 rounded-full transition-all duration-300"
                            style={{ width: `${Math.max(stats.syllabusCompletionPercentage, 5)}%` }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Quick Grade Switcher */}
                    <div className="py-2.5">
                      <div className="flex items-center justify-between text-xs font-semibold text-slate-700 mb-1.5">
                        <span>Curriculum Grade:</span>
                        <span className="text-indigo-600 font-bold">Class {currentUser.classGrade}</span>
                      </div>
                      <div className="flex items-center gap-1 overflow-x-auto pb-1 scrollbar-none">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((grade) => (
                          <button
                            key={grade}
                            onClick={() => {
                              onSwitchClass(grade);
                              setShowProfileDropdown(false);
                            }}
                            className={`px-2 py-1 rounded-md text-xs font-semibold shrink-0 transition-colors ${
                              currentUser.classGrade === grade
                                ? 'bg-indigo-600 text-white shadow-xs'
                                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                            }`}
                          >
                            C{grade}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Action Links */}
                    <div className="pt-2 border-t border-slate-100 space-y-1">
                      <button
                        onClick={() => {
                          setActiveTab('profile');
                          setShowProfileDropdown(false);
                        }}
                        className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-slate-700 hover:text-indigo-600 hover:bg-slate-50 rounded-xl transition-colors text-left"
                      >
                        <UserIcon className="w-4 h-4 text-slate-400" />
                        <span>Manage Academic Profile</span>
                      </button>
                      <button
                        onClick={() => {
                          setActiveTab('classroom');
                          setShowProfileDropdown(false);
                        }}
                        className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-slate-700 hover:text-indigo-600 hover:bg-slate-50 rounded-xl transition-colors text-left"
                      >
                        <BookOpen className="w-4 h-4 text-slate-400" />
                        <span>My Enrolled Classroom</span>
                      </button>
                      <button
                        onClick={() => {
                          setShowProfileDropdown(false);
                          onLogout();
                        }}
                        className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-rose-600 hover:bg-rose-50 rounded-xl transition-colors text-left"
                      >
                        <LogOut className="w-4 h-4 text-rose-500" />
                        <span>Sign Out</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              // Unauthenticated State: Distinct Login & Register buttons
              <div className="flex items-center gap-2">
                <button
                  id="header-login-btn"
                  onClick={() => onOpenAuth('login')}
                  className="px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-slate-700 hover:text-indigo-600 hover:bg-slate-100 rounded-xl transition-colors"
                >
                  Log In
                </button>
                <button
                  id="header-register-btn"
                  onClick={() => onOpenAuth('register')}
                  className="px-4 py-1.5 text-xs sm:text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-xs shadow-indigo-200 hover:shadow-indigo-300 transition-all"
                >
                  Register
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
