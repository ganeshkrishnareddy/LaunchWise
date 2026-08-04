'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { certificationsData } from '@/data/certifications';
import { Award, CheckCircle, Star, Clock, DollarSign } from 'lucide-react';
import Link from 'next/link';
import { Pagination } from '@/components/ui/Pagination';

const CERTS_PER_PAGE = 9;
const CATEGORIES = ["All", "Cybersecurity", "Cloud & DevOps", "Data Science & AI", "Software Engineering", "Networking"];

export default function CertificationsPage() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => { setCurrentPage(1); }, [selectedCategory]);

    const filteredCerts = useMemo(() => {
        return certificationsData.filter(cert => {
            return selectedCategory === "All" || cert.category === selectedCategory;
        });
    }, [selectedCategory]);

    const totalPages = Math.ceil(filteredCerts.length / CERTS_PER_PAGE);
    const paginatedCerts = filteredCerts.slice(
        (currentPage - 1) * CERTS_PER_PAGE,
        currentPage * CERTS_PER_PAGE
    );

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
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
                            <Award className="w-4 h-4 text-brand-600" />
                            <span className="text-sm font-bold text-brand-700 uppercase tracking-wider">Level Up Your Resume</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
                            Top <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-purple-600">Certifications</span>
                        </h1>
                        <p className="text-lg text-slate-600 font-medium">
                            Not all certifications are created equal. Discover the industry-recognized credentials that actually increase your chances of getting hired.
                        </p>
                    </div>

                    {/* Filters */}
                    <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200 mb-10 flex flex-wrap gap-2 justify-center z-10 relative">
                        {CATEGORIES.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
                                    selectedCategory === cat 
                                    ? 'bg-brand-600 text-white shadow-md' 
                                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Certifications Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <AnimatePresence mode="popLayout">
                            {paginatedCerts.map((cert) => (
                                <motion.div
                                    key={cert.id}
                                    layout
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.3 }}
                                    className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col h-full group"
                                >
                                    {/* Badges */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {cert.isVerified && (
                                            <span className="flex items-center gap-1 bg-blue-50 text-blue-700 border border-blue-200 px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-widest">
                                                <CheckCircle className="w-3 h-3" /> Verified
                                            </span>
                                        )}
                                        {cert.isValuableForFreshers && (
                                            <span className="flex items-center gap-1 bg-brand-50 text-brand-700 border border-brand-200 px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-widest">
                                                <Star className="w-3 h-3 fill-current" /> Top for Freshers
                                            </span>
                                        )}
                                    </div>

                                    {/* Content */}
                                    <div className="mb-4 flex-grow">
                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{cert.provider}</p>
                                        <h3 className="text-xl font-black text-slate-900 leading-tight mb-4 group-hover:text-brand-600 transition-colors">
                                            {cert.name}
                                        </h3>
                                        
                                        <div className="grid grid-cols-2 gap-3 mb-4">
                                            <div className="flex items-center gap-2 text-sm text-slate-600 font-medium bg-slate-50 p-2 rounded-lg">
                                                <Clock className="w-4 h-4 text-slate-400" /> {cert.duration}
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-slate-600 font-medium bg-slate-50 p-2 rounded-lg">
                                                <DollarSign className="w-4 h-4 text-slate-400" /> {cert.cost}
                                            </div>
                                        </div>

                                        <div className="mb-4">
                                            <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${getDifficultyColor(cert.difficulty)}`}>
                                                {cert.difficulty}
                                            </span>
                                        </div>

                                        <div className="bg-brand-50/50 p-4 rounded-xl border border-brand-100/50">
                                            <p className="text-sm text-slate-700 font-medium leading-relaxed">
                                                <span className="font-bold text-brand-700 block mb-1">Career Benefit:</span>
                                                {cert.careerBenefits}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Action */}
                                    <div className="mt-auto pt-4 border-t border-slate-100 relative z-10">
                                        <Link 
                                            href={`/certifications/${cert.id}`}
                                            className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-slate-900 text-white rounded-xl font-bold text-sm hover:bg-slate-800 transition-colors shadow-md"
                                        >
                                            View Certification Details
                                        </Link>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                        totalItems={filteredCerts.length}
                        itemsPerPage={CERTS_PER_PAGE}
                    />
                </div>
            </main>

            
        </div>
    );
}
