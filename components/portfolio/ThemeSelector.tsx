"use client";

import { useState, useEffect } from 'react';
import { Palette, X, Check } from 'lucide-react';

const THEMES = [
  { key: 'dark', name: 'Dark', bg: '#09090b', card: '#18181b', text: '#ffffff', accent: '#6366f1' },
  { key: 'minimal', name: 'Minimal', bg: '#fafafa', card: '#ffffff', text: '#0f172a', accent: '#3b82f6' },
  { key: 'developer', name: 'Developer', bg: '#0d1117', card: '#161b22', text: '#c9d1d9', accent: '#58a6ff' },
  { key: 'glass', name: 'Glass', bg: '#0f0f23', card: 'rgba(255,255,255,0.05)', text: '#e2e8f0', accent: '#a78bfa' },
  { key: 'cyber', name: 'Cyber', bg: '#0a0a0a', card: '#111111', text: '#00ff88', accent: '#00ff88' },
];

const STORAGE_KEY = 'launchwise_portfolio_theme';

export function usePortfolioTheme() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) setTheme(saved);
  }, []);

  const changeTheme = (key: string) => {
    setTheme(key);
    localStorage.setItem(STORAGE_KEY, key);
  };

  const config = THEMES.find(t => t.key === theme) || THEMES[0];

  return { theme, changeTheme, config, THEMES };
}

interface ThemeSelectorProps {
  isOpen: boolean;
  onClose: () => void;
  currentTheme: string;
  onSelect: (key: string) => void;
}

export function ThemeSelector({ isOpen, onClose, currentTheme, onSelect }: ThemeSelectorProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      <div className="relative bg-[#18181b] border border-white/10 rounded-3xl w-full max-w-sm p-8 shadow-2xl" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors">
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <Palette className="w-8 h-8 text-purple-400 mx-auto mb-3" />
          <h3 className="text-xl font-bold text-white">Choose Theme</h3>
          <p className="text-sm text-zinc-400 mt-1">Pick a style for your portfolio</p>
        </div>

        <div className="space-y-3">
          {THEMES.map((t) => (
            <button
              key={t.key}
              onClick={() => { onSelect(t.key); onClose(); }}
              className={`w-full flex items-center gap-4 p-4 rounded-xl border transition-all ${currentTheme === t.key ? 'border-brand-500 bg-brand-500/10' : 'border-white/10 hover:border-white/20 bg-white/5'}`}
            >
              {/* Color Preview */}
              <div className="flex gap-1 shrink-0">
                <div className="w-5 h-5 rounded-full border border-white/20" style={{ backgroundColor: t.bg }} />
                <div className="w-5 h-5 rounded-full border border-white/20" style={{ backgroundColor: t.card }} />
                <div className="w-5 h-5 rounded-full border border-white/20" style={{ backgroundColor: t.accent }} />
              </div>
              <span className="text-sm font-bold text-white flex-1 text-left">{t.name}</span>
              {currentTheme === t.key && <Check className="w-4 h-4 text-brand-400 shrink-0" />}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
