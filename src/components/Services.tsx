import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Wrench,
  Layers,
  Compass,
  Droplets,
  X,
  Check,
  ArrowRight,
  SlidersHorizontal,
} from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import { CORE_SERVICES, type CoreServicePageData } from "../data/servicesData";

const SERVICE_ICONS: Record<CoreServicePageData["slug"], React.ReactNode> = {
  "roof-repairs": <Wrench className="w-5 h-5 text-copper" />,
  "new-roofs": <Layers className="w-5 h-5 text-copper" />,
  "chimney-leadwork": <Compass className="w-5 h-5 text-copper" />,
  "gutters-fascias": <Droplets className="w-5 h-5 text-copper" />,
};

export default function Services() {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState<CoreServicePageData | null>(null);

  useEffect(() => {
    const lenis = (window as unknown as { __lenis?: { stop: () => void; start: () => void } })
      .__lenis;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedService(null);
      }
    };
    if (selectedService) {
      document.body.style.overflow = "hidden";
      if (lenis) lenis.stop();
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      if (lenis) lenis.start();
    };
  }, [selectedService]);

  return (
    <section
      id="services"
      className="scroll-mt-24 py-24 bg-navy-deep text-slate-300 overflow-x-clip"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 overflow-hidden">
          <ScrollReveal direction="left" delay={0.05} distance={40}>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-copper" />
                <span className="font-display text-xs font-bold text-copper uppercase tracking-widest">
                  DISCIPLINE &amp; SCOPE
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl text-white font-extrabold uppercase tracking-tight">
                ROOFING SERVICES BUILT TO LAST
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.15} distance={35}>
            <p className="font-body text-slate-400 max-w-md text-sm leading-relaxed">
              Engineered roofing services tailored for residential properties, heritage restorations, and commercial building envelopes across Dublin. Select any core service for full specifications and FAQs.
            </p>
          </ScrollReveal>
        </div>

        {/* 4 Dedicated Core Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CORE_SERVICES.map((svc, index) => {
            const directions: ("left" | "down" | "up" | "right")[] = [
              "left",
              "down",
              "up",
              "right",
            ];
            const cardDirection = directions[index % 4];

            return (
              <ScrollReveal
                key={svc.slug}
                direction={cardDirection}
                delay={0.08 + index * 0.08}
                distance={32}
              >
                <div className="bg-navy-slate border border-navy-border hover:border-copper/40 rounded-xl overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-lg group hover:-translate-y-1 h-full">
                  <div>
                    {/* Visual Service Image Panel */}
                    <Link
                      to={svc.path}
                      className="block relative h-48 overflow-hidden bg-navy-deep"
                    >
                      <img
                        src={svc.heroImage}
                        alt={svc.heroImageAlt}
                        loading="lazy"
                        decoding="async"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-slate via-transparent to-transparent opacity-80 pointer-events-none" />

                      <div className="absolute bottom-3 left-4 w-10 h-10 bg-navy-deep border border-navy-border rounded-lg flex items-center justify-center text-copper">
                        {SERVICE_ICONS[svc.slug]}
                      </div>
                    </Link>

                    {/* Card Content */}
                    <div className="p-6">
                      <Link to={svc.path} className="block">
                        <h3 className="font-display text-base font-bold text-white uppercase tracking-wider mb-2 group-hover:text-copper transition-colors">
                          {svc.navLabel}
                        </h3>
                      </Link>

                      <p className="font-body text-xs text-slate-400 leading-relaxed">
                        {svc.shortTagline}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer: Direct Service Page Link + Quick Specs trigger */}
                  <div className="px-6 pb-6 space-y-2">
                    <Link
                      to={svc.path}
                      className="btn-primary w-full !py-2.5 text-[11px] flex items-center justify-center gap-1.5"
                    >
                      <span>Explore Service</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <button
                      type="button"
                      onClick={() => setSelectedService(svc)}
                      className="btn-secondary w-full !py-2 text-[10px] flex items-center justify-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-copper/50"
                    >
                      <SlidersHorizontal className="w-3 h-3 text-copper" />
                      <span>Quick Technical Specs</span>
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Technical Detail Lightbox Modal */}
        {selectedService && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={() => setSelectedService(null)}
            role="dialog"
            aria-modal="true"
            aria-label={selectedService.navLabel}
          >
            <div
              className="relative bg-navy-slate border border-navy-border rounded-xl shadow-2xl max-w-2xl w-full overflow-hidden animate-fadeIn"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="p-6 border-b border-navy-border flex items-center justify-between bg-navy-deep">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-navy-slate rounded-lg text-copper">
                    {SERVICE_ICONS[selectedService.slug]}
                  </div>
                  <div>
                    <span className="font-display text-[10px] text-copper uppercase tracking-widest block font-bold">
                      Specification Dossier
                    </span>
                    <h3 className="font-display text-lg font-bold text-white uppercase tracking-tight">
                      {selectedService.navLabel}
                    </h3>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedService(null)}
                  className="p-1.5 rounded-lg bg-navy-slate text-slate-400 hover:text-white hover:bg-navy-border transition-colors focus:outline-none cursor-pointer"
                  aria-label="Close dialog"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Content body */}
              <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto" data-lenis-prevent>
                <p className="text-xs text-slate-300 leading-relaxed font-body">
                  {selectedService.heroSummary}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <span className="font-display text-[10px] font-bold uppercase text-slate-500 tracking-wider block">
                      Rigid Specifications
                    </span>
                    <ul className="space-y-2">
                      {selectedService.specifications.map((spec, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                          <Check className="w-4 h-4 text-copper shrink-0 mt-0.5" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <span className="font-display text-[10px] font-bold uppercase text-slate-500 tracking-wider block">
                      Factual Material Stock
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedService.materials.map((mat, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 bg-navy-deep border border-navy-border text-[10px] text-slate-300 rounded-md font-mono uppercase"
                        >
                          {mat}
                        </span>
                      ))}
                    </div>

                    <div className="pt-3 border-t border-navy-border/40 mt-3">
                      <span className="font-display text-[10px] font-bold uppercase text-slate-500 tracking-wider block mb-1">
                        Standards &amp; Compliance
                      </span>
                      <p className="text-[10px] font-mono text-copper leading-tight">
                        {selectedService.compliance}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="p-4 bg-navy-deep border-t border-navy-border flex flex-wrap justify-end gap-3">
                <button
                  type="button"
                  onClick={() => {
                    const targetPath = selectedService.path;
                    setSelectedService(null);
                    navigate(targetPath);
                  }}
                  className="btn-outline !px-4 !py-2 text-xs"
                >
                  Full Service Page
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedService(null);
                    navigate("/contact");
                  }}
                  className="btn-primary !px-4 !py-2 text-xs"
                >
                  Book Assessment
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
