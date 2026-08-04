import React from 'react';
import { notFound } from 'next/navigation';
import { CheckCircle2, Bookmark, Share2, ExternalLink, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { CompanyLogo } from '@/components/ui/CompanyLogo';
import offersData from '@/data/offers.json';

export default function SinglePerkPage({ params }: { params: { slug: string } }) {
  const offer = offersData.find(o => o.id === params.slug);

  if (!offer) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        <Link href="/perks" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-slate-900 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to all perks
        </Link>

        <div className="bg-white rounded-[2rem] shadow-xl shadow-slate-200/40 border border-slate-100 overflow-hidden">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-8 border-b border-slate-100 gap-6">
            <div className="flex items-center gap-6">
              <div className="w-24 h-24 relative rounded-2xl overflow-hidden shrink-0 border border-slate-100 flex items-center justify-center bg-white shadow-sm">
                <CompanyLogo 
                  company={offer.company} 
                  fallbackUrl={offer.iconUrl}
                  className="object-contain w-16 h-16"
                />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h1 className="text-3xl md:text-4xl font-black text-slate-900">{offer.company.replace('Student Offers', '')}</h1>
                  <span className="flex items-center gap-1 px-3 py-1 bg-green-50 text-green-700 text-xs font-bold uppercase tracking-wider rounded-lg">
                    <CheckCircle2 className="w-3 h-3" /> Verified
                  </span>
                </div>
                <h2 className="text-xl font-bold text-slate-600">{offer.title.replace(' | StudentOffers.co', '')}</h2>
              </div>
            </div>
          </div>

          <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-12">
            
            <div className="md:col-span-2 space-y-10">
              <div>
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Offer Description</h3>
                <p className="text-slate-700 text-lg leading-relaxed">{offer.description}</p>
              </div>
              
              <div className="bg-brand-50 border border-brand-100 rounded-2xl p-6">
                <h3 className="text-sm font-bold text-brand-700 uppercase tracking-widest mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" /> Eligibility Requirements
                </h3>
                <ul className="list-disc list-inside text-brand-900 space-y-2">
                  <li>Must be currently enrolled in an accredited educational institution.</li>
                  <li>Requires a valid `.edu` or university email address for verification.</li>
                  <li>Subject to {offer.company.replace('Student Offers', '')}'s student verification process.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Categories & Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {offer.tags.filter(t => !['Search', 'Favorites (0)', 'Toggle theme', 'Back'].includes(t)).map((tag, i) => (
                    <span key={i} className="text-sm font-medium px-4 py-2 bg-slate-100 text-slate-600 rounded-xl">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-5">Offer Details</h3>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-slate-500 font-medium mb-1">Estimated Savings</p>
                    <p className="font-bold text-slate-900 text-lg">{offer.tags.includes('Free') ? '100% Free' : 'Student Discount'}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium mb-1">Platform</p>
                    <p className="font-bold text-slate-900">Web / Global</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium mb-1">Expiry</p>
                    <p className="font-bold text-slate-900">Valid while enrolled</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-600 font-bold hover:bg-slate-50 transition-colors">
                  <Bookmark className="w-4 h-4" /> Save
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-600 font-bold hover:bg-slate-50 transition-colors">
                  <Share2 className="w-4 h-4" /> Share
                </button>
              </div>
              
              <a 
                href={offer.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-4 py-4 bg-brand-600 text-white rounded-xl font-bold hover:bg-brand-700 transition-all shadow-lg shadow-brand-500/20 flex items-center justify-center gap-2 active:scale-[0.98]"
              >
                Claim Offer <ExternalLink className="w-4 h-4" />
              </a>
              <p className="text-xs text-slate-400 text-center px-4">
                You will be redirected to the official {offer.company.replace('Student Offers', '')} website.
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
