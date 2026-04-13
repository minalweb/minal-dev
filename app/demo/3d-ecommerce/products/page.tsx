import Link from "next/link";
import ProductCard3D from "@/app/demo/3d-ecommerce/_components/ProductCard3D";
import { commerceProducts } from "@/app/demo/3d-ecommerce/_data";

export default function CommerceProducts() {
  return (
    <main className="section-padding">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-white/50">Product Matrix</p>
            <h1 className="mt-2 text-3xl font-semibold">Explore the full neon lineup</h1>
          </div>
          <Link href="/demo/3d-ecommerce" className="secondary-button">
            Back to Home
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {commerceProducts.map((product) => (
            <ProductCard3D key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
}
