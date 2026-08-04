"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export function Newsletter() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto rounded-[2rem] bg-gradient-to-br from-brand-900 to-black p-10 md:p-16 text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/30 rounded-full blur-[100px] -z-10"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-600/20 rounded-full blur-[100px] -z-10"></div>

        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Never miss a student offer.</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto mb-10">
            Get the best student discounts, freebies, and early-access betas delivered straight to your inbox every week.
          </p>

          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-white/40" />
              </div>
              <input 
                type="email" 
                placeholder="student@university.edu" 
                required
                className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-brand-400 focus:bg-white/15 transition-all"
              />
            </div>
            <button 
              type="submit" 
              className="px-6 py-4 rounded-xl bg-white text-black font-semibold hover:bg-white/90 transition-colors whitespace-nowrap"
            >
              Join LaunchWise
            </button>
          </form>
          <p className="text-xs text-white/40 mt-4">No spam. Unsubscribe at any time.</p>
        </div>
      </motion.div>
    </section>
  );
}
