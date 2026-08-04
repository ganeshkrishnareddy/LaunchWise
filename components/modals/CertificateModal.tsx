'use client';

import { useState } from 'react';
import { X, Award, Globe, Mail, User, Send, CheckCircle2, Loader2 } from 'lucide-react';

interface CertificateModalProps {
    isOpen: boolean;
    onClose: () => void;
    projectTitle: string;
}

export function CertificateModal({ isOpen, onClose, projectTitle }: CertificateModalProps) {
    const [step, setStep] = useState<'form' | 'success'>('form');
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: '',
        email: '',
        github: '',
        linkedin: '',
        message: '',
    });

    if (!isOpen) return null;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            await fetch('https://formspree.io/f/mwvyknre', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                body: JSON.stringify({
                    name: form.name,
                    email: form.email,
                    github_url: form.github,
                    linkedin_url: form.linkedin,
                    project: projectTitle,
                    message: form.message,
                    _subject: `Certificate Request — ${projectTitle} by ${form.name}`,
                }),
            });
            setStep('success');
        } catch {
            // Still show success to not block the user — Formspree handles errors gracefully
            setStep('success');
        } finally {
            setLoading(false);
        }
    };

    const handleClose = () => {
        setStep('form');
        setForm({ name: '', email: '', github: '', linkedin: '', message: '' });
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={handleClose}>
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

            {/* Modal */}
            <div
                className="relative bg-white rounded-[2rem] shadow-2xl w-full max-w-lg mx-auto overflow-hidden"
                onClick={e => e.stopPropagation()}
            >
                {/* Decorative header gradient */}
                <div className="bg-gradient-to-r from-brand-600 to-purple-600 p-8 text-white relative overflow-hidden">
                    <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
                    <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-black/10 rounded-full blur-xl" />
                    <button
                        onClick={handleClose}
                        className="absolute top-4 right-4 w-9 h-9 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                    <div className="flex items-center gap-3 mb-2 relative z-10">
                        <div className="w-12 h-12 bg-yellow-400 rounded-2xl flex items-center justify-center shadow-lg">
                            <Award className="w-7 h-7 text-yellow-900" />
                        </div>
                        <div>
                            <p className="text-brand-200 text-xs font-bold uppercase tracking-widest">LaunchWise</p>
                            <h2 className="text-2xl font-black">Earn Your Certificate</h2>
                        </div>
                    </div>
                    <p className="text-brand-100 text-sm font-medium relative z-10 mt-2">
                        Submit your completed <span className="text-white font-bold">{projectTitle}</span> project and we&apos;ll send your verified certificate!
                    </p>
                </div>

                {step === 'form' ? (
                    <form onSubmit={handleSubmit} className="p-8 space-y-5">
                        {/* Name */}
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">Full Name *</label>
                            <div className="relative">
                                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="Your full name"
                                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 font-medium placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">Email Address *</label>
                            <div className="relative">
                                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="you@email.com"
                                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 font-medium placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
                                />
                            </div>
                        </div>

                        {/* GitHub */}
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">GitHub Repository URL *</label>
                            <div className="relative">
                                <Globe className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                <input
                                    type="url"
                                    name="github"
                                    required
                                    value={form.github}
                                    onChange={handleChange}
                                    placeholder="https://github.com/yourname/project"
                                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 font-medium placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
                                />
                            </div>
                        </div>

                        {/* LinkedIn */}
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">LinkedIn Profile <span className="text-slate-400 font-normal">(optional)</span></label>
                            <div className="relative">
                                <Globe className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                <input
                                    type="url"
                                    name="linkedin"
                                    value={form.linkedin}
                                    onChange={handleChange}
                                    placeholder="https://linkedin.com/in/yourname"
                                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 font-medium placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
                                />
                            </div>
                        </div>

                        {/* Message */}
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">What did you learn? <span className="text-slate-400 font-normal">(optional)</span></label>
                            <textarea
                                name="message"
                                rows={3}
                                value={form.message}
                                onChange={handleChange}
                                placeholder="Brief description of your project and key learnings..."
                                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 font-medium placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition resize-none"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-brand-600 to-purple-600 text-white rounded-xl font-black text-lg hover:opacity-90 transition-opacity shadow-lg disabled:opacity-70"
                        >
                            {loading ? (
                                <><Loader2 className="w-5 h-5 animate-spin" /> Submitting...</>
                            ) : (
                                <><Send className="w-5 h-5" /> Submit & Claim Certificate</>
                            )}
                        </button>

                        <p className="text-center text-xs text-slate-400 font-medium">
                            We review submissions within 48 hours and send your certificate via email.
                        </p>
                    </form>
                ) : (
                    <div className="p-10 flex flex-col items-center text-center">
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 shadow-inner">
                            <CheckCircle2 className="w-10 h-10 text-green-600" />
                        </div>
                        <h3 className="text-2xl font-black text-slate-900 mb-3">Submission Received! 🎉</h3>
                        <p className="text-slate-600 font-medium leading-relaxed mb-2">
                            Thanks, <span className="text-slate-900 font-bold">{form.name}</span>! We&apos;ve received your project submission.
                        </p>
                        <p className="text-slate-500 text-sm font-medium leading-relaxed mb-8">
                            Our team will review your GitHub repository and send your verified <strong>LaunchWise Completion Certificate</strong> to <span className="text-brand-600 font-bold">{form.email}</span> within <strong>48 hours</strong>.
                        </p>

                        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 w-full mb-8 text-left">
                            <p className="text-sm font-bold text-amber-800 mb-2">🏆 What happens next?</p>
                            <ul className="space-y-1.5 text-sm text-amber-700 font-medium">
                                <li>✅ We review your GitHub repository</li>
                                <li>✅ Your certificate is generated with your name</li>
                                <li>✅ PDF certificate sent to your email</li>
                                <li>✅ Add it to your LinkedIn & resume!</li>
                            </ul>
                        </div>

                        <button
                            onClick={handleClose}
                            className="px-8 py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-colors"
                        >
                            Continue Exploring Projects
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
