"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen bg-base-950 text-white">
      <div className="section-padding mx-auto max-w-4xl text-center">
        <p className="badge">Something went wrong</p>
        <h1 className="mt-4 text-4xl font-semibold">Unexpected error</h1>
        <p className="mt-4 text-white/70">Try again or return to the portfolio.</p>
        <div className="mt-6 flex justify-center gap-4">
          <button onClick={reset} className="primary-button">
            Try Again
          </button>
          <Link href="/" className="secondary-button">
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
