import { siteConfig } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-8 text-sm text-white/50 md:px-12 lg:px-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <span>{siteConfig.name} — Premium Fiverr Web Developer</span>
        <span>© {new Date().getFullYear()} All rights reserved.</span>
      </div>
    </footer>
  );
}
