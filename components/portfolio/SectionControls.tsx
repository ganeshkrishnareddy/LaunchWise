"use client";

import { useState, useEffect } from 'react';
import { X, Eye, EyeOff, GripVertical, Settings } from 'lucide-react';

const ALL_SECTIONS = [
  { key: 'recruiterSnapshot', label: 'Recruiter Snapshot', default: true },
  { key: 'quickStats', label: 'Quick Stats', default: true },
  { key: 'about', label: 'About Me', default: true },
  { key: 'skills', label: 'Skills', default: true },
  { key: 'projects', label: 'Featured Projects', default: true },
  { key: 'certifications', label: 'Certifications', default: true },
  { key: 'roadmaps', label: 'Career Roadmaps', default: true },
  { key: 'achievements', label: 'Achievements', default: true },
  { key: 'testimonials', label: 'Testimonials', default: true },
  { key: 'timeline', label: 'Activity Feed', default: true },
  { key: 'aiInsights', label: 'AI Career Insights', default: true },
  { key: 'analytics', label: 'Portfolio Analytics', default: false },
];

const STORAGE_KEY = 'launchwise_portfolio_sections';

export type SectionVisibility = Record<string, boolean>;

export function getDefaultVisibility(): SectionVisibility {
  return Object.fromEntries(ALL_SECTIONS.map(s => [s.key, s.default]));
}

export function useSectionVisibility() {
  const [visibility, setVisibility] = useState<SectionVisibility>(getDefaultVisibility());

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setVisibility({ ...getDefaultVisibility(), ...JSON.parse(saved) });
    } catch {}
  }, []);

  const toggle = (key: string) => {
    setVisibility(prev => {
      const next = { ...prev, [key]: !prev[key] };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  };

  return { visibility, toggle, ALL_SECTIONS };
}

interface SectionControlsProps {
  isOpen: boolean;
  onClose: () => void;
  visibility: SectionVisibility;
  onToggle: (key: string) => void;
}

export function SectionControls({ isOpen, onClose, visibility, onToggle }: SectionControlsProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      <div className="relative bg-[#18181b] border border-white/10 rounded-3xl w-full max-w-sm p-8 shadow-2xl max-h-[80vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors">
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <Settings className="w-8 h-8 text-blue-400 mx-auto mb-3" />
          <h3 className="text-xl font-bold text-white">Section Visibility</h3>
          <p className="text-sm text-zinc-400 mt-1">Toggle sections on your portfolio</p>
        </div>

        <div className="space-y-2">
          {ALL_SECTIONS.map((section) => (
            <button
              key={section.key}
              onClick={() => onToggle(section.key)}
              className={`w-full flex items-center gap-3 p-3.5 rounded-xl border transition-all ${visibility[section.key] ? 'border-green-500/30 bg-green-500/10' : 'border-white/10 bg-white/5 opacity-60'}`}
            >
              {visibility[section.key] ? (
                <Eye className="w-4 h-4 text-green-400 shrink-0" />
              ) : (
                <EyeOff className="w-4 h-4 text-zinc-500 shrink-0" />
              )}
              <span className="text-sm font-semibold text-white flex-1 text-left">{section.label}</span>
              <div className={`w-10 h-5 rounded-full p-0.5 transition-colors ${visibility[section.key] ? 'bg-green-500' : 'bg-zinc-700'}`}>
                <div className={`w-4 h-4 bg-white rounded-full transition-transform ${visibility[section.key] ? 'translate-x-5' : ''}`} />
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
