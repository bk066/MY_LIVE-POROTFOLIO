import React, { Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';
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
                    className="hero-type italic text-brand-accent pr-4" 
                    tag="h1"
                  />
                </div>
              </div>
            </motion.div>

            <div className="flex flex-col md:flex-row gap-12 items-start mt-20">
               <Link to="/map">
                 <motion.button 
                   whileHover={{ scale: 1.05 }}
                   whileTap={{ scale: 0.95 }}
                   className="px-12 py-6 bg-brand-accent text-brand-primary rounded-full font-bold text-xs uppercase tracking-[0.3em] flex items-center gap-6 group hover:bg-[#1A1A1A] hover:text-white transition-all shadow-[0_20px_40px_-15px_rgba(212,163,115,0.3)]"
                 >
                   Enter the Ecosystem <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                 </motion.button>
               </Link>
               
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

        {/* DRIP Production Section - Rewritten for High Impact */}
        <section className="py-60 px-6 md:px-12 bg-[#0A0A0A] relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
             <div className="absolute top-[-10%] left-[-10%] w-[120%] h-[120%] architect-grid opacity-5 rotate-3" />
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-brand-accent/5 rounded-full blur-[200px]" />
          </div>
          
          <div className="max-w-[1800px] mx-auto relative z-10">
            <div className="flex flex-col gap-24 font-display">
              {/* Massive Header */}
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className="text-meta !text-brand-accent mb-8 inline-block tracking-[0.5em]">SYSTEM_DRIP // PRODUCTION_LAB</span>
                  <h2 className="text-white text-[12vw] md:text-[15rem] leading-[0.75] font-black italic tracking-tighter uppercase whitespace-nowrap overflow-hidden">
                    STAY <span className="text-brand-accent">AHEAD</span>
                  </h2>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="flex justify-end"
                >
                  <h2 className="text-white/20 text-[12vw] md:text-[15rem] leading-[0.75] font-black italic tracking-tighter uppercase">
                    STAY <span className="outline-text-white opacity-40">DRIP.</span>
                  </h2>
                </motion.div>
              </div>

              {/* Grid Content */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-32 items-start mt-20">
                <div className="lg:col-span-5 space-y-16">
                  <div className="space-y-8">
                    <p className="text-3xl md:text-5xl text-white font-light leading-snug">
                      We don't just host events. We architect <span className="font-bold italic">cultural energy.</span>
                    </p>
                    <p className="text-xl text-white/40 leading-relaxed max-w-xl">
                      DRIP is a high-fidelity entertainment ecosystem specializing in elite nightlife, immersive festivals, and massive music experiences. We bridge the gap between digital precision and raw human energy.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-8 pt-16 border-t border-white/10">
                    {[
                      { label: "PROTOCOL", val: "Elite Nightlife" },
                      { label: "SCALE", val: "Massive Festivals" },
                      { label: "DNA", val: "High Fidelity" },
                      { label: "STATUS", val: "Active System" }
                    ].map((stat, i) => (
                      <div key={i} className="space-y-2">
                        <p className="font-mono text-[9px] text-brand-accent uppercase tracking-widest">{stat.label}</p>
                        <p className="text-white text-lg font-bold">{stat.val}</p>
                      </div>
                    ))}
                  </div>

                  <Link to="/contact" className="w-full md:w-auto">
                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full md:w-auto px-16 py-8 bg-brand-accent text-brand-primary font-black uppercase italic tracking-widest text-sm hover:bg-white transition-colors"
                    >
                      View Project Dossier
                    </motion.button>
                  </Link>
                </div>

                <div className="lg:col-span-7 relative group">
                  <div className="absolute -inset-4 bg-brand-accent/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                  <div className="relative aspect-[16/10] overflow-hidden rounded-sm grayscale group-hover:grayscale-0 transition-all duration-1000 border border-white/10">
                    <img 
                      src="https://images.unsplash.com/photo-1514525253361-bee8718a74a2?auto=format&fit=crop&q=80&w=1200" 
                      alt="DRIP Event Environment" 
                      className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-[2s]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80" />
                    
                    {/* Floating HUD Elements */}
                    <div className="absolute top-8 left-8 flex gap-4">
                      <div className="px-4 py-2 bg-brand-accent text-brand-primary font-mono text-[9px] font-bold">LIVE_ENERGY_METRIC: 98%</div>
                      <div className="px-4 py-2 bg-white/10 backdrop-blur-md text-white font-mono text-[9px] font-bold">ATMOSPHERE: CRITICAL</div>
                    </div>

                    <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                      <div className="space-y-2">
                        <h4 className="text-3xl text-white font-black italic uppercase tracking-tighter">Event Prototype_04</h4>
                        <p className="text-white/40 font-mono text-[10px] tracking-widest">SURAT // 2024</p>
                      </div>
                      <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white">
                         <PlayCircle size={20} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

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

                    <Link to="/contact">
                      <button className="w-full py-6 bg-white text-[#1A1A1A] rounded-3xl font-bold text-xs uppercase tracking-widest hover:bg-brand-accent transition-colors flex items-center justify-center gap-4">
                         Start Project <ArrowRight size={14} />
                      </button>
                    </Link>
                    
                    <div className="absolute inset-0 bg-brand-accent/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                 </motion.div>
              </div>
           </div>
        </section>
      </div>
    </div>
  );
}
