import { MapPin, ArrowRight } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export default function ServiceAreas() {
  const dublinAreas = [
    "Dublin City & Docklands",
    "Dublin 4 & Ballsbridge",
    "Dublin 6 & Ranelagh",
    "Dublin 14 & Dundrum",
    "Dun Laoghaire & Blackrock",
    "Dalkey & Killiney",
    "Malahide & Portmarnock",
    "Howth & Sutton",
    "Castleknock & Blanchardstown",
    "Lucan & Leixlip",
    "Bray & North Wicklow",
    "Swords & North County Dublin"
  ];

  return (
    <section id="service-areas" className="py-24 bg-warm-offwhite border-t border-b border-slate-200 text-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT SIDE: Clean Narrative & Service List with multi-directional scroll reveals */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="overflow-hidden">
              <ScrollReveal direction="down" delay={0.05} distance={18}>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-copper" />
                  <span className="font-display text-xs font-bold text-copper uppercase tracking-widest">
                    AREAS WE SERVE
                  </span>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="left" delay={0.12} distance={38}>
                <h2 className="font-display text-3xl sm:text-4xl text-navy-deep font-extrabold uppercase tracking-tight leading-tight mt-2">
                  Roofing Services Across Dublin &amp; Surrounding Areas
                </h2>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={0.18} distance={30}>
                <p className="font-body text-slate-600 text-sm sm:text-base leading-relaxed mt-3">
                  JG Roofing Ltd provides premium residential and commercial roofing services across the Greater Dublin area. From historic natural slate restorations in Dublin 4 and Dublin 6 to modern high-performance flat roof replacements and rapid leak detection in surrounding towns, our directly employed craftsmen deliver absolute structural integrity and certified workmanship.
                </p>
              </ScrollReveal>
            </div>

            {/* Clean Grid of Dublin Service Areas with alternating Left and Right reveals */}
            <div className="grid grid-cols-2 gap-y-3 gap-x-4 pt-2">
              {dublinAreas.map((area, idx) => {
                const dir = idx % 2 === 0 ? "left" : "right";
                return (
                  <ScrollReveal key={idx} direction={dir} delay={0.1 + (idx % 6) * 0.05} distance={20}>
                    <div className="flex items-center gap-2.5 text-slate-700">
                      <MapPin className="w-4 h-4 text-copper shrink-0" />
                      <span className="font-display text-sm font-semibold tracking-wide uppercase text-navy-deep">
                        {area}
                      </span>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>

          {/* RIGHT SIDE: Photo with Right-to-Left entrance */}
          <div className="lg:col-span-6">
            <ScrollReveal direction="right" delay={0.2} distance={42}>
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl aspect-[4/3] group bg-navy-deep">
                
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzUdEY6dKd9qawhdVuKASrQ4NpjYHFbv1Add8cn9Uha8d7xPXmu_KLvVKGe6_KOLFJXur7mJAnOzEW6VC5sjokbIZGC480XcYiK8asLtNIdph1WadcXMCZoNbElz8oT3Yup8EfMh2SMhyjFN54EfFQcTSgv2O693VBKq_O_6c0g5wMZq_B01sFEXC2HfSrjXw-LtLouhJPxryaoiRpuccgTkVwOsJVP8NnZjPUiUsuo7NjQ78mux-GbztbMb-CCZKz=s0"
                  alt="Professionally maintained slate residential roof in Dublin Irish architectural style"
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-[1200ms] group-hover:scale-105"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>

                {/* Float CTA Content Area: Bottom to Top */}
                <ScrollReveal direction="up" delay={0.35} distance={24} className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="space-y-0.5">
                      <span className="font-display text-[10px] font-bold text-copper uppercase tracking-wider block">
                        FREE ONSITE SURVEYS
                      </span>
                      <span className="font-display text-sm font-bold text-white uppercase tracking-wide block">
                        Need a Quote in Dublin?
                      </span>
                    </div>

                    <a
                      href="#estimator"
                      className="btn-primary !px-5 !py-3 flex items-center justify-center gap-2"
                    >
                      <span>Request an Estimate</span>
                      <ArrowRight className="w-3.5 h-3.5 text-white" />
                    </a>
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
