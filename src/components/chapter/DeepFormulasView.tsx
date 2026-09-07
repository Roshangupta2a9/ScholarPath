import React, { useState, useMemo } from 'react';
import { 
  FileText, 
  Search, 
  Copy, 
  Check, 
  Lightbulb, 
  GraduationCap, 
  Sparkles, 
  Layers 
} from 'lucide-react';
import { DeepFormulaItem } from '../../types';

interface DeepFormulasViewProps {
  formulas: DeepFormulaItem[];
  chapterTitle: string;
  subjectName: string;
  classGrade: number;
}

export const DeepFormulasView: React.FC<DeepFormulasViewProps> = ({
  formulas,
  chapterTitle,
  subjectName,
  classGrade
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [copiedAll, setCopiedAll] = useState(false);

  const categories = [
    { key: 'all', label: 'All Formulas' },
    { key: 'Fundamental Law', label: 'Fundamental Laws' },
    { key: 'Derived Equation', label: 'Derived Equations' },
    { key: 'Identity / Theorem', label: 'Identities & Theorems' },
    { key: 'Constants & Units', label: 'Constants & Units' },
    { key: 'Shortcut Rule', label: 'Shortcut Rules' }
  ];

  const filteredFormulas = useMemo(() => {
    return formulas.filter(f => {
      const matchCat = selectedCategory === 'all' || f.category === selectedCategory;
      const q = searchQuery.toLowerCase();
      const matchQ = !q || 
        f.title.toLowerCase().includes(q) || 
        f.formula.toLowerCase().includes(q) || 
        f.symbolsExplained.toLowerCase().includes(q) ||
        f.siUnits.toLowerCase().includes(q);
      return matchCat && matchQ;
    });
  }, [formulas, selectedCategory, searchQuery]);

  const handleCopySingle = (f: DeepFormulaItem) => {
    const text = `${f.title}\nFormula: ${f.formula}\nSymbols: ${f.symbolsExplained}\nSI Units: ${f.siUnits}\nApplicability: ${f.applicabilityCriteria}\nExaminer Note: ${f.examNote}`;
    navigator.clipboard.writeText(text).then(() => {
      setCopiedId(f.id);
      setTimeout(() => setCopiedId(null), 2500);
    });
  };

  const handleCopyAll = () => {
    let masterText = `📐 COMPREHENSIVE FORMULA VAULT: ${chapterTitle} (Class ${classGrade} - ${subjectName})\n\n`;
    formulas.forEach((f, idx) => {
      masterText += `[${idx + 1}] ${f.title} (${f.category})\n`;
      masterText += `Formula: ${f.formula}\n`;
      masterText += `Symbols: ${f.symbolsExplained}\n`;
      masterText += `SI Units: ${f.siUnits}\n`;
      masterText += `Conditions: ${f.applicabilityCriteria}\n`;
      masterText += `Exam Note: ${f.examNote}\n\n`;
    });

    navigator.clipboard.writeText(masterText).then(() => {
      setCopiedAll(true);
      setTimeout(() => setCopiedAll(false), 3000);
    });
  };

  const getCategoryBadge = (cat: string) => {
    switch (cat) {
      case 'Fundamental Law':
        return 'bg-indigo-50 text-indigo-700 border-indigo-200';
      case 'Derived Equation':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'Identity / Theorem':
        return 'bg-purple-50 text-purple-700 border-purple-200';
      case 'Constants & Units':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'Shortcut Rule':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
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
                Comprehensive Formula Bank ({formulas.length} Formulations)
              </span>
              <span className="text-xs text-slate-500 font-semibold">
                Class {classGrade} • {subjectName}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              Governing Formulas, Laws & Invariant Rules
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-2xl leading-relaxed">
              Exhaustive collection of mathematical equations, scientific laws, SI dimension guides, and shortcut verification rules for {chapterTitle}.
            </p>
          </div>

          <button
            onClick={handleCopyAll}
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold shadow-xs flex items-center gap-2 transition-colors self-start md:self-auto"
          >
            {copiedAll ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-300">All Formulas Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-slate-400" />
                <span>Copy Full Formula Sheet</span>
              </>
            )}
          </button>
        </div>

        {/* Filter & Search Bar */}
        <div className="pt-3 border-t border-slate-100 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search formula, symbol, or unit..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <span className="text-xs text-slate-500 font-medium">
              Showing {filteredFormulas.length} of {formulas.length} formulas
            </span>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
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

      {/* Grid of Formulas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredFormulas.map((f) => (
          <div 
            key={f.id}
            className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-3 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between gap-2 mb-2">
                <div>
                  <span className={`text-[10px] px-2 py-0.5 rounded-md font-semibold border ${getCategoryBadge(f.category)} inline-block mb-1`}>
                    {f.category}
                  </span>
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base leading-snug">
                    {f.title}
                  </h4>
                </div>

                <button
                  onClick={() => handleCopySingle(f)}
                  className="px-2.5 py-1 rounded-lg text-xs font-semibold border border-slate-200 bg-slate-50 hover:bg-indigo-50 hover:text-indigo-600 transition-colors flex items-center gap-1 shrink-0"
                  title="Copy formula"
                >
                  {copiedId === f.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Monospace Formula Code Box */}
              <div className="p-3 bg-slate-900 text-emerald-400 rounded-xl font-mono text-xs sm:text-sm font-semibold overflow-x-auto shadow-2xs">
                {f.formula}
              </div>

              {/* Details */}
              <div className="mt-3 space-y-2 text-xs text-slate-600">
                <div>
                  <strong className="text-slate-900 font-semibold">Symbols: </strong>
                  <span>{f.symbolsExplained}</span>
                </div>
                <div>
                  <strong className="text-slate-900 font-semibold">SI Units: </strong>
                  <span className="font-mono text-indigo-700">{f.siUnits}</span>
                </div>
                <div>
                  <strong className="text-slate-900 font-semibold">Conditions of Validity: </strong>
                  <span>{f.applicabilityCriteria}</span>
                </div>
              </div>
            </div>

            {/* Exam Tip */}
            <div className="p-3 bg-amber-50/80 border border-amber-200 rounded-xl text-xs text-amber-950 flex items-start gap-2">
              <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <strong className="font-bold text-amber-900">Examiner Advice: </strong>
                <span>{f.examNote}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
