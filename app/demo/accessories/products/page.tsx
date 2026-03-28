import Link from "next/link";
import ProductCard from "@/app/demo/accessories/_components/ProductCard";
import { accessories } from "@/app/demo/accessories/_data";

export default function AccessoriesListing() {
  return (
    <main className="section-padding">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-white/50">All Accessories</p>
            <h1 className="mt-2 text-3xl font-semibold">Shop the full collection</h1>
          </div>
          <Link href="/demo/accessories" className="secondary-button">
            Back to Home
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {accessories.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
}
