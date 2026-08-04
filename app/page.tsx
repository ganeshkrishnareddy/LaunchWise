"use client";

import React, { useState, useMemo } from 'react';
import { Hero } from '@/components/Hero';
import { Stats } from '@/components/Stats';
import { JobsSection } from '@/components/JobsSection';
import { InternshipsSection } from '@/components/InternshipsSection';
import { FeaturedOffers } from '@/components/FeaturedOffers';
import { AIToolsSection } from '@/components/AIToolsSection';
import { OfferCard } from '@/components/OfferCard';
import { Community } from '@/components/Community';
import { Newsletter } from '@/components/Newsletter';

import { OfferModal } from '@/components/ui/OfferModal';

// Use the local offers data we copied
import offersData from '@/data/offers.json';

const JUNK_TAGS = ['Search', 'Favorites (0)', 'Toggle theme', 'Back'];

export default function Home() {
  const [visibleCount, setVisibleCount] = useState(8);
  const [sortType, setSortType] = useState<'newest' | 'popular'>('popular');
  const [selectedOffer, setSelectedOffer] = useState<any | null>(null);

  // Clean data
  const cleanedOffers = useMemo(() => {
    return offersData.map(offer => ({
      ...offer,
      tags: offer.tags.filter(t => !JUNK_TAGS.includes(t))
    }));
  }, []);

  const sortedOffers = useMemo(() => {
    let sorted = [...cleanedOffers];
    if (sortType === 'popular') {
      sorted.sort((a, b) => b.company.length - a.company.length); // mock sort for popular
    }
    return sorted;
  }, [cleanedOffers, sortType]);

  const displayedOffers = sortedOffers.slice(0, visibleCount);

  return (
    <div className="min-h-screen bg-background selection:bg-brand-500/30 selection:text-brand-900 dark:selection:text-brand-100 font-sans">
      <Hero />
      <Stats />
      
      {/* Ecosystem Sections */}
      <JobsSection />
      <InternshipsSection />
      
      {/* Student Perks (formerly featured offers) */}
      <div id="perks" className="bg-background pt-12 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-700 dark:bg-brand-900/30 dark:text-brand-300 text-xs font-bold uppercase tracking-wider mb-4">
            ⭐ Verified Perks
          </div>
        </div>
        <FeaturedOffers />
      </div>

      <AIToolsSection />
      
      {/* Main Student Directory Grid Section */}
      <section className="py-24 bg-secondary/10 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
            <h2 className="text-3xl font-bold text-foreground">All Student Perks & Resources</h2>
            <div className="flex gap-2 bg-secondary p-1 rounded-xl">
              <button 
                onClick={() => setSortType('newest')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${sortType === 'newest' ? 'bg-background shadow-sm text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
              >
                Newest
              </button>
              <button 
                onClick={() => setSortType('popular')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${sortType === 'popular' ? 'bg-background shadow-sm text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
              >
                Popular
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {displayedOffers.map((offer, i) => (
              <OfferCard 
                key={offer.id || i}
                company={offer.company}
                title={offer.title}
                description={offer.description}
                tags={offer.tags}
                url={offer.url}
                iconUrl={offer.iconUrl}
                savings={offer.tags.includes('Free') ? '100% Free' : 'Student Discount'}
                onClick={() => setSelectedOffer(offer)}
              />
            ))}
          </div>

          {visibleCount < cleanedOffers.length && (
            <div className="mt-16 text-center">
              <button 
                onClick={() => setVisibleCount(prev => prev + 12)}
                className="px-8 py-4 rounded-xl bg-secondary hover:bg-secondary/80 text-secondary-foreground font-semibold transition-colors"
              >
                Load More Resources
              </button>
            </div>
          )}
        </div>
      </section>

      <Community />
      <Newsletter />
      
      <OfferModal 
        isOpen={!!selectedOffer}
        onClose={() => setSelectedOffer(null)}
        offer={selectedOffer}
      />
    </div>
  );
}
