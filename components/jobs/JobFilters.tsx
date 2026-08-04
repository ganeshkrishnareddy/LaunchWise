"use client";

import React, { useState } from 'react';
import { Search, Filter, MapPin } from 'lucide-react';

export function JobFilters() {
  const [isRemote, setIsRemote] = useState(false);
  const [isFresher, setIsFresher] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 mb-8">
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        {/* Search */}
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search by role, company, or location..." 
            className="w-full pl-9 pr-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all text-sm"
          />
        </div>
        
        {/* Companies Dropdown */}
        <div className="w-full md:w-56 relative">
          <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <select className="w-full pl-9 pr-8 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all text-sm appearance-none bg-white text-slate-700">
            <option>All Companies</option>
            <option>Stripe</option>
            <option>Vercel</option>
          </select>
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </div>
        </div>

        {/* Locations Dropdown */}
        <div className="w-full md:w-56 relative">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <select className="w-full pl-9 pr-8 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all text-sm appearance-none bg-white text-slate-700">
            <option>All Locations</option>
            <option>Remote</option>
            <option>San Francisco</option>
            <option>Bengaluru</option>
          </select>
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-6 items-center pt-2 border-t border-slate-100">
        <label className="flex items-center gap-2 cursor-pointer select-none group">
          <div className={`w-10 h-5 rounded-full p-1 transition-colors ${isRemote ? 'bg-brand-600' : 'bg-slate-200 group-hover:bg-slate-300'}`} onClick={() => setIsRemote(!isRemote)}>
            <div className={`w-3 h-3 bg-white rounded-full transition-transform ${isRemote ? 'translate-x-5' : 'translate-x-0'}`} />
          </div>
          <span className="text-sm font-semibold text-slate-700">Remote Roles Only</span>
        </label>
        
        <label className="flex items-center gap-2 cursor-pointer select-none group">
          <div className={`w-10 h-5 rounded-full p-1 transition-colors ${isFresher ? 'bg-brand-600' : 'bg-slate-200 group-hover:bg-slate-300'}`} onClick={() => setIsFresher(!isFresher)}>
            <div className={`w-3 h-3 bg-white rounded-full transition-transform ${isFresher ? 'translate-x-5' : 'translate-x-0'}`} />
          </div>
          <span className="text-sm font-semibold text-slate-700">Fresher / Entry-Level</span>
        </label>
      </div>
    </div>
  );
}
