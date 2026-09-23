import { ShieldCheck, HardHat, Layers, Award } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export default function WhyChooseUs() {
  const pillars = [
    {
      num: "01",
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "STRUCTURAL LONGEVITY",
      description: "Our roofs are built with heavy-gauge battens, stainless/copper fixings, and high-performance weatherproofing designed to withstand decades of harsh Irish weather."
    },
    {
      num: "02",
      icon: <HardHat className="w-5 h-5" />,
      title: "DEDICATED LOCAL CRAFTSMEN",
      description: "All roofing work is executed directly by our experienced Dublin-based team. We never subcontract your home's safety to third-party general handymen."
    },
    {
      num: "03",
      icon: <Layers className="w-5 h-5" />,
      title: "PREMIUM COMPONENT SPECIFICATION",
      description: "We strictly install NSAI-approved breathable membranes, dry-ridge ventilation systems, and premium natural slates or architectural tiles."
    },
    {
      num: "04",
      icon: <Award className="w-5 h-5" />,
      title: "TRANSPARENT FIXED PRICING",
      description: "Clear itemized proposals with zero hidden extras. We provide comprehensive photo documentation throughout every stage of your installation."
    }
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-navy-deep text-slate-300 border-t border-b border-navy-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title with Left-to-Right and Right-to-Left animations */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 overflow-hidden">
          <ScrollReveal direction="left" delay={0.05} distance={40}>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-copper" />
                <span className="font-display text-xs font-bold text-copper uppercase tracking-widest">
                  TRUST &amp; INTEGRITY
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl text-white font-extrabold uppercase tracking-tight">
                WHY DUBLIN HOMEOWNERS CHOOSE JG ROOFING
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.15} distance={35}>
            <p className="font-body text-slate-400 max-w-md text-sm leading-relaxed">
              No exaggerated marketing jargon or generic badges. We build Dublin roofing systems designed to stand for generations through documented materials and skilled craftsmanship.
            </p>
          </ScrollReveal>
        </div>

        {/* Pillars Grid with Left and Right scroll animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {pillars.map((pillar, idx) => {
            const dir = idx % 2 === 0 ? "left" : "right";
            return (
              <ScrollReveal key={pillar.num} direction={dir} delay={0.1 + idx * 0.08} distance={32}>
                <div 
                  className="bg-navy-slate p-8 rounded-xl border border-navy-border hover:border-copper/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 h-full"
                >
                  <div className="space-y-4">
                    {/* Header row inside card */}
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 bg-navy-deep text-copper rounded-lg flex items-center justify-center group-hover:bg-copper group-hover:text-white transition-colors">
                        {pillar.icon}
                      </div>
                      <span className="font-mono text-sm font-bold text-copper/50 group-hover:text-copper transition-colors tabular-nums">
                        {pillar.num}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-display text-base font-bold text-white uppercase tracking-wider">
                        {pillar.title}
                      </h3>
                      <p className="font-body text-xs sm:text-sm text-slate-400 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>

                  {/* Verified Quality footer */}
                  <div className="pt-4 mt-6 border-t border-navy-border/40 flex items-center gap-2 text-[10px] text-slate-500 font-display uppercase tracking-widest">
                    <span>Verified Integrity</span>
                    <span>·</span>
                    <span>Standard Compliant</span>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
