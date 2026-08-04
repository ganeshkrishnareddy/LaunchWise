"use client";

import { useState, useEffect } from 'react';
import {
  Share2, Globe, Mail, Phone, Link2, FileText, Code2, Award, Briefcase, Terminal, Users,
  MapPin, Download, ExternalLink, Star, Flame, Trophy, Zap, Eye, CheckCircle2,
  BookOpen, Gift, Clock, TrendingUp, GitBranch, Link, AtSign, Copy, 
  Heart, MessageSquare, Palette, Settings, User, Cpu
} from "lucide-react";
import { ShareModal } from '@/components/portfolio/ShareModal';
import { ThemeSelector, usePortfolioTheme } from '@/components/portfolio/ThemeSelector';
import { SectionControls, useSectionVisibility } from '@/components/portfolio/SectionControls';
import { AnalyticsPanel, trackPortfolioEvent } from '@/components/portfolio/AnalyticsPanel';

const PORTFOLIO_URL = 'https://launchwise.tech/u/ganeshkrishnareddy';

const quickStats = [
  { label: "Projects", value: "24", icon: Code2, color: "text-purple-400", bg: "bg-purple-500/10" },
  { label: "Certifications", value: "18", icon: Award, color: "text-amber-400", bg: "bg-amber-500/10" },
  { label: "Roadmaps", value: "9", icon: BookOpen, color: "text-blue-400", bg: "bg-blue-500/10" },
  { label: "Jobs Applied", value: "82", icon: Briefcase, color: "text-green-400", bg: "bg-green-500/10" },
  { label: "Interviews", value: "12", icon: Users, color: "text-cyan-400", bg: "bg-cyan-500/10" },
  { label: "Mentorship Hrs", value: "28", icon: Heart, color: "text-rose-400", bg: "bg-rose-500/10" },
  { label: "Perks Claimed", value: "34", icon: Gift, color: "text-emerald-400", bg: "bg-emerald-500/10" },
  { label: "Savings", value: "₹48,200", icon: TrendingUp, color: "text-green-400", bg: "bg-green-500/10" },
  { label: "Resources", value: "96", icon: FileText, color: "text-indigo-400", bg: "bg-indigo-500/10" },
  { label: "AI Skill Score", value: "91%", icon: Cpu, color: "text-violet-400", bg: "bg-violet-500/10" },
  { label: "Portfolio Views", value: "4,282", icon: Eye, color: "text-sky-400", bg: "bg-sky-500/10" },
  { label: "Resume DLs", value: "184", icon: Download, color: "text-orange-400", bg: "bg-orange-500/10" },
];

const skillGroups = [
  { name: "Programming", skills: ["Python", "JavaScript", "TypeScript", "Bash", "SQL", "Go"] },
  { name: "Frameworks", skills: ["React", "Next.js", "Node.js", "Express", "FastAPI", "Django"] },
  { name: "Cloud & DevOps", skills: ["AWS", "Azure", "Docker", "Kubernetes", "CI/CD", "Terraform"] },
  { name: "Cybersecurity", skills: ["VAPT", "SOC Ops", "Burp Suite", "Wireshark", "Nmap", "SIEM"] },
  { name: "AI & ML", skills: ["LLMs", "Prompt Engineering", "TensorFlow", "RAG", "LangChain"] },
  { name: "Databases", skills: ["PostgreSQL", "MongoDB", "Redis", "Firebase", "Supabase"] },
];

