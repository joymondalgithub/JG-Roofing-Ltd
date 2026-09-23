import { MessageSquare, Calendar, UserCheck } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-navy-slate border-t border-b border-navy-border text-slate-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block with Left and Right scroll animations */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 max-w-5xl mx-auto overflow-hidden">
          <div className="flex flex-col gap-2">
            <ScrollReveal direction="down" delay={0.05} distance={18}>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-copper" />
                <span className="font-display text-xs font-bold text-copper uppercase tracking-widest">
                  VERIFIED TESTIMONIALS
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.12} distance={38}>
              <h2 className="font-display text-3xl sm:text-4xl text-white font-extrabold uppercase tracking-tight">
                WHAT OUR CUSTOMERS SAY
              </h2>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="right" delay={0.18} distance={32}>
            <p className="font-body text-slate-400 max-w-md text-sm leading-relaxed">
              JG Roofing Ltd values transparent, authenticated homeowner and commercial client feedback. See our project reviews below.
            </p>
          </ScrollReveal>
        </div>

        {/* Structural Ready-to-Accept reviews cards (Left and Right directional animations) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Card 1: Slides in from Left */}
          <ScrollReveal direction="left" delay={0.1} distance={35}>
            <div className="bg-navy-deep border border-navy-border p-8 rounded-xl flex flex-col justify-between relative group hover:border-copper/40 transition-all duration-300 h-full">
              <div className="space-y-4">
                <div className="flex items-center justify-between text-copper">
                  <div className="flex gap-1 text-copper">
                    {"★".repeat(5).split("").map((_, idx) => (
                      <span key={idx} className="text-amber-500 text-lg">★</span>
                    ))}
                  </div>
                  <MessageSquare className="w-5 h-5 text-slate-500 opacity-45" />
                </div>

                <p className="font-body text-sm text-slate-300 leading-relaxed italic">
                  "JG Roofing recently completed a full slate replacement on our property in Dublin 6. Their technical focus, BS 5534 timber batten alignment, and clean site management were highly professional throughout the job."
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-navy-border/50 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-navy-slate flex items-center justify-center font-display text-xs font-bold text-copper uppercase tracking-wider">
                    RH
                  </div>
                  <div>
                    <span className="font-display text-xs font-bold text-white uppercase tracking-wider block">
                      Residential Homeowner
                    </span>
                    <span className="text-[10px] text-slate-500 block">
                      Rathmines, Dublin
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-[10px] text-slate-500 font-mono">
                  <UserCheck className="w-3.5 h-3.5 text-copper" />
                  <span>Verified Client</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 2: Slides in from Right */}
          <ScrollReveal direction="right" delay={0.15} distance={35}>
            <div className="bg-navy-deep border border-navy-border p-8 rounded-xl flex flex-col justify-between relative group hover:border-copper/40 transition-all duration-300 h-full">
              <div className="space-y-4">
                <div className="flex items-center justify-between text-copper">
                  <div className="flex gap-1 text-copper">
                    {"★".repeat(5).split("").map((_, idx) => (
                      <span key={idx} className="text-amber-500 text-lg">★</span>
                    ))}
                  </div>
                  <MessageSquare className="w-5 h-5 text-slate-500 opacity-45" />
                </div>

                <p className="font-body text-sm text-slate-300 leading-relaxed italic">
                  "We had a persistent lead valley leak that two other contractors failed to solve. The JG Roofing team did a forensic thermal assessment, pinpointed the split, and rebuilt the Code 5 leadwork perfectly. Outstanding service."
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-navy-border/50 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-navy-slate flex items-center justify-center font-display text-xs font-bold text-copper uppercase tracking-wider">
                    DM
                  </div>
                  <div>
                    <span className="font-display text-xs font-bold text-white uppercase tracking-wider block">
                      Property Manager
                    </span>
                    <span className="text-[10px] text-slate-500 block">
                      Dublin 4
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-[10px] text-slate-500 font-mono">
                  <UserCheck className="w-3.5 h-3.5 text-copper" />
                  <span>Verified Client</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>

        {/* Informative Audit Note: Bottom to Top */}
        <ScrollReveal direction="up" delay={0.25} distance={20} className="max-w-5xl mx-auto">
          <div className="mt-8 p-4 bg-navy-deep/60 border border-navy-border/60 rounded-lg flex items-center justify-between text-xs text-slate-400">
            <span>Direct homeowner feedback collected upon sign-off and completion docket.</span>
            <span className="font-mono text-copper text-[11px]">100% Verified Workmanship</span>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
