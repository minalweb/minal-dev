import ProjectDetailPage from "@/components/ProjectDetailPage";

export default function AccessoriesDetailPage() {
  return (
    <ProjectDetailPage
      title="Mobile Accessories Store"
      category="eCommerce"
      summary="Conversion-focused accessories shop with promo badges, cart simulation, and WhatsApp ordering."
      image="/images/mockup-accessories.svg"
      highlights={[
        "Discount-led merchandising",
        "WhatsApp order CTA",
        "Premium product grid",
      ]}
      outcomes={["Higher basket conversion", "Fast checkout flow", "Mobile-first UI polish"]}
      stack={["Next.js", "Tailwind CSS", "Local cart state", "Conversion UX"]}
      timeline={["Day 1: UX strategy", "Day 2-3: UI build", "Day 4: Checkout + QA"]}
      demoUrl="/demo/accessories"
    />
  );
}
