import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Linkedin, Globe, ArrowRight, CheckCircle, Send, Sparkles } from 'lucide-react';
import { KineticText } from '../components/AnimatedText';

export default function Contact() {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('sending');
    setTimeout(() => setFormState('success'), 2000);
  };

  return (
    <div className="min-h-screen pt-48 pb-24 px-6 md:px-12 bg-[#F9F9F7]">
      <div className="max-w-[1800px] mx-auto min-h-[80vh] grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
        
        <div className="lg:col-span-6 space-y-12">
          <header className="space-y-8">
            <span className="text-meta">Module 05 / Inquiry Hub</span>
            <KineticText 
              text="Establish" 
              className="text-display text-7xl md:text-[8rem] lg:text-[10rem] text-[#1A1A1A] leading-[0.8]" 
            />
            <KineticText 
              text="Connection." 
              className="text-display text-7xl md:text-[8rem] lg:text-[10rem] italic text-brand-accent leading-[0.8]" 
            />
          </header>

          <p className="text-xl md:text-2xl text-[#1A1A1A]/40 max-w-lg font-light leading-relaxed">
            Commission a high-performance digital asset or inquire about strategic operational architecture. We respond to high-fidelity intents within 24 hours.
          </p>

          <div className="space-y-8">
            <div className="space-y-6">
              <a href="mailto:bharatjalan02@gmail.com" className="flex items-center gap-6 group cursor-pointer lg:w-fit">
                <div className="w-16 h-16 glass-card rounded-2xl flex items-center justify-center group-hover:bg-[#1A1A1A] group-hover:text-white transition-all duration-700">
                  <Mail size={24} />
                </div>
                <div className="space-y-1">
                  <p className="text-meta">Email Protocol</p>
                  <p className="text-xl font-bold tracking-tight text-[#1A1A1A]/60 group-hover:text-brand-accent transition-colors">bharatjalan02@gmail.com</p>
                </div>
              </a>

              <a href="https://linkedin.com" target="_blank" className="flex items-center gap-6 group cursor-pointer lg:w-fit">
                <div className="w-16 h-16 glass-card rounded-2xl flex items-center justify-center group-hover:bg-[#1A1A1A] group-hover:text-white transition-all duration-700">
                  <Linkedin size={24} />
                </div>
                <div className="space-y-1">
                  <p className="text-meta">Professional Node</p>
                  <p className="text-xl font-bold tracking-tight text-[#1A1A1A]/60 group-hover:text-brand-accent transition-colors">in/bharat-jalan-419513274</p>
                </div>
              </a>
            </div>

            <div className="flex gap-4">
              <span className="px-6 py-2 rounded-full bg-brand-accent/10 text-brand-accent text-[9px] font-mono font-bold tracking-widest uppercase">Currently Booking for Q3 2026</span>
              <span className="px-6 py-2 rounded-full bg-green-500/10 text-green-600 text-[9px] font-mono font-bold tracking-widest uppercase flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                Node Online
              </span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-card p-12 md:p-20 rounded-[4rem] border-2 border-brand-accent/10 relative overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {formState === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-20 text-center space-y-8"
                >
                  <div className="w-24 h-24 bg-brand-accent/10 rounded-full flex items-center justify-center text-brand-accent">
                    <CheckCircle size={48} />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-3xl font-black italic">Intent Decrypted.</h3>
                    <p className="text-[#1A1A1A]/40 font-light leading-relaxed">
                      Your inquiry has been successfully transmitted to the architect's head unit. Syncing 24h response protocol.
                    </p>
                  </div>
                  <button 
                    onClick={() => setFormState('idle')}
                    className="px-12 py-4 border border-[#1A1A1A]/10 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-[#1A1A1A] hover:text-white transition-all"
                  >
                    Return to Hub
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-10"
                >
                  <div className="flex justify-between items-start mb-8">
                     <h3 className="text-3xl font-black tracking-tighter">Initialize Connection</h3>
                     <Sparkles size={32} className="text-brand-accent opacity-20" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <label className="text-meta">Full Name</label>
                      <input 
                        required
                        type="text" 
                        placeholder="John Doe" 
                        className="w-full bg-[#1A1A1A]/5 border border-transparent rounded-[2rem] px-8 py-6 font-sans focus:bg-white focus:border-brand-accent transition-all outline-none"
                      />
                    </div>
                    <div className="space-y-4">
                      <label className="text-meta">Return Path (Email)</label>
                      <input 
                        required
                        type="email" 
                        placeholder="john@node.com" 
                        className="w-full bg-[#1A1A1A]/5 border border-transparent rounded-[2rem] px-8 py-6 font-sans focus:bg-white focus:border-brand-accent transition-all outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="text-meta">Project Inquiry</label>
                    <select className="w-full bg-[#1A1A1A]/5 border border-transparent rounded-[2rem] px-8 py-6 font-sans focus:bg-white focus:border-brand-accent transition-all outline-none appearance-none cursor-pointer">
                      <option>Premium Portfolio Architecture</option>
                      <option>Operational Audit & Strategy</option>
                      <option>Full-Stack Ecosystem Expansion</option>
                      <option>Commerce Tutoring Admission</option>
                      <option>General Connectivity</option>
                    </select>
                  </div>

                  <div className="space-y-4">
                    <label className="text-meta">Transmission Message</label>
                    <textarea 
                      required
                      placeholder="Briefly describe your digital intent or architectural requirements..." 
                      className="w-full bg-[#1A1A1A]/5 border border-transparent rounded-[3rem] px-8 py-8 font-sans focus:bg-white focus:border-brand-accent transition-all outline-none min-h-[200px] resize-none"
                    ></textarea>
                  </div>

                  <button 
                    disabled={formState === 'sending'}
                    className="w-full py-8 bg-[#1A1A1A] text-white rounded-[2.5rem] font-bold text-xs uppercase tracking-[0.4em] flex items-center justify-center gap-6 group hover:bg-brand-accent transition-all disabled:opacity-50"
                  >
                    {formState === 'sending' ? 'Transmitting Data...' : (
                      <>
                        Transmit Inquiry <Send size={16} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
            
            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-brand-accent to-transparent opacity-20" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
