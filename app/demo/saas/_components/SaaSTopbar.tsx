import Link from "next/link";

export default function SaaSTopbar() {
  return (
    <header className="flex items-center justify-between border-b border-white/10 px-6 py-4">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-white/50">SaaS Demo</p>
        <h1 className="text-2xl font-semibold">Executive Overview</h1>
      </div>
      <div className="flex items-center gap-3">
        <button className="secondary-button text-xs">Invite team</button>
        <Link href="/" className="primary-button text-xs">
          Back to portfolio
        </Link>
      </div>
    </header>
  );
}
