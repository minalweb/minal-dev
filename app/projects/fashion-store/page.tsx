import ProjectDetailPage from "@/components/ProjectDetailPage";

export default function FashionDetailPage() {
  return (
    <ProjectDetailPage
      title="Luxury Fashion Store"
      category="eCommerce"
      summary="Editorial fashion storefront designed for high-end buyers with boutique styling and premium UX."
      image="/images/mockup-fashion.svg"
      highlights={[
        "Editorial hero storytelling",
        "Premium product cards",
        "Boutique-style cart preview",
      ]}
      outcomes={[
        "Brand-forward presentation",
        "Luxury conversion journey",
        "High-trust visuals",
      ]}
      stack={["Next.js", "Tailwind CSS", "UI Systems", "Branding UX"]}
      timeline={["Day 1: Brand direction", "Day 2-4: UI build", "Day 5: QA + deliver"]}
      demoUrl="/demo/fashion"
    />
  );
}
