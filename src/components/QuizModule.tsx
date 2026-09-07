import React, { useState, useEffect } from 'react';
import { 
  Award, 
  Clock, 
  RotateCcw, 
  CheckCircle2, 
  XCircle, 
  ChevronRight, 
  ChevronLeft, 
  Lightbulb, 
  ArrowRight,
  BookOpen
} from 'lucide-react';
import { Chapter, Subject, QuizSubmission, StudentUser, QuizQuestion } from '../types';

interface QuizModuleProps {
  subjects: Subject[];
  currentGrade: number;
  currentUser: StudentUser | null;
  onSaveQuizResult: (submission: QuizSubmission) => void;
  initialChapterToTest?: Chapter | null;
  initialSubject?: Subject | null;
  onNavigateToChapter: (chapter: Chapter, subject: Subject) => void;
}

export const QuizModule: React.FC<QuizModuleProps> = ({
  subjects,
  currentGrade,
  currentUser,
  onSaveQuizResult,
  initialChapterToTest,
  initialSubject,
  onNavigateToChapter
}) => {
  // Quiz State
  const [selectedSubjectId, setSelectedSubjectId] = useState<string>(
    initialSubject ? initialSubject.id : subjects[0]?.id || ''
  );
  
  // Selected chapter for quiz
  const [activeChapter, setActiveChapter] = useState<Chapter | null>(
    initialChapterToTest || null
  );

  // Active Quiz running state
  const [isQuizActive, setIsQuizActive] = useState<boolean>(!!initialChapterToTest);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [timeRemainingSeconds, setTimeRemainingSeconds] = useState<number>(180); // 3 mins default
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [showHint, setShowHint] = useState<boolean>(false);
  const [recentSubmission, setRecentSubmission] = useState<QuizSubmission | null>(null);

  // If initialChapter changes from props
  useEffect(() => {
    if (initialChapterToTest) {
      setActiveChapter(initialChapterToTest);
      if (initialSubject) {
        setSelectedSubjectId(initialSubject.id);
      }
      setIsQuizActive(true);
      setCurrentQuestionIndex(0);
      setSelectedAnswers({});
      setIsSubmitted(false);
      setTimeRemainingSeconds(initialChapterToTest.quizQuestions.length * 60);
    }
  }, [initialChapterToTest, initialSubject]);

  // Timer effect
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isQuizActive && !isSubmitted && timeRemainingSeconds > 0) {
      timer = setInterval(() => {
        setTimeRemainingSeconds(prev => {
          if (prev <= 1) {
            clearInterval(timer);
            handleSubmitQuiz();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isQuizActive, isSubmitted, timeRemainingSeconds]);

  const currentSubject = subjects.find(s => s.id === selectedSubjectId) || subjects[0];
  const availableChapters = currentSubject?.chapters || [];

  const handleStartQuiz = (chapter: Chapter) => {
    setActiveChapter(chapter);
    setIsQuizActive(true);
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setIsSubmitted(false);
    setShowHint(false);
    setTimeRemainingSeconds(chapter.quizQuestions.length * 60);
    setRecentSubmission(null);
  };

  const handleOptionSelect = (questionId: number, optionIdx: number) => {
    if (isSubmitted) return;
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: optionIdx
    }));
  };

  const handleSubmitQuiz = () => {
    if (!activeChapter) return;

    const totalQuestions = activeChapter.quizQuestions.length;
    let score = 0;

    activeChapter.quizQuestions.forEach(q => {
      if (selectedAnswers[q.id] === q.correctOptionIndex) {
        score++;
      }
    });

    const percentage = Math.round((score / totalQuestions) * 100);
    const submission: QuizSubmission = {
      id: `quiz-sub-${Date.now()}`,
      chapterId: activeChapter.id,
      chapterTitle: activeChapter.title,
      subjectName: currentSubject.name,
      classGrade: currentGrade,
      score,
      totalQuestions,
      percentage,
      completedAt: 'Just now',
      timeTakenSeconds: (activeChapter.quizQuestions.length * 60) - timeRemainingSeconds,
      answers: selectedAnswers
    };

    setIsSubmitted(true);
    setRecentSubmission(submission);
    onSaveQuizResult(submission);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  // 1. ACTIVE QUIZ RUNNER VIEW
  if (isQuizActive && activeChapter && !isSubmitted) {
    const questions: QuizQuestion[] = activeChapter.quizQuestions;
    const currentQ: QuizQuestion = questions[currentQuestionIndex];
    const isAnswered = selectedAnswers[currentQ?.id] !== undefined;
    const answeredCount = Object.keys(selectedAnswers).length;
    const isLastQuestion = currentQuestionIndex === questions.length - 1;

    return (
      <div className="max-w-3xl mx-auto space-y-6 animate-in fade-in duration-200">
        
        {/* Quiz Progress & Timer Top Bar */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-xs flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-indigo-600">
              <span>Class {currentGrade}</span>
              <span>•</span>
              <span>{currentSubject.name}</span>
            </div>
            <h2 className="font-bold text-slate-900 text-base sm:text-lg">
              {activeChapter.title} — Quiz
            </h2>
          </div>

          <div className="flex items-center gap-3">
            {/* Countdown Clock */}
            <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-mono text-xs font-bold ${
              timeRemainingSeconds < 30 ? 'bg-rose-50 text-rose-600 border border-rose-200 animate-pulse' : 'bg-slate-100 text-slate-700'
            }`}>
              <Clock className="w-4 h-4" />
              <span>{formatTime(timeRemainingSeconds)}</span>
            </div>

            <button
              onClick={() => {
                if (window.confirm('Are you sure you want to exit? Your progress will not be saved.')) {
                  setIsQuizActive(false);
                }
              }}
              className="text-xs font-semibold text-slate-400 hover:text-slate-600 px-2 py-1"
            >
              Exit
            </button>
          </div>
        </div>

        {/* Progress Tracker Bar */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs space-y-2">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-600">
            <span>Question {currentQuestionIndex + 1} of {questions.length}</span>
            <span>{answeredCount} of {questions.length} Answered</span>
          </div>
          <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-indigo-600 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
            />
          </div>

          {/* Question Dots */}
          <div className="flex items-center gap-1.5 pt-1 overflow-x-auto">
            {questions.map((q, idx) => {
              const answered = selectedAnswers[q.id] !== undefined;
              const isCurrent = currentQuestionIndex === idx;
              return (
                <button
                  key={q.id}
                  onClick={() => setCurrentQuestionIndex(idx)}
                  className={`w-7 h-7 rounded-lg text-xs font-bold transition-all shrink-0 ${
                    isCurrent
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : answered
                        ? 'bg-indigo-100 text-indigo-700'
                        : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                  }`}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>
        </div>

        {/* Question Card */}
        {currentQ && (
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs space-y-6">
            <div className="flex items-start justify-between gap-3">
              <span className="px-2.5 py-1 rounded-md bg-indigo-50 text-indigo-700 text-xs font-bold">
                Question {currentQuestionIndex + 1}
              </span>
              
              {currentQ.hint && (
                <button
                  onClick={() => setShowHint(!showHint)}
                  className="text-xs font-semibold text-amber-600 hover:text-amber-700 flex items-center gap-1"
                >
                  <Lightbulb className="w-3.5 h-3.5" />
                  <span>{showHint ? 'Hide Hint' : 'Hint'}</span>
                </button>
              )}
            </div>

            {showHint && currentQ.hint && (
              <div className="p-3.5 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-800 animate-in fade-in">
                💡 <strong>Study Hint:</strong> {currentQ.hint}
              </div>
            )}

            <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-relaxed">
              {currentQ.question}
            </h3>

            {/* Multiple Choice Options (A, B, C, D) */}
            <div className="space-y-3">
              {currentQ.options.map((option, optIdx) => {
                const isSelected = selectedAnswers[currentQ.id] === optIdx;
                const letter = String.fromCharCode(65 + optIdx); // A, B, C, D

                return (
                  <button
                    key={optIdx}
                    type="button"
                    onClick={() => handleOptionSelect(currentQ.id, optIdx)}
                    className={`w-full p-4 rounded-2xl border text-left transition-all flex items-center gap-3.5 ${
                      isSelected
                        ? 'bg-indigo-50 border-indigo-600 ring-2 ring-indigo-600/20 text-indigo-950 font-semibold shadow-xs'
                        : 'bg-slate-50/70 border-slate-200 hover:bg-slate-100/70 text-slate-800'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 transition-colors ${
                      isSelected ? 'bg-indigo-600 text-white shadow-2xs' : 'bg-white border border-slate-200 text-slate-600'
                    }`}>
                      {letter}
                    </div>
                    <span className="text-xs sm:text-sm">{option}</span>
                  </button>
                );
              })}
            </div>

            {/* Navigation & Submit Controls */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <button
                onClick={() => {
                  setShowHint(false);
                  setCurrentQuestionIndex(prev => Math.max(prev - 1, 0));
                }}
                disabled={currentQuestionIndex === 0}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-1.5"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>

              {isLastQuestion ? (
                <button
                  id="submit-quiz-assessment-btn"
                  onClick={handleSubmitQuiz}
                  disabled={!isAnswered && answeredCount === 0}
                  className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm font-bold rounded-xl shadow-md shadow-indigo-200 transition-colors flex items-center gap-2"
                >
                  <Award className="w-4 h-4 text-amber-300" />
                  <span>Submit Assessment</span>
                </button>
              ) : (
                <button
                  onClick={() => {
                    setShowHint(false);
                    setCurrentQuestionIndex(prev => Math.min(prev + 1, questions.length - 1));
                  }}
                  className="px-5 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-xl transition-colors flex items-center gap-1.5"
                >
                  <span>Next Question</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }

  // 2. RESULTS SUMMARY PAGE
  if (isSubmitted && recentSubmission && activeChapter) {
    const isPassing = recentSubmission.percentage >= 60;
    const questions = activeChapter.quizQuestions;

    return (
      <div className="max-w-3xl mx-auto space-y-6 animate-in fade-in duration-200">
        {/* Results Banner Card */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xl text-center relative overflow-hidden">
          <div className="relative z-10 max-w-md mx-auto space-y-3">
            <div className={`w-20 h-20 mx-auto rounded-3xl flex items-center justify-center text-3xl shadow-lg ${
              isPassing ? 'bg-gradient-to-tr from-emerald-500 to-teal-400 text-white' : 'bg-gradient-to-tr from-amber-500 to-orange-400 text-white'
            }`}>
              {isPassing ? '🏆' : '📚'}
            </div>

            <h2 className="text-2xl font-bold text-slate-900">
              {isPassing ? 'Outstanding Performance!' : 'Good Effort! Keep Practicing'}
            </h2>
            <p className="text-xs text-slate-500">
              {recentSubmission.chapterTitle} • Class {currentGrade} {currentSubject.name}
            </p>

            {/* Score Metrics */}
            <div className="grid grid-cols-3 gap-3 py-4">
              <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100">
                <span className="text-xs text-slate-500 block">Total Score</span>
                <span className="text-xl font-extrabold text-slate-900">
                  {recentSubmission.score} / {recentSubmission.totalQuestions}
                </span>
              </div>
              <div className="bg-indigo-50 p-3 rounded-2xl border border-indigo-100">
                <span className="text-xs text-indigo-700 block">Mastery</span>
                <span className="text-xl font-extrabold text-indigo-700">
                  {recentSubmission.percentage}%
                </span>
              </div>
              <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100">
                <span className="text-xs text-slate-500 block">Time Taken</span>
                <span className="text-xl font-extrabold text-slate-900">
                  {Math.max(recentSubmission.timeTakenSeconds, 15)}s
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                onClick={() => handleStartQuiz(activeChapter)}
                className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl shadow-xs flex items-center gap-2 transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Retake Quiz</span>
              </button>
              <button
                onClick={() => onNavigateToChapter(activeChapter, currentSubject)}
                className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-xl flex items-center gap-2 transition-colors"
              >
                <BookOpen className="w-4 h-4" />
                <span>Review Chapter Notes</span>
              </button>
              <button
                onClick={() => {
                  setIsQuizActive(false);
                  setIsSubmitted(false);
                }}
                className="px-4 py-2.5 text-xs font-semibold text-slate-600 hover:text-slate-900"
              >
                Back to All Quizzes
              </button>
            </div>
          </div>
        </div>

        {/* Detailed Question Review Breakdown with Correct Answer Highlights */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div>
              <h3 className="font-bold text-slate-900 text-base">Question-by-Question Evaluation</h3>
              <p className="text-xs text-slate-500">
                Check answer rationales and correct explanations for complete concept clarity.
              </p>
            </div>
            <span className="text-xs font-semibold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-full">
              {recentSubmission.score} Correct
            </span>
          </div>

          <div className="space-y-6 divide-y divide-slate-100">
            {questions.map((q, qIndex) => {
              const studentAnswer = recentSubmission.answers[q.id];
              const isCorrect = studentAnswer === q.correctOptionIndex;

              return (
                <div key={q.id} className={qIndex === 0 ? '' : 'pt-6'}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold ${
                      isCorrect ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                    }`}>
                      {qIndex + 1}
                    </span>
                    <span className={`text-xs font-bold flex items-center gap-1 ${
                      isCorrect ? 'text-emerald-700' : 'text-rose-700'
                    }`}>
                      {isCorrect ? (
                        <>
                          <CheckCircle2 className="w-4 h-4" /> Correct
                        </>
                      ) : (
                        <>
                          <XCircle className="w-4 h-4" /> Incorrect
                        </>
                      )}
                    </span>
                  </div>

                  <p className="font-semibold text-slate-900 text-sm mb-3">
                    {q.question}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">
                    {q.options.map((opt, oIdx) => {
                      const isStudentPick = studentAnswer === oIdx;
                      const isCorrectChoice = q.correctOptionIndex === oIdx;

                      let badgeClass = 'bg-slate-50 border-slate-200 text-slate-600';
                      if (isCorrectChoice) {
                        badgeClass = 'bg-emerald-50 border-emerald-400 text-emerald-900 font-semibold ring-1 ring-emerald-400';
                      } else if (isStudentPick && !isCorrectChoice) {
                        badgeClass = 'bg-rose-50 border-rose-300 text-rose-900 font-semibold line-through';
                      }

                      return (
                        <div key={oIdx} className={`p-2.5 rounded-xl border text-xs flex items-center justify-between ${badgeClass}`}>
                          <span>{String.fromCharCode(65 + oIdx)}. {opt}</span>
                          {isCorrectChoice && (
                            <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider bg-emerald-100 px-1.5 py-0.5 rounded">
                              Correct
                            </span>
                          )}
                          {isStudentPick && !isCorrectChoice && (
                            <span className="text-[10px] font-bold text-rose-700 uppercase tracking-wider bg-rose-100 px-1.5 py-0.5 rounded">
                              Your Choice
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700">
                    <strong className="font-semibold text-slate-900 block mb-0.5">Solution & Explanation:</strong>
                    {q.explanation}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // 3. QUIZZES HUB & TEST SELECTOR VIEW
  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-indigo-900 via-indigo-800 to-blue-900 p-6 sm:p-8 rounded-3xl text-white shadow-lg relative overflow-hidden">
        <div className="relative z-10 max-w-xl space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/30 backdrop-blur-md border border-indigo-400/30 text-xs font-semibold text-indigo-100">
            <Award className="w-3.5 h-3.5 text-amber-300" />
            <span>Class {currentGrade} Assessment Center</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight">
            Quizzes & Chapter Tests
          </h1>
          <p className="text-xs sm:text-sm text-indigo-200 leading-relaxed">
            Evaluate your conceptual mastery with interactive timed chapter tests, instant score evaluation, and full step-by-step solutions.
          </p>
        </div>
      </div>

      {/* Subject Selector Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
        {subjects.map((subj) => {
          const isSelected = selectedSubjectId === subj.id;
          return (
            <button
              key={subj.id}
              onClick={() => setSelectedSubjectId(subj.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold shrink-0 transition-all ${
                isSelected
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
              }`}
            >
              {subj.name} ({subj.chapters.length} Tests)
            </button>
          );
        })}
      </div>

      {/* Chapter Tests Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {availableChapters.map((chapter) => {
          // Check if student has taken this quiz before
          const pastSub = currentUser?.quizHistory.find(q => q.chapterId === chapter.id);

          return (
            <div 
              key={chapter.id}
              className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs hover:border-indigo-300 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-md">
                    Chapter {chapter.chapterNumber} Assessment
                  </span>
                  
                  {pastSub ? (
                    <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      Past Score: {pastSub.percentage}%
                    </span>
                  ) : (
                    <span className="text-[11px] text-slate-400 font-medium">
                      Not attempted yet
                    </span>
                  )}
                </div>

                <h3 className="font-bold text-slate-900 text-base group-hover:text-indigo-600 transition-colors">
                  {chapter.title}
                </h3>
                <p className="text-xs text-slate-500 line-clamp-2">
                  {chapter.summary}
                </p>

                <div className="flex items-center gap-4 text-xs text-slate-500 pt-1">
                  <span className="flex items-center gap-1">
                    <Award className="w-3.5 h-3.5 text-amber-500" />
                    {chapter.quizQuestions.length} Questions
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    ~{chapter.quizQuestions.length} Minutes
                  </span>
                </div>
              </div>

              <div className="pt-4 mt-3 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => onNavigateToChapter(chapter, currentSubject)}
                  className="text-xs font-semibold text-slate-500 hover:text-indigo-600 flex items-center gap-1"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Review Notes</span>
                </button>

                <button
                  onClick={() => handleStartQuiz(chapter)}
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl shadow-xs flex items-center gap-1.5 transition-colors"
                >
                  <span>{pastSub ? 'Retake Quiz' : 'Start Test'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Past Test History Scorecard */}
      {currentUser && currentUser.quizHistory.length > 0 && (
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-slate-900 text-base">Your Assessment Scorecard</h3>
            <span className="text-xs text-slate-500 font-medium">
              {currentUser.quizHistory.length} Completed
            </span>
          </div>

          <div className="divide-y divide-slate-100 overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="text-slate-400 font-semibold border-b border-slate-100">
                  <th className="pb-2">Test Title</th>
                  <th className="pb-2">Subject</th>
                  <th className="pb-2">Score</th>
                  <th className="pb-2">Mastery</th>
                  <th className="pb-2">Completed</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {currentUser.quizHistory.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                    <td className="py-2.5 font-semibold text-slate-800">{item.chapterTitle}</td>
                    <td className="py-2.5 text-slate-500">{item.subjectName}</td>
                    <td className="py-2.5 font-bold text-slate-900">{item.score}/{item.totalQuestions}</td>
                    <td className="py-2.5">
                      <span className={`px-2 py-0.5 rounded-md font-bold ${
                        item.percentage >= 70 ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'
                      }`}>
                        {item.percentage}%
                      </span>
                    </td>
                    <td className="py-2.5 text-slate-400">{item.completedAt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

    </div>
  );
};
