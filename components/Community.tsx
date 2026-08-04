"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useEffect, useRef } from "react";

export function Community() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    { name: "Sarah Jenkins", uni: "Stanford University", avatar: "https://randomuser.me/api/portraits/women/44.jpg", review: "The GitHub Student Pack and AWS credits alone saved my startup prototype. This directory is a lifesaver." },
    { name: "David Chen", uni: "MIT", avatar: "https://randomuser.me/api/portraits/men/32.jpg", review: "I didn't even know half of these AI tools had student discounts. Claimed Notion Pro and Cursor instantly." },
    { name: "Elena Rodriguez", uni: "UC Berkeley", avatar: "https://randomuser.me/api/portraits/women/68.jpg", review: "The design tools section is amazing. Figma and Adobe CC discounts helped me build my portfolio for free." },
    { name: "Marcus Johnson", uni: "NYU", avatar: "https://randomuser.me/api/portraits/men/46.jpg", review: "Found my summer internship through LaunchWise! The job board is incredibly curated for students." },
    { name: "Sophie Patel", uni: "University of Toronto", avatar: "https://randomuser.me/api/portraits/women/22.jpg", review: "Saved over $500 on developer tools in my first semester. Absolutely essential resource." },
    { name: "Alex Kumar", uni: "Georgia Tech", avatar: "https://randomuser.me/api/portraits/men/67.jpg", review: "The cloud credits are insane. Using Azure and DigitalOcean for all my hackathon projects now." },
    { name: "Emma Wilson", uni: "UCL", avatar: "https://randomuser.me/api/portraits/women/12.jpg", review: "Finally a place that organizes all student discounts cleanly. The UI is gorgeous and easy to navigate." },
    { name: "James Lee", uni: "NUS", avatar: "https://randomuser.me/api/portraits/men/15.jpg", review: "Got Spotify and Headspace student deals instantly. Highly recommend this to every freshman." },
    { name: "Chloe Smith", uni: "UCLA", avatar: "https://randomuser.me/api/portraits/women/8.jpg", review: "The AI tools section is a game changer for research and writing papers. Thank you!" },
    { name: "Ryan Garcia", uni: "UT Austin", avatar: "https://randomuser.me/api/portraits/men/53.jpg", review: "JetBrains and GitHub pack activated in minutes. The direct links save so much time." },
    { name: "Mia Brown", uni: "University of Michigan", avatar: "https://randomuser.me/api/portraits/women/33.jpg", review: "I check the newest section every week. Always something new and actually useful." },
    { name: "Leo Martinez", uni: "Waterloo", avatar: "https://randomuser.me/api/portraits/men/78.jpg", review: "Best resource for CS majors. The internship listings are top tier." }
  ];

  // Double the array for seamless infinite scroll effect
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const interval = setInterval(() => {
      if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth - 10) {
        scrollContainer.scrollTo({ left: 0, behavior: 'instant' });
      } else {
        scrollContainer.scrollBy({ left: 1, behavior: 'auto' });
      }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-secondary/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Trusted by 50,000+ Students</h2>
          <p className="text-lg text-muted-foreground">Join the community of students saving thousands on their favorite software and services.</p>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="flex overflow-x-hidden pb-8 px-4 sm:px-6 gap-6"
      >
        {duplicatedTestimonials.map((t, i) => (
          <div
            key={i}
            className="shrink-0 w-[85vw] sm:w-[400px] bg-card border border-border p-8 rounded-3xl shadow-sm hover:shadow-xl transition-shadow"
          >
            <div className="flex gap-1 mb-6 text-brand-500">
              {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
            </div>
            <p className="text-foreground text-lg mb-8 leading-relaxed">"{t.review}"</p>
            
            <div className="flex items-center gap-4 mt-auto">
              <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover border border-slate-200" />
              <div>
                <h4 className="font-bold text-foreground">{t.name}</h4>
                <p className="text-sm text-muted-foreground">{t.uni}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
