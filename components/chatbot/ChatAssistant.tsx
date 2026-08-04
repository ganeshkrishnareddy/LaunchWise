'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { jobs } from '@/data/jobs';

export function ChatAssistant() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: 'bot', content: 'Hi! I\'m LaunchWise AI. How can I help you with your career today? I know all about our jobs, roadmaps, and resources!' }
    ]);
    const [input, setInput] = useState('');
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = () => {
        if (!input.trim()) return;

        const userMessage = { role: 'user', content: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');

        // Simulate AI Response
        setTimeout(() => {
            const lowerInput = input.toLowerCase().trim();
            let response = "I'm still learning, but you can find jobs at our Jobs portal, roadmaps in the Roadmaps section, and free learning materials in Resources!";
            
            // Priority matching
            if (lowerInput.match(/^(hi|hello|hey|greetings|sup|morning|evening)/)) {
                response = "Hello! I'm LaunchWise AI. I can help you find jobs, suggest learning roadmaps, or give resume advice. What are you looking for today?";
            } else if (lowerInput.includes('cyber') || lowerInput.includes('security')) {
                response = "We have a comprehensive Cybersecurity Roadmap! It covers Networking, Linux, Security Fundamentals, and advanced certifications. Check it out in the Roadmaps section.";
            } else if (lowerInput.match(/data|science|analyst|analytics|machine learning|ai|artificial intelligence/)) {
                response = `Data & AI careers are booming! We have roadmaps for Data Science and Analytics, plus ${jobs.filter(j => j.role.toLowerCase().includes('data')).length}+ live data-related job openings right now.`;
            } else if (lowerInput.match(/web|frontend|backend|full stack|react|node|javascript/)) {
                response = "Interested in Web Development? Our Full-Stack roadmap is our most popular guide. We also have many Software Engineering roles in our Jobs portal. Start with HTML/CSS, then move to React and Node.js!";
            } else if (lowerInput.match(/cloud|aws|azure|gcp|devops/)) {
                response = "Cloud computing is a fantastic path! Check out our DevOps & Cloud Roadmap. We recommend starting with Linux basics, networking, and then AWS or Azure certifications.";
            } else if (lowerInput.match(/ui|ux|design|product/)) {
                response = "For UI/UX and Product roles, building a strong portfolio is key. Check our Resources section for design tools, and the Jobs portal for product-focused openings.";
            } else if (lowerInput.match(/job|intern|work|hiring|opening|apply/)) {
                response = `We have exactly ${jobs.length} live, verified job opportunities right now! These include roles from top startups and MNCs. Head over to the Jobs portal (launch-wise.web.app/jobs) to apply directly.`;
            } else if (lowerInput.match(/roadmap|roadman|guide|path|track|learn|study|how to start/)) {
                response = "Our career roadmaps provide step-by-step guides on what to learn for roles like Full-Stack, Cyber, Data, and DevOps. Check the Roadmaps tab to start your journey!";
            } else if (lowerInput.match(/resume|cv|builder|template|ats/)) {
                response = "An ATS-friendly resume is crucial! Our Resume Builder helps you create professional resumes that pass screening filters. We also have templates in the Resources section.";
            } else if (lowerInput.match(/interview|prep|prepare|questions|leetcode|dsa/)) {
                response = "For interview prep, focus on Data Structures & Algorithms (DSA) and CS fundamentals. Check our Resources tab for interview guides and coding platforms to practice on!";
            } else if (lowerInput.match(/salary|ctc|pay|compensation/)) {
                response = "Salaries vary by role and company. Many of our listed roles are competitive. Check specific job cards on our Jobs Portal for detailed compensation information.";
            } else if (lowerInput.match(/fresher|beginner|no experience|grad/)) {
                response = "LaunchWise is built exactly for freshers! Almost all our listed jobs and roadmaps are tailored for early-career professionals and recent graduates. You're in the right place.";
            } else if (lowerInput.match(/contact|help|support|email|reach/)) {
                response = "You can reach us via the Contact Us page or email us at support@launchwise.com. The team is always here to help!";
            } else if (lowerInput.match(/who|what|about/)) {
                response = "LaunchWise is an all-in-one platform for students and freshers to find verified jobs, career roadmaps, and resume builders—completely free!";
            } else if (lowerInput.match(/thanks|thank you|thx|appreciate/)) {
                response = "You're very welcome! Let me know if you need help with anything else. Best of luck with your career journey!";
            }

            setMessages(prev => [...prev, { role: 'bot', content: response }]);
        }, 800);
    };

    return (
        <>
            {/* Floating Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 z-[60] bg-brand-600 text-white p-4 rounded-full shadow-2xl hover:bg-brand-700 transition-all hover:scale-110 active:scale-95 group"
            >
                {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6 group-hover:animate-pulse" />}
            </button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 100, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 100, scale: 0.8 }}
                        className="fixed bottom-24 right-6 z-[60] w-[350px] sm:w-[400px] h-[500px] bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-slate-200 flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="bg-brand-600 p-4 flex items-center justify-between text-white">
                            <div className="flex items-center space-x-3">
                                <div className="bg-white/20 p-2 rounded-xl">
                                    <Bot className="h-6 w-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-sm">LaunchWise AI</h3>
                                    <div className="flex items-center space-x-1">
                                        <div className="h-2 w-2 bg-green-400 rounded-full animate-pulse"></div>
                                        <span className="text-[10px] opacity-80">Always active</span>
                                    </div>
                                </div>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1 rounded-lg transition-colors">
                                <ChevronDown className="h-6 w-6" />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-grow overflow-y-auto p-4 space-y-4 bg-slate-50/50">
                            {messages.map((msg, i) => (
                                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`flex max-w-[80%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'} items-end space-x-2`}>
                                        <div className={`p-1.5 rounded-lg ${msg.role === 'user' ? 'bg-brand-100 ml-2' : 'bg-white border border-slate-200 mr-2'}`}>
                                            {msg.role === 'user' ? <User className="h-3 w-3 text-brand-600" /> : <Bot className="h-3 w-3 text-brand-600" />}
                                        </div>
                                        <div className={`p-3 rounded-2xl text-sm shadow-sm ${
                                            msg.role === 'user' 
                                            ? 'bg-brand-600 text-white rounded-br-none' 
                                            : 'bg-white text-slate-700 border border-slate-200 rounded-bl-none'
                                        }`}>
                                            {msg.content}
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <div className="p-4 bg-white border-t border-slate-100">
                            <div className="relative flex items-center">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                    placeholder="Type your question..."
                                    className="w-full pl-4 pr-12 py-3 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-sm transition-all"
                                />
                                <button
                                    onClick={handleSend}
                                    className="absolute right-2 p-2 bg-brand-600 text-white rounded-xl hover:bg-brand-700 transition-colors shadow-md"
                                >
                                    <Send className="h-4 w-4" />
                                </button>
                            </div>
                            <p className="text-[10px] text-center text-slate-400 mt-2">
                                LaunchWise AI can make mistakes. Check important info.
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
