import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const logs = [
  'INITIALIZING SYSTEM ARCHITECTURE',
  'ESTABLISHING GL_CONTEXT',
  'SYNCING SPATIAL TOPOGRAPHY',
  'LOADING ASSET BUNDLE v4.0.2',
  'MOUNTING COMPONENT MODULES',
  'VERIFYING NODE INTEGRITY',
  'AUTHENTICATING OPERATIONAL LOGIC',
  'CALIBRATING KINETIC RENDERING',
  'SYSTEM READY. DEPLOYING INTERFACE.'
];

function TechnicalGrid() {
  return (
    <div className="absolute inset-0 z-[-1] opacity-[0.03] pointer-events-none">
       <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(#1A1A1A 1px, transparent 1px), linear-gradient(90deg, #1A1A1A 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
       <div className="absolute inset-0 bg-gradient-radial from-transparent to-[#F9F9F7]" />
    </div>
  );
}

function MorphingCore() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.x = t * 0.2;
    meshRef.current.rotation.y = t * 0.3;
    meshRef.current.scale.setScalar(1 + Math.sin(t * 2) * 0.05);
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1, 12]} />
        <MeshDistortMaterial
          color="#D4A373"
          speed={4}
          distort={0.4}
          radius={1}
          metalness={0.8}
          roughness={0.2}
          emissive="#D4A373"
          emissiveIntensity={0.2}
        />
      </mesh>
    </Float>
  );
}

export default function LoadingSequence({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [currentLog, setCurrentLog] = useState(0);
  const [exit, setExit] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setExit(true), 800);
          return 100;
        }
        
        // Dynamic loading speed to feel more "real"
        const increment = Math.random() > 0.8 ? 0.5 : 2.5;
        return Math.min(prev + increment, 100);
      });
    }, 40);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Sync logs with progress
    const logIndex = Math.floor((progress / 100) * logs.length);
    if (logIndex < logs.length) {
      setCurrentLog(logIndex);
    }
  }, [progress]);

  useEffect(() => {
    if (exit) {
      const timer = setTimeout(onComplete, 1200);
      return () => clearTimeout(timer);
    }
  }, [exit, onComplete]);

  return (
    <AnimatePresence>
      {!exit && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            y: -20,
            scale: 0.98,
            filter: 'blur(20px)',
            transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
          }}
          className="fixed inset-0 z-[1000] bg-[#F9F9F7] flex flex-col items-center justify-center overflow-hidden"
        >
          <TechnicalGrid />

          {/* Floating ID Tag */}
          <div className="absolute top-12 left-12 flex items-center gap-4">
             <div className="w-8 h-8 rounded-full border border-[#1A1A1A]/10 flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-brand-accent rounded-full animate-pulse" />
             </div>
             <div className="space-y-1">
                <p className="font-mono text-[9px] font-black uppercase tracking-widest text-[#1A1A1A]">BHARAT KUMAR JALAN</p>
                <p className="font-mono text-[8px] opacity-20 uppercase">Core_Module_v4.0.2</p>
             </div>
          </div>

          <div className="w-full h-[500px] relative">
            <Canvas camera={{ position: [0, 0, 3] }}>
              <ambientLight intensity={0.4} />
              <pointLight position={[10, 10, 10]} intensity={1} color="#D4A373" />
              <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={0.8} />
              <MorphingCore />
            </Canvas>
          </div>

          <div className="mt-8 text-center space-y-8 max-w-md px-12">
            <div className="space-y-3">
               <motion.div
                 key={logs[currentLog]}
                 initial={{ opacity: 0, y: 10 }}
                 animate={{ opacity: 1, y: 0 }}
                 className="font-mono text-[9px] tracking-widest font-bold uppercase text-brand-accent"
               >
                 {logs[currentLog]}
               </motion.div>
               
               <div className="w-64 h-[2px] bg-[#1A1A1A]/5 relative overflow-hidden mx-auto rounded-full">
                 <motion.div
                   className="absolute inset-y-0 left-0 bg-[#1A1A1A] shadow-[0_0_10px_rgba(212,163,115,0.5)]"
                   initial={{ width: 0 }}
                   animate={{ width: `${progress}%` }}
                   transition={{ duration: 0.1 }}
                 />
               </div>
            </div>
            
            <div className="flex justify-between items-end">
               <div className="text-left font-mono space-y-1">
                  <p className="text-[8px] opacity-20">LOAD_STATUS</p>
                  <p className="text-xl font-display font-black italic tracking-tighter">
                    {Math.round(progress).toString().padStart(3, '0')}
                  </p>
               </div>
               
               <div className="text-right font-mono space-y-1">
                  <p className="text-[8px] opacity-20">BUILD_ID</p>
                  <p className="text-[10px] font-bold">0xFD_28_ARCH</p>
               </div>
            </div>
          </div>

          {/* Bottom Telemetry */}
          <div className="absolute bottom-12 left-12 right-12 flex justify-between items-end border-t border-[#1A1A1A]/5 pt-8 font-mono text-[8px] tracking-[0.2em] text-[#1A1A1A]/30">
            <div className="space-y-2">
               <p>ARCHITECTURE: MONOLITHIC_HYBRID</p>
               <p>VISUAL_ENGINE: R3F_GSAP_MOTION</p>
            </div>
            <div className="text-right space-y-2">
               <p>OPERATIONAL_READY: TRUE</p>
               <p>DEPLO_SEC_LAYER: ACTIVE</p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
