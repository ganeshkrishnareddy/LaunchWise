"use client";

import { useEffect, useState } from 'react';
import { Briefcase, BookOpen, Award, TrendingUp, Zap, Gift, FileText, Target, Clock, Star } from 'lucide-react';
import { getStats, getActivity, getClaimedPerks, getAppliedJobs, timeAgo, type UserStats, type ActivityEvent } from '@/lib/activityTracker';

export function OverviewTab() {
  const [stats, setStats] = useState<UserStats | null>(null);
  const [activity, setActivity] = useState<ActivityEvent[]>([]);
  const [claimedCount, setClaimedCount] = useState(0);
  const [appliedCount, setAppliedCount] = useState(0);

  useEffect(() => {
    setStats(getStats());
    setActivity(getActivity());
    setClaimedCount(getClaimedPerks().length);
    setAppliedCount(getAppliedJobs().length);
  }, []);

  if (!stats) return <div className="text-center py-20 text-slate-400">Loading your dashboard...</div>;

  const statCards = [
    { label: "Jobs Applied", value: appliedCount.toString(), icon: Briefcase, color: "text-blue-600", bg: "bg-blue-50" },
    { label: "Perks Claimed", value: claimedCount.toString(), icon: Gift, color: "text-green-600", bg: "bg-green-50" },
    { label: "Perks Viewed", value: stats.perksViewed.toString(), icon: Target, color: "text-purple-600", bg: "bg-purple-50" },
    { label: "Roadmaps Started", value: stats.roadmapsStarted.toString(), icon: BookOpen, color: "text-indigo-600", bg: "bg-indigo-50" },
    { label: "Resources Viewed", value: stats.resourcesViewed.toString(), icon: FileText, color: "text-cyan-600", bg: "bg-cyan-50" },
    { label: "Resume Downloads", value: stats.resumeDownloads.toString(), icon: FileText, color: "text-amber-600", bg: "bg-amber-50" },
    { label: "Certifications", value: stats.certsCompleted.toString(), icon: Award, color: "text-rose-600", bg: "bg-rose-50" },
    { label: "Total Savings", value: `$${stats.totalSavings}`, icon: TrendingUp, color: "text-emerald-600", bg: "bg-emerald-50" },
  ];

  const hasActivity = activity.length > 0;
  const hasAnyStats = Object.values(stats).some(v => v > 0) || claimedCount > 0 || appliedCount > 0;

  return (
    <div className="space-y-8">
      {/* Quick Stats */}
      <div>
        <h3 className="text-lg font-bold text-slate-900 mb-4">Your Stats</h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {statCards.map((s, i) => (
            <div key={i} className="bg-white rounded-2xl border border-slate-200 p-5 hover:shadow-lg transition-shadow">
              <div className={`w-10 h-10 ${s.bg} rounded-xl flex items-center justify-center mb-3`}>
                <s.icon className={`w-5 h-5 ${s.color}`} />
              </div>
              <p className="text-2xl font-black text-slate-900">{s.value}</p>
              <p className="text-xs font-medium text-slate-500 mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {!hasAnyStats && (
        <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-8 text-center">
          <Zap className="w-10 h-10 text-indigo-400 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-indigo-900 mb-2">Start Your Journey!</h3>
          <p className="text-sm text-indigo-700 max-w-md mx-auto">
            Your dashboard tracks everything you do on LaunchWise. Apply for jobs, claim student perks, start roadmaps — and all your progress will appear here automatically.
          </p>
        </div>
      )}

      {/* Activity Timeline */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6">
        <div className="flex items-center gap-2 mb-5">
          <Clock className="w-5 h-5 text-slate-500" />
          <h3 className="text-lg font-bold text-slate-900">Recent Activity</h3>
        </div>
        {hasActivity ? (
          <div className="space-y-4">
            {activity.slice(0, 15).map((a, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className={`w-2 h-2 rounded-full mt-2 shrink-0 ${
                  a.type === 'job' ? 'bg-blue-500' :
                  a.type === 'perk' ? 'bg-green-500' :
                  a.type === 'roadmap' ? 'bg-purple-500' :
                  a.type === 'cert' ? 'bg-amber-500' :
                  'bg-indigo-500'
                }`} />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-slate-700">{a.action}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{timeAgo(a.timestamp)}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 text-slate-400">
            <p className="text-sm">No activity yet. Start exploring LaunchWise!</p>
          </div>
        )}
      </div>
    </div>
  );
}
