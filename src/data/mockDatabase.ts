import { StudentUser, CalendarEvent, DoubtItem } from '../types';
import { recordUserActivity, getTodayDateString } from '../utils/studentProgressTracker';

export const DEMO_USERS: StudentUser[] = [
  {
    id: 'student-demo-8',
    name: 'Aarav Sharma',
    email: 'aarav.sharma@campus.edu',
    classGrade: 8,
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80',
    rollNumber: 'VIII-A-24',
    schoolName: 'Delhi Public Campus School',
    joinedDate: 'August 2024',
    completedChapterIds: ['c8-m-ch1'],
    bookmarkedChapterIds: ['c8-s-ch1', 'c8-m-ch2'],
    studyStreakDays: 14,
    studyGoalHoursPerWeek: 12,
    password: 'pass123',
    lastActiveDate: getTodayDateString(),
    activeDates: [getTodayDateString()],
    lastActivityTimestamp: Date.now(),
    quizHistory: [
      {
        id: 'sub-demo-1',
        chapterId: 'c8-m-ch1',
        chapterTitle: 'Rational Numbers & Linear Equations',
        subjectName: 'Mathematics',
        classGrade: 8,
        score: 3,
        totalQuestions: 3,
        percentage: 100,
        completedAt: 'Yesterday at 4:30 PM',
        timeTakenSeconds: 95,
        answers: { 1: 0, 2: 0, 3: 0 }
      }
    ]
  },
  {
    id: 'student-demo-10',
    name: 'Ananya Verma',
    email: 'ananya.verma@campus.edu',
    classGrade: 10,
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80',
    rollNumber: 'X-B-12',
    schoolName: 'Kendriya Vidyalaya Academy',
    joinedDate: 'April 2024',
    completedChapterIds: ['c10-m-ch1', 'c10-s-ch1'],
    bookmarkedChapterIds: ['c10-m-ch2'],
    studyStreakDays: 28,
    studyGoalHoursPerWeek: 16,
    password: 'pass123',
    lastActiveDate: getTodayDateString(),
    activeDates: [getTodayDateString()],
    lastActivityTimestamp: Date.now(),
    quizHistory: [
      {
        id: 'sub-demo-2',
        chapterId: 'c10-s-ch1',
        chapterTitle: 'Chemical Reactions and Equations',
        subjectName: 'Science',
        classGrade: 10,
        score: 3,
        totalQuestions: 3,
        percentage: 100,
        completedAt: '2 days ago',
        timeTakenSeconds: 110,
        answers: { 1: 0, 2: 0, 3: 0 }
      }
    ]
  },
  {
    id: 'student-demo-4',
    name: 'Kabir Patel',
    email: 'kabir.patel@campus.edu',
    classGrade: 4,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    rollNumber: 'IV-C-08',
    schoolName: 'St. Xavier Primary School',
    joinedDate: 'July 2024',
    completedChapterIds: ['c4-m-ch1'],
    bookmarkedChapterIds: ['c4-s-ch1'],
    studyStreakDays: 7,
    studyGoalHoursPerWeek: 8,
    password: 'pass123',
    lastActiveDate: getTodayDateString(),
    activeDates: [getTodayDateString()],
    lastActivityTimestamp: Date.now(),
    quizHistory: []
  },
  {
    id: 'student-demo-6',
    name: 'Diya Sen',
    email: 'diya.sen@campus.edu',
    classGrade: 6,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    rollNumber: 'VI-A-19',
    schoolName: 'Modern School Barakhamba',
    joinedDate: 'May 2024',
    completedChapterIds: [],
    bookmarkedChapterIds: ['c6-eng-ch1'],
    studyStreakDays: 9,
    studyGoalHoursPerWeek: 10,
    password: 'pass123',
    lastActiveDate: getTodayDateString(),
    activeDates: [getTodayDateString()],
    lastActivityTimestamp: Date.now(),
    quizHistory: []
  }
];

const USER_STORAGE_KEY = 'edu_student_current_user_v1';
const ALL_USERS_STORAGE_KEY = 'edu_student_all_users_v1';

export const getStoredAllUsers = (): StudentUser[] => {
  try {
    const raw = localStorage.getItem(ALL_USERS_STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(ALL_USERS_STORAGE_KEY, JSON.stringify(DEMO_USERS));
      return DEMO_USERS;
    }
    return JSON.parse(raw);
  } catch {
    return DEMO_USERS;
  }
};

export const saveStoredAllUsers = (users: StudentUser[]) => {
  try {
    localStorage.setItem(ALL_USERS_STORAGE_KEY, JSON.stringify(users));
  } catch (e) {
    console.error('Failed to persist users', e);
  }
};

export const getCurrentUser = (): StudentUser | null => {
  try {
    const raw = localStorage.getItem(USER_STORAGE_KEY);
    let user: StudentUser;
    if (!raw) {
      // Default to logged-in Aarav Sharma (Class 8) for seamless instant experience
      user = DEMO_USERS[0];
    } else {
      user = JSON.parse(raw);
    }
    
    // Automatically update streak & activity for current date
    const updatedUser = recordUserActivity(user);
    if (
      updatedUser.lastActiveDate !== user.lastActiveDate ||
      updatedUser.studyStreakDays !== user.studyStreakDays
    ) {
      localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(updatedUser));
      const all = getStoredAllUsers();
      const idx = all.findIndex(u => u.id === updatedUser.id);
      if (idx >= 0) {
        all[idx] = updatedUser;
        saveStoredAllUsers(all);
      }
    }
    return updatedUser;
  } catch {
    return DEMO_USERS[0];
  }
};

