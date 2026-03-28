"use client";

import Link from "next/link";
import { useCart } from "@/app/demo/accessories/_components/CartProvider";

export default function AccessoriesCart() {
  const { lines, total, updateQty, removeItem, clear } = useCart();

  if (lines.length === 0) {
    return (
      <main className="section-padding">
        <div className="mx-auto max-w-4xl space-y-6 text-center">
          <h1 className="text-3xl font-semibold">Your cart is empty</h1>
          <p className="text-white/60">Browse premium accessories and add your favorites.</p>
          <div className="flex justify-center gap-3">
            <Link href="/demo/accessories/products" className="primary-button">
              Start Shopping
            </Link>
            <Link href="/demo/accessories" className="secondary-button">
              Back to Home
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="section-padding">
      <div className="mx-auto max-w-4xl space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h1 className="text-3xl font-semibold">Your Cart</h1>
          <Link href="/demo/accessories/products" className="secondary-button">
            Continue Shopping
          </Link>
        </div>

        <div className="glass-card divide-y divide-white/10">
          {lines.map((line) => (
            <div key={line.product.id} className="flex flex-wrap items-center gap-4 p-5">
              <img
                src={line.product.image}
                alt={line.product.name}
                className="h-20 w-20 object-contain"
              />
              <div className="flex-1">
                <p className="font-semibold">{line.product.name}</p>
                <p className="text-sm text-white/60">${line.product.price} each</p>
                <div className="mt-3 flex items-center gap-3">
                  <button
                    className="secondary-button px-3 py-1 text-xs"
                    onClick={() => updateQty(line.product.id, line.qty - 1)}
                  >
                    -
                  </button>
                  <span className="text-sm font-semibold">{line.qty}</span>
                  <button
                    className="secondary-button px-3 py-1 text-xs"
                    onClick={() => updateQty(line.product.id, line.qty + 1)}
                  >
                    +
                  </button>
                  <button
                    className="text-xs text-white/60 hover:text-white"
                    onClick={() => removeItem(line.product.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
              <span className="text-lg font-semibold">${line.lineTotal}</span>
            </div>
          ))}
        </div>

        <div className="glass-card flex flex-wrap items-center justify-between gap-4 p-6">
          <div>
            <p className="text-sm text-white/60">Total</p>
            <p className="text-2xl font-semibold">${total}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button className="secondary-button" onClick={clear}>
              Clear Cart
            </button>
            <Link href="/demo/accessories/checkout" className="primary-button">
              Proceed to Checkout
            </Link>
          </div>
        </div>

        <Link href="/" className="text-sm text-white/60 hover:text-white">
          ? Back to portfolio
        </Link>
      </div>
    </main>
  );
}
