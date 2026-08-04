"use client";

// Utility to track user activity across LaunchWise using localStorage

export interface ActivityEvent {
  action: string;
  type: 'job' | 'perk' | 'roadmap' | 'cert' | 'project' | 'resume' | 'mentorship' | 'resource';
  timestamp: string;
  meta?: Record<string, string>;
}

const STORAGE_KEY = 'launchwise_activity';
const STATS_KEY = 'launchwise_stats';

// Default stats structure
const DEFAULT_STATS = {
  jobsApplied: 0,
  perksViewed: 0,
  perksClaimed: 0,
  roadmapsStarted: 0,
  roadmapsCompleted: 0,
  projectsCompleted: 0,
  certsCompleted: 0,
  resourcesViewed: 0,
  resumeDownloads: 0,
  mentorshipSessions: 0,
  totalSavings: 0,
  portfolioViews: 0,
};

export type UserStats = typeof DEFAULT_STATS;

export function getStats(): UserStats {
  if (typeof window === 'undefined') return DEFAULT_STATS;
  try {
    const raw = localStorage.getItem(STATS_KEY);
    return raw ? { ...DEFAULT_STATS, ...JSON.parse(raw) } : DEFAULT_STATS;
  } catch {
    return DEFAULT_STATS;
  }
}

export function updateStat(key: keyof UserStats, increment: number = 1) {
  if (typeof window === 'undefined') return;
  const stats = getStats();
  stats[key] = (stats[key] || 0) + increment;
  localStorage.setItem(STATS_KEY, JSON.stringify(stats));
}

export function getActivity(): ActivityEvent[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function trackActivity(event: Omit<ActivityEvent, 'timestamp'>) {
  if (typeof window === 'undefined') return;
  const activity = getActivity();
  activity.unshift({ ...event, timestamp: new Date().toISOString() });
  // Keep only last 50 events
  localStorage.setItem(STORAGE_KEY, JSON.stringify(activity.slice(0, 50)));
}

export function getClaimedPerks(): string[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem('launchwise_claimed_perks');
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function claimPerk(perkId: string) {
  if (typeof window === 'undefined') return;
  const claimed = getClaimedPerks();
  if (!claimed.includes(perkId)) {
    claimed.push(perkId);
    localStorage.setItem('launchwise_claimed_perks', JSON.stringify(claimed));
    updateStat('perksClaimed');
    trackActivity({ action: `Claimed a student perk`, type: 'perk' });
  }
}

export function getAppliedJobs(): string[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem('launchwise_applied_jobs');
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function applyToJob(jobTitle: string) {
  if (typeof window === 'undefined') return;
  const applied = getAppliedJobs();
  if (!applied.includes(jobTitle)) {
    applied.push(jobTitle);
    localStorage.setItem('launchwise_applied_jobs', JSON.stringify(applied));
    updateStat('jobsApplied');
    trackActivity({ action: `Applied to ${jobTitle}`, type: 'job' });
  }
}

export function getSavedPerks(): string[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem('launchwise_saved_perks');
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function savePerk(perkId: string) {
  if (typeof window === 'undefined') return;
  const saved = getSavedPerks();
  if (!saved.includes(perkId)) {
    saved.push(perkId);
  } else {
    saved.splice(saved.indexOf(perkId), 1);
  }
  localStorage.setItem('launchwise_saved_perks', JSON.stringify(saved));
}

// Format time ago
export function timeAgo(timestamp: string): string {
  const diff = Date.now() - new Date(timestamp).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return 'Just now';
  if (mins < 60) return `${mins}m ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 7) return `${days}d ago`;
  return `${Math.floor(days / 7)}w ago`;
}
