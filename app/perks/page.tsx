import React, { Suspense } from 'react';
import PerksContent from './PerksContent';

export default function PerksPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-slate-50 flex flex-col pt-24 pb-16 items-center justify-center">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-8 w-64 bg-slate-200 rounded mb-4"></div>
          <div className="h-4 w-96 bg-slate-200 rounded"></div>
        </div>
      </div>
    }>
      <PerksContent />
    </Suspense>
  );
}
