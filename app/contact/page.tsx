'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Mail, MessageSquare, CheckCircle2, HelpCircle, ChevronRight, Heart, Globe } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactPage() {
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
                body: JSON.stringify(data)
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

    const faqs = [
        { q: "Is LaunchWise really free?", a: "Yes, 100% free for students. We will never charge you for access to opportunities." },
        { q: "How do you verify jobs?", a: "We manually check every listing to ensure it leads to official company domains and legitimate roles." },
        { q: "Can I suggest an internship?", a: "Absolutely! Select 'Suggest Internship' in the contact form and share the link." }
    ];

    return (
        <div className="min-h-screen flex flex-col bg-slate-50">
            

            <main className="flex-grow pt-24 pb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl mx-auto text-center mb-12">
                        <h1 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Get in Touch</h1>
                        <p className="text-slate-600 font-medium mb-8">
                            Have a question, suggestion, or found a bug? We usually reply within <span className="text-brand-600 font-bold">24–48 hours</span>.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm font-bold flex-wrap">
                            <a href="mailto:team@launchwise.tech" className="flex items-center text-slate-700 hover:text-brand-600 transition-colors bg-white px-6 py-3.5 rounded-2xl shadow-sm border border-slate-200 hover:border-brand-300">
                                <Mail className="w-5 h-5 mr-3 text-brand-500" />
                                team@launchwise.tech
                            </a>
                            <a href="mailto:teamlaunchwise@gmail.com" className="flex items-center text-slate-700 hover:text-brand-600 transition-colors bg-white px-6 py-3.5 rounded-2xl shadow-sm border border-slate-200 hover:border-brand-300">
                                <Mail className="w-5 h-5 mr-3 text-brand-500" />
                                teamlaunchwise@gmail.com
                            </a>
                            <a href="https://launchwise.tech" target="_blank" rel="noopener noreferrer" className="flex items-center text-slate-700 hover:text-brand-600 transition-colors bg-white px-6 py-3.5 rounded-2xl shadow-sm border border-slate-200 hover:border-brand-300">
                                <Globe className="w-5 h-5 mr-3 text-brand-500" />
                                launchwise.tech
                            </a>
                        </div>
                    </div>

                    <div className="max-w-xl mx-auto mb-16">
                        <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 relative overflow-hidden">
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
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                            <div>
                                                <label htmlFor="name" className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Name</label>
                                                <input
                                                    required
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all bg-slate-50/50"
                                                    placeholder="Alex Doe"
                                                />
                                            </div>

                                            <div>
                                                <label htmlFor="category" className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Category</label>
                                                <select
                                                    id="category"
                                                    name="category"
                                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all bg-slate-50/50 appearance-none font-medium text-slate-700"
                                                >
                                                    <option>General Inquiry</option>
                                                    <option>Report Fake Job</option>
                                                    <option>Suggest Internship</option>
                                                    <option>Resume Question</option>
                                                    <option>Bug Report</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Email Address</label>
                                            <input
                                                required
                                                type="email"
                                                id="email"
                                                name="email"
                                                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all bg-slate-50/50"
                                                placeholder="alex@example.com"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="message" className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2">How can we help?</label>
                                            <textarea
                                                required
                                                id="message"
                                                name="message"
                                                rows={4}
                                                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all bg-slate-50/50"
                                                placeholder="Tell us more about your inquiry..."
                                            ></textarea>
                                        </div>

                                        <button
                                            disabled={isLoading}
                                            type="submit"
                                            className="w-full bg-brand-600 text-white py-4 rounded-2xl font-black text-lg hover:bg-brand-700 transition-all flex items-center justify-center shadow-xl shadow-brand-500/20 active:scale-[0.98] disabled:opacity-70"
                                        >
                                            {isLoading ? (
                                                <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
                                            ) : (
                                                <>
                                                    <MessageSquare className="w-5 h-5 mr-3" />
                                                    Send Message
                                                </>
                                            )}
                                        </button>
                                    </motion.form>
                                ) : (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="py-12 text-center flex flex-col items-center"
                                    >
                                        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-green-200/50">
                                            <CheckCircle2 size={40} />
                                        </div>
                                        <h2 className="text-2xl font-black text-slate-900 mb-2">Message Sent!</h2>
                                        <p className="text-slate-500 font-medium mb-8">
                                            We've received your inquiry and will get back to you within 24–48 hours.
                                        </p>
                                        <button
                                            onClick={() => setIsSubmitted(false)}
                                            className="text-brand-600 font-black text-sm uppercase tracking-widest hover:underline"
                                        >
                                            Send another message
                                        </button>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-50 rounded-full -mr-16 -mt-16 z-0"></div>
                        </div>

                        <div className="bg-brand-50 rounded-[2.5rem] p-8 md:p-12 mb-16 text-center border border-brand-100">
                            <h2 className="text-2xl font-black text-slate-900 mb-4">Enjoying LaunchWise?</h2>
                            <p className="text-slate-600 font-medium mb-8 max-w-lg mx-auto">
                                We're a small team dedicated to keeping this platform free for students. Your support helps us cover server costs and verification efforts.
                            </p>
                            <a
                                href="https://razorpay.me/@ProgVision"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-8 py-4 bg-brand-600 text-white rounded-[2rem] font-black text-lg hover:bg-brand-700 transition-all shadow-2xl shadow-brand-500/20 active:scale-95"
                            >
                                <Heart className="w-5 h-5 mr-3 fill-current" />
                                Buy Me a Coffee
                            </a>
                        </div>
                    </div>

                    {/* FAQ Section */}
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-10">
                            <h2 className="text-2xl font-black text-slate-900 flex items-center justify-center gap-3">
                                <HelpCircle className="text-brand-600" /> Common Questions
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 gap-4">
                            {faqs.map((faq, i) => (
                                <div key={i} className="group bg-white p-6 rounded-2xl border border-slate-100 hover:border-brand-200 transition-all shadow-sm">
                                    <div className="flex items-start justify-between gap-4">
                                        <div>
                                            <p className="font-black text-slate-900 mb-2">{faq.q}</p>
                                            <p className="text-sm text-slate-500 leading-relaxed font-medium">{faq.a}</p>
                                        </div>
                                        <ChevronRight size={20} className="text-slate-300 group-hover:text-brand-500 transition-colors mt-1 shrink-0" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>

            
        </div>
    );
}
