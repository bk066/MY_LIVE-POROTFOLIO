import { motion } from 'motion/react';
import { Calendar, Award, Rocket, Target, Zap, LucideIcon, Box } from 'lucide-react';
import { cn } from '../lib/utils';

interface Milestone {
  date: string;
  title: string;
  description: string;
  icon: LucideIcon;
  category: string;
}

const milestones: Milestone[] = [
  {
    date: '2024 - Present',
    title: 'Full-Stack Architect',
    description: 'Leading the development of high-performance digital ecosystems and WebGL-driven portfolios.',
    icon: Zap,
    category: 'Innovation'
  },
  {
    date: '2023',
    title: 'Packaging Specialist',
    description: 'Optimized industrial supply chains and B2B structural packaging dynamics at scale.',
    icon: Box,
    category: 'Operations'
  },
  {
    date: '2022',
    title: 'Digital Creation Hub',
    description: 'Synthesized visual storytelling and creator-economy analytics into high-fidelity content strategies.',
    icon: Rocket,
    category: 'Creative'
  },
  {
    date: '2021',
    title: 'Commerce Mastery',
    description: 'Applied B.Com logic to operational efficiency awards and strategic rank preparation milestones.',
    icon: Award,
    category: 'Strategy'
  }
];

export function CareerTimeline() {
  return (
    <section className="py-32 relative overflow-hidden" aria-label="Career Timeline">
      <div className="max-w-7xl mx-auto">
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-[#1A1A1A]/5 hidden md:block" />
          
          <div className="space-y-40">
            {milestones.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={cn(
                  "relative flex flex-col md:flex-row items-center gap-24",
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                )}
              >
                {/* Connection Point */}
                <div className="absolute left-1/2 -translate-x-1/2 top-0 md:top-1/2 md:-translate-y-1/2 w-6 h-6 bg-white border-2 border-brand-accent rounded-full z-10 hidden md:block shadow-xl shadow-brand-accent/20" />

                {/* Content Card */}
                <div className="w-full md:w-[calc(50%-4rem)] group">
                  <div className="glass-card p-12 md:p-16 rounded-[4rem] transition-all duration-700 hover:scale-[1.02] relative overflow-hidden group-hover:border-brand-accent/30 bg-white shadow-3xl shadow-black/[0.02]">
                    <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity">
                      <item.icon size={160} />
                    </div>
                    
                    <div className="relative z-10 space-y-10">
                      <div className="flex items-center justify-between">
                        <span className="text-meta !text-brand-accent uppercase tracking-[0.6em] text-[8px] bg-brand-accent/5 px-4 py-1.5 rounded-full">
                          {item.category}
                        </span>
                        <span className="font-mono text-[#1A1A1A]/30 text-[10px] tracking-widest">{item.date}</span>
                      </div>
                      
                      <div className="space-y-6">
                        <h3 className="text-4xl font-bold tracking-tighter text-[#1A1A1A] group-hover:text-brand-accent transition-colors leading-tight">
                          {item.title}
                        </h3>
                        <p className="text-lg text-[#1A1A1A]/50 leading-relaxed font-light">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Date for Mobile */}
                <div className={cn(
                  "w-full md:w-[calc(50%-4rem)] flex flex-col justify-center",
                  index % 2 === 0 ? "md:items-start" : "md:items-end"
                )}>
                  <span className="text-7xl md:text-[10rem] font-black text-[#1A1A1A]/5 font-display tracking-tighter transition-all group-hover:text-brand-accent/10 italic">
                    {item.date.split(' ')[0]}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
