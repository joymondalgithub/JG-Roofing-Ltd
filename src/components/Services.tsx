import { useState, useEffect } from "react";
import { 
  Home, Building2, RefreshCw, Wrench, Layers, Compass, Construction, Droplets, 
  X, Check, Info, ShieldAlert, ArrowUpRight 
} from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

interface ServiceItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  shortDesc: string;
  longDesc: string;
  specifications: string[];
  materials: string[];
  compliance: string;
  imageUrl: string;
}

export default function Services() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedService(null);
      }
    };
    if (selectedService) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedService]);

  const handleBookAssessment = (e: React.MouseEvent) => {
    e.preventDefault();
    setSelectedService(null);
    const lenis = (window as any).__lenis;
    const el = document.querySelector("#estimator");
    if (el) {
      if (lenis) {
        lenis.scrollTo(el as HTMLElement, { offset: -76, duration: 1.2 });
      } else {
        const headerOffset = 80;
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  };

  const services: ServiceItem[] = [
    {
      id: "res",
      icon: <Home className="w-5 h-5 text-copper" />,
      title: "Residential Roofing",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBzDk9vaU3Sld54Md0a41nt6qCRvx-Rq-9w9Qu0qt33OIKxET40B3iPwhCItyLsHTgZ_xp5Yt_0iQsow8VEgPX_LYDQSvC3XaG_lmsF1V3drLpzJPzkPJNHkiro11PqopkU3wehiALIGKRwDEoOoYhBvZGPgI_2yZMRfRXCyCbgErA8w9DUYDVheeOPBAr6wboBtD4LFdByAueMYaznc2-wYvrZJounmJuUr6i80UWoo8zWKKSjE8vtBxM6KLWYSeWb=s0",
      shortDesc: "Complete slate and tile solutions for domestic properties, from extensions to full restorations.",
      longDesc: "Our residential roofing services cater to homes of all scales. We manage everything from direct roof inspection to insulation, dry-ventilation ridge conversions, and gutter installation. Every project starts with a full structural assessment of your timber rafters.",
      specifications: [
        "Assessment of timber deflection and rotted wall plates",
        "Installation of high-tensile breathable vapour membranes",
        "Treated and graded Counter-battens (BS 5534 standards)",
        "Premium slate and clay interlocking tile options"
      ],
      materials: ["Natural Welsh/Spanish Slate", "Interlocking Clay Tiles", "Breathable Vapor Membrane", "Preservative-Treated Laths"],
      compliance: "Fully compliant with BS 5534:2014+A2:2018 (British standard for slating and tiling)."
    },
    {
      id: "com",
      icon: <Building2 className="w-5 h-5 text-copper" />,
      title: "Commercial Roofing",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCt3YQ6OJ_QtcbiU9c6GK47DGncDk6317I6_MOMHBzaVxHUDEXDg35JQmh5e5gBpWQqVgBNM30Oh_lJ2TzPJJib0Y_ZYEl7hm3MLTciAdBq_iUHPGbfCkNz6GMVJPZ-ZscSEJHYwyzEeGJz2jQKkQ0ol1zOy-GepY1x3ciH2i7c8toU8EuWp-j_biFfXo0QnwvkkVA5FYrLReqhFOtJtYHL57LCzAdkYKN5YVvPI-DhgAR3SQG-mbjN224Pj-7WAg3Q=s0",
      shortDesc: "Durable high-performance weathering envelopes for industrial units, schools, and blocks.",
      longDesc: "We provide comprehensive commercial envelope roofing, emphasizing minimal disruption, safe edge staging, and certified weatherproof seals. Our technicians are trained in heavy-duty single-ply membranes, composite cladding, and large-scale metal profiles.",
      specifications: [
        "Comprehensive health & safety risk assessments (RAMS)",
        "Certified safe edge protection and scaffolding staging",
        "Reinforced warm-roof insulation assemblies",
        "Liquid waterproofing and high-performance felt layering"
      ],
      materials: ["Single-Ply PVC/EPDM", "High-Performance Bitumen Felt", "PIR Rigid Insulation Boards", "Architectural Trim Profiles"],
      compliance: "Meets BS 8217:2005 (reinforced bitumen membrane code) and CDM 2015 safety standards."
    },
    {
      id: "rep",
      icon: <RefreshCw className="w-5 h-5 text-copper" />,
      title: "Roof Replacement",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCldGesuLmPaHi9ZC0mXpm-EenTo75sEtIjwqwyRG2QV_TY-NgGKKJ_XBLd3dtTigd2pNnRx7nxiFoC91jXVeL_lLPLufXggQEav8pcNphfHviDAeJQKMGUptgXxxfhBZPBXwq85X_MXfqyzp5JncEXe21WzV-eJIOpRjFHwnTGoRWTSXSK7X1wyfAwABq5L7dGQ0h02x1MuHEnriVF-lhp2iLmWsZPfBGqxyMSDE9iTvJsTZHrmEsSopEJMyzwWbFW=s0",
      shortDesc: "Complete strip-down to rafters, structural leveling, and complete modern tile/slate rebuild.",
      longDesc: "When a roof has passed its safe working life, a complete overhaul is the only way to safeguard your asset. We strip the roof down, reinforce or level older rafters, and lay a fully dry-ventilated envelope from scratch.",
      specifications: [
        "Safe tile stripping, disposal, and skip container management",
        "Leveling and sistering of warped or sagged rafters",
        "Eaves air-flow ventilation trays to stop loft condensation",
        "Dry-fix mortarless ridge and gable verge systems"
      ],
      materials: ["Grano-concrete tiles", "Spanish cupa slate", "Vapor membrane", "Screwed dry-ridge fittings"],
      compliance: "Includes 15-Year comprehensive contractor workmanship warranty."
    },
    {
      id: "rep-spot",
      icon: <Wrench className="w-5 h-5 text-copper" />,
      title: "Roof Repairs",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCt4S5FwuvnyrARiVkpcDHPyJqGuQVJw29u1fDxpKAKTy3zp0Vmz-Qht8Hv3dkhmcB-6qYkKEuB407mPorzvDR-OIiwXhURQY3NMnN5L0RAHZO1394IfKnL0mKvcb5AWhR8QEf4OsmjvQ2BXvNIwas4no4eUdn1Fs6NukNAgI1Qx25_0470-56YZgC1l9CDx5ZrvZX1Zh_lCBoWm1x6F-zNgvYhBcvebxrcckwjpeCMfJSiFFyB3Npaf5e4yiNJT1NY=s0",
      shortDesc: "Targeted remediation for slipped tiles, damaged flashings, and mortar degradation.",
      longDesc: "If the sub-membrane of your roof is healthy, we recommend surgical spot repairs rather than replacement. We rake out weathered mortar, replace individual broken slates, and re-dress failing chimney stack lead steps.",
      specifications: [
        "Surgical replacement of broken or blown tiles with color-matched stock",
        "Re-pinning slipped slate using spring-loaded steel tingles",
        "Re-pointing ridge tiles with heavy sand/cement/lime mortars",
        "Flashing mortar joints raked out and sealed with premium polymer lead sealant"
      ],
      materials: ["Matching salvage slate", "Spring slate-tingles", "Weatherproof pointing mortar", "Polymer sealants"],
      compliance: "All work executed from secure access crawl boards to prevent crushing surrounding tiles."
    },
    {
      id: "slate",
      icon: <Layers className="w-5 h-5 text-copper" />,
      title: "Slate Roofing",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDzUdEY6dKd9qawhdVuKASrQ4NpjYHFbv1Add8cn9Uha8d7xPXmu_KLvVKGe6_KOLFJXur7mJAnOzEW6VC5sjokbIZGC480XcYiK8asLtNIdph1WadcXMCZoNbElz8oT3Yup8EfMh2SMhyjFN54EfFQcTSgv2O693VBKq_O_6c0g5wMZq_B01sFEXC2HfSrjXw-LtLouhJPxryaoiRpuccgTkVwOsJVP8NnZjPUiUsuo7NjQ78mux-GbztbMb-CCZKz=s0",
      shortDesc: "Authentic double-lapped natural slate tiling, graded and dual-fixed with copper nails.",
      longDesc: "Slate is an elite, hundred-year material that requires seasoned specialists. We individually grade and sort slates by thickness, keeping thicker slates at the eaves and thinner ones at the ridge for flat, wind-secure courses.",
      specifications: [
        "Individual slate sorting and hand-holing (no brittle punching)",
        "Calculated headlap offsets based on roof pitch angle",
        "Two heavy-gauge non-corrosive copper clout nails per slate",
        "Exquisite dry-verge detailing or hand-dressed lead abutments"
      ],
      materials: ["Welsh Penrhyn Slate", "Spanish Cupa 12 Slate", "Solid Copper Clout Nails", "Stainless Steel Fixings"],
      compliance: "Executed to BS 8000-6 Code of practice for slating and tiling workmanship."
    },
    {
      id: "arch",
      icon: <Compass className="w-5 h-5 text-copper" />,
      title: "Leadwork & Flashing",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDQFKeUzW8MMetwd2JES44f9n9fpnpgBdAmJ2TdhOLgJHXMyGYsN83_P6AnttG7XinJX3abyKQKYKo-XJ8m0CLTk4Tu2NMv0rNgjISgob3ETQEHC-tHNwW8-6d6hbmI33_Sg56xdat05kEZejgUq46XSQ8GyJGnEGOCjr4lDVrG7sII5vK1k1p1d-e4iMDMhP20mP3onJDBrW7410NBw_qbywnwh_LyTbLvXUERQKGZjckmcb7kGSoIc9_w2T-IIIgR=s0",
      shortDesc: "Bespoke Code 4 & 5 lead valleys, box gutters, chimney saddles, and step flashings.",
      longDesc: "Lead is the soul of a historic or high-spec roof. We hand-dress and weld Code 4 and Code 5 sheet lead on site. Our valleys and step systems include proper expansion joints to prevent metal splitting over cold/hot seasons.",
      specifications: [
        "Code 4 sheet lead for step flashings and soakers",
        "Code 5 sheet lead for box gutters, valley lining, and saddles",
        "Hand-formed expansion steps on runs exceeding 1.5 meters",
        "Lead joints finished with high-temperature lead welding burners"
      ],
      materials: ["Milled British Standard Lead Sheet", "Patination Oil Finish", "Copper Fixing Strips", "Lead-welding rods"],
      compliance: "Meets Lead Contractors Association (LCA) guidelines and BS EN 12588 specifications."
    },
    {
      id: "struct",
      icon: <Construction className="w-5 h-5 text-copper" />,
      title: "Structural Roof Repairs",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPNz5Cjp_wYSThLONS_wRPU6WU4vWxabWBZ8qSHZyfjrc9cIg1VwjVrIlczoMgzmAgZ8qL7k2_ze8XqX8zmtDws-33Bq_og0TdzlAdUxdv2GDUx3L3LShfLqp-LHco9wDImP7MaAuUPOtJZWAiUHCpzsLISadwoqEpP_USDxv6Rtf0y1E-i6DvuWmywE5tzW4Q_o6tNvKythzsN3DgL0hU1wPbcryVh21p3TXzjL2AGA6vCduwwZIfhqrriQqMrtqR=s0",
      shortDesc: "Heavy timber rafter sistering, structural joist checks, and customized cut-and-pitch frames.",
      longDesc: "Older roofs often sag due to historic weight overload or woodworm rot. We install new timber rafters, tie rods, purlins, and wall plates to structurally reinforce your framing prior to loading heavy slates.",
      specifications: [
        "Sistering of damaged or deflected softwood rafters with graded C24 timber",
        "Installation of metal joist hangers, timber connectors, and truss shoes",
        "Adjustment of roof pitch to prevent structural valley sag",
        "Structural engineering tie-backs to brickwork wall-plates"
      ],
      materials: ["C24 Graded Structural Timber", "Zinc-Plated Steel Joist Hangers", "Anti-split plates", "Structural resin anchors"],
      compliance: "Fully verified by local building inspectors and structural engineers."
    },
    {
      id: "leak",
      icon: <Droplets className="w-5 h-5 text-copper" />,
      title: "Emergency Roof Repairs",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDQFKeUzW8MMetwd2JES44f9n9fpnpgBdAmJ2TdhOLgJHXMyGYsN83_P6AnttG7XinJX3abyKQKYKo-XJ8m0CLTk4Tu2NMv0rNgjISgob3ETQEHC-tHNwW8-6d6hbmI33_Sg56xdat05kEZejgUq46XSQ8GyJGnEGOCjr4lDVrG7sII5vK1k1p1d-e4iMDMhP20mP3onJDBrW7410NBw_qbywnwh_LyTbLvXUERQKGZjckmcb7kGSoIc9_w2T-IIIgR=s0",
      shortDesc: "Forensic leak investigation and rapid storm intervention to prevent moisture damage.",
      longDesc: "Water leaks are rarely simple; water often enters at one point, tracks down rafters, and drips meters away. We perform forensic inspections—analyzing slate porous levels, checking lead solder joins, and checking ridge gaps to locate leaks.",
      specifications: [
        "Moisture meter reading across internal plaster and loft timbers",
        "Visual testing of valley troughs and lead step weathers",
        "Tracing capillary action moisture tracks",
        "Surgical replacement of perished felt and cracked batten points"
      ],
      materials: ["Breathable patching felt", "Polyurethane seals", "Slate replacement stock", "Damp-proof barriers"],
      compliance: "Includes 24-month leak-cure guarantee on targeted remediation areas."
    }
  ];

  return (
    <section id="services" className="py-24 bg-navy-deep text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block with Left-to-Right and Right-to-Left animations */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 overflow-hidden">
          <ScrollReveal direction="left" delay={0.05} distance={40}>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-copper" />
                <span className="font-display text-xs font-bold text-copper uppercase tracking-widest">
                  DISCIPLINE &amp; SCOPE
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl text-white font-extrabold uppercase tracking-tight">
                ROOFING SERVICES BUILT TO LAST
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.15} distance={35}>
            <p className="font-body text-slate-400 max-w-md text-sm leading-relaxed">
              Engineered roofing services tailored for residential properties, heritage restorations, and high-performance building envelopes.
            </p>
          </ScrollReveal>
        </div>

        {/* Services Grid with 4 distinct scroll directions (left, down, up, right) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc, index) => {
            const directions: ("left" | "down" | "up" | "right")[] = ["left", "down", "up", "right"];
            const cardDirection = directions[index % 4];

            return (
              <ScrollReveal
                key={svc.id}
                direction={cardDirection}
                delay={0.1 + index * 0.08}
                distance={32}
              >
                <div 
                  className="bg-navy-slate border border-navy-border hover:border-copper/40 rounded-xl overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-lg group hover:-translate-y-1 h-full"
                >
                  <div>
                    {/* Visual Service Image Panel */}
                    <div className="relative h-48 overflow-hidden bg-navy-deep">
                      <img 
                        src={svc.imageUrl} 
                        alt={svc.title} 
                        loading="lazy"
                        decoding="async"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-slate via-transparent to-transparent opacity-80" />
                      
                      {/* Floating Icon Wrapper */}
                      <div className="absolute bottom-3 left-4 w-10 h-10 bg-navy-deep border border-navy-border rounded-lg flex items-center justify-center text-copper">
                        {svc.icon}
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6">
                      <h3 className="font-display text-base font-bold text-white uppercase tracking-wider mb-2 group-hover:text-copper transition-colors">
                        {svc.title}
                      </h3>
                      
                      <p className="font-body text-xs text-slate-400 leading-relaxed">
                        {svc.shortDesc}
                      </p>
                    </div>
                  </div>

                  {/* Action Link & Specs button */}
                  <div className="px-6 pb-6">
                    <button
                      onClick={() => setSelectedService(svc)}
                      className="btn-secondary w-full !py-2.5 text-[11px] flex items-center justify-center gap-1.5 focus:outline-none"
                    >
                      <span>Learn More &amp; Specs</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Technical Detail Lightbox Modal (Fully Retained) */}
        {selectedService && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={() => setSelectedService(null)}
            role="dialog"
            aria-modal="true"
            aria-label={selectedService.title}
          >
            <div 
              className="relative bg-navy-slate border border-navy-border rounded-xl shadow-2xl max-w-2xl w-full overflow-hidden animate-in fade-in zoom-in-95 duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="p-6 border-b border-navy-border flex items-center justify-between bg-navy-deep">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-navy-slate rounded-lg text-copper">
                    {selectedService.icon}
                  </div>
                  <div>
                    <span className="font-display text-[10px] text-copper uppercase tracking-widest block font-bold">
                      Specification Dossier
                    </span>
                    <h3 className="font-display text-lg font-bold text-white uppercase tracking-tight">
                      {selectedService.title}
                    </h3>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedService(null)}
                  className="p-1.5 rounded-lg bg-navy-slate text-slate-400 hover:text-white hover:bg-navy-border transition-colors focus:outline-none"
                  aria-label="Close dialog"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Content body */}
              <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
                <div>
                  <p className="text-xs text-slate-300 leading-relaxed font-body">
                    {selectedService.longDesc}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Specifications */}
                  <div className="space-y-3">
                    <span className="font-display text-[10px] font-bold uppercase text-slate-500 tracking-wider block">
                      Rigid Specifications
                    </span>
                    <ul className="space-y-2">
                      {selectedService.specifications.map((spec, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                          <Check className="w-4 h-4 text-copper shrink-0 mt-0.5" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Materials list */}
                  <div className="space-y-3">
                    <span className="font-display text-[10px] font-bold uppercase text-slate-500 tracking-wider block">
                      Factual Material Stock
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedService.materials.map((mat, i) => (
                        <span key={i} className="px-2.5 py-1 bg-navy-deep border border-navy-border text-[10px] text-slate-300 rounded-md font-mono uppercase">
                          {mat}
                        </span>
                      ))}
                    </div>

                    <div className="pt-3 border-t border-navy-border/40 mt-3">
                      <span className="font-display text-[10px] font-bold uppercase text-slate-500 tracking-wider block mb-1">
                        British Standards Compliance
                      </span>
                      <p className="text-[10px] font-mono text-copper leading-tight">
                        {selectedService.compliance}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="p-4 bg-navy-deep border-t border-navy-border flex justify-end gap-3">
                <button
                  onClick={() => setSelectedService(null)}
                  className="btn-outline !px-4 !py-2 text-xs"
                >
                  Close Specification
                </button>
                <a
                  href="#estimator"
                  onClick={handleBookAssessment}
                  className="btn-primary !px-4 !py-2 text-xs"
                >
                  Book Assessment
                </a>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
