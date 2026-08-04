"use client";

import { motion } from "framer-motion";
import { CompanyLogo } from "@/components/ui/CompanyLogo";
import { GraduationCap, Calendar, Clock } from "lucide-react";

export function InternshipsSection() {
  const internships = [
    { title: "Summer 2026 AI Research Intern", company: "OpenAI", duration: "12 Weeks", deadline: "Dec 15", tags: ["Research"], logo: "https://logo.clearbit.com/openai.com" },
    { title: "Software Engineering Intern", company: "Apple", duration: "16 Weeks", deadline: "Jan 1", tags: ["Hardware/Software"], logo: "https://logo.clearbit.com/apple.com" },
    { title: "Design Engineering Intern", company: "Framer", duration: "12 Weeks", deadline: "Rolling", tags: ["Design"], logo: "https://logo.clearbit.com/framer.com" },
  ];

  return (
    <section id="internships" className="py-24 bg-secondary/30 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4">Featured Internships</h2>
            <p className="text-muted-foreground text-lg">Kickstart your career with the world's most innovative teams.</p>
          </div>
          <button className="text-brand-600 font-semibold hover:text-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded-md px-2 py-1 -mx-2">View All Internships →</button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {internships.map((internship, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-card border border-border p-8 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-brand-500/10 transition-all cursor-pointer"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-border overflow-hidden">
                  <CompanyLogo 
                    company={internship.company}
                    fallbackUrl={internship.logo}
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-foreground leading-tight mb-1">{internship.title}</h3>
                  <p className="text-sm font-medium text-brand-600">{internship.company}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-secondary/50 p-3 rounded-xl border border-border">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-1">
                    <Calendar className="w-3 h-3" /> Deadline
                  </div>
                  <p className="font-semibold text-sm">{internship.deadline}</p>
                </div>
                <div className="bg-secondary/50 p-3 rounded-xl border border-border">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-1">
                    <Clock className="w-3 h-3" /> Duration
                  </div>
                  <p className="font-semibold text-sm">{internship.duration}</p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold mb-0.5">Stipend</p>
                  <p className="font-bold text-green-600 dark:text-green-400">{internship.stipend}</p>
                </div>
                <button className="px-5 py-2.5 bg-foreground text-background font-semibold rounded-xl text-sm hover:opacity-90 transition-opacity">
                  Apply
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
