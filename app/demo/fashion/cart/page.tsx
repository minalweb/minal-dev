import Link from "next/link";

export default function FashionCart() {
  return (
    <main className="section-padding">
      <div className="mx-auto max-w-4xl space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h1 className="text-3xl font-semibold">Your Cart</h1>
          <Link href="/demo/fashion/products" className="secondary-button">
            Continue Shopping
          </Link>
        </div>

        {/* Fake cart layout */}
        <div className="glass-card p-6">
          <p className="text-sm text-white/60">Premium cart preview</p>
          <div className="mt-4 space-y-4">
            {[1, 2].map((item) => (
              <div key={item} className="flex items-center justify-between border-b border-white/10 pb-4 last:border-none last:pb-0">
                <div>
                  <p className="font-semibold">Signature Atelier Item</p>
                  <p className="text-sm text-white/60">Qty: 1</p>
                </div>
                <span className="font-semibold">$320</span>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card flex flex-wrap items-center justify-between gap-4 p-6">
          <div>
            <p className="text-sm text-white/60">Subtotal</p>
            <p className="text-2xl font-semibold">$640</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button className="secondary-button">Clear Cart</button>
            <button className="primary-button">Proceed to Checkout</button>
          </div>
        </div>

        <Link href="/" className="text-sm text-white/60 hover:text-white">
          ← Back to portfolio
        </Link>
      </div>
    </main>
  );
}
