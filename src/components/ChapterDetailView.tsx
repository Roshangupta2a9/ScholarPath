import React, { useState, useMemo } from 'react';
import { 
  ArrowLeft, 
  CheckCircle2, 
  BookOpen, 
  HelpCircle, 
  Award, 
  Bookmark, 
  BookmarkCheck, 
  FileText, 
  Lightbulb, 
  Check, 
  AlertCircle,
  Copy, 
  CheckSquare, 
  Square, 
  GraduationCap, 
  Sparkles, 
  BookCheck,
  Calculator,
  AlertTriangle,
  Search,
  ChevronDown,
  ChevronUp,
  Compass,
  Layers
} from 'lucide-react';
import { Chapter, Subject } from '../types';
import { getDeepChapterContent } from '../data/curriculum/deepChapterEngine';
import { SequentialReadingView } from './chapter/SequentialReadingView';
import { DeepSolvedProblemsView } from './chapter/DeepSolvedProblemsView';
import { DeepPracticeBankView } from './chapter/DeepPracticeBankView';
import { DeepFormulasView } from './chapter/DeepFormulasView';

interface ChapterDetailViewProps {
  chapter: Chapter;
  subject: Subject;
  isCompleted: boolean;
  isBookmarked: boolean;
  onBack: () => void;
  onToggleComplete: (chapterId: string) => void;
  onToggleBookmark: (chapterId: string) => void;
  onStartQuiz: (chapter: Chapter, subject: Subject) => void;
}

