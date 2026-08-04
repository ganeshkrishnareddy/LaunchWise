'use client';

import { ExternalLink, BookOpen, Shield, Code, Database, Terminal, Cloud, Smartphone, CheckSquare, FileText, Briefcase } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ResourceCardProps {
    id: number | string;
    title: string;
    description: string;
    link: string;
    category: string;
    difficulty?: string;
    type?: string;
}

export function ResourceCard({ resource }: { resource: ResourceCardProps }) {
    const getIcon = (category: string) => {
        switch (category.toLowerCase()) {
            case 'web development': return <Code className="w-6 h-6 text-blue-500" />;
            case 'cybersecurity': return <Shield className="w-6 h-6 text-green-500" />;
            case 'data science & ai': return <Database className="w-6 h-6 text-purple-500" />;
            case 'programming': return <Terminal className="w-6 h-6 text-slate-500" />;
            case 'cloud & devops': return <Cloud className="w-6 h-6 text-sky-500" />;
            case 'mobile dev': return <Smartphone className="w-6 h-6 text-indigo-500" />;
            case 'qa & testing': return <CheckSquare className="w-6 h-6 text-teal-500" />;
            case 'resume & career': return <FileText className="w-6 h-6 text-orange-500" />;
            case 'internships & jobs': return <Briefcase className="w-6 h-6 text-pink-500" />;
            default: return <BookOpen className="w-6 h-6 text-brand-500" />;
        }
    };

    const getDifficultyColor = (diff?: string) => {
        switch (diff?.toLowerCase()) {
            case 'beginner': return 'bg-green-100 text-green-800';
            case 'intermediate': return 'bg-yellow-100 text-yellow-800';
            case 'advanced': return 'bg-red-100 text-red-800';
            default: return 'bg-slate-100 text-slate-800';
        }
    };

    return (
        <div className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-md transition-shadow h-full flex flex-col group">
            <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-slate-50 rounded-lg group-hover:bg-white group-hover:shadow-sm transition-all">
                    {getIcon(resource.category)}
                </div>
                {resource.type && (
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-slate-100 text-slate-600 rounded-full">
                        {resource.type}
                    </span>
                )}
            </div>

            <div className="mb-3">
                <span className="text-xs font-semibold text-brand-600 uppercase tracking-wider block mb-1">
                    {resource.category}
                </span>
                <h3 className="text-lg font-bold text-slate-900 line-clamp-2 min-h-[3.5rem] flex items-center">
                    {resource.title}
                </h3>
            </div>

            <p className="text-slate-600 text-sm mb-6 flex-grow">
                {resource.description}
            </p>

            <div className="mt-auto pt-4 border-t border-slate-50 flex items-center justify-between">
                {resource.difficulty && (
                    <span className={cn("text-xs font-medium px-2 py-1 rounded-full", getDifficultyColor(resource.difficulty))}>
                        {resource.difficulty}
                    </span>
                )}
                <a
                    href={resource.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-brand-600 hover:text-brand-700 font-medium text-sm"
                >
                    View Resource
                    <ExternalLink className="w-4 h-4 ml-1" />
                </a>
            </div>
        </div>
    );
}
