import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, ArrowRight, ChevronDown } from "lucide-react";
import Logo from "./Logo";
import { CORE_SERVICES } from "../data/servicesData";

export default function Header() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(true);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isServicesActive = location.pathname.startsWith("/services");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus automatically whenever route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setDesktopServicesOpen(false);
  }, [location.pathname, location.hash]);

  // Close desktop dropdown on outside click or Escape
  useEffect(() => {
    if (!desktopServicesOpen) return;
    const handleOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDesktopServicesOpen(false);
      }
    };
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDesktopServicesOpen(false);
    };
    document.addEventListener("mousedown", handleOutside);
    window.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("mousedown", handleOutside);
      window.removeEventListener("keydown", handleEsc);
    };
  }, [desktopServicesOpen]);

  // Lock background scroll and allow Escape key to close mobile drawer
  useEffect(() => {
    const lenis = (window as unknown as { __lenis?: { stop: () => void; start: () => void } })
      .__lenis;
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      if (lenis) lenis.stop();
    } else {
      document.body.style.overflow = "";
      if (lenis) lenis.start();
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      if (lenis) lenis.start();
    };
  }, [mobileMenuOpen]);

  const isActivePath = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname === path;
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-navy-deep/95 backdrop-blur-md shadow-lg border-b border-navy-border py-3"
            : "bg-navy-deep/90 backdrop-blur-sm border-b border-navy-border/55 py-4 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-2 h-12">
          {/* LEFT SIDE: JG Roofing Ltd Logo & Brand */}
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 sm:gap-3 shrink-0 group focus:outline-none focus:ring-2 focus:ring-copper/50 rounded-lg p-1"
            aria-label="JG Roofing Ltd Home"
          >
            <Logo size="md" showSubtitle={true} />
          </Link>

          {/* CENTER: Desktop Multi-Page Navigation with Services Dropdown */}
          <nav aria-label="Primary navigation" className="hidden lg:flex items-center gap-7 pl-4">
            <Link
              to="/"
              className={`font-display text-[13px] font-semibold uppercase tracking-wider transition-colors duration-200 py-1 whitespace-nowrap ${
                isActivePath("/") ? "text-copper" : "text-slate-300 hover:text-copper"
              }`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setDesktopServicesOpen(true)}
              onMouseLeave={() => setDesktopServicesOpen(false)}
            >
              <button
                type="button"
                aria-expanded={desktopServicesOpen}
                aria-haspopup="menu"
                onClick={() => setDesktopServicesOpen((prev) => !prev)}
                className={`font-display text-[13px] font-semibold uppercase tracking-wider transition-colors duration-200 py-1 whitespace-nowrap inline-flex items-center gap-1 cursor-pointer focus:outline-none ${
                  isServicesActive || desktopServicesOpen
                    ? "text-copper"
                    : "text-slate-300 hover:text-copper"
                }`}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    desktopServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {desktopServicesOpen && (
                <div
                  role="menu"
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-80 z-50"
                >
                  <div className="bg-navy-slate border border-navy-border rounded-xl shadow-2xl p-2 space-y-1 animate-fadeIn">
                    {CORE_SERVICES.map((svc) => {
                      const active = location.pathname === svc.path;
                      return (
                        <Link
                          key={svc.slug}
                          to={svc.path}
                          role="menuitem"
                          onClick={() => setDesktopServicesOpen(false)}
                          className={`block p-3 rounded-lg transition-colors ${
                            active
                              ? "bg-copper/15 border border-copper/40 text-white"
                              : "hover:bg-navy-deep text-slate-200"
                          }`}
                        >
                          <span
                            className={`font-display text-xs font-bold uppercase tracking-wide block ${
                              active ? "text-copper" : "text-white"
                            }`}
                          >
                            {svc.navLabel}
                          </span>
                          <span className="font-body text-[11px] text-slate-400 leading-snug block mt-0.5">
                            {svc.shortTagline}
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/about"
              className={`font-display text-[13px] font-semibold uppercase tracking-wider transition-colors duration-200 py-1 whitespace-nowrap ${
                isActivePath("/about") ? "text-copper" : "text-slate-300 hover:text-copper"
              }`}
            >
              About
            </Link>

            <Link
              to="/projects"
              className={`font-display text-[13px] font-semibold uppercase tracking-wider transition-colors duration-200 py-1 whitespace-nowrap ${
                isActivePath("/projects") ? "text-copper" : "text-slate-300 hover:text-copper"
              }`}
            >
              Projects
            </Link>

            <Link
              to="/contact"
              className={`font-display text-[13px] font-semibold uppercase tracking-wider transition-colors duration-200 py-1 whitespace-nowrap ${
                isActivePath("/contact") ? "text-copper" : "text-slate-300 hover:text-copper"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* RIGHT SIDE: Phone and Get a Free Quote CTA */}
          <div className="flex items-center gap-2 sm:gap-4 lg:gap-6 shrink-0">
            <a
              href="tel:+353852248597"
              className="hidden md:flex items-center gap-2 text-slate-300 hover:text-copper transition-colors whitespace-nowrap"
            >
              <Phone className="w-4 h-4 text-copper shrink-0" />
              <span className="font-mono text-xs font-bold tracking-tight">
                +353 85 224 8597
              </span>
            </a>

            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary !py-2 sm:!py-2.5 !px-3 sm:!px-4 text-[11px] sm:text-xs whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-copper/50"
            >
              <span className="hidden sm:inline">Get a Free Quote</span>
              <span className="sm:hidden">Free Quote</span>
            </Link>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="lg:hidden p-2 text-slate-300 hover:text-white hover:bg-navy-slate rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-copper/50 cursor-pointer"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-drawer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        id="mobile-nav-drawer"
        aria-hidden={!mobileMenuOpen}
        className={`fixed inset-0 z-40 bg-navy-deep/98 backdrop-blur-lg transform transition-transform duration-300 lg:hidden flex flex-col justify-between ${
          mobileMenuOpen ? "translate-x-0 pointer-events-auto" : "translate-x-full pointer-events-none"
        }`}
      >
        <div
          className="pt-24 px-6 pb-6 overflow-y-auto flex-grow flex flex-col gap-5"
          data-lenis-prevent
        >
          <nav aria-label="Mobile navigation" className="flex flex-col gap-3">
            <Link
              to="/"
              tabIndex={mobileMenuOpen ? 0 : -1}
              onClick={() => setMobileMenuOpen(false)}
              className={`font-display text-base font-bold uppercase tracking-wider border-b border-navy-border/50 pb-3 flex items-center justify-between transition-colors ${
                isActivePath("/") ? "text-copper" : "text-white hover:text-copper"
              }`}
            >
              <span>Home</span>
              <span className="text-xs text-copper font-mono">01</span>
            </Link>

            {/* Expandable Services Group */}
            <div className="border-b border-navy-border/50 pb-3">
              <button
                type="button"
                tabIndex={mobileMenuOpen ? 0 : -1}
                aria-expanded={mobileServicesOpen}
                onClick={() => setMobileServicesOpen((prev) => !prev)}
                className={`w-full font-display text-base font-bold uppercase tracking-wider flex items-center justify-between transition-colors cursor-pointer ${
                  isServicesActive ? "text-copper" : "text-white hover:text-copper"
                }`}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 text-copper transition-transform duration-200 ${
                    mobileServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {mobileServicesOpen && (
                <div className="mt-3 pl-3 border-l border-navy-border flex flex-col gap-2.5">
                  {CORE_SERVICES.map((svc) => (
                    <Link
                      key={svc.slug}
                      to={svc.path}
                      tabIndex={mobileMenuOpen ? 0 : -1}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`font-display text-xs font-semibold uppercase tracking-wide py-1 transition-colors ${
                        location.pathname === svc.path
                          ? "text-copper"
                          : "text-slate-300 hover:text-white"
                      }`}
                    >
                      {svc.navLabel}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/about"
              tabIndex={mobileMenuOpen ? 0 : -1}
              onClick={() => setMobileMenuOpen(false)}
              className={`font-display text-base font-bold uppercase tracking-wider border-b border-navy-border/50 pb-3 flex items-center justify-between transition-colors ${
                isActivePath("/about") ? "text-copper" : "text-white hover:text-copper"
              }`}
            >
              <span>About Us</span>
              <span className="text-xs text-copper font-mono">03</span>
            </Link>

            <Link
              to="/projects"
              tabIndex={mobileMenuOpen ? 0 : -1}
              onClick={() => setMobileMenuOpen(false)}
              className={`font-display text-base font-bold uppercase tracking-wider border-b border-navy-border/50 pb-3 flex items-center justify-between transition-colors ${
                isActivePath("/projects") ? "text-copper" : "text-white hover:text-copper"
              }`}
            >
              <span>Projects</span>
              <span className="text-xs text-copper font-mono">04</span>
            </Link>

            <Link
              to="/contact"
              tabIndex={mobileMenuOpen ? 0 : -1}
              onClick={() => setMobileMenuOpen(false)}
              className={`font-display text-base font-bold uppercase tracking-wider border-b border-navy-border/50 pb-3 flex items-center justify-between transition-colors ${
                isActivePath("/contact") ? "text-copper" : "text-white hover:text-copper"
              }`}
            >
              <span>Contact &amp; Free Quote</span>
              <span className="text-xs text-copper font-mono">05</span>
            </Link>
          </nav>

          <Link
            to="/contact"
            tabIndex={mobileMenuOpen ? 0 : -1}
            onClick={() => setMobileMenuOpen(false)}
            className="btn-primary w-full !py-3.5 flex items-center justify-center gap-2"
          >
            <span>Request Free Roof Survey</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <div className="flex flex-col gap-3 mt-1 bg-navy-slate/60 p-5 border border-navy-border rounded-xl">
            <span className="font-display text-xs text-copper uppercase tracking-widest font-bold">
              Direct Assistance
            </span>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+353852248597"
                tabIndex={mobileMenuOpen ? 0 : -1}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2.5 text-sm text-white font-medium hover:text-copper transition-colors"
              >
                <Phone className="w-4 h-4 text-copper shrink-0" />
                <span className="font-mono">+353 85 224 8597</span>
              </a>
              <a
                href="mailto:jgroofingltd@gmail.com"
                tabIndex={mobileMenuOpen ? 0 : -1}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2.5 text-sm text-slate-300 font-medium hover:text-copper transition-colors"
              >
                <Mail className="w-4 h-4 text-copper shrink-0" />
                <span>jgroofingltd@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        <div className="p-5 border-t border-navy-border bg-navy-deep text-center">
          <p className="text-[10px] text-slate-500">
            © 2026 JG Roofing Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
}
