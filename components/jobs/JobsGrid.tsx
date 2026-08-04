"use client";

import React from 'react';
import { JobCard } from './JobCard';
import jobsData from '@/data/jobs.json';

export function JobsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {jobsData.map((job, i) => (
        <JobCard key={i} job={job} />
      ))}
    </div>
  );
}
