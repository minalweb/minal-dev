"use client";

import { useCart } from "@/app/demo/accessories/_components/CartProvider";

export default function AddToCartButton({
  productId,
  label = "Add to Cart",
  className = "primary-button",
}: {
  productId: string;
  label?: string;
  className?: string;
}) {
  const { addItem } = useCart();

  return (
    <button className={className} onClick={() => addItem(productId)}>
      {label}
    </button>
  );
}
