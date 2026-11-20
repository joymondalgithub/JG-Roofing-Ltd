import { Link } from "react-router-dom";
import { ChevronRight, ArrowRight } from "lucide-react";
import ProjectGallery from "../components/ProjectGallery";
import BeforeAfterSlider from "../components/BeforeAfterSlider";
import EstimateCTA from "../components/EstimateCTA";
import { usePageSEO } from "../hooks/usePageSEO";

export default function ProjectsPage() {
  usePageSEO({
    title: "Completed Roofing Projects & Portfolio Dublin | JG Roofing Ltd",
    description:
      "Browse completed natural slate restorations, pitched tile replacements, torch-on flat roofs, dry-ridge conversions, and structural timber works across Dublin by JG Roofing Ltd.",
    path: "/projects",
  });

  return (
    <div className="bg-navy-deep text-slate-300">
      {/* Page Hero */}
      <section className="pt-32 pb-14 bg-navy-deep border-b border-navy-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 text-xs font-display uppercase tracking-wider text-slate-400"
          >
            <Link to="/" className="hover:text-copper transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-copper font-bold">Projects &amp; Gallery</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-3xl space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-copper" />
                <span className="font-display text-xs font-bold text-copper uppercase tracking-widest">
                  CERTIFIED DUBLIN WORKS PORTFOLIO
                </span>
              </div>
              <h1 className="font-display text-3xl sm:text-5xl text-white font-extrabold uppercase tracking-tight leading-tight">
                Completed Roofing Projects Across Dublin
              </h1>
              <p className="font-body text-sm sm:text-base text-slate-300 leading-relaxed">
                Explore real residential and commercial roofing installations photographed on site across Terenure, Rathgar, Clontarf, Dundrum, Sandyford, Howth, Malahide, and Dalkey.
              </p>
            </div>

            <Link to="/contact" className="btn-primary !px-6 !py-3.5 shrink-0">
              <span>Request a Similar Quote</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </Link>
          </div>
        </div>
      </section>

      <ProjectGallery featuredOnly={false} />
      <BeforeAfterSlider />
      <EstimateCTA />
    </div>
  );
}
