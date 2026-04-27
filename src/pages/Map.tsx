import React, { useRef, useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Float, MeshDistortMaterial, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import { MapPin, ArrowRight, Github, ExternalLink } from 'lucide-react';
import { cn } from '../lib/utils';

const locations = [
  { name: 'Surat', pos: [2, 0, 1] as [number, number, number], desc: 'Production Hub & Digital Architecture Node.', activity: '98% Node Load' },
  { name: 'Ratangarh', pos: [-1, 0, -2] as [number, number, number], desc: 'Foundation & Strategic Ground Zero.', activity: 'Stable' },
  { name: 'Ganganagar', pos: [0, 0, 3] as [number, number, number], desc: 'Operational Expansion Node.', activity: 'Connected' },
  { name: 'Churu', pos: [-3, 0, 0] as [number, number, number], desc: 'Historical Continuity & Logic Sync.', activity: 'Synced' },
];

function CityNode({ position, name, desc, activity, active, onClick }: any) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    meshRef.current.position.y = active ? Math.sin(t * 2) * 0.2 : 0;
  });

  return (
    <group position={position} onClick={onClick}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh ref={meshRef}>
          <boxGeometry args={[0.5, active ? 1.5 : 0.5, 0.5]} />
          <meshStandardMaterial 
            color={active ? "#D4A373" : "#1A1A1A"} 
            emissive={active ? "#D4A373" : "#000000"}
            emissiveIntensity={0.5}
            roughness={0.1}
            metalness={0.8}
          />
        </mesh>
      </Float>
      
      {active && (
        <group position={[0, 2, 0]}>
          <Text
            fontSize={0.3}
            color="#1A1A1A"
            anchorX="center"
            anchorY="middle"
          >
            {name}
          </Text>
        </group>
      )}

      {/* Connection Beam */}
      <mesh position={[0, -0.5, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 10]} />
        <meshBasicMaterial color="#1A1A1A" transparent opacity={0.05} />
      </mesh>
    </group>
  );
}

function GroundGrid() {
  return (
    <gridHelper args={[20, 20, "#1A1A1A", "#1A1A1A"]} position={[0, -1, 0]}>
       <meshBasicMaterial opacity={0.05} transparent />
    </gridHelper>
  );
}

export default function MapPage() {
  const [activeNode, setActiveNode] = useState<any>(null);

  return (
    <div className="min-h-screen pt-48 pb-24 px-6 md:px-12 bg-[#F9F9F7] relative overflow-hidden">
      <div className="max-w-[1800px] mx-auto relative z-10 h-full flex flex-col lg:flex-row gap-24">
        <div className="lg:w-1/3 space-y-12">
          <header className="space-y-8">
            <span className="text-meta">Module 04 / The Map (git-city)</span>
            <h1 className="text-display text-7xl md:text-8xl leading-tight">Spatial <br /> Intelligence.</h1>
            <p className="text-xl text-[#1A1A1A]/40 font-light leading-relaxed">
              Visualizing the professional topography of Bharat Kumar Jalan. An interactive WebGL projection of activity nodes mapping GitHub history and movement.
            </p>
          </header>

          <div className="space-y-8">
            <div className="flex items-center gap-4 text-brand-accent">
               <MapPin size={20} />
               <span className="font-mono text-xs font-black tracking-widest uppercase">Global Activity Feed</span>
            </div>
            
            <div className="space-y-4">
               {locations.map(loc => (
                 <motion.div 
                   key={loc.name}
                   onClick={() => setActiveNode(loc)}
                   className={cn(
                     "p-8 glass-card rounded-3xl cursor-pointer transition-all duration-500",
                     activeNode?.name === loc.name ? "border-brand-accent bg-white shadow-xl translate-x-4" : "opacity-40 grayscale hover:grayscale-0 hover:opacity-100"
                   )}
                 >
                    <div className="flex justify-between items-center mb-4">
                       <h3 className="text-xl font-bold">{loc.name}</h3>
                       <span className="text-[9px] font-mono font-bold tracking-widest text-brand-accent uppercase">{loc.activity}</span>
                    </div>
                    <p className="text-xs text-[#1A1A1A]/60 leading-relaxed font-light">{loc.desc}</p>
                 </motion.div>
               ))}
            </div>
            
            <button className="w-full py-6 glass-card rounded-3xl flex items-center justify-center gap-4 text-xs font-bold uppercase tracking-widest hover:bg-[#1A1A1A] hover:text-white transition-all">
               Deep Sync GitHub <Github size={16} />
            </button>
          </div>
        </div>

        <div className="flex-1 min-h-[600px] lg:min-h-0 relative glass-card rounded-[4rem] overflow-hidden border-0">
           <Canvas shadows camera={{ position: [5, 5, 5], fov: 45 }}>
              <PerspectiveCamera makeDefault position={[10, 10, 10]} />
              <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2.1} minPolarAngle={Math.PI / 4} />
              
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} intensity={1} castShadow />
              <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} />
              
              <GroundGrid />
              
              {locations.map((loc) => (
                <CityNode
                  key={loc.name}
                  position={loc.pos}
                  name={loc.name}
                  desc={loc.desc}
                  activity={loc.activity}
                  active={activeNode?.name === loc.name}
                  onClick={() => setActiveNode(loc)}
                />
              ))}

              <fog attach="fog" args={["#F9F9F7", 5, 25]} />
           </Canvas>

           <div className="absolute inset-0 pointer-events-none p-12 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                 <div className="font-mono text-[9px] opacity-20 uppercase tracking-[0.4em]">
                    Coordinate_System / 0xF4
                 </div>
                 <div className="text-[9px] font-bold tracking-widest text-[#1A1A1A]/40 uppercase flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-brand-accent animate-ping" />
                    Live Projection
                 </div>
              </div>
              
              <div className="flex justify-between items-end">
                 <div className="bg-white/80 backdrop-blur-md p-8 rounded-3xl border border-black/5 max-w-xs shadow-2xl">
                    <p className="text-[10px] font-bold text-brand-accent uppercase mb-2">Node Intelligence</p>
                    <h4 className="text-lg font-black mb-1">{activeNode?.name || 'Selection Pending...'}</h4>
                    <p className="text-[10px] opacity-40 font-mono leading-relaxed">{activeNode?.desc || 'Select an activity node to reveal spatial metadata.'}</p>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
