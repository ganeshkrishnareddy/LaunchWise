"use client";

import { useEffect, useState } from 'react';
import { Briefcase, MapPin, Clock } from 'lucide-react';
import { getAppliedJobs } from '@/lib/activityTracker';

export function JobsTrackerTab() {
  const [appliedJobs, setAppliedJobs] = useState<string[]>([]);

  useEffect(() => {
    setAppliedJobs(getAppliedJobs());
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-bold text-slate-900 mb-1">Jobs Tracker</h3>
        <p className="text-sm text-slate-500">Jobs you've applied to across LaunchWise.</p>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 p-5 text-center">
        <p className="text-4xl font-black text-blue-700">{appliedJobs.length}</p>
        <p className="text-xs font-medium text-blue-600 mt-1">Total Applications</p>
      </div>

      {appliedJobs.length > 0 ? (
        <div className="space-y-3">
          {appliedJobs.map((job, i) => (
            <div key={i} className="flex items-center gap-4 bg-white rounded-2xl border border-slate-200 p-4">
              <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                <Briefcase className="w-5 h-5 text-blue-600" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-slate-900 text-sm truncate">{job}</h4>
                <p className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                  <Clock className="w-3 h-3" /> Applied via LaunchWise
                </p>
              </div>
              <span className="px-3 py-1.5 rounded-lg border text-xs font-bold bg-blue-50 border-blue-200 text-blue-700 shrink-0">
                Applied
              </span>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-slate-50 border border-slate-200 border-dashed rounded-2xl p-10 text-center">
          <Briefcase className="w-10 h-10 text-slate-300 mx-auto mb-3" />
          <h4 className="font-bold text-slate-700 mb-1">No applications yet</h4>
          <p className="text-sm text-slate-400">When you click "Apply" on any job listing, it will be tracked here automatically.</p>
        </div>
      )}
    </div>
  );
}