export const ChapterDetailView: React.FC<ChapterDetailViewProps> = ({
  chapter,
  subject,
  isCompleted,
  isBookmarked,
  onBack,
  onToggleComplete,
  onToggleBookmark,
  onStartQuiz
}) => {
  const [activeTab, setActiveTab] = useState<'reading' | 'solved' | 'practice' | 'formulas' | 'faqs' | 'summary'>('reading');
  
  // High-yield deep content cache (450 Sequential Parts, 250 Solved Problems, 750 Practice Questions, 40+ Formulas)
  const deepContent = useMemo(() => getDeepChapterContent(chapter, subject), [chapter, subject]);

  // Notes and Summary interactive states
  const [copiedNotesNotice, setCopiedNotesNotice] = useState(false);
  const [copiedFormulaIdx, setCopiedFormulaIdx] = useState<number | null>(null);
  const [revisedPoints, setRevisedPoints] = useState<Record<number, boolean>>({});

  // Filter / Search states for FAQs and Glossary
  const [faqSearch, setFaqSearch] = useState('');
  const [glossarySearch, setGlossarySearch] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  const handleCopyNotes = () => {
    let fullText = `📚 ${chapter.title} (Class ${chapter.classGrade} - ${subject.name})\n`;
    fullText += `${chapter.tagline}\n\n`;
    fullText += `--- EXECUTIVE SYNOPSIS ---\n${chapter.summary}\n\n`;
    fullText += `--- IN-DEPTH READING LESSONS & NOTES ---\n`;
    chapter.readingSections.forEach((sec, idx) => {
      fullText += `\n[Section ${idx + 1}] ${sec.heading}\n${sec.body}\n`;
      if (sec.tip) {
        fullText += `💡 Student & Examiner Tip: ${sec.tip}\n`;
      }
    });
    fullText += `\n--- KEY DEFINITIONS & CONCEPTS ---\n`;
    chapter.keyConcepts.forEach((c, idx) => {
      fullText += `${idx + 1}. ${c.title}: ${c.detail}\n`;
    });
    if (chapter.formulasAndRules && chapter.formulasAndRules.length > 0) {
      fullText += `\n--- GOVERNING FORMULAS & LAWS ---\n`;
      chapter.formulasAndRules.forEach((f, idx) => {
        fullText += `${idx + 1}. ${f.title}\n   Formula: ${f.formula}\n   Explanation: ${f.explanation}\n`;
      });
    }
    if (chapter.solvedExamples && chapter.solvedExamples.length > 0) {
      fullText += `\n--- STEP-BY-STEP SOLVED PROBLEMS ---\n`;
      chapter.solvedExamples.forEach((ex, idx) => {
        fullText += `\n[Problem ${idx + 1}] ${ex.title}\nProblem: ${ex.problem}\nSolution:\n`;
        ex.solutionSteps.forEach(st => { fullText += `  • ${st}\n`; });
        fullText += `  💡 Key Takeaway: ${ex.keyTakeaway}\n`;
      });
    }
    if (chapter.detailedFaqs && chapter.detailedFaqs.length > 0) {
      fullText += `\n--- FREQUENTLY ASKED QUESTIONS & ACADEMIC DOUBTS ---\n`;
      chapter.detailedFaqs.forEach((faq, idx) => {
        fullText += `\nQ${idx + 1}: ${faq.question}\nA: ${faq.answer}\n`;
      });
    }
    if (chapter.commonMisconceptions && chapter.commonMisconceptions.length > 0) {
      fullText += `\n--- COMMON MISCONCEPTIONS & EXAM TRAPS ---\n`;
      chapter.commonMisconceptions.forEach((m, idx) => {
        fullText += `\n[Trap ${idx + 1}] Misconception: ${m.misconception}\nCorrection: ${m.correction}\nExam Note: ${m.explanation}\n`;
      });
    }
    if (chapter.glossary && chapter.glossary.length > 0) {
      fullText += `\n--- ENCYCLOPEDIC GLOSSARY ---\n`;
      chapter.glossary.forEach((g, idx) => {
        fullText += `${idx + 1}. ${g.term}: ${g.definition}\n`;
      });
    }
    if (chapter.sources && chapter.sources.length > 0) {
      fullText += `\n--- VERIFIED CURRICULUM SOURCES ---\n`;
      chapter.sources.forEach((s) => {
        fullText += `• ${s}\n`;
      });
    }

    navigator.clipboard.writeText(fullText).then(() => {
      setCopiedNotesNotice(true);
      setTimeout(() => setCopiedNotesNotice(false), 3000);
    });
  };

  const handleCopyFormula = (formulaText: string, idx: number) => {
    navigator.clipboard.writeText(formulaText).then(() => {
      setCopiedFormulaIdx(idx);
      setTimeout(() => setCopiedFormulaIdx(null), 2500);
    });
  };

  const toggleRevisedPoint = (idx: number) => {
    setRevisedPoints(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  // Filtered FAQs and Glossary
  const filteredFaqs = (chapter.detailedFaqs || []).filter(faq => 
    faq.question.toLowerCase().includes(faqSearch.toLowerCase()) ||
    faq.answer.toLowerCase().includes(faqSearch.toLowerCase())
  );

  const filteredGlossary = (chapter.glossary || []).filter(g =>
    g.term.toLowerCase().includes(glossarySearch.toLowerCase()) ||
    g.definition.toLowerCase().includes(glossarySearch.toLowerCase())
  );

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      
      {/* Top Navigation & Action Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-xs">
        <div className="flex items-center gap-3">
          <button
            id="chapter-back-btn"
            onClick={onBack}
            className="p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            aria-label="Back to Subject Chapters"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
              <span>Class {chapter.classGrade}</span>
              <span>•</span>
              <span className="text-indigo-600 font-semibold">{subject.name}</span>
              <span>•</span>
              <span>Chapter {chapter.chapterNumber}</span>
            </div>
            <h1 className="text-lg sm:text-xl font-bold text-slate-900 leading-tight">
              {chapter.title}
            </h1>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-2 self-end sm:self-auto">
          <button
            id="bookmark-chapter-btn"
            onClick={() => onToggleBookmark(chapter.id)}
            className={`px-3 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
              isBookmarked
                ? 'bg-amber-50 text-amber-700 border border-amber-200'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
            }`}
          >
            {isBookmarked ? <BookmarkCheck className="w-4 h-4 text-amber-500" /> : <Bookmark className="w-4 h-4" />}
            <span className="hidden sm:inline">{isBookmarked ? 'Bookmarked' : 'Save'}</span>
          </button>

          <button
            id="complete-chapter-btn"
            onClick={() => onToggleComplete(chapter.id)}
            className={`px-3 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
              isCompleted
                ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                : 'bg-slate-100 hover:bg-emerald-50 hover:text-emerald-700 text-slate-700'
            }`}
          >
            <CheckCircle2 className={`w-4 h-4 ${isCompleted ? 'text-emerald-600' : 'text-slate-400'}`} />
            <span>{isCompleted ? 'Completed' : 'Mark as Done'}</span>
          </button>

          <button
            id="take-chapter-quiz-btn"
            onClick={() => onStartQuiz(chapter, subject)}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-xs flex items-center gap-1.5 transition-colors"
          >
            <Award className="w-4 h-4 text-amber-300" />
            <span>Take Quiz</span>
          </button>
        </div>
      </div>

      {/* Chapter 6-Tab Exhaustive Navigation Bar */}
      <div className="flex items-center gap-2 border-b border-slate-200 pb-2 overflow-x-auto scrollbar-none">
        <button
          onClick={() => setActiveTab('reading')}
          className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all shrink-0 ${
            activeTab === 'reading'
              ? 'bg-indigo-600 text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>Reading Lessons</span>
          <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${activeTab === 'reading' ? 'bg-indigo-500 text-white' : 'bg-slate-200 text-slate-700'}`}>
            {deepContent.sequentialParts.length} Parts
          </span>
        </button>

        <button
          onClick={() => setActiveTab('solved')}
          className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all shrink-0 ${
            activeTab === 'solved'
              ? 'bg-indigo-600 text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <Calculator className="w-4 h-4" />
          <span>Solved Problems</span>
          <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${activeTab === 'solved' ? 'bg-indigo-500 text-white' : 'bg-slate-200 text-slate-700'}`}>
            {deepContent.solvedProblems.length} Solved
          </span>
        </button>

        <button
          onClick={() => setActiveTab('practice')}
          className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all shrink-0 ${
            activeTab === 'practice'
              ? 'bg-indigo-600 text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <Sparkles className="w-4 h-4" />
          <span>Practice Bank</span>
          <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${activeTab === 'practice' ? 'bg-indigo-500 text-white' : 'bg-slate-200 text-slate-700'}`}>
            {deepContent.practiceQuestions.length} Qs (20 Sets)
          </span>
        </button>

        <button
          onClick={() => setActiveTab('formulas')}
          className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all shrink-0 ${
            activeTab === 'formulas'
              ? 'bg-indigo-600 text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <FileText className="w-4 h-4" />
          <span>Formula Vault</span>
          <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${activeTab === 'formulas' ? 'bg-indigo-500 text-white' : 'bg-slate-200 text-slate-700'}`}>
            {deepContent.formulas.length}+ Formulas
          </span>
        </button>

        <button
          onClick={() => setActiveTab('faqs')}
          className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all shrink-0 ${
            activeTab === 'faqs'
              ? 'bg-indigo-600 text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <HelpCircle className="w-4 h-4" />
          <span>Doubts & Traps</span>
          <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${activeTab === 'faqs' ? 'bg-indigo-500 text-white' : 'bg-slate-200 text-slate-700'}`}>
            FAQs
          </span>
        </button>

        <button
          onClick={() => setActiveTab('summary')}
          className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all shrink-0 ${
            activeTab === 'summary'
              ? 'bg-indigo-600 text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <Layers className="w-4 h-4" />
          <span>Summary & Glossary</span>
        </button>
      </div>

      {/* TAB 1: SEQUENTIAL READING LESSONS (450 Progressive Micro-Steps) */}
      {activeTab === 'reading' && (
        <SequentialReadingView
          parts={deepContent.sequentialParts}
          chapterTitle={chapter.title}
          subjectName={subject.name}
          classGrade={chapter.classGrade}
          onStartQuiz={() => onStartQuiz(chapter, subject)}
        />
      )}

      {/* TAB 2: SOLVED MODEL PROBLEMS (250 Step-by-Step Problems) */}
      {activeTab === 'solved' && (
        <DeepSolvedProblemsView
          problems={deepContent.solvedProblems}
          chapterTitle={chapter.title}
          subjectName={subject.name}
          classGrade={chapter.classGrade}
        />
      )}

      {/* TAB 3: FAQS, DOUBTS CLARIFIED & COMMON EXAM TRAPS */}
      {activeTab === 'faqs' && (
        <div className="space-y-6">
          <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2.5 py-0.5 rounded-md bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider">
                  Zero Need to Search Google
                </span>
                <span className="text-xs font-semibold text-slate-500">
                  Comprehensive Academic Clarifications
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Academic Doubts Clarified & Examination Pitfalls
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-2xl">
                The exact questions students search online for, answered with academic rigor, alongside common mistakes that cost marks in board examinations.
              </p>
            </div>

            {/* Quick Search */}
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search doubts & FAQs..."
                value={faqSearch}
                onChange={(e) => setFaqSearch(e.target.value)}
                className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          {/* Frequently Asked Doubts Section */}
          <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h4 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-indigo-600" />
                <span>Frequently Asked Doubts & Deep Clarifications</span>
              </h4>
              <span className="text-xs text-slate-500 font-medium">
                {filteredFaqs.length} Doubts Answered
              </span>
            </div>

            <div className="space-y-3">
              {filteredFaqs.map((faq, idx) => {
                const isExpanded = expandedFaq === idx;
                return (
                  <div 
                    key={idx} 
                    className="border border-slate-200 rounded-xl overflow-hidden transition-all bg-slate-50/50"
                  >
                    <button
                      onClick={() => setExpandedFaq(isExpanded ? null : idx)}
                      className="w-full text-left p-4 flex items-center justify-between gap-3 hover:bg-slate-50 transition-colors"
                    >
                      <div className="flex items-start gap-3">
                        <span className="w-5 h-5 rounded-md bg-indigo-100 text-indigo-700 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                          Q
                        </span>
                        <span className="text-xs sm:text-sm font-bold text-slate-900">
                          {faq.question}
                        </span>
                      </div>
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4 text-slate-500 shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-500 shrink-0" />
                      )}
                    </button>

                    {isExpanded && (
                      <div className="p-4 pt-0 pl-12 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 bg-white">
                        <p className="mt-3">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Common Misconceptions & Exam Pitfalls */}
          {chapter.commonMisconceptions && chapter.commonMisconceptions.length > 0 && (
            <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div>
                  <h4 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-500" />
                    <span>Common Student Misconceptions & Exam Pitfalls</span>
                  </h4>
                  <p className="text-xs text-slate-500">
                    Why marks are lost in exams and how to craft the scientifically and mathematically accurate response.
                  </p>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 bg-amber-50 text-amber-800 border border-amber-200 rounded-lg">
                  {chapter.commonMisconceptions.length} Exam Traps
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {chapter.commonMisconceptions.map((m, i) => (
                  <div key={i} className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 space-y-3 shadow-2xs">
                    {/* The Misconception */}
                    <div className="p-3 bg-rose-50 border border-rose-200 rounded-lg text-xs text-rose-900">
                      <span className="font-bold block text-rose-950 mb-0.5">
                        ❌ Common Student Misconception:
                      </span>
                      {m.misconception}
                    </div>

                    {/* The Reality */}
                    <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg text-xs text-emerald-950">
                      <span className="font-bold block text-emerald-900 mb-0.5">
                        ✅ Scientific & Mathematical Reality:
                      </span>
                      {m.correction}
                    </div>

                    {/* Exam Note */}
                    <p className="text-[11px] text-slate-600 leading-relaxed px-1">
                      <strong className="text-slate-900 font-semibold">Examiner Warning: </strong>
                      {m.explanation}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* TAB 3: PRACTICE QUESTION BANK (750 Questions across 20 Sets) */}
      {activeTab === 'practice' && (
        <DeepPracticeBankView
          questions={deepContent.practiceQuestions}
          chapterTitle={chapter.title}
          subjectName={subject.name}
          classGrade={chapter.classGrade}
        />
      )}

      {/* TAB 4: COMPREHENSIVE FORMULA VAULT (40+ Formulas) */}
      {activeTab === 'formulas' && (
        <DeepFormulasView
          formulas={deepContent.formulas}
          chapterTitle={chapter.title}
          subjectName={subject.name}
          classGrade={chapter.classGrade}
        />
      )}

      {/* TAB 5: QUICK SUMMARY, FORMULAS & ENCYCLOPEDIC GLOSSARY */}
      {activeTab === 'summary' && (
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[11px] font-bold">
                  Class {chapter.classGrade} • {subject.name}
                </span>
                <span className="text-xs font-semibold text-slate-400">Chapter {chapter.chapterNumber}</span>
              </div>
              <h3 className="font-bold text-slate-900 text-xl">Executive Revision Sheet & Glossary</h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Complete syllabus summary, essential formulas, pre-exam checklist, and encyclopedic glossary.
              </p>
            </div>

            <button
              onClick={() => onStartQuiz(chapter, subject)}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl shadow-xs flex items-center gap-2 transition-colors self-start sm:self-auto"
            >
              <Award className="w-4 h-4 text-amber-300" />
              <span>Launch Assessment Quiz</span>
            </button>
          </div>

          {/* Executive Overview Synopsis */}
          <div className="p-5 bg-indigo-50/60 rounded-2xl border border-indigo-100 text-xs sm:text-sm text-indigo-950 leading-relaxed shadow-2xs">
            <div className="flex items-center gap-2 mb-2 font-bold text-indigo-900 text-xs uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <span>Executive Chapter Synopsis</span>
            </div>
            <p className="text-slate-800 leading-relaxed whitespace-pre-line">{chapter.summary}</p>
          </div>

          {/* High-Yield Quick Revision Checklist */}
          {chapter.summaryPoints && chapter.summaryPoints.length > 0 && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-2">
                  <CheckSquare className="w-4 h-4 text-indigo-600" />
                  <span>High-Yield Revision Checklist (Click to Mark Revised)</span>
                </h4>
                <span className="text-xs text-slate-500 font-medium">
                  {Object.values(revisedPoints).filter(Boolean).length} of {chapter.summaryPoints.length} Completed
                </span>
              </div>

              <div className="space-y-2">
                {chapter.summaryPoints.map((point, i) => {
                  const isChecked = !!revisedPoints[i];
                  return (
                    <button
                      key={i}
                      type="button"
                      onClick={() => toggleRevisedPoint(i)}
                      className={`w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm flex items-start gap-3 transition-all ${
                        isChecked
                          ? 'bg-emerald-50/70 border-emerald-300 text-emerald-900'
                          : 'bg-slate-50 hover:bg-indigo-50/40 border-slate-200/80 text-slate-800'
                      }`}
                    >
                      <div className="shrink-0 mt-0.5">
                        {isChecked ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        ) : (
                          <Square className="w-4 h-4 text-slate-400" />
                        )}
                      </div>
                      <span className={`leading-relaxed ${isChecked ? 'line-through text-slate-500' : ''}`}>
                        {point}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Essential Formulas, Laws & Governing Rules */}
          {chapter.formulasAndRules && chapter.formulasAndRules.length > 0 && (
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-indigo-600" />
                  <span>Essential Formulas, Laws & Governing Rules</span>
                </h4>
                <span className="text-xs text-slate-500">{chapter.formulasAndRules.length} Governing Rules</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {chapter.formulasAndRules.map((rule, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-bold text-slate-900">{rule.title}</span>
                      <button
                        onClick={() => handleCopyFormula(rule.formula, idx)}
                        className="px-2 py-1 rounded-md text-[11px] font-semibold text-slate-600 hover:text-indigo-600 bg-slate-100 hover:bg-indigo-50 transition-colors flex items-center gap-1"
                        title="Copy formula"
                      >
                        {copiedFormulaIdx === idx ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-600" />
                            <span className="text-emerald-700">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3 text-slate-400" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>

                    <div className="p-2.5 bg-slate-900 text-emerald-400 rounded-lg font-mono text-xs overflow-x-auto">
                      {rule.formula}
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">{rule.explanation}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* "Did You Know?" Historical Discoveries & Real-World Realia */}
          {chapter.didYouKnow && chapter.didYouKnow.length > 0 && (
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-2">
                <Compass className="w-4 h-4 text-indigo-600" />
                <span>Did You Know? Discovery Origins & Scientific Realia</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {chapter.didYouKnow.map((fact, idx) => (
                  <div key={idx} className="p-3.5 bg-indigo-50/50 rounded-xl border border-indigo-100/80 text-xs text-indigo-950 space-y-1">
                    <span className="font-bold text-indigo-800 text-[11px] uppercase tracking-wider block">
                      Insight {idx + 1}
                    </span>
                    <p className="leading-relaxed text-slate-800">{fact}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Encyclopedic Chapter Glossary */}
          {chapter.glossary && chapter.glossary.length > 0 && (
            <div className="space-y-3 pt-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-indigo-600" />
                  <span>Encyclopedic Terminology & Glossary</span>
                </h4>
                <div className="relative w-full sm:w-48">
                  <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search terms..."
                    value={glossarySearch}
                    onChange={(e) => setGlossarySearch(e.target.value)}
                    className="w-full pl-8 pr-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {filteredGlossary.map((g, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                    <span className="text-xs font-bold text-indigo-700 block">{g.term}</span>
                    <p className="text-xs text-slate-600 leading-relaxed">{g.definition}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Verified Reference Sources */}
          {chapter.sources && chapter.sources.length > 0 && (
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600 space-y-2">
              <strong className="font-bold text-slate-900 flex items-center gap-1.5 text-xs">
                <BookCheck className="w-4 h-4 text-indigo-600" />
                <span>Verified Curriculum Sources & Attributions:</span>
              </strong>
              <ul className="list-disc list-inside space-y-1 text-slate-600 pl-1 text-[11px]">
                {chapter.sources.map((src, i) => (
                  <li key={i}>{src}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Bottom Assessment Quiz CTA */}
          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <span className="text-xs text-slate-500 font-medium">
              Ready to test your knowledge on this chapter?
            </span>
            <button
              onClick={() => onStartQuiz(chapter, subject)}
              className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl shadow-xs flex items-center justify-center gap-2 transition-colors"
            >
              <Award className="w-4 h-4 text-amber-300" />
              <span>Launch Assessment Quiz ({chapter.quizQuestions.length} Qs)</span>
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
