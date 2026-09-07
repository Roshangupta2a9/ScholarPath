import React, { useState } from 'react';
import { 
  FolderGit2, 
  BookOpen, 
  HelpCircle, 
  FileText, 
  Search, 
  ArrowRight, 
  Download, 
  Sparkles, 
  CheckCircle2,
  Award
} from 'lucide-react';
import { Subject, Chapter } from '../types';

interface CourseContentViewProps {
  currentGrade: number;
  subjects: Subject[];
  onOpenChapter: (chapter: Chapter, subject: Subject) => void;
}

export const CourseContentView: React.FC<CourseContentViewProps> = ({
  currentGrade,
  subjects,
  onOpenChapter
}) => {
  const [filterType, setFilterType] = useState<'all' | 'notes' | 'practice' | 'quiz'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [downloadToast, setDownloadToast] = useState<string | null>(null);

  // Flatten all chapters with subject info
  const allItems: { chapter: Chapter; subject: Subject }[] = [];
  subjects.forEach(subject => {
    subject.chapters.forEach(chapter => {
      allItems.push({ chapter, subject });
    });
  });

  const filtered = allItems.filter(({ chapter, subject }) => {
    const matchesSearch = 
      chapter.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      chapter.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      subject.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  const handleSimulateDownload = (title: string) => {
    setDownloadToast(`Downloaded: ${title} (PDF Study Sheet)`);
    setTimeout(() => setDownloadToast(null), 3000);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      
      {/* Header Banner */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-600" />
            <span className="text-xs uppercase font-bold tracking-wider text-indigo-600">
              Campus Course Library
            </span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
            Class {currentGrade} Course Content & Study Resources
          </h1>
          <p className="text-xs text-slate-500">
            Unified repository of reading materials, comprehensive text lessons, practice question sets, and chapter quizzes.
          </p>
        </div>

        {downloadToast && (
          <div className="px-3.5 py-1.5 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold rounded-xl flex items-center gap-1.5 animate-in fade-in">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>{downloadToast}</span>
          </div>
        )}
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
        {/* Filter categories */}
        <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-1 scrollbar-none">
          {[
            { id: 'all', label: 'All Resources', icon: FolderGit2 },
            { id: 'notes', label: 'Reading Notes', icon: BookOpen },
            { id: 'practice', label: 'Practice Sheets', icon: HelpCircle },
            { id: 'quiz', label: 'Chapter Quizzes', icon: Award }
          ].map(tab => {
            const Icon = tab.icon;
            const isSelected = filterType === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setFilterType(tab.id as any)}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold shrink-0 transition-all ${
                  isSelected
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Search input */}
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search topic or chapter..."
            className="w-full pl-9 pr-3 py-2 bg-white border border-slate-200 rounded-xl text-xs text-slate-900 focus:border-indigo-500 outline-hidden shadow-2xs"
          />
        </div>
      </div>

      {/* Grid of Materials */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map(({ chapter, subject }) => (
          <div
            key={chapter.id}
            className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs hover:border-indigo-300 hover:shadow-md transition-all flex flex-col justify-between group"
          >
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-md">
                  {subject.name}
                </span>
                <span className="text-[11px] text-slate-400 font-mono">
                  CH {chapter.chapterNumber}
                </span>
              </div>

              <h3 className="font-bold text-slate-900 text-base group-hover:text-indigo-600 transition-colors">
                {chapter.title}
              </h3>
              <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                {chapter.tagline}
              </p>

              {/* Resource Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                  <BookOpen className="w-3 h-3 text-indigo-500" />
                  {chapter.readingTimeMinutes}m Read
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                  <HelpCircle className="w-3 h-3 text-emerald-500" />
                  {chapter.practiceExercises.length} Practice Qs
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                  <Award className="w-3 h-3 text-amber-500" />
                  {chapter.quizQuestions.length} Quiz Qs
                </span>
              </div>
            </div>

            <div className="pt-4 mt-3 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={() => handleSimulateDownload(chapter.title)}
                className="text-xs font-semibold text-slate-500 hover:text-indigo-600 flex items-center gap-1"
                title="Download study sheet"
              >
                <Download className="w-3.5 h-3.5" />
                <span>PDF Guide</span>
              </button>

              <button
                onClick={() => onOpenChapter(chapter, subject)}
                className="px-3.5 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-2xs flex items-center gap-1.5 transition-colors"
              >
                <span>Access Module</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
