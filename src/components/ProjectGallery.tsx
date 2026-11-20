import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MapPin, Eye, X, Shield, Layers, Calendar, ClipboardCheck, ArrowRight } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

interface ProjectItem {
  id: string;
  title: string;
  category: "slate" | "tile" | "flat" | "structural";
  categoryLabel: string;
  location: string;
  imageUrl: string;
  shortDesc: string;
  scope: string[];
  materialsUsed: string[];
  duration: string;
  beforeNotes: string;
}

interface ProjectGalleryProps {
  featuredOnly?: boolean;
}

export default function ProjectGallery({ featuredOnly = false }: ProjectGalleryProps) {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Close modal on Escape key and lock background scroll
  useEffect(() => {
    const lenis = (window as unknown as { __lenis?: { stop: () => void; start: () => void } }).__lenis;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };
    if (selectedProject) {
      document.body.style.overflow = "hidden";
      if (lenis) lenis.stop();
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      if (lenis) lenis.start();
    };
  }, [selectedProject]);

  const handleModalScrollToEstimator = () => {
    setSelectedProject(null);
    navigate("/contact");
  };

  const projects: ProjectItem[] = [
    {
      id: "proj-1",
      title: "Hand-Hewn Slate Roof & Dormers",
      category: "slate",
      categoryLabel: "Natural Slate Restoration",
      location: "Terenure, Dublin",
      imageUrl: "/assets/images/about-construction-slate.webp",
      shortDesc: "Complete heritage replacement using double-lapped natural slate and custom-formed Code 5 lead valleys.",
      scope: [
        "Sorted, graded, and sized natural Spanish slates",
        "Two solid copper nails per slate for wind uplifts",
        "Formed Code 5 step and apron chimney flashings",
        "Eaves underlay protector trays fitted to prevent sag"
      ],
      materialsUsed: ["Spanish Cupa 12 Natural Slate", "Code 5 Milled Lead", "Treated Battens (25x50mm)", "Breathable membrane"],
      duration: "14 Working Days",
      beforeNotes: "The existing roof was a century-old slate assembly that had severe nail-sickness, with entire rows sliding and leaking water into three bedrooms."
    },
    {
      id: "proj-2",
      title: "Warped Roof Timber Truss Reconstruction",
      category: "structural",
      categoryLabel: "Structural Framing & Truss Work",
      location: "Rathgar, Dublin",
      imageUrl: "/assets/images/structural-timber-truss.webp",
      shortDesc: "Structural sistering of sagged timber joists and dormer window carpentry ready for tiling.",
      scope: [
        "Aligned deflected joists using C24 graded timbers",
        "Erected bespoke dormer framing and heavy-duty cheek studs",
        "Fitted OSB deck boards and weathershield breathable screens",
        "Bolted structural tie rods to stop brickwork wall-plate drift"
      ],
      materialsUsed: ["Graded C24 Timber", "OSB3 Roof Decking", "Zinc Joist Connectors", "Breathable weathershield membrane"],
      duration: "8 Working Days",
      beforeNotes: "Severe rafter sag due to historic weight overload. Timbers were evaluated and reinforced to hold modern tile loads safely."
    },
    {
      id: "proj-3",
      title: "Integrated Sky-Light & Underlay Installation",
      category: "structural",
      categoryLabel: "High-Tensile Underlay & Skylights",
      location: "Clontarf, Dublin",
      imageUrl: "/assets/images/skylight-underlay.webp",
      shortDesc: "Breathable moisture membrane layout with matching battens and Velux weather-sealed window unit.",
      scope: [
        "Cut timber framework to house flush roof window profile",
        "Laid high-performance vapour-breathable membrane",
        "Fitted Velux flashing kits to route water runoffs completely clear",
        "Nailed factory-graded red wood counter battens"
      ],
      materialsUsed: ["Vapor-Breathable Membrane", "Velux GGL Flush Windows", "Velux EDW Flashing kit", "Galvanised nails"],
      duration: "3 Working Days",
      beforeNotes: "Dark, unventilated attic space converted into a bright workspace, requiring absolute water-tight window flashing."
    },
    {
      id: "proj-4",
      title: "Commercial High-Spec Flat Roof & Guttering",
      category: "flat",
      categoryLabel: "Flat Roof & Membrane",
      location: "Sandyford, Dublin",
      imageUrl: "/assets/images/commercial-flat-roof.webp",
      shortDesc: "Complete strip-out of rotted organic felt, replaced with modern torch-on multi-layer waterproofing.",
      scope: [
        "Cleared water-logged gravel ballast and old perished bituminous felt",
        "Removed rotted timber structural decking boards",
        "Secured clean premium plywood deck and rigid insulation",
        "Applied triple-layer torch-on elastic polymer membrane"
      ],
      materialsUsed: ["Triple-Ply SBS Elastomeric Felt", "PIR Rigid Insulation Boards", "WBP Plywood Decking", "PVC Edge Trims"],
      duration: "6 Working Days",
      beforeNotes: "Aging building with constant ceiling leaks, pooling water, and damp smell. Rotted timber decks required complete renewal."
    },
    {
      id: "proj-5",
      title: "Mechanical Dry Ridge Conversion",
      category: "tile",
      categoryLabel: "Tile Ridge Conversion",
      location: "Dundrum, Dublin",
      imageUrl: "/assets/images/dry-ridge-conversion.webp",
      shortDesc: "Removal of failing sandy ridge mortar, replaced with ventilated mechanical dry capping.",
      scope: [
        "Carefully removed cracked and detached ridge tiles",
        "Cleaned out old crumbly mortar beddings on valleys and peaks",
        "Installed ventilated dry-ridge roll system for air-flow",
        "Mechanically screwed down ridge capping tiles with weather-gaskets"
      ],
      materialsUsed: ["Dry-Ridge Ventilated Roll System", "Stainless Steel Screws & Clamps", "EPDM Ridge Weather Gaskets"],
      duration: "2 Working Days",
      beforeNotes: "Severe storm damage. Aging ridge mortar was blowing off during heavy winds, posing a hazard and causing immediate ridge leaks."
    },
    {
      id: "proj-6",
      title: "Safe Scaffolding & Site Setup",
      category: "structural",
      categoryLabel: "Scaffolding & Site Logistics",
      location: "Howth, Dublin",
      imageUrl: "/assets/images/residential-scaffolding.webp",
      shortDesc: "Secure multi-tier safety scaffolding access and waste container management for a full re-roof.",
      scope: [
        "Erected compliant double-boarded access scaffolding with ladders",
        "Fitted debris netting and secure handrails for street safety",
        "Allocated heavy-duty skip bin directly adjacent for waste chuting",
        "Carried out daily site sweeptracks to capture all roofing nails"
      ],
      materialsUsed: ["Scaffolding Tubes & Boards", "Debris netting", "Rubbish chutes", "Safety harness lines"],
      duration: "1 Working Day Setup",
      beforeNotes: "Ensured maximum site safety and client property protection prior to kicking off any roof demolition works."
    },
    {
      id: "proj-7",
      title: "Torch-On Membrane Flat Roof System",
      category: "flat",
      categoryLabel: "Flat Roof Waterproofing",
      location: "Malahide, Dublin",
      imageUrl: "/assets/images/flat-roof-torch-on.webp",
      shortDesc: "Porous weathered flat deck fully stripped, insulated, and sealed with elastomeric torch-on felt.",
      scope: [
        "Stuck high-grade vapor barrier directly to deck plates",
        "Installed 120mm high-efficiency insulation sheets",
        "Applied a base sheet followed by an anthracite mineral cap-sheet",
        "Fitted metal edge drips and sealed upstands to brickwork with lead"
      ],
      materialsUsed: ["SBS Elastomeric Cap Sheet (Anthracite)", "PIR Insulation", "Code 4 Lead Wall Upstands", "PVC Metal Drip Trims"],
      duration: "4 Working Days",
      beforeNotes: "Existing flat roof was holding pools of standing water which slowly seeped through organic boards, threatening bedroom timber rot."
    },
    {
      id: "proj-8",
      title: "Active Pitched Tile Stripping & Stack Prep",
      category: "tile",
      categoryLabel: "Demolition & Prep Work",
      location: "Dalkey, Dublin",
      imageUrl: "/assets/images/pitched-tile-stripping.webp",
      shortDesc: "Safe demolition of rotted interlocking concrete tiles, rafter evaluation, and chimney prep.",
      scope: [
        "Manually removed weathered mossy heavy concrete tiles",
        "Tested framing structural timber humidity and rot levels",
        "Prepped brick chimney stack lines for fresh lead flashings",
        "Maintained continuous tarpaulin sheet coverage against rain"
      ],
      materialsUsed: ["Heavy-duty weatherproof tarpaulins", "Structural lath nails", "Batten clips", "Skip collection systems"],
      duration: "3 Working Days (Prep Phase)",
      beforeNotes: "Active job site in progress. We ensure the exposed timber rafters are immediately secured and protected against weather during work."
    }
  ];

  const filteredProjects = featuredOnly
    ? projects.slice(0, 4)
    : activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const filterButtons = [
    { id: "all", label: "All Works" },
    { id: "slate", label: "Natural Slate" },
    { id: "tile", label: "Tile Replacement" },
    { id: "flat", label: "Flat Membranes & Lead" },
    { id: "structural", label: "Structural Framing" }
  ];

  return (
    <section id="projects" className="scroll-mt-24 py-24 bg-navy-slate border-t border-b border-navy-border text-slate-300 overflow-x-clip">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Left-to-Right and Right-to-Left animations */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 overflow-hidden">
          <ScrollReveal direction="left" delay={0.05} distance={40}>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-copper" />
                <span className="font-display text-xs font-bold text-copper uppercase tracking-widest">
                  VERIFIED WORKS DOCKET
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl text-white font-extrabold uppercase tracking-tight">
                {featuredOnly ? "FEATURED ROOFING PROJECTS" : "RECENT ROOFING PROJECTS"}
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.15} distance={35}>
            {featuredOnly ? (
              <Link
                to="/projects"
                className="btn-secondary inline-flex items-center gap-2 !py-3 !px-5"
              >
                <span>View Full Portfolio (8 Projects)</span>
                <ArrowRight className="w-4 h-4 text-copper" />
              </Link>
            ) : (
              <p className="font-body text-slate-400 max-w-md text-sm leading-relaxed">
                Directly documented site progress and finished architectural roofing projects executed across domestic and commercial premises in Dublin.
              </p>
            )}
          </ScrollReveal>
        </div>

        {/* Filter Bar (shown on full gallery) */}
        {!featuredOnly && (
          <ScrollReveal direction="down" delay={0.1} distance={20}>
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-navy-deep border border-navy-border rounded-lg max-w-2xl mb-10">
              {filterButtons.map((btn) => (
                <button
                  key={btn.id}
                  type="button"
                  onClick={() => setActiveFilter(btn.id)}
                  className={`px-4 py-2 text-xs font-display font-bold uppercase tracking-wider rounded transition-all duration-200 cursor-pointer focus:outline-none whitespace-nowrap ${
                    activeFilter === btn.id
                      ? "bg-copper text-white shadow"
                      : "text-slate-400 hover:text-white hover:bg-navy-slate"
                  }`}
                >
                  {btn.label}
                </button>
              ))}
            </div>
          </ScrollReveal>
        )}

        {/* Projects Grid with dynamic directional entrances */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProjects.map((proj, idx) => {
            const directions: ("left" | "up" | "down" | "right")[] = ["left", "up", "down", "right"];
            const cardDirection = directions[idx % 4];

            return (
              <ScrollReveal
                key={proj.id}
                direction={cardDirection}
                delay={0.08 + (idx % 4) * 0.08}
                distance={30}
              >
                <div
                  className="bg-navy-deep border border-navy-border rounded-xl overflow-hidden flex flex-col justify-between shadow-lg hover:shadow-xl hover:border-copper/40 transition-all duration-300 group h-full"
                >
                  {/* Image box */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-navy-deep">
                    <img
                      src={proj.imageUrl}
                      alt={proj.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <span className="absolute top-3 left-3 bg-navy-deep/90 border border-navy-border/80 px-2 py-0.5 text-[9px] font-display uppercase font-bold text-copper rounded backdrop-blur-md">
                      {proj.categoryLabel}
                    </span>
                  </div>

                  {/* Text Description */}
                  <div className="p-5 flex-grow flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-1.5 text-slate-400 text-[10px] uppercase font-display font-semibold mb-2">
                        <MapPin className="w-3.5 h-3.5 text-copper" />
                        <span>{proj.location}</span>
                      </div>
                      
                      <h3 className="font-display text-sm font-bold text-white uppercase tracking-wide group-hover:text-copper transition-colors mb-2 line-clamp-2">
                        {proj.title}
                      </h3>
                      
                      <p className="font-body text-[11px] text-slate-400 leading-relaxed mb-4 line-clamp-3">
                        {proj.shortDesc}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setSelectedProject(proj)}
                      className="btn-secondary w-full !py-2.5 text-[11px] flex items-center justify-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-copper/50"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Project Log</span>
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Lightbox / Project Deep Dive Modal */}
        {selectedProject && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-deep/90 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
            role="dialog"
            aria-modal="true"
            aria-label={selectedProject.title}
          >
            <div 
              className="relative bg-white border border-slate-200 rounded-xl shadow-2xl max-w-3xl w-full overflow-hidden animate-fadeIn text-slate-800"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="p-6 border-b border-slate-200 flex items-center justify-between bg-warm-offwhite">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-navy-slate rounded-lg text-copper">
                    <Layers className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="font-display text-[10px] text-copper uppercase tracking-widest block font-bold">
                      Certified Project Dossier
                    </span>
                    <h3 className="font-display text-base font-bold text-navy-deep uppercase tracking-tight">
                      {selectedProject.title}
                    </h3>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="p-1.5 text-slate-500 hover:text-navy-deep hover:bg-slate-200 rounded-lg transition-colors focus:outline-none cursor-pointer"
                  aria-label="Close project"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Body */}
              <div className="grid grid-cols-1 md:grid-cols-12 max-h-[75vh] overflow-y-auto" data-lenis-prevent>
                {/* Visual Image Banner left-ish */}
                <div className="md:col-span-5 relative bg-navy-deep">
                  <img
                    src={selectedProject.imageUrl}
                    alt={selectedProject.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover min-h-[250px] md:min-h-full"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <span className="font-display text-[9px] text-copper uppercase tracking-widest font-bold block">
                      SITE RECORD
                    </span>
                    <span className="font-mono text-xs font-bold flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-copper shrink-0" /> {selectedProject.location}
                    </span>
                  </div>
                </div>

                {/* Technical Information right-ish */}
                <div className="md:col-span-7 p-6 space-y-6">
                  {/* Before state */}
                  <div className="space-y-1.5">
                    <span className="font-display text-[10px] text-slate-500 uppercase tracking-wider font-bold block">
                      INITIAL PHYSICAL DIAGNOSIS
                    </span>
                    <p className="font-body text-xs text-slate-600 leading-relaxed bg-slate-50 p-3 rounded border border-slate-200">
                      {selectedProject.beforeNotes}
                    </p>
                  </div>

                  {/* Scope */}
                  <div className="space-y-2">
                    <span className="font-display text-[10px] text-slate-500 uppercase tracking-wider font-bold block">
                      WORK SCOPE &amp; METHODOLOGY
                    </span>
                    <ul className="space-y-1.5">
                      {selectedProject.scope.map((scp, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-600 leading-normal">
                          <ClipboardCheck className="w-4 h-4 text-copper shrink-0 mt-0.5" />
                          <span>{scp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Materials & Metadata */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-200">
                    <div className="space-y-1">
                      <span className="font-display text-[10px] text-slate-500 uppercase tracking-wider font-bold block">
                        MATERIALS LOG
                      </span>
                      <ul className="space-y-0.5 text-[11px] text-slate-600 font-body">
                        {selectedProject.materialsUsed.map((m, i) => (
                          <li key={i} className="list-disc list-inside truncate">{m}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-1 text-[11px] text-slate-600">
                        <Calendar className="w-3.5 h-3.5 text-copper shrink-0" />
                        <span><strong>Duration:</strong> {selectedProject.duration}</span>
                      </div>
                      <div className="flex items-center gap-1 text-[11px] text-slate-600">
                        <Shield className="w-3.5 h-3.5 text-copper shrink-0" />
                        <span><strong>Warranty:</strong> 15-Yr Workmanship</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Footer */}
              <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-[10px] text-slate-500 font-body">
                  All photos depict real project sites executed by JG Roofing Ltd.
                </span>
                <button
                  type="button"
                  onClick={handleModalScrollToEstimator}
                  className="btn-primary !px-4 !py-2 text-xs shrink-0"
                >
                  Request Similar Estimate
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
