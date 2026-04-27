import React, { Suspense, lazy } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'motion/react';
import { ArrowRight, ChevronDown, Monitor, Package, PlayCircle, GraduationCap, Sparkles } from 'lucide-react';
import { KineticText } from '../components/AnimatedText';
import ThinkingProcess from '../components/ThinkingProcess';
import ThreeSkeleton from '../components/canvas/ThreeSkeleton';

// Lazy load 3D scene to avoid blocking LCP
const Scene3D = lazy(() => import('../components/Scene3D'));

export default function Home() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for cursor reactivity
  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Parallax transforms - subtly moving in opposition to cursor
  const x = useTransform(smoothX, [-1000, 1000], [25, -25]);
  const y = useTransform(smoothY, [-1000, 1000], [25, -25]);
  const rotateX = useTransform(smoothY, [-1000, 1000], [8, -8]);
  const rotateY = useTransform(smoothX, [-1000, 1000], [-8, 8]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    mouseX.set(clientX - centerX);
    mouseY.set(clientY - centerY);
  };

  return (
    <div className="relative min-h-screen selection:bg-brand-accent selection:text-white" onMouseMove={handleMouseMove}>
      {/* 3D Background Layer */}
      <div className="canvas-container noise-filter opacity-30 pointer-events-none">
        <Suspense fallback={<ThreeSkeleton />}>
          <Scene3D />
        </Suspense>
      </div>

      <div className="relative z-10">
        {/* Sticky Header Hero */}
        <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 relative overflow-hidden">
          <div className="max-w-[1800px] mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              style={{ x, y, rotateX, rotateY, perspective: 2000 }}
              className="mb-12"
            >
              <div className="flex items-center gap-6 mb-8">
                <span className="text-meta">Introduction / v4.0.2</span>
                <div className="h-[1px] w-24 bg-brand-accent/30" />
                <span className="text-[10px] font-mono opacity-30">EST. 1990s</span>
              </div>
              
              <div className="perspective-container">
                <KineticText 
                  text="Bharat Kumar" 
                  className="hero-type text-[#1A1A1A]" 
                  tag="h1"
                />
                <div className="flex flex-col md:flex-row md:items-end gap-8">
                  <KineticText 
                    text="Jalan." 
                    className="hero-type italic text-brand-accent" 
                    tag="h1"
                  />
                  <div className="pb-4 md:pb-12 max-w-sm">
                    <p className="text-xl font-light leading-snug text-[#1A1A1A]/60">
                      Architecting high-performance digital ecosystems through <span className="text-[#1A1A1A] font-medium">operational logic</span> and visual fidelity.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="flex flex-col md:flex-row gap-12 items-start mt-20">
               <motion.button 
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
                 className="px-12 py-6 bg-[#1A1A1A] text-white rounded-full font-bold text-xs uppercase tracking-[0.3em] flex items-center gap-6 group hover:bg-brand-accent transition-colors"
               >
                 View Architecture <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
               </motion.button>
               
               <div className="flex items-center gap-12 font-mono text-[9px] uppercase tracking-widest text-[#1A1A1A]/30">
                  <div className="flex flex-col gap-2">
                    <span className="font-bold text-brand-accent">Currently</span>
                    <span>Building @ Surat_Node</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="font-bold text-brand-accent">Identity</span>
                    <span>Full-Stack Architect</span>
                  </div>
               </div>
            </div>
          </div>

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-20"
          >
            <ChevronDown size={24} />
          </motion.div>
        </section>

        {/* Identity Grid */}
        <section className="py-60 px-6 md:px-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-32 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="space-y-12"
              >
                <span className="text-meta">01 / Multidimensionality</span>
                <h2 className="text-display text-5xl md:text-8xl leading-tight">Transitioning from <span className="italic font-light opacity-40">B.Com Logic</span> to Digital Precision.</h2>
                <p className="text-2xl text-[#1A1A1A]/50 font-light leading-relaxed">
                  My background in commerce provides the structural foundation for how I build software. It's not just about the code; it's about the <span className="text-[#1A1A1A] font-medium">business architecture</span> that powers it.
                </p>
              </motion.div>
              
              <motion.div 
                variants={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.15,
                      delayChildren: 0.2
                    }
                  }
                }}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-2 gap-4"
              >
                {[
                  { icon: Monitor, label: 'Full-Stack', desc: 'Next.js / Prisma / SQL' },
                  { icon: Package, label: 'Packaging', desc: 'B2B Logistics / Design' },
                  { icon: GraduationCap, label: 'Tutor', desc: 'Accountancy / Economics' },
                  { icon: PlayCircle, label: 'Creator', desc: 'Visual Storytelling' }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={{
                      hidden: { opacity: 0, scale: 0.85, y: 40, rotateX: 15 },
                      show: { opacity: 1, scale: 1, y: 0, rotateX: 0 }
                    }}
                    transition={{ 
                      duration: 0.8, 
                      ease: [0.22, 1, 0.36, 1],
                      scale: { type: "spring", stiffness: 100, damping: 20 }
                    }}
                    whileHover={{ 
                      y: -12, 
                      scale: 1.02, 
                      backgroundColor: "rgba(255, 255, 255, 0.8)",
                      borderColor: "rgba(214, 163, 115, 0.3)",
                      transition: { duration: 0.4 } 
                    }}
                    className="glass-card p-10 rounded-[2.5rem] space-y-6 aspect-square flex flex-col justify-center transition-all hover:shadow-[0_40px_80px_-20px_rgba(212,163,115,0.15)] group relative overflow-hidden backdrop-saturate-150"
                  >
                    <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-5 scale-150 group-hover:scale-100 transition-all duration-700 pointer-events-none">
                       <item.icon size={120} />
                    </div>
                    <item.icon size={32} className="text-brand-accent group-hover:scale-110 transition-transform duration-500" />
                    <div className="space-y-2 relative z-10">
                      <h3 className="font-mono text-[10px] uppercase tracking-widest font-black opacity-40 group-hover:opacity-60 transition-opacity">{item.label}</h3>
                      <p className="text-xl font-display italic font-light leading-tight">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        <ThinkingProcess />

        {/* Hero Service Section */}
        <section className="py-40 bg-[#1A1A1A] text-white relative overflow-hidden">
           <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-accent/50 to-transparent" />
           
           <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
              <div className="lg:col-span-12 mb-12">
                 <span className="text-meta !text-brand-accent">Exclusive Offering</span>
              </div>
              
              <div className="lg:col-span-7 space-y-12">
                 <h2 className="text-display text-5xl md:text-8xl italic">Premium Portfolio <br /> architecture.</h2>
                 <p className="text-xl text-white/50 font-light leading-relaxed max-w-xl">
                    High-ROI digital assets engineered with WebGL, advanced GSAP interactions, and aggressive SEO infrastructure. Handcrafted for founders and visionaries.
                 </p>
                 
                 <div className="flex flex-wrap gap-4">
                    {['WebGL Rendering', 'GSAP Physics', 'Awwwards-Level UI', 'Technical SEO'].map(tech => (
                      <span key={tech} className="px-6 py-2 rounded-full border border-white/10 text-[10px] font-mono tracking-widest uppercase opacity-40 hover:opacity-100 hover:border-brand-accent cursor-default transition-all">{tech}</span>
                    ))}
                 </div>
              </div>

              <div className="lg:col-span-5">
                 <motion.div 
                   whileHover={{ scale: 1.02 }}
                   className="glass-card bg-white/5 p-12 rounded-[4rem] border-white/10 relative overflow-hidden group border-2 border-brand-accent/20"
                 >
                    <div className="flex justify-between items-start mb-12">
                       <Sparkles size={40} className="text-brand-accent" />
                       <div className="text-[9px] font-mono p-2 bg-brand-accent text-brand-primary rounded-lg font-bold">LIMITED SLOTS</div>
                    </div>
                    
                    <h3 className="text-3xl font-bold mb-8">Commission a custom ecosystem.</h3>
                    
                    <ul className="space-y-4 mb-12 opacity-60 font-medium">
                       <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-brand-accent" /> Custom 3D Asset Development</li>
                       <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-brand-accent" /> Full-Stack Integration</li>
                       <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-brand-accent" /> Global SEO Optimization</li>
                    </ul>

                    <button className="w-full py-6 bg-white text-[#1A1A1A] rounded-3xl font-bold text-xs uppercase tracking-widest hover:bg-brand-accent transition-colors flex items-center justify-center gap-4">
                       Start Project <ArrowRight size={14} />
                    </button>
                    
                    <div className="absolute inset-0 bg-brand-accent/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                 </motion.div>
              </div>
           </div>
        </section>
      </div>
    </div>
  );
}
