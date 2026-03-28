import { CartProvider } from "@/app/demo/accessories/_components/CartProvider";
import AccessoryNav from "@/app/demo/accessories/_components/AccessoryNav";

export default function AccessoriesLayout({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <div className="min-h-screen bg-base-950 text-white">
        <AccessoryNav />
        {children}
      </div>
    </CartProvider>
  );
}
