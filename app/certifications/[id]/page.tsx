import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { certificationsData } from '@/data/certifications';
import { notFound } from 'next/navigation';
import { ExternalLink, CheckCircle2, ChevronRight, Clock, DollarSign, BookOpen, Star } from 'lucide-react';
import Link from 'next/link';

export const runtime = 'edge';

export default async function CertificationDetailsPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const cert = certificationsData.find(c => c.id === id);

    if (!cert) {
        notFound();
    }

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
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    
                    {/* Breadcrumbs */}
                    <div className="flex items-center gap-2 text-sm text-slate-500 font-medium mb-8">
                        <Link href="/certifications" className="hover:text-brand-600 transition-colors">Certifications</Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-slate-900">{cert.name}</span>
                    </div>

                    {/* Header Card */}
                    <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-slate-200 shadow-sm mb-8 relative overflow-hidden">
                        
                        <div className="flex flex-wrap gap-2 mb-6 relative z-10">
                            {cert.isVerified && (
                                <span className="flex items-center gap-1 bg-blue-50 text-blue-700 border border-blue-200 px-3 py-1 rounded-md text-xs font-black uppercase tracking-widest">
                                    <CheckCircle2 className="w-4 h-4" /> Verified
                                </span>
                            )}
                            {cert.isValuableForFreshers && (
                                <span className="flex items-center gap-1 bg-brand-50 text-brand-700 border border-brand-200 px-3 py-1 rounded-md text-xs font-black uppercase tracking-widest">
                                    <Star className="w-4 h-4 fill-current" /> Top for Freshers
                                </span>
                            )}
                            <span className={`px-3 py-1 rounded-md text-xs font-black uppercase tracking-widest border ${getDifficultyColor(cert.difficulty)}`}>
                                {cert.difficulty}
                            </span>
                        </div>
                        
                        <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2 relative z-10">{cert.provider}</p>
                        <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 relative z-10 leading-tight">
                            {cert.name}
                        </h1>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 relative z-10">
                            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                                <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-1">Duration</p>
                                <p className="font-semibold text-slate-900 flex items-center gap-2"><Clock className="w-4 h-4 text-brand-600" /> {cert.duration}</p>
                            </div>
                            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                                <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-1">Cost</p>
                                <p className="font-semibold text-slate-900 flex items-center gap-2"><DollarSign className="w-4 h-4 text-brand-600" /> {cert.cost}</p>
                            </div>
                            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                                <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-1">Category</p>
                                <p className="font-semibold text-slate-900">{cert.category}</p>
                            </div>
                        </div>

                        <div className="relative z-10">
                            <a href={cert.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-600 text-white rounded-xl font-black text-lg hover:bg-brand-700 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 transform">
                                <BookOpen className="w-5 h-5" /> Enroll Now
                            </a>
                        </div>

                        <div className="absolute -right-20 -top-20 w-80 h-80 bg-gradient-to-bl from-blue-50 to-brand-50 rounded-full opacity-50 z-0"></div>
                    </div>

                    {/* Detailed Content */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        
                        <div className="md:col-span-2 space-y-8">
                            <section className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
                                <h2 className="text-2xl font-black text-slate-900 mb-6">Course Syllabus</h2>
                                <div className="space-y-4">
                                    {cert.detailedSyllabus && cert.detailedSyllabus.length > 0 ? cert.detailedSyllabus.map((topic, idx) => (
                                        <div key={idx} className="flex gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                                            <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-500 font-black flex items-center justify-center shrink-0">
                                                {idx + 1}
                                            </div>
                                            <p className="text-slate-700 font-medium pt-1">{topic}</p>
                                        </div>
                                    )) : (
                                        <p className="text-slate-500 italic p-4">Detailed syllabus is available on the official course page.</p>
                                    )}
                                </div>
                            </section>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-brand-50 rounded-3xl p-6 border border-brand-100 shadow-sm">
                                <h3 className="font-black text-slate-900 mb-4 flex items-center gap-2">
                                    <Star className="w-5 h-5 text-brand-600 fill-current" /> Career Benefits
                                </h3>
                                <p className="text-sm text-slate-700 font-medium leading-relaxed">
                                    {cert.careerBenefits}
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </main>

            
        </div>
    );
}
