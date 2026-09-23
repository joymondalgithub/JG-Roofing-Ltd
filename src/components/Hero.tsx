import React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export default function Hero() {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const lenis = (window as any).__lenis;
    const element = document.querySelector(targetId);
    if (element) {
      if (lenis) {
        lenis.scrollTo(element as HTMLElement, { offset: -76, duration: 1 });
      } else {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  };

  return (
    <section className="relative w-full min-h-[92vh] flex items-center overflow-hidden bg-navy-deep pt-20">
      {/* Background image & gradient overlays */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCw475GXFyYO1HWWwzt_74rIX2jFRmUBPSkhz7LBcEvgGzUtGexkc-3Ive_nUQaYQuRT5qjgrTZe4gDnLhblMHX5Udfo7F1Ba_IGT5ml69VBNB5JKMRQR_ewURFXK4dwBTPXcGomcMj1qzLVfwfQxYkSrbySoLypYyQimGsS9utHDTxl3Yka0rcP1kqSWu6S8Hkq0vA8HtfppikEOAsfE_QEJzl8xxhkZiRDnWsg0spREdsZw78YFAH4-n3NL4Oe2cT=s0"
          alt="JG Roofing Ltd slate roofing craftsmanship"
          className="w-full h-full object-cover object-[center_35%]"
          loading="eager"
        />
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/20 z-10" />
        
        {/* Vignette gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent z-15" />
        
        {/* Bottom fade scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-transparent opacity-60 z-15" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 flex items-center w-full">
        <div className="max-w-3xl">
          
          {/* Eyebrow Label: Top to Bottom scroll animation */}
          <ScrollReveal direction="down" delay={0.1} distance={20}>
            <div className="mb-4">
              <span className="inline-flex items-center gap-1.5 bg-copper border border-copper/30 px-3 py-1 text-[11px] font-display uppercase text-white tracking-widest rounded font-bold shadow-md">
                ROOFING CONTRACTORS IN DUBLIN
              </span>
            </div>
          </ScrollReveal>

          {/* Title: Left to Right scroll animation */}
          <ScrollReveal direction="left" delay={0.2} distance={45} duration={0.65}>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white font-extrabold uppercase tracking-tight leading-[1.05] mb-6">
              ARCHITECTURAL PRECISION.<br />
              <span className="text-copper">UNCOMPROMISING</span><br />
              ROOFING STANDARDS.
            </h1>
          </ScrollReveal>

          {/* Subparagraph: Right to Left scroll animation */}
          <ScrollReveal direction="right" delay={0.3} distance={40} duration={0.65}>
            <p className="font-body text-base sm:text-lg text-slate-200 max-w-2xl mb-8 leading-relaxed">
              Specialists in traditional slate roofing, complete structural tile replacements, architectural leadwork, and forensic leak remediation. Executed with technical discipline, graded timber counter-battens, and hand-finished craftsmanship.
            </p>
          </ScrollReveal>

          {/* Buttons: Bottom to Top scroll animation */}
          <ScrollReveal direction="up" delay={0.4} distance={28}>
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="#estimator"
                onClick={(e) => handleScrollTo(e, "#estimator")}
                className="btn-primary !px-6 !py-4"
              >
                <span>REQUEST AN ESTIMATE</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </a>
              
              <a
                href="#projects"
                onClick={(e) => handleScrollTo(e, "#projects")}
                className="btn-secondary !px-6 !py-4"
              >
                EXPLORE OUR WORK
              </a>
            </div>
          </ScrollReveal>

          {/* Trust Row: Multi-directional Staggered animations */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl pt-6 border-t border-navy-border/80">
            <ScrollReveal direction="left" delay={0.45} distance={20}>
              <div className="flex items-center gap-2 text-white">
                <CheckCircle2 className="w-4 h-4 text-copper shrink-0" />
                <span className="font-display text-[10px] sm:text-xs font-bold tracking-wider uppercase text-slate-300">
                  FULLY INSURED
                </span>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={0.5} distance={20}>
              <div className="flex items-center gap-2 text-white">
                <CheckCircle2 className="w-4 h-4 text-copper shrink-0" />
                <span className="font-display text-[10px] sm:text-xs font-bold tracking-wider uppercase text-slate-300">
                  QUALITY WORKMANSHIP
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.55} distance={20}>
              <div className="flex items-center gap-2 text-white">
                <CheckCircle2 className="w-4 h-4 text-copper shrink-0" />
                <span className="font-display text-[10px] sm:text-xs font-bold tracking-wider uppercase text-slate-300">
                  RESIDENTIAL &amp; COMMERCIAL
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.6} distance={20}>
              <div className="flex items-center gap-2 text-white">
                <CheckCircle2 className="w-4 h-4 text-copper shrink-0" />
                <span className="font-display text-[10px] sm:text-xs font-bold tracking-wider uppercase text-slate-300">
                  DUBLIN &amp; SURROUNDINGS
                </span>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
