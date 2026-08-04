"use client";

import { BookOpen, Award, CheckCircle2, Clock, ExternalLink } from 'lucide-react';

const roadmaps = [
  { name: "Full Stack Web Development", progress: 85, steps: 12, completed: 10, eta: "2 weeks" },
  { name: "AWS Cloud Practitioner", progress: 100, steps: 8, completed: 8, eta: "Completed" },
  { name: "Machine Learning Foundations", progress: 45, steps: 10, completed: 4, eta: "6 weeks" },
  { name: "Cybersecurity Essentials", progress: 20, steps: 15, completed: 3, eta: "10 weeks" },
  { name: "DevOps Pipeline Mastery", progress: 60, steps: 9, completed: 5, eta: "4 weeks" },
];

const certifications = [
  { name: "AWS Cloud Practitioner", provider: "Amazon Web Services", status: "completed", score: "920/1000", date: "Jul 2026", icon: "https://logo.clearbit.com/aws.amazon.com" },
  { name: "Google Data Analytics", provider: "Google / Coursera", status: "completed", score: "95%", date: "Jun 2026", icon: "https://logo.clearbit.com/google.com" },
  { name: "Meta Front-End Developer", provider: "Meta / Coursera", status: "completed", score: "92%", date: "May 2026", icon: "https://logo.clearbit.com/meta.com" },
  { name: "CompTIA Security+", provider: "CompTIA", status: "in-progress", score: "65% done", date: "Expected Sep 2026", icon: "https://logo.clearbit.com/comptia.org" },
  { name: "Azure Fundamentals AZ-900", provider: "Microsoft", status: "wishlist", score: "-", date: "Planned", icon: "https://logo.clearbit.com/azure.microsoft.com" },
];

const resources = [
  { title: "React 19 Complete Guide", type: "Article", date: "2 days ago" },
  { title: "System Design Interview Prep", type: "Video", date: "4 days ago" },
  { title: "DSA Patterns Cheatsheet", type: "Guide", date: "1 week ago" },
  { title: "How to Ace Google Interviews", type: "Article", date: "1 week ago" },
  { title: "Docker & Kubernetes for Beginners", type: "Video", date: "2 weeks ago" },
];

export function LearningTab() {
  return (
    <div className="space-y-8">
      {/* Roadmaps */}
      <div>
        <div className="flex items-center gap-2 mb-5">
          <BookOpen className="w-5 h-5 text-purple-600" />
          <h3 className="text-lg font-bold text-slate-900">Career Roadmaps</h3>
        </div>
        <div className="space-y-4">
          {roadmaps.map((r, i) => (
            <div key={i} className="bg-white rounded-2xl border border-slate-200 p-5 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-slate-900 text-sm">{r.name}</h4>
                <span className={`text-xs font-bold px-2.5 py-1 rounded-lg ${r.progress === 100 ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-indigo-50 text-indigo-700 border border-indigo-200'}`}>
                  {r.progress === 100 ? '✓ Completed' : `${r.progress}%`}
                </span>
              </div>
              <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden mb-3">
                <div className={`h-full rounded-full transition-all ${r.progress === 100 ? 'bg-green-500' : 'bg-gradient-to-r from-indigo-500 to-purple-500'}`} style={{ width: `${r.progress}%` }} />
              </div>
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span>{r.completed} / {r.steps} steps</span>
                <span>{r.eta}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div>
        <div className="flex items-center gap-2 mb-5">
          <Award className="w-5 h-5 text-amber-600" />
          <h3 className="text-lg font-bold text-slate-900">Certifications</h3>
        </div>
        <div className="space-y-3">
          {certifications.map((cert, i) => (
            <div key={i} className="flex items-center gap-4 bg-white rounded-2xl border border-slate-200 p-4 hover:shadow-md transition-shadow">
              <img src={cert.icon} alt={cert.provider} className="w-10 h-10 rounded-lg object-contain border border-slate-100 bg-white shrink-0" />
              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-sm text-slate-900 truncate">{cert.name}</h4>
                <p className="text-xs text-slate-500">{cert.provider}</p>
              </div>
              <div className="hidden sm:block text-right">
                <p className="text-sm font-bold text-slate-700">{cert.score}</p>
                <p className="text-xs text-slate-400">{cert.date}</p>
              </div>
              <span className={`px-3 py-1.5 rounded-lg text-xs font-bold border shrink-0 ${
                cert.status === 'completed' ? 'bg-green-50 text-green-700 border-green-200' :
                cert.status === 'in-progress' ? 'bg-amber-50 text-amber-700 border-amber-200' :
                'bg-slate-50 text-slate-500 border-slate-200'
              }`}>
                {cert.status === 'completed' ? '✓ Completed' : cert.status === 'in-progress' ? 'In Progress' : 'Wishlist'}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Resources */}
      <div>
        <div className="flex items-center gap-2 mb-5">
          <Clock className="w-5 h-5 text-slate-500" />
          <h3 className="text-lg font-bold text-slate-900">Recently Viewed Resources</h3>
        </div>
        <div className="bg-white rounded-2xl border border-slate-200 divide-y divide-slate-100">
          {resources.map((r, i) => (
            <div key={i} className="flex items-center justify-between px-5 py-3.5 hover:bg-slate-50 transition-colors">
              <div className="min-w-0">
                <p className="font-semibold text-sm text-slate-800 truncate">{r.title}</p>
                <p className="text-xs text-slate-400 mt-0.5">{r.type} • {r.date}</p>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-400 shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
