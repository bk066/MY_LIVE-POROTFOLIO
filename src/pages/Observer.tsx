import React from 'react';
import { motion } from 'motion/react';
import { Activity, Eye, Search, AlertCircle, CheckCircle, BarChart3, Fingerprint, Radar } from 'lucide-react';
import { KineticText } from '../components/AnimatedText';

const auditMetrics = [
  { label: 'Operational Friction', value: '-42%', trend: 'Improving' },
  { label: 'Team Synchronicity', value: '94%', trend: '+12%' },
  { label: 'Logic Fidelity', value: 'High', trend: 'Stable' },
  { label: 'Resource Leakage', value: '2%', trend: 'Zero-Goal' }
];

export default function Observer() {
  return (
    <div className="min-h-screen pt-48 pb-24 px-6 md:px-12 bg-[#F9F9F7]">
      <div className="max-w-[1800px] mx-auto">
        <header className="mb-40 max-w-4xl">
          <span className="text-meta mb-10 block">Module 03 / Observation Protocol</span>
          <KineticText 
            text="High-Fidelity" 
            className="text-display text-7xl md:text-[8rem] lg:text-[10rem] text-[#1A1A1A] leading-[0.8]" 
          />
          <KineticText 
            text="Auditing." 
            className="text-display text-7xl md:text-[8rem] lg:text-[10rem] italic text-brand-accent leading-[0.8]" 
          />
          <p className="text-xl md:text-3xl text-[#1A1A1A]/40 mt-16 leading-relaxed font-light">
            Executing specialized "Mystery Audits" to identify friction points in management and team execution. Translating visual data into <span className="text-[#1A1A1A] font-medium">architectural improvements</span>.
          </p>
        </header>

        {/* Audit Visualization */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-56">
           <div className="lg:col-span-12 glass-card p-12 md:p-24 rounded-[4rem] bg-[#1A1A1A] text-white overflow-hidden relative group">
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                 <Radar size={600} className="absolute -top-40 -right-40 text-brand-accent animate-spin-slow" />
              </div>

              <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
                 <div className="space-y-12">
                    <div className="flex items-center gap-6">
                       <div className="w-16 h-16 bg-brand-accent text-brand-primary rounded-2xl flex items-center justify-center">
                          <Eye size={32} />
                       </div>
                       <h3 className="text-3xl font-bold italic">The Observer Lens</h3>
                    </div>
                    
                    <p className="text-2xl font-light text-white/60 leading-relaxed">
                       Our auditing protocol utilizes a non-invasive, high-fidelity observation strategy to map team dynamics and operational bottlenecks in real-time.
                    </p>

                    <div className="grid grid-cols-2 gap-6">
                       {auditMetrics.map(metric => (
                         <div key={metric.label} className="p-8 bg-white/5 rounded-3xl border border-white/5 space-y-4">
                            <p className="text-meta !text-white/20">{metric.label}</p>
                            <div className="flex justify-between items-end">
                               <span className="text-4xl font-display font-bold text-brand-accent">{metric.value}</span>
                               <span className="text-[9px] font-mono opacity-40 uppercase">{metric.trend}</span>
                            </div>
                         </div>
                       ))}
                    </div>
                 </div>

                 <div className="space-y-12">
                    <div className="p-12 glass-card bg-white/5 border-white/10 rounded-[3rem] space-y-8">
                       <h4 className="text-meta">Protocol Analysis</h4>
                       <div className="space-y-6">
                          {[
                            { label: 'Visual Data Ingestion', status: 'Active', icon: Search },
                            { label: 'Friction Node Mapping', status: 'Scanning', icon: AlertCircle },
                            { label: 'Optimized Logic Output', status: 'Ready', icon: CheckCircle }
                          ].map(step => (
                            <div key={step.label} className="flex items-center justify-between p-6 bg-white/5 rounded-2xl">
                               <div className="flex items-center gap-4">
                                  <step.icon size={18} className="text-brand-accent" />
                                  <span className="text-sm font-bold uppercase tracking-tight">{step.label}</span>
                               </div>
                               <span className="text-[10px] font-mono text-brand-accent animate-pulse">{step.status}</span>
                            </div>
                          ))}
                       </div>
                    </div>
                    
                    <button className="w-full py-8 bg-white text-brand-primary rounded-[2rem] font-bold text-xs uppercase tracking-widest hover:bg-brand-accent transition-colors flex items-center justify-center gap-4 group">
                       Initialize Full Audit <Activity size={16} className="group-hover:rotate-12 transition-transform" />
                    </button>
                 </div>
              </div>
           </div>

           <div className="lg:col-span-8 glass-card p-12 md:p-24 rounded-[4rem] border-2 border-brand-accent/20">
              <div className="space-y-12">
                 <h3 className="text-4xl font-black uppercase tracking-tight">Logic <br /> Translation.</h3>
                 <p className="text-xl text-[#1A1A1A]/50 font-light leading-relaxed max-w-2xl">
                    By leveraging a B.Com strategy background, we translate visual observation data into high-fidelity operational improvements. It's the bridge between <span className="text-[#1A1A1A] font-medium italic">what is seen</span> and <span className="text-[#1A1A1A] font-medium">what is optimized</span>.
                 </p>
                 <div className="flex gap-4">
                    {['Tactical Feedback', 'Structural Pivot', 'Team Resync'].map(tag => (
                      <span key={tag} className="px-8 py-3 rounded-full bg-[#1A1A1A]/5 text-[10px] font-mono font-bold uppercase tracking-widest opacity-40">{tag}</span>
                    ))}
                 </div>
              </div>
           </div>

           <div className="lg:col-span-4 glass-card p-12 rounded-[4rem] bg-brand-accent text-white flex flex-col justify-between">
              <BarChart3 size={48} className="text-white/40 mb-12" />
              <div className="space-y-6">
                 <h3 className="text-3xl font-black uppercase tracking-tight leading-none">High Fidelity <br /> Reporting</h3>
                 <p className="text-lg font-light opacity-80 leading-relaxed">
                   Reports are engineered for executive decision-making. No fluff, just pure architectural data.
                 </p>
              </div>
              <div className="mt-12 p-6 bg-white/20 rounded-2xl flex items-center justify-center gap-2">
                 <Fingerprint size={20} className="opacity-50" />
                 <span className="text-[10px] font-mono font-bold uppercase tracking-widest">ENCRYPTED_LOGS_AVAILABLE</span>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
