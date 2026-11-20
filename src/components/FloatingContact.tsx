import { useState, useEffect } from "react";
import { Phone, ArrowUp } from "lucide-react";

const WHATSAPP_NUMBER = "353852248597";
const WHATSAPP_MESSAGE =
  "Hi JG Roofing Ltd, I would like to request a free roofing survey and estimate.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

function WhatsAppIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M16.004 2.667C8.64 2.667 2.667 8.64 2.667 16.004c0 2.353.615 4.65 1.783 6.675L2.56 29.44l6.942-1.821a13.28 13.28 0 0 0 6.502 1.718h.006c7.362 0 13.337-5.975 13.337-13.333 0-3.562-1.387-6.912-3.906-9.431a13.255 13.255 0 0 0-9.437-3.906Zm0 24.417h-.005a11.05 11.05 0 0 1-5.635-1.544l-.404-.24-4.12 1.08 1.1-4.017-.263-.419a11.045 11.045 0 0 1-1.696-5.94c0-6.108 4.97-11.079 11.085-11.079 2.96 0 5.743 1.154 7.834 3.247a11.005 11.005 0 0 1 3.244 7.837c0 6.109-4.972 11.075-11.14 11.075Zm6.077-8.297c-.333-.167-1.97-.972-2.275-1.083-.306-.111-.528-.167-.75.167-.222.333-.861 1.083-1.056 1.305-.194.222-.389.25-.722.083-.333-.167-1.407-.519-2.68-1.654-.99-.883-1.659-1.974-1.853-2.307-.194-.333-.021-.513.146-.68.15-.149.333-.389.5-.583.167-.194.222-.333.333-.556.111-.222.056-.417-.028-.583-.083-.167-.75-1.806-1.028-2.473-.27-.65-.545-.562-.75-.572-.194-.01-.417-.012-.639-.012a1.226 1.226 0 0 0-.889.417c-.305.333-1.167 1.139-1.167 2.778s1.195 3.222 1.361 3.445c.167.222 2.35 3.59 5.694 5.033.796.344 1.417.549 1.901.702.799.254 1.526.218 2.101.132.641-.096 1.97-.806 2.248-1.584.278-.778.278-1.445.194-1.584-.083-.139-.306-.222-.639-.389Z" />
    </svg>
  );
}

export default function FloatingContact() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowBackToTop(window.scrollY > 450);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScrollTop = () => {
    const lenis = (
      window as unknown as {
        __lenis?: { scrollTo: (target: number, opts?: { duration?: number }) => void };
      }
    ).__lenis;
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.0 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div
      aria-label="Quick contact actions"
      className="fixed bottom-5 right-4 sm:right-6 z-30 flex flex-col items-end gap-2.5 pointer-events-none"
    >
      {/* WhatsApp Direct Chat */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with JG Roofing Ltd on WhatsApp"
        title="Chat on WhatsApp"
        className="pointer-events-auto group relative w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white shadow-lg shadow-black/45 ring-2 ring-[#25D366]/35 flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-white"
      >
        <WhatsAppIcon className="w-6 h-6 sm:w-7 sm:h-7" />
        <span className="hidden sm:block pointer-events-none absolute right-full mr-3 px-2.5 py-1 rounded-md bg-navy-slate/95 border border-navy-border text-white text-[11px] font-display font-semibold whitespace-nowrap opacity-0 translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 shadow-lg">
          Chat on WhatsApp
        </span>
      </a>

      {/* Direct Phone Call */}
      <a
        href="tel:+353852248597"
        aria-label="Call JG Roofing Ltd on +353 85 224 8597"
        title="Call +353 85 224 8597"
        className="pointer-events-auto group relative w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-copper hover:bg-copper-hover text-white shadow-lg shadow-black/40 border border-white/15 flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-copper"
      >
        <Phone className="w-5 h-5" />
        <span className="hidden sm:block pointer-events-none absolute right-full mr-3 px-2.5 py-1 rounded-md bg-navy-slate/95 border border-navy-border text-white text-[11px] font-display font-semibold whitespace-nowrap opacity-0 translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 shadow-lg">
          Call +353 85 224 8597
        </span>
      </a>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          type="button"
          onClick={handleScrollTop}
          aria-label="Scroll back to top"
          title="Back to top"
          className="pointer-events-auto w-10 h-10 rounded-full bg-navy-slate/95 hover:bg-navy-border text-slate-300 hover:text-white border border-navy-border shadow-lg flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-copper"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
