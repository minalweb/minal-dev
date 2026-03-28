import Link from "next/link";
import { projectDetails, projects } from "@/lib/data";
import { notFound } from "next/navigation";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const slug = decodeURIComponent(params.slug);
  const project = projects.find((item) => item.slug === slug);
  const detail = projectDetails[slug as keyof typeof projectDetails];

  if (!project || !detail) {
    return notFound();
  }

  return (
    <main className="section-padding">
      <div className="mx-auto max-w-4xl space-y-8">
        <Link href="/" className="text-sm text-white/60 hover:text-white">
          ← Back to portfolio
        </Link>
        <div className="glass-card overflow-hidden">
          <img src={project.image} alt={project.title} className="h-64 w-full object-cover" />
          <div className="space-y-4 p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-white/50">{project.category}</p>
            <h1 className="text-3xl font-semibold">{detail.title}</h1>
            <p className="text-white/70">{detail.summary}</p>
            <div>
              <h3 className="text-lg font-semibold">Highlights</h3>
              <ul className="mt-3 space-y-2 text-sm text-white/70">
                {detail.outcomes.map((outcome) => (
                  <li key={outcome}>• {outcome}</li>
                ))}
              </ul>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href={project.liveUrl} className="primary-button" prefetch={false}>
                View Live Demo
              </Link>
              <Link href="/" className="secondary-button">
                Back to Work
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
