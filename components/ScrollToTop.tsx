"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // Only scroll to top if there isn't a hash in the URL
    if (typeof window !== 'undefined' && !window.location.hash) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  }, [pathname]);

  return null;
}
