import Link from "next/link";
import type { FashionProduct } from "@/app/demo/fashion/_data";

export default function ProductCard({ product }: { product: FashionProduct }) {
  return (
    <div className="group glass-card hover-lift tilt-card flex h-full flex-col overflow-hidden">
      {/* Product image */}
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-base-950/80 px-3 py-1 text-xs text-white/70">
          {product.tag}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-4 p-5">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-white/50">{product.category}</p>
          <h3 className="mt-2 text-lg font-semibold">{product.name}</h3>
          <p className="mt-2 text-sm text-white/70">{product.description}</p>
        </div>
        <div className="mt-auto flex items-center justify-between">
          <span className="text-lg font-semibold">${product.price}</span>
          <div className="flex gap-2">
            {/* Fake add to cart */}
            <Link href="/demo/fashion/cart" className="secondary-button text-xs">
              Add to cart
            </Link>
            <Link href={`/demo/fashion/products/${product.id}`} className="primary-button text-xs">
              View
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
