"use client";

import React, { useState } from 'react';
import logos from '@/data/logos.json';

interface CompanyLogoProps {
  company: string;
  fallbackUrl?: string;
  className?: string;
  alt?: string;
}

export function CompanyLogo({ company, fallbackUrl, className = "w-10 h-10 object-contain", alt }: CompanyLogoProps) {
  // Determine primary source
  // 1. Local hardcoded logos.json
  // 2. clearbit fallback
  const knownLogo = (logos as Record<string, string>)[company];
  const clearbitFallback = `https://logo.clearbit.com/${company.toLowerCase().replace(/\s+/g, '')}.com`;
  
  const [src, setSrc] = useState<string>(fallbackUrl || knownLogo || clearbitFallback);
  const [errorCount, setErrorCount] = useState(0);

  const handleError = () => {
    if (errorCount === 0) {
      // First fallback: Favicon
      setSrc(`https://www.google.com/s2/favicons?domain=${company.toLowerCase().replace(/\s+/g, '')}.com&sz=128`);
      setErrorCount(1);
    } else if (errorCount === 1) {
      // Second fallback: Initials avatar
      setSrc(`https://ui-avatars.com/api/?name=${encodeURIComponent(company)}&background=random&color=fff`);
      setErrorCount(2);
    }
  };

  return (
    <img 
      src={src}
      alt={alt || `${company} logo`}
      className={className}
      onError={handleError}
    />
  );
}
