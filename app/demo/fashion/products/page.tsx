import ProductCard from "@/app/demo/fashion/_components/ProductCard";
import { fashionProducts } from "@/app/demo/fashion/_data";

export default function FashionListing() {
  return (
    <main className="section-padding">
      <div className="mx-auto max-w-6xl space-y-6">
        <div>
          <h1 className="text-3xl font-semibold">The Collection</h1>
          <p className="text-white/70">Limited-run pieces curated for premium wardrobes.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {fashionProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
}
