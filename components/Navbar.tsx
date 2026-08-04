"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SignInButton, SignUpButton, UserButton, useUser } from '@clerk/nextjs';
import { Menu, X, ChevronDown } from 'lucide-react';

const PRIMARY_LINKS = [
  { name: 'Jobs', href: '/jobs' },
  { name: 'Perks ⭐', href: '/perks' },
  { name: 'Roadmaps', href: '/roadmaps' },
  { name: 'Portfolio', href: '/portfolio' },
];

const MORE_LINKS = [
  { name: 'Projects', href: '/projects' },
  { name: 'Certifications', href: '/certifications' },
  { name: 'Mentorship', href: '/mentorship' },
  { name: 'Resources', href: '/resources' },
  { name: 'Tools', href: '/#ai-tools' },
  { name: 'Resume', href: '/resume' },
  { name: 'Contact', href: '/contact' },
];

export function Navbar() {
  const pathname = usePathname();
  const { isSignedIn } = useUser();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2 shrink-0" onClick={() => { setMobileMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            <img src="/logo.png" alt="LaunchWise Logo" className="w-8 h-8 object-contain" />
            <span className="font-bold text-lg hidden sm:inline-block tracking-tight text-foreground">LaunchWise</span>
          </Link>
          
          <nav className="hidden lg:flex items-center gap-5 text-[13px] font-semibold">
            {PRIMARY_LINKS.map(link => (
              <Link 
                key={link.name}
                href={link.href} 
                className={`transition-colors whitespace-nowrap ${pathname === link.href ? 'text-brand-600 dark:text-brand-400 font-bold' : 'text-muted-foreground hover:text-foreground'}`}
              >
                {link.name}
              </Link>
            ))}

            {/* More Dropdown */}
            <div className="relative" onMouseLeave={() => setMoreOpen(false)}>
              <button 
                onMouseEnter={() => setMoreOpen(true)}
                onClick={() => setMoreOpen(!moreOpen)}
                className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
              >
                More <ChevronDown className={`w-3.5 h-3.5 transition-transform ${moreOpen ? 'rotate-180' : ''}`} />
              </button>
              {moreOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-xl shadow-xl py-2 z-50">
                  {MORE_LINKS.map(link => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setMoreOpen(false)}
                      className={`block px-4 py-2.5 text-sm font-medium transition-colors ${pathname === link.href ? 'text-brand-600 bg-brand-50 dark:bg-brand-900/20' : 'text-slate-700 dark:text-zinc-300 hover:bg-slate-50 dark:hover:bg-zinc-800'}`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {isSignedIn && (
              <Link href="/profile" className={`transition-colors font-bold ${pathname === '/profile' ? 'text-brand-600' : 'text-brand-600 hover:text-brand-700'}`}>
                🎯 Dashboard
              </Link>
            )}
          </nav>
        </div>
        
        <div className="flex items-center gap-3">
          {!isSignedIn ? (
            <>
              <div className="hidden sm:block">
                <SignInButton />
              </div>
              <SignUpButton>
                <button className="bg-foreground text-background rounded-full font-medium text-sm h-9 px-4 hover:bg-foreground/90 transition-colors shadow-sm cursor-pointer">
                  Get Started
                </button>
              </SignUpButton>
            </>
          ) : (
            <UserButton />
          )}

          <button className="lg:hidden p-2 text-foreground" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed top-16 left-0 right-0 bottom-0 bg-background/95 backdrop-blur-md z-40 overflow-y-auto border-t border-border/40">
          <div className="p-4 flex flex-col gap-1">
            {[...PRIMARY_LINKS, ...MORE_LINKS].map(link => (
              <Link 
                key={link.name}
                href={link.href} 
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl font-medium text-base ${pathname === link.href ? 'bg-brand-50 text-brand-700 dark:bg-brand-900/20 dark:text-brand-300' : 'text-foreground'}`}
              >
                {link.name}
              </Link>
            ))}
            
            {isSignedIn && (
              <>
                <div className="border-t border-border my-2" />
                <Link 
                  href="/profile" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 rounded-xl font-bold text-base text-brand-600"
                >
                  🎯 Dashboard
                </Link>
                <Link 
                  href="/portfolio" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 rounded-xl font-medium text-base text-foreground"
                >
                  Portfolio
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
