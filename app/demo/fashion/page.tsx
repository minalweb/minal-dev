import type { Metadata } from "next";
import Link from "next/link";
import ProductCard from "@/app/demo/fashion/_components/ProductCard";
import { fashionProducts } from "@/app/demo/fashion/_data";

export const metadata: Metadata = {
  title: "Luxury Fashion Store Demo | Minal Studio",
  description: "Editorial fashion storefront demo with premium product cards and boutique checkout flow.",
};

export default function FashionHome() {
  const featured = fashionProducts.slice(0, 3);

  return (
    <main className="section-padding">
      {/* Hero */}
      <section className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <p className="badge">Luxury Fashion House</p>
          <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
            Crafted essentials and runway edits for modern wardrobes
          </h1>
          <p className="text-white/70">
            Premium boutique experience with curated collections, editorial visuals, and seamless checkout flow.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/demo/fashion/products" className="primary-button">
              Shop the Collection
            </Link>
            <Link href="/demo/fashion/cart" className="secondary-button">
              View Cart
            </Link>
            <Link href="/" className="secondary-button">
              Back to Portfolio
            </Link>
          </div>
          <div className="flex flex-wrap gap-3">
            <span className="badge">Worldwide Shipping</span>
            <span className="badge">Premium Packaging</span>
            <span className="badge">Concierge Support</span>
          </div>
        </div>
        <div className="glass-strong p-6">
          {/* Editorial highlight */}
          <div className="rounded-2xl border border-white/10 bg-base-900 p-6">
            <p className="text-xs uppercase tracking-[0.25em] text-white/50">Editorial</p>
            <h3 className="mt-3 text-2xl font-semibold">Winter Luxe Campaign</h3>
            <p className="mt-2 text-sm text-white/70">
              Tailored pieces, sculpted silhouettes, and timeless textures.
            </p>
            <div className="mt-4 grid gap-3 text-sm text-white/70">
              <span>• Hand-finished fabrics</span>
              <span>• Limited capsule drops</span>
              <span>• Exclusive styling notes</span>
            </div>
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="mx-auto mt-14 max-w-6xl grid gap-6 md:grid-cols-3">
        {[
          { value: "4.9/5", label: "Client rating" },
          { value: "72h", label: "Worldwide delivery" },
          { value: "45+", label: "Capsule drops" },
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
          <h2 className="section-title">Featured Collection</h2>
          <Link href="/demo/fashion/products" className="secondary-button text-xs">
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
            <h2 className="text-3xl font-semibold">Ready for the lookbook?</h2>
            <p className="text-white/70">Explore the capsule designed for premium buyers.</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="/demo/fashion/products" className="primary-button">
              View Collection
            </Link>
            <Link href="/demo/fashion/cart" className="secondary-button">
              View Cart
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
