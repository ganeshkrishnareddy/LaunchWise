"use client";

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { motion } from "framer-motion";
import { Search } from "lucide-react";

export function Hero() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');

  const popularSearches = [
    "GitHub Student Pack",
    "Adobe",
    "Canva",
    "Cursor",
    "JetBrains",
    "AWS",
    "Azure",
    "Spotify",
    "Notion",
  ];

  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden bg-background">
      <div className="absolute top-0 inset-x-0 h-[600px] bg-gradient-to-b from-brand-500/10 to-transparent blur-3xl -z-10 dark:from-brand-600/5" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="inline-flex flex-col sm:flex-row gap-2 mb-6 text-xl font-bold text-muted-foreground">
              <span className="text-foreground">Jobs.</span>
              <span className="text-foreground">Internships.</span>
              <span className="text-brand-600 dark:text-brand-400">Student Discounts.</span>
              <span className="text-foreground">AI Tools.</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-foreground mb-6 leading-[1.1]">
              Everything Students Need to <span className="text-gradient">Launch Their Career.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed">
              LaunchWise helps students discover internships, verified jobs, exclusive student offers, cloud credits, AI tools, learning resources, and resume builders—all in one trusted platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-10">
              <Link 
                  href="/perks"
                  className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-brand-600 font-pj rounded-xl hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-600 w-full sm:w-auto"
              >        
                Explore Student Perks
              </Link>
              <Link href="/#jobs" className="px-8 py-4 rounded-full bg-secondary text-secondary-foreground font-semibold text-lg hover:bg-secondary/80 transition-colors border border-border focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-500/50 disabled:opacity-50 text-center">
                Find Jobs
              </Link>
            </div>

            <div className="flex items-center gap-3 mb-10">
              <div className="flex -space-x-3">
                {[
                  "https://randomuser.me/api/portraits/women/44.jpg",
                  "https://randomuser.me/api/portraits/men/32.jpg",
                  "https://randomuser.me/api/portraits/women/68.jpg",
                  "https://randomuser.me/api/portraits/men/46.jpg"
                ].map((src, i) => (
                  <img 
                    key={i} 
                    src={src}
                    alt="Student"
                    className="w-10 h-10 rounded-full border-2 border-background object-cover"
                  />
                ))}
              </div>
              <div className="text-sm font-medium">
                <span className="text-foreground font-bold">50,000+</span> <span className="text-muted-foreground">Students</span>
              </div>
            </div>

            <div className="relative mb-6">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-muted-foreground" />
              </div>
              <input 
                type="text" 
                placeholder="Search jobs, Adobe, GitHub, internships, AI tools..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && searchTerm) {
                    router.push(`/perks?q=${encodeURIComponent(searchTerm)}`);
                  }
                }}
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-xl shadow-brand-500/5 focus:outline-none focus:ring-2 focus:ring-brand-500 text-foreground text-base transition-shadow"
              />
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm font-medium text-muted-foreground mr-2">Popular:</span>
              {popularSearches.map((term, i) => (
                <button 
                  key={i}
                  onClick={() => router.push(`/perks?q=${encodeURIComponent(term)}`)}
                  className="px-3 py-1.5 rounded-full bg-secondary/50 hover:bg-brand-100 hover:text-brand-700 dark:hover:bg-brand-900/30 dark:hover:text-brand-300 text-xs font-medium text-secondary-foreground transition-colors border border-border cursor-pointer"
                >
                  {term}
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="relative lg:h-[650px] flex items-center justify-center hidden lg:flex"
          >
            <div className="absolute w-[400px] h-[400px] bg-brand-500/20 rounded-full blur-[120px]" />
            
            <div className="relative w-full max-w-lg aspect-square rounded-full border border-brand-500/20 border-dashed flex items-center justify-center">
              
              <motion.div 
                animate={{ y: [0, -15, 0] }} 
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 right-10 w-40 h-auto glass rounded-2xl flex flex-col p-4 shadow-xl border border-white/20 dark:border-white/10"
              >
                <span className="text-[10px] font-bold text-brand-600 uppercase tracking-wider mb-2">Internship</span>
                <h4 className="font-bold text-foreground text-sm leading-tight mb-1">Software Engineer Intern</h4>
                <p className="text-xs text-muted-foreground">Google • $45/hr</p>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 20, 0] }} 
                transition={{ duration: 5, delay: 1, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-20 -left-12 w-32 h-auto glass-dark rounded-2xl flex flex-col items-center justify-center p-5 shadow-2xl"
              >
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-3 border border-white/20">
                  <span className="text-white font-bold text-lg">C</span>
                </div>
                <span className="font-semibold text-white text-sm">Cursor AI</span>
                <span className="text-xs text-brand-400 mt-1">Pro Free</span>
              </motion.div>
              
              <motion.div 
                animate={{ y: [0, -12, 0] }} 
                transition={{ duration: 4, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-16 -right-8 w-44 h-auto glass rounded-2xl flex flex-col p-4 shadow-lg border-brand-500/30"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-[#000000] text-white rounded-xl flex items-center justify-center">
                    <span className="font-bold text-sm">GH</span>
                  </div>
                  <div>
                    <span className="font-semibold text-sm block leading-none">GitHub</span>
                    <span className="text-[10px] text-green-600 dark:text-green-400 font-medium">Student Pack</span>
                  </div>
                </div>
                <button className="w-full mt-2 py-1.5 rounded-lg bg-foreground text-background text-xs font-semibold">Claim Offer</button>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }} 
                transition={{ duration: 6, delay: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-32 -left-6 w-36 h-auto bg-card rounded-2xl flex flex-col p-4 shadow-xl border border-border"
              >
                <span className="text-[10px] font-bold text-amber-600 uppercase tracking-wider mb-2">Referral</span>
                <h4 className="font-bold text-foreground text-sm leading-tight mb-1">Stripe SWE</h4>
                <p className="text-xs text-muted-foreground">Referred by Alex</p>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
