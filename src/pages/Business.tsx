import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Box, TrendingUp, Calendar, ChevronRight, Activity, Users, Target, BarChart, BookOpen, Truck } from 'lucide-react';
import { KineticText } from '../components/AnimatedText';
import { CareerTimeline } from '../components/CareerTimeline';

const services = [
  {
    title: 'Digital Architecture',
    desc: 'Engineering premium 3D portfolios and high-performance WebGL ecosystems.',
    icon: ShoppingBag,
    roi: 'High-ROI Brand Identity'
  },
  {
    title: 'Packaging Strategy',
    desc: 'End-to-end B2B logistics and structural design for industrial scale.',
    icon: Box,
    roi: 'Operational Efficiency'
  },
  {
    title: 'Commerce Tutoring',
    desc: 'Elite tutoring in Accountancy, Business Studies, and Economics.',
    icon: BookOpen,
    roi: 'National Rank Preparation'
  }
];

export default function Business() {
  return (
    <div className="min-h-screen pt-48 pb-24 px-6 md:px-12 bg-[#F9F9F7]">
      <div className="max-w-[1800px] mx-auto">
        <header className="mb-40 max-w-5xl">
          <span className="text-meta mb-10 block">Module 02 / Strategic Engine</span>
          <KineticText 
            text="Operational" 
            className="text-display text-7xl md:text-[8rem] lg:text-[10rem] text-[#1A1A1A] leading-[0.8]" 
          />
          <KineticText 
            text="Strategy." 
            className="text-display text-7xl md:text-[8rem] lg:text-[10rem] italic text-brand-accent leading-[0.8]" 
          />
          <p className="text-xl md:text-3xl text-[#1A1A1A]/40 mt-16 leading-relaxed font-light">
            Synthesizing industrial sales cycles and high-pressure logistics into <span className="text-[#1A1A1A] font-medium underline decoration-brand-accent/30 decoration-4">operational architecture</span> designed for scale and precision.
          </p>
        </header>

        {/* Commercial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-56">
           <div className="lg:col-span-12 flex items-center justify-between mb-12">
              <h2 className="text-display text-4xl uppercase tracking-tighter italic opacity-20">Structural Units</h2>
              <div className="w-1/3 h-px bg-[#1A1A1A]/5 hidden md:block" />
           </div>

           <div className="lg:col-span-8 group relative overflow-hidden glass-card rounded-[4rem] p-12 md:p-24 depth-shadow min-h-[700px] flex flex-col justify-end transition-all duration-700 hover:bg-[#1A1A1A] hover:text-white">
              <div className="absolute inset-0 opacity-10 group-hover:opacity-30 transition-opacity">
                 <img 
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200"
                    alt="Operations"
                    className="w-full h-full object-cover"
                 />
              </div>
              <div className="relative z-10">
                 <div className="flex items-center gap-6 mb-12">
                    <div className="w-20 h-20 bg-white/10 backdrop-blur-xl rounded-[2rem] flex items-center justify-center text-[#1A1A1A] group-hover:text-white group-hover:border-white/20 transition-all border border-[#1A1A1A]/5">
                       <Truck size={36} />
                    </div>
                    <div>
                       <h3 className="text-4xl font-black uppercase tracking-tight">Industrial Dynamics</h3>
                       <p className="text-meta !text-brand-accent/60">Packaging Specialization</p>
                    </div>
                 </div>
                 <p className="text-2xl md:text-3xl font-light leading-relaxed mb-12 max-w-2xl opacity-80">
                    Directing large-scale B2B supply chains, optimizing inventory flow, and designing packaging architectures for diverse industrial sectors.
                 </p>
                 <div className="flex flex-wrap gap-4">
                    {['Supply Chain Logic', 'Structural Design', 'B2B Procurement'].map(skill => (
                      <span key={skill} className="text-[10px] font-bold tracking-widest px-8 py-3 glass-card rounded-full group-hover:bg-white/10 group-hover:border-white/10">{skill}</span>
                    ))}
                 </div>
              </div>
           </div>

           <div className="lg:col-span-4 space-y-8">
              <div className="glass-card p-12 rounded-[3.5rem] bg-brand-accent text-white h-[calc(50%-1rem)] flex flex-col justify-between">
                 <BarChart size={48} className="text-white/40 mb-12" />
                 <div>
                    <h3 className="text-3xl font-black uppercase tracking-tight mb-6 leading-none">Commerce <br /> Mastery</h3>
                    <p className="text-lg font-light leading-relaxed mb-8 text-white/80">
                      B.Com Strategic mindset applied to asset valuation and market positioning.
                    </p>
                 </div>
                 <div className="flex justify-between items-center bg-white/20 p-6 rounded-3xl">
                    <span className="font-mono text-xs font-bold">Valuation Node</span>
                    <span className="text-2xl font-display italic">99.8th %</span>
                 </div>
              </div>
              
              <div className="glass-card p-12 rounded-[3.5rem] h-[calc(50%-1rem)] flex flex-col justify-between border-2 border-[#1A1A1A]/5 hover:border-brand-accent transition-colors group">
                 <BookOpen size={48} className="text-brand-accent mb-12 group-hover:scale-110 transition-transform" />
                 <div>
                    <h3 className="text-3xl font-black uppercase tracking-tight mb-6 leading-none">Pedagogical <br /> Lab</h3>
                    <p className="text-lg font-light text-[#1A1A1A]/60 leading-relaxed">
                      Elite tutoring module for Accountancy and Economics. Scaling academic performance through first-principles logic.
                    </p>
                 </div>
                 <Link to="/contact">
                   <button className="w-full py-4 border border-[#1A1A1A]/10 rounded-2xl font-mono text-[9px] font-black tracking-widest hover:bg-brand-primary hover:text-white transition-all uppercase">
                     Access Rank Module
                   </button>
                 </Link>
              </div>
           </div>
        </div>

        {/* Opportunity Hub Grid */}
        <section className="mb-56">
           <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
              <div className="space-y-6">
                 <h2 className="text-display text-5xl md:text-8xl">The Opportunity <span className="italic font-light text-brand-accent">Hub.</span></h2>
                 <p className="text-xl text-[#1A1A1A]/40 font-light max-w-xl leading-relaxed">
                    Framing digital architecture as a high-ROI asset. Bridging the gap between conceptual intent and business realization.
                 </p>
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -10 }}
                  className="glass-card p-12 rounded-[3.5rem] flex flex-col justify-between h-[500px] border-black/5 hover:border-brand-accent transition-all group"
                >
                  <div className="space-y-8">
                    <div className="w-20 h-20 bg-[#1A1A1A]/5 rounded-[2rem] flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-all">
                       <service.icon size={32} />
                    </div>
                    <h3 className="text-3xl font-black tracking-tighter leading-tight">{service.title}</h3>
                    <p className="text-[#1A1A1A]/50 font-light leading-relaxed">
                       {service.desc}
                    </p>
                  </div>
                  <div className="flex justify-between items-center pt-8 border-t border-[#1A1A1A]/5">
                     <span className="text-meta !text-brand-accent/40">{service.roi}</span>
                     <ChevronRight size={20} className="text-brand-accent" />
                  </div>
                </motion.div>
              ))}
           </div>
        </section>

        {/* Career Timeline Section */}
        <section className="mb-56">
           <div className="flex flex-col md:flex-row items-center justify-between mb-24 gap-12">
              <div className="max-w-2xl space-y-8">
                 <h2 className="text-display text-5xl md:text-8xl leading-tight">Career <br /> <span className="italic font-light opacity-30">Architecture.</span></h2>
                 <p className="text-xl text-[#1A1A1A]/40 font-light leading-relaxed">
                    Tracing the evolution of a professional ecosystem—from foundational commerce strategy to high-fidelity operational mastery.
                 </p>
              </div>
              <div className="w-40 h-40 rounded-full border border-[#1A1A1A]/5 flex items-center justify-center animate-spin-slow">
                 <div className="w-20 h-[1px] bg-brand-accent" />
              </div>
           </div>
           
           <CareerTimeline />
        </section>
      </div>
    </div>
  );
}
