"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Environment, Sparkles } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function DeviceCore() {
  const mesh = useRef<THREE.Mesh>(null!);
  const material = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#0b0f1d",
        metalness: 0.6,
        roughness: 0.2,
        emissive: new THREE.Color("#5b7cff"),
        emissiveIntensity: 0.2,
      }),
    []
  );

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    mesh.current.rotation.y = t * 0.25;
    mesh.current.rotation.x = Math.sin(t * 0.4) * 0.1;
  });

  return (
    <Float speed={1.2} rotationIntensity={0.6} floatIntensity={0.8}>
      <mesh ref={mesh} material={material} castShadow>
        <boxGeometry args={[1.6, 3.2, 0.2]} />
      </mesh>
      <mesh position={[0, 0, 0.12]}>
        <planeGeometry args={[1.4, 2.8]} />
        <meshStandardMaterial color="#111827" emissive="#111827" />
      </mesh>
    </Float>
  );
}

function CameraRig() {
  const { camera, mouse } = useThree();

  useFrame(() => {
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, mouse.x * 0.4, 0.05);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, mouse.y * 0.25 + 0.4, 0.05);
    camera.lookAt(0, 0, 0);
  });

  return null;
}

export default function CommerceHeroScene() {
  return (
    <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 1.2, 5], fov: 50 }} className="h-full w-full">
      <color attach="background" args={["#05060a"]} />
      <ambientLight intensity={0.3} />
      <directionalLight position={[4, 6, 2]} intensity={1.1} castShadow />
      <pointLight position={[-4, 2, 3]} intensity={1.4} color="#7c5cff" />
      <CameraRig />
      <Sparkles count={50} scale={[6, 6, 6]} size={1.1} speed={0.7} color="#3bd3ff" />
      <DeviceCore />
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]} receiveShadow>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#07080b" />
      </mesh>
      <Environment preset="city" />
    </Canvas>
  );
}
