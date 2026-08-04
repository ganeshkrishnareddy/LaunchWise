"use client";

import { motion } from "framer-motion";

export function TrendingOffers() {
  const trending = [
    { name: "Cursor AI", badge: "🔥 Trending #1", img: "https://logo.clearbit.com/cursor.sh" },
    { name: "Notion", badge: "🔥 Trending #2", img: "https://logo.clearbit.com/notion.so" },
    { name: "Figma", badge: "🔥 Trending #3", img: "https://logo.clearbit.com/figma.com" },
    { name: "Spotify", badge: "🔥 Trending #4", img: "https://logo.clearbit.com/spotify.com" },
    { name: "Canva", badge: "🔥 Trending #5", img: "https://logo.clearbit.com/canva.com" },
    { name: "AWS", badge: "🔥 Trending #6", img: "https://logo.clearbit.com/aws.amazon.com" },
  ];

  return (
    <section className="py-16 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <h2 className="text-2xl font-bold text-foreground">🔥 Trending This Week</h2>
      </div>

      <div className="flex overflow-x-auto pb-8 px-4 sm:px-6 lg:px-8 gap-4 snap-x snap-mandatory scrollbar-hide max-w-7xl mx-auto">
        {trending.map((offer, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="snap-center shrink-0 w-[200px] bg-secondary/50 border border-border rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:bg-secondary transition-colors cursor-pointer group"
          >
            <div className="w-16 h-16 rounded-2xl overflow-hidden bg-white mb-4 group-hover:scale-105 transition-transform shadow-md">
              <img src={offer.img} alt={offer.name} className="w-full h-full object-cover" />
            </div>
            <h3 className="font-bold text-foreground mb-1">{offer.name}</h3>
            <span className="text-xs font-medium text-brand-600 dark:text-brand-400">{offer.badge}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
