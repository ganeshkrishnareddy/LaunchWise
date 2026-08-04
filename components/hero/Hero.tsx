import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';

export function Hero() {
    return (
        <div className="relative overflow-hidden bg-white pt-32 pb-16 md:pt-48 md:pb-32">
            <div className="absolute inset-0 z-0 opacity-30">
                <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
                <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <Link href="/referral" className="inline-flex items-center px-4 py-2 bg-indigo-50 text-indigo-700 rounded-full text-sm font-bold border border-indigo-100 shadow-sm hover:bg-indigo-100 transition-colors mb-8 group animate-fade-in-up">
                    <span className="flex h-2 w-2 rounded-full bg-indigo-600 mr-2 animate-pulse"></span>
                    New: Request a Job Referral!
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
                    Launch Your Career with <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-purple-600">
                        Real Opportunities
                    </span>
                </h1>

                <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-600 mb-8">
                    The all-in-one platform for students and freshers to find career roadmaps, resume builders, and free resources—completely free.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
                    <Link
                        href="/jobs"
                        className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-slate-900 hover:bg-slate-800 md:py-4 md:text-lg md:px-10 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                    >
                        Find Jobs
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                    <Link
                        href="/roadmaps"
                        className="inline-flex items-center justify-center px-8 py-3 border border-brand-200 text-base font-medium rounded-full text-brand-700 bg-brand-50 hover:bg-brand-100 md:py-4 md:text-lg md:px-10 transition-all shadow-sm hover:shadow-md hover:-translate-y-1"
                    >
                        Explore Roadmaps
                    </Link>
                </div>

                <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-500">
                    <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span>Curated Content</span>
                    </div>
                    <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span>Always Free</span>
                    </div>
                    <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span>Direct Apply Links</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
