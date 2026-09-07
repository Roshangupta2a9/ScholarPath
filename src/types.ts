export type NavigationTab = 
  | 'home' 
  | 'classroom' 
  | 'course-content' 
  | 'quizzes' 
  | 'calendar' 
  | 'profile' 
  | 'help';

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctOptionIndex: number;
  explanation: string;
  hint?: string;
}

export interface PracticeExercise {
  id: string;
  question: string;
  type: 'mcq' | 'fill';
  options?: string[];
  correctAnswer: string | number; // index if mcq, text if fill
  explanation: string;
  hints?: string;
}

export interface SolvedExample {
  title: string;
  problem: string;
  solutionSteps: string[];
  keyTakeaway: string;
}

export interface DetailedFAQ {
  question: string;
  answer: string;
  tag?: string;
}

export interface MisconceptionItem {
  misconception: string;
  correction: string;
  explanation: string;
}

export interface GlossaryItem {
  term: string;
  definition: string;
}

export interface SequentialPart {
  partNumber: number;
  title: string;
  modulePhase: string;
  category: string;
  summary: string;
  deepExplanation: string;
  bulletPoints?: string[];
  examinerInsight: string;
  practicalApplication?: string;
}

export interface DeepSolvedProblem {
  problemNumber: number;
  title: string;
  category: 'Direct Concept' | 'Numerical' | 'Derivation' | 'HOTS' | 'Olympiad';
  difficulty: 'Foundation' | 'Standard' | 'Advanced' | 'Olympiad';
  problemStatement: string;
  givenData: string;
  governingFormula: string;
  stepByStepSolution: string[];
  finalAnswer: string;
  examinerShortcut: string;
}

export interface DeepPracticeQuestion {
  id: number;
  setNumber: number;
  question: string;
  type: 'mcq' | 'assertion-reason' | 'numerical' | 'conceptual';
  options: string[];
  correctOptionIndex: number;
  difficulty: 'Foundation' | 'Intermediate' | 'Board-Exam' | 'Olympiad';
  explanation: string;
  hint: string;
}

export interface DeepFormulaItem {
  id: number;
  category: 'Fundamental Law' | 'Derived Equation' | 'Identity / Theorem' | 'Constants & Units' | 'Shortcut Rule';
  title: string;
  formula: string;
  symbolsExplained: string;
  siUnits: string;
  applicabilityCriteria: string;
  examNote: string;
}

export interface Chapter {
  id: string;
  classGrade: number; // 1 to 10
  subjectId: string;
  chapterNumber: number;
  title: string;
  tagline: string;
  summary: string;
  readingTimeMinutes: number;
  keyConcepts: { title: string; detail: string }[];
  readingSections: { heading: string; body: string; tip?: string }[];
  practiceExercises: PracticeExercise[];
  quizQuestions: QuizQuestion[];
  summaryPoints?: string[];
  formulasAndRules?: { title: string; formula: string; explanation: string }[];
  sources?: string[];
  solvedExamples?: SolvedExample[];
  detailedFaqs?: DetailedFAQ[];
  commonMisconceptions?: MisconceptionItem[];
  glossary?: GlossaryItem[];
  didYouKnow?: string[];
}

export interface Subject {
  id: string;
  name: string;
  code: string;
  iconName: string; // Lucide icon identifier
  colorTheme: {
    bg: string;
    text: string;
    border: string;
    badge: string;
    gradient: string;
  };
  description: string;
  chapters: Chapter[];
}

export interface QuizSubmission {
  id: string;
  chapterId: string;
  chapterTitle: string;
  subjectName: string;
  classGrade: number;
  score: number;
  totalQuestions: number;
  percentage: number;
  completedAt: string;
  timeTakenSeconds: number;
  answers: Record<number, number>; // questionId -> selectedOptionIndex
}

export interface StudentUser {
  id: string;
  name: string;
  email: string;
  password?: string;
  classGrade: number; // 1 to 10
  avatar: string;
  rollNumber: string;
  schoolName: string;
  joinedDate: string;
  completedChapterIds: string[];
  bookmarkedChapterIds: string[];
  quizHistory: QuizSubmission[];
  studyStreakDays: number;
  studyGoalHoursPerWeek: number;
  lastActiveDate?: string; // YYYY-MM-DD
  activeDates?: string[]; // Array of YYYY-MM-DD strings for activity streak tracking
  lastActivityTimestamp?: number;
}

export interface SubjectProgress {
  subjectId: string;
  subjectName: string;
  totalChapters: number;
  completedChapters: number;
  percentage: number;
}

export interface StudentAcademicStats {
  totalGradeChapters: number;
  completedChaptersCount: number;
  syllabusCompletionPercentage: number;
  totalTestsTaken: number;
  averageTestScore: number;
  highestTestScore: number;
  currentStreak: number;
  isActiveToday: boolean;
  subjectBreakdown: SubjectProgress[];
}

export interface CalendarEvent {
  id: string;
  title: string;
  date: string; // YYYY-MM-DD
  time: string;
  type: 'exam' | 'assignment' | 'live-session' | 'revision';
  subject: string;
  classGrade: number;
  description: string;
}

export interface DoubtItem {
  id: string;
  studentName: string;
  classGrade: number;
  subject: string;
  question: string;
  timestamp: string;
  status: 'answered' | 'under-review';
  answer?: string;
  mentorName?: string;
}
