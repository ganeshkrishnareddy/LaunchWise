"use client";

import React from 'react';
import { motion } from "framer-motion";
import { Briefcase, MapPin, DollarSign, Building } from "lucide-react";
import { CompanyLogo } from "@/components/ui/CompanyLogo";

export function JobsSection() {
  const jobs = [
    { title: "Software Engineer, New Grad", company: "Stripe", salary: "$140k - $180k", location: "San Francisco, CA", type: "Hybrid", tags: ["Referral Available", "High Growth"], logo: "https://logo.clearbit.com/stripe.com" },
    { title: "Frontend Developer", company: "Vercel", salary: "$130k - $160k", location: "Remote", type: "Remote", tags: ["Urgent"], logo: "https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png" },
    { title: "Product Manager", company: "Linear", salary: "$120k - $150k", location: "New York, NY", type: "On-site", tags: ["Top Startup"], logo: "https://logo.clearbit.com/linear.app" },
  ];

  return (
    <section id="jobs" className="py-24 bg-background border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4">Latest Jobs</h2>
            <p className="text-muted-foreground text-lg">Top tier entry-level roles and new grad positions.</p>
          </div>
          <button className="text-brand-600 font-semibold hover:text-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded-md px-2 py-1 -mx-2">View All Jobs →</button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {jobs.map((job, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-card border border-border p-8 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-brand-500/10 transition-all cursor-pointer"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm border border-border overflow-hidden">
                  <CompanyLogo 
                    company={job.company} 
                    fallbackUrl={job.logo}
                    className="w-8 h-8 object-contain"
                  />
                </div>
                {job.tags[0] && (
                  <span className="text-[10px] font-bold text-brand-700 bg-brand-100 px-3 py-1 rounded-full uppercase tracking-wider">
                    {job.tags[0]}
                  </span>
                )}
              </div>
              <h3 className="font-bold text-lg text-foreground mb-1 group-hover:text-brand-600 transition-colors">{job.title}</h3>
              <p className="text-muted-foreground font-medium mb-6">{job.company}</p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" /> {job.location} <span className="bg-secondary px-2 py-0.5 rounded text-xs">{job.type}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <DollarSign className="w-4 h-4" /> {job.salary}
                </div>
              </div>

              <button className="w-full py-3 bg-secondary text-secondary-foreground font-semibold rounded-xl group-hover:bg-foreground group-hover:text-background transition-colors">
                Apply Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
