import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-[92vh] flex items-center overflow-hidden bg-navy-deep pt-20"
    >
      {/* Background image & gradient overlays (strictly non-blocking) */}
      <div
        className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        <img
          src="/assets/images/hero-slate-roofing.webp"
          alt="JG Roofing Ltd natural slate roofing craftsmanship in Dublin"
          width={1672}
          height={941}
          className="w-full h-full object-cover object-[center_35%]"
          loading="eager"
          decoding="async"
          referrerPolicy="no-referrer"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/20 z-10 pointer-events-none" />

        {/* Vignette gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent z-[15] pointer-events-none" />

        {/* Bottom fade scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-transparent opacity-60 z-[15] pointer-events-none" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 flex items-center w-full">
        <div className="max-w-3xl">
          {/* Eyebrow Label */}
          <ScrollReveal direction="down" delay={0.1} distance={20}>
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 bg-copper border border-copper/30 px-3 py-1 text-[11px] font-display uppercase text-white tracking-widest rounded font-bold shadow-md">
                ROOFING CONTRACTORS IN DUBLIN
              </span>
              <Link
                to="/about#reviews"
                className="inline-flex items-center gap-1.5 bg-navy-slate/90 hover:bg-navy-border border border-navy-border px-3 py-1 text-[11px] font-medium text-slate-300 rounded shadow-md transition-colors cursor-pointer"
              >
                <span className="text-amber-400">★★★★★</span>
                <span className="font-bold text-white">4.9</span>
                <span className="text-slate-400">(48 Google Reviews)</span>
              </Link>
            </div>
          </ScrollReveal>

          {/* Main H1 */}
          <ScrollReveal direction="left" delay={0.2} distance={45} duration={0.65}>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white font-extrabold uppercase tracking-tight leading-[1.05] mb-6">
              ARCHITECTURAL PRECISION.
              <br />
              <span className="text-copper">UNCOMPROMISING</span>
              <br />
              ROOFING STANDARDS.
            </h1>
          </ScrollReveal>

          {/* Subtitle */}
          <ScrollReveal direction="right" delay={0.3} distance={40} duration={0.65}>
            <p className="font-body text-base sm:text-lg text-slate-200 max-w-2xl mb-8 leading-relaxed">
              Specialists in traditional slate roofing, complete structural tile replacements, architectural leadwork, and forensic leak remediation. Executed with technical discipline, graded timber counter-battens, and hand-finished craftsmanship.
            </p>
          </ScrollReveal>

          {/* Primary CTAs */}
          <ScrollReveal direction="up" delay={0.4} distance={28}>
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <Link to="/contact" className="btn-primary !px-6 !py-4">
                <span>REQUEST AN ESTIMATE</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </Link>

              <Link to="/projects" className="btn-secondary !px-6 !py-4">
                EXPLORE OUR WORK
              </Link>
            </div>
          </ScrollReveal>

          {/* Trust Row */}
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
