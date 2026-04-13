import Link from "next/link";
import CommerceHeroScene from "@/app/demo/3d-ecommerce/_components/CommerceHeroScene";
import ProductCard3D from "@/app/demo/3d-ecommerce/_components/ProductCard3D";
import { commerceProducts } from "@/app/demo/3d-ecommerce/_data";

export default function CommerceHome() {
  const featured = commerceProducts.slice(0, 4);

  return (
    <main>
      <section className="section-padding">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <p className="badge">3D Commerce Experience</p>
            <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
              Immersive tech store built for conversion
            </h1>
            <p className="text-lg text-white/70">
              Futuristic storefront with neon UI, motion depth, and premium product storytelling.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/demo/3d-ecommerce/products" className="primary-button">
                Explore Products
              </Link>
              <Link href="/demo/3d-ecommerce/cart" className="secondary-button">
                Go to Cart
              </Link>
            </div>
            <div className="flex flex-wrap gap-3">
              {[
                "4.9 ★ Review Score",
                "3D Product Storytelling",
                "Fast checkout flow",
              ].map((item) => (
                <span key={item} className="badge">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="glass-strong h-[420px] overflow-hidden">
            <CommerceHeroScene />
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="mx-auto max-w-6xl">
          <div className="glass-strong flex flex-wrap items-center justify-between gap-4 p-6">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-white/50">Promo</p>
              <h2 className="mt-2 text-2xl font-semibold">Launch Bundle: Save 20% on the Nova Ecosystem</h2>
              <p className="mt-2 text-sm text-white/60">Limited time neon drop for early adopters.</p>
            </div>
            <Link href="/demo/3d-ecommerce/products" className="primary-button">
              Claim Offer
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding pt-4">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-white/50">Featured</p>
              <h2 className="mt-2 text-3xl font-semibold">Hero products</h2>
            </div>
            <Link href="/demo/3d-ecommerce/products" className="secondary-button">
              View All
            </Link>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {featured.map((product) => (
              <ProductCard3D key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
