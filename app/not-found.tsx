import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found | Minal Studio",
  description: "The page you requested could not be found.",
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-base-950 text-white">
      <div className="section-padding mx-auto max-w-4xl text-center">
        <p className="badge">404</p>
        <h1 className="mt-4 text-4xl font-semibold">We could not find that page</h1>
        <p className="mt-4 text-white/70">Let us get you back to the portfolio.</p>
        <div className="mt-6 flex justify-center gap-4">
          <Link href="/" className="primary-button">
            Back to Home
          </Link>
          <Link href="/demo/saas" className="secondary-button">
            View SaaS Demo
          </Link>
        </div>
      </div>
    </main>
  );
}