const projects = [
  { name: "LaunchWise Platform", desc: "Full-stack career platform for students with AI tools, job board, and perks marketplace.", tech: ["Next.js", "TypeScript", "Clerk", "Tailwind"], stars: 42, status: "Live", github: "#", demo: "#", img: "🚀" },
  { name: "AI Resume Builder", desc: "Smart resume builder with ATS scoring and AI-powered suggestions using GPT-4.", tech: ["React", "Python", "FastAPI", "OpenAI"], stars: 28, status: "Live", github: "#", demo: "#", img: "📄" },
  { name: "Cloud Cost Optimizer", desc: "Dashboard to monitor and optimize AWS/Azure/GCP cloud spending for startups.", tech: ["Vue.js", "Node.js", "AWS SDK"], stars: 15, status: "In Progress", github: "#", demo: "", img: "☁️" },
  { name: "Real-Time Chat App", desc: "WebSocket-based chat with rooms, typing indicators, and file sharing.", tech: ["React", "Socket.io", "MongoDB"], stars: 19, status: "Live", github: "#", demo: "#", img: "💬" },
  { name: "DevSecOps Pipeline", desc: "Automated security pipeline with SAST, SCA, IaC scanning, and vulnerability reports.", tech: ["Jenkins", "Docker", "Trivy", "SonarQube"], stars: 31, status: "Live", github: "#", demo: "", img: "🛡️" },
  { name: "E-Commerce Microservices", desc: "Event-driven microservices with Stripe payments and Redis caching.", tech: ["NestJS", "Kafka", "Redis", "Docker"], stars: 8, status: "In Progress", github: "#", demo: "", img: "🛒" },
];

const certifications = [
  { name: "AWS Cloud Practitioner", provider: "Amazon Web Services", date: "Jul 2026", score: "920/1000", icon: "https://logo.clearbit.com/aws.amazon.com" },
  { name: "Google Data Analytics", provider: "Google / Coursera", date: "Jun 2026", score: "95%", icon: "https://logo.clearbit.com/google.com" },
  { name: "Meta Front-End Developer", provider: "Meta / Coursera", date: "May 2026", score: "92%", icon: "https://logo.clearbit.com/meta.com" },
  { name: "CompTIA Security+", provider: "CompTIA", date: "Apr 2026", score: "850/900", icon: "https://logo.clearbit.com/comptia.org" },
  { name: "Azure Fundamentals AZ-900", provider: "Microsoft", date: "Mar 2026", score: "88%", icon: "https://logo.clearbit.com/azure.microsoft.com" },
];

const roadmaps = [
  { name: "Cybersecurity", progress: 90 },
  { name: "Full Stack Web Dev", progress: 85 },
  { name: "DevOps Pipeline", progress: 100 },
  { name: "Machine Learning", progress: 45 },
  { name: "Cloud Architecture", progress: 70 },
];

const achievements = [
  { name: "Top Learner", emoji: "🏆", unlocked: true },
  { name: "Project Master", emoji: "🚀", unlocked: true },
  { name: "Interview Ready", emoji: "🎯", unlocked: true },
  { name: "CyberSec Hero", emoji: "🛡️", unlocked: true },
  { name: "Open Source", emoji: "💻", unlocked: true },
  { name: "AI Explorer", emoji: "🤖", unlocked: true },
  { name: "Cloud Expert", emoji: "☁️", unlocked: true },
  { name: "Cert Champion", emoji: "🎓", unlocked: true },
  { name: "Referral Champ", emoji: "🏅", unlocked: false },
  { name: "100 Apps", emoji: "💯", unlocked: false },
];

const testimonials = [
  { name: "Dr. Sarah Lin", role: "Senior Staff Engineer, Google", avatar: "https://randomuser.me/api/portraits/women/65.jpg", text: "Ganesh is one of the most driven students I've mentored. His ability to ship production-quality projects while still in college is remarkable." },
  { name: "Prof. Rajesh Kumar", role: "HOD CSE, LPU", avatar: "https://randomuser.me/api/portraits/men/72.jpg", text: "An exceptional student with strong fundamentals in cybersecurity and a passion for building real-world tools." },
  { name: "Ananya Sharma", role: "SDE-2, Microsoft", avatar: "https://randomuser.me/api/portraits/women/28.jpg", text: "Collaborated with Ganesh on open source. He writes clean, well-documented code and is a great team player." },
];

const timelineEvents = [
  { title: "Applied to Google — Frontend Developer", type: "job", date: "Aug 2, 2026" },
  { title: "Completed AWS Cloud Practitioner", type: "cert", date: "Jul 28, 2026" },
  { title: "Claimed GitHub Student Pack", type: "perk", date: "Jul 25, 2026" },
  { title: "Finished DevSecOps Pipeline Project", type: "project", date: "Jul 20, 2026" },
  { title: "Mentorship Session with Dr. Sarah Lin", type: "mentorship", date: "Jul 15, 2026" },
  { title: "Won CyberSec Hackathon — 1st Place", type: "award", date: "Nov 2025" },
];

