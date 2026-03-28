import Link from "next/link";

export default function SaaSSignup() {
  return (
    <main className="min-h-screen bg-base-950 text-white">
      <div className="mx-auto flex min-h-screen max-w-5xl items-center justify-center px-6 py-12">
        <div className="glass-strong w-full max-w-md p-8">
          <p className="text-xs uppercase tracking-[0.25em] text-white/50">Get started</p>
          <h1 className="mt-3 text-3xl font-semibold">Create your NovaSuite account</h1>
          <p className="mt-2 text-sm text-white/70">Launch your workspace in minutes.</p>

          <form className="mt-6 space-y-4">
            <div>
              <label className="text-sm text-white/60">Full name</label>
              <input
                className="mt-2 w-full rounded-xl border border-white/10 bg-base-900 px-4 py-3 text-sm text-white/80"
                placeholder="Jordan Smith"
              />
            </div>
            <div>
              <label className="text-sm text-white/60">Work email</label>
              <input
                className="mt-2 w-full rounded-xl border border-white/10 bg-base-900 px-4 py-3 text-sm text-white/80"
                placeholder="you@company.com"
              />
            </div>
            <div>
              <label className="text-sm text-white/60">Password</label>
              <input
                type="password"
                className="mt-2 w-full rounded-xl border border-white/10 bg-base-900 px-4 py-3 text-sm text-white/80"
                placeholder="••••••••"
              />
            </div>
            <button type="button" className="primary-button w-full">
              Create account
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-white/60">
            Already have access?{" "}
            <Link href="/demo/saas/auth/login" className="text-accent-400">
              Sign in
            </Link>
          </div>

          <Link href="/demo/saas" className="mt-6 inline-flex text-xs text-white/60 hover:text-white">
            ← Back to SaaS demo
          </Link>
        </div>
      </div>
    </main>
  );
}
