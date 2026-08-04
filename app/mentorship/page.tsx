'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Send, Rocket, Target, Code, Calendar } from 'lucide-react';

export default function ProjectHelpPage() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        
        const formData = new FormData(e.target as HTMLFormElement);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch('https://formspree.io/f/mwvyknre', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({ ...data, _subject: "New Project Help Inquiry" })
            });

            if (response.ok) {
                setIsSubmitted(true);
            } else {
                alert('Oops! There was a problem submitting your form. Please try again.');
            }
        } catch (error) {
            alert('Something went wrong. Please check your connection.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-slate-50">
            

            <main className="flex-grow pt-24 pb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <div className="inline-flex items-center space-x-2 bg-purple-50 border border-purple-100 px-4 py-2 rounded-full mb-6">
                            <Rocket className="w-4 h-4 text-purple-600" />
                            <span className="text-sm font-bold text-purple-700 uppercase tracking-wider">Premium Mentorship</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
                            Assignment & <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-purple-600">Project Help</span>
                        </h1>
                        <p className="text-lg text-slate-600 font-medium">
                            Stuck on an academic project? Need a resume-boosting mini project? Our industry experts will guide you step-by-step.
                        </p>
                    </div>

                    <div className="max-w-3xl mx-auto">
                        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 relative overflow-hidden">
                            <AnimatePresence mode="wait">
                                {!isSubmitted ? (
                                    <motion.form
                                        key="form"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        onSubmit={handleSubmit}
                                        className="space-y-6 relative z-10"
                                    >
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {/* Personal Info */}
                                            <div>
                                                <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Full Name</label>
                                                <input required type="text" name="name" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all bg-slate-50/50" placeholder="John Doe" />
                                            </div>
                                            <div>
                                                <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Email Address</label>
                                                <input required type="email" name="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all bg-slate-50/50" placeholder="john@example.com" />
                                            </div>
                                            <div>
                                                <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Phone Number</label>
                                                <input required type="tel" name="phone" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all bg-slate-50/50" placeholder="+91 9876543210" />
                                            </div>

                                            {/* Academic Info */}
                                            <div>
                                                <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2">College Name</label>
                                                <input required type="text" name="college" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all bg-slate-50/50" placeholder="MIT, Stanford, etc." />
                                            </div>
                                            <div>
                                                <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Degree & Branch</label>
                                                <input required type="text" name="degree" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all bg-slate-50/50" placeholder="B.Tech Computer Science" />
                                            </div>
                                            <div>
                                                <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Year of Study</label>
                                                <select required name="year" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all bg-slate-50/50 appearance-none font-medium text-slate-700">
                                                    <option value="">Select Year</option>
                                                    <option value="1st Year">1st Year</option>
                                                    <option value="2nd Year">2nd Year</option>
                                                    <option value="3rd Year">3rd Year</option>
                                                    <option value="4th Year">4th Year</option>
                                                    <option value="Graduated">Graduated / Working</option>
                                                </select>
                                            </div>

                                            {/* Project Info */}
                                            <div>
                                                <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Project Type</label>
                                                <select required name="projectType" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all bg-slate-50/50 appearance-none font-medium text-slate-700">
                                                    <option value="">Select Type</option>
                                                    <option value="Mini Project">Mini Project</option>
                                                    <option value="Major/Final Year Project">Major / Final Year Project</option>
                                                    <option value="Internship Project">Internship Project</option>
                                                    <option value="Resume Building Project">Resume Building Project</option>
                                                    <option value="Assignment Help">Assignment Help</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Interested Domain</label>
                                                <select required name="domain" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all bg-slate-50/50 appearance-none font-medium text-slate-700">
                                                    <option value="">Select Domain</option>
                                                    <option value="Full Stack">Full Stack Development</option>
                                                    <option value="Data Science">Data Science & AI</option>
                                                    <option value="Cloud/DevOps">Cloud & DevOps</option>
                                                    <option value="Cybersecurity">Cybersecurity</option>
                                                    <option value="Mobile App">Mobile App Development</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Deadline</label>
                                                <input required type="date" name="deadline" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all bg-slate-50/50 text-slate-700" />
                                            </div>
                                            <div>
                                                <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Budget (Optional)</label>
                                                <input type="text" name="budget" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all bg-slate-50/50" placeholder="e.g. $100 or ₹5000" />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Preferred Technologies & Details</label>
                                            <textarea required name="details" rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all bg-slate-50/50" placeholder="Tell us more about the project requirements, preferred stack (e.g. React, Python), and your career goals..."></textarea>
                                        </div>

                                        <button
                                            disabled={isLoading}
                                            type="submit"
                                            className="w-full bg-slate-900 text-white py-4 rounded-2xl font-black text-lg hover:bg-brand-600 transition-all flex items-center justify-center shadow-xl shadow-slate-900/20 active:scale-[0.98] disabled:opacity-70"
                                        >
                                            {isLoading ? (
                                                <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
                                            ) : (
                                                <>
                                                    <Send className="w-5 h-5 mr-3" />
                                                    Submit Request
                                                </>
                                            )}
                                        </button>
                                    </motion.form>
                                ) : (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="py-16 text-center flex flex-col items-center"
                                    >
                                        <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-8 shadow-lg shadow-green-200/50">
                                            <CheckCircle2 size={48} />
                                        </div>
                                        <h2 className="text-3xl font-black text-slate-900 mb-4">Request Received!</h2>
                                        <p className="text-slate-600 font-medium mb-8 text-lg max-w-md mx-auto">
                                            Thank you for reaching out. Our technical team is reviewing your requirements and will contact you shortly to discuss the next steps.
                                        </p>
                                        <button
                                            onClick={() => setIsSubmitted(false)}
                                            className="text-brand-600 font-black text-sm uppercase tracking-widest hover:underline"
                                        >
                                            Submit another request
                                        </button>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <div className="absolute top-0 right-0 w-48 h-48 bg-brand-50 rounded-full -mr-24 -mt-24 z-0 opacity-50"></div>
                            <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-50 rounded-full -ml-24 -mb-24 z-0 opacity-50"></div>
                        </div>
                    </div>
                </div>
            </main>

            
        </div>
    );
}
