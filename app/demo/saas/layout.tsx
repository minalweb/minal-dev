import SaaSSidebar from "@/app/demo/saas/_components/SaaSSidebar";

export default function SaaSLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-base-950 text-white">
      <div className="grid min-h-screen lg:grid-cols-[260px_1fr]">
        <SaaSSidebar />
        <div className="min-h-screen">{children}</div>
      </div>
    </div>
  );
}
