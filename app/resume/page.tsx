'use client';

import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FileText, Download, Check, Star, ShieldCheck, AlertTriangle, Eye, Calendar, TrendingUp } from 'lucide-react';
import { resumeTemplates, resumeChecklist, commonMistakes, ResumeTemplate } from '@/data/resumes';
import { PreviewModal } from '@/components/ui/PreviewModal';

export default function ResumePage() {
    const [selectedTemplate, setSelectedTemplate] = useState<ResumeTemplate | null>(null);

    // Find the most downloaded template for the badge
    const mostDownloadedId = [...resumeTemplates].sort((a, b) => b.downloadCount - a.downloadCount)[0]?.id;

    return (
        <div className="min-h-screen flex flex-col bg-slate-50">
            

            <main className="flex-grow pt-24 pb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Hero Section */}
                    <div className="text-center mb-16">
                        <h1 className="text-3xl font-bold text-slate-900 mb-4">ATS-Friendly Resume Templates</h1>
                        <p className="text-slate-600 max-w-2xl mx-auto mb-6">
                            Don't get rejected by a bot. Use our <strong>verified templates</strong> designed to pass Applicant Tracking Systems.
                        </p>
                        <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                            <ShieldCheck className="w-4 h-4 mr-2" />
                            All templates are free, ATS-tested, and recruiter-approved.
                        </div>
                    </div>

                    {/* Templates Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                        {resumeTemplates.map(template => (
                            <div key={template.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full relative group">
                                {/* Most Downloaded Badge */}
                                {template.id === mostDownloadedId && (
                                    <div className="absolute top-4 left-4 z-10 bg-amber-500 text-white px-3 py-1 rounded-full text-[10px] font-bold shadow-lg flex items-center gap-1">
                                        <TrendingUp size={12} />
                                        MOST DOWNLOADED
                                    </div>
                                )}

                                {/* Color Header / Image Preview Area */}
                                <div className={`h-48 ${template.color} flex items-center justify-center relative border-b border-slate-100 overflow-hidden group/image`}>
                                    <div className="absolute top-4 right-4 bg-white shadow-sm px-2 py-1 rounded text-[10px] font-bold text-slate-600 border border-slate-100 z-10">
                                        {template.format}
                                    </div>

                                    <img
                                        src={template.previewImage}
                                        alt={template.name}
                                        className="w-full h-full object-cover object-top opacity-100"
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).src = `https://placehold.co/400x300/white/slate?text=${encodeURIComponent(template.name)}`;
                                        }}
                                    />

                                    {/* ATS Verified Tag */}
                                    {template.isAtsSafe && (
                                        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur text-green-600 px-2 py-0.5 rounded text-[10px] font-bold flex items-center gap-1 shadow-sm z-10">
                                            <ShieldCheck size={12} />
                                            ATS-PARSED 100%
                                        </div>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="p-6 flex flex-col flex-grow relative bg-white z-10">
                                    <div className="flex justify-between items-start mb-2">
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900 leading-tight">{template.name}</h3>
                                            <div className="flex items-center gap-2 mt-1">
                                                <div className="flex text-amber-400">
                                                    {[...Array(5)].map((_, i) => (
                                                        <Star key={i} className={`w-3 h-3 ${i < template.atsScore ? 'fill-current' : 'text-slate-200'}`} />
                                                    ))}
                                                </div>
                                                <span className="text-[10px] text-slate-500 font-bold bg-slate-100 px-2 py-0.5 rounded-full flex items-center gap-1">
                                                    <Calendar size={10} /> Updated {template.lastUpdated}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <p className="text-[10px] font-bold text-brand-600 uppercase tracking-widest mb-3">
                                        Ideal for: {template.bestFor}
                                    </p>
                                    <p className="text-slate-600 text-sm mb-6 flex-grow line-clamp-2 leading-relaxed">{template.description}</p>

                                    {/* Features Badges */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {template.features.slice(0, 3).map((feature, i) => (
                                            <span key={i} className="px-2.5 py-1 bg-slate-50 text-slate-600 rounded-lg text-[10px] font-bold border border-slate-200/60 shadow-sm">
                                                {feature}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="grid grid-cols-2 gap-4 mt-auto">
                                        <button
                                            onClick={() => setSelectedTemplate(template)}
                                            className="flex items-center justify-center px-4 py-3 border-2 border-slate-100 text-slate-700 rounded-2xl hover:bg-slate-50 hover:border-slate-200 transition-all font-bold text-sm"
                                        >
                                            <Eye className="w-4 h-4 mr-2" />
                                            Preview
                                        </button>
                                        <a
                                            href={template.downloadUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center px-4 py-3 bg-brand-600 text-white rounded-2xl hover:bg-brand-700 transition-all font-bold text-sm shadow-lg shadow-brand-500/20 active:scale-95"
                                        >
                                            <Download className="w-4 h-4 mr-2" />
                                            Download
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Expert Tips Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Checklist */}
                        <div className="bg-white rounded-2xl p-8 border border-slate-200">
                            <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                                <ShieldCheck className="w-6 h-6 text-green-600 mr-2" />
                                Resume Checklist
                            </h2>
                            <ul className="space-y-3">
                                {resumeChecklist.map((item, i) => (
                                    <li key={i} className="flex items-start text-slate-700">
                                        <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Common Mistakes */}
                        <div className="bg-white rounded-2xl p-8 border border-slate-200">
                            <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                                <AlertTriangle className="w-6 h-6 text-amber-500 mr-2" />
                                Common ATS Mistakes
                            </h2>
                            <ul className="space-y-3">
                                {commonMistakes.map((item, i) => (
                                    <li key={i} className="flex items-start text-slate-700">
                                        <span className="w-5 h-5 flex items-center justify-center bg-red-100 text-red-600 rounded-full text-xs font-bold mr-3 mt-0.5 flex-shrink-0">X</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* AI Coming Soon */}
                    <div className="mt-16 bg-slate-900 rounded-2xl p-12 text-center text-white relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-500 via-purple-500 to-brand-500"></div>
                        <h2 className="text-3xl font-bold mb-4">Want an AI review?</h2>
                        <p className="text-slate-300 mb-8 max-w-lg mx-auto">
                            Our AI-powered resume checker is coming soon. Get your resume analyzed against real job descriptions.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-3">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="px-6 py-3 rounded-xl border-0 focus:ring-2 focus:ring-brand-500 text-slate-900 min-w-[300px]"
                            />
                            <button className="px-8 py-3 bg-brand-600 text-white rounded-xl hover:bg-brand-700 font-bold transition-all shadow-lg shadow-brand-500/20">
                                Join Waitlist
                            </button>
                        </div>
                    </div>
                </div>
            </main>

            

            {/* Preview Modal */}
            <PreviewModal
                isOpen={!!selectedTemplate}
                onClose={() => setSelectedTemplate(null)}
                template={selectedTemplate}
            />
        </div>
    );
}
