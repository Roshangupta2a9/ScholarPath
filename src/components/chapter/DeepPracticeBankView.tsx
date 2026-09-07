import React, { useState, useMemo } from 'react';
import { 
  Sparkles, 
  Search, 
  CheckCircle2, 
  AlertCircle, 
  Lightbulb, 
  RotateCcw, 
  Check, 
  Layers, 
  Award,
  Zap
} from 'lucide-react';
import { DeepPracticeQuestion } from '../../types';

interface DeepPracticeBankViewProps {
  questions: DeepPracticeQuestion[];
  chapterTitle: string;
  subjectName: string;
  classGrade: number;
}

export const DeepPracticeBankView: React.FC<DeepPracticeBankViewProps> = ({
  questions,
  chapterTitle,
  subjectName,
  classGrade
}) => {
  const [selectedSet, setSelectedSet] = useState<number | 'speed'>(1);
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Interactive answering state
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [checkedAnswers, setCheckedAnswers] = useState<Record<number, boolean>>({});
  const [hintsShown, setHintsShown] = useState<Record<number, boolean>>({});

  const totalQuestions = questions.length;
  const totalSets = 20;

  // Filtered list
  const activeQuestions = useMemo(() => {
    let list = questions;

    if (selectedSet === 'speed') {
      // Pick 15 deterministic random questions
      list = questions.slice(0, 15);
    } else {
      list = questions.filter(q => q.setNumber === selectedSet);
    }

    return list.filter(q => {
      const matchType = selectedType === 'all' || q.type === selectedType;
      const matchDiff = selectedDifficulty === 'all' || q.difficulty === selectedDifficulty;
      const qText = searchQuery.toLowerCase();
      const matchSearch = !qText || 
        q.question.toLowerCase().includes(qText) || 
        q.explanation.toLowerCase().includes(qText);
      return matchType && matchDiff && matchSearch;
    });
  }, [questions, selectedSet, selectedType, selectedDifficulty, searchQuery]);

  const handleSelectOption = (qId: number, optIdx: number) => {
    setUserAnswers(prev => ({ ...prev, [qId]: optIdx }));
    setCheckedAnswers(prev => ({ ...prev, [qId]: false }));
  };

  const handleCheckAnswer = (qId: number) => {
    setCheckedAnswers(prev => ({ ...prev, [qId]: true }));
  };

  const handleResetSet = () => {
    setUserAnswers({});
    setCheckedAnswers({});
    setHintsShown({});
  };

  // Score statistics for the current view
  const currentSetAnswered = activeQuestions.filter(q => checkedAnswers[q.id]);
  const currentSetCorrect = currentSetAnswered.filter(q => userAnswers[q.id] === q.correctOptionIndex);
  const scorePercent = currentSetAnswered.length > 0 
    ? Math.round((currentSetCorrect.length / currentSetAnswered.length) * 100) 
    : 0;

  const getTypeBadge = (type: string) => {
    switch (type) {
      case 'assertion-reason':
        return 'bg-purple-50 text-purple-700 border-purple-200';
      case 'numerical':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'conceptual':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-md bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider">
                750 High-Yield Practice Bank (20 Sets)
              </span>
              <span className="text-xs text-slate-500 font-semibold">
                Class {classGrade} • {subjectName}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              Interactive Practice Bank: {chapterTitle}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-2xl leading-relaxed">
              Curated from NCERT Exemplars, previous board papers, Olympiads, and university bridge questions with instant step-by-step grading and feedback.
            </p>
          </div>

          {/* Set Score Pill */}
          <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/80 flex items-center gap-4 self-start md:self-auto">
            <div>
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                Session Performance
              </span>
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-slate-900">
                  {currentSetCorrect.length} / {currentSetAnswered.length}
                </span>
                <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  {scorePercent}% Accuracy
                </span>
              </div>
            </div>

            <button
              onClick={handleResetSet}
              className="p-2 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-white border border-slate-200 transition-colors"
              title="Reset current answers"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Set Selector Tabs */}
        <div className="pt-2 border-t border-slate-100 space-y-3">
          <div className="flex items-center justify-between gap-2">
            <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">
              Select Practice Set (1 to 20):
            </span>
            <button
              onClick={() => setSelectedSet('speed')}
              className={`px-3 py-1 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                selectedSet === 'speed'
                  ? 'bg-amber-500 text-white shadow-xs'
                  : 'bg-amber-50 text-amber-800 border border-amber-200 hover:bg-amber-100'
              }`}
            >
              <Zap className="w-3.5 h-3.5" />
              <span>15-Q Speed Test Drill</span>
            </button>
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {Array.from({ length: totalSets }, (_, i) => i + 1).map((sNum) => (
              <button
                key={sNum}
                onClick={() => setSelectedSet(sNum)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold shrink-0 transition-all ${
                  selectedSet === sNum
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Set {sNum}
              </button>
            ))}
          </div>

          {/* Filter Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
            {/* Search */}
            <div className="relative w-full sm:w-64">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search practice questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-8 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Type & Diff Filters */}
            <div className="flex items-center gap-2 flex-wrap">
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-slate-700 focus:outline-none"
              >
                <option value="all">All Question Types</option>
                <option value="mcq">Standard MCQs</option>
                <option value="assertion-reason">Assertion-Reason</option>
                <option value="numerical">Quantitative / Numerical</option>
                <option value="conceptual">Conceptual Deep-Dive</option>
              </select>

              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="px-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-slate-700 focus:outline-none"
              >
                <option value="all">All Difficulties</option>
                <option value="Foundation">Foundation</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Board-Exam">Board Exam</option>
                <option value="Olympiad">Olympiad</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Questions list */}
      <div className="space-y-4">
        {activeQuestions.map((q, idx) => {
          const selectedOpt = userAnswers[q.id];
          const isChecked = checkedAnswers[q.id];
          const isCorrect = isChecked && selectedOpt === q.correctOptionIndex;
          const isIncorrect = isChecked && selectedOpt !== q.correctOptionIndex;
          const hintVisible = hintsShown[q.id];

          return (
            <div 
              key={q.id}
              className={`bg-white p-5 sm:p-6 rounded-2xl border transition-all ${
                isChecked
                  ? isCorrect
                    ? 'border-emerald-300 bg-emerald-50/15 shadow-xs'
                    : 'border-rose-300 bg-rose-50/15 shadow-xs'
                  : 'border-slate-200 shadow-xs'
              }`}
            >
              {/* Question Header */}
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="w-6 h-6 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-xs">
                    {idx + 1}
                  </span>
                  <span className="text-xs font-bold text-slate-500">
                    Question #{q.id} (Set {q.setNumber})
                  </span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-md font-semibold border ${getTypeBadge(q.type)}`}>
                    {q.type.toUpperCase()}
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-md font-semibold bg-slate-100 text-slate-700 border border-slate-200">
                    {q.difficulty}
                  </span>
                </div>

                <button
                  onClick={() => setHintsShown(prev => ({ ...prev, [q.id]: !hintVisible }))}
                  className="text-xs font-semibold text-amber-600 hover:text-amber-700 flex items-center gap-1 shrink-0"
                >
                  <Lightbulb className="w-3.5 h-3.5" />
                  <span>{hintVisible ? 'Hide Hint' : 'Hint'}</span>
                </button>
              </div>

              {/* Hint Box */}
              {hintVisible && (
                <div className="mb-4 p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900">
                  💡 <strong>Exam Hint:</strong> {q.hint}
                </div>
              )}

              {/* Question statement */}
              <p className="text-sm font-semibold text-slate-900 mb-4 leading-relaxed whitespace-pre-line">
                {q.question}
              </p>

              {/* Options */}
              <div className="space-y-2 mb-4">
                {q.options.map((opt, optIdx) => {
                  const isChosen = selectedOpt === optIdx;
                  let optStyle = 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-indigo-50/50';

                  if (isChecked) {
                    if (optIdx === q.correctOptionIndex) {
                      optStyle = 'bg-emerald-100 border-emerald-400 text-emerald-950 font-semibold';
                    } else if (isChosen) {
                      optStyle = 'bg-rose-100 border-rose-400 text-rose-950';
                    }
                  } else if (isChosen) {
                    optStyle = 'bg-indigo-50 border-indigo-500 text-indigo-950 font-semibold ring-1 ring-indigo-500';
                  }

                  return (
                    <button
                      key={optIdx}
                      type="button"
                      onClick={() => handleSelectOption(q.id, optIdx)}
                      className={`w-full p-3 rounded-xl border text-left text-xs sm:text-sm flex items-center justify-between transition-all ${optStyle}`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-5 h-5 rounded-md bg-white/80 border border-slate-300 text-[11px] font-bold flex items-center justify-center shrink-0">
                          {String.fromCharCode(65 + optIdx)}
                        </span>
                        <span className="leading-relaxed">{opt}</span>
                      </div>
                      {isChecked && optIdx === q.correctOptionIndex && (
                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Action & Result */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-slate-100">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleCheckAnswer(q.id)}
                    disabled={selectedOpt === undefined}
                    className="px-4 py-1.5 bg-slate-900 hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed text-white text-xs font-semibold rounded-xl transition-colors"
                  >
                    Check Answer
                  </button>

                  {isChecked && (
                    <span className={`text-xs font-bold flex items-center gap-1 ${isCorrect ? 'text-emerald-600' : 'text-rose-600'}`}>
                      {isCorrect ? (
                        <>
                          <CheckCircle2 className="w-4 h-4" /> Correct! Excellent deduction.
                        </>
                      ) : (
                        <>
                          <AlertCircle className="w-4 h-4" /> Incorrect. Study the rationale below.
                        </>
                      )}
                    </span>
                  )}
                </div>

                {isIncorrect && (
                  <span className="text-xs font-semibold text-slate-600">
                    Correct Choice: Option {String.fromCharCode(65 + q.correctOptionIndex)}
                  </span>
                )}
              </div>

              {/* Step-by-Step Explanation */}
              {isChecked && (
                <div className="mt-3 p-3.5 bg-slate-50 rounded-xl text-xs text-slate-800 border border-slate-200/80">
                  <strong className="font-bold text-slate-900 block mb-1">
                    Academic Rationale & Verification:
                  </strong>
                  <p className="leading-relaxed">{q.explanation}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
