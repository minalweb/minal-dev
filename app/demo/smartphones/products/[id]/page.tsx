import Link from "next/link";
import { notFound } from "next/navigation";
import { smartphoneProducts } from "@/app/demo/smartphones/_data";

const specs = [
  "6.7-inch OLED display",
  "ProMotion 120Hz refresh",
  "A17 Pro performance",
  "Pro-grade triple camera",
];

export default function SmartphoneDetail({ params }: { params: { id: string } }) {
  const product = smartphoneProducts.find((item) => item.id === params.id);

  if (!product) {
    return notFound();
  }

  return (
    <main className="section-padding">
      <div className="mx-auto max-w-6xl space-y-10">
        <Link href="/demo/smartphones/products" className="text-sm text-white/60 hover:text-white">
          ← Back to products
        </Link>

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="glass-card p-6">
            <img src={product.image} alt={product.name} className="h-[420px] w-full object-cover" />
            <div className="mt-6 grid grid-cols-3 gap-3">
              {[1, 2, 3].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-base-900 p-3">
                  <img src={product.image} alt={product.name} className="h-20 w-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-white/50">{product.brand}</p>
              <h1 className="mt-3 text-4xl font-semibold">{product.name}</h1>
              <p className="mt-3 text-white/70">{product.description}</p>
            </div>

            <div className="glass-card p-5">
              <p className="text-sm text-white/70">Limited stock • {product.tag}</p>
              <p className="mt-3 text-3xl font-semibold">${product.price}</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link href="/demo/smartphones/cart" className="primary-button">
                  Add to cart
                </Link>
                <Link href="/demo/smartphones/cart" className="secondary-button">
                  Go to cart
                </Link>
              </div>
              <div className="mt-5 flex flex-wrap gap-3 text-xs text-white/60">
                <span className="badge">Free express delivery</span>
                <span className="badge">12-month warranty</span>
                <span className="badge">Secure checkout</span>
              </div>
            </div>

            <div className="glass-card p-5">
              <h3 className="text-lg font-semibold">Performance highlights</h3>
              <ul className="mt-3 space-y-2 text-sm text-white/70">
                {specs.map((spec) => (
                  <li key={spec}>• {spec}</li>
                ))}
              </ul>
            </div>

            <div className="glass-card p-5">
              <h3 className="text-lg font-semibold">What buyers say</h3>
              <p className="mt-3 text-sm text-white/70">
                “The checkout flow is smooth and the product presentation feels premium.”
              </p>
              <p className="mt-3 text-xs uppercase tracking-[0.2em] text-white/50">Verified buyer</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
