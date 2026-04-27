import React from 'react';
import { motion } from 'motion/react';
import { Shield, Lock, Eye, Server, RefreshCw, Key, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Security() {
  const securityFeatures = [
    {
      icon: Shield,
      title: 'Infrastructure Integrity',
      desc: 'All communications are encrypted via TLS 1.3. Our infrastructure is hosted on hardened containers with real-time threat monitoring and automated failover protocols.'
    },
    {
      icon: Lock,
      title: 'Data Sovereignty',
      desc: 'We adhere to zero-trust principles. User data is never stored in plaintext and is isolated using partitioned database architecture to prevent cross-contamination.'
    },
    {
      icon: Eye,
      title: 'Privacy by Design',
      desc: 'Privacy is not a feature; it is the foundation. We minimize data collection and ensure that all analytic telemetry is anonymized at the point of origin.'
    },
    {
      icon: Server,
      title: 'Operational Security',
      desc: 'Continuous CI/CD security scanning, vulnerability assessments, and dependency hardening ensure the digital asset remains resilient against evolving vectors.'
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
          <span className="text-meta text-brand-accent mb-6 inline-block">Security Architecture // Core.v2</span>
          <h1 className="text-display text-6xl md:text-9xl leading-[0.9] mb-12">
            Hardened <br /> 
            <span className="italic font-light opacity-30">Integrity.</span>
          </h1>
          <p className="text-2xl text-[#1A1A1A]/60 font-light max-w-3xl leading-relaxed">
            A comprehensive overview of the protocols, practices, and physical safeguards implemented to protect the digital ecosystem and user data sovereignty.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {securityFeatures.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-12 rounded-[3rem] space-y-8"
            >
              <div className="w-16 h-16 rounded-2xl bg-brand-accent/5 flex items-center justify-center">
                <feature.icon className="text-brand-accent" size={32} />
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-display font-medium">{feature.title}</h3>
                <p className="text-[#1A1A1A]/50 leading-relaxed text-lg">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-40 p-16 bg-[#1A1A1A] rounded-[4rem] text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 architect-grid translate-y-1/2" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <RefreshCw className="text-brand-accent animate-spin-slow" size={20} />
                <span className="font-mono text-[10px] tracking-[0.4em] uppercase opacity-40">System Heartbeat</span>
              </div>
              <h2 className="text-display text-5xl md:text-7xl">Continuous <br /> Vigilance.</h2>
              <p className="opacity-60 text-xl font-light">
                Our systems perform millions of security checks daily to ensure the ongoing integrity of the architecture.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 font-mono">
               {[
                 { label: 'Encryption', val: 'AES-256' },
                 { label: 'Uptime', val: '99.98%' },
                 { label: 'Threat Protection', val: 'Layer 7' },
                 { label: 'Audit Log', val: 'Immutable' }
               ].map((stat, i) => (
                 <div key={i} className="p-8 border border-white/10 rounded-3xl space-y-4">
                    <p className="text-[10px] opacity-30 uppercase tracking-widest">{stat.label}</p>
                    <p className="text-2xl font-black">{stat.val}</p>
                 </div>
               ))}
            </div>
          </div>
        </div>
        <div className="mt-20 flex justify-center">
          <Link to="/contact">
            <button className="px-16 py-8 bg-brand-primary text-white rounded-full font-bold text-xs uppercase tracking-widest hover:bg-brand-accent transition-colors flex items-center gap-6 group">
              Request Security Audit <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
