import Image from 'next/image';
import { CheckCircle2, Tag } from 'lucide-react';
import { CompanyLogo } from '@/components/ui/CompanyLogo';

interface OfferCardProps {
  company: string;
  title: string;
  description: string;
  tags: string[];
  url: string;
  iconUrl?: string;
  savings?: string;
  country?: string;
  type?: string;
  onClick?: () => void;
}

export function OfferCard({ company, title, description, tags, url, iconUrl, savings, country, type, onClick }: OfferCardProps) {
  return (
    <div 
      onClick={onClick}
      className={`group flex flex-col bg-white rounded-[1.5rem] border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6 ${onClick ? 'cursor-pointer hover:border-brand-300' : ''}`}
    >
      <div className="flex justify-between items-start mb-4 gap-2">
        <div className="flex items-center gap-3 min-w-0 flex-1">
            <div className="w-14 h-14 relative rounded-xl overflow-hidden shrink-0 border border-slate-100 flex items-center justify-center bg-white shadow-sm group-hover:scale-105 transition-transform">
              <CompanyLogo 
                company={company} 
                fallbackUrl={iconUrl}
                className="object-contain w-10 h-10"
              />
            </div>
          <div className="min-w-0 flex-1">
            <h3 className="font-bold text-base sm:text-lg text-slate-900 leading-tight flex items-center gap-1.5 min-w-0">
              <span className="truncate">{company.replace('Student Offers', '')}</span>
              <span title="Verified"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /></span>
            </h3>
          </div>
        </div>
        
        {savings && (
          <div className="text-right shrink-0 ml-2">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-0.5">Savings</span>
            <span className="inline-flex items-center justify-center text-xs sm:text-sm font-bold text-green-600 bg-green-50 px-2.5 py-1 rounded-md">
              {savings.toLowerCase().includes('student discount') ? (
                <span className="flex items-center gap-1"><Tag className="w-3.5 h-3.5" /> Discount</span>
              ) : (
                savings
              )}
            </span>
          </div>
        )}
      </div>
      
      <h4 className="font-black text-lg sm:text-xl text-slate-900 mb-2 leading-tight line-clamp-2" title={title}>
        {title.replace(/\s*\|\s*StudentOffers\.co/i, '').replace(/\.\.\.\s*for students/i, '')}
      </h4>
      <p className="text-slate-500 text-sm flex-grow mb-6 leading-relaxed line-clamp-3">{description}</p>
      
      <div className="grid grid-cols-2 gap-y-3 gap-x-2 mb-6 p-4 bg-slate-50 rounded-xl border border-slate-100">
        <div>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Location</span>
          <span className="text-xs font-semibold text-slate-700">{country || 'Global'}</span>
        </div>
        <div>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Platform</span>
          <span className="text-xs font-semibold text-slate-700">Web / Global</span>
        </div>
        <div className="col-span-2">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Offer Type</span>
          <span className="text-xs font-semibold text-brand-700">{type || 'Discount'}</span>
        </div>
      </div>
      
      <div className="flex flex-col gap-4 mt-auto pt-4 border-t border-slate-100">
        
        {onClick ? (
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onClick();
            }}
            className="w-full text-center px-4 py-3 bg-white border border-slate-200 text-slate-700 rounded-xl font-bold hover:bg-brand-50 hover:text-brand-700 hover:border-brand-200 transition-all shadow-sm group-hover:bg-brand-600 group-hover:text-white"
          >
            View Details
          </button>
        ) : (
          <a 
            href={url} 
            target="_blank" 
            rel="noreferrer" 
            className="w-full text-center px-4 py-2 bg-white border border-slate-300 text-slate-700 rounded-lg font-medium hover:bg-slate-50 transition-colors"
          >
            Claim Offer
          </a>
        )}
      </div>
    </div>
  );
}
