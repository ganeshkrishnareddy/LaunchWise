"use client";

import { useState } from 'react';
import { X, Copy, Check, Mail, ExternalLink, MessageSquare, Share2 } from 'lucide-react';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  url: string;
  name: string;
  title: string;
}

export function ShareModal({ isOpen, onClose, url, name, title }: ShareModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareText = `Check out ${name}'s portfolio on LaunchWise — ${title}`;
  const encodedUrl = encodeURIComponent(url);
  const encodedText = encodeURIComponent(shareText);

  const shareLinks = [
    { name: "LinkedIn", href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`, color: "bg-[#0077B5]" },
    { name: "X / Twitter", href: `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`, color: "bg-[#1DA1F2]" },
    { name: "WhatsApp", href: `https://wa.me/?text=${encodedText}%20${encodedUrl}`, color: "bg-[#25D366]" },
    { name: "Telegram", href: `https://t.me/share/url?url=${encodedUrl}&text=${encodedText}`, color: "bg-[#0088cc]" },
    { name: "Facebook", href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`, color: "bg-[#1877F2]" },
    { name: "Email", href: `mailto:?subject=${encodeURIComponent(`${name}'s Portfolio`)}&body=${encodedText}%20${encodedUrl}`, color: "bg-slate-700" },
  ];

  // Simple QR code using a public API
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodedUrl}&bgcolor=18181b&color=ffffff`;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      <div className="relative bg-[#18181b] border border-white/10 rounded-3xl w-full max-w-md p-8 shadow-2xl" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors">
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <Share2 className="w-8 h-8 text-brand-400 mx-auto mb-3" />
          <h3 className="text-xl font-bold text-white">Share Portfolio</h3>
          <p className="text-sm text-zinc-400 mt-1">Share your portfolio with recruiters and peers</p>
        </div>

        {/* URL Copy */}
        <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl p-3 mb-6">
          <span className="text-xs text-zinc-400 truncate flex-1 font-mono">{url}</span>
          <button onClick={handleCopy} className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 bg-brand-600 text-white rounded-lg text-xs font-bold hover:bg-brand-500 transition-colors">
            {copied ? <><Check className="w-3.5 h-3.5" /> Copied!</> : <><Copy className="w-3.5 h-3.5" /> Copy</>}
          </button>
        </div>

        {/* Social Share Grid */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {shareLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className={`${link.color} text-white text-xs font-bold py-3 px-2 rounded-xl text-center hover:opacity-90 transition-opacity`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* QR Code */}
        <div className="border-t border-white/10 pt-6">
          <p className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-3 text-center">QR Code</p>
          <div className="flex flex-col items-center gap-3">
            <div className="bg-white p-3 rounded-xl">
              <img src={qrUrl} alt="Portfolio QR Code" className="w-40 h-40" />
            </div>
            <a href={qrUrl} download="portfolio-qr.png" className="text-xs font-semibold text-brand-400 hover:text-brand-300 transition-colors">
              Download QR Code ↓
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
