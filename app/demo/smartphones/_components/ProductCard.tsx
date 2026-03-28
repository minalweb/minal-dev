import Link from "next/link";
import type { Smartphone } from "@/app/demo/smartphones/_data";

export default function ProductCard({ product }: { product: Smartphone }) {
  return (
    <div className="glass-card hover-lift tilt-card flex h-full flex-col overflow-hidden">
      {/* Product image */}
      <img src={product.image} alt={product.name} className="h-56 w-full object-cover" />
      <div className="flex flex-1 flex-col gap-4 p-5">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-white/50">{product.brand}</p>
          <h3 className="mt-2 text-lg font-semibold">{product.name}</h3>
          <p className="mt-2 text-sm text-white/70">{product.description}</p>
        </div>
        <div className="mt-auto flex items-center justify-between">
          <span className="text-lg font-semibold">${product.price}</span>
          <div className="flex gap-2">
            {/* Fake add to cart */}
            <Link href="/demo/smartphones/cart" className="secondary-button text-xs">
              Add to cart
            </Link>
            <Link
              href={`/demo/smartphones/products/${product.id}`}
              className="primary-button text-xs"
            >
              View
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
