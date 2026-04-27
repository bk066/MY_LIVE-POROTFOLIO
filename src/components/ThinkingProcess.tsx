import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Lightbulb, Code, Rocket, ChevronRight, Share2, Terminal, Zap } from 'lucide-react';
import { cn } from '../lib/utils';

const steps = [
  {
    id: 'idea',
    title: 'Abstract Idea',
    icon: Lightbulb,
    description: 'Conceptualizing the synergy between operational logic and visual aesthetic.',
    color: 'text-[#D4A373]',
    bgColor: 'bg-brand-accent/5',
    details: 'The phase where logic meets intuition. We define the metadata of the intent before writing a single line of code.'
  },
  {
    id: 'vibe',
    title: 'Vibe Coding',
    icon: Terminal,
    description: 'Iterative development using AI-assisted flows (Cursor, Bolt, Claude).',
    color: 'text-[#1A1A1A]',
    bgColor: 'bg-black/5',
    details: 'Harnessing agentic logic to scaffold infrastructure at high velocity while maintaining architectural precision.'
  },
  {
    id: 'precision',
    title: 'Refinement',
    icon: Code,
    description: 'Manual polishing, component hardening, and deep SEO optimization.',
    color: 'text-[#D4A373]',
    bgColor: 'bg-brand-accent/10',
    details: 'Transitioning from AI-generated scaffolding to handcrafted, production-grade components that define the brand identity.'
  },
  {
    id: 'deploy',
    title: 'Deployment',
    icon: Rocket,
    description: 'Pushing to high-performance containers (Vercel, Cloud Run).',
    color: 'text-[#1A1A1A]',
    bgColor: 'bg-black/10',
    details: 'Final optimization of Core Web Vitals and ensuring the digital asset is ready to generate high-fidelity ROI.'
  }
];

export default function ThinkingProcess() {
  const [activeStep, setActiveStep] = useState<string | null>(null);

  return (
    <section className="py-40 bg-[#F9F9F7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
          <div className="max-w-2xl space-y-8">
            <span className="text-meta">The "Draft" Process</span>
            <h2 className="text-display text-4xl md:text-7xl">From Neuron to <span className="italic font-light">Network</span>.</h2>
          </div>
          <p className="text-lg md:text-xl text-[#1A1A1A]/40 max-w-md font-light leading-relaxed">
            A non-linear tracing of the architectural flow—from raw conceptualization to global deployment.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Lines (Desktop) */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-[#1A1A1A]/5 -translate-y-1/2 hidden lg:block" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isActive = activeStep === step.id;

              return (
                <motion.div
                  key={step.id}
                  layout
                  onClick={() => setActiveStep(isActive ? null : step.id)}
                  className={cn(
                    "glass-card p-12 rounded-[3.5rem] cursor-pointer transition-all duration-700 relative overflow-hidden flex flex-col justify-between h-[500px]",
                    isActive ? "lg:scale-105 z-20 shadow-4xl border-brand-accent/30" : "hover:border-brand-accent/20"
                  )}
                >
                  <div className={cn(
                    "absolute top-0 right-0 p-12 opacity-5 transition-transform duration-700",
                    isActive ? "scale-150 rotate-12 opacity-10" : "group-hover:translate-x-2"
                  )}>
                    <Icon size={160} />
                  </div>

                  <div className="space-y-12">
                    <div className={cn(
                      "w-16 h-16 rounded-3xl flex items-center justify-center transition-colors duration-700",
                      isActive ? "bg-brand-primary text-white" : "bg-[#1A1A1A]/5 text-[#1A1A1A]"
                    )}>
                      <Icon size={28} />
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <span className="font-mono text-[10px] text-brand-accent font-bold">PATH 0{idx + 1}</span>
                        <div className="h-[1px] w-8 bg-brand-accent/20" />
                      </div>
                      <h3 className="text-3xl font-bold tracking-tight">{step.title}</h3>
                      <p className="text-sm text-[#1A1A1A]/50 leading-relaxed font-light">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="mt-8 pt-8 border-t border-[#1A1A1A]/5 space-y-6"
                      >
                        <p className="text-xs text-[#1A1A1A]/80 leading-relaxed font-medium">
                          {step.details}
                        </p>
                        <div className="flex items-center gap-2 text-brand-accent text-[9px] font-bold uppercase tracking-widest cursor-pointer group">
                          Explore Layer <Zap size={10} className="group-hover:scale-125 transition-transform" />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {!isActive && (
                    <div className="mt-8 flex items-center justify-between">
                      <div className="flex -space-x-2">
                        {[1, 2, 3].map(i => (
                          <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-slate-100" />
                        ))}
                      </div>
                      <div className="w-10 h-10 rounded-full border border-[#1A1A1A]/5 flex items-center justify-center text-[#1A1A1A]/20">
                        <ChevronRight size={14} />
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
