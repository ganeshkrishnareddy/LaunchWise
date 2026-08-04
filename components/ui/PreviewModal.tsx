'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, ZoomIn, ZoomOut, Maximize2, ShieldCheck, Check, Search, FileText } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

import { ResumeTemplate } from '@/data/resumes';

interface PreviewModalProps {
    isOpen: boolean;
    onClose: () => void;
    template: ResumeTemplate | null;
}

export function PreviewModal({ isOpen, onClose, template }: PreviewModalProps) {
    const [zoom, setZoom] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const containerRef = useRef<HTMLDivElement>(null);

    // Reset loading state when template changes
    useEffect(() => {
        if (template) {
            setIsLoading(true);
        }
    }, [template]);

    if (!template) return null;

    const { previewImage, name, downloadUrl, atsFeatures } = template;

    const toggleZoom = () => {
        setZoom(zoom === 1 ? 1.5 : 1);
    };

    const handleFullScreen = () => {
        if (containerRef.current?.requestFullscreen) {
            containerRef.current.requestFullscreen();
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 md:p-6 lg:p-10">
                    {/* Backdrop - Darker blur */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-slate-950/98 backdrop-blur-xl"
                    />

                    {/* Modal Content - Dynamic Height, immersive */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98, y: 40 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.98, y: 40 }}
                        className="relative w-full max-w-7xl bg-white rounded-[2.5rem] shadow-[0_32px_128px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col h-[94vh]"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-8 py-5 border-b border-slate-100 bg-white z-20">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-brand-50 flex items-center justify-center text-brand-600">
                                    <FileText size={24} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-black text-slate-900 leading-tight tracking-tight">{name}</h3>
                                    <div className="flex items-center gap-2">
                                        <div className="flex items-center gap-1 bg-green-50 text-green-700 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">
                                            <ShieldCheck size={12} /> ATS-Safe
                                        </div>
                                        <p className="text-[11px] text-slate-400 font-bold uppercase tracking-widest">Verified Layout • Updated Feb 2026</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="hidden md:flex items-center bg-slate-50 border border-slate-100 rounded-2xl px-2 py-1.5 mr-2">
                                    <button
                                        onClick={() => setZoom(Math.max(1, zoom - 0.25))}
                                        className="p-1.5 text-slate-400 hover:text-slate-900 hover:bg-white hover:shadow-sm rounded-xl transition-all"
                                        title="Zoom Out"
                                    >
                                        <ZoomOut size={18} />
                                    </button>
                                    <span className="text-xs font-black text-slate-900 px-3 min-w-[60px] text-center font-mono">
                                        {Math.round(zoom * 100)}%
                                    </span>
                                    <button
                                        onClick={() => setZoom(Math.min(2, zoom + 0.25))}
                                        className="p-1.5 text-slate-400 hover:text-slate-900 hover:bg-white hover:shadow-sm rounded-xl transition-all"
                                        title="Zoom In"
                                    >
                                        <ZoomIn size={18} />
                                    </button>
                                </div>
                                <button
                                    onClick={handleFullScreen}
                                    className="p-3 text-slate-400 hover:text-slate-900 hover:bg-slate-50 border border-slate-100 rounded-2xl transition-all hidden sm:flex"
                                    title="Full Screen"
                                >
                                    <Maximize2 size={20} />
                                </button>
                                <button
                                    onClick={onClose}
                                    className="p-3 bg-slate-900 text-white hover:bg-slate-800 rounded-2xl transition-all flex items-center justify-center shadow-lg shadow-slate-900/20"
                                >
                                    <X size={20} />
                                </button>
                            </div>
                        </div>

                        {/* Image Body (Deep Immersive Scroll) */}
                        <div
                            ref={containerRef}
                            className="flex-grow overflow-auto bg-slate-50 p-6 md:p-12 lg:p-20 custom-scrollbar flex justify-center bg-[radial-gradient(#e2e8f0_1.5px,transparent_1.5px)] [background-size:24px_24px] relative"
                        >
                            <motion.div
                                animate={{ scale: zoom }}
                                transition={{ type: 'spring', stiffness: 350, damping: 35 }}
                                className="relative bg-white shadow-[0_20px_60px_rgba(0,0,0,0.15)] border border-slate-200/60 origin-top h-fit min-h-[1100px]"
                                style={{ width: '100%', maxWidth: '850px' }}
                            >
                                {isLoading && (
                                    <div className="absolute inset-0 flex items-center justify-center bg-slate-50 z-10">
                                        <div className="flex flex-col items-center gap-4">
                                            <div className="w-12 h-12 border-4 border-brand-200 border-t-brand-600 rounded-full animate-spin"></div>
                                            <p className="text-sm font-bold text-slate-400 animate-pulse">OPTIMIZING PREVIEW...</p>
                                        </div>
                                    </div>
                                )}
                                <img
                                    src={previewImage}
                                    alt={name}
                                    className={`w-full h-auto select-none transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
                                    onLoad={() => setIsLoading(false)}
                                    onError={(e) => {
                                        setIsLoading(false);
                                        (e.target as HTMLImageElement).src = `https://placehold.co/850x1200/white/slate?text=${encodeURIComponent(name)}+Preview%0A%0AProfessional+ATS+Structure%0A100%+Safe+for+Recruiters&font=roboto`;
                                    }}
                                />

                                {/* Status Indicator Overlay - authoritative */}
                                {!isLoading && (
                                    <div className="absolute top-8 right-8 flex flex-col gap-3 items-end">
                                        <div className="bg-slate-900 text-white px-5 py-2 rounded-2xl text-xs font-black shadow-2xl flex items-center gap-2 select-none border border-white/20">
                                            <ShieldCheck size={16} className="text-green-400" />
                                            ATS-PARSED 100%
                                        </div>
                                        <div className="bg-white/90 backdrop-blur text-slate-600 px-4 py-1.5 rounded-xl text-[10px] font-bold shadow-lg flex items-center gap-2 select-none border border-slate-200 italic">
                                            Verified Feb 2026
                                        </div>
                                    </div>
                                )}
                            </motion.div>

                            {/* Floating Zoom Indicator (Bottom Right) */}
                            <div className="absolute bottom-10 right-10 z-30">
                                <div className="bg-white/80 backdrop-blur px-3 py-1.5 rounded-full border border-slate-200 text-[10px] font-black text-slate-400 shadow-sm flex items-center gap-2">
                                    <Search size={12} /> SCRUB TO ZOOM
                                </div>
                            </div>
                        </div>

                        {/* Professional Feature Row & Footer Actions */}
                        <div className="bg-white border-t border-slate-100 z-20 shadow-[0_-12px_48px_rgba(0,0,0,0.05)]">
                            {/* Feature Row - dynamic */}
                            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 px-8 py-5 bg-slate-50/80 border-b border-slate-100">
                                {atsFeatures?.map((feature: string, i: number) => (
                                    <span key={i} className="flex items-center gap-2 text-xs font-black text-slate-800 uppercase tracking-widest">
                                        <Check size={16} className="text-green-600 stroke-[3px]" /> {feature}
                                    </span>
                                ))}
                            </div>

                            <div className="p-6 px-10 flex flex-col lg:flex-row items-center justify-between gap-6">
                                <div className="flex items-center gap-5">
                                    <div className="flex -space-x-3">
                                        {[1, 2, 3].map(i => (
                                            <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center overflow-hidden">
                                                <img src={`https://i.pravatar.cc/100?u=${i + name}`} alt="User" />
                                            </div>
                                        ))}
                                    </div>
                                    <div>
                                        <p className="text-base font-black text-slate-900 tracking-tight">Used by 1,200+ students this week</p>
                                        <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Trusted by candidates applying to FAANG & Startups</p>
                                    </div>
                                </div>
                                <a
                                    href={downloadUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full lg:w-auto flex items-center justify-center px-12 py-5 bg-brand-600 text-white rounded-[1.25rem] hover:bg-brand-700 transition-all font-black text-lg shadow-[0_20px_50px_rgba(100,52,252,0.3)] hover:shadow-[0_25px_60px_rgba(100,52,252,0.5)] hover:-translate-y-1 active:translate-y-0 group"
                                >
                                    <Download size={24} className="mr-3 group-hover:scale-110 transition-transform" />
                                    Get This ATS-Optimized Resume
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
