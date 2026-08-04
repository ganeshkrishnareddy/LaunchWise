'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ResourceCard } from '@/components/resources/ResourceCard';
import { resources } from '@/data/mockData';
import { Search, Filter, BookOpen } from 'lucide-react';

export default function ResourcesPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-slate-50"></div>}>
            <ResourcesContent />
        </Suspense>
    );
}

function ResourcesContent() {
    const searchParams = useSearchParams();
    const urlCategory = searchParams.get('category');

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    useEffect(() => {
        if (urlCategory) {
            setSelectedCategory(urlCategory);
        }
    }, [urlCategory]);

    // Get unique categories
    const categories = ['All', ...Array.from(new Set(resources.map(r => r.category)))];

    const filteredResources = resources.filter(resource => {
        const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            resource.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || resource.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="min-h-screen flex flex-col bg-slate-50">
            

            <main className="flex-grow pt-24 pb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h1 className="text-3xl font-bold text-slate-900 mb-4">Free Learning Resources</h1>
                        <p className="text-slate-600 max-w-2xl mx-auto mb-8">
                            Curated collection of the best free tutorials, documentation, and tools to help you master new skills.
                        </p>

                        <div className="inline-flex items-center px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-medium border border-green-100">
                            <span className="mr-2">🔒</span>
                            All resources are <span className="font-bold mx-1">free</span>, <span className="font-bold mx-1">verified</span>, and <span className="font-bold mx-1">not affiliated</span> with paid promotions.
                        </div>
                    </div>

                    {/* Search and Filter Section */}
                    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 mb-8">
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="flex-grow relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
                                <input
                                    type="text"
                                    placeholder="Search resources..."
                                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                            <div className="flex-shrink-0 relative">
                                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
                                <select
                                    className="w-full md:w-64 pl-10 pr-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent appearance-none bg-white font-medium text-slate-700"
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                >
                                    {categories.map((category) => (
                                        <option key={category} value={category}>
                                            {category}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Resources Grid */}
                    {filteredResources.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredResources.map(resource => (
                                <ResourceCard key={resource.id} resource={resource} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16 bg-white rounded-xl border border-dashed border-slate-300">
                            <BookOpen className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                            <h3 className="text-lg font-medium text-slate-900 mb-2">No resources found</h3>
                            <p className="text-slate-500">
                                Try adjusting your search term or category filter.
                            </p>
                        </div>
                    )}
                </div>
            </main>

            
        </div>
    );
}
