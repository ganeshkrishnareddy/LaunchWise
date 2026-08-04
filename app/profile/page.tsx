"use client";

import { useState } from 'react';
import { useUser } from '@clerk/nextjs';
import {
  LayoutDashboard, Briefcase, Gift, BookOpen, Users, FileText, Settings,
  Zap, Flame, Trophy, ChevronRight, Menu, X
} from 'lucide-react';

import { OverviewTab } from '@/components/profile/OverviewTab';
import { JobsTrackerTab } from '@/components/profile/JobsTrackerTab';
import { PerksTrackerTab } from '@/components/profile/PerksTrackerTab';
import { LearningTab } from '@/components/profile/LearningTab';
import { MentorshipTab } from '@/components/profile/MentorshipTab';
import { ResumeProjectsTab } from '@/components/profile/ResumeProjectsTab';

const tabs = [
  { key: 'overview', label: 'Overview', icon: LayoutDashboard },
  { key: 'jobs', label: 'Jobs Tracker', icon: Briefcase },
  { key: 'perks', label: 'Perks Tracker', icon: Gift },
  { key: 'learning', label: 'Learning', icon: BookOpen },
  { key: 'mentorship', label: 'Mentorship', icon: Users },
  { key: 'resume', label: 'Resume & Projects', icon: FileText },
  { key: 'settings', label: 'Settings', icon: Settings },
];

export default function ProfilePage() {
  const { user, isLoaded } = useUser();
  const [activeTab, setActiveTab] = useState('overview');
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const userName = user?.fullName || 'Ganesh Krishna Reddy';
  const userEmail = user?.emailAddresses?.[0]?.emailAddress || 'ganesh@university.edu';
  const userAvatar = user?.imageUrl || 'https://randomuser.me/api/portraits/men/32.jpg';

  const renderTab = () => {
    switch (activeTab) {
      case 'overview': return <OverviewTab />;
      case 'jobs': return <JobsTrackerTab />;
      case 'perks': return <PerksTrackerTab />;
      case 'learning': return <LearningTab />;
      case 'mentorship': return <MentorshipTab />;
      case 'resume': return <ResumeProjectsTab />;
      case 'settings': return (
        <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center">
          <Settings className="w-12 h-12 text-slate-300 mx-auto mb-4" />
          <h3 className="text-lg font-bold text-slate-900 mb-2">Settings</h3>
          <p className="text-sm text-slate-500">Profile settings, privacy, notifications, and connected accounts coming soon.</p>
        </div>
      );
      default: return <OverviewTab />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Top Header Bar */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <img
              src={userAvatar}
              alt={userName}
              className="w-20 h-20 rounded-2xl object-cover border-2 border-white/20 shadow-xl"
            />
            <div className="flex-1 min-w-0">
              <h1 className="text-2xl sm:text-3xl font-black tracking-tight">{userName}</h1>
              <p className="text-indigo-300 text-sm mt-1">B.Tech CSE • Lovely Professional University • Class of 2027</p>
              <div className="flex items-center gap-2 mt-2">
                <span className="px-2.5 py-1 bg-white/10 rounded-lg text-xs font-bold">Full Stack Developer</span>
                <span className="px-2.5 py-1 bg-white/10 rounded-lg text-xs font-bold">AI Enthusiast</span>
              </div>
            </div>

            {/* Stats Pills */}
            <div className="flex flex-wrap gap-3 shrink-0">
              <div className="flex items-center gap-2 bg-white/10 rounded-xl px-4 py-2.5">
                <Zap className="w-4 h-4 text-amber-400" />
                <div>
                  <p className="text-lg font-black leading-none">12,480</p>
                  <p className="text-[10px] text-indigo-300 font-medium">XP</p>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-xl px-4 py-2.5">
                <Trophy className="w-4 h-4 text-purple-400" />
                <div>
                  <p className="text-lg font-black leading-none">Lvl 18</p>
                  <p className="text-[10px] text-indigo-300 font-medium">Level</p>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-xl px-4 py-2.5">
                <Flame className="w-4 h-4 text-orange-400" />
                <div>
                  <p className="text-lg font-black leading-none">17</p>
                  <p className="text-[10px] text-indigo-300 font-medium">Day Streak</p>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Completion Bar */}
          <div className="mt-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-indigo-300">Profile Completion</span>
              <span className="text-xs font-black text-white">94%</span>
            </div>
            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full" style={{ width: '94%' }} />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 mt-5">
            <button
              onClick={() => setActiveTab('settings')}
              className="flex items-center gap-2 px-4 py-2.5 bg-white text-slate-900 rounded-xl text-sm font-bold hover:bg-white/90 transition-colors shadow-lg"
            >
              ✏️ Edit Profile
            </button>
            <a
              href="/portfolio"
              className="flex items-center gap-2 px-4 py-2.5 bg-white/10 border border-white/20 text-white rounded-xl text-sm font-bold hover:bg-white/20 transition-colors"
            >
              🌐 View Portfolio
            </a>
            <a
              href="/portfolio"
              className="flex items-center gap-2 px-4 py-2.5 bg-indigo-500/20 border border-indigo-500/30 text-indigo-200 rounded-xl text-sm font-bold hover:bg-indigo-500/30 transition-colors"
            >
              🎨 Customize Portfolio
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-60 shrink-0">
            <nav className="sticky top-24 space-y-1">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.key;
                return (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                      isActive
                        ? 'bg-white text-indigo-700 shadow-md border border-slate-200'
                        : 'text-slate-600 hover:bg-white hover:shadow-sm hover:text-slate-900'
                    }`}
                  >
                    <Icon className={`w-4.5 h-4.5 ${isActive ? 'text-indigo-600' : 'text-slate-400'}`} />
                    {tab.label}
                    {isActive && <ChevronRight className="w-4 h-4 ml-auto text-indigo-400" />}
                  </button>
                );
              })}
            </nav>
          </aside>

          {/* Mobile Tab Switcher */}
          <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 px-2 py-2 flex gap-1 overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`flex flex-col items-center gap-0.5 px-3 py-2 rounded-xl text-[10px] font-bold shrink-0 transition-colors ${
                    isActive ? 'bg-indigo-50 text-indigo-700' : 'text-slate-500'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {tab.label.split(' ')[0]}
                </button>
              );
            })}
          </div>

          {/* Main Content Area */}
          <main className="flex-1 min-w-0 pb-24 lg:pb-0">
            {renderTab()}
          </main>
        </div>
      </div>
    </div>
  );
}
