import { useState } from "react";
import { ArrowLeftRight, ShieldCheck } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export default function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);

  const phases = [
    {
      num: "01",
      title: "Strip & Timber Assessment",
      desc: "Complete removal of compromised tiles. Inspection of trusses for deflection, dry rot, or historical water tracking."
    },
    {
      num: "02",
      title: "Vapor Barrier & Battening",
      desc: "High-performance breathable underlay secured with preservative-treated, factory-graded BS 5534 softwood laths."
    },
    {
      num: "03",
      title: "Precision Fastening",
      desc: "Hand-aligned slate courses double-lapped and dual-fixed with premium heavy copper clout nails."
    },
    {
      num: "04",
      title: "Dry Ventilation Capping",
      desc: "Mechanical dry-ridge ventilation and mortarless verge cappings to stop perimeter cracking permanently."
    }
  ];

  return (
    <section id="before-after" className="scroll-mt-24 py-24 bg-navy-slate text-slate-300 border-t border-navy-border overflow-x-clip">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Block with Multi-directional Scroll Animation */}
        <div className="flex flex-col gap-2 mb-12 max-w-3xl overflow-hidden">
          <ScrollReveal direction="down" delay={0.05} distance={18}>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-copper" />
              <span className="font-display text-xs font-bold text-copper uppercase tracking-widest">
                VISUAL DEMONSTRATION
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={0.12} distance={38}>
            <h2 className="font-display text-3xl sm:text-4xl text-white font-extrabold uppercase tracking-tight">
              SEE THE DIFFERENCE.
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.18} distance={30}>
            <p className="font-body text-slate-400 text-sm mt-1">
              Examine the tangible difference between an aging, moss-congested porous roof and our fully ventilated, dry-fixed weather envelope. Drag the slider below to inspect.
            </p>
          </ScrollReveal>
        </div>

        {/* Interactive Compare Slider Container */}
        <ScrollReveal direction="up" delay={0.15} distance={35}>
          <div className="relative w-full max-w-5xl mx-auto overflow-hidden rounded-xl border border-navy-border shadow-2xl bg-navy-deep">
            <div className="relative h-[300px] sm:h-[450px] md:h-[550px] w-full select-none overflow-hidden touch-pan-y">

              {/* Base Layer: AFTER (New Anthracite Roof) */}
              <img
                src="/assets/images/compare-after.webp"
                alt="After restoration: newly installed dry-fixed anthracite slate roof with clean ridge and leadwork"
                width={680}
                height={768}
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
              />

              {/* Top Clipped Layer: BEFORE (Failing Mossy Roof) */}
              <div
                className="absolute inset-0 overflow-hidden pointer-events-none"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <img
                  src="/assets/images/compare-before.webp"
                  alt="Before restoration: aging moss-congested porous roof with failing battens and weathered chimney"
                  width={680}
                  height={768}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
                />
              </div>

              {/* Top Status Labels (responsive so they never overlap on mobile) */}
              <div
                className={`absolute top-3 sm:top-4 left-3 sm:left-4 z-20 bg-navy-deep/90 backdrop-blur-md px-2.5 sm:px-3 py-1.5 rounded text-[9px] sm:text-[10px] font-display uppercase tracking-wider border border-red-500/40 shadow flex items-center gap-1.5 sm:gap-2 max-w-[44%] transition-opacity duration-200 pointer-events-none ${
                  sliderPosition < 18 ? "opacity-0" : "opacity-100"
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-red-500 shrink-0" />
                <span className="text-slate-300 truncate">
                  <strong>Before:</strong> <span className="hidden sm:inline">Failing Battens &amp; Porous Tiles</span><span className="sm:hidden">Aging Roof</span>
                </span>
              </div>

              <div
                className={`absolute top-3 sm:top-4 right-3 sm:right-4 z-20 bg-navy-deep/90 backdrop-blur-md px-2.5 sm:px-3 py-1.5 rounded text-[9px] sm:text-[10px] font-display uppercase tracking-wider border border-copper/40 shadow flex items-center gap-1.5 sm:gap-2 max-w-[44%] transition-opacity duration-200 pointer-events-none ${
                  sliderPosition > 82 ? "opacity-0" : "opacity-100"
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-copper shrink-0" />
                <span className="text-slate-300 truncate">
                  <strong>After:</strong> <span className="hidden sm:inline">New Underlay &amp; Anthracite Profiles</span><span className="sm:hidden">New Slate</span>
                </span>
              </div>

              {/* Drag Handle UI Divider overlay */}
              <div
                className="absolute top-0 bottom-0 z-30 w-0.5 sm:w-1 bg-copper pointer-events-none shadow-[0_0_12px_rgba(217,119,54,0.8)]"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-copper border-2 border-white flex items-center justify-center shadow-xl">
                  <ArrowLeftRight className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Big Bold Section Label Tags overlay */}
              <div
                className={`absolute left-4 sm:left-8 bottom-4 sm:bottom-8 pointer-events-none select-none z-20 transition-opacity duration-200 ${
                  sliderPosition < 22 ? "opacity-0" : "opacity-100"
                }`}
              >
                <div className="px-3 py-1 sm:px-5 sm:py-2 rounded-lg bg-navy-deep/90 backdrop-blur-md border border-white/10 shadow-2xl">
                  <span className="font-display text-xs sm:text-xl md:text-2xl font-black uppercase tracking-widest text-slate-300">
                    BEFORE
                  </span>
                </div>
              </div>

              <div
                className={`absolute right-4 sm:right-8 bottom-4 sm:bottom-8 pointer-events-none select-none z-20 transition-opacity duration-200 ${
                  sliderPosition > 78 ? "opacity-0" : "opacity-100"
                }`}
              >
                <div className="px-3 py-1 sm:px-5 sm:py-2 rounded-lg bg-navy-deep/90 backdrop-blur-md border border-copper/35 shadow-2xl">
                  <span className="font-display text-xs sm:text-xl md:text-2xl font-black uppercase tracking-widest text-copper">
                    AFTER
                  </span>
                </div>
              </div>

              {/* Accessible Interactive Range Input */}
              <input
                type="range"
                min={0}
                max={100}
                value={sliderPosition}
                onChange={(e) => setSliderPosition(Number(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-40"
                aria-label="Compare before and after roof restoration"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={sliderPosition}
              />
            </div>

            {/* Underlay Info Ribbon */}
            <div className="p-4 bg-navy-deep border-t border-navy-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-display text-center sm:text-left">
              <div className="flex items-center gap-2 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-copper shrink-0" />
                <span>Tested to endure sustained 120mph gale-uplift wind patterns.</span>
              </div>
              <span className="text-copper font-bold uppercase tracking-wider shrink-0">
                15-Year Guaranteed Service Protection
              </span>
            </div>
          </div>
        </ScrollReveal>

        {/* 4-Phase Timeline Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 max-w-5xl mx-auto">
          {phases.map((ph, idx) => {
            const directions: ("left" | "down" | "up" | "right")[] = ["left", "down", "up", "right"];
            return (
              <ScrollReveal
                key={ph.num}
                direction={directions[idx % 4]}
                delay={0.1 + idx * 0.08}
                distance={28}
              >
                <div className="border-l-2 border-copper/40 hover:border-copper pl-4 transition-all duration-300 flex flex-col gap-1.5 h-full">
                  <span className="font-display text-xs font-bold text-copper tracking-widest uppercase">
                    Phase {ph.num}
                  </span>
                  <h3 className="font-display text-sm font-bold text-white uppercase tracking-wider">
                    {ph.title}
                  </h3>
                  <p className="font-body text-[11px] text-slate-400 leading-relaxed">
                    {ph.desc}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
