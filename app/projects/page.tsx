'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { useState, useMemo, useEffect, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSearchParams } from 'next/navigation';
import { projectsData } from '@/data/projects';
import { Code2, ExternalLink, Zap, Star, ShieldCheck, Database, Cloud, Smartphone, Layout, Flame } from 'lucide-react';
import Link from 'next/link';

const CATEGORIES = ["All", "AI & ML", "Cloud Credits", "Coding", "Developer Tools", "Cybersecurity", "Design", "Education", "Productivity", "Finance", "Travel", "Streaming", "Food", "Gaming", "Career", "Hackathons"];
const DIFFICULTIES = ["All", "Beginner", "Intermediate", "Advanced"];

export default function ProjectsPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-slate-50"></div>}>
            <ProjectsContent />
        </Suspense>
    );
}

function ProjectsContent() {
    const searchParams = useSearchParams();
    const urlCategory = searchParams.get('category');
    
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedDifficulty, setSelectedDifficulty] = useState("All");

    useEffect(() => {
        if (urlCategory) {
            setSelectedCategory(urlCategory);
        }
    }, [urlCategory]);

    const filteredProjects = useMemo(() => {
        return projectsData.filter(project => {
            const matchCategory = selectedCategory === "All" || project.category === selectedCategory;
            const matchDifficulty = selectedDifficulty === "All" || project.difficulty === selectedDifficulty;
            return matchCategory && matchDifficulty;
        });
    }, [selectedCategory, selectedDifficulty]);

    const getCategoryIcon = (category: string) => {
        switch (category) {
            case "Coding": return <Code2 className="w-4 h-4" />;
            case "Cybersecurity": return <ShieldCheck className="w-4 h-4" />;
            case "AI & ML": return <Database className="w-4 h-4" />;
            case "Developer Tools": return <Cloud className="w-4 h-4" />;
            case "Mobile App Development": return <Smartphone className="w-4 h-4" />;
            case "Design": return <Layout className="w-4 h-4" />;
            default: return <Code2 className="w-4 h-4" />;
        }
    };

    const getDifficultyColor = (difficulty: string) => {
        switch (difficulty) {
            case "Beginner": return "bg-green-100 text-green-700 border-green-200";
            case "Intermediate": return "bg-blue-100 text-blue-700 border-blue-200";
            case "Advanced": return "bg-purple-100 text-purple-700 border-purple-200";
            default: return "bg-slate-100 text-slate-700 border-slate-200";
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-slate-50">
            

            <main className="flex-grow pt-24 pb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <div className="inline-flex items-center space-x-2 bg-brand-50 border border-brand-100 px-4 py-2 rounded-full mb-6">
                            <Zap className="w-4 h-4 text-brand-600" />
                            <span className="text-sm font-bold text-brand-700 uppercase tracking-wider">Build & Get Hired</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
                            Industry-Level <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-purple-600">Projects</span>
                        </h1>
                        <p className="text-lg text-slate-600 font-medium">
                            Stop building basic to-do apps. Build these high-impact projects that actually impress recruiters and pass resume screenings.
                        </p>
                    </div>

                    {/* Filters */}
                    <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200 mb-10 flex flex-col md:flex-row gap-6 justify-between items-center z-10 relative">
                        <div className="w-full md:w-auto">
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Domain</p>
                            <div className="flex flex-wrap gap-2">
                                {CATEGORIES.map(cat => (
                                    <button
                                        key={cat}
                                        onClick={() => setSelectedCategory(cat)}
                                        className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                                            selectedCategory === cat 
                                            ? 'bg-slate-900 text-white shadow-md' 
                                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                                        }`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="w-full md:w-auto">
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Difficulty</p>
                            <div className="flex flex-wrap gap-2">
                                {DIFFICULTIES.map(diff => (
                                    <button
                                        key={diff}
                                        onClick={() => setSelectedDifficulty(diff)}
                                        className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                                            selectedDifficulty === diff 
                                            ? 'bg-slate-900 text-white shadow-md' 
                                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                                        }`}
                                    >
                                        {diff}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Project Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <AnimatePresence mode="popLayout">
                            {filteredProjects.map((project, index) => (
                                <motion.div
                                    key={project.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.2 }}
                                    className="bg-white rounded-[2rem] p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col h-full relative overflow-hidden group"
                                >
                                    {/* Badges Row */}
                                    <div className="flex flex-wrap gap-3 mb-6 relative z-10">
                                        {project.isTrending && (
                                            <span className="flex items-center gap-1 bg-orange-100 text-orange-700 border border-orange-200 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                                <Flame className="w-3 h-3" /> Trending
                                            </span>
                                        )}
                                        {project.isRecommended && (
                                            <span className="flex items-center gap-1 bg-brand-100 text-brand-700 border border-brand-200 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                                <Star className="w-3 h-3 fill-current" /> Recruiter Pick
                                            </span>
                                        )}
                                        <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${getDifficultyColor(project.difficulty)}`}>
                                            {project.difficulty}
                                        </span>
                                    </div>

                                    {/* Title & Category */}
                                    <div className="mb-6 relative z-10">
                                        <div className="flex items-center gap-2 text-slate-500 font-bold text-xs uppercase tracking-widest mb-3">
                                            {getCategoryIcon(project.category)}
                                            {project.category}
                                        </div>
                                        <h3 className="text-2xl font-black text-slate-900 leading-tight">{project.title}</h3>
                                    </div>

                                    {/* Real World Use Case */}
                                    <div className="mb-6 relative z-10 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                                        <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Real-World Use Case</p>
                                        <p className="text-slate-700 font-medium">{project.realWorldUseCase}</p>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 relative z-10 flex-grow">
                                        {/* Resume Impact */}
                                        <div>
                                            <p className="text-sm font-bold text-slate-900 mb-2 flex items-center gap-2">
                                                <span className="w-6 h-6 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center text-xs">🚀</span>
                                                Resume Impact
                                            </p>
                                            <p className="text-sm text-slate-600 font-medium leading-relaxed">{project.resumeImpact}</p>
                                        </div>

                                        {/* Why It Helps */}
                                        <div>
                                            <p className="text-sm font-bold text-slate-900 mb-2 flex items-center gap-2">
                                                <span className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs">💡</span>
                                                Why Build This
                                            </p>
                                            <p className="text-sm text-slate-600 font-medium leading-relaxed">{project.whyItHelps}</p>
                                        </div>
                                    </div>

                                    {/* Tech Stack & Skills */}
                                    <div className="mb-8 relative z-10">
                                        <div className="flex flex-wrap gap-2 mb-3">
                                            {project.techStack.map(tech => (
                                                <span key={tech} className="bg-slate-900 text-white px-3 py-1 rounded-lg text-xs font-bold">{tech}</span>
                                            ))}
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {project.skills.map(skill => (
                                                <span key={skill} className="bg-slate-100 text-slate-600 px-3 py-1 rounded-lg text-xs font-semibold border border-slate-200">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Actions */}
                                    <div className="mt-auto pt-6 border-t border-slate-100 relative z-10">
                                        <Link href={`/projects/${project.id}`} className="w-full flex items-center justify-center gap-2 px-5 py-3.5 bg-slate-900 text-white rounded-xl font-bold text-sm hover:bg-slate-800 transition-colors shadow-md">
                                            View Project Details & Earn Certificate
                                        </Link>
                                    </div>

                                    <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-gradient-to-br from-brand-50 to-purple-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                        
                        {filteredProjects.length === 0 && (
                            <div className="col-span-1 lg:col-span-2 text-center py-20">
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 mb-4">
                                    <Code2 className="w-8 h-8 text-slate-400" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">No projects found</h3>
                                <p className="text-slate-500 font-medium">Try adjusting your category or difficulty filters.</p>
                            </div>
                        )}
                    </div>
                </div>
            </main>

            
        </div>
    );
}
