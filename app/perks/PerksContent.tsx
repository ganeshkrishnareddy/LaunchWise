"use client";

import React, { useState, useMemo, useEffect, useRef } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Search, Filter, Tag, X, ChevronDown, ChevronUp, Check, LayoutGrid, List, LayoutList, Bot, Cloud, Code, Shield, Palette, GraduationCap, Zap, TrendingUp, Plane, Film, Utensils, Gamepad2, Briefcase, Terminal, Trophy, ChevronRight, ChevronLeft } from 'lucide-react';
import { OfferCard } from '@/components/OfferCard';
import { OfferModal } from '@/components/ui/OfferModal';
import offersData from '@/data/offers.json';

const JUNK_TAGS = ['Search', 'Favorites (0)', 'Toggle theme', 'Back'];

const POPULAR_SEARCHES = ['GitHub', 'Adobe', 'AWS', 'JetBrains', 'Canva', 'Spotify', 'Cursor'];
const FEATURED_COMPANIES = ['Adobe', 'GitHub', 'Notion', 'Cursor', 'AWS', 'JetBrains', 'DigitalOcean', 'Canva', 'Apple', 'Spotify'];

export default function PerksContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // State
  const [searchTerm, setSearchTerm] = useState(searchParams.get('q') || '');
  const [selectedCategory, setSelectedCategory] = useState<string>(searchParams.get('category') || 'All');
  const [selectedCountry, setSelectedCountry] = useState<string>(searchParams.get('country') || 'All');
  const [selectedType, setSelectedType] = useState<string>(searchParams.get('type') || 'All');
  const [sortBy, setSortBy] = useState<string>(searchParams.get('sort') || 'Newest');
  
  const [visibleCount, setVisibleCount] = useState(24);
  const [selectedOffer, setSelectedOffer] = useState<any | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'compact' | 'list'>('grid');

  // Accordion state
  const [isCategoryOpen, setIsCategoryOpen] = useState(true);
  const [isCountryOpen, setIsCountryOpen] = useState(true);
  const [isTypeOpen, setIsTypeOpen] = useState(true);

  // Sync URL to State
  useEffect(() => {
    setSelectedCategory(searchParams.get('category') || 'All');
    setSearchTerm(searchParams.get('q') || '');
    setSelectedCountry(searchParams.get('country') || 'All');
    setSelectedType(searchParams.get('type') || 'All');
    setSortBy(searchParams.get('sort') || 'Newest');
  }, [searchParams]);

  // Update URL function
  const updateFilters = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value === 'All' || !value) {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    router.push(`?${params.toString()}`, { scroll: false });
    setVisibleCount(24);
  };

  const clearAllFilters = () => {
    router.push('?', { scroll: false });
    setVisibleCount(24);
  };

  // Clean data and extract filter options
  const { cleanedOffers, allCategories, allCountries, allTypes } = useMemo(() => {
    const categories = new Set<string>();
    const countries = new Set<string>();
    const types = new Set<string>();
    
    const offers = offersData.map(offer => {
      const validTags = offer.tags.filter(t => !JUNK_TAGS.includes(t));
      validTags.forEach(tag => categories.add(tag));
      
      let country = 'Global';
      if (validTags.includes('India')) country = 'India';
      if (validTags.includes('US')) country = 'US';
      if (validTags.includes('UK')) country = 'UK';
      countries.add(country);

      let type = validTags.includes('Free') ? 'Free Tier' : 'Discount';
      types.add(type);

      return {
        ...offer,
        tags: validTags,
        country,
        type
      };
    });

    const sortedCategories = Array.from(categories).sort();
    return { 
      cleanedOffers: offers, 
      allCategories: ['All', ...sortedCategories],
      allCountries: ['All', ...Array.from(countries).sort()],
      allTypes: ['All', ...Array.from(types).sort()]
    };
  }, []);

  // Filter offers
  const filteredOffers = useMemo(() => {
    let result = cleanedOffers.filter(offer => {
      const matchesSearch = !searchTerm || 
                            offer.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            offer.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            offer.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === 'All' || offer.tags.includes(selectedCategory);
      const matchesCountry = selectedCountry === 'All' || offer.country === selectedCountry;
      const matchesType = selectedType === 'All' || offer.type === selectedType;
      
      return matchesSearch && matchesCategory && matchesCountry && matchesType;
    });

    if (sortBy === 'Highest Savings') {
      result = result.sort((a, b) => a.tags.includes('Free') ? -1 : 1);
    } else if (sortBy === 'Alphabetical') {
      result = result.sort((a, b) => a.company.localeCompare(b.company));
    }
    
    return result;
  }, [cleanedOffers, searchTerm, selectedCategory, selectedCountry, selectedType, sortBy]);

  const displayedOffers = filteredOffers.slice(0, visibleCount);
  const totalCount = filteredOffers.length;

  const featuredOffers = useMemo(() => {
    return cleanedOffers.filter(o => FEATURED_COMPANIES.some(c => o.company.toLowerCase().includes(c.toLowerCase()))).slice(0, 10);
  }, [cleanedOffers]);

  // Sidebar count calculations
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    allCategories.forEach(cat => counts[cat] = 0);
    const baseOffers = cleanedOffers.filter(offer => {
      const matchesSearch = !searchTerm || offer.title.toLowerCase().includes(searchTerm.toLowerCase()) || offer.company.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCountry = selectedCountry === 'All' || offer.country === selectedCountry;
      const matchesType = selectedType === 'All' || offer.type === selectedType;
      return matchesSearch && matchesCountry && matchesType;
    });
    baseOffers.forEach(offer => {
      counts['All']++;
      offer.tags.forEach(tag => {
        if (counts[tag] !== undefined) counts[tag]++;
      });
    });
    return counts;
  }, [cleanedOffers, searchTerm, selectedCountry, selectedType, allCategories]);

  const countryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    allCountries.forEach(c => counts[c] = 0);
    const baseOffers = cleanedOffers.filter(offer => {
      const matchesSearch = !searchTerm || offer.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || offer.tags.includes(selectedCategory);
      const matchesType = selectedType === 'All' || offer.type === selectedType;
      return matchesSearch && matchesCategory && matchesType;
    });
    baseOffers.forEach(offer => {
      counts['All']++;
      counts[offer.country]++;
    });
    return counts;
  }, [cleanedOffers, searchTerm, selectedCategory, selectedType, allCountries]);

  const typeCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    allTypes.forEach(t => counts[t] = 0);
    const baseOffers = cleanedOffers.filter(offer => {
      const matchesSearch = !searchTerm || offer.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || offer.tags.includes(selectedCategory);
      const matchesCountry = selectedCountry === 'All' || offer.country === selectedCountry;
      return matchesSearch && matchesCategory && matchesCountry;
    });
    baseOffers.forEach(offer => {
      counts['All']++;
      counts[offer.type]++;
    });
    return counts;
  }, [cleanedOffers, searchTerm, selectedCategory, selectedCountry, allTypes]);

  // Active filters array
  const activeFilters = [];
  if (selectedCategory !== 'All') activeFilters.push({ key: 'category', value: selectedCategory });
  if (selectedCountry !== 'All') activeFilters.push({ key: 'country', value: selectedCountry });
  if (selectedType !== 'All') activeFilters.push({ key: 'type', value: selectedType });
  if (searchTerm) activeFilters.push({ key: 'q', value: `"${searchTerm}"` });

  // Infinite Scroll Observer
  const loadMoreRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && visibleCount < totalCount) {
          setVisibleCount(prev => prev + 24);
        }
      },
      { threshold: 0.1 }
    );
    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }
    return () => observer.disconnect();
  }, [visibleCount, totalCount]);

  // Featured Carousel Scroll
  const carouselRef = useRef<HTMLDivElement>(null);
  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -350 : 350;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current && activeFilters.length === 0) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        // If we hit the end, scroll back to the start
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          carouselRef.current.scrollBy({ left: 350, behavior: 'smooth' });
        }
      }
    }, 4000);
    
    return () => clearInterval(interval);
  }, [activeFilters.length]);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col pt-16">
      
      {/* 1. Premium Hero Section */}
      <div className="bg-white border-b border-slate-200 py-16">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
            Student Perks & Exclusive Offers
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10">
            Save thousands on software, AI tools, cloud credits, travel, and student subscriptions.
          </p>
          
          <div className="max-w-2xl mx-auto relative group mb-6">
            <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
              <Search className="h-6 w-6 text-slate-400 group-focus-within:text-brand-600 transition-colors" />
            </div>
            <input
              type="text"
              placeholder={`Search ${cleanedOffers.length}+ student perks...`}
              value={searchTerm}
              onChange={(e) => updateFilters('q', e.target.value)}
              className="block w-full pl-14 pr-4 py-4 border border-slate-300 rounded-2xl leading-5 bg-white placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 sm:text-lg transition-all shadow-sm text-slate-900 font-medium"
            />
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-2 text-sm">
            <span className="text-slate-500 font-medium mr-2">Popular:</span>
            {POPULAR_SEARCHES.map(term => (
              <button 
                key={term}
                onClick={() => updateFilters('q', term)}
                className="px-3 py-1 bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900 rounded-full font-medium transition-colors"
              >
                {term}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 2. Horizontal Sticky Category Chips */}
      <div className="sticky top-16 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200 py-3 shadow-sm">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex overflow-x-auto hide-scrollbar gap-2 pb-1">
            {allCategories.map(cat => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => updateFilters('category', cat)}
                  className={`flex items-center gap-2 whitespace-nowrap px-4 py-2 rounded-full text-sm font-bold transition-all ${
                    isActive 
                      ? 'bg-brand-600 text-white shadow-md shadow-brand-600/20' 
                      : 'bg-white border border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  {cat}
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${isActive ? 'bg-white/20' : 'bg-slate-100'}`}>
                    {categoryCounts[cat] || 0}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* 3. Enhanced 300px Floating Sticky Sidebar */}
          <aside className="w-full lg:w-[300px] flex-shrink-0 hidden lg:block">
            <div className="bg-white p-6 rounded-3xl shadow-lg shadow-slate-200/50 border border-slate-200 sticky top-40">
              
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-black text-lg text-slate-900">Filters</h2>
                {activeFilters.length > 0 && (
                  <button onClick={clearAllFilters} className="text-xs font-bold text-brand-600 hover:text-brand-700">
                    Reset All
                  </button>
                )}
              </div>

              <div className="space-y-6">
                {/* Categories Accordion */}
                <div>
                  <button onClick={() => setIsCategoryOpen(!isCategoryOpen)} className="w-full flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                    Categories {isCategoryOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                  {isCategoryOpen && (
                    <div className="space-y-1 max-h-[25vh] overflow-y-auto pr-2 custom-scrollbar">
                      {allCategories.map(cat => (
                        <button
                          key={cat}
                          onClick={() => updateFilters('category', cat)}
                          className={`w-full text-left px-3 py-2 rounded-xl text-sm font-medium transition-colors flex items-center justify-between ${
                            selectedCategory === cat ? 'bg-brand-50 text-brand-700' : 'text-slate-600 hover:bg-slate-50'
                          }`}
                        >
                          <span className="truncate flex items-center gap-2">
                            {selectedCategory === cat && <Check className="w-3 h-3" />}
                            {cat}
                          </span>
                          <span className={`text-xs ${selectedCategory === cat ? 'text-brand-700 font-bold' : 'text-slate-400'}`}>
                            {categoryCounts[cat] || 0}
                          </span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Availability Accordion */}
                <div className="border-t border-slate-100 pt-4">
                  <button onClick={() => setIsCountryOpen(!isCountryOpen)} className="w-full flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                    Availability {isCountryOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                  {isCountryOpen && (
                    <div className="space-y-1 pr-2">
                      {allCountries.map(c => (
                        <button
                          key={c}
                          onClick={() => updateFilters('country', c)}
                          className={`w-full text-left px-3 py-2 rounded-xl text-sm font-medium transition-colors flex items-center justify-between ${
                            selectedCountry === c ? 'bg-brand-50 text-brand-700' : 'text-slate-600 hover:bg-slate-50'
                          }`}
                        >
                          <span className="truncate flex items-center gap-2">
                            {selectedCountry === c && <Check className="w-3 h-3" />}
                            {c}
                          </span>
                          <span className={`text-xs ${selectedCountry === c ? 'text-brand-700 font-bold' : 'text-slate-400'}`}>
                            {countryCounts[c] || 0}
                          </span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Offer Type Accordion */}
                <div className="border-t border-slate-100 pt-4">
                  <button onClick={() => setIsTypeOpen(!isTypeOpen)} className="w-full flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                    Offer Type {isTypeOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                  {isTypeOpen && (
                    <div className="space-y-1 pr-2">
                      {allTypes.map(t => (
                        <button
                          key={t}
                          onClick={() => updateFilters('type', t)}
                          className={`w-full text-left px-3 py-2 rounded-xl text-sm font-medium transition-colors flex items-center justify-between ${
                            selectedType === t ? 'bg-brand-50 text-brand-700' : 'text-slate-600 hover:bg-slate-50'
                          }`}
                        >
                          <span className="truncate flex items-center gap-2">
                            {selectedType === t && <Check className="w-3 h-3" />}
                            {t}
                          </span>
                          <span className={`text-xs ${selectedType === t ? 'text-brand-700 font-bold' : 'text-slate-400'}`}>
                            {typeCounts[t] || 0}
                          </span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-grow overflow-hidden">
            
            {/* 🔥 Featured Student Perks Carousel */}
            {activeFilters.length === 0 && (
              <div className="mb-10">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-black text-slate-900 flex items-center gap-2">
                    🔥 Featured Perks
                  </h2>
                  <div className="flex items-center gap-2">
                    <button onClick={() => scrollCarousel('left')} className="p-2 rounded-full bg-white border border-slate-200 hover:bg-slate-50 shadow-sm"><ChevronLeft className="w-4 h-4" /></button>
                    <button onClick={() => scrollCarousel('right')} className="p-2 rounded-full bg-white border border-slate-200 hover:bg-slate-50 shadow-sm"><ChevronRight className="w-4 h-4" /></button>
                  </div>
                </div>
                <div 
                  ref={carouselRef}
                  className="flex overflow-x-auto gap-4 hide-scrollbar snap-x snap-mandatory pb-4"
                >
                  {featuredOffers.map((offer, i) => (
                    <div key={offer.id || i} className="snap-start shrink-0 w-[300px] md:w-[350px]">
                      <OfferCard 
                        company={offer.company.replace('Student Offers', '')}
                        title={offer.title.replace(' | StudentOffers.co', '').replace('? for students', '')}
                        description={offer.description}
                        tags={offer.tags.slice(0, 2)}
                        url={offer.url}
                        iconUrl={offer.iconUrl}
                        savings={offer.tags.includes('Free') ? '100% Free' : 'Student Discount'}
                        country={offer.country}
                        type={offer.type}
                        onClick={() => setSelectedOffer(offer)}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Results Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-6 gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
              <div>
                <p className="text-sm font-medium text-slate-500 mb-1">
                  <span className="font-bold text-slate-900">{totalCount}</span> Results in <span className="font-bold text-slate-900">{cleanedOffers.length}</span> Perks
                </p>
                {/* Active Filter Chips */}
                <div className="flex flex-wrap items-center gap-2 mt-2">
                  {activeFilters.map(f => (
                    <span key={f.key} className="inline-flex items-center gap-1 pl-3 pr-1 py-1 rounded-md bg-brand-50 text-brand-700 border border-brand-100 text-xs font-bold">
                      {f.value}
                      <button onClick={() => updateFilters(f.key, 'All')} className="p-0.5 hover:bg-brand-200 rounded-md transition-colors">
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  ))}
                  {activeFilters.length > 0 && (
                    <button onClick={clearAllFilters} className="text-xs font-bold text-slate-400 hover:text-slate-600 ml-2">
                      Clear All
                    </button>
                  )}
                </div>
              </div>
              
              <div className="flex items-center gap-3 flex-shrink-0">
                <div className="flex items-center bg-slate-100 rounded-lg p-1">
                  <button onClick={() => setViewMode('grid')} className={`p-1.5 rounded-md transition-colors ${viewMode === 'grid' ? 'bg-white shadow-sm text-brand-600' : 'text-slate-500 hover:text-slate-700'}`}><LayoutGrid className="w-4 h-4" /></button>
                  <button onClick={() => setViewMode('compact')} className={`p-1.5 rounded-md transition-colors ${viewMode === 'compact' ? 'bg-white shadow-sm text-brand-600' : 'text-slate-500 hover:text-slate-700'}`}><List className="w-4 h-4" /></button>
                  <button onClick={() => setViewMode('list')} className={`p-1.5 rounded-md transition-colors ${viewMode === 'list' ? 'bg-white shadow-sm text-brand-600' : 'text-slate-500 hover:text-slate-700'}`}><LayoutList className="w-4 h-4" /></button>
                </div>

                <div className="relative">
                  <select 
                    value={sortBy}
                    onChange={(e) => updateFilters('sort', e.target.value)}
                    className="appearance-none bg-slate-50 border border-slate-200 rounded-lg pl-3 pr-8 py-2 text-sm font-bold text-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                  >
                    <option>Newest</option>
                    <option>Highest Savings</option>
                    <option>Alphabetical</option>
                  </select>
                  <ChevronDown className="w-4 h-4 absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                </div>
              </div>
            </div>

            {displayedOffers.length > 0 ? (
              <>
                <div className={`grid gap-6 ${
                  viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' : 
                  viewMode === 'compact' ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4' : 
                  'grid-cols-1'
                }`}>
                  {displayedOffers.map((offer, i) => (
                    <OfferCard 
                      key={offer.id || i}
                      company={offer.company.replace('Student Offers', '')}
                      title={offer.title.replace(' | StudentOffers.co', '').replace('? for students', '')}
                      description={offer.description}
                      tags={offer.tags.slice(0, 2)} 
                      url={offer.url}
                      iconUrl={offer.iconUrl}
                      savings={offer.tags.includes('Free') ? '100% Free' : 'Student Discount'}
                      country={offer.country}
                      type={offer.type}
                      onClick={() => setSelectedOffer(offer)}
                    />
                  ))}
                </div>

                {/* Infinite Scroll Observer Target */}
                {visibleCount < totalCount && (
                  <div ref={loadMoreRef} className="mt-12 text-center py-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-500 rounded-full text-sm font-semibold animate-pulse">
                      <div className="w-4 h-4 border-2 border-slate-400 border-t-transparent rounded-full animate-spin"></div>
                      Loading more perks...
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div className="bg-white rounded-3xl border border-dashed border-slate-300 p-16 text-center shadow-sm">
                <div className="w-24 h-24 bg-brand-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-10 h-10 text-brand-500" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-2">No offers found</h3>
                <p className="text-slate-500 mb-8 max-w-sm mx-auto">Try adjusting your filters or search terms. The perfect student perk is out there!</p>
                <button 
                  onClick={clearAllFilters}
                  className="px-6 py-3 bg-brand-600 text-white rounded-xl font-bold hover:bg-brand-700 transition-colors shadow-md shadow-brand-500/20"
                >
                  Reset All Filters
                </button>
              </div>
            )}
            
          </main>
        </div>

      </div>

      <OfferModal 
        isOpen={!!selectedOffer} 
        onClose={() => setSelectedOffer(null)} 
        offer={selectedOffer} 
      />
    </div>
  );
}
