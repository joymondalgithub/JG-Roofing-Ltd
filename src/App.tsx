import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Lenis from "lenis";
import { motion, useScroll, useSpring } from "motion/react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingContact from "./components/FloatingContact";
import HomePage from "./pages/HomePage";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import { scrollToSection } from "./utils/scrollToSection";

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

function ScrollToTopOnRoute() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    document.body.style.overflow = "";
    const lenis = (
      window as unknown as {
        __lenis?: {
          start: () => void;
          scrollTo: (
            target: number | HTMLElement,
            opts?: { immediate?: boolean; offset?: number; duration?: number }
          ) => void;
        };
      }
    ).__lenis;

    if (lenis) {
      lenis.start();
    }

    if (hash) {
      window.setTimeout(() => {
        scrollToSection(hash);
      }, 80);
      return;
    }

    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
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

    (window as unknown as { __lenis?: Lenis }).__lenis = lenis;

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    const handleAnchorClick = (e: MouseEvent) => {
      if (e.defaultPrevented) return;
      const target = (e.target as HTMLElement).closest('a[href^="#"]');
      if (!target) return;
      const href = target.getAttribute("href");
      if (!href || href === "#") return;
      e.preventDefault();
      scrollToSection(href);
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      cancelAnimationFrame(rafId);
      lenis.destroy();
      delete (window as unknown as { __lenis?: Lenis }).__lenis;
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-between bg-navy-deep antialiased selection:bg-copper selection:text-white overflow-x-clip">
      <ScrollProgressBar />
      <ScrollToTopOnRoute />

      <Header />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/services/roof-repairs"
            element={<ServiceDetailPage slug="roof-repairs" />}
          />
          <Route
            path="/services/new-roofs"
            element={<ServiceDetailPage slug="new-roofs" />}
          />
          <Route
            path="/services/chimney-leadwork"
            element={<ServiceDetailPage slug="chimney-leadwork" />}
          />
          <Route
            path="/services/gutters-fascias"
            element={<ServiceDetailPage slug="gutters-fascias" />}
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>

      <Footer />
      <FloatingContact />
    </div>
  );
}
