'use client';

import React, { useState, useEffect } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CheckCircle2, ArrowLeft, ExternalLink, GraduationCap, ShieldCheck, Check, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { useUser } from '@clerk/nextjs';
import { userService } from '@/lib/db';

interface Props {
    roadmap: any;
}

export function RoadmapContent({ roadmap }: Props) {
    const { user, isLoaded } = useUser();
    const [completedIds, setCompletedIds] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);

    // Fetch user progress on load
    useEffect(() => {
        const fetchProgress = async () => {
            if (!isLoaded || !user) {
                setLoading(false);
                return;
            }
            try {
                const profile = await userService.getUser(user.id);
                if (profile && profile.completedMilestones && profile.completedMilestones[roadmap.id]) {
                    setCompletedIds(profile.completedMilestones[roadmap.id]);
                }
            } catch (error) {
                console.error("Error fetching milestone progress:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProgress();
    }, [user, isLoaded, roadmap.id]);

    const handleToggleMilestone = async (milestoneId: string, milestoneTitle: string) => {
        if (!user) {
            alert("Please sign in or get started to track your progress and earn XP!");
            return;
        }
        
        // Optimistic UI update
        const isCompleted = completedIds.includes(milestoneId);
        let updatedList: string[];
        if (isCompleted) {
            updatedList = completedIds.filter(id => id !== milestoneId);
        } else {
            updatedList = [...completedIds, milestoneId];
        }
        setCompletedIds(updatedList);

        try {
            const serverList = await userService.toggleMilestone(user.id, roadmap.id, milestoneId, milestoneTitle);
            setCompletedIds(serverList);
        } catch (error) {
            console.error("Failed to update progress in Firestore:", error);
            // Revert back if it failed
            setCompletedIds(completedIds);
        }
    };

    const totalMilestones = roadmap.milestones.length;
    const completedCount = completedIds.length;
    const progressPercent = totalMilestones > 0 ? Math.round((completedCount / totalMilestones) * 100) : 0;

    return (
        <div className="min-h-screen flex flex-col bg-slate-50">
            

            <main className="flex-grow pt-24 pb-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Back Button */}
                    <Link
                        href="/roadmaps"
                        className="inline-flex items-center text-slate-500 hover:text-brand-600 mb-8 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Roadmaps
                    </Link>

                    {/* Header */}
                    <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm mb-8">
                        <div className="flex items-start md:items-center justify-between mb-6 flex-col md:flex-row gap-4">
                            <div>
                                <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
                                    {roadmap.title}
                                </h1>
                                <p className="text-lg text-slate-600">
                                    {roadmap.description}
                                </p>
                            </div>
                            <div className={`${roadmap.color.replace('text-', 'bg-').replace('50', '100')} px-4 py-2 rounded-lg`}>
                                <span className="font-semibold text-brand-900">
                                    Goal: {roadmap.goal}
                                </span>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4 text-sm">
                            <div className="flex items-center text-slate-600 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-100">
                                <GraduationCap className="w-4 h-4 mr-2 text-brand-600" />
                                Student Friendly
                            </div>
                            <div className="flex items-center text-slate-600 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-100">
                                <ShieldCheck className="w-4 h-4 mr-2 text-green-600" />
                                Verified Resources
                            </div>
                            <div className="flex items-center text-slate-600 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-100">
                                <CheckCircle2 className="w-4 h-4 mr-2 text-blue-600" />
                                Free & Official
                            </div>
                        </div>
                    </div>

                    {/* Progress Bar (Visible when signed in) */}
                    {user && (
                        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm mb-10">
                            <div className="flex justify-between items-center mb-3">
                                <div className="flex items-center gap-2">
                                    <Sparkles className="w-5 h-5 text-indigo-500 animate-pulse" />
                                    <span className="font-bold text-slate-800">Your Learning Progress</span>
                                </div>
                                <span className="text-sm font-semibold text-slate-600">
                                    {completedCount} of {totalMilestones} Completed ({progressPercent}%)
                                </span>
                            </div>
                            <div className="w-full bg-slate-100 h-3.5 rounded-full overflow-hidden border border-slate-200">
                                <div 
                                    className="bg-gradient-to-r from-blue-500 to-indigo-600 h-full rounded-full transition-all duration-500 ease-out"
                                    style={{ width: `${progressPercent}%` }}
                                ></div>
                            </div>
                            <p className="text-xs text-slate-400 mt-2.5">
                                Tip: Click the numbers or checkmarks next to each milestone to toggle completion and earn <strong>+15 XP</strong>!
                            </p>
                        </div>
                    )}

                    {/* Milestones / Timeline */}
                    <div className="space-y-8 relative">
                        {/* Vertical Line */}
                        <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-slate-200 hidden md:block"></div>

                        {roadmap.milestones.map((milestone: any, index: number) => {
                            const isCompleted = completedIds.includes(milestone.id);

                            return (
                                <div key={milestone.id} className="relative flex flex-col md:flex-row gap-8 group">
                                    {/* Number / Connector Circle */}
                                    <div className="hidden md:flex flex-col items-center flex-shrink-0 z-10 w-16">
                                        <button
                                            onClick={() => handleToggleMilestone(milestone.id, milestone.title)}
                                            className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold shadow-sm transition-all duration-300 border-2 cursor-pointer ${
                                                isCompleted 
                                                    ? 'bg-emerald-500 border-emerald-600 text-white hover:scale-105' 
                                                    : 'bg-white border-slate-200 text-slate-400 hover:border-indigo-500 hover:text-indigo-600 hover:scale-105'
                                            }`}
                                            title={isCompleted ? "Mark incomplete" : "Mark as complete"}
                                        >
                                            {isCompleted ? <Check className="w-8 h-8 stroke-[3]" /> : index + 1}
                                        </button>
                                    </div>

                                    {/* Content Card */}
                                    <div className={`flex-grow bg-white rounded-xl border p-6 md:p-8 hover:shadow-md transition-all duration-300 ${
                                        isCompleted ? 'border-emerald-200 bg-emerald-50/10 shadow-sm' : 'border-slate-200'
                                    }`}>
                                        {/* Mobile Header Row with interactive count circle */}
                                        <div className="flex items-center justify-between mb-4 md:hidden">
                                            <div className="flex items-center">
                                                <button
                                                    onClick={() => handleToggleMilestone(milestone.id, milestone.title)}
                                                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4 border cursor-pointer ${
                                                        isCompleted
                                                            ? 'bg-emerald-500 border-emerald-600 text-white'
                                                            : 'bg-slate-100 border-slate-200 text-slate-500'
                                                    }`}
                                                >
                                                    {isCompleted ? <Check className="w-5 h-5 stroke-[3]" /> : index + 1}
                                                </button>
                                                <h2 className="text-xl font-bold text-slate-900">{milestone.title}</h2>
                                            </div>
                                            <button
                                                onClick={() => handleToggleMilestone(milestone.id, milestone.title)}
                                                className={`text-xs px-2.5 py-1 rounded-md font-bold transition-colors ${
                                                    isCompleted 
                                                        ? 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200' 
                                                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                                                }`}
                                            >
                                                {isCompleted ? 'Completed' : 'Mark Done'}
                                            </button>
                                        </div>

                                        {/* Desktop Title & Checkbox */}
                                        <div className="hidden md:flex justify-between items-center mb-3">
                                            <h2 className="text-2xl font-bold text-slate-900">{milestone.title}</h2>
                                            <button
                                                onClick={() => handleToggleMilestone(milestone.id, milestone.title)}
                                                className={`text-xs px-3 py-1.5 rounded-lg font-bold flex items-center gap-1.5 transition-colors cursor-pointer ${
                                                    isCompleted
                                                        ? 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200'
                                                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                                                }`}
                                            >
                                                {isCompleted ? (
                                                    <>
                                                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                                                        Completed (+15 XP)
                                                    </>
                                                ) : (
                                                    'Mark as Done'
                                                )}
                                            </button>
                                        </div>

                                        <p className="text-slate-600 mb-6">{milestone.description}</p>

                                        {/* Resources */}
                                        <div className="space-y-3">
                                            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Recommended Resources:</h4>
                                            {milestone.links.map((link: any, i: number) => (
                                                <a
                                                    key={i}
                                                    href={link.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center justify-between p-3 rounded-lg border border-slate-100 bg-slate-50 hover:bg-brand-50 hover:border-brand-200 transition-all group/link cursor-pointer"
                                                >
                                                    <div className="flex items-center">
                                                        <ExternalLink className="w-4 h-4 text-slate-400 mr-3 group-hover/link:text-brand-600" />
                                                        <span className="font-medium text-slate-700 group-hover/link:text-brand-700">
                                                            {link.title}
                                                        </span>
                                                    </div>
                                                    <span className={`text-xs px-2 py-1 rounded font-semibold ${link.tag === 'OFFICIAL' ? 'bg-blue-100 text-blue-700' :
                                                        link.tag.includes('FREE') ? 'bg-green-100 text-green-700' :
                                                            'bg-slate-200 text-slate-600'
                                                        }`}>
                                                        {link.tag}
                                                    </span>
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Footer Call to Action */}
                    <div className="mt-16 text-center bg-slate-900 rounded-2xl p-8 md:p-12 text-white">
                        <h2 className="text-2xl font-bold mb-4">Ready to start building?</h2>
                        <p className="text-slate-300 mb-8 max-w-xl mx-auto">
                            Don't just watch tutorials. Build projects, update your resume, and start applying.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/jobs"
                                className="px-6 py-3 rounded-full bg-brand-500 hover:bg-brand-600 font-semibold transition-colors text-center"
                            >
                                Find Internships
                            </Link>
                            <Link
                                href="/resume"
                                className="px-6 py-3 rounded-full bg-slate-800 hover:bg-slate-700 font-semibold transition-colors text-center"
                            >
                                Build Resume
                            </Link>
                        </div>
                        <p className="mt-8 text-xs text-slate-500">
                            All learning resources are <strong>free</strong>, <strong>official</strong>, and <strong>publicly available</strong>.
                        </p>
                    </div>

                </div>
            </main>

            
        </div>
    );
}
