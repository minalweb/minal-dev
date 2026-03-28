import Link from "next/link";

const navItems = [
  { label: "Dashboard", href: "/demo/saas/dashboard" },
  { label: "Analytics", href: "/demo/saas/analytics" },
  { label: "Billing", href: "/demo/saas/billing" },
  { label: "Settings", href: "/demo/saas/settings" },
];

export default function SaaSSidebar() {
  return (
    <aside className="hidden h-full w-64 border-r border-white/10 bg-base-900/60 p-6 lg:block">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-accent-400 to-accent-600" />
        <div>
          <p className="text-sm text-white/60">Workspace</p>
          <p className="text-lg font-semibold">NovaSuite</p>
        </div>
      </div>
      <nav className="mt-10 space-y-2 text-sm text-white/70">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center gap-3 rounded-xl px-3 py-2 transition hover:bg-white/5 hover:text-white"
          >
            <span className="h-2 w-2 rounded-full bg-accent-500" />
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="mt-10 rounded-2xl border border-white/10 bg-base-900 p-4">
        <p className="text-xs uppercase tracking-[0.25em] text-white/50">Plan</p>
        <p className="mt-2 text-lg font-semibold">Growth</p>
        <p className="text-sm text-white/60">Renews in 12 days</p>
        <Link href="/demo/saas/billing" className="mt-4 inline-flex text-xs text-accent-400">
          Manage billing
        </Link>
      </div>
    </aside>
  );
}
