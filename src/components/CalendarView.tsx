import React, { useState } from 'react';
import { Calendar as CalendarIcon, Clock, Plus, Tag, Check, Filter } from 'lucide-react';
import { CalendarEvent, StudentUser } from '../types';

interface CalendarViewProps {
  events: CalendarEvent[];
  currentGrade: number;
  currentUser: StudentUser | null;
  onAddCustomEvent?: (event: CalendarEvent) => void;
}

export const CalendarView: React.FC<CalendarViewProps> = ({
  events: initialEvents,
  currentGrade,
  currentUser: _currentUser,
  onAddCustomEvent
}) => {
  const [eventsList, setEventsList] = useState<CalendarEvent[]>(initialEvents);
  const [filterType, setFilterType] = useState<string>('all');
  const [showAddModal, setShowAddModal] = useState(false);

  // New Event Form State
  const [newTitle, setNewTitle] = useState('');
  const [newDate, setNewDate] = useState('2026-09-15');
  const [newTime, setNewTime] = useState('04:00 PM');
  const [newType, setNewType] = useState<'exam' | 'assignment' | 'live-session' | 'revision'>('revision');
  const [newSubject, setNewSubject] = useState('Mathematics');
  const [newDesc, setNewDesc] = useState('');

  const filteredEvents = filterType === 'all' 
    ? eventsList 
    : eventsList.filter(e => e.type === filterType);

  const handleAddEventSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const newEvent: CalendarEvent = {
      id: `custom-event-${Date.now()}`,
      title: newTitle.trim(),
      date: newDate,
      time: newTime,
      type: newType,
      subject: newSubject,
      classGrade: currentGrade,
      description: newDesc.trim() || 'Personal student study schedule item'
    };

    setEventsList([newEvent, ...eventsList]);
    if (onAddCustomEvent) {
      onAddCustomEvent(newEvent);
    }
    setShowAddModal(false);
    setNewTitle('');
    setNewDesc('');
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'exam': return 'bg-rose-50 text-rose-700 border-rose-200';
      case 'assignment': return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'live-session': return 'bg-indigo-50 text-indigo-700 border-indigo-200';
      case 'revision': return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      default: return 'bg-slate-50 text-slate-700 border-slate-200';
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      
      {/* Header Banner */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-600" />
            <span className="text-xs uppercase font-bold tracking-wider text-indigo-600">
              Campus Academic Schedule
            </span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
            Class {currentGrade} Academic Calendar
          </h1>
          <p className="text-xs text-slate-500">
            Keep track of term tests, chapter practice submissions, live doubts sessions, and study targets.
          </p>
        </div>

        <button
          id="add-study-reminder-btn"
          onClick={() => setShowAddModal(true)}
          className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-xs flex items-center gap-2 self-start sm:self-auto transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>Add Study Target</span>
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
        <span className="text-xs font-bold text-slate-400 flex items-center gap-1 shrink-0 mr-1">
          <Filter className="w-3.5 h-3.5" />
          <span>Filter:</span>
        </span>
        {[
          { id: 'all', label: 'All Items' },
          { id: 'exam', label: 'Exams & Diagnostics' },
          { id: 'assignment', label: 'Assignments' },
          { id: 'live-session', label: 'Live Doubts Sessions' },
          { id: 'revision', label: 'Revisions' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setFilterType(tab.id)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold shrink-0 transition-all ${
              filterType === tab.id
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Events Agenda List */}
      <div className="space-y-3">
        {filteredEvents.map((event) => (
          <div
            key={event.id}
            className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs hover:border-indigo-300 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
          >
            <div className="flex items-start gap-4">
              {/* Date Box */}
              <div className="w-14 h-14 rounded-2xl bg-indigo-50 border border-indigo-100 flex flex-col items-center justify-center shrink-0 text-center">
                <span className="text-[10px] uppercase font-bold text-indigo-500">
                  {new Date(event.date).toLocaleString('default', { month: 'short' }) || 'SEP'}
                </span>
                <span className="text-lg font-black text-indigo-900 leading-tight">
                  {event.date.split('-')[2] || '12'}
                </span>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${getTypeColor(event.type)}`}>
                    {event.type.toUpperCase()}
                  </span>
                  <span className="text-xs font-semibold text-slate-500">
                    {event.subject}
                  </span>
                </div>

                <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                  {event.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {event.description}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-100 self-start sm:self-auto shrink-0">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>{event.time}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Add Custom Study Target Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white rounded-3xl p-6 shadow-2xl border border-slate-200 max-w-md w-full space-y-4">
            <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
              <CalendarIcon className="w-4 h-4 text-indigo-600" />
              <span>Add Personal Study Schedule Item</span>
            </h3>

            <form onSubmit={handleAddEventSubmit} className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Target Title</label>
                <input
                  type="text"
                  required
                  placeholder="e.g., Mathematics Formula Revision"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:bg-white focus:border-indigo-500 outline-hidden"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Date</label>
                  <input
                    type="date"
                    required
                    value={newDate}
                    onChange={(e) => setNewDate(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:bg-white focus:border-indigo-500 outline-hidden"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Time</label>
                  <input
                    type="text"
                    required
                    value={newTime}
                    onChange={(e) => setNewTime(e.target.value)}
                    placeholder="e.g. 05:00 PM"
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:bg-white focus:border-indigo-500 outline-hidden"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Type</label>
                  <select
                    value={newType}
                    onChange={(e) => setNewType(e.target.value as any)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:bg-white focus:border-indigo-500 outline-hidden"
                  >
                    <option value="revision">Revision</option>
                    <option value="exam">Diagnostic Test</option>
                    <option value="assignment">Homework</option>
                    <option value="live-session">Live Doubt</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Subject</label>
                  <select
                    value={newSubject}
                    onChange={(e) => setNewSubject(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:bg-white focus:border-indigo-500 outline-hidden"
                  >
                    <option value="Mathematics">Mathematics</option>
                    <option value="Science">Science</option>
                    <option value="Social Studies">Social Studies</option>
                    <option value="English">English</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Notes / Instructions</label>
                <textarea
                  rows={2}
                  value={newDesc}
                  onChange={(e) => setNewDesc(e.target.value)}
                  placeholder="Review chapters 1 and 2 before solving practice exercises."
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:bg-white focus:border-indigo-500 outline-hidden"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-3 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl shadow-xs"
                >
                  Save Schedule Item
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
