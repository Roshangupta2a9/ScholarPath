import React, { useState, useMemo } from 'react';
import { 
  CheckCircle2, 
  BookOpen, 
  Sparkles, 
  ChevronLeft, 
  ChevronRight, 
  Lightbulb, 
  Compass, 
  Search, 
  Check, 
  Layers, 
  BookCheck,
  Award
} from 'lucide-react';
import { SequentialPart } from '../../types';

interface SequentialReadingViewProps {
  parts: SequentialPart[];
  chapterTitle: string;
  subjectName: string;
  classGrade: number;
  onStartQuiz: () => void;
}

export const SequentialReadingView: React.FC<SequentialReadingViewProps> = ({
  parts,
  chapterTitle,
  subjectName,
  classGrade,
  onStartQuiz
}) => {
  // Navigation & Mode
  const [mode, setMode] = useState<'focus' | 'browse'>('focus');
  const [currentPartIdx, setCurrentPartIdx] = useState<number>(0);
  const [completedParts, setCompletedParts] = useState<Record<number, boolean>>({});
  
  // Filtering & Pagination for Browse Mode
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPhase, setSelectedPhase] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [jumpPartNumber, setJumpPartNumber] = useState<string>('');
  const partsPerPage = 15;

  const totalParts = parts.length;
  const currentPart = parts[currentPartIdx] || parts[0];

  // Distinct phases for filter
  const phases = useMemo(() => {
    const set = new Set<string>();
    parts.forEach(p => set.add(p.modulePhase));
    return Array.from(set);
  }, [parts]);

  // Filtered parts for browse mode
  const filteredParts = useMemo(() => {
    return parts.filter(p => {
      const matchPhase = selectedPhase === 'all' || p.modulePhase === selectedPhase;
      const q = searchQuery.toLowerCase();
      const matchQuery = !q || 
        p.title.toLowerCase().includes(q) || 
        p.deepExplanation.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q);
      return matchPhase && matchQuery;
    });
  }, [parts, selectedPhase, searchQuery]);

  const totalPages = Math.ceil(filteredParts.length / partsPerPage);
  const displayedParts = useMemo(() => {
    const start = (currentPage - 1) * partsPerPage;
    return filteredParts.slice(start, start + partsPerPage);
  }, [filteredParts, currentPage, partsPerPage]);

  const togglePartComplete = (partNum: number) => {
    setCompletedParts(prev => ({ ...prev, [partNum]: !prev[partNum] }));
  };

  const handleNextPart = () => {
    if (currentPartIdx < totalParts - 1) {
      setCurrentPartIdx(prev => prev + 1);
      window.scrollTo({ top: 120, behavior: 'smooth' });
    }
  };

  const handlePrevPart = () => {
    if (currentPartIdx > 0) {
      setCurrentPartIdx(prev => prev - 1);
      window.scrollTo({ top: 120, behavior: 'smooth' });
    }
  };

  const handleJumpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const num = parseInt(jumpPartNumber, 10);
    if (!isNaN(num) && num >= 1 && num <= totalParts) {
      setCurrentPartIdx(num - 1);
      setMode('focus');
      setJumpPartNumber('');
    }
  };

  const completedCount = Object.values(completedParts).filter(Boolean).length;
  const progressPercent = Math.round((completedCount / totalParts) * 100);

  return (
    <div className="space-y-6">
      {/* Header Banner & Mode Selector */}
      <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <span className="px-2.5 py-0.5 rounded-md bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider">
                Comprehensive 450-Part Sequential Curriculum
              </span>
              <span className="text-xs text-slate-500 font-semibold">
                Class {classGrade} • {subjectName}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
              Sequential Learning Roadmap: {chapterTitle}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-2xl leading-relaxed">
              Organized into 450 progressive, micro-learning steps divided across 7 academic phases so you can master the syllabus without cognitive overload.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto flex-wrap">
            <div className="bg-slate-100 p-1 rounded-xl flex items-center gap-1 border border-slate-200">
              <button
                onClick={() => setMode('focus')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  mode === 'focus'
                    ? 'bg-white text-indigo-700 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Focus Mode (Step-by-Step)
              </button>
              <button
                onClick={() => setMode('browse')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  mode === 'browse'
                    ? 'bg-white text-indigo-700 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Browse All 450 Parts
              </button>
            </div>

            <button
              onClick={onStartQuiz}
              className="px-3.5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-xs flex items-center gap-1.5 transition-colors"
            >
              <Award className="w-4 h-4 text-amber-300" />
              <span>Take Quiz</span>
            </button>
          </div>
        </div>

        {/* Global Progress Bar */}
        <div className="pt-2 border-t border-slate-100">
          <div className="flex items-center justify-between text-xs mb-1.5">
            <span className="font-semibold text-slate-700 flex items-center gap-1.5">
              <BookCheck className="w-4 h-4 text-emerald-600" />
              <span>Syllabus Reading Progress:</span>
              <strong className="text-indigo-600 font-bold">{completedCount} of {totalParts} Parts Completed</strong>
            </span>
            <span className="font-bold text-slate-800">{progressPercent}%</span>
          </div>
          <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
            <div 
              className="bg-emerald-500 h-full rounded-full transition-all duration-300 ease-out"
              style={{ width: `${Math.max(progressPercent, 1)}%` }}
            />
          </div>
        </div>

        {/* Jump to Part Controller */}
        <form onSubmit={handleJumpSubmit} className="flex items-center gap-3 pt-1">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            Quick Jump:
          </span>
          <div className="flex items-center gap-2">
            <input
              type="number"
              min="1"
              max={totalParts}
              placeholder="e.g. 150"
              value={jumpPartNumber}
              onChange={(e) => setJumpPartNumber(e.target.value)}
              className="w-24 px-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="submit"
              className="px-3 py-1.5 bg-slate-800 hover:bg-slate-900 text-white text-xs font-semibold rounded-lg transition-colors"
            >
              Go to Part
            </button>
          </div>
          <span className="text-xs text-slate-400 hidden sm:inline">
            (Enter any part number between 1 and {totalParts})
          </span>
        </form>
      </div>

      {/* ----------------- MODE 1: FOCUS STEP MODE (Recommended for student clarity) ----------------- */}
      {mode === 'focus' && currentPart && (
        <div className="space-y-4">
          {/* Sub-navigation controls for Focus Mode */}
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex items-center justify-between gap-3">
            <button
              onClick={handlePrevPart}
              disabled={currentPartIdx === 0}
              className="px-3.5 py-2 rounded-xl text-xs font-bold border border-slate-200 hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-1.5 transition-colors text-slate-700"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous Part</span>
            </button>

            <div className="text-center">
              <span className="text-xs text-slate-500 block">Sequential Step</span>
              <strong className="text-sm sm:text-base font-bold text-indigo-700">
                Part {currentPart.partNumber} of {totalParts}
              </strong>
            </div>

            <button
              onClick={handleNextPart}
              disabled={currentPartIdx === totalParts - 1}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 disabled:opacity-30 disabled:cursor-not-allowed text-white flex items-center gap-1.5 transition-colors shadow-xs"
            >
              <span>Next Part</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Active Part Content Card */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
            {/* Phase header */}
            <div className="p-4 sm:p-5 bg-slate-50 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-xl bg-indigo-600 text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-2xs">
                  {currentPart.partNumber}
                </span>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600 block">
                    {currentPart.modulePhase}
                  </span>
                  <h3 className="font-bold text-slate-900 text-base sm:text-lg leading-snug">
                    {currentPart.title}
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-2 self-start sm:self-auto">
                <span className="px-2.5 py-1 rounded-lg bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold">
                  {currentPart.category}
                </span>

                <button
                  onClick={() => togglePartComplete(currentPart.partNumber)}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                    completedParts[currentPart.partNumber]
                      ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  <CheckCircle2 className={`w-3.5 h-3.5 ${completedParts[currentPart.partNumber] ? 'text-emerald-600' : 'text-slate-400'}`} />
                  <span>{completedParts[currentPart.partNumber] ? 'Learned' : 'Mark Learned'}</span>
                </button>
              </div>
            </div>

            {/* In-depth Body */}
            <div className="p-6 sm:p-8 space-y-6">
              <div className="prose prose-slate max-w-none text-sm text-slate-800 leading-relaxed whitespace-pre-line">
                {currentPart.deepExplanation}
              </div>

              {/* Key Takeaways */}
              {currentPart.bulletPoints && currentPart.bulletPoints.length > 0 && (
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-indigo-600" />
                    <span>Key Lesson Takeaways & Focus Requirements:</span>
                  </h4>
                  <ul className="space-y-1.5 pl-1">
                    {currentPart.bulletPoints.map((b, i) => (
                      <li key={i} className="text-xs text-slate-700 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0" />
                        <span className="leading-relaxed">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Examiner Tip */}
              <div className="p-4 rounded-xl bg-amber-50/90 border border-amber-200 flex items-start gap-3 text-xs text-amber-950">
                <Lightbulb className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <strong className="font-bold text-amber-900 block">
                    Examiner & Scoring Rubric Tip:
                  </strong>
                  <p className="leading-relaxed text-amber-900">{currentPart.examinerInsight}</p>
                </div>
              </div>

              {/* Practical Application */}
              {currentPart.practicalApplication && (
                <div className="p-3.5 rounded-xl bg-emerald-50/80 border border-emerald-200/80 flex items-start gap-2.5 text-xs text-emerald-950">
                  <Compass className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-semibold text-emerald-900">Practical & Real-World Application: </strong>
                    <span className="leading-relaxed">{currentPart.practicalApplication}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Footer continuation bar */}
            <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-3">
              <button
                onClick={handlePrevPart}
                disabled={currentPartIdx === 0}
                className="px-3.5 py-2 rounded-xl text-xs font-bold text-slate-600 hover:text-slate-900 disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-1 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous Part</span>
              </button>

              <span className="text-xs text-slate-500 font-medium hidden sm:inline">
                Keep reading sequentially to build complete mastery without missing any topic.
              </span>

              <button
                onClick={handleNextPart}
                disabled={currentPartIdx === totalParts - 1}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 disabled:opacity-30 disabled:cursor-not-allowed text-white flex items-center gap-1 transition-colors shadow-xs"
              >
                <span>Continue to Part {currentPartIdx + 2}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ----------------- MODE 2: BROWSE ALL 450 PARTS MODE ----------------- */}
      {mode === 'browse' && (
        <div className="space-y-4">
          {/* Filter Bar */}
          <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              {/* Search */}
              <div className="relative w-full sm:w-72">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search among 450 parts..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <span className="text-xs text-slate-500 font-medium self-end sm:self-auto">
                Showing {filteredParts.length} of {totalParts} sequential parts
              </span>
            </div>

            {/* Phase Filters */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              <button
                onClick={() => {
                  setSelectedPhase('all');
                  setCurrentPage(1);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold shrink-0 transition-all ${
                  selectedPhase === 'all'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                All Phases ({totalParts})
              </button>
              {phases.map((ph, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setSelectedPhase(ph);
                    setCurrentPage(1);
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold shrink-0 transition-all ${
                    selectedPhase === ph
                      ? 'bg-indigo-600 text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {ph.split(':')[0]}
                </button>
              ))}
            </div>
          </div>

          {/* List of parts */}
          <div className="space-y-4">
            {displayedParts.map((part) => {
              const isLearned = !!completedParts[part.partNumber];
              return (
                <div 
                  key={part.partNumber} 
                  className={`bg-white p-5 rounded-2xl border transition-all ${
                    isLearned ? 'border-emerald-200 bg-emerald-50/10' : 'border-slate-200 shadow-xs'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="flex items-center gap-2.5">
                      <span className="w-7 h-7 rounded-xl bg-indigo-600 text-white font-bold text-xs flex items-center justify-center shrink-0">
                        {part.partNumber}
                      </span>
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600 block">
                          {part.modulePhase}
                        </span>
                        <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                          {part.title}
                        </h4>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => {
                          setCurrentPartIdx(part.partNumber - 1);
                          setMode('focus');
                          window.scrollTo({ top: 120, behavior: 'smooth' });
                        }}
                        className="px-3 py-1 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-bold rounded-lg transition-colors shrink-0"
                      >
                        Study in Focus Mode →
                      </button>

                      <button
                        onClick={() => togglePartComplete(part.partNumber)}
                        className={`p-1.5 rounded-lg border transition-colors ${
                          isLearned ? 'bg-emerald-100 border-emerald-300 text-emerald-800' : 'bg-slate-50 border-slate-200 text-slate-400 hover:text-slate-600'
                        }`}
                        title={isLearned ? 'Learned' : 'Mark Learned'}
                      >
                        <Check className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed line-clamp-3 pl-9 mb-3">
                    {part.deepExplanation}
                  </p>

                  <div className="pl-9 flex items-center gap-3 text-xs text-slate-500">
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-medium">
                      {part.category}
                    </span>
                    <span>•</span>
                    <span className="text-amber-700 truncate max-w-md">
                      💡 {part.examinerInsight}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-slate-200">
              <button
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="px-3 py-1.5 rounded-xl border border-slate-200 text-xs font-semibold disabled:opacity-30 text-slate-700 hover:bg-slate-50 transition-colors"
              >
                Previous
              </button>

              <span className="text-xs font-bold text-slate-700">
                Page {currentPage} of {totalPages}
              </span>

              <button
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="px-3 py-1.5 rounded-xl border border-slate-200 text-xs font-semibold disabled:opacity-30 text-slate-700 hover:bg-slate-50 transition-colors"
              >
                Next
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