const themeStyles: Record<string, { bg: string; card: string; border: string; text: string; subtext: string; accent: string }> = {
  dark:      { bg: 'bg-[#09090b]', card: 'bg-[#18181b]', border: 'border-white/10', text: 'text-white', subtext: 'text-zinc-400', accent: 'text-brand-400' },
  minimal:   { bg: 'bg-slate-50', card: 'bg-white', border: 'border-slate-200', text: 'text-slate-900', subtext: 'text-slate-500', accent: 'text-blue-600' },
  developer: { bg: 'bg-[#0d1117]', card: 'bg-[#161b22]', border: 'border-[#30363d]', text: 'text-[#c9d1d9]', subtext: 'text-[#8b949e]', accent: 'text-[#58a6ff]' },
  glass:     { bg: 'bg-[#0f0f23]', card: 'bg-white/5', border: 'border-white/10', text: 'text-white', subtext: 'text-slate-400', accent: 'text-violet-400' },
  cyber:     { bg: 'bg-[#0a0a0a]', card: 'bg-[#111111]', border: 'border-[#00ff8820]', text: 'text-[#00ff88]', subtext: 'text-[#00ff8880]', accent: 'text-[#00ff88]' },
};

export default function PublicPortfolioPage() {
  const [shareOpen, setShareOpen] = useState(false);
  const [themeOpen, setThemeOpen] = useState(false);
  const [sectionsOpen, setSectionsOpen] = useState(false);
  const [recruiterMode, setRecruiterMode] = useState(false);
  const [urlCopied, setUrlCopied] = useState(false);

  const { theme, changeTheme } = usePortfolioTheme();
  const { visibility, toggle } = useSectionVisibility();

  const s = themeStyles[theme] || themeStyles.dark;

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(PORTFOLIO_URL);
    setUrlCopied(true);
    setTimeout(() => setUrlCopied(false), 2000);
  };

  // Sections hidden in recruiter mode
  const isVisible = (key: string) => {
    if (!visibility[key]) return false;
    if (recruiterMode && ['achievements', 'timeline', 'aiInsights', 'quickStats'].includes(key)) return false;
    return true;
  };

  return (
    <div className={`min-h-screen ${s.bg} ${s.text} transition-colors duration-300`}>
      {/* Floating Controls Bar */}
      <div className="fixed top-20 right-4 z-40 flex flex-col gap-2">
        {/* Recruiter Toggle */}
        <div className={`flex items-center gap-2 ${s.card} border ${s.border} rounded-full px-3 py-2 shadow-lg`}>
          <span className="text-xs font-bold opacity-70">{recruiterMode ? 'Recruiter' : 'Candidate'}</span>
          <button
            onClick={() => setRecruiterMode(!recruiterMode)}
            className={`w-10 h-5 rounded-full p-0.5 transition-colors ${recruiterMode ? 'bg-indigo-600' : 'bg-zinc-600'}`}
          >
            <div className={`w-4 h-4 bg-white rounded-full transition-transform ${recruiterMode ? 'translate-x-5' : ''}`} />
          </button>
          <User className="w-3.5 h-3.5 opacity-50" />
        </div>

        <button onClick={() => setThemeOpen(true)} className={`${s.card} border ${s.border} rounded-full p-3 shadow-lg hover:opacity-80 transition-opacity`} title="Change Theme">
          <Palette className="w-4 h-4" />
        </button>
        <button onClick={() => setSectionsOpen(true)} className={`${s.card} border ${s.border} rounded-full p-3 shadow-lg hover:opacity-80 transition-opacity`} title="Section Visibility">
          <Settings className="w-4 h-4" />
        </button>
        <button onClick={() => setShareOpen(true)} className={`${s.card} border ${s.border} rounded-full p-3 shadow-lg hover:opacity-80 transition-opacity`} title="Share Portfolio">
          <Share2 className="w-4 h-4" />
        </button>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Hero */}
        <div className={`${s.card} border ${s.border} rounded-3xl overflow-hidden mb-8 shadow-2xl`}>
          {/* Cover Banner */}
          <div className="h-32 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 relative">
            <div className="absolute inset-0 opacity-30" style={{backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.05) 0%, transparent 40%)'}} />
          </div>
          
          <div className="px-8 pb-8 -mt-12 relative z-10">
            <div className="flex flex-col sm:flex-row items-start gap-5">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-brand-400 to-brand-600 p-0.5 shadow-2xl shrink-0">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Ganesh" className="w-full h-full rounded-[14px] object-cover" />
              </div>
              <div className="flex-1 pt-2 sm:pt-6 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h1 className="text-2xl sm:text-3xl font-black tracking-tight">P Ganesh Krishna Reddy</h1>
                  <CheckCircle2 className="w-5 h-5 text-brand-400 shrink-0" />
                  <span className="px-2 py-0.5 bg-green-500/20 text-green-400 text-[10px] font-bold rounded-full border border-green-500/30 uppercase">Open to Work</span>
                </div>
                <p className={`text-sm ${s.subtext} mb-2 flex flex-wrap items-center gap-2`}>
                  <span>Cybersecurity Analyst & Full Stack Developer</span>
                  <span className="opacity-30">•</span>
                  <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> Hyderabad, India</span>
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  <span className={`px-2 py-0.5 ${s.card} border ${s.border} rounded-lg text-[10px] font-bold opacity-80`}>🎓 B.Tech CSE • LPU • 2027</span>
                  <span className="px-2 py-0.5 bg-brand-500/10 border border-brand-500/20 text-brand-400 rounded-lg text-[10px] font-bold flex items-center gap-1"><Trophy className="w-3 h-3" /> Level 18</span>
                  <span className="px-2 py-0.5 bg-amber-500/10 border border-amber-500/20 text-amber-400 rounded-lg text-[10px] font-bold flex items-center gap-1"><Zap className="w-3 h-3" /> 12,480 XP</span>
                  <span className="px-2 py-0.5 bg-orange-500/10 border border-orange-500/20 text-orange-400 rounded-lg text-[10px] font-bold flex items-center gap-1"><Flame className="w-3 h-3" /> 17 Day Streak</span>
                </div>
              </div>
            </div>

            {/* Public URL Row */}
            <div className={`flex items-center gap-2 ${s.card} border ${s.border} rounded-xl px-4 py-3 mt-4`}>
              <Globe className={`w-4 h-4 ${s.accent} shrink-0`} />
              <span className={`text-xs font-mono ${s.subtext} flex-1 truncate`}>{PORTFOLIO_URL}</span>
              <button onClick={handleCopyUrl} className="shrink-0 flex items-center gap-1 text-xs font-bold text-brand-400 hover:text-brand-300 transition-colors">
                <Copy className="w-3.5 h-3.5" /> {urlCopied ? 'Copied!' : 'Copy'}
              </button>
              <button onClick={() => setShareOpen(true)} className="shrink-0 text-xs font-bold text-brand-400 hover:text-brand-300 transition-colors">Share</button>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-2 mt-4">
              <a href="mailto:pganeshkrishnareddy@gmail.com" onClick={() => trackPortfolioEvent('contactClicks')} className="flex items-center gap-1.5 px-4 py-2 bg-brand-600 text-white rounded-xl text-xs font-bold hover:bg-brand-500 transition-colors">
                <Mail className="w-3.5 h-3.5" /> Hire Me
              </a>
              <button onClick={() => { trackPortfolioEvent('resumeDownloads'); }} className="flex items-center gap-1.5 px-4 py-2 bg-white/10 border border-white/20 rounded-xl text-xs font-bold hover:bg-white/15 transition-colors">
                <Download className="w-3.5 h-3.5" /> Download Resume
              </button>
              <a href="#" onClick={() => trackPortfolioEvent('githubClicks')} className="flex items-center gap-1.5 px-4 py-2 bg-white/10 border border-white/20 rounded-xl text-xs font-bold hover:bg-white/15 transition-colors">
                <GitBranch className="w-3.5 h-3.5" /> GitHub
              </a>
              <a href="#" onClick={() => trackPortfolioEvent('linkedinClicks')} className="flex items-center gap-1.5 px-4 py-2 bg-white/10 border border-white/20 rounded-xl text-xs font-bold hover:bg-white/15 transition-colors">
                <Link className="w-3.5 h-3.5" /> LinkedIn
              </a>
              <button onClick={() => setShareOpen(true)} className="flex items-center gap-1.5 px-4 py-2 bg-white/10 border border-white/20 rounded-xl text-xs font-bold hover:bg-white/15 transition-colors">
                <Share2 className="w-3.5 h-3.5" /> Share
              </button>
            </div>
          </div>
        </div>

        {/* Recruiter Snapshot */}
        {isVisible('recruiterSnapshot') && (
          <div className={`bg-gradient-to-br from-brand-600/20 to-purple-600/10 border border-brand-500/20 rounded-3xl p-6 mb-8`}>
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2"><Eye className={`w-5 h-5 ${s.accent}`} /> Recruiter Snapshot</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {[
                { label: "Available For", value: "Full-time / Intern" },
                { label: "Work Mode", value: "Remote Preferred" },
                { label: "Locations", value: "Bangalore, Hyd" },
                { label: "Joining", value: "Immediate" },
                { label: "Experience", value: "Fresher" },
                { label: "Notice", value: "None" },
              ].map((item, i) => (
                <div key={i} className={`${s.card} border ${s.border} rounded-xl p-3`}>
                  <p className={`text-[10px] font-bold uppercase tracking-wider mb-1 ${s.subtext}`}>{item.label}</p>
                  <p className="text-sm font-bold">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Quick Stats */}
        {isVisible('quickStats') && (
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3 mb-8">
            {quickStats.map((stat, i) => (
              <div key={i} className={`${s.card} border ${s.border} rounded-2xl p-4 hover:border-brand-500/30 transition-colors`}>
                <div className={`w-8 h-8 ${stat.bg} rounded-lg flex items-center justify-center mb-2`}>
                  <stat.icon className={`w-4 h-4 ${stat.color}`} />
                </div>
                <p className="text-lg font-black">{stat.value}</p>
                <p className={`text-[10px] font-medium ${s.subtext}`}>{stat.label}</p>
              </div>
            ))}
          </div>
        )}

        {/* About */}
        {isVisible('about') && (
          <div className={`${s.card} border ${s.border} rounded-3xl p-8 mb-8`}>
            <h2 className="text-lg font-bold mb-4">About Me</h2>
            <p className={`${s.subtext} leading-relaxed text-sm mb-4`}>
              Cybersecurity professional and full-stack developer with hands-on experience in VAPT, SOC operations, application security, threat analysis, and DevSecOps. Passionate about AI, cloud infrastructure, and open source. Actively seeking Cybersecurity Analyst, SOC Analyst, VAPT, AppSec, and Security Engineer opportunities.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Cybersecurity", "Full Stack", "Open Source", "AI/ML", "Cloud Computing", "DevSecOps"].map((tag, i) => (
                <span key={i} className={`px-3 py-1.5 ${s.card} border ${s.border} ${s.subtext} rounded-lg text-xs font-semibold`}>{tag}</span>
              ))}
            </div>
          </div>
        )}

        {/* Skills */}
        {isVisible('skills') && (
          <div className={`${s.card} border ${s.border} rounded-3xl p-8 mb-8`}>
            <h2 className="flex items-center gap-2 text-lg font-bold mb-6"><Code2 className={`w-5 h-5 ${s.accent}`} /> Skills</h2>
            <div className="space-y-5">
              {skillGroups.map((group, i) => (
                <div key={i}>
                  <p className={`text-xs font-bold uppercase tracking-wider mb-2 ${s.subtext}`}>{group.name}</p>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill, j) => (
                      <span key={j} className={`px-3 py-1.5 ${s.card} border ${s.border} ${s.subtext} hover:${s.accent} rounded-lg text-xs font-semibold transition-colors cursor-default`}>{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Projects */}
        {isVisible('projects') && (
          <div className="mb-8">
            <h2 className="flex items-center gap-2 text-lg font-bold mb-6"><Code2 className="w-5 h-5 text-purple-400" /> Featured Projects</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {projects.map((p, i) => (
                <div key={i} onClick={() => trackPortfolioEvent('projectClicks')} className={`${s.card} border ${s.border} rounded-2xl p-6 hover:border-brand-500/30 transition-all cursor-pointer`}>
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{p.img}</span>
                      <div>
                        <h3 className="font-bold text-sm">{p.name}</h3>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${p.status === 'Live' ? 'bg-green-500/20 text-green-400' : 'bg-amber-500/20 text-amber-400'}`}>{p.status}</span>
                      </div>
                    </div>
                    <span className="flex items-center gap-1 text-xs text-zinc-500"><Star className="w-3 h-3 fill-amber-400 text-amber-400" />{p.stars}</span>
                  </div>
                  <p className={`text-xs ${s.subtext} mb-4 leading-relaxed`}>{p.desc}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {p.tech.map((t, j) => (
                      <span key={j} className={`px-2 py-0.5 ${s.card} border ${s.border} ${s.subtext} rounded text-[10px] font-bold`}>{t}</span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a href={p.github} className={`flex items-center gap-1 text-xs ${s.subtext} hover:text-white transition-colors font-semibold`}><GitBranch className="w-3.5 h-3.5" /> Code</a>
                    {p.demo && <a href={p.demo} className={`flex items-center gap-1 text-xs ${s.accent} transition-colors font-semibold`}><Globe className="w-3.5 h-3.5" /> Demo</a>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Certifications */}
        {isVisible('certifications') && (
          <div className={`${s.card} border ${s.border} rounded-3xl p-8 mb-8`}>
            <h2 className="flex items-center gap-2 text-lg font-bold mb-6"><Award className="w-5 h-5 text-amber-400" /> Certifications</h2>
            <div className="space-y-3">
              {certifications.map((cert, i) => (
                <div key={i} className={`flex items-center gap-4 p-4 ${theme === 'minimal' ? 'bg-slate-50' : 'bg-white/5'} rounded-xl border ${s.border} hover:border-brand-500/30 transition-colors`}>
                  <img src={cert.icon} alt={cert.provider} onError={(e) => { (e.target as HTMLImageElement).src = ''; }} className="w-10 h-10 rounded-lg object-contain bg-white shrink-0" />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-sm truncate flex items-center gap-1.5">{cert.name} <CheckCircle2 className="w-3.5 h-3.5 text-green-400 shrink-0" /></h4>
                    <p className={`text-xs ${s.subtext}`}>{cert.provider}</p>
                  </div>
                  <div className="hidden sm:block text-right">
                    <p className="text-sm font-bold">{cert.score}</p>
                    <p className={`text-xs ${s.subtext}`}>{cert.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Roadmaps */}
        {isVisible('roadmaps') && (
          <div className={`${s.card} border ${s.border} rounded-3xl p-8 mb-8`}>
            <h2 className="flex items-center gap-2 text-lg font-bold mb-6"><BookOpen className="w-5 h-5 text-blue-400" /> Career Roadmaps</h2>
            <div className="space-y-5">
              {roadmaps.map((r, i) => (
                <div key={i}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold">{r.name}</span>
                    <span className={`text-xs font-black ${r.progress === 100 ? 'text-green-400' : 'text-brand-400'}`}>{r.progress}%</span>
                  </div>
                  <div className={`w-full h-2.5 ${theme === 'minimal' ? 'bg-slate-100' : 'bg-white/5'} rounded-full overflow-hidden`}>
                    <div className={`h-full rounded-full ${r.progress === 100 ? 'bg-green-500' : 'bg-gradient-to-r from-brand-500 to-purple-500'}`} style={{ width: `${r.progress}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Achievements (hidden in recruiter mode) */}
        {isVisible('achievements') && (
          <div className={`${s.card} border ${s.border} rounded-3xl p-8 mb-8`}>
            <h2 className="flex items-center gap-2 text-lg font-bold mb-6"><Trophy className="w-5 h-5 text-amber-400" /> Achievements</h2>
            <div className="grid grid-cols-5 sm:grid-cols-10 gap-3">
              {achievements.map((a, i) => (
                <div key={i} className={`flex flex-col items-center gap-1.5 p-3 rounded-xl border transition-all ${a.unlocked ? 'bg-amber-500/10 border-amber-500/20 hover:scale-105' : `${s.card} border ${s.border} opacity-30 grayscale`}`}>
                  <span className="text-2xl">{a.emoji}</span>
                  <span className={`text-[8px] font-bold text-center leading-tight ${s.subtext}`}>{a.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Testimonials */}
        {isVisible('testimonials') && (
          <div className="mb-8">
            <h2 className="flex items-center gap-2 text-lg font-bold mb-6"><MessageSquare className="w-5 h-5 text-rose-400" /> Testimonials</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {testimonials.map((t, i) => (
                <div key={i} className={`${s.card} border ${s.border} rounded-2xl p-6`}>
                  <p className={`text-sm ${s.subtext} leading-relaxed mb-5`}>"{t.text}"</p>
                  <div className="flex items-center gap-3">
                    <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover border border-white/10" />
                    <div>
                      <p className="text-sm font-bold">{t.name}</p>
                      <p className={`text-[10px] ${s.subtext}`}>{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Activity Timeline (hidden in recruiter mode) */}
        {isVisible('timeline') && (
          <div className={`${s.card} border ${s.border} rounded-3xl p-8 mb-8`}>
            <h2 className="flex items-center gap-2 text-lg font-bold mb-6"><Clock className="w-5 h-5 text-indigo-400" /> Activity Feed</h2>
            <div className="space-y-4">
              {timelineEvents.map((e, i) => (
                <div key={i} className="flex items-start gap-3 pl-4 border-l-2 border-indigo-500/30">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mt-1.5 -ml-[21px] shrink-0" />
                  <div>
                    <p className={`text-sm font-medium`}>{e.title}</p>
                    <p className={`text-xs ${s.subtext}`}>{e.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* AI Insights (hidden in recruiter mode) */}
        {isVisible('aiInsights') && (
          <div className="bg-gradient-to-br from-violet-600/20 to-indigo-600/10 border border-violet-500/20 rounded-3xl p-8 mb-8">
            <h2 className="flex items-center gap-2 text-lg font-bold mb-5"><Cpu className="w-5 h-5 text-violet-400" /> AI Career Insights</h2>
            <div className="space-y-3">
              {[
                "You completed 3 certifications this month — Career Score improved by 12 points.",
                "ATS resume score improved from 72% to 87%.",
                "Portfolio matches 91% of SOC Analyst job requirements.",
                "Recommended next certification: AWS Security Specialty.",
                "Completing 1 more project will unlock the 'Project Master' badge.",
              ].map((insight, i) => (
                <div key={i} className="flex items-start gap-3 text-sm">
                  <Zap className="w-4 h-4 text-violet-400 mt-0.5 shrink-0" />
                  <span className={s.subtext}>{insight}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Analytics (owner only) */}
        {isVisible('analytics') && <div className="mb-8"><AnalyticsPanel /></div>}

        {/* Footer */}
        <div className={`text-center py-8 text-xs ${s.subtext}`}>
          Built with <span className={s.accent}>LaunchWise</span> • Portfolio auto-updated from your career activity
        </div>
      </div>

      {/* Modals */}
      <ShareModal isOpen={shareOpen} onClose={() => setShareOpen(false)} url={PORTFOLIO_URL} name="P Ganesh Krishna Reddy" title="Cybersecurity Analyst & Full Stack Developer" />
      <ThemeSelector isOpen={themeOpen} onClose={() => setThemeOpen(false)} currentTheme={theme} onSelect={changeTheme} />
      <SectionControls isOpen={sectionsOpen} onClose={() => setSectionsOpen(false)} visibility={visibility} onToggle={toggle} />
    </div>
  );
}
