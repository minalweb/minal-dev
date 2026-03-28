import ProductCard from "@/app/demo/smartphones/_components/ProductCard";
import { smartphoneProducts } from "@/app/demo/smartphones/_data";

export default function SmartphoneListing() {
  return (
    <main className="section-padding">
      <div className="mx-auto max-w-6xl space-y-6">
        <div>
          <h1 className="text-3xl font-semibold">All Smartphones</h1>
          <p className="text-white/70">Choose from flagship devices built for performance and style.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {smartphoneProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
}
