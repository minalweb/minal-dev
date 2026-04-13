"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Environment, Sparkles, useGLTF } from "@react-three/drei";
import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

function FloatingShape({
  color,
  position,
  geometry = "torus",
}: {
  color: string;
  position: [number, number, number];
  geometry?: "torus" | "sphere" | "icosa";
}) {
  const mesh = useRef<THREE.Mesh>(null!);
  const mat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color,
        metalness: 0.6,
        roughness: 0.2,
        emissive: new THREE.Color(color),
        emissiveIntensity: 0.25,
      }),
    [color]
  );

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    mesh.current.rotation.x = t * 0.25;
    mesh.current.rotation.y = t * 0.35;
  });

  const geometryNode =
    geometry === "sphere" ? (
      <sphereGeometry args={[1.1, 32, 32]} />
    ) : geometry === "icosa" ? (
      <icosahedronGeometry args={[1.05, 0]} />
    ) : (
      <torusGeometry args={[1, 0.35, 24, 60]} />
    );

  return (
    <Float speed={1.6} rotationIntensity={0.8} floatIntensity={0.6}>
      <mesh ref={mesh} position={position} material={mat} castShadow receiveShadow>
        {geometryNode}
      </mesh>
    </Float>
  );
}

function HeroModel() {
  // DRACO decoder files should be in /public/draco
  const { scene } = useGLTF("/models/hero.glb", "/draco/");
  return <primitive object={scene} scale={1.2} position={[0, -0.5, 0]} />;
}

function CameraRig() {
  const { camera, mouse } = useThree();

  useFrame(() => {
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, mouse.x * 0.6, 0.05);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, mouse.y * 0.35 + 0.6, 0.05);
    camera.lookAt(0, 0, 0);
  });

  return null;
}

export default function HeroScene() {
  const [hasModel, setHasModel] = useState(false);

  useEffect(() => {
    let active = true;
    fetch("/models/hero.glb", { method: "HEAD" })
      .then((response) => {
        if (active && response.ok) {
          setHasModel(true);
        }
      })
      .catch(() => {
        if (active) {
          setHasModel(false);
        }
      });

    return () => {
      active = false;
    };
  }, []);

  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 1.4, 6], fov: 50 }}
      className="h-full w-full"
    >
      <color attach="background" args={["#05060a"]} />
      <ambientLight intensity={0.3} />
      <directionalLight
        position={[5, 6, 4]}
        intensity={1.2}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <pointLight position={[-4, -2, 4]} intensity={1.4} color="#5b7cff" />
      <CameraRig />
      <Sparkles count={60} scale={[8, 6, 6]} size={1.2} speed={0.6} color="#7c5cff" />

      {hasModel ? (
        <Suspense
          fallback={<FloatingShape color="#7c5cff" position={[0, 0.2, 0]} geometry="icosa" />}
        >
          <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.8}>
            <HeroModel />
          </Float>
        </Suspense>
      ) : (
        <FloatingShape color="#7c5cff" position={[0, 0.2, 0]} geometry="icosa" />
      )}

      <FloatingShape color="#3bd3ff" position={[2.4, -0.6, -0.8]} geometry="torus" />
      <FloatingShape color="#6a5cff" position={[-2.6, 0.8, -1]} geometry="sphere" />

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.6, 0]} receiveShadow>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#090b12" metalness={0.2} roughness={0.8} />
      </mesh>
      <Environment preset="city" />
    </Canvas>
  );
}

useGLTF.preload("/models/hero.glb", "/draco/");
