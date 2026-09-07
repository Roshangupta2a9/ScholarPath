import React, { useState } from 'react';
import { 
  Calculator, 
  Atom, 
  Globe, 
  BookOpen, 
  Leaf, 
  Sparkles, 
  CheckCircle2, 
  Award, 
  ChevronRight, 
  Lock,
  Layers
} from 'lucide-react';
import { Subject, Chapter, StudentUser } from '../types';

interface ClassroomViewProps {
  currentUser: StudentUser | null;
  selectedGrade: number;
  onSelectGrade: (grade: number) => void;
  subjects: Subject[];
  onOpenChapter: (chapter: Chapter, subject: Subject) => void;
  onOpenQuiz: (chapter: Chapter, subject: Subject) => void;
}

export const ClassroomView: React.FC<ClassroomViewProps> = ({
  currentUser,
  selectedGrade,
  onSelectGrade,
  subjects,
  onOpenChapter,
  onOpenQuiz
}) => {
  const [selectedSubjectId, setSelectedSubjectId] = useState<string>(subjects[0]?.id || '');

  // Keep selectedSubjectId valid when subjects change
  const currentSubject = subjects.find(s => s.id === selectedSubjectId) || subjects[0];

  const getSubjectIcon = (iconName: string) => {
    switch (iconName) {
      case 'Calculator': return <Calculator className="w-5 h-5" />;
      case 'Atom': return <Atom className="w-5 h-5" />;
      case 'Globe': return <Globe className="w-5 h-5" />;
      case 'BookOpen': return <BookOpen className="w-5 h-5" />;
      case 'Leaf': return <Leaf className="w-5 h-5" />;
      default: return <Layers className="w-5 h-5" />;
    }
  };

  const isEnrolledGrade = currentUser ? currentUser.classGrade === selectedGrade : true;

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      
      {/* Grade Selector & Filter Notice */}
      <div className="bg-white p-5 sm:p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase font-bold tracking-wider text-indigo-600">
                Academic Curriculum Hierarchy
              </span>
              {isEnrolledGrade && currentUser && (
                <span className="px-2 py-0.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-[11px] font-bold flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-indigo-600" />
                  Locked to Enrolled Grade
                </span>
              )}
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
              Classroom: Class {selectedGrade} Curriculum
            </h1>
            <p className="text-xs text-slate-500">
              Browse structured subjects, chapters, reading notes, and interactive practice exercises.
            </p>
          </div>

          {/* Reset to enrolled grade shortcut if viewing another grade */}
          {currentUser && !isEnrolledGrade && (
            <button
              onClick={() => onSelectGrade(currentUser.classGrade)}
              className="px-3.5 py-1.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 rounded-xl text-xs font-semibold self-start sm:self-auto transition-colors flex items-center gap-1.5"
            >
              <Lock className="w-3.5 h-3.5" />
              <span>Back to My Enrolled Class {currentUser.classGrade}</span>
            </button>
          )}
        </div>

        {/* 1 to 10 Grade Selector Tabs */}
        <div>
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
            Select Class / Grade Level:
          </span>
          <div className="grid grid-cols-5 sm:grid-cols-10 gap-1.5 sm:gap-2">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((grade) => {
              const isSelected = selectedGrade === grade;
              const isEnrolled = currentUser?.classGrade === grade;

              return (
                <button
                  key={grade}
                  onClick={() => onSelectGrade(grade)}
                  className={`py-2 px-1 rounded-xl text-xs font-bold transition-all flex flex-col items-center justify-center relative ${
                    isSelected
                      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200 ring-2 ring-indigo-600'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200/80'
                  }`}
                >
                  <span>Class {grade}</span>
                  {isEnrolled && (
                    <span className={`text-[9px] font-bold mt-0.5 ${isSelected ? 'text-indigo-200' : 'text-indigo-600'}`}>
                      ★ Enrolled
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Step 2: Subjects Selection Row */}
      <div>
        <div className="flex items-center justify-between mb-3 px-1">
          <h2 className="text-sm font-bold text-slate-800 uppercase tracking-wider">
            1. Select Subject (Class {selectedGrade})
          </h2>
          <span className="text-xs text-slate-500">{subjects.length} Subjects in Syllabus</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {subjects.map((subj) => {
            const isSelected = currentSubject?.id === subj.id;
            const completedCount = subj.chapters.filter(ch => 
              currentUser?.completedChapterIds.includes(ch.id)
            ).length;

            return (
              <button
                key={subj.id}
                onClick={() => setSelectedSubjectId(subj.id)}
                className={`p-4 rounded-2xl border text-left transition-all relative overflow-hidden group ${
                  isSelected
                    ? 'bg-white border-indigo-500 shadow-md ring-2 ring-indigo-500/20'
                    : 'bg-white border-slate-200 hover:border-indigo-200 hover:shadow-xs'
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    isSelected ? 'bg-indigo-600 text-white shadow-xs' : 'bg-slate-100 text-slate-700 group-hover:bg-indigo-50 group-hover:text-indigo-600'
                  }`}>
                    {getSubjectIcon(subj.iconName)}
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    {subj.code}
                  </span>
                </div>

                <h3 className="font-bold text-slate-900 text-sm mb-1">{subj.name}</h3>
                <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed mb-3">
                  {subj.description}
                </p>

                <div className="flex items-center justify-between text-[11px] font-semibold pt-2 border-t border-slate-100">
                  <span className="text-slate-500">{subj.chapters.length} Chapters</span>
                  {completedCount > 0 ? (
                    <span className="text-emerald-600 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      {completedCount}/{subj.chapters.length} Done
                    </span>
                  ) : (
                    <span className="text-indigo-600">Start Chapter</span>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Step 3: Structured Chapters List for Selected Subject */}
      {currentSubject && (
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-600" />
                <h3 className="text-base font-bold text-slate-900">
                  {currentSubject.name} — Structured Chapters
                </h3>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                Class {selectedGrade} Syllabus • Click any chapter to access reading notes, practice exercises & quizzes
              </p>
            </div>
            <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-3 py-1 rounded-full self-start sm:self-auto">
              {currentSubject.chapters.length} Chapter Modules
            </span>
          </div>

          <div className="space-y-3">
            {currentSubject.chapters.map((chapter) => {
              const isCompleted = currentUser?.completedChapterIds.includes(chapter.id);
              const pastQuiz = currentUser?.quizHistory.find(q => q.chapterId === chapter.id);

              return (
                <div
                  key={chapter.id}
                  className="p-4 sm:p-5 rounded-2xl border border-slate-200 hover:border-indigo-300 hover:shadow-xs transition-all bg-slate-50/50 hover:bg-white flex flex-col md:flex-row md:items-center justify-between gap-4 group"
                >
                  <div className="flex items-start gap-3.5">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 mt-0.5 ${
                      isCompleted ? 'bg-emerald-100 text-emerald-800' : 'bg-white border border-slate-200 text-slate-700 group-hover:border-indigo-400 group-hover:text-indigo-600'
                    }`}>
                      {isCompleted ? <CheckCircle2 className="w-5 h-5 text-emerald-600" /> : chapter.chapterNumber}
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-xs font-bold text-indigo-600">
                          Chapter {chapter.chapterNumber}
                        </span>
                        {isCompleted && (
                          <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md">
                            Completed
                          </span>
                        )}
                        {pastQuiz && (
                          <span className="text-[10px] font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded-md flex items-center gap-1">
                            <Award className="w-3 h-3" /> Quiz: {pastQuiz.percentage}%
                          </span>
                        )}
                      </div>

                      <h4 className="font-bold text-slate-900 text-base group-hover:text-indigo-600 transition-colors">
                        {chapter.title}
                      </h4>
                      <p className="text-xs text-slate-500 line-clamp-1">
                        {chapter.tagline}
                      </p>

                      <div className="flex items-center gap-3 text-[11px] text-slate-400 pt-1">
                        <span className="flex items-center gap-1">
                          <BookOpen className="w-3 h-3 text-indigo-500" />
                          {chapter.readingTimeMinutes} min Notes
                        </span>
                        <span>•</span>
                        <span>{chapter.practiceExercises.length} Practice Qs</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Award className="w-3 h-3 text-amber-500" />
                          {chapter.quizQuestions.length} Quiz Qs
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 self-end md:self-auto shrink-0">
                    <button
                      onClick={() => onOpenQuiz(chapter, currentSubject)}
                      className="px-3 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:text-indigo-700 hover:bg-indigo-50 border border-slate-200 transition-colors flex items-center gap-1.5"
                    >
                      <Award className="w-3.5 h-3.5 text-amber-500" />
                      <span>Take Quiz</span>
                    </button>

                    <button
                      onClick={() => onOpenChapter(chapter, currentSubject)}
                      className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-xs flex items-center gap-1.5 transition-colors"
                    >
                      <span>Study Chapter</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

    </div>
  );
};
