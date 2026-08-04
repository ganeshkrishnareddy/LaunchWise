"use client";

import { motion } from "framer-motion";
import { Sparkles, Bot, Zap } from "lucide-react";

export function AIToolsSection() {
  const tools = [
    { name: "ChatGPT Plus", company: "OpenAI", tag: "Student Promo", discount: "50% Off via Student Offers", icon: Bot, url: "https://openai.com/chatgpt/pricing" },
    { name: "Cursor Pro", company: "Anysphere", tag: "Pro Free", discount: "GitHub Student Pack Integration", icon: Zap, url: "https://cursor.sh/pricing" },
    { name: "Claude 3.5 Sonnet", company: "Anthropic", tag: "Free Tier", discount: "Generous free tier for students", icon: Sparkles, url: "https://claude.ai" },
  ];

  return (
    <section id="ai-tools" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-700 dark:bg-brand-900/30 dark:text-brand-300 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3 h-3" /> New Ecosystem Feature
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Supercharge your workflow with AI.</h2>
          <p className="text-lg text-muted-foreground">Get massive discounts and free access to the best AI models and developer tools on the market.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {tools.map((tool, i) => {
            const Icon = tool.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                onClick={() => window.location.href = tool.url}
                className="group relative bg-card border border-border p-8 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-brand-500/10 transition-all cursor-pointer"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/10 rounded-full blur-3xl group-hover:bg-brand-500/20 transition-colors" />
                
                <div className="w-14 h-14 bg-secondary rounded-2xl flex items-center justify-center text-foreground mb-6">
                  <Icon className="w-6 h-6" />
                </div>
                
                <span className="inline-block px-3 py-1 bg-brand-50 dark:bg-brand-900/20 text-brand-600 dark:text-brand-400 text-xs font-bold rounded-lg mb-4">
                  {tool.tag}
                </span>
                
                <h3 className="font-bold text-xl text-foreground mb-1">{tool.name}</h3>
                <p className="text-sm font-medium text-muted-foreground mb-6">{tool.company}</p>
                
                <div className="p-4 bg-secondary/50 rounded-xl border border-border/50">
                  <p className="text-sm font-semibold text-foreground">{tool.discount}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
