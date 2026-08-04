"use client";

import { FileText, Code2, ExternalLink, GitBranch, Globe, Star } from 'lucide-react';

const resumeData = {
  score: 87,
  atsScore: 82,
  downloads: 34,
  versions: 5,
  lastUpdated: "Aug 1, 2026",
  suggestions: [
    "Add more quantified achievements (use numbers and percentages)",
    "Include a 'Technical Skills' section with proficiency levels",
    "Add links to your deployed projects",
    "Consider adding relevant coursework for entry-level roles",
  ],
  missingSkills: ["Docker", "GraphQL", "CI/CD", "Terraform"],
};

const projects = [
  { name: "LaunchWise Platform", desc: "Full-stack career platform for students with AI tools, job board, and student perks marketplace.", tech: ["Next.js", "TypeScript", "Tailwind", "Clerk"], github: "https://github.com", demo: "https://launchwise.co", stars: 42, progress: 100 },
  { name: "AI Resume Builder", desc: "Smart resume builder with ATS scoring and AI-powered suggestions using GPT-4.", tech: ["React", "Python", "FastAPI", "OpenAI"], github: "https://github.com", demo: "https://demo.com", stars: 28, progress: 100 },
  { name: "Cloud Cost Optimizer", desc: "Dashboard to monitor and optimize AWS/Azure/GCP cloud spending for startups.", tech: ["Vue.js", "Node.js", "AWS SDK", "Chart.js"], github: "https://github.com", demo: "", stars: 15, progress: 85 },
  { name: "Real-Time Chat App", desc: "WebSocket-based chat with rooms, typing indicators, and file sharing.", tech: ["React", "Socket.io", "Express", "MongoDB"], github: "https://github.com", demo: "https://demo.com", stars: 19, progress: 100 },
  { name: "E-Commerce Microservices", desc: "Event-driven microservices architecture with Stripe payments and Redis caching.", tech: ["NestJS", "Kafka", "Redis", "Docker"], github: "https://github.com", demo: "", stars: 8, progress: 60 },
];

export function ResumeProjectsTab() {
  return (
    <div className="space-y-8">
      {/* Resume Section */}
      <div>
        <div className="flex items-center gap-2 mb-5">
          <FileText className="w-5 h-5 text-cyan-600" />
          <h3 className="text-lg font-bold text-slate-900">Resume Intelligence</h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl p-5 text-white">
            <p className="text-4xl font-black">{resumeData.score}%</p>
            <p className="text-sm text-cyan-100 mt-1">Resume Score</p>
          </div>
          <div className="bg-white rounded-2xl border border-slate-200 p-5">
            <p className="text-3xl font-black text-slate-900">{resumeData.atsScore}%</p>
            <p className="text-xs text-slate-500 mt-1">ATS Compatibility</p>
          </div>
          <div className="bg-white rounded-2xl border border-slate-200 p-5">
            <p className="text-3xl font-black text-slate-900">{resumeData.downloads}</p>
            <p className="text-xs text-slate-500 mt-1">Downloads</p>
          </div>
          <div className="bg-white rounded-2xl border border-slate-200 p-5">
            <p className="text-3xl font-black text-slate-900">v{resumeData.versions}</p>
            <p className="text-xs text-slate-500 mt-1">Current Version</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl border border-slate-200 p-6">
            <h4 className="font-bold text-slate-900 mb-4">AI Suggestions</h4>
            <ul className="space-y-3">
              {resumeData.suggestions.map((s, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                  <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-2 shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-2xl border border-slate-200 p-6">
            <h4 className="font-bold text-slate-900 mb-4">Missing Skills (Market Demand)</h4>
            <div className="flex flex-wrap gap-2">
              {resumeData.missingSkills.map((skill, i) => (
                <span key={i} className="px-3 py-1.5 bg-red-50 text-red-700 border border-red-200 rounded-lg text-xs font-bold">{skill}</span>
              ))}
            </div>
            <p className="text-xs text-slate-400 mt-4">Adding these skills to your resume would improve your match rate by ~15%.</p>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div>
        <div className="flex items-center gap-2 mb-5">
          <Code2 className="w-5 h-5 text-purple-600" />
          <h3 className="text-lg font-bold text-slate-900">Projects Portfolio</h3>
        </div>
        <div className="space-y-4">
          {projects.map((p, i) => (
            <div key={i} className="bg-white rounded-2xl border border-slate-200 p-5 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <div className="min-w-0 flex-1">
                  <h4 className="font-bold text-slate-900 flex items-center gap-2">
                    {p.name}
                    {p.progress === 100 && <span className="text-xs font-bold text-green-700 bg-green-50 border border-green-200 px-2 py-0.5 rounded-md">Complete</span>}
                    {p.progress < 100 && <span className="text-xs font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-md">{p.progress}%</span>}
                  </h4>
                  <p className="text-sm text-slate-500 mt-1">{p.desc}</p>
                </div>
                <div className="flex items-center gap-1 text-xs text-slate-400 shrink-0 ml-3">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  {p.stars}
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {p.tech.map((t, j) => (
                  <span key={j} className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded-md text-[10px] font-bold">{t}</span>
                ))}
              </div>
              {p.progress < 100 && (
                <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden mb-3">
                  <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" style={{ width: `${p.progress}%` }} />
                </div>
              )}
              <div className="flex items-center gap-3">
                <a href={p.github} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors">
                  <GitBranch className="w-3.5 h-3.5" /> GitHub
                </a>
                {p.demo && (
                  <a href={p.demo} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-xs font-semibold text-indigo-600 hover:text-indigo-800 transition-colors">
                    <Globe className="w-3.5 h-3.5" /> Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
