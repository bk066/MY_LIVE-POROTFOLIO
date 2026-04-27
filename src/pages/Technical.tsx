import React from 'react';
import { motion } from 'motion/react';
import { Terminal, Database, Globe, Layers, Code, Cpu, Server, Shield } from 'lucide-react';
import { KineticText } from '../components/AnimatedText';

const techStack = [
  { name: 'Next.js', category: 'Frontend Architecture', level: '95%', icon: Globe },
  { name: 'Prisma', category: 'ORM & Type Safety', level: '90%', icon: Database },
  { name: 'PostgreSQL', category: 'Data Consistency', level: '85%', icon: Layers },
  { name: 'Tailwind CSS', category: 'Visual Logic', level: '100%', icon: Code },
  { name: 'Docker', category: 'Containerization', level: '80%', icon: Server },
  { name: 'GSAP', category: 'Kinetic Rendering', level: '90%', icon: Cpu }
];

export default function Technical() {
  return (
    <div className="min-h-screen pt-48 pb-24 px-6 md:px-12 bg-[#F9F9F7]">
      <div className="max-w-[1800px] mx-auto">
        <header className="mb-40 flex flex-col lg:flex-row justify-between items-end gap-12">
          <div className="max-w-4xl space-y-8">
            <span className="text-meta">Module 01 / Full-Stack Architecture</span>
            <KineticText 
              text="The Developer" 
              className="text-display text-7xl md:text-[8rem] lg:text-[10rem] italic text-brand-accent leading-[0.8]" 
            />
            <KineticText 
              text="Manifesto." 
              className="text-display text-7xl md:text-[8rem] lg:text-[10rem] text-[#1A1A1A] leading-[0.8]" 
            />
          </div>
          <p className="text-xl md:text-2xl text-[#1A1A1A]/40 max-w-sm font-light leading-relaxed">
            Engineering robust digital assets with a focus on type safety, architectural modularity, and high-performance WebGL rendering.
          </p>
        </header>

        {/* Tech Ecosystem Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-56">
           <div className="lg:col-span-8 glass-card p-12 md:p-24 rounded-[4rem] relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity">
                 <Terminal size={200} />
              </div>
              
              <div className="relative z-10 space-y-16">
                 <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-[#1A1A1A] text-white rounded-3xl flex items-center justify-center">
                       <Shield size={32} />
                    </div>
                    <h3 className="text-3xl font-bold tracking-tight">Core Competency</h3>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {techStack.map((tech, idx) => (
                      <motion.div 
                        key={tech.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="space-y-4"
                      >
                         <div className="flex justify-between items-end">
                            <div>
                               <p className="text-meta !text-brand-accent/40 mb-2">{tech.category}</p>
                               <h4 className="text-xl font-bold">{tech.name}</h4>
                            </div>
                            <span className="font-mono text-xs opacity-30">{tech.level}</span>
                         </div>
                         <div className="w-full h-[1px] bg-[#1A1A1A]/5 relative overflow-hidden">
                            <motion.div 
                               initial={{ width: 0 }}
                               whileInView={{ width: tech.level }}
                               transition={{ duration: 1.5, ease: "circOut" }}
                               className="absolute inset-y-0 left-0 bg-brand-accent"
                            />
                         </div>
                      </motion.div>
                    ))}
                 </div>
              </div>
           </div>

           <div className="lg:col-span-4 space-y-8">
              <div className="glass-card p-12 rounded-[3.5rem] h-1/2 flex flex-col justify-between bg-brand-primary text-white">
                 <h3 className="text-2xl font-bold uppercase tracking-widest text-brand-accent">Database Protocol</h3>
                 <p className="text-lg font-light opacity-60 leading-relaxed">
                   Designing relational schemas that prioritize data integrity and query performance. Expert in Prisma ORM and PostgreSQL deployments.
                 </p>
                 <div className="flex gap-2">
                    {['Relational', 'Scalable', 'Atomic'].map(tag => (
                      <span key={tag} className="px-4 py-2 rounded-full border border-white/10 text-[9px] font-mono uppercase tracking-[0.3em] font-bold">{tag}</span>
                    ))}
                 </div>
              </div>
              <div className="glass-card p-12 rounded-[3.5rem] h-1/2 flex flex-col justify-between border-2 border-brand-accent/20">
                 <h3 className="text-2xl font-bold uppercase tracking-widest text-brand-primary">Ecosystem Thinking</h3>
                 <p className="text-lg font-light text-[#1A1A1A]/60 leading-relaxed">
                   Looking beyond the browser. Visualizing the entire stack as a living, breathing digital organism.
                 </p>
                 <button className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-[#1A1A1A] group">
                    Explore Infrastructure <Code size={14} className="group-hover:translate-x-2 transition-transform" />
                 </button>
              </div>
           </div>
        </div>

        {/* Featured Projects Grid */}
        <section className="space-y-32">
           <div className="flex flex-col md:flex-row justify-between items-end gap-12">
              <h2 className="text-display text-5xl md:text-8xl">Global <span className="italic font-light text-brand-accent">Portfolio.</span></h2>
              <div className="flex items-center gap-8 text-[#1A1A1A]/20 font-mono text-[9px] uppercase tracking-widest">
                 <span>Architecture_v4.0</span>
                 <div className="w-[1px] h-12 bg-[#1A1A1A]/10" />
                 <span>R3F_Optimized</span>
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <ProjectBlock 
                title="DRIP Production"
                category="Entertainment Architecture"
                desc="Redefining party culture through high-fidelity digital logistics and immersive event curation. From elite nightlife to massive music events."
                tags={['Event Ops', 'Cultural Logic', 'Creative Direction']}
                src="https://images.unsplash.com/photo-1514525253361-bee8718a74a2?auto=format&fit=crop&q=80&w=1200"
              />
              <ProjectBlock 
                title="Hunger's Home"
                category="Full-Stack Web App"
                desc="A high-performance digital ecosystem designed for scale. Featuring robust DB architecture and fluid R3F visual modules."
                tags={['Next.js', 'Prisma', 'R3F']}
                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1200"
              />
              <ProjectBlock 
                title="LuxeLabelLog"
                category="Visual Asset Manager"
                desc="A Pinterest-inspired grid system for high-fidelity inventory management and digital curation."
                tags={['Framer Motion', 'PostgreSQL', 'Grid.v2']}
                src="https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?auto=format&fit=crop&q=80&w=1200"
              />
           </div>
        </section>
      </div>
    </div>
  );
}

