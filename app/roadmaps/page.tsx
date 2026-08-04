'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import Link from 'next/link';
import { ArrowRight, Code, Shield, Database, Cloud, Smartphone, TestTube, Layout, Briefcase, Globe } from 'lucide-react';
import { roadmaps } from '@/data/roadmaps';

// Helper to map icon string to component
const IconMap: { [key: string]: any } = {
    'Code': Code,
    'Shield': Shield,
    'Database': Database,
    'Cloud': Cloud,
    'Smartphone': Smartphone,
    'TestTube': TestTube,
    'Layout': Layout,
    'Briefcase': Briefcase,
    'Globe': Globe,
};

export default function RoadmapsPage() {
    return (
        <div className="min-h-screen flex flex-col bg-slate-50">
            

            <main className="flex-grow pt-24 pb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h1 className="text-3xl font-bold text-slate-900 mb-4">Career Roadmaps</h1>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            Step-by-step guides with <strong>free & verified resources</strong> to master your tech career.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {roadmaps.map((roadmap) => {
                            const IconComponent = IconMap[roadmap.iconName] || Code;
                            return (
                                <div key={roadmap.id} className="bg-white rounded-xl border border-slate-200 p-8 hover:shadow-lg transition-all duration-300 flex flex-col h-full">
                                    <div className={`${roadmap.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}>
                                        <IconComponent className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{roadmap.title}</h3>
                                    <p className="text-slate-600 mb-6 flex-grow">{roadmap.description}</p>

                                    <div className="mb-8">
                                        <h4 className="font-semibold text-slate-900 mb-3 text-sm uppercase tracking-wide">Goal:</h4>
                                        <p className="text-sm text-slate-700 bg-slate-100 px-3 py-2 rounded-lg inline-block">
                                            🎯 {roadmap.goal}
                                        </p>
                                    </div>

                                    <Link
                                        href={`/roadmaps/${roadmap.id}`}
                                        className="inline-flex items-center justify-center w-full px-4 py-3 bg-white border-2 border-brand-600 text-brand-600 rounded-lg hover:bg-brand-50 font-semibold group transition-colors"
                                    >
                                        Start Learning
                                        <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </main>

            
        </div>
    );
}
