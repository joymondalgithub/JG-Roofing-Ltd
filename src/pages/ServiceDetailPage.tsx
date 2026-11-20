import { Link, Navigate } from "react-router-dom";
import {
  Phone,
  Check,
  ShieldCheck,
  Award,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";
import {
  CORE_SERVICES,
  getServiceBySlug,
  type CoreServicePageData,
} from "../data/servicesData";
import { usePageSEO } from "../hooks/usePageSEO";
import QuoteForm from "../components/QuoteForm";
import ServiceFAQAccordion from "../components/ServiceFAQAccordion";
import { ScrollReveal } from "../components/ScrollReveal";
import { scrollToSection } from "../utils/scrollToSection";

interface ServiceDetailPageProps {
  slug: CoreServicePageData["slug"];
}

export default function ServiceDetailPage({ slug }: ServiceDetailPageProps) {
  const service = getServiceBySlug(slug);

  usePageSEO({
    title: service?.seoTitle ?? "Roofing Services Dublin | JG Roofing Ltd",
    description:
      service?.seoDescription ??
      "Certified residential and commercial roofing services across Dublin by JG Roofing Ltd.",
    path: service?.path ?? "/",
    ogImage: service?.heroImage,
  });

  if (!service) {
    return <Navigate to="/" replace />;
  }

  const relatedServices = CORE_SERVICES.filter((s) => s.slug !== service.slug);

  return (
    <div className="bg-navy-deep text-slate-300">
      {/* 1. SERVICE HERO BANNER */}
      <section className="relative pt-32 pb-20 border-b border-navy-border overflow-hidden">
        <div
          className="absolute inset-0 z-0 opacity-20 pointer-events-none"
          aria-hidden="true"
        >
          <img
            src={service.heroImage}
            alt=""
            className="w-full h-full object-cover object-center"
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-deep via-navy-deep/90 to-navy-deep pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-1.5 text-xs font-display uppercase tracking-wider text-slate-400 mb-6"
          >
            <Link to="/" className="hover:text-copper transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-slate-500">Services</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-copper font-bold">{service.navLabel}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-copper" />
                <span className="font-display text-xs font-bold text-copper uppercase tracking-widest">
                  {service.eyebrow}
                </span>
              </div>

              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white font-extrabold uppercase tracking-tight leading-[1.08]">
                {service.h1}
              </h1>

              <p className="font-body text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                {service.heroSummary}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#service-quote"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("#service-quote");
                  }}
                  className="btn-primary !px-6 !py-4"
                >
                  <span>Request a Free Quote</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </a>

                <a href="tel:+353852248597" className="btn-secondary !px-6 !py-4">
                  <Phone className="w-4 h-4 text-copper" />
                  <span>Call +353 85 224 8597</span>
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-4 border-t border-navy-border text-xs text-slate-300 font-display uppercase tracking-wider">
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-copper shrink-0" />
                  {service.warranty}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-copper shrink-0" />
                  €6.5M Public Liability Insured
                </span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-navy-border shadow-2xl aspect-[4/3] bg-navy-slate">
                <img
                  src={service.heroImage}
                  alt={service.heroImageAlt}
                  loading="eager"
                  decoding="async"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 bg-navy-deep/90 backdrop-blur-md border border-navy-border rounded-lg px-4 py-3 flex items-center justify-between gap-3">
                  <div>
                    <span className="font-display text-[10px] font-bold text-copper uppercase tracking-wider block">
                      DUBLIN SPECIALISTS
                    </span>
                    <span className="font-display text-xs font-bold text-white uppercase">
                      {service.navLabel}
                    </span>
                  </div>
                  <Award className="w-5 h-5 text-copper shrink-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DETAILED OVERVIEW & BENEFITS (Warm Off-White Section) */}
      <section className="py-20 bg-warm-offwhite text-slate-800 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <ScrollReveal direction="left" delay={0.08} distance={30} className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-copper" />
                <span className="font-display text-xs font-bold text-copper uppercase tracking-widest">
                  ARCHITECTURAL METHODOLOGY
                </span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl text-navy-deep font-extrabold uppercase tracking-tight">
                {service.overviewHeading}
              </h2>
              {service.overviewParagraphs.map((para, idx) => (
                <p key={idx} className="font-body text-sm sm:text-base text-slate-600 leading-relaxed">
                  {para}
                </p>
              ))}
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.14} distance={30} className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xl aspect-[4/3] bg-navy-deep">
                <img
                  src={service.secondaryImage}
                  alt={service.secondaryImageAlt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </ScrollReveal>
          </div>

          {/* 4 Key Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.benefits.map((benefit, idx) => (
              <div
                key={benefit.title}
                className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:border-copper/40 transition-colors space-y-2.5"
              >
                <span className="font-mono text-xs font-bold text-copper block">
                  0{idx + 1}
                </span>
                <h3 className="font-display text-sm font-bold text-navy-deep uppercase tracking-wide">
                  {benefit.title}
                </h3>
                <p className="font-body text-xs text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. TECHNICAL SPECIFICATIONS & MATERIALS */}
      <section className="py-20 bg-navy-slate border-b border-navy-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2.5 h-2.5 bg-copper" />
                  <span className="font-display text-xs font-bold text-copper uppercase tracking-widest">
                    SCOPE OF WORKMANSHIP
                  </span>
                </div>
                <h2 className="font-display text-2xl sm:text-3xl text-white font-extrabold uppercase tracking-tight">
                  Technical Specifications &amp; Site Checklist
                </h2>
              </div>

              <ul className="space-y-3.5">
                {service.specifications.map((spec) => (
                  <li
                    key={spec}
                    className="flex items-start gap-3 p-4 rounded-xl bg-navy-deep border border-navy-border text-xs sm:text-sm text-slate-200"
                  >
                    <Check className="w-4 h-4 text-copper shrink-0 mt-0.5" />
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="bg-navy-deep border border-navy-border rounded-xl p-6 space-y-5">
                <div>
                  <span className="font-display text-[10px] font-bold uppercase tracking-widest text-copper block mb-1">
                    CERTIFIED MATERIALS STOCK
                  </span>
                  <h3 className="font-display text-base font-bold text-white uppercase tracking-tight">
                    Approved Components Installed
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {service.materials.map((mat) => (
                    <span
                      key={mat}
                      className="px-3 py-1.5 bg-navy-slate border border-navy-border rounded-md text-[11px] font-mono text-slate-200"
                    >
                      {mat}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-navy-border space-y-2">
                  <span className="font-display text-[10px] font-bold uppercase tracking-widest text-slate-400 block">
                    BUILDING STANDARDS COMPLIANCE
                  </span>
                  <p className="font-mono text-xs text-copper leading-relaxed">
                    {service.compliance}
                  </p>
                </div>

                <div className="pt-4 border-t border-navy-border flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-copper shrink-0 mt-0.5" />
                  <div>
                    <span className="font-display text-xs font-bold text-white uppercase block">
                      Written Workmanship Guarantee
                    </span>
                    <p className="font-body text-xs text-slate-400 mt-0.5">
                      {service.warranty}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FAQ ACCORDION & EMBEDDED QUOTE FORM */}
      <section
        id="service-quote"
        className="scroll-mt-24 py-20 bg-navy-deep border-b border-navy-border"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <ServiceFAQAccordion
                faqs={service.faqs}
                heading={`${service.navLabel} FAQs`}
              />
            </div>

            <div className="lg:col-span-7">
              <div className="bg-navy-slate border border-navy-border rounded-2xl p-6 sm:p-8 shadow-2xl">
                <QuoteForm
                  defaultService={service.formServiceValue}
                  eyebrow={`FREE DUBLIN SITE SURVEY · ${service.navLabel.toUpperCase()}`}
                  heading={`Request a Free ${service.navLabel} Quote`}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. OTHER ROOFING SERVICES INTERNAL LINKS */}
      <section className="py-16 bg-navy-slate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="font-display text-xs font-bold text-copper uppercase tracking-widest block mb-1">
                EXPLORE MORE SPECIALISMS
              </span>
              <h2 className="font-display text-2xl font-extrabold text-white uppercase tracking-tight">
                Related Dublin Roofing Services
              </h2>
            </div>
            <Link
              to="/projects"
              className="text-xs font-display font-bold uppercase tracking-wider text-copper hover:underline inline-flex items-center gap-1"
            >
              <span>View Completed Projects</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((rel) => (
              <Link
                key={rel.slug}
                to={rel.path}
                className="group bg-navy-deep border border-navy-border hover:border-copper/50 rounded-xl p-6 transition-all flex flex-col justify-between gap-4"
              >
                <div className="space-y-2">
                  <span className="font-display text-[10px] font-bold uppercase tracking-widest text-copper block">
                    JG ROOFING SERVICE
                  </span>
                  <h3 className="font-display text-base font-bold text-white uppercase group-hover:text-copper transition-colors">
                    {rel.navLabel}
                  </h3>
                  <p className="font-body text-xs text-slate-400 leading-relaxed">
                    {rel.shortTagline}
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-display font-bold uppercase tracking-wider text-copper">
                  <span>View Service Page</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
