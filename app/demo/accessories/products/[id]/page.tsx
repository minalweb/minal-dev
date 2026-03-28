import Link from "next/link";
import { notFound } from "next/navigation";
import { accessories } from "@/app/demo/accessories/_data";
import AddToCartButton from "@/app/demo/accessories/_components/AddToCartButton";
import { buildWhatsAppLink } from "@/app/demo/accessories/_utils";

export default function AccessoriesDetails({ params }: { params: { id: string } }) {
  const product = accessories.find((item) => item.id === params.id);

  if (!product) {
    return notFound();
  }

  return (
    <main className="section-padding">
      <div className="mx-auto max-w-6xl space-y-8">
        <Link href="/demo/accessories/products" className="text-sm text-white/60 hover:text-white">
          ← Back to products
        </Link>

        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div className="glass-card p-6">
            <img
              src={product.image}
              alt={product.name}
              className="h-96 w-full object-contain"
            />
          </div>
          <div className="space-y-6">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">{product.category}</p>
              <h1 className="mt-3 text-3xl font-semibold">{product.name}</h1>
              <p className="mt-3 text-white/70">{product.description}</p>
            </div>
            <div className="glass-card space-y-3 p-5">
              <div className="flex items-center gap-3">
                <span className="text-2xl font-semibold">${product.price}</span>
                <span className="text-sm text-white/40 line-through">${product.oldPrice}</span>
                <span className="badge">Hot Deal</span>
              </div>
              <p className="text-sm text-white/60">Only {product.stock} left in stock</p>
              <div className="flex flex-wrap gap-3">
                <AddToCartButton productId={product.id} />
                <Link href="/demo/accessories/checkout" className="secondary-button">
                  Order Now
                </Link>
                <a
                  href={buildWhatsAppLink(product.name)}
                  className="secondary-button"
                  target="_blank"
                  rel="noreferrer"
                >
                  Order via WhatsApp
                </a>
              </div>
            </div>
            <div className="glass-card p-5">
              <h3 className="text-lg font-semibold">Why customers love it</h3>
              <ul className="mt-3 space-y-2 text-sm text-white/70">
                {product.features.map((feature) => (
                  <li key={feature}>• {feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
