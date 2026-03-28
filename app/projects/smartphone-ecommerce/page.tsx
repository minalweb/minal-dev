import ProjectDetailPage from "@/components/ProjectDetailPage";

export default function SmartphoneDetailPage() {
  return (
    <ProjectDetailPage
      title="Smartphone eCommerce Experience"
      category="eCommerce"
      summary="Conversion-first smartphone store with curated product journeys, trust badges, and a polished cart flow."
      image="/images/mockup-smartphone.svg"
      highlights={[
        "Curated hero + featured product layout",
        "Product listing and detail flow",
        "Cart-ready checkout experience",
      ]}
      outcomes={[
        "Clear product hierarchy",
        "Fast path to purchase",
        "Premium storefront polish",
      ]}
      stack={["Next.js", "Tailwind CSS", "UI Components", "Conversion UX"]}
      timeline={["Day 1: UX + wireframe", "Day 2-3: UI build", "Day 4: QA + polish"]}
      demoUrl="/demo/smartphones"
    />
  );
}
