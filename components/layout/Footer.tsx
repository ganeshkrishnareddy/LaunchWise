import Link from 'next/link';
import { Rocket, Heart, Globe, ShieldCheck, CheckCircle2, GraduationCap, MessageCircle } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-slate-50 border-t border-slate-200 pt-10 pb-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="flex items-center space-x-2 mb-4">
                            <img src="/logo.png" alt="LaunchWise Logo" className="h-6 w-6 object-contain" />
                            <span className="font-bold text-lg text-slate-900 tracking-tight">LaunchWise</span>
                        </Link>
                        <p className="text-slate-500 text-xs mb-6">
                            Helping students and freshers launch their careers with verified internships, roadmaps, and free resources.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://whatsapp.com/channel/0029Vb60S0cIN9ipSJKgat0P" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-green-500 transition-colors" title="WhatsApp Channel">
                                <MessageCircle className="h-4 w-4" />
                            </a>
                            <a href="https://www.instagram.com/launch_wise" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-pink-600 transition-colors" title="Globe">
                                <Globe className="h-4 w-4" />
                            </a>
                            <a href="https://linkedin.com/company/launchwisetech" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-600 transition-colors" title="LinkedIn">
                                <Globe className="h-4 w-4" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold text-slate-900 mb-3 text-sm">Platform</h3>
                        <ul className="space-y-1.5">

                            <li><Link href="/projects" className="text-slate-500 hover:text-brand-600 text-xs">Best Projects</Link></li>
                            <li><Link href="/certifications" className="text-slate-500 hover:text-brand-600 text-xs">Certifications</Link></li>
                            <li><Link href="/referral" className="text-slate-500 hover:text-brand-600 text-xs">Job Referrals</Link></li>
                            
                            <li><Link href="/project-help" className="text-slate-500 hover:text-brand-600 text-xs">Project Help & Mentorship</Link></li>
                            <li><Link href="/roadmaps" className="text-slate-500 hover:text-brand-600 text-xs">Career Roadmaps</Link></li>
                            <li><Link href="/resume" className="text-slate-500 hover:text-brand-600 text-xs">Resume Builder</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-slate-900 mb-3 text-sm">Resources</h3>
                        <ul className="space-y-1.5">
                            <li><Link href="/resources" className="text-slate-500 hover:text-brand-600 text-xs">Blog</Link></li>
                            <li><Link href="/resources" className="text-slate-500 hover:text-brand-600 text-xs">Interview Prep</Link></li>
                            <li><Link href="/about" className="text-slate-500 hover:text-brand-600 text-xs">About Us</Link></li>
                            <li><Link href="/contact" className="text-slate-500 hover:text-brand-600 text-xs">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-slate-900 mb-3 text-sm">Stay Updated</h3>
                        <p className="text-slate-500 text-xs mb-3">
                            Get the latest opportunities delivered to your inbox daily.
                        </p>
                        <form 
                            action="https://formspree.io/f/mwvyknre"
                            method="POST"
                            className="flex flex-col space-y-2"
                        >
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                className="px-3 py-1.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-xs bg-white text-slate-900 placeholder:text-slate-400"
                                required
                            />
                            <button
                                type="submit"
                                className="px-3 py-1.5 rounded-lg bg-brand-600 text-white font-semibold hover:bg-brand-700 transition-colors text-xs"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-slate-200 pt-8 flex flex-col items-center justify-center text-center">
                    {/* Trust Badges */}
                    <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-6">
                        <div className="flex items-center space-x-1.5 text-slate-400 group">
                            <ShieldCheck className="h-3.5 w-3.5 text-brand-500/70 group-hover:text-brand-600 group-hover:scale-110 transition-all" />
                            <span className="text-[10px] font-bold tracking-wider uppercase">Privacy First</span>
                        </div>
                        <div className="flex items-center space-x-1.5 text-slate-400 group">
                            <CheckCircle2 className="h-3.5 w-3.5 text-green-500/70 group-hover:text-green-600 group-hover:scale-110 transition-all" />
                            <span className="text-[10px] font-bold tracking-wider uppercase">Verified Jobs</span>
                        </div>
                        <div className="flex items-center space-x-1.5 text-slate-400 group">
                            <GraduationCap className="h-3.5 w-3.5 text-blue-500/70 group-hover:text-blue-600 group-hover:scale-110 transition-all" />
                            <span className="text-[10px] font-bold tracking-wider uppercase">Student Focused</span>
                        </div>
                    </div>

                    {/* Support & Mission */}
                    <div className="mb-4">
                        <p className="text-slate-900 font-bold text-sm mb-2">
                            Support our mission
                        </p>
                        <a
                            href="https://razorpay.me/@ProgVision"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 bg-brand-50 text-brand-600 rounded-full text-xs font-bold hover:bg-brand-100 transition-all border border-brand-100"
                        >
                            <Heart className="h-3 w-3 mr-2 fill-current" />
                            Buy Me a Coffee
                        </a>
                    </div>

                    <div className="flex items-center space-x-4 mb-2">
                        <Link href="/privacy" className="text-slate-400 hover:text-slate-600 text-[10px] transition-colors">Privacy Policy</Link>
                        <span className="text-slate-300 text-[10px]">&bull;</span>
                        <Link href="/terms" className="text-slate-400 hover:text-slate-600 text-[10px] transition-colors">Terms & Conditions</Link>
                    </div>
                    <p className="text-slate-400 text-[10px]">
                        © {new Date().getFullYear()} LaunchWise. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
