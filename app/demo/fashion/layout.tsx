import DemoNav from "@/app/demo/fashion/_components/DemoNav";

export default function FashionLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-base-950 text-white">
      <DemoNav />
      {children}
    </div>
  );
}
