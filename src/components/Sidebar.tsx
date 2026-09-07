import React from 'react';
import { 
  Home, 
  User, 
  BookOpen, 
  FolderGit2, 
  HelpCircle, 
  Calendar, 
  X, 
  GraduationCap, 
  Sparkles, 
  CheckCircle2,
  ChevronRight,
  ClipboardList,
  Flame,
  Award
} from 'lucide-react';
import { NavigationTab, StudentUser } from '../types';
import { calculateStudentAcademicStats } from '../utils/studentProgressTracker';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  activeTab: NavigationTab;
  setActiveTab: (tab: NavigationTab) => void;
  currentUser: StudentUser | null;
  onOpenAuth: (mode: 'login' | 'register') => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  onClose,
  activeTab,
  setActiveTab,
  currentUser,
  onOpenAuth
}) => {
  const stats = calculateStudentAcademicStats(currentUser);

  const navItems = [
    {
      id: 'home' as NavigationTab,
      label: 'Home',
      icon: Home,
      badge: null,
      description: 'Campus dashboard & recent activity'
    },
    {
      id: 'classroom' as NavigationTab,
      label: 'Classroom',
      icon: BookOpen,
      badge: currentUser ? `Class ${currentUser.classGrade}` : 'All Classes',
      description: 'Structured Class > Subject > Chapter'
    },
    {
      id: 'course-content' as NavigationTab,
      label: 'Course Content',
      icon: FolderGit2,
      badge: 'Library',
      description: 'Notes, worksheets & reading modules'
    },
    {
      id: 'quizzes' as NavigationTab,
      label: 'Quizzes & Tests',
      icon: ClipboardList,
      badge: 'Assessments',
      description: 'MCQs, test scores & instant evaluation'
    },
    {
      id: 'calendar' as NavigationTab,
      label: 'Calendar',
      icon: Calendar,
      badge: null,
      description: 'Exams, schedules & homework deadlines'
    },
    {
      id: 'profile' as NavigationTab,
      label: 'Profile',
      icon: User,
      badge: null,
      description: 'Academic progress & class settings'
    },
    {
      id: 'help' as NavigationTab,
      label: 'Help Center',
      icon: HelpCircle,
      badge: 'Doubts',
      description: 'FAQ, student guides & ask teacher'
    }
  ];

  const handleSelect = (tab: NavigationTab) => {
    setActiveTab(tab);
    onClose();
  };

  return (
    <>
      {/* Backdrop overlay for mobile and modal effect */}
      {isOpen && (
        <div
          id="sidebar-backdrop"
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs z-40 transition-opacity"
          aria-hidden="true"
        />
      )}

      {/* Slide-out Sidebar Drawer */}
      <aside
        id="campus-sidebar"
        className={`fixed top-0 left-0 bottom-0 w-80 max-w-[85vw] bg-white border-r border-slate-200 z-50 flex flex-col shadow-2xl transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        aria-label="Campus Navigation Menu"
      >
        {/* Sidebar Header */}
        <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-blue-600 flex items-center justify-center text-white shadow-md shadow-indigo-100">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-slate-900 text-base tracking-tight">EduCampus</span>
                <span className="text-[10px] uppercase font-bold tracking-wide px-1.5 py-0.5 rounded bg-indigo-50 text-indigo-700">
                  Portal
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium">K-10 Academic System</p>
            </div>
          </div>

          <button
            id="sidebar-close-btn"
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Close Sidebar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Personalized Enrolled Status & Live Academic Stats */}
        {currentUser && (
          <div className="mx-4 mt-3 p-3 bg-gradient-to-r from-indigo-50/80 via-blue-50/80 to-purple-50/80 border border-indigo-100 rounded-2xl space-y-2.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold text-xs shadow-xs">
                  C{currentUser.classGrade}
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">Class {currentUser.classGrade} Student</p>
                  <p className="text-[11px] text-indigo-700 font-medium flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-indigo-500" />
                    Curriculum Filtered
                  </p>
                </div>
              </div>
              <button
                onClick={() => handleSelect('profile')}
                className="text-[11px] font-semibold text-indigo-600 hover:text-indigo-800 bg-white px-2 py-1 rounded-lg border border-indigo-200 shadow-2xs"
              >
                Profile
              </button>
            </div>

            {/* Live Streak & Syllabus Badges */}
            <div className="grid grid-cols-3 gap-1.5 pt-1 border-t border-indigo-100/70 text-center">
              <div className="bg-white/70 rounded-lg py-1 px-1.5 border border-indigo-100/50">
                <span className="block text-[9px] uppercase font-bold text-slate-400">Streak</span>
                <span className="text-xs font-bold text-rose-600 flex items-center justify-center gap-0.5">
                  <Flame className="w-3 h-3 fill-rose-500 text-rose-500" />
                  {stats.currentStreak}d
                </span>
              </div>
              <div className="bg-white/70 rounded-lg py-1 px-1.5 border border-indigo-100/50">
                <span className="block text-[9px] uppercase font-bold text-slate-400">Syllabus</span>
                <span className="text-xs font-bold text-indigo-600">
                  {stats.syllabusCompletionPercentage}%
                </span>
              </div>
              <div className="bg-white/70 rounded-lg py-1 px-1.5 border border-indigo-100/50">
                <span className="block text-[9px] uppercase font-bold text-slate-400">Tests</span>
                <span className="text-xs font-bold text-amber-600 flex items-center justify-center gap-0.5">
                  <Award className="w-3 h-3 text-amber-500" />
                  {stats.totalTestsTaken}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Navigation Items List */}
        <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1.5" aria-label="Campus Sections">
          <div className="px-3 pb-1 text-[11px] font-bold uppercase tracking-wider text-slate-400">
            Campus Sections
          </div>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;

            return (
              <button
                key={item.id}
                id={`sidebar-link-${item.id}`}
                onClick={() => handleSelect(item.id)}
                className={`w-full flex items-center gap-3.5 px-3.5 py-2.5 rounded-xl text-left transition-all group ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                    isActive
                      ? 'bg-white/20 text-white'
                      : 'bg-slate-100 text-slate-600 group-hover:bg-white group-hover:text-indigo-600 group-hover:shadow-2xs'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1">
                    <span className={`text-sm font-semibold truncate ${isActive ? 'text-white' : 'text-slate-900'}`}>
                      {item.label}
                    </span>
                    {item.badge && (
                      <span
                        className={`text-[10px] font-semibold px-2 py-0.5 rounded-full shrink-0 ${
                          isActive
                            ? 'bg-white/25 text-white'
                            : 'bg-indigo-50 text-indigo-700'
                        }`}
                      >
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <p className={`text-[11px] truncate ${isActive ? 'text-indigo-100' : 'text-slate-400'}`}>
                    {item.description}
                  </p>
                </div>

                <ChevronRight className={`w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity ${isActive ? 'text-white' : 'text-slate-400'}`} />
              </button>
            );
          })}
        </nav>

        {/* Sidebar Footer: Student Summary or Auth Call to Action */}
        <div className="p-4 border-t border-slate-100 bg-slate-50/70">
          {currentUser ? (
            <div className="flex items-center justify-between">
              <div 
                className="flex items-center gap-2.5 cursor-pointer hover:opacity-80 transition-opacity"
                onClick={() => handleSelect('profile')}
              >
                <img
                  src={currentUser.avatar}
                  alt={currentUser.name}
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-indigo-500/20"
                />
                <div className="overflow-hidden">
                  <p className="text-xs font-bold text-slate-900 truncate">{currentUser.name}</p>
                  <p className="text-[11px] text-slate-500 truncate">{currentUser.schoolName}</p>
                  <div className="flex items-center gap-1 text-[10px] text-emerald-600 font-medium">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Active Session</span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center">
              <p className="text-xs text-slate-600 mb-2 font-medium">Access personalized class curriculum & test scores</p>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => {
                    onClose();
                    onOpenAuth('login');
                  }}
                  className="px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 rounded-xl border border-slate-200 transition-colors"
                >
                  Log In
                </button>
                <button
                  onClick={() => {
                    onClose();
                    onOpenAuth('register');
                  }}
                  className="px-3 py-1.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-xs transition-colors"
                >
                  Register
                </button>
              </div>
            </div>
          )}
        </div>
      </aside>
    </>
  );
};