function ProjectBlock({ title, category, desc, tags, src }: any) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="glass-card rounded-[4rem] group overflow-hidden border-0"
    >
       <div className="relative h-[500px] overflow-hidden">
          <img 
            src={src} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-[2s] scale-105 group-hover:scale-110" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent opacity-60" />
          
          <div className="absolute bottom-12 left-12 right-12 flex justify-between items-end">
             <div className="space-y-4">
                <span className="text-meta !text-white/60 tracking-[0.8em]">{category}</span>
                <h3 className="text-4xl text-white font-black tracking-tight">{title}</h3>
             </div>
             <div className="w-16 h-16 bg-white text-[#1A1A1A] rounded-full flex items-center justify-center -rotate-45 group-hover:rotate-0 transition-transform duration-500">
                <Globe size={24} />
             </div>
          </div>
       </div>
       <div className="p-12 space-y-8 bg-white">
          <p className="text-lg text-[#1A1A1A]/50 font-light leading-relaxed">{desc}</p>
          <div className="flex flex-wrap gap-2">
             {tags.map((tag: string) => (
               <span key={tag} className="px-6 py-2 rounded-full bg-[#1A1A1A]/5 text-[9px] font-mono font-bold uppercase tracking-widest text-[#1A1A1A]/40">{tag}</span>
             ))}
          </div>
       </div>
    </motion.div>
  );
}
