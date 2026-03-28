type Props = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function SectionHeader({ eyebrow, title, description }: Props) {
  return (
    <div className="space-y-3">
      <p className="text-xs uppercase tracking-[0.3em] text-white/50">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      <p className="max-w-2xl text-white/70">{description}</p>
    </div>
  );
}
