import { Phone, Calendar } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export default function EstimateCTA() {
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
    <section className="relative py-20 overflow-hidden bg-navy-deep border-t border-navy-border">
      {/* Background with subtle overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCw475GXFyYO1HWWwzt_74rIX2jFRmUBPSkhz7LBcEvgGzUtGexkc-3Ive_nUQaYQuRT5qjgrTZe4gDnLhblMHX5Udfo7F1Ba_IGT5ml69VBNB5JKMRQR_ewURFXK4dwBTPXcGomcMj1qzLVfwfQxYkSrbySoLypYyQimGsS9utHDTxl3Yka0rcP1kqSWu6S8Hkq0vA8HtfppikEOAsfE_QEJzl8xxhkZiRDnWsg0spREdsZw78YFAH4-n3NL4Oe2cT=s0"
          alt="Premium slate roofing installation by JG Roofing Ltd"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center"
        />
        {/* Subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent z-10" />
        <div className="absolute inset-0 bg-navy-deep/20 z-10" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl overflow-hidden">
          {/* Top to Bottom */}
          <ScrollReveal direction="down" delay={0.05} distance={18}>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2.5 h-2.5 bg-copper" />
              <span className="font-display text-xs font-bold text-copper uppercase tracking-widest">
                GET A FREE SURVEY &amp; QUOTE
              </span>
            </div>
          </ScrollReveal>

          {/* Left to Right */}
          <ScrollReveal direction="left" delay={0.12} distance={38}>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white font-extrabold uppercase tracking-tight leading-tight mb-4">
              NEED A ROOF REPAIR OR REPLACEMENT?
            </h2>
          </ScrollReveal>

          {/* Right to Left */}
          <ScrollReveal direction="right" delay={0.18} distance={32}>
            <p className="font-body text-slate-200 text-sm sm:text-base md:text-lg max-w-2xl mb-8 leading-relaxed">
              Talk to JG Roofing Ltd about your roofing requirements and request an estimate. Our team of directly employed craftsmen serves Dublin and surrounding areas.
            </p>
          </ScrollReveal>

          {/* Bottom to Top */}
          <ScrollReveal direction="up" delay={0.24} distance={24}>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#estimator"
                onClick={(e) => handleScrollTo(e, "#estimator")}
                className="btn-primary !px-6 !py-4"
              >
                <Calendar className="w-4 h-4 text-white" />
                <span>REQUEST AN ESTIMATE</span>
              </a>

              <a
                href="tel:+353852248597"
                className="btn-secondary !px-6 !py-4"
              >
                <Phone className="w-4 h-4 text-copper" />
                <span>CALL US</span>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
