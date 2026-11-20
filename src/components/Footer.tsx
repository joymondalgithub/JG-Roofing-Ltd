import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, Clock, Award, X, Shield, FileText } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import Logo from "./Logo";
import { CORE_SERVICES } from "../data/servicesData";

export default function Footer() {
  const [legalModal, setLegalModal] = useState<"privacy" | "terms" | null>(null);

  useEffect(() => {
    const lenis = (window as unknown as { __lenis?: { stop: () => void; start: () => void } })
      .__lenis;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLegalModal(null);
      }
    };
    if (legalModal) {
      document.body.style.overflow = "hidden";
      if (lenis) lenis.stop();
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      if (lenis) lenis.start();
    };
  }, [legalModal]);

  return (
    <footer className="w-full bg-navy-deep border-t border-navy-border text-slate-400 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        {/* Main Footer Block */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-navy-border/60">
          {/* Column A: Brand Info (Cols 1-4) */}
          <ScrollReveal direction="left" delay={0.05} distance={30} className="lg:col-span-4">
            <div className="space-y-6">
              <Link
                to="/"
                className="inline-flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-copper/50 rounded-lg"
                aria-label="JG Roofing Ltd Home"
              >
                <Logo size="md" showSubtitle={false} />
              </Link>

              <p className="font-body text-xs text-slate-400 leading-relaxed max-w-sm">
                Professional architectural roofing contractors delivering natural slate restorations, modern pitched tile replacements, leadwork fabrication, and structural timber renewals across Dublin.
              </p>

              <div className="space-y-1 text-[10px] font-display uppercase tracking-wider text-slate-500">
                <span className="block">Standard: BS 5534 &amp; BS 8000 Compliant Workmanship</span>
                <span className="block">Fully Insured Public Liability &amp; Employer Guarantee</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Column B: Dedicated Services Links (Cols 5-7) */}
          <ScrollReveal direction="down" delay={0.1} distance={25} className="lg:col-span-3">
            <div className="space-y-4">
              <span className="font-display text-xs font-bold text-white uppercase tracking-widest border-b border-navy-border/60 pb-1.5 block">
                Roofing Services
              </span>
              <ul className="flex flex-col gap-2.5 font-body text-xs">
                {CORE_SERVICES.map((svc) => (
                  <li key={svc.slug}>
                    <Link
                      to={svc.path}
                      className="hover:text-copper transition-colors"
                    >
                      {svc.navLabel}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Column C: Company Navigation (Cols 8-9) */}
          <ScrollReveal direction="down" delay={0.14} distance={25} className="lg:col-span-2">
            <div className="space-y-4">
              <span className="font-display text-xs font-bold text-white uppercase tracking-widest border-b border-navy-border/60 pb-1.5 block">
                Company
              </span>
              <ul className="flex flex-col gap-2.5 font-body text-xs">
                <li>
                  <Link to="/" className="hover:text-copper transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-copper transition-colors">
                    About JG Roofing
                  </Link>
                </li>
                <li>
                  <Link to="/projects" className="hover:text-copper transition-colors">
                    Projects &amp; Gallery
                  </Link>
                </li>
                <li>
                  <Link to="/about#reviews" className="hover:text-copper transition-colors">
                    Customer Reviews
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-copper transition-colors">
                    Free Quote &amp; Survey
                  </Link>
                </li>
              </ul>
            </div>
          </ScrollReveal>

          {/* Column D: Direct Contact (Cols 10-12) */}
          <ScrollReveal direction="right" delay={0.18} distance={30} className="lg:col-span-3">
            <div className="space-y-4">
              <span className="font-display text-xs font-bold text-white uppercase tracking-widest border-b border-navy-border/60 pb-1.5 block">
                Surveyor Desk
              </span>
              <div className="flex flex-col gap-3 font-body text-xs text-slate-300">
                <a
                  href="tel:+353852248597"
                  className="flex items-center gap-2.5 hover:text-copper transition-colors"
                >
                  <Phone className="w-4 h-4 text-copper shrink-0" />
                  <span className="font-mono">+353 85 224 8597</span>
                </a>
                <a
                  href="mailto:jgroofingltd@gmail.com"
                  className="flex items-center gap-2.5 hover:text-copper transition-colors"
                >
                  <Mail className="w-4 h-4 text-copper shrink-0" />
                  <span>jgroofingltd@gmail.com</span>
                </a>
                <div className="flex items-start gap-2.5 text-slate-400">
                  <Clock className="w-4 h-4 text-copper shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <span className="block">Mon – Fri: 07:30 – 18:00</span>
                    <span className="block text-[10px] text-slate-500">
                      Emergency Storm Cover Available
                    </span>
                  </div>
                </div>

                <div className="pt-3 border-t border-navy-border/40 space-y-2">
                  <span className="font-display text-[10px] font-bold uppercase text-slate-500 tracking-wider block">
                    Registered Office Address
                  </span>
                  <p className="text-[11px] text-slate-400 leading-normal">
                    18 Terenure Road West, Terenure,
                    <br />
                    Dublin, D06 K767, Ireland
                  </p>

                  <Link
                    to="/about#reviews"
                    className="inline-flex items-center gap-1.5 py-1 text-[11px] text-slate-300 hover:text-copper transition-colors"
                  >
                    <span className="text-amber-400">★★★★★</span>
                    <span className="font-bold text-white">4.9 / 5.0</span>
                    <span className="text-slate-400 text-[10px]">(48 Google Reviews)</span>
                  </Link>

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

        {/* Legal Bottom Strip */}
        <ScrollReveal direction="up" delay={0.2} distance={20}>
          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-[11px] font-display uppercase tracking-wider">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-copper shrink-0" />
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
              <Link
                to="/contact"
                className="text-copper hover:underline font-bold"
              >
                Survey Request
              </Link>
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
            className="relative bg-navy-slate border border-navy-border rounded-xl shadow-2xl max-w-xl w-full overflow-hidden animate-fadeIn text-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-6 border-b border-navy-border flex items-center justify-between bg-navy-deep">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-navy-slate rounded-lg text-copper">
                  {legalModal === "privacy" ? (
                    <Shield className="w-5 h-5 text-copper" />
                  ) : (
                    <FileText className="w-5 h-5 text-copper" />
                  )}
                </div>
                <div>
                  <span className="font-display text-[10px] text-copper uppercase tracking-widest block font-bold">
                    JG Roofing Ltd · Legal &amp; Compliance
                  </span>
                  <h3 className="font-display text-base font-bold text-white uppercase tracking-tight">
                    {legalModal === "privacy"
                      ? "GDPR Privacy & Data Protection"
                      : "Workmanship Terms & Conditions"}
                  </h3>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setLegalModal(null)}
                className="p-1.5 rounded-lg bg-navy-deep text-slate-400 hover:text-white hover:bg-navy-border transition-colors focus:outline-none cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div
              className="p-6 space-y-4 max-h-[65vh] overflow-y-auto font-body text-xs leading-relaxed text-slate-300"
              data-lenis-prevent
            >
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
                    <strong>4. Data Retention &amp; Rights:</strong> Survey and quotation records are safely retained for the duration of the active project and subsequent 15-year warranty period. You retain the right to request access, correction, or deletion of your personal data at any time by contacting{" "}
                    <a
                      href="mailto:jgroofingltd@gmail.com"
                      className="text-copper font-mono hover:underline"
                    >
                      jgroofingltd@gmail.com
                    </a>
                    .
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
