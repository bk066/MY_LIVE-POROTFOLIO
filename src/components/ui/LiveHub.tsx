import React, { useRef, useMemo } from 'react';
import { motion } from 'motion/react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Line, Sphere } from '@react-three/drei';
import * as THREE from 'three';
import { Activity, Radio, Music } from 'lucide-react';

function SineWave({ color = "#D4A373" }) {
  const points = useMemo(() => {
    const p = [];
    for (let i = 0; i <= 50; i++) {
      p.push(new THREE.Vector3((i / 25 - 1) * 2, 0, 0));
    }
    return p;
  }, []);

  const lineRef = useRef<any>(null);

  useFrame((state) => {
    if (!lineRef.current) return;
    const t = state.clock.getElapsedTime();
    const positions = lineRef.current.geometry.attributes.position.array;
    for (let i = 0; i <= 50; i++) {
      const x = (i / 25 - 1) * 2;
      const y = Math.sin(x * 2 + t * 4) * 0.5 * Math.sin(t * 0.5);
      positions[i * 3 + 1] = y;
    }
    lineRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <Line
      ref={lineRef}
      points={points}
      color={color}
      lineWidth={2}
      transparent
      opacity={0.6}
    />
  );
}

export default function LiveHub() {
  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end gap-4">
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="glass-card p-6 rounded-3xl flex items-center gap-6 min-w-[320px] relative overflow-hidden group"
      >
        <div className="absolute top-0 right-0 p-4 pointer-events-none opacity-5 group-hover:opacity-20 transition-opacity">
          <Activity size={80} />
        </div>

        <div className="w-16 h-16 bg-[#1A1A1A] rounded-2xl flex items-center justify-center overflow-hidden relative">
          <Canvas camera={{ position: [0, 0, 2] }}>
            <SineWave />
          </Canvas>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
        </div>

        <div className="flex-1 space-y-1">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-meta !text-[8px] !tracking-[0.4em]">Live System Activity</span>
          </div>
          
          <div className="space-y-0">
            <h4 className="text-sm font-bold uppercase tracking-tight">Architecting Ecosystems</h4>
            <p className="text-[10px] text-[#1A1A1A]/40 font-mono">Surat, India — 21.2°C</p>
          </div>
        </div>

        <div className="px-4 border-l border-[#1A1A1A]/5 flex flex-col justify-center gap-3">
          <button className="text-[#1A1A1A]/20 hover:text-brand-accent transition-colors">
            <Radio size={14} />
          </button>
          <button className="text-[#1A1A1A]/20 hover:text-brand-accent transition-colors">
            <Music size={14} />
          </button>
        </div>
      </motion.div>
      
      <div className="flex gap-2">
        <div className="px-4 py-2 glass-card rounded-full text-[9px] font-mono tracking-widest uppercase text-[#1A1A1A]/40">
          NODE_SURAT_PRODUCTION
        </div>
        <div className="px-4 py-2 glass-card rounded-full text-[9px] font-mono tracking-widest uppercase text-brand-accent font-bold">
          v4.0.2-STABLE
        </div>
      </div>
    </div>
  );
}
