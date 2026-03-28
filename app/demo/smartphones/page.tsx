import type { Metadata } from "next";
import Link from "next/link";
import ProductCard from "@/app/demo/smartphones/_components/ProductCard";
import { smartphoneProducts } from "@/app/demo/smartphones/_data";

export const metadata: Metadata = {
  title: "Smartphone Store Demo | Minal Studio",
  description: "Premium smartphone eCommerce demo with featured products, trust badges, and conversion-focused layout.",
};

export default function SmartphoneHome() {
  const featured = smartphoneProducts.slice(0, 3);

  return (
    <main className="section-padding">
      {/* Hero */}
      <section className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <p className="badge">Smartphone Store Demo</p>
          <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
            Premium smartphones designed for power users
          </h1>
          <p className="text-white/70">
            A conversion-focused storefront with curated products, trust badges, and a clean cart flow.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/demo/smartphones/products" className="primary-button">
              Browse Collection
            </Link>
            <Link href="/demo/smartphones/cart" className="secondary-button">
              View Cart
            </Link>
            <Link href="/" className="secondary-button">
              Back to Portfolio
            </Link>
          </div>
          <div className="flex flex-wrap gap-3">
            <span className="badge">Free 48h Delivery</span>
            <span className="badge">12-Month Warranty</span>
            <span className="badge">Secure Checkout</span>
          </div>
        </div>
        <div className="glass-strong p-6">
          {/* Highlight card */}
          <div className="rounded-2xl border border-white/10 bg-base-900 p-6">
            <p className="text-xs uppercase tracking-[0.25em] text-white/50">Store promise</p>
            <h3 className="mt-3 text-2xl font-semibold">Fast, premium, reliable</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>• Verified global stock</li>
              <li>• Priority support</li>
              <li>• Easy returns</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="mx-auto mt-14 max-w-6xl grid gap-6 md:grid-cols-3">
        {[
          { value: "120+", label: "Devices shipped" },
          { value: "4.9/5", label: "Store rating" },
          { value: "48h", label: "Express delivery" },
        ].map((stat) => (
          <div key={stat.label} className="glass-card p-6">
            <p className="text-2xl font-semibold">{stat.value}</p>
            <p className="text-xs uppercase tracking-[0.2em] text-white/50">{stat.label}</p>
          </div>
        ))}
      </section>

      {/* Featured Products */}
      <section className="mx-auto mt-14 max-w-6xl space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="section-title">Featured Phones</h2>
          <Link href="/demo/smartphones/products" className="secondary-button text-xs">
            View All
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto mt-16 max-w-6xl">
        <div className="glass-strong flex flex-col items-start gap-6 p-10 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-3xl font-semibold">Ready to upgrade?</h2>
            <p className="text-white/70">Experience a checkout flow built for speed and trust.</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="/demo/smartphones/products" className="primary-button">
              Shop Now
            </Link>
            <Link href="/demo/smartphones/cart" className="secondary-button">
              View Cart
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
