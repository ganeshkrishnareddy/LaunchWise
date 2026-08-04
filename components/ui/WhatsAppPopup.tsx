"use client";

import React, { useState, useEffect } from 'react';
import { X, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function WhatsAppPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user has seen popup before
    const hasSeenPopup = localStorage.getItem('launchwise_whatsapp_seen');
    
    if (!hasSeenPopup) {
      // Small delay so it doesn't pop up instantly on first load
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('launchwise_whatsapp_seen', 'true');
  };

  const handleJoin = () => {
    localStorage.setItem('launchwise_whatsapp_seen', 'true');
    window.open('https://whatsapp.com/channel/0029Vb60S0cIN9ipSJKgat0P', '_blank');
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="fixed bottom-6 right-6 z-50 w-[320px] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
        >
          <div className="relative p-6">
            <button 
              onClick={handleClose}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="w-12 h-12 bg-[#25D366]/10 rounded-full flex items-center justify-center mb-4">
              <MessageCircle className="w-6 h-6 text-[#25D366]" />
            </div>
            
            <h3 className="text-xl font-bold text-slate-900 mb-2">Join our Community!</h3>
            <p className="text-sm text-slate-500 mb-6">
              Get the latest student perks, job alerts, and free resources delivered straight to your WhatsApp.
            </p>
            
            <div className="flex gap-3">
              <button 
                onClick={handleClose}
                className="flex-1 px-4 py-2 bg-slate-100 text-slate-700 rounded-lg font-bold text-sm hover:bg-slate-200 transition-colors"
              >
                Maybe later
              </button>
              <button 
                onClick={handleJoin}
                className="flex-1 px-4 py-2 bg-[#25D366] text-white rounded-lg font-bold text-sm hover:bg-[#128C7E] transition-colors shadow-sm"
              >
                Join Now
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
