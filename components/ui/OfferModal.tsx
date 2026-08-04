import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Bookmark, Share2, AlertTriangle, ExternalLink } from 'lucide-react';
import { CompanyLogo } from '@/components/ui/CompanyLogo';

interface OfferModalProps {
  isOpen: boolean;
  onClose: () => void;
  offer: {
    company: string;
    title: string;
    description: string;
    tags: string[];
    url: string;
    iconUrl?: string;
  } | null;
}

export function OfferModal({ isOpen, onClose, offer }: OfferModalProps) {
  if (!isOpen || !offer) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm"
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-[900px] bg-white rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[90vh]"
        >
          {/* Header */}
          <div className="flex justify-between items-start p-6 border-b border-slate-100">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 relative rounded-2xl overflow-hidden shrink-0 border border-slate-100 flex items-center justify-center bg-white shadow-sm">
                <CompanyLogo 
                  company={offer.company} 
                  fallbackUrl={offer.iconUrl}
                  className="object-contain w-12 h-12"
                />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h2 className="text-3xl font-black text-slate-900">{offer.company}</h2>
                  <span className="flex items-center gap-1 px-2.5 py-1 bg-green-50 text-green-700 text-xs font-bold uppercase tracking-wider rounded-lg">
                    <CheckCircle2 className="w-3 h-3" /> Verified
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-700">{offer.title}</h3>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-slate-900 transition-colors shrink-0"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="p-8 overflow-y-auto custom-scrollbar flex-grow">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Left Column (Main details) */}
              <div className="md:col-span-2 space-y-8">
                <div>
                  <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-3">Offer Description</h4>
                  <p className="text-slate-700 text-lg leading-relaxed">{offer.description}</p>
                </div>
                
                <div className="bg-brand-50 border border-brand-100 rounded-2xl p-6">
                  <h4 className="text-sm font-bold text-brand-700 uppercase tracking-widest mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" /> Eligibility Requirements
                  </h4>
                  <ul className="list-disc list-inside text-brand-900 space-y-2">
                    <li>Must be currently enrolled in an accredited educational institution.</li>
                    <li>Requires a valid `.edu` or university email address for verification.</li>
                    <li>Subject to {offer.company}'s student status verification process.</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-3">Categories & Tags</h4>
                  <div className="flex flex-wrap gap-2">
                    {offer.tags.map((tag, i) => (
                      <span key={i} className="text-sm font-medium px-3 py-1.5 bg-slate-100 text-slate-600 rounded-lg">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column (Meta & Actions) */}
              <div className="space-y-6">
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Offer Details</h4>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs text-slate-500 font-medium">Estimated Savings</p>
                      <p className="font-bold text-slate-900">{offer.tags.includes('Free') ? '100% Free' : 'Student Discount'}</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-medium">Platform</p>
                      <p className="font-bold text-slate-900">Web / Global</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-medium">Expiry</p>
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
                
                <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-white border border-red-100 rounded-xl text-red-500 font-medium hover:bg-red-50 transition-colors text-sm">
                  <AlertTriangle className="w-4 h-4" /> Report expired offer
                </button>
              </div>

            </div>
          </div>

          {/* Footer Actions */}
          <div className="p-6 border-t border-slate-100 bg-slate-50 flex items-center justify-between">
            <p className="text-sm text-slate-500 max-w-sm hidden sm:block">
              By clicking "Claim Offer", you will be redirected to the official {offer.company} website to verify your student status.
            </p>
            <a 
              href={offer.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-brand-600 text-white rounded-xl font-bold hover:bg-brand-700 transition-all shadow-lg shadow-brand-500/20 flex items-center justify-center gap-2 active:scale-[0.98]"
            >
              Claim Offer <ExternalLink className="w-4 h-4" />
            </a>
          </div>
          
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
