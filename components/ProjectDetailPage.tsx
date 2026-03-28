import Link from "next/link";

type Props = {
  title: string;
  category: string;
  summary: string;
  image: string;
  highlights: string[];
  outcomes: string[];
  stack: string[];
  timeline: string[];
  demoUrl: string;
};

export default function ProjectDetailPage({
  title,
  category,
  summary,
  image,
  highlights,
  outcomes,
  stack,
  timeline,
  demoUrl,
}: Props) {
  return (
    <main className="section-padding">
      <div className="mx-auto max-w-5xl space-y-10">
        <Link href="/" className="text-sm text-white/60 hover:text-white">
          ← Back to portfolio
        </Link>
        <div className="glass-card overflow-hidden">
          <img src={image} alt={title} className="h-72 w-full object-cover" />
          <div className="space-y-6 p-8">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/50">{category}</p>
              <h1 className="mt-3 text-3xl font-semibold">{title}</h1>
              <p className="mt-3 text-white/70">{summary}</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="glass-card p-5">
                <h3 className="text-lg font-semibold">Highlights</h3>
                <ul className="mt-3 space-y-2 text-sm text-white/70">
                  {highlights.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div className="glass-card p-5">
                <h3 className="text-lg font-semibold">Outcomes</h3>
                <ul className="mt-3 space-y-2 text-sm text-white/70">
                  {outcomes.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="glass-card p-5">
                <h3 className="text-lg font-semibold">Tech Stack</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {stack.map((item) => (
                    <span key={item} className="badge">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="glass-card p-5">
                <h3 className="text-lg font-semibold">Delivery Timeline</h3>
                <ul className="mt-3 space-y-2 text-sm text-white/70">
                  {timeline.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link href={demoUrl} className="primary-button" prefetch={false}>
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
