"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { Suspense, useMemo, useRef } from "react";
import type { ReactElement } from "react";
import * as THREE from "three";

type SkillType =
  | "next"
  | "react"
  | "typescript"
  | "tailwind"
  | "node"
  | "api"
  | "conversion";

const skillConfig: Record<
  SkillType,
  {
    color: string;
    glow: string;
    geometry: "box" | "sphere" | "torus" | "octa";
    ring?: boolean;
    satellite?: boolean;
  }
> = {
  next: { color: "#0b0f1d", glow: "#7c5cff", geometry: "box", ring: true },
  react: { color: "#3bd3ff", glow: "#7c5cff", geometry: "sphere", satellite: true },
  typescript: { color: "#2f74ff", glow: "#3bd3ff", geometry: "box" },
  tailwind: { color: "#00c6ff", glow: "#7c5cff", geometry: "torus", ring: true },
  node: { color: "#36c36c", glow: "#7c5cff", geometry: "octa", satellite: true },
  api: { color: "#7c5cff", glow: "#3bd3ff", geometry: "torus" },
  conversion: { color: "#5b7cff", glow: "#7c5cff", geometry: "sphere", ring: true },
};

function IconMesh({ type }: { type: SkillType }) {
  const group = useRef<THREE.Group>(null!);
  const { color, glow, geometry, ring, satellite } = skillConfig[type];

  const material = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color,
        metalness: 0.45,
        roughness: 0.2,
        emissive: new THREE.Color(color),
        emissiveIntensity: 0.25,
      }),
    [color]
  );

  const glowMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: glow,
        metalness: 0.2,
        roughness: 0.1,
        emissive: new THREE.Color(glow),
        emissiveIntensity: 0.5,
      }),
    [glow]
  );

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    group.current.rotation.y = t * 0.7;
    group.current.rotation.x = t * 0.4;
    if (satellite) {
      group.current.children.forEach((child, index) => {
        if (child.name === "satellite") {
          child.position.x = Math.cos(t * 1.4 + index) * 0.9;
          child.position.z = Math.sin(t * 1.4 + index) * 0.9;
        }
      });
    }
  });

  let geometryNode: ReactElement;
  switch (geometry) {
    case "sphere":
      geometryNode = <sphereGeometry args={[0.55, 32, 32]} />;
      break;
    case "torus":
      geometryNode = <torusGeometry args={[0.45, 0.18, 24, 60]} />;
      break;
    case "octa":
      geometryNode = <octahedronGeometry args={[0.55, 0]} />;
      break;
    default:
      geometryNode = <boxGeometry args={[0.8, 0.8, 0.8]} />;
  }

  return (
    <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.6}>
      <group ref={group}>
        <mesh material={material}>{geometryNode}</mesh>
        {ring && (
          <mesh material={glowMaterial} rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[0.7, 0.06, 20, 60]} />
          </mesh>
        )}
        {satellite && (
          <mesh name="satellite" material={glowMaterial}>
            <sphereGeometry args={[0.12, 16, 16]} />
          </mesh>
        )}
      </group>
    </Float>
  );
}

export default function SkillIcon3D({ type }: { type: SkillType }) {
  return (
    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-black/5">
      <Canvas camera={{ position: [0, 0, 2.6], fov: 45 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[2, 2, 2]} intensity={0.9} />
        <pointLight position={[-2, -1, 2]} intensity={0.6} color="#7c5cff" />
        <Suspense fallback={null}>
          <IconMesh type={type} />
        </Suspense>
      </Canvas>
    </div>
  );
}
