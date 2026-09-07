import { StudentUser, StudentAcademicStats, SubjectProgress } from '../types';
import { getCurriculumForGrade } from '../data/curriculumData';

/**
 * Returns current date in standardized YYYY-MM-DD string format
 */
export const getTodayDateString = (): string => {
  const d = new Date();
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

/**
 * Returns yesterday's date in YYYY-MM-DD format
 */
export const getYesterdayDateString = (): string => {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

/**
 * Generates an array of the last 7 dates [YYYY-MM-DD] for weekly heatmap
 */
export const getLast7Days = (): { dateStr: string; dayName: string; dayNumber: number }[] => {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const list = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const dateStr = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
    list.push({
      dateStr,
      dayName: days[d.getDay()],
      dayNumber: d.getDate()
    });
  }
  return list;
};

/**
 * Updates student user streak and active calendar date whenever they interact with the platform.
 * Automatically handles:
 * - Same-day logins (keeps streak unchanged)
 * - Next-day logins (increments streak by 1)
 * - Long gaps / missed days (resets streak to 1)
 * - Brand new registrations
 */
export const recordUserActivity = (user: StudentUser): StudentUser => {
  const today = getTodayDateString();
  const yesterday = getYesterdayDateString();

  const currentLastActive = user.lastActiveDate;
  let newStreak = user.studyStreakDays || 1;

  if (!currentLastActive) {
    // First time tracking or freshly registered
    newStreak = Math.max(user.studyStreakDays || 1, 1);
  } else if (currentLastActive === today) {
    // Already active today, maintain current streak
    newStreak = user.studyStreakDays || 1;
  } else if (currentLastActive === yesterday) {
    // Consecutive daily visit, increment streak!
    newStreak = (user.studyStreakDays || 1) + 1;
  } else {
    // More than 1 day missed (or long absence)
    newStreak = 1;
  }

  const existingActiveDates = Array.isArray(user.activeDates) ? user.activeDates : [];
  const updatedActiveDates = existingActiveDates.includes(today)
    ? existingActiveDates
    : [...existingActiveDates.slice(-30), today]; // Keep last 30 active days

  return {
    ...user,
    lastActiveDate: today,
    activeDates: updatedActiveDates,
    studyStreakDays: newStreak,
    lastActivityTimestamp: Date.now()
  };
};

/**
 * Calculates live academic stats for the student based on their registered or active grade syllabus.
 */
export const calculateStudentAcademicStats = (
  user: StudentUser | null,
  gradeOverride?: number
): StudentAcademicStats => {
  const targetGrade = gradeOverride || user?.classGrade || 8;
  const subjects = getCurriculumForGrade(targetGrade);

  let totalGradeChapters = 0;
  let completedChaptersCount = 0;
  const subjectBreakdown: SubjectProgress[] = [];

  const completedIds = user?.completedChapterIds || [];

  for (const subject of subjects) {
    const totalChapters = subject.chapters.length;
    totalGradeChapters += totalChapters;

    const completedInSubject = subject.chapters.filter((ch) =>
      completedIds.includes(ch.id)
    ).length;

    completedChaptersCount += completedInSubject;

    const percentage = totalChapters > 0
      ? Math.round((completedInSubject / totalChapters) * 100)
      : 0;

    subjectBreakdown.push({
      subjectId: subject.id,
      subjectName: subject.name,
      totalChapters,
      completedChapters: completedInSubject,
      percentage
    });
  }

  const syllabusCompletionPercentage = totalGradeChapters > 0
    ? Math.min(100, Math.round((completedChaptersCount / totalGradeChapters) * 100))
    : 0;

  const quizHistory = user?.quizHistory || [];
  const totalTestsTaken = quizHistory.length;

  let averageTestScore = 0;
  let highestTestScore = 0;

  if (totalTestsTaken > 0) {
    const totalScorePercent = quizHistory.reduce((sum, q) => sum + (q.percentage || 0), 0);
    averageTestScore = Math.round(totalScorePercent / totalTestsTaken);
    highestTestScore = Math.max(...quizHistory.map((q) => q.percentage || 0));
  }

  const today = getTodayDateString();
  const isActiveToday = user?.lastActiveDate === today;

  return {
    totalGradeChapters,
    completedChaptersCount,
    syllabusCompletionPercentage,
    totalTestsTaken,
    averageTestScore,
    highestTestScore,
    currentStreak: user?.studyStreakDays || 0,
    isActiveToday,
    subjectBreakdown
  };
};
