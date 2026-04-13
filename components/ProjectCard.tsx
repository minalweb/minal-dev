import Link from "next/link";

type Project = {
  slug: string;
  title: string;
  description: string;
  category: string;
  image: string;
  liveUrl: string;
  detailUrl: string;
};

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <div className="glass-card hover-lift tilt-card group flex h-full flex-col overflow-hidden">
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-48 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
        />
        <span className="absolute left-4 top-4 rounded-full border border-black/10 bg-white/85 px-3 py-1 text-xs text-black/70">
          {project.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div>
          <h3 className="text-lg font-semibold">{project.title}</h3>
          <p className="mt-2 text-sm text-white/70">{project.description}</p>
        </div>
        <div className="mt-auto flex flex-wrap gap-3">
          <Link href={project.liveUrl} className="primary-button text-xs" prefetch={false}>
            Live Demo
          </Link>
          <Link href={project.detailUrl} className="secondary-button text-xs" prefetch={false}>
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
