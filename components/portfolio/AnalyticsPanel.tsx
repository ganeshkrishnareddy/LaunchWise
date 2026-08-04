"use client";

import { useEffect, useState } from 'react';
import { Eye, Download, MousePointer, GitBranch, TrendingUp, Users } from 'lucide-react';

const ANALYTICS_KEY = 'launchwise_portfolio_analytics';

interface Analytics {
  views: number;
  resumeDownloads: number;
  contactClicks: number;
  githubClicks: number;
  linkedinClicks: number;
  projectClicks: number;
  qrScans: number;
}

const DEFAULT_ANALYTICS: Analytics = {
  views: 0,
  resumeDownloads: 0,
  contactClicks: 0,
  githubClicks: 0,
  linkedinClicks: 0,
  projectClicks: 0,
  qrScans: 0,
};

export function getAnalytics(): Analytics {
  if (typeof window === 'undefined') return DEFAULT_ANALYTICS;
  try {
    const raw = localStorage.getItem(ANALYTICS_KEY);
    return raw ? { ...DEFAULT_ANALYTICS, ...JSON.parse(raw) } : DEFAULT_ANALYTICS;
  } catch {
    return DEFAULT_ANALYTICS;
  }
}

export function trackPortfolioEvent(key: keyof Analytics) {
  if (typeof window === 'undefined') return;
  const analytics = getAnalytics();
  analytics[key] = (analytics[key] || 0) + 1;
  localStorage.setItem(ANALYTICS_KEY, JSON.stringify(analytics));
}

export function AnalyticsPanel() {
  const [analytics, setAnalytics] = useState<Analytics>(DEFAULT_ANALYTICS);

  useEffect(() => {
    setAnalytics(getAnalytics());
    // Count this page view
    trackPortfolioEvent('views');
  }, []);

  const cards = [
    { label: 'Portfolio Views', value: analytics.views, icon: Eye, color: 'text-blue-400', bg: 'bg-blue-500/10' },
    { label: 'Resume Downloads', value: analytics.resumeDownloads, icon: Download, color: 'text-green-400', bg: 'bg-green-500/10' },
    { label: 'Contact Clicks', value: analytics.contactClicks, icon: MousePointer, color: 'text-purple-400', bg: 'bg-purple-500/10' },
    { label: 'GitHub Clicks', value: analytics.githubClicks, icon: GitBranch, color: 'text-orange-400', bg: 'bg-orange-500/10' },
    { label: 'LinkedIn Clicks', value: analytics.linkedinClicks, icon: Users, color: 'text-cyan-400', bg: 'bg-cyan-500/10' },
    { label: 'Project Clicks', value: analytics.projectClicks, icon: TrendingUp, color: 'text-rose-400', bg: 'bg-rose-500/10' },
  ];

  return (
    <div className="bg-[#18181b] border border-white/10 rounded-3xl p-8">
      <div className="flex items-center gap-2 mb-6">
        <TrendingUp className="w-5 h-5 text-indigo-400" />
        <h2 className="text-lg font-bold">Portfolio Analytics <span className="text-xs font-normal text-zinc-500 ml-1">(Owner Only)</span></h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {cards.map((c, i) => (
          <div key={i} className={`${c.bg} rounded-2xl p-4 border border-white/5`}>
            <c.icon className={`w-5 h-5 ${c.color} mb-2`} />
            <p className="text-2xl font-black text-white">{c.value}</p>
            <p className="text-xs text-zinc-400 mt-0.5">{c.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
