import { Link } from "react-router-dom";
import { Shield, Hammer, HardHat, Compass } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

interface AboutProps {
  ctaTo?: string;
  ctaLabel?: string;
}

export default function About({
  ctaTo = "/about",
  ctaLabel = "MORE ABOUT JG ROOFING",
}: AboutProps) {
  const strengths = [
    {
      icon: <Shield className="w-5 h-5 text-copper" />,
      title: "STRUCTURAL RIGOR",
      description:
        "Counter-battened framing, high-gauge lead flashings, and NSAI-compliant membranes designed to outlive weather extremes.",
    },
    {
      icon: <Hammer className="w-5 h-5 text-copper" />,
      title: "TRADITIONAL MASTERY",
      description:
        "Directly employed Dublin slaters with generational knowledge in Welsh slate, Killaloe, and complex copper valley details.",
    },
    {
      icon: <HardHat className="w-5 h-5 text-copper" />,
      title: "DIRECT TRADESMEN",
      description:
        "No sub-contracting layers or third-party handoffs. All projects executed directly by our vetted, insured crews.",
    },
    {
      icon: <Compass className="w-5 h-5 text-copper" />,
      title: "FORENSIC ASSESSMENT",
      description:
        "Detailed moisture-trap and timber health checks before proposing any tile or felt intervention.",
    },
  ];

  return (
    <section
      id="about"
      className="scroll-mt-24 py-24 bg-warm-offwhite border-t border-b border-slate-200 text-slate-800 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <ScrollReveal direction="down" delay={0.05} distance={20}>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-copper" />
                <span className="font-display text-xs font-bold text-copper uppercase tracking-widest">
                  ABOUT JG ROOFING LTD
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.12} distance={38}>
              <h2 className="font-display text-3xl sm:text-4xl text-navy-deep font-extrabold uppercase tracking-tight leading-tight">
                EXPERIENCED ROOFING CONTRACTORS SERVING DUBLIN
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.18} distance={32}>
              <p className="font-body text-slate-600 text-sm sm:text-base leading-relaxed">
                With decades of combined structural roofing mastery across Dublin, JG Roofing Ltd specializes in restoring period slate roofs, installing high-specification pitched tiles, and engineering weatherproof lead and membrane details. We combine traditional craft with rigorous Irish and British building standards.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              {strengths.map((item, idx) => {
                const dir = idx % 2 === 0 ? "left" : "right";
                return (
                  <ScrollReveal
                    key={idx}
                    direction={dir}
                    delay={0.12 + idx * 0.08}
                    distance={24}
                  >
                    <div className="flex items-start gap-3.5 group">
                      <div className="p-2.5 bg-slate-100 rounded-lg border border-slate-200 shrink-0 group-hover:border-copper/40 group-hover:bg-copper/5 transition-colors">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-display text-xs font-bold text-navy-deep uppercase tracking-wider mb-1">
                          {item.title}
                        </h3>
                        <p className="font-body text-xs text-slate-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>

            <ScrollReveal direction="up" delay={0.35} distance={24}>
              <div className="pt-2">
                <Link to={ctaTo} className="btn-primary inline-flex items-center gap-2">
                  <span>{ctaLabel}</span>
                  <span>→</span>
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-6 relative">
            <ScrollReveal direction="right" delay={0.2} distance={40}>
              <div className="relative overflow-hidden rounded-xl border border-slate-200 shadow-xl bg-navy-deep group">
                <img
                  src="/assets/images/about-construction-slate.webp"
                  alt="Roofing construction craftsmanship hand-fitting natural slate tiles on timber batten in Dublin"
                  width={734}
                  height={564}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto aspect-[734/564] object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                />

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

            <ScrollReveal
              direction="up"
              delay={0.4}
              distance={30}
              className="absolute -bottom-4 -left-4 hidden sm:block"
            >
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
