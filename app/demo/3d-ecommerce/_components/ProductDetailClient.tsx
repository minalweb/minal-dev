"use client";

import Link from "next/link";
import { Canvas } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";
import { CommerceProduct } from "@/app/demo/3d-ecommerce/_data";
import { useCart } from "@/app/demo/3d-ecommerce/_components/CartProvider";

function MiniDevice() {
  return (
    <Float speed={1.1} rotationIntensity={0.5} floatIntensity={0.7}>
      <mesh castShadow>
        <boxGeometry args={[1.2, 2.4, 0.2]} />
        <meshStandardMaterial color="#0b0f1d" metalness={0.6} roughness={0.2} />
      </mesh>
      <mesh position={[0, 0, 0.12]}>
        <planeGeometry args={[1, 2.1]} />
        <meshStandardMaterial color="#111827" />
      </mesh>
    </Float>
  );
}

export default function ProductDetailClient({ product }: { product: CommerceProduct }) {
  const { addItem } = useCart();

  return (
    <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="glass-card h-[380px] overflow-hidden">
        <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
          <color attach="background" args={["#07080b"]} />
          <ambientLight intensity={0.4} />
          <directionalLight position={[3, 4, 2]} intensity={1.1} />
          <MiniDevice />
          <Environment preset="city" />
        </Canvas>
      </div>

      <div className="space-y-6">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-white/50">{product.category}</p>
          <h1 className="mt-3 text-3xl font-semibold">{product.name}</h1>
          <p className="mt-3 text-white/70">{product.description}</p>
        </div>
        <div className="glass-card space-y-3 p-5">
          <div className="flex items-center gap-3">
            <span className="text-2xl font-semibold">${product.price}</span>
            <span className="text-sm text-white/40 line-through">${product.oldPrice}</span>
            <span className="badge">Limited Drop</span>
          </div>
          <div className="flex flex-wrap gap-3">
            <button className="primary-button" onClick={() => addItem(product.id)}>
              Add to Cart
            </button>
            <Link href="/demo/3d-ecommerce/cart" className="secondary-button">
              View Cart
            </Link>
          </div>
        </div>
        <div className="glass-card p-5">
          <h3 className="text-lg font-semibold">Performance stack</h3>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            {product.specs.map((spec) => (
              <li key={spec}>• {spec}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
