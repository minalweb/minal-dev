"use client";

import Link from "next/link";
import { CommerceProduct } from "@/app/demo/3d-ecommerce/_data";
import { useCart } from "@/app/demo/3d-ecommerce/_components/CartProvider";

export default function ProductCard3D({ product }: { product: CommerceProduct }) {
  const { addItem } = useCart();

  return (
    <div className="glass-card tilt-card flex h-full flex-col p-5">
      <div className="relative overflow-hidden rounded-2xl bg-base-900 p-4">
        <div
          className="absolute -right-10 -top-10 h-24 w-24 rounded-full blur-2xl"
          style={{ background: product.accent, opacity: 0.35 }}
        />
        <img src={product.image} alt={product.name} className="mx-auto h-40 w-full object-contain" />
      </div>
      <div className="mt-5 flex flex-1 flex-col">
        <p className="text-xs uppercase tracking-[0.3em] text-white/50">{product.category}</p>
        <h3 className="mt-2 text-lg font-semibold">{product.name}</h3>
        <p className="mt-2 text-sm text-white/60">{product.description}</p>
        <div className="mt-4 flex items-center gap-3">
          <span className="text-lg font-semibold">${product.price}</span>
          <span className="text-sm text-white/40 line-through">${product.oldPrice}</span>
        </div>
        <div className="mt-5 flex flex-wrap gap-3">
          <button className="secondary-button px-4 py-2 text-xs" onClick={() => addItem(product.id)}>
            Add to Cart
          </button>
          <Link href={`/demo/3d-ecommerce/products/${product.id}`} className="primary-button px-4 py-2 text-xs">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
