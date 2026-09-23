import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#estimator" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const lenis = (window as any).__lenis;
    if (href === "#") {
      if (lenis) {
        lenis.scrollTo(0, { duration: 1.2 });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else {
      const element = document.querySelector(href);
      if (element) {
        if (lenis) {
          lenis.scrollTo(element as HTMLElement, { offset: -76, duration: 1.2 });
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
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-navy-deep/95 backdrop-blur-md shadow-lg border-b border-navy-border py-3.5"
            : "bg-navy-deep/90 backdrop-blur-sm border-b border-navy-border/55 py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-12">
          
          {/* LEFT SIDE: JG Roofing Ltd Logo & Brand */}
          <a
            href="#"
            className="flex items-center gap-3 shrink-0 group focus:outline-none"
            onClick={(e) => handleLinkClick(e, "#")}
          >
            <div className="flex items-center">
              <img
                src="https://lh3.googleusercontent.com/aida/AEtjO1W-slx9XtTd4CeepoHcTS2cJM0Xcap88SDe_0wy9TqPQX2H_NHGZWDGecpRn_BJEpkxM_JGQ1gQ9KnRiezyWHGoQQj882iu92QOopzPCvZN36gPdoo0gW_dHPQrmWGSO96jOH-zzVoN5JdSRBTP-0nYTccFsmdflTwvN5P8UinIF4eHo0f7mckDYXqqTVljjhoCMcsICLS4ld2v5xGAQiHXIrCvEPceQCJX8vHDwEYsXomjGt8HpQr5zA"
                alt="JG Roofing Ltd Logo"
                className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-102"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <span className="hidden md:inline-block font-display text-xs font-bold text-slate-400 uppercase tracking-widest pl-3 ml-3 border-l border-navy-border/80">
                ARCHITECTURAL ROOFING CONTRACTORS
              </span>
            </div>
          </a>

          {/* CENTER: 5 Simplified Navigation Links (Slightly larger font size) */}
          <nav className="hidden lg:flex items-center gap-8 pl-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="font-display text-[13px] font-semibold text-slate-300 hover:text-copper uppercase tracking-wider transition-colors duration-200 py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* RIGHT SIDE: Phone and Get a Free Quote CTA (Properly spaced) */}
          <div className="flex items-center gap-8 pl-4">
            
            {/* Phone/Call Link - Well-spaced from the center navigation items */}
            <a
              href="tel:+353852248597"
              className="hidden md:flex items-center gap-2 text-slate-300 hover:text-copper transition-colors"
            >
              <Phone className="w-4 h-4 text-copper shrink-0" />
              <span className="font-mono text-xs font-bold tracking-tight">
                +353 85 224 8597
              </span>
            </a>

            {/* Single Primary CTA Button */}
            <a
              href="#estimator"
              onClick={(e) => handleLinkClick(e, "#estimator")}
              className="btn-primary !py-2.5 !px-4.5 text-xs focus:outline-none"
            >
              <span>Get a Free Quote</span>
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-300 hover:text-white rounded-lg focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-navy-deep/98 backdrop-blur-lg transform transition-transform duration-300 lg:hidden flex flex-col justify-between ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="pt-24 px-6 overflow-y-auto flex-grow flex flex-col gap-6">
          <nav className="flex flex-col gap-5">
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="font-display text-base font-bold text-white hover:text-copper uppercase tracking-wider border-b border-navy-border/50 pb-2.5 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-xs text-copper font-mono">0{idx + 1}</span>
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3 mt-8 bg-navy-slate/50 p-5 border border-navy-border rounded-xl">
            <span className="font-display text-xs text-copper uppercase tracking-widest font-bold">
              Direct Assistance
            </span>
            <div className="flex flex-col gap-2.5">
              <a
                href="tel:+353852248597"
                className="flex items-center gap-2.5 text-sm text-white font-medium hover:text-copper transition-colors"
              >
                <Phone className="w-4 h-4 text-copper" />
                <span>+353 85 224 8597</span>
              </a>
            </div>
          </div>
        </div>

        <div className="p-6 border-t border-navy-border bg-navy-deep text-center">
          <p className="text-[10px] text-slate-500">
            © 2026 JG Roofing Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
}
