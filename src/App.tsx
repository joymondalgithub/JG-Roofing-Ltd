import { useEffect } from "react";
import Lenis from "lenis";
import { motion, useScroll, useSpring } from "motion/react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ScrollTextStatement from "./components/ScrollTextStatement";
import About from "./components/About";
import Services from "./components/Services";
import ScrollTextRibbon from "./components/ScrollTextRibbon";
import ProjectGallery from "./components/ProjectGallery";
import BeforeAfterSlider from "./components/BeforeAfterSlider";
import RepairVsReplace from "./components/RepairVsReplace";
import WhyChooseUs from "./components/WhyChooseUs";
import ServiceAreas from "./components/ServiceAreas";
import Testimonials from "./components/Testimonials";
import EstimateCTA from "./components/EstimateCTA";
import EstimatorAndQuote from "./components/EstimatorAndQuote";
import Footer from "./components/Footer";

function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX, transformOrigin: "0%" }}
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-copper via-amber-400 to-copper z-[100] pointer-events-none shadow-[0_0_8px_rgba(217,119,54,0.6)]"
    />
  );
}

export default function App() {
  // Initialize Lenis for buttery-smooth scrolling
  useEffect(() => {
    // Respect user's motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 0.85,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.15,
      touchMultiplier: 1.4,
    });

    (window as any).__lenis = lenis;

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Global interception for smooth anchor scrolling
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a[href^="#"]');
      if (!target) return;
      const href = target.getAttribute("href");
      if (href && href.length > 1 && href !== "#") {
        const targetElement = document.querySelector(href);
        if (targetElement) {
          e.preventDefault();
          lenis.scrollTo(targetElement as HTMLElement, {
            offset: -76,
            duration: 1.2,
          });
        }
      }
    };

    document.addEventListener("click", handleAnchorClick, { capture: true });

    return () => {
      document.removeEventListener("click", handleAnchorClick, { capture: true });
      cancelAnimationFrame(rafId);
      lenis.destroy();
      delete (window as any).__lenis;
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-between bg-navy-deep antialiased selection:bg-copper selection:text-white">
      {/* Precision Scroll Progress Indicator */}
      <ScrollProgressBar />

      {/* 1. Header & Navigation */}
      <Header />

      {/* Main Sections */}
      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero />

        {/* Dynamic Scroll-Based Text Scrubbing Manifesto */}
        <ScrollTextStatement />

        {/* 3. About Section */}
        <About />

        {/* Kinetic Scroll-Driven Ribbon */}
        <ScrollTextRibbon />

        {/* 4. Specialized Services Grid */}
        <Services />

        {/* 5. Project Works Gallery */}
        <ProjectGallery />

        {/* 6. Drag Compare Before/After Slider */}
        <BeforeAfterSlider />

        {/* 7. Diagnostic Assessment: Repair vs Replace */}
        <RepairVsReplace />

        {/* 8. Corporate Standards Pillars */}
        <WhyChooseUs />

        {/* 9. Surveyor Geographic Coverage Areas */}
        <ServiceAreas />

        {/* 10. Client Testimonials */}
        <Testimonials />

        {/* 11. Estimate CTA Banner */}
        <EstimateCTA />

        {/* 12. Interactive Cost Estimator & Quote Booking Desk */}
        <EstimatorAndQuote />
      </main>

      {/* 13. Premium Footer */}
      <Footer />
    </div>
  );
}
