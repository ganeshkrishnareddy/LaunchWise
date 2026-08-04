"use client";

import { useEffect, useState } from 'react';
import { Gift, TrendingUp, Bookmark, CheckCircle2 } from 'lucide-react';
import { getClaimedPerks, getSavedPerks, getStats } from '@/lib/activityTracker';
import offersData from '@/data/offers.json';

export function PerksTrackerTab() {
  const [claimedIds, setClaimedIds] = useState<string[]>([]);
  const [savedIds, setSavedIds] = useState<string[]>([]);

  useEffect(() => {
    setClaimedIds(getClaimedPerks());
    setSavedIds(getSavedPerks());
  }, []);

  const claimedOffers = offersData.filter(o => claimedIds.includes(o.id?.toString() || o.company));
  const savedOffers = offersData.filter(o => savedIds.includes(o.id?.toString() || o.company));

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-bold text-slate-900 mb-1">Perks Tracker</h3>
        <p className="text-sm text-slate-500">Offers you've claimed and saved on LaunchWise.</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-green-50 border border-green-200 rounded-2xl p-5 text-center">
          <p className="text-3xl font-black text-green-700">{claimedIds.length}</p>
          <p className="text-xs font-medium text-green-600 mt-1">Offers Claimed</p>
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 text-center">
          <p className="text-3xl font-black text-amber-700">{savedIds.length}</p>
          <p className="text-xs font-medium text-amber-600 mt-1">Bookmarked</p>
        </div>
      </div>

      {/* Claimed */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6">
        <div className="flex items-center gap-2 mb-5">
          <CheckCircle2 className="w-5 h-5 text-green-500" />
          <h4 className="font-bold text-slate-900">Claimed Offers</h4>
        </div>
        {claimedOffers.length > 0 ? (
          <div className="space-y-3">
            {claimedOffers.map((perk, i) => (
              <div key={i} className="flex items-center gap-4 p-3 bg-green-50/50 rounded-xl border border-green-100">
                <div className="w-10 h-10 bg-white rounded-lg border border-slate-100 flex items-center justify-center shrink-0 overflow-hidden">
                  {perk.iconUrl ? <img src={perk.iconUrl} alt={perk.company} className="w-8 h-8 object-contain" /> : <Gift className="w-5 h-5 text-green-500" />}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm text-slate-900 truncate">{perk.company}</p>
                  <p className="text-xs text-slate-500 truncate">{perk.title}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-sm text-slate-400 py-6">No offers claimed yet. Visit the <a href="/perks" className="text-brand-600 font-semibold hover:underline">Perks page</a> to start claiming!</p>
        )}
      </div>

      {/* Saved */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6">
        <div className="flex items-center gap-2 mb-5">
          <Bookmark className="w-5 h-5 text-amber-500" />
          <h4 className="font-bold text-slate-900">Saved for Later</h4>
        </div>
        {savedOffers.length > 0 ? (
          <div className="space-y-3">
            {savedOffers.map((perk, i) => (
              <div key={i} className="flex items-center gap-4 p-3 bg-slate-50 rounded-xl border border-slate-100">
                <div className="w-10 h-10 bg-white rounded-lg border border-slate-100 flex items-center justify-center shrink-0 overflow-hidden">
                  {perk.iconUrl ? <img src={perk.iconUrl} alt={perk.company} className="w-8 h-8 object-contain" /> : <Bookmark className="w-5 h-5 text-amber-400" />}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm text-slate-900 truncate">{perk.company}</p>
                  <p className="text-xs text-slate-500 truncate">{perk.title}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-sm text-slate-400 py-6">No saved perks yet.</p>
        )}
      </div>
    </div>
  );
}
