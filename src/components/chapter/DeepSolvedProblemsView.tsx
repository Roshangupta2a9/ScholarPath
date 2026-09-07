import React, { useState, useMemo } from 'react';
import { 
  Calculator, 
  Search, 
  Lightbulb, 
  Check, 
  ChevronDown, 
  ChevronUp, 
  Sparkles, 
  BookOpen, 
  Award,
  Layers
} from 'lucide-react';
import { DeepSolvedProblem } from '../../types';

interface DeepSolvedProblemsViewProps {
  problems: DeepSolvedProblem[];
  chapterTitle: string;
  subjectName: string;
  classGrade: number;
}

export const DeepSolvedProblemsView: React.FC<DeepSolvedProblemsViewProps> = ({
  problems,
  chapterTitle,
  subjectName,
  classGrade
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [jumpInput, setJumpInput] = useState('');
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const problemsPerPage = 10;
  const totalProblems = problems.length;

  const categories = [
    { key: 'all', label: 'All Problems' },
    { key: 'Direct Concept', label: 'Conceptual Verification' },
    { key: 'Numerical', label: 'Numerical Word Problems' },
    { key: 'Derivation', label: 'Derivations & Proofs' },
    { key: 'HOTS', label: 'Board Exam HOTS' },
    { key: 'Olympiad', label: 'National Olympiad' }
  ];

  const difficulties = ['all', 'Foundation', 'Standard', 'Advanced', 'Olympiad'];

  const filteredProblems = useMemo(() => {
    return problems.filter(p => {
      const matchCat = selectedCategory === 'all' || p.category === selectedCategory;
      const matchDiff = selectedDifficulty === 'all' || p.difficulty === selectedDifficulty;
      const q = searchQuery.toLowerCase();
      const matchQ = !q || 
        p.title.toLowerCase().includes(q) || 
        p.problemStatement.toLowerCase().includes(q) || 
        p.finalAnswer.toLowerCase().includes(q) ||
        p.problemNumber.toString() === q;
      return matchCat && matchDiff && matchQ;
    });
  }, [problems, selectedCategory, selectedDifficulty, searchQuery]);

  const totalPages = Math.ceil(filteredProblems.length / problemsPerPage);
  const displayedProblems = useMemo(() => {
    const start = (currentPage - 1) * problemsPerPage;
    return filteredProblems.slice(start, start + problemsPerPage);
  }, [filteredProblems, currentPage, problemsPerPage]);

  const handleJumpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const num = parseInt(jumpInput, 10);
    if (!isNaN(num) && num >= 1 && num <= totalProblems) {
      const targetIndex = filteredProblems.findIndex(p => p.problemNumber === num);
      if (targetIndex !== -1) {
        setCurrentPage(Math.floor(targetIndex / problemsPerPage) + 1);
        setExpandedId(num);
      } else {
        setSelectedCategory('all');
        setSelectedDifficulty('all');
        setSearchQuery('');
        setCurrentPage(Math.floor((num - 1) / problemsPerPage) + 1);
        setExpandedId(num);
      }
      setJumpInput('');
    }
  };

  const getDifficultyBadge = (diff: string) => {
    switch (diff) {
      case 'Foundation':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'Standard':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'Advanced':
        return 'bg-purple-50 text-purple-700 border-purple-200';
      case 'Olympiad':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      default:
        return 'bg-slate-50 text-slate-700 border-slate-200';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header & Stats Banner */}
      <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-md bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider">
                Exhaustive 250-Problem Model Solved Bank
              </span>
              <span className="text-xs text-slate-500 font-semibold">
                Class {classGrade} • {subjectName}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              Master Solved Problems & Systematic Derivations
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-2xl leading-relaxed">
              Every single problem is solved with complete parameter breakdowns, governing theorems, intermediate arithmetic, and examiner shortcut tips so you never have to search elsewhere.
            </p>
          </div>

          {/* Quick Jump Form */}
          <form onSubmit={handleJumpSubmit} className="flex items-center gap-2 self-start md:self-auto">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Jump to #:</span>
            <input
              type="number"
              min="1"
              max={totalProblems}
              placeholder="1-250"
              value={jumpInput}
              onChange={(e) => setJumpInput(e.target.value)}
              className="w-20 px-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="submit"
              className="px-3 py-1.5 bg-slate-800 hover:bg-slate-900 text-white text-xs font-semibold rounded-lg transition-colors"
            >
              Go
            </button>
          </form>
        </div>

        {/* Search & Filters */}
        <div className="pt-3 border-t border-slate-100 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search problem, concept, or formula..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-500 font-medium">Difficulty:</span>
              <div className="flex items-center gap-1">
                {difficulties.map((diff) => (
                  <button
                    key={diff}
                    onClick={() => {
                      setSelectedDifficulty(diff);
                      setCurrentPage(1);
                    }}
                    className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                      selectedDifficulty === diff
                        ? 'bg-slate-900 text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {diff === 'all' ? 'All' : diff}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => {
                  setSelectedCategory(cat.key);
                  setCurrentPage(1);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold shrink-0 transition-all ${
                  selectedCategory === cat.key
                    ? 'bg-indigo-600 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Problems List */}
      <div className="space-y-5">
        {displayedProblems.map((prob) => {
          const isExpanded = expandedId === prob.problemNumber || expandedId === null;
          return (
            <div 
              key={prob.problemNumber}
              className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden transition-all"
            >
              {/* Header */}
              <div className="p-4 sm:p-5 bg-slate-50/80 border-b border-slate-100 flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-xl bg-indigo-600 text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-2xs">
                    {prob.problemNumber}
                  </span>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base sm:text-lg">
                      {prob.title}
                    </h4>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className={`text-[11px] px-2 py-0.5 rounded-md font-semibold border ${getDifficultyBadge(prob.difficulty)}`}>
                        {prob.difficulty}
                      </span>
                      <span className="text-[11px] text-slate-500 font-medium">
                        Category: {prob.category}
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setExpandedId(expandedId === prob.problemNumber ? -1 : prob.problemNumber)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                  title={isExpanded ? 'Collapse' : 'Expand'}
                >
                  {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
              </div>

              {/* Body */}
              {isExpanded && (
                <div className="p-5 sm:p-6 space-y-5">
                  {/* Problem statement */}
                  <div className="p-4 rounded-xl bg-indigo-50/50 border border-indigo-100 text-xs sm:text-sm text-indigo-950">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-700 block mb-1">
                      Problem Statement:
                    </span>
                    <p className="font-medium leading-relaxed text-slate-900">
                      {prob.problemStatement}
                    </p>
                  </div>

                  {/* Given & Formula */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                      <strong className="text-slate-800 block mb-1 font-bold uppercase tracking-wider text-[11px]">
                        📋 Given Parameters:
                      </strong>
                      <p className="text-slate-600 leading-relaxed">{prob.givenData}</p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                      <strong className="text-slate-800 block mb-1 font-bold uppercase tracking-wider text-[11px]">
                        📐 Governing Formula:
                      </strong>
                      <p className="font-mono text-indigo-700 font-bold leading-relaxed">{prob.governingFormula}</p>
                    </div>
                  </div>

                  {/* Step-by-Step Solution Breakdown */}
                  <div className="space-y-2.5">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                      Rigorous Step-by-Step Deduction:
                    </span>
                    <div className="space-y-2">
                      {prob.stepByStepSolution.map((step, sIdx) => (
                        <div key={sIdx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50/70 border border-slate-200/80">
                          <span className="w-5 h-5 rounded-md bg-emerald-100 text-emerald-800 text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                            {sIdx + 1}
                          </span>
                          <span className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                            {step}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Final Boxed Answer */}
                  <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-300 flex items-center justify-between gap-3 text-xs sm:text-sm">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 block mb-0.5">
                        ✅ Final Evaluated Answer (Boxed for Board Submission):
                      </span>
                      <span className="font-bold text-emerald-950 text-sm sm:text-base">
                        {prob.finalAnswer}
                      </span>
                    </div>
                    <span className="px-2.5 py-1 bg-emerald-600 text-white rounded-lg text-xs font-bold shrink-0">
                      Standard Units
                    </span>
                  </div>

                  {/* Examiner Shortcut */}
                  <div className="p-3.5 rounded-xl bg-amber-50/90 border border-amber-200 flex items-start gap-2.5 text-xs text-amber-950">
                    <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-bold text-amber-900 block mb-0.5">
                        Examiner Shortcut & Speed Check Trick:
                      </strong>
                      <p className="leading-relaxed text-amber-900">{prob.examinerShortcut}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-slate-200">
          <button
            onClick={() => {
              setCurrentPage(p => Math.max(1, p - 1));
              window.scrollTo({ top: 120, behavior: 'smooth' });
            }}
            disabled={currentPage === 1}
            className="px-3.5 py-1.5 rounded-xl border border-slate-200 text-xs font-semibold disabled:opacity-30 text-slate-700 hover:bg-slate-50 transition-colors"
          >
            Previous
          </button>

          <span className="text-xs font-bold text-slate-700">
            Page {currentPage} of {totalPages} ({filteredProblems.length} Problems)
          </span>

          <button
            onClick={() => {
              setCurrentPage(p => Math.min(totalPages, p + 1));
              window.scrollTo({ top: 120, behavior: 'smooth' });
            }}
            disabled={currentPage === totalPages}
            className="px-3.5 py-1.5 rounded-xl border border-slate-200 text-xs font-semibold disabled:opacity-30 text-slate-700 hover:bg-slate-50 transition-colors"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};
