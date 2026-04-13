"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function IconCore() {
  const mesh = useRef<THREE.Mesh>(null!);
  const material = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#0b0f1d",
        metalness: 0.7,
        roughness: 0.25,
        emissive: new THREE.Color("#5b7cff"),
        emissiveIntensity: 0.35,
      }),
    []
  );

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    mesh.current.rotation.y = t * 0.8;
    mesh.current.rotation.x = t * 0.5;
  });

  return (
    <Float speed={1.4} rotationIntensity={0.8} floatIntensity={0.8}>
      <mesh ref={mesh} material={material}>
        <icosahedronGeometry args={[1, 0]} />
      </mesh>
    </Float>
  );
}

export default function AboutIcon3D() {
  return (
    <div className="relative h-40 w-full overflow-hidden rounded-3xl border border-white/10 bg-base-900/70">
      <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-accent-500/40 blur-2xl" />
      <Canvas camera={{ position: [0, 0.2, 4], fov: 45 }}>
        <color attach="background" args={["#0b0f1d"]} />
        <ambientLight intensity={0.4} />
        <pointLight position={[3, 3, 3]} intensity={1.3} color="#7c5cff" />
        <Sparkles count={30} size={1.2} speed={0.5} color="#3bd3ff" />
        <IconCore />
      </Canvas>
    </div>
  );
}
