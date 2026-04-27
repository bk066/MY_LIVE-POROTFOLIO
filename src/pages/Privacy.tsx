import React from 'react';
import { motion } from 'motion/react';
import { ShieldAlert, Eye, Lock, Database } from 'lucide-react';

export default function Privacy() {
  const sections = [
    {
      title: 'Data Collection & Logic',
      content: 'We implement zero-party data collection protocols. Only essential operational telemetry is processed to ensure system stability and performance optimization.'
    },
    {
      title: 'Encryption Standards',
      content: 'All data in transit is protected by TLS 1.3 encryption. At rest, sensitive identifiers are hashed using industry-standard cryptographic functions.'
    },
    {
      title: 'Third-Party Interfacing',
      content: 'We do not sell user data. Third-party integrations (like Map projections or 3D assets) are audited for privacy compliance and data leakage prevention.'
    },
    {
      title: 'Your Sovereignty',
      content: 'Users maintain full rights over their digital footprint within this ecosystem. Request for data extraction or erasure can be initiated via our secure inquiry channel.'
    }
  ];

  return (
    <div className="pt-40 pb-20 px-6 md:px-12 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-32"
        >
          <span className="text-meta text-brand-accent mb-6 inline-block">Privacy Protocol // Policy.v2</span>
          <h1 className="text-display text-6xl md:text-9xl leading-[0.9] mb-12">
            Data <br /> 
            <span className="italic font-light opacity-30">Sovereignty.</span>
          </h1>
          <p className="text-2xl text-[#1A1A1A]/60 font-light max-w-3xl leading-relaxed">
            Transparent documentation of our data handling practices and the cryptographic measures protecting your digital identity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          {sections.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="space-y-8"
            >
              <div className="flex items-center gap-6">
                 <div className="w-12 h-12 rounded-2xl bg-brand-accent/5 flex items-center justify-center text-brand-accent">
                    {idx === 0 && <Database size={24} />}
                    {idx === 1 && <Lock size={24} />}
                    {idx === 2 && <ShieldAlert size={24} />}
                    {idx === 3 && <Eye size={24} />}
                 </div>
                 <h2 className="text-3xl font-display font-medium">{section.title}</h2>
              </div>
              <p className="text-xl text-[#1A1A1A]/50 font-light leading-relaxed">
                {section.content}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-40 p-16 glass-card rounded-[4rem] border-brand-accent/20 flex flex-col md:flex-row justify-between items-center gap-12">
           <div className="space-y-4">
              <h3 className="text-3xl font-bold tracking-tight uppercase italic">Have Questions?</h3>
              <p className="opacity-60 max-w-sm">For specific inquiries regarding your data security or system protocols, please use the secure contact channel.</p>
           </div>
           <button className="px-12 py-6 bg-brand-primary text-white rounded-full font-bold text-xs uppercase tracking-widest hover:bg-brand-accent transition-colors">
              Secure Inquiry
           </button>
        </div>
      </div>
    </div>
  );
}
