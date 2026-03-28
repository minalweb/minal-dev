import type { Metadata } from "next";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Trust from "@/components/Trust";
import WhyChoose from "@/components/WhyChoose";

export const metadata: Metadata = {
  title: "Minal Studio | Fiverr Web Developer",
  description:
    "Premium freelance web developer for Fiverr clients. Conversion-first websites, SaaS dashboards, and eCommerce demos.",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-base-950">
      <Navbar />
      <main>
        <Hero />
        <Trust />
        <Projects />
        <Services />
        <WhyChoose />
        <About />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
