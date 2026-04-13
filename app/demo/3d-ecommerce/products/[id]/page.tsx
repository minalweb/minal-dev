import Link from "next/link";
import { notFound } from "next/navigation";
import { commerceProducts } from "@/app/demo/3d-ecommerce/_data";
import ProductDetailClient from "@/app/demo/3d-ecommerce/_components/ProductDetailClient";

export default function CommerceProductDetail({ params }: { params: { id: string } }) {
  const product = commerceProducts.find((item) => item.id === params.id);
  if (!product) return notFound();

  return (
    <main className="section-padding">
      <div className="mx-auto max-w-6xl space-y-8">
        <Link href="/demo/3d-ecommerce/products" className="text-sm text-white/60 hover:text-white">
          ← Back to products
        </Link>
        <ProductDetailClient product={product} />
      </div>
    </main>
  );
}
