"use client";

import React, { useState } from 'react';
import { Calculator, Percent, TrendingUp } from 'lucide-react';

export default function ToolsPage() {
  const [activeTab, setActiveTab] = useState<'attendance' | 'cgpa' | 'predictor'>('attendance');

  // Attendance State
  const [attended, setAttended] = useState<number | ''>('');
  const [total, setTotal] = useState<number | ''>('');
  const [target, setTarget] = useState<number>(75);

  const calculateAttendance = () => {
    if (total === '' || total === 0) return 0;
    return ((Number(attended) / Number(total)) * 100).toFixed(1);
  };

  const currentPercent = calculateAttendance();
  const isHealthy = Number(currentPercent) >= target;

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">Student Success Tools</h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Everything you need to stay on track. Calculate your attendance, predict your grades, and manage your CGPA with ease.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full p-1.5 shadow-sm border border-slate-100 flex overflow-x-auto max-w-full">
            <button
              onClick={() => setActiveTab('attendance')}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-colors whitespace-nowrap ${
                activeTab === 'attendance' ? 'bg-[#5B4DFF] text-white' : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <Percent className="w-4 h-4" /> Attendance
            </button>
            <button
              onClick={() => setActiveTab('cgpa')}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-colors whitespace-nowrap ${
                activeTab === 'cgpa' ? 'bg-[#5B4DFF] text-white' : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <Calculator className="w-4 h-4" /> CGPA/SGPA
            </button>
            <button
              onClick={() => setActiveTab('predictor')}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-colors whitespace-nowrap ${
                activeTab === 'predictor' ? 'bg-[#5B4DFF] text-white' : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <TrendingUp className="w-4 h-4" /> Grade Predictor
            </button>
          </div>
        </div>

        {/* Calculator Card */}
        <div className="bg-white rounded-[2rem] shadow-xl shadow-slate-200/40 border border-slate-100 p-8 md:p-12">
          {activeTab === 'attendance' && (
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Inputs */}
              <div className="space-y-8">
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Attended Classes</label>
                  <input
                    type="number"
                    value={attended}
                    onChange={(e) => setAttended(e.target.value ? Number(e.target.value) : '')}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-lg font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#5B4DFF]/20 focus:border-[#5B4DFF]"
                    placeholder="0"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Total Classes</label>
                  <input
                    type="number"
                    value={total}
                    onChange={(e) => setTotal(e.target.value ? Number(e.target.value) : '')}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-lg font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#5B4DFF]/20 focus:border-[#5B4DFF]"
                    placeholder="0"
                  />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Target Percentage (%)</label>
                    <span className="text-sm font-bold text-[#5B4DFF]">{target}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={target}
                    onChange={(e) => setTarget(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#5B4DFF]"
                  />
                </div>
              </div>

              {/* Output */}
              <div className="bg-slate-50 rounded-[2rem] p-8 flex flex-col items-center justify-center h-full min-h-[250px] border border-slate-100">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Current Percentage</p>
                <h2 className={`text-6xl md:text-7xl font-black tracking-tighter ${isHealthy ? 'text-green-500' : 'text-red-500'}`}>
                  {currentPercent}%
                </h2>
                
                {Number(total) > 0 && !isHealthy && (
                  <p className="mt-6 text-sm font-medium text-slate-500 text-center max-w-xs">
                    You need to attend <span className="font-bold text-slate-700">{Math.ceil((target * Number(total) - 100 * Number(attended)) / (100 - target))}</span> more classes to reach {target}%.
                  </p>
                )}
                {Number(total) > 0 && isHealthy && (
                  <p className="mt-6 text-sm font-medium text-slate-500 text-center max-w-xs">
                    You can safely bunk <span className="font-bold text-slate-700">{Math.floor((100 * Number(attended) - target * Number(total)) / target)}</span> classes and stay above {target}%.
                  </p>
                )}
              </div>
            </div>
          )}

          {activeTab !== 'attendance' && (
            <div className="text-center py-20">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Coming Soon</h2>
              <p className="text-slate-500">We are currently building this tool. Check back soon!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
