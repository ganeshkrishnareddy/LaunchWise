import React from 'react';
import { MapPin, DollarSign, ExternalLink } from 'lucide-react';
import { CompanyLogo } from '@/components/ui/CompanyLogo';

interface JobCardProps {
  job: {
    title: string;
    company: string;
    badge: string;
    location: string;
    salary: string;
    description: string;
    logo?: string;
    applyUrl: string;
  };
}

export function JobCard({ job }: JobCardProps) {
  return (
    <div className="bg-white rounded-[24px] shadow-sm border border-slate-100 p-6 flex flex-col hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div className="w-12 h-12 bg-indigo-50/50 rounded-xl flex items-center justify-center overflow-hidden border border-indigo-100/50">
          <CompanyLogo 
            company={job.company} 
            fallbackUrl={job.logo} 
            className="w-7 h-7 object-contain mix-blend-multiply" 
          />
        </div>
        <div className="bg-slate-50 text-slate-500 text-[10px] font-bold px-3 py-1 rounded-full tracking-wider border border-slate-200">
          JOIN NOW
        </div>
      </div>
      
      <div className="mb-4 flex-1">
        <h3 className="font-bold text-lg text-slate-900 mb-1 leading-tight">{job.title}</h3>
        <div className="flex items-center gap-2 mb-4">
          <span className="text-sm font-medium text-slate-500">{job.company}</span>
          {job.badge && (
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
              job.badge === 'Fresher' 
                ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' 
                : 'bg-blue-50 text-blue-600 border border-blue-100'
            }`}>
              {job.badge}
            </span>
          )}
        </div>

        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
            <MapPin className="w-3.5 h-3.5" />
            {job.location}
          </div>
          <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
            <DollarSign className="w-3.5 h-3.5" />
            {job.salary}
          </div>
        </div>

        <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">
          {job.description}
        </p>
      </div>

      <a 
        href={job.applyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full mt-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm py-2.5 rounded-xl flex items-center justify-center gap-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
      >
        Apply Now <ExternalLink className="w-4 h-4" />
      </a>
    </div>
  );
}
