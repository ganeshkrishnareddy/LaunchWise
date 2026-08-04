"use client";

import { Users, Calendar, MessageSquare, CheckCircle2, Clock } from 'lucide-react';

const mentor = {
  name: "Dr. Sarah Lin",
  role: "Senior Staff Engineer at Google",
  avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  sessions: 8,
  nextSession: "Aug 10, 2026 at 3:00 PM",
};

const sessions = [
  { topic: "System Design Prep", date: "Aug 1, 2026", status: "completed", notes: "Covered load balancers, caching, and database sharding. Homework: design Twitter feed." },
  { topic: "Resume Review", date: "Jul 25, 2026", status: "completed", notes: "Updated resume format, added quantified achievements. Resume score improved from 72 to 87." },
  { topic: "Career Path Discussion", date: "Jul 18, 2026", status: "completed", notes: "Discussed frontend vs fullstack career track. Recommended focusing on React + Node.js." },
  { topic: "Mock Interview: Behavioral", date: "Jul 10, 2026", status: "completed", notes: "Practiced STAR method. Need to improve storytelling on project leadership." },
  { topic: "Portfolio Review", date: "Jul 3, 2026", status: "completed", notes: "Added 3 new projects to portfolio. Suggested adding case studies." },
];

const actionItems = [
  { task: "Complete system design assignment", due: "Aug 5", done: false },
  { task: "Update LinkedIn headline", due: "Aug 3", done: true },
  { task: "Build a CI/CD pipeline project", due: "Aug 15", done: false },
  { task: "Practice 5 LeetCode mediums", due: "Aug 7", done: false },
  { task: "Submit updated resume to Dr. Lin", due: "Aug 8", done: true },
];

export function MentorshipTab() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-bold text-slate-900 mb-1">Mentorship</h3>
        <p className="text-sm text-slate-500">Track your mentorship sessions and action items.</p>
      </div>

      {/* Active Mentor Card */}
      <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl p-6 text-white">
        <p className="text-xs font-bold text-indigo-200 uppercase tracking-wider mb-4">Current Mentor</p>
        <div className="flex items-center gap-4 mb-6">
          <img src={mentor.avatar} alt={mentor.name} className="w-16 h-16 rounded-2xl object-cover border-2 border-white/30" />
          <div>
            <h4 className="text-xl font-black">{mentor.name}</h4>
            <p className="text-indigo-200 text-sm">{mentor.role}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white/10 rounded-xl p-3">
            <p className="text-2xl font-black">{mentor.sessions}</p>
            <p className="text-xs text-indigo-200">Sessions Completed</p>
          </div>
          <div className="bg-white/10 rounded-xl p-3">
            <p className="text-sm font-bold">{mentor.nextSession}</p>
            <p className="text-xs text-indigo-200">Next Session</p>
          </div>
        </div>
      </div>

      {/* Action Items */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6">
        <div className="flex items-center gap-2 mb-5">
          <CheckCircle2 className="w-5 h-5 text-purple-600" />
          <h4 className="font-bold text-slate-900">Action Items</h4>
        </div>
        <div className="space-y-3">
          {actionItems.map((item, i) => (
            <div key={i} className={`flex items-center gap-3 p-3 rounded-xl border ${item.done ? 'bg-green-50/50 border-green-100' : 'bg-slate-50 border-slate-100'}`}>
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${item.done ? 'bg-green-500 border-green-500' : 'border-slate-300'}`}>
                {item.done && <CheckCircle2 className="w-3 h-3 text-white" />}
              </div>
              <p className={`text-sm flex-1 ${item.done ? 'line-through text-slate-400' : 'text-slate-700 font-medium'}`}>{item.task}</p>
              <span className="text-xs text-slate-400 shrink-0">Due {item.due}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Session History */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6">
        <div className="flex items-center gap-2 mb-5">
          <MessageSquare className="w-5 h-5 text-indigo-500" />
          <h4 className="font-bold text-slate-900">Session History</h4>
        </div>
        <div className="space-y-4">
          {sessions.map((s, i) => (
            <div key={i} className="border-l-2 border-indigo-200 pl-4 py-2">
              <div className="flex items-center justify-between mb-1">
                <h5 className="font-bold text-sm text-slate-900">{s.topic}</h5>
                <span className="text-xs text-slate-400">{s.date}</span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">{s.notes}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
