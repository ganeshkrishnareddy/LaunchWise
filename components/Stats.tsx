"use client";

import { motion } from "framer-motion";

export function Stats() {
  const stats = [
    { value: "900+", label: "Verified Offers" },
    { value: "250+", label: "Brands" },
    { value: "80+", label: "Categories" },
    { value: "50k+", label: "Students" },
  ];

  return (
    <section className="py-12 border-y border-border bg-card/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-border">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center justify-center text-center px-4"
            >
              <span className="text-4xl md:text-5xl font-bold text-foreground mb-2">{stat.value}</span>
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
