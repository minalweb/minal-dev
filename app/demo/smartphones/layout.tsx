import DemoNav from "@/app/demo/smartphones/_components/DemoNav";

export default function SmartphonesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-base-950 text-white">
      <DemoNav />
      {children}
    </div>
  );
}
