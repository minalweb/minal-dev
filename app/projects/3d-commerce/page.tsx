import ProjectDetailPage from "@/components/ProjectDetailPage";

export default function ThreeDCommerceDetailPage() {
  return (
    <ProjectDetailPage
      title="3D Commerce Experience"
      category="3D eCommerce"
      summary="Premium ecommerce demo with WebGL hero, neon product grid, and conversion-first checkout."
      image="/images/mockup-smartphone.svg"
      highlights={["3D hero scene", "Neon product grid", "Interactive cart flow"]}
      outcomes={["Immersive product storytelling", "Higher engagement", "Modern ecommerce UX"]}
      stack={["Next.js", "Three.js", "R3F", "Tailwind CSS"]}
      timeline={["Day 1: 3D concept", "Day 2-3: UI build", "Day 4: QA + polish"]}
      demoUrl="/demo/3d-ecommerce"
    />
  );
}
