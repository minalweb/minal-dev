import Link from "next/link";
import { notFound } from "next/navigation";
import { fashionProducts } from "@/app/demo/fashion/_data";

export default function FashionDetail({ params }: { params: { id: string } }) {
  const product = fashionProducts.find((item) => item.id === params.id);

  if (!product) {
    return notFound();
  }

  return (
    <main className="section-padding">
      <div className="mx-auto max-w-5xl space-y-8">
        {/* Back navigation */}
        <Link href="/demo/fashion/products" className="text-sm text-white/60 hover:text-white">
          ← Back to collection
        </Link>

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="glass-card p-6">
            {/* Product image */}
            <img src={product.image} alt={product.name} className="h-96 w-full object-cover" />
          </div>
          <div className="space-y-6">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-white/50">{product.category}</p>
              <h1 className="mt-3 text-3xl font-semibold">{product.name}</h1>
              <p className="mt-3 text-white/70">{product.description}</p>
            </div>
            <div className="glass-card p-5">
              <p className="text-sm text-white/70">Limited capsule • {product.tag}</p>
              <p className="mt-3 text-2xl font-semibold">${product.price}</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {/* Fake add to cart */}
                <Link href="/demo/fashion/cart" className="primary-button">
                  Add to cart
                </Link>
                <Link href="/demo/fashion/cart" className="secondary-button">
                  Go to cart
                </Link>
              </div>
            </div>
            <div className="glass-card p-5">
              <h3 className="text-lg font-semibold">Atelier details</h3>
              <ul className="mt-3 space-y-2 text-sm text-white/70">
                <li>• Tailored finish with signature stitching</li>
                <li>• Premium fabric sourcing</li>
                <li>• Styling notes included</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
