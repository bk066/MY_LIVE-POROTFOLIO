import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, MeshWobbleMaterial, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function ArchitecturalCore() {
  const meshRef = useRef<THREE.Group>(null);
  const innerRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current || !innerRef.current) return;
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.y = t * 0.1;
    innerRef.current.rotation.x = t * 0.4;
    innerRef.current.rotation.z = t * 0.2;
  });

  return (
    <group ref={meshRef}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        {/* Distorted Glass Shell */}
        <Sphere args={[1, 64, 64]} scale={2.4}>
          <MeshDistortMaterial
            color="#D4A373"
            speed={1.5}
            distort={0.2}
            roughness={0.1}
            metalness={0.2}
            transparent
            opacity={0.05}
          />
        </Sphere>
        
        {/* Core Geometry - Wireframe Icosahedron */}
        <mesh ref={innerRef} scale={1.2}>
          <icosahedronGeometry args={[1, 1]} />
          <meshStandardMaterial 
            color="#1A1A1A" 
            wireframe 
            transparent 
            opacity={0.1} 
            emissive="#D4A373"
            emissiveIntensity={0.2}
          />
        </mesh>

        <mesh scale={0.4}>
           <octahedronGeometry args={[1, 0]} />
           <meshStandardMaterial color="#1A1A1A" />
        </mesh>
      </Float>
    </group>
  );
}

function Particles({ count = 2000 }) {
  const points = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      p[i * 3] = (Math.random() - 0.5) * 15;
      p[i * 3 + 1] = (Math.random() - 0.5) * 15;
      p[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    return p;
  }, [count]);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.02;
    pointsRef.current.rotation.x = state.clock.getElapsedTime() * 0.01;
  });

  return (
    <Points ref={pointsRef} positions={points} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#D4A373"
        size={0.015}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.15}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function ResponsiveCamera() {
  const { camera, mouse } = useThree();
  useFrame(() => {
    camera.position.x += (mouse.x * 0.5 - camera.position.x) * 0.05;
    camera.position.y += (mouse.y * 0.5 - camera.position.y) * 0.05;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

function FloatingFragment({ position, color, scale }: { position: [number, number, number], color: string, scale: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += 0.005;
    meshRef.current.rotation.y += 0.006;
  });

  return (
    <Float speed={2} rotationIntensity={2} floatIntensity={1}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <boxGeometry args={[1, 1, 0.02]} />
        <meshStandardMaterial
          color={color}
          roughness={0.1}
          metalness={0.5}
          transparent
          opacity={0.1}
        />
      </mesh>
    </Float>
  );
}

export default function Scene3D() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] opacity-60">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ResponsiveCamera />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#e2e8f0" />
        
        <ArchitecturalCore />
        <Particles count={3000} />
        
        <FloatingFragment position={[-4, 3, -4]} color="#94a3b8" scale={0.8} />
        <FloatingFragment position={[6, -2, -6]} color="#cbd5e1" scale={0.5} />
        <FloatingFragment position={[-5, -4, -2]} color="#f1f5f9" scale={1.2} />
        <FloatingFragment position={[4, 4, -8]} color="#94a3b8" scale={0.6} />
      </Canvas>
    </div>
  );
}
