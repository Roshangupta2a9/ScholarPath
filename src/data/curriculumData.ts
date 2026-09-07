import { Subject } from '../types';
import { class1Curriculum } from './curriculum/class1';
import { class2Curriculum } from './curriculum/class2';
import { class3Curriculum } from './curriculum/class3';
import { class4Curriculum } from './curriculum/class4';
import { class5Curriculum } from './curriculum/class5';
import { class6Curriculum } from './curriculum/class6';
import { class7Curriculum } from './curriculum/class7';
import { class8Curriculum } from './curriculum/class8';
import { class9Curriculum } from './curriculum/class9';
import { class10Curriculum } from './curriculum/class10';
import { createCurriculumQuiz, createCurriculumPractice } from './curriculum/common';

export { createCurriculumQuiz, createCurriculumPractice };

// Backward-compatible alias for sample quiz generation
export const createSampleQuiz = (chapterTitle: string, subject: string, grade: number) => {
  return createCurriculumQuiz(chapterTitle, subject, grade);
};

const curriculumByGrade: Record<number, Subject[]> = {
  1: class1Curriculum,
  2: class2Curriculum,
  3: class3Curriculum,
  4: class4Curriculum,
  5: class5Curriculum,
  6: class6Curriculum,
  7: class7Curriculum,
  8: class8Curriculum,
  9: class9Curriculum,
  10: class10Curriculum
};

/**
 * Returns the full structured curriculum for a given grade level (1 to 10).
 * Clamped safely between grade 1 and grade 10.
 */
export const getCurriculumForGrade = (grade: number): Subject[] => {
  const clampedGrade = Math.min(Math.max(Math.round(grade), 1), 10);
  return curriculumByGrade[clampedGrade] || class8Curriculum;
};

/**
 * Helper to fetch all available grades
 */
export const getAvailableGrades = (): number[] => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
