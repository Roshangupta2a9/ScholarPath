import React, { useState } from 'react';
import { 
  HelpCircle, 
  Send, 
  MessageSquare, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  Sparkles, 
  GraduationCap
} from 'lucide-react';
import { DoubtItem, StudentUser } from '../types';
import { INITIAL_DOUBTS } from '../data/mockDatabase';

interface HelpCenterViewProps {
  currentUser: StudentUser | null;
  currentGrade: number;
}

export const HelpCenterView: React.FC<HelpCenterViewProps> = ({
  currentUser,
  currentGrade
}) => {
  const [doubts, setDoubts] = useState<DoubtItem[]>(INITIAL_DOUBTS);
  const [questionText, setQuestionText] = useState('');
  const [subjectChoice, setSubjectChoice] = useState('Mathematics');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const faqs = [
    {
      q: 'How does class-based personalized filtering work on EduCampus?',
      a: 'When you register or switch your enrolled class (Classes 1 to 10), the platform automatically tailors all subjects, syllabus chapters, reading notes, and MCQ tests exclusively to your grade level so you are never overwhelmed with irrelevant content.'
    },
    {
      q: 'Can I view or practice chapters from other classes?',
      a: 'Yes! In the Classroom and Quizzes sections (as well as inside your Profile), you can toggle the grade buttons (Class 1 to 10) to review prior foundational concepts or preview advanced topics. Your account will still remain anchored to your primary enrolled class.'
    },
    {
      q: 'How are chapter quizzes evaluated?',
      a: 'Quizzes evaluate your answers instantaneously upon submission. You receive a mastery percentage, performance badge, and a detailed question-by-question review highlighting the correct options and step-by-step rationales.'
    },
    {
      q: 'How can I maintain and build my daily study streak?',
      a: 'Completing a chapter reading module, solving practice exercises, or submitting a chapter assessment adds toward your daily streak counter. Consistency is rewarded with campus honors!'
    }
  ];

  const handleAskDoubt = (e: React.FormEvent) => {
    e.preventDefault();
    if (!questionText.trim()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      // Generate realistic helpful answer tailored to question
      const mentorAnswers = [
        `Excellent inquiry! For ${subjectChoice} in Class ${currentGrade}, always ground your reasoning in the fundamental definition. Draw a clear diagram or write down knowns versus unknowns to verify each step systematically.`,
        `Great academic question! In Class ${currentGrade}, this concept is often verified by applying the conservation law or standard algebraic identity. Practice 2 to 3 textbook examples to master the step-by-step method.`,
        `Insightful question! Remember that terminology in ${subjectChoice} conveys exact mathematical or scientific relationships. Review the key formulas card in the chapter summary for full clarity!`
      ];
      const randomAnswer = mentorAnswers[Math.floor(Math.random() * mentorAnswers.length)];

      const newDoubt: DoubtItem = {
        id: `doubt-${Date.now()}`,
        studentName: currentUser ? currentUser.name : 'Student',
        classGrade: currentGrade,
        subject: subjectChoice,
        question: questionText.trim(),
        timestamp: 'Just now',
        status: 'answered',
        answer: randomAnswer,
        mentorName: 'Campus Academic Faculty'
      };

      setDoubts([newDoubt, ...doubts]);
      setQuestionText('');
      setIsSubmitting(false);
    }, 600);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in duration-200">
      
      {/* Header Banner */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-600" />
            <span className="text-xs uppercase font-bold tracking-wider text-indigo-600">
              Student Academic Support
            </span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
            Help Center & Academic Doubts
          </h1>
          <p className="text-xs text-slate-500">
            Get prompt answers from campus educators, review FAQ guides, and strengthen your study technique.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200 self-start sm:self-auto">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>Faculty Online</span>
        </div>
      </div>

      {/* Ask a Teacher / Doubt Box Form */}
      <div className="bg-gradient-to-br from-indigo-50/70 to-blue-50/70 p-6 sm:p-8 rounded-3xl border border-indigo-100 shadow-xs space-y-4">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-xs">
            <GraduationCap className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-bold text-slate-900 text-base">
              Ask an Academic Question (Class {currentGrade})
            </h2>
            <p className="text-xs text-slate-500">
              Stuck on a tricky formula, chapter concept, or exercise? Ask our educators.
            </p>
          </div>
        </div>

        <form onSubmit={handleAskDoubt} className="space-y-3">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="sm:w-1/3">
              <label className="block text-xs font-semibold text-slate-700 mb-1">Subject</label>
              <select
                value={subjectChoice}
                onChange={(e) => setSubjectChoice(e.target.value)}
                className="w-full px-3 py-2 bg-white border border-indigo-200 rounded-xl text-xs font-semibold text-slate-800 focus:border-indigo-500 outline-hidden shadow-2xs"
              >
                <option value="Mathematics">Mathematics</option>
                <option value="Science">Science (Physics/Chem/Bio)</option>
                <option value="Social Studies">Social Studies</option>
                <option value="English">English</option>
              </select>
            </div>

            <div className="sm:w-2/3">
              <label className="block text-xs font-semibold text-slate-700 mb-1">Your Question / Doubt</label>
              <input
                type="text"
                required
                value={questionText}
                onChange={(e) => setQuestionText(e.target.value)}
                placeholder="e.g., Why do we use Pythagoras theorem only in right triangles?"
                className="w-full px-3.5 py-2 bg-white border border-indigo-200 rounded-xl text-xs text-slate-900 focus:border-indigo-500 outline-hidden shadow-2xs"
              />
            </div>
          </div>

          <div className="flex justify-end pt-1">
            <button
              type="submit"
              disabled={isSubmitting || !questionText.trim()}
              className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white text-xs font-bold rounded-xl shadow-xs transition-colors flex items-center gap-2"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{isSubmitting ? 'Consulting Faculty...' : 'Submit Question'}</span>
            </button>
          </div>
        </form>
      </div>

      {/* Answered Doubts Feed */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
            <MessageSquare className="w-4 h-4 text-indigo-600" />
            <span>Answered Doubts & Conceptual Q&As</span>
          </h3>
          <span className="text-xs text-slate-400">{doubts.length} Discussions</span>
        </div>

        <div className="space-y-4">
          {doubts.map((item) => (
            <div key={item.id} className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-md">
                    {item.subject}
                  </span>
                  <span className="text-slate-500 font-medium">{item.studentName} (Class {item.classGrade})</span>
                </div>
                <span className="text-slate-400 font-mono text-[11px]">{item.timestamp}</span>
              </div>

              <p className="font-bold text-slate-900 text-sm">
                Q: "{item.question}"
              </p>

              {item.answer && (
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-emerald-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Response by {item.mentorName || 'Faculty Mentor'}:</span>
                  </div>
                  <p className="leading-relaxed">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Frequently Asked Questions Accordion */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs space-y-4">
        <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
          <HelpCircle className="w-4 h-4 text-indigo-600" />
          <span>Frequently Asked Questions</span>
        </h3>

        <div className="space-y-2">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className="border border-slate-200 rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="w-full p-4 text-left flex items-center justify-between gap-3 font-semibold text-xs sm:text-sm text-slate-800 hover:bg-slate-50 transition-colors"
                >
                  <span>{faq.q}</span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-slate-400 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="p-4 pt-0 text-xs text-slate-600 leading-relaxed bg-white border-t border-slate-100">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};
