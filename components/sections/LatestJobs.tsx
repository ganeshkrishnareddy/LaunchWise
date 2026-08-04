'use client';

import Link from 'next/link';
import { jobs } from '@/data/jobs';
import { ArrowRight, Briefcase, MapPin, ExternalLink } from 'lucide-react';
import { useUser } from '@clerk/nextjs';
import { activityService } from '@/lib/db';

export function LatestJobs() {
    const { user } = useUser();
    // Get top 3 latest jobs
    const latestJobs = jobs.slice(0, 3);

    const handleApplyClick = async (job: any) => {
        if (!user) return;
        try {
            await activityService.logActivity({
                uid: user.id,
                email: user.emailAddresses[0]?.emailAddress || '',
                fullName: user.fullName || user.username || 'Anonymous User',
                photoURL: user.imageUrl,
                type: 'job_apply',
                details: `Applied for ${job.role} at ${job.company}`
            });
        } catch (error) {
            console.error("Error logging application activity from homepage:", error);
        }
    };

    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
                            Latest Job Opportunities
                        </h2>
                        <p className="text-slate-600 max-w-2xl text-lg">
                            We track the best entry-level roles across tech giants and promising startups. Updated daily.
                        </p>
                    </div>
                    <Link 
                        href="/jobs" 
                        className="group flex items-center text-brand-600 font-bold hover:text-brand-700 transition-colors"
                    >
                        View all {jobs.length}+ jobs
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {latestJobs.map((job) => (
                        <div key={job.id} className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col h-full">
                            <div className="flex justify-between items-start mb-6">
                                <div className="bg-brand-50 p-3 rounded-2xl">
                                    <Briefcase className="h-6 w-6 text-brand-600" />
                                </div>
                                {job.isFresher && (
                                    <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                                        Fresher
                                    </span>
                                )}
                            </div>
                            
                            <h3 className="text-xl font-bold text-slate-900 mb-2 line-clamp-1">{job.role}</h3>
                            <p className="text-brand-600 font-semibold mb-4">{job.company}</p>
                            
                            <div className="flex items-center text-slate-500 text-sm mb-6 mt-auto">
                                <MapPin className="h-4 w-4 mr-1.5 flex-shrink-0" />
                                <span className="line-clamp-1">{job.location}</span>
                            </div>

                            <a
                                href={job.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => handleApplyClick(job)}
                                className="w-full inline-flex items-center justify-center px-6 py-3 border border-slate-200 text-sm font-bold rounded-xl text-slate-900 bg-white hover:bg-slate-50 transition-all group cursor-pointer"
                            >
                                Apply Now
                                <ExternalLink className="ml-2 h-4 w-4 text-slate-400 group-hover:text-brand-600" />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
