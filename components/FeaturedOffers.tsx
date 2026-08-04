"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState, useMemo } from "react";
import { OfferModal } from "./ui/OfferModal";
import offersData from "@/data/offers.json";

export function FeaturedOffers() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedOffer, setSelectedOffer] = useState<any | null>(null);
  const featured = [
    { name: "Adobe", title: "Adobe Creative Cloud", description: "Get full access to 20+ creative apps including Photoshop, Illustrator, and Premiere Pro.", discount: "60% OFF", savings: "Save $150", icon: "https://logo.clearbit.com/adobe.com" },
    { name: "GitHub", title: "GitHub Student Developer Pack", description: "Learn to ship software like a pro with tools, credits, and free resources.", discount: "Pro Free", savings: "Save $48", icon: "https://logo.clearbit.com/github.com" },
    { name: "Notion", title: "Notion Plus for Students", description: "Organize your life, classes, and projects with unlimited blocks and pages.", discount: "Pro Free", savings: "Save $96", icon: "https://logo.clearbit.com/notion.so" },
    { name: "Cursor", title: "Cursor Pro for Students", description: "The AI code editor built for engineers. Generate, refactor, and understand code instantly.", discount: "Pro Free", savings: "Save $240", icon: "https://logo.clearbit.com/cursor.com" },
    { name: "AWS", title: "AWS Educate", description: "Access hundreds of hours of free training and cloud credits.", discount: "Free Credits", savings: "Save $100", icon: "https://logo.clearbit.com/aws.amazon.com" },
    { name: "Figma", title: "Figma for Education", description: "Design, prototype, and gather feedback all in one place. Free for students.", discount: "100% Free", savings: "Save $144", icon: "https://logo.clearbit.com/figma.com" },
    { name: "JetBrains", title: "JetBrains Student Pack", description: "Professional developer tools for students including IntelliJ IDEA and PyCharm.", discount: "100% Free", savings: "Save $249", icon: "https://logo.clearbit.com/jetbrains.com" },
    { name: "DigitalOcean", title: "DigitalOcean Student Credits", description: "Build, deploy, and manage applications easily with free student credits.", discount: "Free Credits", savings: "Save $200", icon: "https://logo.clearbit.com/digitalocean.com" },
  ];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const interval = setInterval(() => {
      if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth - 10) {
        scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        scrollContainer.scrollBy({ left: 400, behavior: 'smooth' });
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 overflow-hidden relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-4">Featured Offers</h2>
        <p className="text-muted-foreground text-lg">The absolute best discounts verified for students this week.</p>
      </div>

      {/* Horizontal Carousel (Simulated with flex overflow) */}
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto pb-8 pt-4 px-4 sm:px-6 lg:px-8 gap-6 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-brand-200 dark:scrollbar-thumb-brand-800 scrollbar-track-transparent"
      >
        {featured.map((offer, i) => {
          // Find the actual full offer data from the DB to pass to the modal
          const fullOffer = offersData.find(o => o.company.toLowerCase().includes(offer.name.toLowerCase()));
          
          return (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            onClick={() => {
              if (fullOffer) setSelectedOffer(fullOffer);
            }}
            className="snap-center shrink-0 w-[85vw] sm:w-[400px] bg-card border border-border rounded-3xl p-8 relative overflow-hidden group hover:shadow-2xl hover:shadow-brand-500/10 transition-all cursor-pointer"
          >
            <div className="absolute top-0 right-0 p-8">
              <span className="bg-brand-100 text-brand-700 dark:bg-brand-900/30 dark:text-brand-300 font-bold px-4 py-1.5 rounded-full text-sm">
                {offer.discount}
              </span>
            </div>
            
            <div className="w-16 h-16 rounded-2xl bg-secondary mb-8 overflow-hidden">
              <img src={offer.icon} alt={offer.name} className="w-full h-full object-cover" />
            </div>

            <h3 className="text-2xl font-bold text-foreground mb-2">{offer.title}</h3>
            <p className="text-muted-foreground mb-8">{offer.description}</p>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-1">Estimated Savings</p>
                <p className="text-lg font-bold text-green-600 dark:text-green-400">{offer.savings}</p>
              </div>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  if (fullOffer) setSelectedOffer(fullOffer);
                }}
                className="bg-foreground text-background font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 disabled:opacity-50"
              >
                View Details
              </button>
            </div>
          </motion.div>
          );
        })}
      </div>
      
      <OfferModal 
        isOpen={!!selectedOffer} 
        onClose={() => setSelectedOffer(null)} 
        offer={selectedOffer} 
      />
    </section>
  );
}
