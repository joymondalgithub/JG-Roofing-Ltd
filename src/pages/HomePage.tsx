import Hero from "../components/Hero";
import ScrollTextStatement from "../components/ScrollTextStatement";
import About from "../components/About";
import ScrollTextRibbon from "../components/ScrollTextRibbon";
import Services from "../components/Services";
import ProjectGallery from "../components/ProjectGallery";
import BeforeAfterSlider from "../components/BeforeAfterSlider";
import WhyChooseUs from "../components/WhyChooseUs";
import EstimateCTA from "../components/EstimateCTA";
import EstimatorAndQuote from "../components/EstimatorAndQuote";
import { usePageSEO } from "../hooks/usePageSEO";

export default function HomePage() {
  usePageSEO({
    title: "JG Roofing Ltd | Premium Architectural Roofing Contractors Dublin",
    description:
      "Dublin roofing specialists in natural slate, pitched tile replacements, flat roofs, chimney leadwork, guttering, and storm roof repairs. BS 5534 compliant with a 15-year guarantee.",
    path: "/",
  });

  return (
    <>
      <Hero />
      <ScrollTextStatement />
      <About ctaTo="/about" ctaLabel="ABOUT JG ROOFING LTD" />
      <ScrollTextRibbon />
      <Services />
      <ProjectGallery featuredOnly={true} />
      <BeforeAfterSlider />
      <WhyChooseUs />
      <EstimateCTA />
      <EstimatorAndQuote defaultTab="calc" />
    </>
  );
}