export const setCurrentUser = (user: StudentUser | null) => {
  try {
    if (user) {
      localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
      // Also update in all users
      const all = getStoredAllUsers();
      const idx = all.findIndex(u => u.id === user.id);
      if (idx >= 0) {
        all[idx] = user;
      } else {
        all.push(user);
      }
      saveStoredAllUsers(all);
    } else {
      localStorage.removeItem(USER_STORAGE_KEY);
    }
  } catch (e) {
    console.error('Failed to set current user', e);
  }
};

export interface LoginResult {
  success: boolean;
  user: StudentUser | null;
  error?: string;
}

export const registerStudent = (
  name: string,
  email: string,
  password: string,
  classGrade: number,
  schoolName: string = 'National Model Academy'
): StudentUser => {
  const today = getTodayDateString();
  const newUser: StudentUser = {
    id: `student-${Date.now()}`,
    name,
    email,
    password: password.trim() || 'pass123',
    classGrade,
    avatar: `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(name)}`,
    rollNumber: `GR-${classGrade}-${Math.floor(10 + Math.random() * 89)}`,
    schoolName,
    joinedDate: 'September 2026',
    completedChapterIds: [],
    bookmarkedChapterIds: [],
    quizHistory: [],
    studyStreakDays: 1,
    studyGoalHoursPerWeek: 10,
    lastActiveDate: today,
    activeDates: [today],
    lastActivityTimestamp: Date.now()
  };

  const all = getStoredAllUsers();
  const existingIdx = all.findIndex(u => u.email.toLowerCase() === email.toLowerCase());
  if (existingIdx >= 0) {
    all[existingIdx] = newUser;
  } else {
    all.push(newUser);
  }
  saveStoredAllUsers(all);
  setCurrentUser(newUser);
  return newUser;
};

export const loginStudent = (email: string, password?: string): LoginResult => {
  const all = getStoredAllUsers();
  const user = all.find(u => u.email.toLowerCase() === email.toLowerCase());
  if (!user) {
    return {
      success: false,
      user: null,
      error: 'Student profile not found. Please verify your email or create a new student registration.'
    };
  }

  const expectedPassword = user.password || 'pass123';
  if (password !== undefined && password.trim() !== expectedPassword) {
    return {
      success: false,
      user: null,
      error: 'Incorrect password entered. Please enter your valid student password.'
    };
  }

  // Record activity and calculate streak update on login
  const updatedUser = recordUserActivity(user);
  setCurrentUser(updatedUser);
  return {
    success: true,
    user: updatedUser
  };
};

// Calendar events categorized by class and general academic deadlines
export const getCalendarEventsForClass = (classGrade: number): CalendarEvent[] => {
  return [
    {
      id: 'cal-1',
      title: `Class ${classGrade} Term-1 Mathematics Diagnostic Test`,
      date: '2026-09-12',
      time: '09:30 AM - 11:00 AM',
      type: 'exam',
      subject: 'Mathematics',
      classGrade,
      description: 'Online timed chapter assessment covering foundational formulas and exercise problems.'
    },
    {
      id: 'cal-2',
      title: `Science Practical Exercise & Worksheet Due`,
      date: '2026-09-15',
      time: '05:00 PM',
      type: 'assignment',
      subject: 'Science',
      classGrade,
      description: 'Submit notes on observations and answer the chapter practice questions.'
    },
    {
      id: 'cal-3',
      title: `Live Interactive Doubt Clearing with Campus Mentor`,
      date: '2026-09-18',
      time: '04:00 PM - 05:00 PM',
      type: 'live-session',
      subject: 'General Academic',
      classGrade,
      description: 'Ask any questions directly regarding tricky equations, vocabulary, or diagrams.'
    },
    {
      id: 'cal-4',
      title: `Weekend Chapter Revision & Mock Quiz Marathon`,
      date: '2026-09-20',
      time: 'Whole Day',
      type: 'revision',
      subject: 'All Subjects',
      classGrade,
      description: 'Earn double study streak points by completing 2 or more chapter quizzes.'
    },
    {
      id: 'cal-5',
      title: `English Literature Reading & Essay Challenge`,
      date: '2026-09-24',
      time: '11:00 AM',
      type: 'assignment',
      subject: 'English',
      classGrade,
      description: 'Analytical reflection on character motivations and ethical themes.'
    }
  ];
};

export const INITIAL_DOUBTS: DoubtItem[] = [
  {
    id: 'doubt-1',
    studentName: 'Aarav S.',
    classGrade: 8,
    subject: 'Mathematics',
    question: 'How do we know whether to multiply or divide when transposing fractions across an equal sign?',
    timestamp: '2 hours ago',
    status: 'answered',
    answer: 'Great question! A fraction in the denominator is effectively division. Transposing it to the other side means applying the inverse operation: multiplication by the denominator (or multiplying by the reciprocal).',
    mentorName: 'Prof. Arvind Saxena'
  },
  {
    id: 'doubt-2',
    studentName: 'Rohan K.',
    classGrade: 10,
    subject: 'Science',
    question: 'Why does the left ventricle have significantly thicker muscular walls than the right ventricle in the human heart?',
    timestamp: '5 hours ago',
    status: 'answered',
    answer: 'Because the right ventricle only has to pump deoxygenated blood a short distance to the neighboring lungs, whereas the left ventricle must generate enough systolic pressure to push blood through the systemic circulation all the way to your fingertips and toes!',
    mentorName: 'Dr. Sunita Sen'
  },
  {
    id: 'doubt-3',
    studentName: 'Sneha P.',
    classGrade: 4,
    subject: 'Science / EVS',
    question: 'Why do birds have hollow bones?',
    timestamp: '1 day ago',
    status: 'answered',
    answer: 'Hollow, pneumatic bones filled with air sacs make their body skeleton lightweight, reducing the energy needed to take off and glide through the sky!',
    mentorName: 'Dr. Vivek Menon'
  }
];
