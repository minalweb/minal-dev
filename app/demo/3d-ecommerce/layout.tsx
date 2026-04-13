import { CartProvider } from "@/app/demo/3d-ecommerce/_components/CartProvider";
import CommerceNav from "@/app/demo/3d-ecommerce/_components/CommerceNav";

export default function CommerceLayout({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <div className="min-h-screen bg-base-950 text-white">
        <CommerceNav />
        {children}
      </div>
    </CartProvider>
  );
}
