import { Shield, Hammer, HardHat, Compass } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export default function About() {
  const strengths = [
    {
      icon: <Shield className="w-5 h-5 text-copper" />,
      title: "STRUCTURAL RIGOR",
      description: "Counter-battened framing, high-gauge lead flashings, and NSAI-compliant membranes designed to outlive weather extremes."
    },
    {
      icon: <Hammer className="w-5 h-5 text-copper" />,
      title: "TRADITIONAL MASTERY",
      description: "Directly employed Dublin slaters with generational knowledge in Welsh slate, Killaloe, and complex copper valley details."
    },
    {
      icon: <HardHat className="w-5 h-5 text-copper" />,
      title: "DIRECT TRADESMEN",
      description: "No sub-contracting layers or third-party handoffs. All projects executed directly by our vetted, insured crews."
    },
    {
      icon: <Compass className="w-5 h-5 text-copper" />,
      title: "FORENSIC ASSESSMENT",
      description: "Detailed moisture-trap and timber health checks before proposing any tile or felt intervention."
    }
  ];

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
    <section id="about" className="py-24 bg-warm-offwhite border-t border-b border-slate-200 text-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Content & Narrative with Multi-Directional Text Scroll Animations */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            {/* Top to Bottom */}
            <ScrollReveal direction="down" delay={0.05} distance={20}>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-copper" />
                <span className="font-display text-xs font-bold text-copper uppercase tracking-widest">
                  ABOUT JG ROOFING LTD
                </span>
              </div>
            </ScrollReveal>
            
            {/* Left to Right */}
            <ScrollReveal direction="left" delay={0.12} distance={38}>
              <h2 className="font-display text-3xl sm:text-4xl text-navy-deep font-extrabold uppercase tracking-tight leading-tight">
                BUILT TO PROTECT WHAT MATTERS.
              </h2>
            </ScrollReveal>
            
            {/* Right to Left */}
            <ScrollReveal direction="right" delay={0.18} distance={32}>
              <p className="font-body text-slate-600 leading-relaxed text-sm sm:text-base">
                At JG Roofing Ltd, we treat your roof not merely as a decorative cap, but as the primary architectural defense barrier of your property. Every flashing step, slate course, and ridge join is calculated to endure high-uplift wind patterns, seasonal frost cycles, and torrential downpours across Dublin.
              </p>
            </ScrollReveal>
            
            {/* Left to Right */}
            <ScrollReveal direction="left" delay={0.24} distance={30}>
              <p className="font-body text-slate-600 leading-relaxed text-sm">
                We specialize in deep structural overhauls, traditional slate replacements, and detailed lead valleys. By matching authentic historical trade skills with the latest breathable membrane products and pressure-treated battening, our roofs don't just shield—they breathe, preventing timber rot and damp stagnation.
              </p>
            </ScrollReveal>

            {/* 4 Cards: Alternating Left-to-Right and Right-to-Left */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              {strengths.map((str, idx) => {
                const cardDir = idx % 2 === 0 ? "left" : "right";
                return (
                  <ScrollReveal key={idx} direction={cardDir} delay={0.15 + idx * 0.08} distance={28}>
                    <div 
                      className="bg-white p-5 border border-slate-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex flex-col gap-3 group hover:border-copper/35 h-full"
                    >
                      <div className="w-9 h-9 rounded bg-slate-50 flex items-center justify-center transition-colors group-hover:bg-copper/10">
                        {str.icon}
                      </div>
                      <div>
                        <h3 className="font-display text-xs font-bold text-navy-deep uppercase tracking-wider mb-1">
                          {str.title}
                        </h3>
                        <p className="font-body text-[11px] text-slate-600 leading-normal">
                          {str.description}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>

            {/* Simple CTA: Bottom to Top */}
            <ScrollReveal direction="up" delay={0.35} distance={24}>
              <div className="pt-2">
                <a
                  href="#estimator"
                  onClick={(e) => handleScrollTo(e, "#estimator")}
                  className="btn-primary inline-flex items-center gap-2"
                >
                  <span>LEARN MORE</span>
                  <span>→</span>
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column - Premium Imagery with Right-to-Left entrance */}
          <div className="lg:col-span-6 relative">
            <ScrollReveal direction="right" delay={0.2} distance={40}>
              <div className="relative overflow-hidden rounded-xl border border-slate-200 shadow-xl bg-navy-deep group">
                <img
                  src="/assets/images/about-construction-slate.webp"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = '/assets/images/about-construction-slate.jpg';
                  }}
                  alt="Roofing construction craftsmanship hand-fitting natural slate tiles on timber batten"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto aspect-[734/564] object-cover object-center transition-transform duration-750 group-hover:scale-[1.02]"
                />
                
                {/* Bottom metadata strip */}
                <div className="p-4 bg-navy-deep text-white flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-t border-navy-border">
                  <div>
                    <span className="font-display text-[10px] text-copper uppercase tracking-wider font-semibold block">
                      CURRENT ON-SITE PERFORMANCE
                    </span>
                    <span className="font-display text-xs font-bold text-white uppercase tracking-tight">
                      Natural Slate Hand-Nailing &amp; Grading
                    </span>
                  </div>
                  <div className="px-3 py-1 bg-navy-slate border border-navy-border text-[9px] font-mono text-slate-300 rounded uppercase">
                    Approved BS 5534 Standard
                  </div>
                </div>
              </div>
            </ScrollReveal>
            
            {/* Corner Accent badge: Bottom to Top */}
            <ScrollReveal direction="up" delay={0.4} distance={30} className="absolute -bottom-4 -left-4 hidden sm:block">
              <div className="bg-copper text-white p-5 shadow-2xl rounded-lg border border-copper-hover max-w-[200px]">
                <span className="font-display text-2xl font-black block tracking-tight">100%</span>
                <span className="font-display text-[10px] uppercase font-bold tracking-wider block mt-1">
                  Hand-Graded Fastening
                </span>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
