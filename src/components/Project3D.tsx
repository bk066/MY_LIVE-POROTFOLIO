import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, PerspectiveCamera, RoundedBox, Points, PointMaterial, Line } from '@react-three/drei';
import * as THREE from 'three';

function DataConnections({ count = 8 }) {
  const lines = useMemo(() => {
    return Array.from({ length: count }).map(() => ({
      start: new THREE.Vector3((Math.random() - 0.5) * 3, (Math.random() - 0.5) * 2, 0.1),
      end: new THREE.Vector3((Math.random() - 0.5) * 3, (Math.random() - 0.5) * 2, 0.1),
      speed: 0.5 + Math.random()
    }));
  }, [count]);

  return (
    <group>
      {lines.map((line, i) => (
        <DataLine key={i} {...line} />
      ))}
    </group>
  );
}

function DataLine({ start, end, speed }: { start: THREE.Vector3, end: THREE.Vector3, speed: number }) {
  const lineRef = useRef<any>(null);
  
  useFrame((state) => {
    if (!lineRef.current) return;
    const t = state.clock.getElapsedTime() * speed;
    const mat = lineRef.current.material;
    if (mat && !Array.isArray(mat)) {
      mat.opacity = (Math.sin(t) + 1) * 0.1;
    }
  });

  return (
    <Line
      ref={lineRef}
      points={[start, end]}
      color="#94a3b8"
      lineWidth={0.5}
      transparent
      opacity={0.1}
    />
  );
}

function ProjectParticles({ count = 150 }) {
  const points = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      p[i * 3] = (Math.random() - 0.5) * 4;
      p[i * 3 + 1] = (Math.random() - 0.5) * 3;
      p[i * 3 + 2] = (Math.random() - 0.5) * 1;
    }
    return p;
  }, [count]);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y += 0.001;
  });

  return (
    <Points ref={pointsRef} positions={points} stride={3}>
      <PointMaterial
        transparent
        color="#38bdf8"
        size={0.025}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.3}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function ScanningBeam() {
  const beamRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (!beamRef.current) return;
    const t = state.clock.getElapsedTime();
    beamRef.current.position.y = Math.sin(t * 3) * 1;
    const mat = beamRef.current.material;
    if (mat && !Array.isArray(mat)) {
      (mat as THREE.MeshBasicMaterial).opacity = (Math.sin(t * 15) + 1) * 0.15 + 0.1;
    }
  });

  return (
    <mesh ref={beamRef} position={[0, 0, 0.08]}>
      <planeGeometry args={[3, 0.015]} />
      <meshBasicMaterial color="#0ea5e9" transparent opacity={0.5} blending={THREE.AdditiveBlending} />
    </mesh>
  );
}

function AnimatedProjectBox() {
  const meshRef = useRef<THREE.Group>(null);
  const { mouse } = useThree();
  
  useFrame((state) => {
    if (!meshRef.current) return;
    
    // Decouple rotation from time for less per-frame overhead
    const targetRotationY = mouse.x * 0.4;
    const targetRotationX = -mouse.y * 0.4;
    
    meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetRotationY, 0.08);
    meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, targetRotationX, 0.08);
  });

  const gridGeometry = useMemo(() => {
    const size = 3;
    const divisions = 16;
    return new THREE.GridHelper(size, divisions, 0x1e293b, 0x0f172a);
  }, []);

  return (
    <group ref={meshRef}>
      {/* Holographic Grid Background */}
      <primitive 
        object={gridGeometry} 
        rotation={[Math.PI / 2, 0, 0]} 
        position={[0, 0, 0.05]} 
        scale={[1, 0.66, 1]}
      />

      {/* Main Dashboard Frame */}
      <RoundedBox args={[3.2, 2.2, 0.08]} radius={0.06} smoothness={2}>
        <meshStandardMaterial 
          color="#f8fafc" 
          roughness={0.1} 
          metalness={0.5} 
          transparent 
          opacity={0.3}
        />
      </RoundedBox>

      {/* Screen Surface */}
      <mesh position={[0, 0, 0.05]}>
        <planeGeometry args={[3.05, 2.05]} />
        <meshStandardMaterial 
          color="#020617" 
          metalness={1} 
          roughness={0.2}
          emissive="#082f49"
          emissiveIntensity={0.4}
        />
      </mesh>

      <ScanningBeam />
      <DataConnections count={5} />

      {/* Holographic Side Panels */}
      {[
        { pos: [-1.7, 0.7, -0.2], size: [0.3, 0.6, 0.01], color: "#38bdf8" },
        { pos: [1.7, -0.4, 0.15], size: [0.4, 0.9, 0.01], color: "#94a3b8" }
      ].map((p, i) => (
        <mesh key={i} position={new THREE.Vector3(...p.pos)}>
           <boxGeometry args={[p.size[0], p.size[1], p.size[2]]} />
           <meshStandardMaterial 
            color={p.color}
            transparent 
            opacity={0.05} 
            wireframe={i === 1}
           />
        </mesh>
      ))}

      {/* Small Data Lights */}
      {Array.from({ length: 3 }).map((_, i) => (
        <mesh key={i} position={[-1.3 + i * 0.12, -0.9, 0.07]}>
           <sphereGeometry args={[0.015, 8, 8]} />
           <meshStandardMaterial 
            color={i % 2 === 0 ? "#ef4444" : "#22c55e"} 
            emissive={i % 2 === 0 ? "#ef4444" : "#22c55e"} 
            emissiveIntensity={1.5} 
           />
        </mesh>
      ))}

      <ProjectParticles count={120} />
    </group>
  );
}

export function ProjectVisualizer() {
  return (
    <div className="w-full h-full min-h-[300px]">
      <Canvas shadows dpr={[1, 1.5]}>
        <PerspectiveCamera makeDefault position={[0, 0, 4.5]} fov={38} />
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={1} />
        <spotLight position={[0, 5, 5]} angle={0.3} penumbra={1} intensity={1.5} />
        
        <Float speed={2.5} rotationIntensity={0.15} floatIntensity={0.35}>
          <AnimatedProjectBox />
        </Float>
      </Canvas>
    </div>
  );
}
