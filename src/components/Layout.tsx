import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { NavLink } from 'react-router-dom';
import { Github, Linkedin, Mail, ChevronRight, MapPin, Menu, X, Share2, ArrowUpRight } from 'lucide-react';
import { cn } from '../lib/utils';
import { useState, useEffect } from 'react';

export function Navigation() {
  const [isHovered, setIsHovered] = useState(false);
  const [isLocked, setIsLocked] = useState(false);
  
  const expanded = isHovered || isLocked;

  const links = [
    { to: '/', label: 'The Hub', icon: '01' },
    { to: '/technical', label: 'Architecture', icon: '02' },
    { to: '/business', label: 'Strategy', icon: '03' },
    { to: '/map', label: 'Spatial Map', icon: '04' },
    { to: '/observer', label: 'Observer', icon: '05' },
    { to: '/contact', label: 'Inquiry', icon: '06' },
  ];

  return (
    <div className="fixed top-12 left-1/2 -translate-x-1/2 z-[100] flex flex-col items-center gap-4">
      <motion.nav 
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        aria-label="Main navigation"
        className="glass-morphism rounded-[2rem] p-3 flex items-center gap-3 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border-white/30 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-brand-accent/5 to-transparent opacity-20 pointer-events-none" aria-hidden="true" />
        <div className="absolute top-0 left-0 w-full h-full scanning-line bg-gradient-to-b from-transparent via-brand-accent/10 to-transparent opacity-40 pointer-events-none" aria-hidden="true" />

        <button 
          onClick={() => setIsLocked(!isLocked)}
          className="w-14 h-14 bg-brand-primary text-white rounded-2xl flex items-center justify-center group relative overflow-hidden z-10 transition-transform active:scale-95"
          title={isLocked ? "Collapse Menu" : "Expand Menu"}
          aria-expanded={isLocked}
          aria-label={isLocked ? "Collapse navigation menu" : "Expand navigation menu"}
        >
          <motion.div 
            animate={{ rotate: isLocked ? 180 : 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            className="relative z-20"
          >
            {isLocked ? <X size={20} /> : <Menu size={20} />}
          </motion.div>
          <div className="absolute inset-0 bg-white/20 origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform" />
        </button>

        <div className="flex gap-2" role="menubar">
          {links.map((link, idx) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setIsLocked(false)}
              role="menuitem"
              aria-label={link.label}
              className={({ isActive }) =>
                cn(
                  "relative flex items-center justify-center h-14 transition-all duration-700 ease-[0.22,1,0.36,1] rounded-2xl overflow-hidden",
                  expanded ? "px-6 w-auto" : "w-14",
                  isActive ? "bg-brand-accent/10 text-brand-primary" : "text-brand-muted hover:text-brand-primary"
                )
              }
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-[10px] font-bold opacity-40">{link.icon}</span>
                <AnimatePresence>
                  {expanded && (
                    <motion.span 
                      initial={{ opacity: 0, x: -10, filter: 'blur(5px)' }}
                      animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                      exit={{ opacity: 0, x: -10, filter: 'blur(5px)' }}
                      className="text-[10px] font-black uppercase tracking-[0.2em] whitespace-nowrap"
                    >
                      {link.label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
              <motion.div 
                className="absolute bottom-1 left-1.5 right-1.5 h-[1.5px] bg-brand-accent opacity-0"
                whileHover={{ opacity: 1 }}
              />
            </NavLink>
          ))}
        </div>

        <div className="w-px h-10 bg-slate-200 mx-2" />

        <div className="px-4 py-2 bg-slate-50/50 rounded-xl border border-slate-100 flex items-center gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-widest">System Active</span>
        </div>
      </motion.nav>
      
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: expanded ? 0 : 1, y: 0 }}
        className="px-6 py-2 glass-morphism rounded-full font-mono text-[9px] text-slate-400 uppercase tracking-[0.5em] font-bold"
      >
        Command Hub / Kinetic.v2
      </motion.div>
    </div>
  );
}

export function Footer() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="relative bg-[#1A1A1A] pt-40 pb-20 px-6 md:px-12 mt-40 overflow-hidden text-white">
      <div className="absolute inset-0 opacity-5 pointer-events-none architect-grid" />
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-accent to-transparent" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
          <div className="lg:col-span-12 space-y-8 mb-12">
             <div className="flex items-center gap-4">
                <div className="w-12 h-[1px] bg-brand-accent" />
                <span className="text-meta !text-brand-accent/60">Digital Asset v4.0</span>
             </div>
             <h2 className="text-display text-5xl md:text-8xl lg:text-[10rem] opacity-20 italic">
                Strategic <br /> Architecture.
             </h2>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-6">
              <p className="text-meta">Core Navigation</p>
              <ul className="space-y-4 font-sans text-sm opacity-60">
                <li><NavLink to="/" className="hover:text-brand-accent transition-colors">Digital Hub</NavLink></li>
                <li><NavLink to="/technical" className="hover:text-brand-accent transition-colors">Technical Architecture</NavLink></li>
                <li><NavLink to="/business" className="hover:text-brand-accent transition-colors">Business Intelligence</NavLink></li>
                <li><NavLink to="/contact" className="hover:text-brand-accent transition-colors">Commission Inquiry</NavLink></li>
              </ul>
            </div>
            
            <div className="space-y-6">
              <p className="text-meta">Social Nodes</p>
              <ul className="space-y-4 font-sans text-sm opacity-60">
                <li><a href="https://linkedin.com" target="_blank" className="hover:text-brand-accent transition-colors flex items-center gap-2">LinkedIn <ArrowUpRight size={10} /></a></li>
                <li><a href="https://github.com" target="_blank" className="hover:text-brand-accent transition-colors flex items-center gap-2">GitHub <ArrowUpRight size={10} /></a></li>
                <li><a href="https://twitter.com" target="_blank" className="hover:text-brand-accent transition-colors flex items-center gap-2">X / Twitter <ArrowUpRight size={10} /></a></li>
                <li><a href="https://behance.net" target="_blank" className="hover:text-brand-accent transition-colors flex items-center gap-2">Behance <ArrowUpRight size={10} /></a></li>
              </ul>
            </div>

            <div className="space-y-6">
              <p className="text-meta">Technical Feed</p>
              <div className="space-y-4 font-mono text-[10px] opacity-40">
                <div className="flex justify-between">
                  <span>STATUS</span>
                  <span className="text-green-400">OPERATIONAL</span>
                </div>
                <div className="flex justify-between">
                  <span>LATENCY</span>
                  <span>24ms</span>
                </div>
                <div className="flex justify-between">
                  <span>UPTIME</span>
                  <span>99.98%</span>
                </div>
                <div className="flex justify-between">
                  <span>BUILD</span>
                  <span>0x2A9F4</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-end items-end gap-12">
             <div className="text-right">
                <p className="text-meta mb-2">Local Telemetry</p>
                <p className="text-4xl font-display font-medium tracking-tighter" aria-live="off">{time}</p>
                <p className="text-xs opacity-30 mt-2">GMT+5:30 — Surat, IN</p>
             </div>
             
             <NavLink to="/contact">
                <button className="px-8 py-4 bg-brand-accent text-brand-primary font-bold rounded-full text-xs uppercase tracking-widest hover:scale-105 transition-transform">
                   Request Connection
                </button>
             </NavLink>
          </div>
        </div>

        <div className="mt-40 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="flex items-center gap-4 text-[9px] font-mono opacity-20 uppercase tracking-[0.4em]">
              <span>&copy; 2026 Bharat Kumar Jalan</span>
              <span className="hidden md:inline">•</span>
              <span>All Rights Reserved</span>
           </div>
           
           <div className="flex items-center gap-8">
              <NavLink to="/privacy" className="text-[10px] uppercase font-bold tracking-widest hover:text-brand-accent transition-colors">Privacy Policy</NavLink>
              <NavLink to="/terms" className="text-[10px] uppercase font-bold tracking-widest hover:text-brand-accent transition-colors">Terms</NavLink>
              <NavLink to="/security" className="text-[10px] uppercase font-bold tracking-widest hover:text-brand-accent transition-colors">Security</NavLink>
           </div>
        </div>
      </div>
    </footer>
  );
}

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-0.5 bg-brand-accent origin-left z-[200]"
      style={{ scaleX }}
    />
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen bg-[#F9F9F7] selection:bg-brand-accent selection:text-brand-primary">
      <ScrollProgress />
      <Navigation />
      <main className="relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
}

