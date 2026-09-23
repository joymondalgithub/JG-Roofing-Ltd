import { ScrollReveal } from "./ScrollReveal";

export default function RepairVsReplace() {
  const steps = [
    {
      num: "01",
      title: "STRUCTURAL ASSESSMENT",
      desc: "Detailed inspection of roof pitch, timber trusses, ridge boards, and purlins to pinpoint internal damp or deflection."
    },
    {
      num: "02",
      title: "PREMIUM GRADE TIMBERS",
      desc: "Treated counter-battens ensuring continuous airflow underneath tiles, eliminating condensation build-up."
    },
    {
      num: "03",
      title: "BREATHABLE MEMBRANES",
      desc: "High-permeability weather barriers that let moisture escape while blocking external wind-driven rain and snow."
    },
    {
      num: "04",
      title: "DRY-FIX INSTALLATION",
      desc: "Mechanically secured ridge and verge systems that eliminate perished mortar and periodic maintenance."
    }
  ];

  return (
    <section id="repair-vs-replace" className="py-24 bg-warm-offwhite border-t border-b border-slate-200 text-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Premium numbered steps with multi-directional text animations */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="overflow-hidden">
              <ScrollReveal direction="down" delay={0.05} distance={18}>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-copper" />
                  <span className="font-display text-xs font-bold text-copper uppercase tracking-widest">
                    TECHNICAL DISCIPLINE
                  </span>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="left" delay={0.12} distance={38}>
                <h2 className="font-display text-3xl sm:text-4xl text-navy-deep font-extrabold uppercase tracking-tight leading-tight mt-2">
                  A TECHNICAL APPROACH.<br />A LASTING ROOF.
                </h2>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={0.18} distance={32}>
                <p className="font-body text-slate-600 text-sm sm:text-base leading-relaxed mt-4">
                  At JG Roofing Ltd, we believe a roof should never be a quick fix. We combine modern technical engineering with hand-crafted heritage skills to deliver an uncompromised building envelope.
                </p>
              </ScrollReveal>
            </div>

            {/* 4 Steps List with alternating left and right scroll reveals */}
            <div className="space-y-6 mt-4">
              {steps.map((step, idx) => {
                const dir = idx % 2 === 0 ? "left" : "right";
                return (
                  <ScrollReveal key={step.num} direction={dir} delay={0.1 + idx * 0.08} distance={26}>
                    <div className="flex gap-4 items-start group">
                      <div className="font-display text-xl sm:text-2xl font-black text-copper shrink-0 pt-0.5 select-none">
                        {step.num}
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-display text-base font-bold text-navy-deep uppercase tracking-wide group-hover:text-copper transition-colors">
                          {step.title}
                        </h3>
                        <p className="font-body text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>

          {/* Right Column: Large premium roofing image entering from Right */}
          <div className="lg:col-span-6">
            <ScrollReveal direction="right" delay={0.2} distance={42}>
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl aspect-[4/3] group bg-navy-deep">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQFKeUzW8MMetwd2JES44f9n9fpnpgBdAmJ2TdhOLgJHXMyGYsN83_P6AnttG7XinJX3abyKQKYKo-XJ8m0CLTk4Tu2NMv0rNgjISgob3ETQEHC-tHNwW8-6d6hbmI33_Sg56xdat05kEZejgUq46XSQ8GyJGnEGOCjr4lDVrG7sII5vK1k1p1d-e4iMDMhP20mP3onJDBrW7410NBw_qbywnwh_LyTbLvXUERQKGZjckmcb7kGSoIc9_w2T-IIIgR=s0"
                  alt="Technical roof underlay and breathable membrane installation"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent"></div>
                
                {/* Floating Quality Standard Box: slides up from bottom */}
                <ScrollReveal direction="up" delay={0.35} distance={24} className="absolute bottom-6 left-6 right-6">
                  <div className="p-4 bg-navy-deep/95 border border-navy-border rounded-xl backdrop-blur-md text-white flex items-center justify-between gap-4">
                    <div className="space-y-0.5">
                      <span className="font-display text-[9px] font-bold text-copper uppercase tracking-wider block">
                        DUBLIN SAFETY &amp; QUALITY STANDARD
                      </span>
                      <span className="font-display text-xs font-bold text-white uppercase tracking-tight block">
                        BS 5534 Counter-Battened Assembly
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-copper px-2.5 py-1 text-[9px] font-display uppercase font-bold tracking-wider text-white rounded">
                      Certified Roof
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
