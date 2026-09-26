import { useState, useEffect } from "react";
import { Phone, Mail, Clock, Award, X, Shield, FileText } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import Logo from "./Logo";

export default function Footer() {
  const [legalModal, setLegalModal] = useState<"privacy" | "terms" | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLegalModal(null);
      }
    };
    if (legalModal) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [legalModal]);

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
    <footer className="w-full bg-navy-deep border-t border-navy-border text-slate-400 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        
        {/* Main Footer Block with multi-directional animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-navy-border/60">
          
          {/* Column A: Brand Info (Cols 1-5) - Slide from Left */}
          <ScrollReveal direction="left" delay={0.05} distance={30} className="lg:col-span-5">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <Logo size="md" showSubtitle={false} />
              </div>
              
              <p className="font-body text-xs text-slate-400 leading-relaxed max-w-sm">
                Professional architectural roofing contractors delivering natural slate restorations, modern pitched tile replacements, and structural timber renewals with premium engineering and building standards.
              </p>

              <div className="space-y-1 text-[10px] font-display uppercase tracking-wider text-slate-500">
                <span className="block">Standard: BS 5534 &amp; BS 8000 Compliant Workmanship</span>
                <span className="block">Fully Insured Public Liability &amp; Employer Guarantee</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Column B: Services Quicklinks (Cols 6-8) - Slide from Top */}
          <ScrollReveal direction="down" delay={0.12} distance={25} className="lg:col-span-3">
            <div className="space-y-4">
              <span className="font-display text-xs font-bold text-white uppercase tracking-widest border-b border-navy-border/60 pb-1.5 block">
                Roofing Services
              </span>
              <ul className="flex flex-col gap-2 font-body text-xs">
                <li>
                  <a href="#services" onClick={(e) => handleScrollTo(e, "#services")} className="hover:text-copper transition-colors">
                    Traditional Slate Roofing
                  </a>
                </li>
                <li>
                  <a href="#services" onClick={(e) => handleScrollTo(e, "#services")} className="hover:text-copper transition-colors">
                    Pitched Tile Replacement
                  </a>
                </li>
                <li>
                  <a href="#services" onClick={(e) => handleScrollTo(e, "#services")} className="hover:text-copper transition-colors">
                    Roof Repairs &amp; Maintenance
                  </a>
                </li>
                <li>
                  <a href="#services" onClick={(e) => handleScrollTo(e, "#services")} className="hover:text-copper transition-colors">
                    Architectural Leadwork
                  </a>
                </li>
                <li>
                  <a href="#services" onClick={(e) => handleScrollTo(e, "#services")} className="hover:text-copper transition-colors">
                    Structural Framing &amp; Trusses
                  </a>
                </li>
                <li>
                  <a href="#services" onClick={(e) => handleScrollTo(e, "#services")} className="hover:text-copper transition-colors">
                    Forensic Leak Detection
                  </a>
                </li>
              </ul>
            </div>
          </ScrollReveal>

          {/* Column C: Direct Contact (Cols 9-12) - Slide from Right */}
          <ScrollReveal direction="right" delay={0.18} distance={30} className="lg:col-span-4">
            <div className="space-y-4">
              <span className="font-display text-xs font-bold text-white uppercase tracking-widest border-b border-navy-border/60 pb-1.5 block">
                Surveyor Desk
              </span>
              <div className="flex flex-col gap-3 font-body text-xs text-slate-300">
                <a href="tel:+353852248597" className="flex items-center gap-2.5 hover:text-copper transition-colors">
                  <Phone className="w-4 h-4 text-copper shrink-0" />
                  <span>+353 85 224 8597</span>
                </a>
                <a href="mailto:jgroofingltd@gmail.com" className="flex items-center gap-2.5 hover:text-copper transition-colors">
                  <Mail className="w-4 h-4 text-copper shrink-0" />
                  <span>jgroofingltd@gmail.com</span>
                </a>
                <div className="flex items-start gap-2.5 text-slate-400">
                  <Clock className="w-4 h-4 text-copper shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <span className="block">Mon – Fri: 07:30 – 18:00</span>
                    <span className="block text-[10px] text-slate-500">Emergency Storm Cover Available</span>
                  </div>
                </div>

                {/* Fully verified physical address */}
                <div className="pt-3 border-t border-navy-border/40 space-y-2">
                  <span className="font-display text-[10px] font-bold uppercase text-slate-500 tracking-wider block">
                    Registered Office Address
                  </span>
                  <p className="text-[11px] text-slate-400 leading-normal">
                    18 Terenure Road West, Terenure,<br />
                    Dublin, D06 K767, Ireland
                  </p>

                  <a
                    href="https://www.google.com/maps/search/?api=1&query=JG+Roofing+Ltd+18+Terenure+Road+West+Terenure+Dublin+Ireland"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary !py-2 !px-3 text-[10px] inline-flex items-center gap-1.5 mt-1"
                  >
                    <span>Get Directions on Google Maps</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>

        {/* Legal Bottom Strip: Slide from Bottom */}
        <ScrollReveal direction="up" delay={0.2} distance={20}>
          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-[11px] font-display uppercase tracking-wider">
            <div className="flex items-center gap-2">
              <Award className="w-4.5 h-4.5 text-copper shrink-0" />
              <span>© 2026 JG Roofing Ltd. Co Reg No. 13241584. All rights reserved.</span>
            </div>

            <div className="flex items-center gap-3 text-slate-500">
              <button 
                type="button"
                onClick={() => setLegalModal("privacy")} 
                className="hover:text-white transition-colors cursor-pointer uppercase focus:outline-none"
              >
                Privacy Policy
              </button>
              <span>·</span>
              <button 
                type="button"
                onClick={() => setLegalModal("terms")} 
                className="hover:text-white transition-colors cursor-pointer uppercase focus:outline-none"
              >
                Terms of Service
              </button>
              <span>·</span>
              <a href="#estimator" onClick={(e) => handleScrollTo(e, "#estimator")} className="text-copper hover:underline font-bold">
                Survey Request
              </a>
            </div>
          </div>
        </ScrollReveal>

      </div>

      {/* Legal Information Modal */}
      {legalModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-deep/90 backdrop-blur-md"
          onClick={() => setLegalModal(null)}
          role="dialog"
          aria-modal="true"
          aria-label={legalModal === "privacy" ? "Privacy Policy" : "Terms of Service"}
        >
          <div 
            className="relative bg-navy-slate border border-navy-border rounded-xl shadow-2xl max-w-xl w-full overflow-hidden animate-in fade-in zoom-in-95 duration-200 text-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-6 border-b border-navy-border flex items-center justify-between bg-navy-deep">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-navy-slate rounded-lg text-copper">
                  {legalModal === "privacy" ? <Shield className="w-5 h-5 text-copper" /> : <FileText className="w-5 h-5 text-copper" />}
                </div>
                <div>
                  <span className="font-display text-[10px] text-copper uppercase tracking-widest block font-bold">
                    JG Roofing Ltd · Legal &amp; Compliance
                  </span>
                  <h3 className="font-display text-base font-bold text-white uppercase tracking-tight">
                    {legalModal === "privacy" ? "GDPR Privacy & Data Protection" : "Workmanship Terms & Conditions"}
                  </h3>
                </div>
              </div>
              <button 
                onClick={() => setLegalModal(null)}
                className="p-1.5 rounded-lg bg-navy-deep text-slate-400 hover:text-white hover:bg-navy-border transition-colors focus:outline-none"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-4 max-h-[65vh] overflow-y-auto font-body text-xs leading-relaxed text-slate-300">
              {legalModal === "privacy" ? (
                <>
                  <p>
                    <strong>1. Data Controller:</strong> JG Roofing Ltd (Company Reg No. 13241584), with registered offices at 18 Terenure Road West, Terenure, Dublin, Ireland. We are fully committed to protecting your personal information under the General Data Protection Regulation (GDPR) and the Irish Data Protection Act.
                  </p>
                  <p>
                    <strong>2. What We Collect:</strong> Contact names, phone numbers, email addresses, property addresses, and optional photographs of roof damage submitted through our online quotation and estimation tool.
                  </p>
                  <p>
                    <strong>3. How Information is Used:</strong> Data is strictly utilized to prepare structural roofing estimates, conduct physical site surveys, confirm project scope, and provide manufacturer warranties. We never sell, rent, or trade your contact information with third-party marketing entities.
                  </p>
                  <p>
                    <strong>4. Data Retention &amp; Rights:</strong> Survey and quotation records are safely retained for the duration of the active project and subsequent 15-year warranty period. You retain the right to request access, correction, or deletion of your personal data at any time by contacting <span className="text-copper font-mono">jgroofingltd@gmail.com</span>.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    <strong>1. Scope of Works &amp; Standards:</strong> All pitched roofing, slate fixing, lead fabrication, and flat roof installations executed by JG Roofing Ltd comply with British and Irish building standards, including BS 5534 (Slating and Tiling) and BS 8000 Workmanship Codes.
                  </p>
                  <p>
                    <strong>2. Quotations &amp; Site Surveys:</strong> Online calculator estimates are provisional figures for budgeting purposes. Official binding contracts are issued following a complimentary physical inspection by our certified master surveyor. Quotations remain valid for 30 calendar days from issue.
                  </p>
                  <p>
                    <strong>3. 15-Year Workmanship Guarantee:</strong> Our full re-roofing projects include a comprehensive 15-year warranty covering installation integrity, structural timber framing, and weather-tightness, backed by manufacturer material warranties up to 50 years.
                  </p>
                  <p>
                    <strong>4. Safety &amp; Insurance:</strong> We hold comprehensive public liability (€6.5M) and employer liability cover. Site access complies strictly with Health and Safety Authority (HSA) working at heights directives.
                  </p>
                </>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-navy-deep border-t border-navy-border flex justify-end">
              <button
                type="button"
                onClick={() => setLegalModal(null)}
                className="btn-primary !px-5 !py-2 text-xs"
              >
                Understood &amp; Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
