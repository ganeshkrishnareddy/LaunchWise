'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Rocket, User as UserIcon, LayoutDashboard, AlertCircle } from 'lucide-react';
import { SignInButton, SignUpButton, UserButton, useAuth, useUser } from '@clerk/nextjs';
import { userService } from '@/lib/db';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { isSignedIn } = useAuth();
    const { user, isLoaded } = useUser();
    const [profileComplete, setProfileComplete] = useState(true);

    useEffect(() => {
        if (!isLoaded || !user) return;

        const userRef = doc(db, 'users', user.id);
        const unsubscribe = onSnapshot(userRef, (docSnap: any) => {
            if (docSnap.exists()) {
                const prof = docSnap.data();
                const complete = !!(prof.bio && prof.skills && prof.skills.length > 0 && prof.username && prof.resumeUrl);
                setProfileComplete(complete);
            } else {
                setProfileComplete(false);
            }
        }, (err: any) => {
            console.error("Error subscribing to profile changes:", err);
        });

        return () => unsubscribe();
    }, [user, isLoaded]);

    return (
        <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center shrink-0">
                        <Link 
                            href="/" 
                            className="flex items-center space-x-2 shrink-0 mr-4"
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        >
                            <img src="/logo.png" alt="LaunchWise Logo" className="h-10 w-10 object-contain" />
                            <span className="font-bold text-2xl text-slate-900 tracking-tight shrink-0">LaunchWise</span>
                        </Link>
                    </div>

                    {/* Desktop Menu - visible only on large screens (xl) due to high number of navigation items */}
                    <div className="hidden xl:flex items-center space-x-4">
                        <Link href="/projects" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">
                            Projects
                        </Link>
                        <Link href="/certifications" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">
                            Certifications
                        </Link>
                        <Link href="/project-help" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">
                            Mentorship
                        </Link>
                        <Link href="/roadmaps" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">
                            Roadmaps
                        </Link>
                        <Link href="/resources" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">
                            Resources
                        </Link>
                        <Link href="/jobs" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">
                            Jobs
                        </Link>
                        <Link href="/tools" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">
                            Tools
                        </Link>
                        <Link href="/resume" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">
                            Resume
                        </Link>
                        <Link href="/contact" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">
                            Contact
                        </Link>

                        {/* Clerk Authentication */}
                        <div className="h-6 w-px bg-slate-200 mx-2"></div>

                        {!isSignedIn ? (
                            <div className="flex items-center space-x-3 shrink-0">
                                <SignInButton mode="modal">
                                    <button className="text-slate-600 hover:text-blue-600 font-medium text-sm transition-colors cursor-pointer">
                                        Sign In
                                    </button>
                                </SignInButton>
                                <SignUpButton mode="modal">
                                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-4 py-2 rounded-xl transition-all shadow-sm hover:shadow cursor-pointer">
                                        Get Started
                                    </button>
                                </SignUpButton>
                            </div>
                        ) : (
                            <div className="flex items-center space-x-4 shrink-0">
                                <Link href="/profile" className="text-slate-600 hover:text-blue-600 font-medium text-sm flex items-center gap-1.5 transition-colors">
                                    <UserIcon className="h-4 w-4" /> Profile
                                </Link>
                                <UserButton 
                                    appearance={{
                                        elements: {
                                            avatarBox: 'w-9 h-9 border border-slate-200 rounded-full shadow-sm hover:scale-105 transition-transform'
                                        }
                                    }}
                                />
                            </div>
                        )}
                    </div>

                    {/* Mobile Menu Button - triggered on screen widths below xl */}
                    <div className="xl:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-slate-600 hover:text-slate-900 focus:outline-none"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile/Tablet Menu */}
            {isOpen && (
                <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-4 space-y-1">
                    <Link
                        href="/projects"
                        className="block px-3 py-2 rounded-xl text-base font-medium text-slate-600 hover:text-blue-600 hover:bg-slate-50"
                        onClick={() => setIsOpen(false)}
                    >
                        Projects
                    </Link>
                    <Link
                        href="/certifications"
                        className="block px-3 py-2 rounded-xl text-base font-medium text-slate-600 hover:text-blue-600 hover:bg-slate-50"
                        onClick={() => setIsOpen(false)}
                    >
                        Certifications
                    </Link>
                    <Link
                        href="/project-help"
                        className="block px-3 py-2 rounded-xl text-base font-medium text-slate-600 hover:text-blue-600 hover:bg-slate-50"
                        onClick={() => setIsOpen(false)}
                    >
                        Mentorship
                    </Link>
                    <Link
                        href="/roadmaps"
                        className="block px-3 py-2 rounded-xl text-base font-medium text-slate-600 hover:text-blue-600 hover:bg-slate-50"
                        onClick={() => setIsOpen(false)}
                    >
                        Roadmaps
                    </Link>
                    <Link
                        href="/resources"
                        className="block px-3 py-2 rounded-xl text-base font-medium text-slate-600 hover:text-blue-600 hover:bg-slate-50"
                        onClick={() => setIsOpen(false)}
                    >
                        Resources
                    </Link>
                    <Link
                        href="/jobs"
                        className="block px-3 py-2 rounded-xl text-base font-medium text-slate-600 hover:text-blue-600 hover:bg-slate-50"
                        onClick={() => setIsOpen(false)}
                    >
                        Jobs
                    </Link>
                    <Link
                        href="/tools"
                        className="block px-3 py-2 rounded-xl text-base font-medium text-slate-600 hover:text-blue-600 hover:bg-slate-50"
                        onClick={() => setIsOpen(false)}
                    >
                        Tools
                    </Link>
                    <Link
                        href="/resume"
                        className="block px-3 py-2 rounded-xl text-base font-medium text-slate-600 hover:text-blue-600 hover:bg-slate-50"
                        onClick={() => setIsOpen(false)}
                    >
                        Resume Builder
                    </Link>
                    <Link
                        href="/contact"
                        className="block px-3 py-2 rounded-xl text-base font-medium text-slate-600 hover:text-blue-600 hover:bg-slate-50"
                        onClick={() => setIsOpen(false)}
                    >
                        Contact Us
                    </Link>

                    <div className="h-px bg-slate-100 my-2"></div>

                    {!isSignedIn ? (
                        <div className="grid grid-cols-2 gap-2 pt-2">
                            <SignInButton mode="modal">
                                <button className="w-full text-center py-2 border border-slate-200 rounded-xl font-medium text-slate-600 hover:bg-slate-50 text-sm animate-fade-in">
                                    Sign In
                                </button>
                            </SignInButton>
                            <SignUpButton mode="modal">
                                <button className="w-full text-center py-2 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 text-sm animate-fade-in">
                                    Sign Up
                                </button>
                            </SignUpButton>
                        </div>
                    ) : (
                        <div className="flex flex-col gap-2 pt-2">
                            <Link
                                href="/profile"
                                className="flex items-center gap-2 px-3 py-2 rounded-xl text-base font-medium text-slate-600 hover:text-blue-600 hover:bg-slate-50"
                                onClick={() => setIsOpen(false)}
                            >
                                <UserIcon className="h-5 w-5" /> Profile
                            </Link>
                            <div className="flex items-center gap-3 px-3 py-2">
                                <UserButton />
                                <span className="text-sm font-semibold text-slate-600">Account Options</span>
                            </div>
                        </div>
                    )}
                </div>
            )}
            {/* Incomplete Profile Referral Reminder Banner */}
            {!profileComplete && isSignedIn && (
                <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-white py-2 px-4 text-xs sm:text-sm font-bold text-center flex items-center justify-center gap-2 border-t border-amber-600 shadow-inner">
                    <AlertCircle className="h-4 w-4 shrink-0 animate-bounce" />
                    <span>Please complete your bio, skills, and resume link to unlock direct job referral requests!</span>
                    <Link href="/profile" className="bg-white/20 hover:bg-white/30 text-white px-2.5 py-0.5 rounded-lg transition-colors ml-2 font-black text-xs">Edit Profile →</Link>
                </div>
            )}
        </nav>
    );
}
