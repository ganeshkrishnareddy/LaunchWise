"use client";

import { motion } from "framer-motion";
import Link from 'next/link';
import { 
  Bot, Cloud, Code, Shield, Palette, GraduationCap, Zap, 
  TrendingUp, Plane, Film, Utensils, Gamepad2, Briefcase, 
  Terminal, Trophy 
} from "lucide-react";

const CATEGORIES = [
  { name: "AI & ML", icon: Bot, count: 101, color: "from-blue-500/20 to-blue-500/5", textColor: "text-blue-500" },
  { name: "Cloud Credits", icon: Cloud, count: 36, color: "from-sky-500/20 to-sky-500/5", textColor: "text-sky-500" },
  { name: "Coding", icon: Code, count: 83, color: "from-emerald-500/20 to-emerald-500/5", textColor: "text-emerald-500" },
  { name: "Developer Tools", icon: Terminal, count: 142, color: "from-slate-500/20 to-slate-500/5", textColor: "text-slate-500" },
  { name: "Cybersecurity", icon: Shield, count: 14, color: "from-red-500/20 to-red-500/5", textColor: "text-red-500" },
  { name: "Design", icon: Palette, count: 67, color: "from-pink-500/20 to-pink-500/5", textColor: "text-pink-500" },
  { name: "Education", icon: GraduationCap, count: 54, color: "from-purple-500/20 to-purple-500/5", textColor: "text-purple-500" },
  { name: "Productivity", icon: Zap, count: 62, color: "from-amber-500/20 to-amber-500/5", textColor: "text-amber-500" },
  { name: "Finance", icon: TrendingUp, count: 18, color: "from-green-500/20 to-green-500/5", textColor: "text-green-500" },
  { name: "Travel", icon: Plane, count: 22, color: "from-cyan-500/20 to-cyan-500/5", textColor: "text-cyan-500" },
  { name: "Streaming", icon: Film, count: 40, color: "from-rose-500/20 to-rose-500/5", textColor: "text-rose-500" },
  { name: "Food", icon: Utensils, count: 14, color: "from-orange-500/20 to-orange-500/5", textColor: "text-orange-500" },
  { name: "Gaming", icon: Gamepad2, count: 8, color: "from-indigo-500/20 to-indigo-500/5", textColor: "text-indigo-500" },
  { name: "Career", icon: Briefcase, count: 35, color: "from-teal-500/20 to-teal-500/5", textColor: "text-teal-500" },
  { name: "Hackathons", icon: Trophy, count: 5, color: "from-yellow-500/20 to-yellow-500/5", textColor: "text-yellow-500" },
];

export function Categories() {
  return (
    <section className="py-8 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4">Explore by Category</h2>
            <p className="text-muted-foreground text-lg max-w-2xl">Find the perfect tools and discounts for your specific major and interests.</p>
          </div>
          <Link href="/perks" className="mt-4 md:mt-0 text-sm font-medium text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300">
            View all categories →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {CATEGORIES.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <Link href={`/perks?category=${encodeURIComponent(cat.name)}`} key={i} className="block">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="group relative flex flex-col items-start p-5 rounded-2xl border border-border bg-card hover:shadow-xl hover:shadow-brand-500/5 transition-all text-left overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className="relative z-10 w-full flex justify-between items-start mb-4">
                  <div className={`w-10 h-10 rounded-xl bg-secondary flex items-center justify-center ${cat.textColor}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-medium text-muted-foreground bg-secondary px-2 py-1 rounded-full">
                    {cat.count}
                  </span>
                </div>
                <h3 className="relative z-10 font-semibold text-foreground text-sm group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                  {cat.name}
                </h3>
                </motion.div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  );
}
