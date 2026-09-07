import { QuizQuestion, PracticeExercise, Chapter } from '../../types';
import { enrichChapterContent } from './enricher';

export interface ChapterSpec {
  chapterNumber: number;
  title: string;
  tagline: string;
  summary: string;
  readingTimeMinutes?: number;
  keyConcepts: Array<{ title: string; detail: string }>;
  readingSections: Array<{ heading: string; body: string; tip?: string }>;
  summaryPoints?: string[];
  formulasAndRules?: Array<{ title: string; formula: string; explanation: string }>;
  sources?: string[];
}

export const buildChapter = (
  classGrade: number,
  subjectId: string,
  subjectName: string,
  spec: ChapterSpec
): Chapter => {
  const chId = `${subjectId}-ch${spec.chapterNumber}`;
  const enriched = enrichChapterContent(classGrade, subjectId, subjectName, spec);

  return {
    id: chId,
    classGrade,
    subjectId,
    chapterNumber: spec.chapterNumber,
    title: spec.title,
    tagline: spec.tagline,
    summary: enriched.summary,
    readingTimeMinutes: spec.readingTimeMinutes ?? (18 + (spec.chapterNumber % 7)),
    keyConcepts: enriched.keyConcepts,
    readingSections: enriched.readingSections,
    summaryPoints: enriched.summaryPoints,
    formulasAndRules: enriched.formulasAndRules,
    sources: enriched.sources,
    solvedExamples: enriched.solvedExamples,
    detailedFaqs: enriched.detailedFaqs,
    commonMisconceptions: enriched.commonMisconceptions,
    glossary: enriched.glossary,
    didYouKnow: enriched.didYouKnow,
    practiceExercises: createCurriculumPractice(spec.title),
    quizQuestions: createCurriculumQuiz(spec.title, subjectName, classGrade)
  };
};

export const createCurriculumQuiz = (chapterTitle: string, subject: string, grade: number): QuizQuestion[] => {
  return [
    {
      id: 1,
      question: `Which fundamental principle is demonstrated in "${chapterTitle}"?`,
      options: [
        'A core governing rule with direct physical and analytical applications',
        'An isolated concept with no relation to daily life',
        'An arbitrary rule with no logical foundation',
        'A principle discarded in higher academic studies'
      ],
      correctOptionIndex: 0,
      explanation: `The concepts in "${chapterTitle}" provide the structural foundation for Class ${grade} ${subject}, enabling real-world analytical reasoning and problem solving.`,
      hint: 'Focus on how core scientific and mathematical concepts connect to practical reality.'
    },
    {
      id: 2,
      question: `When approaching problems or questions based on "${chapterTitle}", what is the most effective method?`,
      options: [
        'Identify given variables and fundamental governing formulas before calculating',
        'Guess randomly based on options',
        'Skip diagrammatic visualization and read only the conclusion',
        'Assume all missing variables equal zero'
      ],
      correctOptionIndex: 0,
      explanation: 'Systematic analysis requires identifying parameters, checking units and definitions, and applying the governing theorem step by step.',
      hint: 'Check given facts, relationships, and formulas first.'
    },
    {
      id: 3,
      question: `How does understanding "${chapterTitle}" benefit a student outside the classroom?`,
      options: [
        'It allows recognition of scientific and mathematical patterns in everyday technology and nature',
        'It is strictly theoretical and has no external application',
        'It only helps in passing memorization tests',
        'It applies only to space exploration'
      ],
      correctOptionIndex: 0,
      explanation: 'School curricula are structured so that theoretical principles directly explain everyday observations, nature, and modern technology.',
      hint: 'Consider real-world applications in nature, engineering, or daily activities.'
    },
    {
      id: 4,
      question: `Which study practice ensures deep mastery of "${chapterTitle}"?`,
      options: [
        'Practicing interactive numerical and conceptual exercises with step-by-step review',
        'Skimming summary headings on the night before exams',
        'Memorizing answers without understanding definitions',
        'Avoiding practical problems and diagrams'
      ],
      correctOptionIndex: 0,
      explanation: 'Conceptual retention and problem-solving fluency are achieved through hands-on practice, visual diagrams, and analytical feedback.',
      hint: 'Active engagement and deliberate practice always yield durable understanding.'
    }
  ];
};

export const createCurriculumPractice = (topic: string): PracticeExercise[] => [
  {
    id: `pe-1-${topic.toLowerCase().replace(/[^a-z0-9]/g, '-')}`,
    type: 'mcq',
    question: `What is the primary significance of studying ${topic}?`,
    options: [
      'It builds foundational concepts essential for advanced learning and real-world understanding',
      'It is a redundant topic meant only for rote testing',
      'It contradicts previously learned rules',
      'It has no logical relevance'
    ],
    correctAnswer: 0,
    explanation: 'Foundational concepts provide the groundwork for critical thinking, higher-level problem solving, and analytical clarity.',
    hints: 'Think about why this topic is introduced at this grade level.'
  },
  {
    id: `pe-2-${topic.toLowerCase().replace(/[^a-z0-9]/g, '-')}`,
    type: 'mcq',
    question: `When verifying solutions or hypotheses related to ${topic}, which method is most reliable?`,
    options: [
      'Checking dimensional consistency, boundary conditions, and logical coherence',
      'Assuming the first computed number is always correct',
      'Comparing with unrelated problems',
      'Ignoring units and signs'
    ],
    correctAnswer: 0,
    explanation: 'Scientific verification always involves cross-checking governing laws, units, and consistency across conditions.',
    hints: 'Always test your answer against original definitions and conditions.'
  }
];
