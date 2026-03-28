"use client";

import Link from "next/link";
import { useCart } from "@/app/demo/accessories/_components/CartProvider";

export default function AccessoryNav() {
  const { items } = useCart();
  const count = items.reduce((sum, item) => sum + item.qty, 0);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-base-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/demo/accessories" className="text-lg font-semibold">
          Luxe Accessories
        </Link>
        <nav className="flex items-center gap-4 text-sm text-white/70">
          <Link href="/demo/accessories/products" className="hover:text-white">
            Products
          </Link>
          <Link href="/demo/accessories/cart" className="relative hover:text-white">
            Cart
            {count > 0 && (
              <span className="absolute -right-3 -top-2 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-accent-500 px-1 text-[10px] text-white">
                {count}
              </span>
            )}
          </Link>
          <Link href="/" className="secondary-button px-4 py-2 text-xs">
            Back to portfolio
          </Link>
        </nav>
      </div>
    </header>
  );
}
