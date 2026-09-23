import { useState } from "react";
import { ArrowLeftRight, HelpCircle, AlertTriangle, ShieldCheck } from "lucide-react";
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
      title: "Dry Ventilation capping",
      desc: "Mechanical dry-ridge ventilation and mortarless verge cappings to stop perimeter cracking permanently."
    }
  ];

  return (
    <section id="before-after" className="py-24 bg-navy-slate text-slate-300 border-t border-navy-border">
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

        {/* Interactive Compare Slider Container with Bottom-to-Top scroll animation */}
        <ScrollReveal direction="up" delay={0.15} distance={35}>
          <div className="relative w-full max-w-5xl mx-auto overflow-hidden rounded-xl border border-navy-border shadow-2xl bg-navy-deep">
            <div className="relative h-[300px] sm:h-[450px] md:h-[550px] w-full select-none overflow-hidden">
              
              {/* Background Image: The Full Compare Image */}
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmKrtKKAXAwVJ03bxFCKgt3p1qF9Q7E6wuwTqx-2vuSsrCtcMnNRRnPtJoGGyFHWxvBxEBO4Rl9LmrDsURAdvTwGOX_xBMCnJ3MIEMt0QXxLYA12JLMisMDjWJ4H8YxwFU52yafXPZE7aYFUv97F07qExEeENde5aaxTm_Uc2PYV03FTs1sGJvI1KCiQv31IE5dm_6eUpCmRWbzJ_e9uozARvJPkbYAQYH-_wGnwFYFvFYHCrOvUc=s0"
                alt="Before and after comparison"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              />

              {/* Static labels inside the container */}
              <div className="absolute top-4 left-4 z-20 bg-navy-deep/90 backdrop-blur-md px-3 py-1.5 rounded text-[10px] font-display uppercase tracking-wider border border-red-500/40 shadow flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500"></span>
                <span className="text-slate-300"><strong>Before:</strong> Failing Battens &amp; Porous Tiles</span>
              </div>

              <div className="absolute top-4 right-4 z-20 bg-navy-deep/90 backdrop-blur-md px-3 py-1.5 rounded text-[10px] font-display uppercase tracking-wider border border-copper/40 shadow flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-copper"></span>
                <span className="text-slate-300"><strong>After:</strong> New Underlay &amp; Anthracite Profiles</span>
              </div>

              {/* Drag Handle UI Divider overlay */}
              <div 
                className="absolute top-0 bottom-0 z-30 w-1 bg-copper pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-copper border-2 border-white flex items-center justify-center shadow-lg">
                  <ArrowLeftRight className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Big Bold Section Label Tags overlay */}
              <div className="absolute left-[20%] bottom-6 md:bottom-8 pointer-events-none select-none z-10">
                <div className="px-3 py-1 sm:px-5 sm:py-2 rounded-lg bg-navy-deep/90 backdrop-blur-md border border-white/10 shadow-2xl">
                  <span className="font-display text-sm sm:text-xl md:text-2xl font-black uppercase tracking-widest text-slate-300">
                    BEFORE
                  </span>
                </div>
              </div>
              
              <div className="absolute right-[20%] bottom-6 md:bottom-8 pointer-events-none select-none z-10">
                <div className="px-3 py-1 sm:px-5 sm:py-2 rounded-lg bg-navy-deep/90 backdrop-blur-md border border-copper/35 shadow-2xl">
                  <span className="font-display text-sm sm:text-xl md:text-2xl font-black uppercase tracking-widest text-copper">
                    AFTER
                  </span>
                </div>
              </div>

              {/* Slider Range Input */}
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={(e) => setSliderPosition(Number(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-40"
                aria-label="Compare roofs slider"
              />
            </div>

            {/* Underlay Info Ribbon */}
            <div className="p-4 bg-navy-deep border-t border-navy-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-display">
              <div className="flex items-center gap-2 text-slate-300">
                <ShieldCheck className="w-4.5 h-4.5 text-copper" />
                <span>Tested to endure sustained 120mph gale-uplift wind patterns.</span>
              </div>
              <span className="text-copper font-bold uppercase tracking-wider">
                15-Year Guaranteed Service Protection
              </span>
            </div>
          </div>
        </ScrollReveal>

        {/* 4-Phase Timeline Grid with 4 distinct scroll directions (left, down, up, right) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 max-w-5xl mx-auto">
          {phases.map((ph, idx) => {
            const directions: ("left" | "down" | "up" | "right")[] = ["left", "down", "up", "right"];
            return (
              <ScrollReveal
                key={idx}
                direction={directions[idx % 4]}
                delay={0.1 + idx * 0.08}
                distance={28}
              >
                <div 
                  className="border-l-2 border-copper/40 hover:border-copper pl-4 transition-all duration-300 flex flex-col gap-1.5 h-full"
                >
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
