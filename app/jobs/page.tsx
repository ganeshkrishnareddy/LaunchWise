"use client";

import React, { useState } from 'react';
import { JobFilters } from '@/components/jobs/JobFilters';
import { JobsGrid } from '@/components/jobs/JobsGrid';
import { Briefcase, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

export default function JobsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 93;
  const totalJobs = 1105;

  return (
    <div className="min-h-screen bg-slate-50/50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
            Live Job Opportunities
          </h1>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Direct apply links for the latest roles in Data, Software, and Analytics—freshly updated from our verified sources.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="bg-indigo-50 text-indigo-700 font-semibold px-5 py-2.5 rounded-full flex items-center gap-2 text-sm border border-indigo-100">
              <Briefcase className="w-4 h-4" />
              Showing 1105 active job openings
            </div>
            <button className="bg-indigo-50 text-indigo-700 font-semibold px-5 py-2.5 rounded-full flex items-center gap-2 text-sm border border-indigo-100 hover:bg-indigo-100 transition-colors">
              Request a Referral <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Filters */}
        <JobFilters />

        {/* Grid */}
        <JobsGrid />

        {/* Pagination */}
        <div className="mt-16 flex flex-col items-center justify-center gap-4">
          <p className="text-sm font-medium text-slate-500">
            Showing <span className="font-bold text-slate-700">{(currentPage - 1) * 12 + 1}-{Math.min(currentPage * 12, totalJobs)}</span> of <span className="font-bold text-slate-700">{totalJobs}</span> results
          </p>
          <div className="flex items-center gap-1">
            <button 
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors disabled:opacity-50"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            
            <button 
              onClick={() => setCurrentPage(1)}
              className={`w-8 h-8 flex items-center justify-center rounded-lg font-medium transition-colors ${currentPage === 1 ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-600 hover:bg-slate-100'}`}
            >
              1
            </button>
            
            {currentPage > 2 && (
              <span className="w-8 h-8 flex items-center justify-center text-slate-400">...</span>
            )}

            {currentPage !== 1 && currentPage !== totalPages && (
               <button 
                className="w-8 h-8 flex items-center justify-center rounded-lg bg-indigo-600 text-white font-bold shadow-sm"
               >
                 {currentPage}
               </button>
            )}

            {currentPage < totalPages - 1 && (
              <span className="w-8 h-8 flex items-center justify-center text-slate-400">...</span>
            )}

            <button 
              onClick={() => setCurrentPage(totalPages)}
              className={`w-8 h-8 flex items-center justify-center rounded-lg font-medium transition-colors ${currentPage === totalPages ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-600 hover:bg-slate-100'}`}
            >
              {totalPages}
            </button>
            
            <button 
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors disabled:opacity-50"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
