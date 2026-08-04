'use client';

import { motion, useMotionValue, useSpring, useTransform, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { jobs } from '@/data/jobs';

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
    const ref = useRef<HTMLDivElement>(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {
        damping: 30,
        stiffness: 100,
    });
    const displayValue = useTransform(springValue, (latest) => 
        Math.floor(latest).toLocaleString() + suffix
    );

    useEffect(() => {
        const controls = animate(motionValue, value, { duration: 2, ease: "easeOut" });
        return () => controls.stop();
    }, [value, motionValue]);

    return <motion.span ref={ref}>{displayValue}</motion.span>;
}

export function Stats() {
    return (
        <section className="relative py-12 -mt-12 z-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 text-center transform hover:-translate-y-1 transition-transform">
                        <div className="text-4xl font-black text-brand-600 mb-1">
                            <Counter value={10000} suffix="+" />
                        </div>
                        <div className="text-slate-500 font-medium uppercase tracking-widest text-[10px]">Students Helped</div>
                    </div>
                    <div className="bg-brand-600 p-6 rounded-3xl shadow-xl shadow-brand-200/50 text-center transform hover:-translate-y-1 transition-transform">
                        <div className="text-4xl font-black text-white mb-1">
                            <Counter value={jobs.length} suffix="+" />
                        </div>
                        <div className="text-brand-100 font-medium uppercase tracking-widest text-[10px]">Live Opportunities</div>
                    </div>
                    <div className="bg-white p-6 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 text-center transform hover:-translate-y-1 transition-transform">
                        <div className="text-4xl font-black text-purple-600 mb-1">
                            <Counter value={50} suffix="+" />
                        </div>
                        <div className="text-slate-500 font-medium uppercase tracking-widest text-[10px]">Free Resources</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
