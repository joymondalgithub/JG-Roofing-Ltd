import { Link } from "react-router-dom";
import { ChevronRight, Phone, Mail, MapPin, Clock, ExternalLink } from "lucide-react";
import EstimatorAndQuote from "../components/EstimatorAndQuote";
import ServiceAreas from "../components/ServiceAreas";
import { usePageSEO } from "../hooks/usePageSEO";

export default function ContactPage() {
  usePageSEO({
    title: "Contact JG Roofing Ltd | Free Roofing Quote & Site Survey Dublin",
    description:
      "Request a free, no-obligation roofing quote or 48-hour site survey in Dublin. Call JG Roofing Ltd on +353 85 224 8597 or email jgroofingltd@gmail.com.",
    path: "/contact",
  });

  return (
    <div className="bg-navy-deep text-slate-300">
      {/* Page Hero & Direct Contact Strip */}
      <section className="pt-32 pb-14 bg-navy-deep border-b border-navy-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 text-xs font-display uppercase tracking-wider text-slate-400"
          >
            <Link to="/" className="hover:text-copper transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-copper font-bold">Contact &amp; Free Quote</span>
          </nav>

          <div className="max-w-3xl space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-copper" />
              <span className="font-display text-xs font-bold text-copper uppercase tracking-widest">
                FREE 48-HOUR DUBLIN SITE SURVEYS
              </span>
            </div>
            <h1 className="font-display text-3xl sm:text-5xl text-white font-extrabold uppercase tracking-tight leading-tight">
              Contact JG Roofing Ltd &amp; Request a Free Quote
            </h1>
            <p className="font-body text-sm sm:text-base text-slate-300 leading-relaxed">
              Speak directly with our Terenure surveyor desk for emergency storm repairs, natural slate restorations, flat roofs, leadwork, or roofline renewals across Greater Dublin.
            </p>
          </div>

          {/* 4 Direct Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <a
              href="tel:+353852248597"
              className="bg-navy-slate border border-navy-border hover:border-copper/60 rounded-xl p-5 transition-colors flex flex-col justify-between gap-3 group"
            >
              <div className="w-10 h-10 rounded-lg bg-navy-deep border border-navy-border flex items-center justify-center text-copper">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="font-display text-[10px] font-bold uppercase tracking-widest text-slate-400 block">
                  Direct Phone Line
                </span>
                <span className="font-mono text-sm font-bold text-white group-hover:text-copper transition-colors block mt-0.5">
                  +353 85 224 8597
                </span>
                <span className="text-[11px] text-slate-400 block mt-1">
                  Tap to call our surveyor desk
                </span>
              </div>
            </a>

            <a
              href="mailto:jgroofingltd@gmail.com"
              className="bg-navy-slate border border-navy-border hover:border-copper/60 rounded-xl p-5 transition-colors flex flex-col justify-between gap-3 group"
            >
              <div className="w-10 h-10 rounded-lg bg-navy-deep border border-navy-border flex items-center justify-center text-copper">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="font-display text-[10px] font-bold uppercase tracking-widest text-slate-400 block">
                  Email Desk
                </span>
                <span className="font-mono text-xs sm:text-sm font-bold text-white group-hover:text-copper transition-colors block mt-0.5 break-all">
                  jgroofingltd@gmail.com
                </span>
                <span className="text-[11px] text-slate-400 block mt-1">
                  Send drawings or roof photos
                </span>
              </div>
            </a>

            <div className="bg-navy-slate border border-navy-border rounded-xl p-5 flex flex-col justify-between gap-3">
              <div className="w-10 h-10 rounded-lg bg-navy-deep border border-navy-border flex items-center justify-center text-copper">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <span className="font-display text-[10px] font-bold uppercase tracking-widest text-slate-400 block">
                  Business Hours
                </span>
                <span className="font-display text-sm font-bold text-white block mt-0.5">
                  Mon – Fri: 07:30 – 18:00
                </span>
                <span className="text-[11px] text-copper font-medium block mt-1">
                  Emergency Storm Cover Available
                </span>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=JG+Roofing+Ltd+18+Terenure+Road+West+Terenure+Dublin+Ireland"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-navy-slate border border-navy-border hover:border-copper/60 rounded-xl p-5 transition-colors flex flex-col justify-between gap-3 group"
            >
              <div className="w-10 h-10 rounded-lg bg-navy-deep border border-navy-border flex items-center justify-center text-copper">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="font-display text-[10px] font-bold uppercase tracking-widest text-slate-400 block">
                  Registered Office
                </span>
                <span className="font-body text-xs font-semibold text-white group-hover:text-copper transition-colors block mt-0.5 leading-snug">
                  18 Terenure Road West, Terenure, Dublin, D06 K767
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] text-copper mt-1">
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Default directly to the Quote Form tab on /contact */}
      <EstimatorAndQuote defaultTab="quote" />

      <ServiceAreas />
    </div>
  );
}
