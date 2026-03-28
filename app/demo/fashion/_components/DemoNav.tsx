import Link from "next/link";

export default function DemoNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-base-950/80 backdrop-blur">
      <div className="flex items-center justify-between px-6 py-4 md:px-12 lg:px-20">
        <Link href="/demo/fashion" className="text-lg font-semibold">
          <span className="gradient-text">Atelier Noir</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
          <Link href="/demo/fashion" className="transition hover:text-white">
            Home
          </Link>
          <Link href="/demo/fashion/products" className="transition hover:text-white">
            Collection
          </Link>
          <Link href="/demo/fashion/cart" className="transition hover:text-white">
            Cart
          </Link>
        </nav>
        <Link href="/" className="secondary-button text-xs">
          Back to Portfolio
        </Link>
      </div>
    </header>
  );
}
