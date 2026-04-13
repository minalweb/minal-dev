"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/app/demo/3d-ecommerce/_components/CartProvider";

export default function CommerceCheckout() {
  const { lines, total, clear } = useCart();
  const [submitted, setSubmitted] = useState(false);

  if (lines.length === 0) {
    return (
      <main className="section-padding">
        <div className="mx-auto max-w-3xl space-y-6 text-center">
          <h1 className="text-3xl font-semibold">No items in checkout</h1>
          <p className="text-white/60">Pick a product to start your neon bundle.</p>
          <Link href="/demo/3d-ecommerce/products" className="primary-button">
            Browse Products
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="section-padding">
      <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="glass-card p-6">
          <h1 className="text-3xl font-semibold">Checkout</h1>
          <p className="mt-2 text-sm text-white/60">Secure checkout for premium tech.</p>
          <form
            className="mt-6 space-y-4"
            onSubmit={(event) => {
              event.preventDefault();
              setSubmitted(true);
              clear();
            }}
          >
            <label className="block text-sm text-white/70">
              Name
              <input className="mt-2 w-full rounded-xl border border-white/10 bg-base-900 px-4 py-3 text-sm text-white" />
            </label>
            <label className="block text-sm text-white/70">
              Phone
              <input className="mt-2 w-full rounded-xl border border-white/10 bg-base-900 px-4 py-3 text-sm text-white" />
            </label>
            <label className="block text-sm text-white/70">
              Address
              <textarea className="mt-2 h-28 w-full rounded-xl border border-white/10 bg-base-900 px-4 py-3 text-sm text-white" />
            </label>
            <button className="primary-button w-full" type="submit">
              Place Order
            </button>
            {submitted && (
              <p className="text-sm text-accent-400">Order placed! We’ll confirm within 24 hours.</p>
            )}
          </form>
        </div>

        <div className="glass-card p-6">
          <h2 className="text-xl font-semibold">Order Summary</h2>
          <div className="mt-4 space-y-4">
            {lines.map((line) => (
              <div key={line.product.id} className="flex items-center justify-between text-sm">
                <span>
                  {line.product.name} × {line.qty}
                </span>
                <span>${line.lineTotal}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
            <span className="text-sm text-white/60">Total</span>
            <span className="text-2xl font-semibold">${total}</span>
          </div>
          <Link href="/demo/3d-ecommerce/cart" className="mt-6 inline-flex text-sm text-white/60 hover:text-white">
            ← Return to cart
          </Link>
        </div>
      </div>
    </main>
  );
}
