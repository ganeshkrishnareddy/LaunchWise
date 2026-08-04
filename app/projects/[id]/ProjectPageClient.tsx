'use client';

import { useState } from 'react';
import { Code2, ExternalLink, ShieldCheck, CheckCircle2, ChevronRight, Award } from 'lucide-react';
import Link from 'next/link';
import { CertificateModal } from '@/components/modals/CertificateModal';
import type { Project } from '@/data/projects';

export function ProjectPageClient({ project }: { project: Project }) {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <>
            <CertificateModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                projectTitle={project.title}
            />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Breadcrumbs */}
                <div className="flex items-center gap-2 text-sm text-slate-500 font-medium mb-8">
                    <Link href="/projects" className="hover:text-brand-600 transition-colors">Projects</Link>
                    <ChevronRight className="w-4 h-4" />
                    <span className="text-slate-900">{project.title}</span>
                </div>

                {/* Header Card */}
                <div className="bg-white rounded-[2rem] p-8 border border-slate-200 shadow-sm mb-8 relative overflow-hidden">
                    <div className="flex items-center gap-3 mb-4 relative z-10">
                        <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                            {project.category}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                            project.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' :
                            project.difficulty === 'Intermediate' ? 'bg-blue-100 text-blue-700' :
                            'bg-purple-100 text-purple-700'
                        }`}>
                            {project.difficulty}
                        </span>
                    </div>

                    <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 relative z-10 leading-tight">
                        {project.title}
                    </h1>

                    <div className="flex flex-wrap gap-2 mb-8 relative z-10">
                        {project.techStack.map(tech => (
                            <span key={tech} className="bg-slate-900 text-white px-3 py-1.5 rounded-lg text-sm font-bold shadow-sm">
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className="flex flex-wrap gap-4 relative z-10">
                        <a href={project.githubUrl || '#'} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-colors">
                            <Code2 className="w-5 h-5" /> Starter Code
                        </a>
                        {project.demoUrl && project.demoUrl !== '#' && (
                            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-6 py-3 bg-brand-50 text-brand-700 border border-brand-200 rounded-xl font-bold hover:bg-brand-100 transition-colors">
                                <ExternalLink className="w-5 h-5" /> Live Demo
                            </a>
                        )}
                    </div>

                    <div className="absolute -right-20 -top-20 w-64 h-64 bg-gradient-to-br from-brand-50 to-purple-50 rounded-full opacity-50 z-0"></div>
                </div>

                {/* Certificate Banner */}
                <div className="bg-gradient-to-r from-brand-600 to-purple-600 rounded-[2rem] p-8 text-white mb-8 shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="relative z-10">
                        <div className="flex items-center gap-2 mb-2">
                            <Award className="w-6 h-6 text-yellow-300" />
                            <h3 className="text-2xl font-black">Earn a Certificate!</h3>
                        </div>
                        <p className="text-brand-100 font-medium">
                            Build this project, push your code to GitHub, and submit it to get a verified LaunchWise Completion Certificate for your resume.
                        </p>
                    </div>
                    <div className="relative z-10 shrink-0">
                        <button
                            onClick={() => setModalOpen(true)}
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-brand-600 rounded-xl font-black hover:bg-brand-50 transition-colors shadow-lg cursor-pointer"
                        >
                            Submit Project
                        </button>
                    </div>

                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 blur-xl"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-black/10 rounded-full -ml-10 -mb-10 blur-xl"></div>
                </div>

                {/* Detailed Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    <div className="md:col-span-2 space-y-8">
                        <section className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
                            <h2 className="text-2xl font-black text-slate-900 mb-4">Project Overview</h2>
                            <p className="text-slate-600 font-medium leading-relaxed mb-6">
                                {project.detailedDescription || project.whyItHelps}
                            </p>

                            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Real World Use Case</h3>
                                <p className="text-slate-900 font-medium">{project.realWorldUseCase}</p>
                            </div>
                        </section>

                        <section className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
                            <h2 className="text-2xl font-black text-slate-900 mb-6">Steps to Build</h2>
                            <div className="space-y-4">
                                {project.stepsToBuild ? project.stepsToBuild.map((step, idx) => (
                                    <div key={idx} className="flex gap-4">
                                        <div className="w-8 h-8 rounded-full bg-brand-100 text-brand-600 font-black flex items-center justify-center shrink-0 mt-0.5">
                                            {idx + 1}
                                        </div>
                                        <p className="text-slate-700 font-medium pt-1">{step}</p>
                                    </div>
                                )) : (
                                    <p className="text-slate-500 italic">Implementation steps coming soon.</p>
                                )}
                            </div>
                        </section>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
                            <h3 className="font-black text-slate-900 mb-4 flex items-center gap-2">
                                <ShieldCheck className="w-5 h-5 text-brand-600" /> Resume Impact
                            </h3>
                            <p className="text-sm text-slate-600 font-medium leading-relaxed">
                                {project.resumeImpact}
                            </p>
                        </div>

                        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
                            <h3 className="font-black text-slate-900 mb-4 flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-green-600" /> Skills Learned
                            </h3>
                            <ul className="space-y-3">
                                {project.skills.map((skill, idx) => (
                                    <li key={idx} className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                                        <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* CTA again at bottom */}
                        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-6 text-white shadow-lg">
                            <Award className="w-8 h-8 text-yellow-400 mb-3" />
                            <h3 className="font-black text-lg mb-2">Ready to build?</h3>
                            <p className="text-slate-300 text-sm font-medium mb-4">Complete the project and earn your free certificate.</p>
                            <button
                                onClick={() => setModalOpen(true)}
                                className="w-full py-3 bg-white text-slate-900 rounded-xl font-black hover:bg-slate-100 transition-colors"
                            >
                                Get Certificate →
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
