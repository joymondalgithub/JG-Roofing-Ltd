import { Link } from "react-router-dom";
import { ChevronRight, ShieldCheck, Award, Users } from "lucide-react";
import About from "../components/About";
import RepairVsReplace from "../components/RepairVsReplace";
import WhyChooseUs from "../components/WhyChooseUs";
import ServiceAreas from "../components/ServiceAreas";
import Testimonials from "../components/Testimonials";
import EstimateCTA from "../components/EstimateCTA";
import { usePageSEO } from "../hooks/usePageSEO";

export default function AboutPage() {
  usePageSEO({
    title: "About JG Roofing Ltd | Trusted Dublin Roofing Contractors & Reviews",
    description:
      "Learn about JG Roofing Ltd in Terenure, Dublin. Directly employed slaters, BS 5534 workmanship standards, 15-year guarantees, €6.5M insurance, and 4.9-star Google reviews.",
    path: "/about",
  });

  return (
    <div className="bg-navy-deep text-slate-300">
      {/* Page Hero */}
      <section className="pt-32 pb-16 bg-navy-deep border-b border-navy-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 text-xs font-display uppercase tracking-wider text-slate-400"
          >
            <Link to="/" className="hover:text-copper transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-copper font-bold">About Us</span>
          </nav>

          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-copper" />
              <span className="font-display text-xs font-bold text-copper uppercase tracking-widest">
                TERENURE, DUBLIN 6W · CO REG NO. 13241584
              </span>
            </div>
            <h1 className="font-display text-3xl sm:text-5xl text-white font-extrabold uppercase tracking-tight leading-tight">
              About JG Roofing Ltd — Architectural Roofing Craftsmanship
            </h1>
            <p className="font-body text-sm sm:text-base text-slate-300 leading-relaxed">
              Based in Terenure, Dublin 6W, JG Roofing Ltd is built on direct tradesmanship, strict BS 5534 structural compliance, and transparent fixed-price proposals backed by a 15-year workmanship guarantee.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            <div className="bg-navy-slate border border-navy-border rounded-xl p-5 flex items-center gap-4">
              <ShieldCheck className="w-6 h-6 text-copper shrink-0" />
              <div>
                <span className="font-display text-sm font-bold text-white uppercase block">
                  15-Year Guarantee
                </span>
                <span className="text-xs text-slate-400">
                  Written workmanship &amp; weather-tight cover
                </span>
              </div>
            </div>
            <div className="bg-navy-slate border border-navy-border rounded-xl p-5 flex items-center gap-4">
              <Users className="w-6 h-6 text-copper shrink-0" />
              <div>
                <span className="font-display text-sm font-bold text-white uppercase block">
                  Zero Subcontracting
                </span>
                <span className="text-xs text-slate-400">
                  Directly employed, vetted Dublin craftsmen
                </span>
              </div>
            </div>
            <div className="bg-navy-slate border border-navy-border rounded-xl p-5 flex items-center gap-4">
              <Award className="w-6 h-6 text-copper shrink-0" />
              <div>
                <span className="font-display text-sm font-bold text-white uppercase block">
                  4.9 / 5.0 Google Rating
                </span>
                <span className="text-xs text-slate-400">
                  48+ authenticated Dublin homeowner reviews
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <About ctaTo="/contact" ctaLabel="REQUEST A FREE ROOF SURVEY" />
      <RepairVsReplace />
      <WhyChooseUs />
      <ServiceAreas />
      <Testimonials />
      <EstimateCTA />
    </div>
  );
}
