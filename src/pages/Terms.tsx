import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Scale, FileText, Globe, CheckCircle2 } from 'lucide-react';

export default function Terms() {
  const sections = [
    {
      title: 'Operational Scope',
      content: 'This digital asset represents the professional architecture and intellectual property of Bharat Kumar Jalan. Access to and use of this interface constitutes acceptance of these protocol parameters.'
    },
    {
      title: 'Intellectual Sovereignty',
      content: 'All designs, code architectures, spatial models, and visual assets are protected as exclusive intellectual property. Unauthorized reproduction or reverse engineering of the custom motion logic or GLSL shaders is strictly prohibited.'
    },
    {
      title: 'Dynamic Content',
      content: 'The content within this ecosystem is subject to real-time updates and architectural refinement without prior notice. We maintain the right to modify system parameters to optimize kinetic performance.'
    },
    {
      title: 'Ethical Engagement',
      content: 'Engagement with this interface must occur within established ethical boundaries. Any attempts to bypass security headers, inject malicious telemetry, or harvest anonymized data will result in a permanent termination of access.'
    }
  ];

  return (
    <div className="pt-40 pb-20 px-6 md:px-12 bg-[#F9F9F7] min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-32 flex flex-col md:flex-row justify-between items-end gap-12"
        >
          <div className="max-w-2xl">
            <span className="text-meta text-brand-accent mb-6 inline-block">Protocol Documentation // Terms.v4</span>
            <h1 className="text-display text-4xl md:text-8xl leading-tight">
              Operational <br /> 
              <span className="italic font-light opacity-30">Ground Rules.</span>
            </h1>
          </div>
          <div className="flex items-center gap-6 p-8 glass-card rounded-3xl border-brand-accent/20">
             <Scale className="text-brand-accent" size={32} />
             <div className="space-y-1">
                <p className="font-mono text-[10px] font-black uppercase opacity-40">Effective Date</p>
                <p className="font-mono text-sm font-bold">20.04.2026</p>
             </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
          <div className="lg:col-span-4 space-y-12">
             <div className="sticky top-40 space-y-8">
                <p className="text-meta">Table of Protocols</p>
                <div className="space-y-4">
                   {sections.map((s, i) => (
                     <div key={i} className="flex items-center gap-4 group cursor-pointer">
                        <div className="w-1 h-1 rounded-full bg-brand-accent scale-0 transition-transform group-hover:scale-100" />
                        <span className="font-mono text-[10px] font-black uppercase tracking-[0.2em] opacity-40 group-hover:opacity-100 transition-opacity">
                          0{i + 1}. {s.title}
                        </span>
                     </div>
                   ))}
                </div>

                <div className="p-10 bg-brand-accent rounded-[2.5rem] text-brand-primary space-y-6">
                   <FileText size={40} />
                   <h3 className="text-2xl font-display font-medium">Download Full Report</h3>
                   <p className="text-sm opacity-60 leading-relaxed font-light">
                      Access the complete architectural whitepaper and compliance documentation in PDF format.
                   </p>
                   <Link to="/contact">
                      <button className="w-full py-4 bg-brand-primary text-white text-xs font-bold uppercase tracking-[0.2em] rounded-2xl hover:scale-105 transition-transform">
                         Request PDF
                      </button>
                   </Link>
                </div>
             </div>
          </div>

          <div className="lg:col-span-8 space-y-24 pb-40">
            {sections.map((section, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="flex items-baseline gap-6">
                   <span className="font-display italic text-6xl opacity-10">0{idx + 1}</span>
                   <h2 className="text-4xl md:text-5xl font-display font-medium">{section.title}</h2>
                </div>
                <div className="max-w-2xl space-y-8">
                  <p className="text-xl text-[#1A1A1A]/70 font-light leading-relaxed">
                    {section.content}
                  </p>
                  <div className="flex gap-4">
                     {[1, 2].map(i => (
                       <div key={i} className="flex-1 h-[1px] bg-[#1A1A1A]/5" />
                     ))}
                  </div>
                </div>
              </motion.div>
            ))}

            <div className="pt-12 border-t border-[#1A1A1A]/5">
               <div className="flex items-center gap-4 text-emerald-500 mb-8">
                  <CheckCircle2 size={24} />
                  <span className="font-mono text-xs font-bold uppercase tracking-widest">Compliance Verified</span>
               </div>
               <p className="text-[#1A1A1A]/40 text-sm max-w-lg leading-relaxed">
                  By persisting within this session, you acknowledge and certify that your digital fingerprint operates within these defined parameters of engagement. 
               </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
