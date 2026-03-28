import Link from "next/link";
import ProductCard from "@/app/demo/accessories/_components/ProductCard";
import { accessories } from "@/app/demo/accessories/_data";
import { buildGenericWhatsAppLink } from "@/app/demo/accessories/_utils";

export default function AccessoriesHome() {
  const featured = accessories.slice(0, 6);

  return (
    <main>
      <section className="section-padding">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <p className="badge w-fit">Premium Accessories Store</p>
            <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
              Upgrade Your Mobile Experience ??
            </h1>
            <p className="text-lg text-white/70">
              Fast delivery | Premium quality | Best price
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/demo/accessories/products" className="primary-button">
                Shop Now
              </Link>
              <a
                href={buildGenericWhatsAppLink()}
                className="secondary-button"
                target="_blank"
                rel="noreferrer"
              >
                Order via WhatsApp
              </a>
            </div>
            <div className="flex flex-wrap gap-3">
              {[
                "? 4.9 Rating",
                "1000+ Happy Customers",
                "Cash on Delivery Available",
              ].map((item) => (
                <span key={item} className="badge">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="glass-card relative overflow-hidden p-6">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(91,124,255,0.35),_transparent_55%)]" />
            <img
              src="/images/mockup-accessories.svg"
              alt="Mobile accessories" 
              className="relative z-10 h-full w-full object-contain"
            />
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="mx-auto max-w-6xl">
          <div className="glass-strong flex flex-wrap items-center justify-between gap-4 p-6">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-white/50">Promo</p>
              <h2 className="mt-2 text-2xl font-semibold">Flat 20% OFF on Accessories</h2>
              <p className="mt-2 text-sm text-white/60">Limited stock bundles available today.</p>
            </div>
            <Link href="/demo/accessories/products" className="primary-button">
              Grab the Offer
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding pt-4">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-white/50">Featured Products</p>
              <h2 className="mt-2 text-3xl font-semibold">Best-selling accessories</h2>
            </div>
            <Link href="/demo/accessories/products" className="secondary-button">
              View All
            </Link>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
