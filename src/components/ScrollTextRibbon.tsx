import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export default function ScrollTextRibbon() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Smooth scroll-driven horizontal offset
  const xLeft = useTransform(scrollYProgress, [0, 1], ["0%", "-28%"]);
  const xRight = useTransform(scrollYProgress, [0, 1], ["-28%", "0%"]);

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden py-6 bg-navy-deep border-y border-navy-border/40 select-none pointer-events-none"
    >
      {/* Top track - moves left */}
      <motion.div
        style={{ x: xLeft }}
        className="flex whitespace-nowrap text-[12px] sm:text-xs font-display font-bold uppercase tracking-[0.25em] text-slate-500/70 mb-2 will-change-transform"
      >
        <span className="mx-6 text-copper">◆</span>
        <span>SLATE SPECIALISTS</span>
        <span className="mx-6 text-copper">◆</span>
        <span>ZINC &amp; COPPER ARCHITECTURAL FLASHINGS</span>
        <span className="mx-6 text-copper">◆</span>
        <span>TRADITIONAL DUBLIN STONE CONSERVATION</span>
        <span className="mx-6 text-copper">◆</span>
        <span>STRUCTURAL ROOF TIMBERING</span>
        <span className="mx-6 text-copper">◆</span>
        <span>FORENSIC LEAK DETECTION</span>
        <span className="mx-6 text-copper">◆</span>
        <span>SLATE SPECIALISTS</span>
        <span className="mx-6 text-copper">◆</span>
        <span>ZINC &amp; COPPER ARCHITECTURAL FLASHINGS</span>
        <span className="mx-6 text-copper">◆</span>
        <span>TRADITIONAL DUBLIN STONE CONSERVATION</span>
      </motion.div>

      {/* Bottom track - moves right */}
      <motion.div
        style={{ x: xRight }}
        className="flex whitespace-nowrap text-[11px] sm:text-[11px] font-display font-medium uppercase tracking-[0.3em] text-slate-600/60 will-change-transform"
      >
        <span className="mx-6 text-slate-600">✦</span>
        <span>TERENURE</span>
        <span className="mx-6 text-slate-600">✦</span>
        <span>RATHGAR</span>
        <span className="mx-6 text-slate-600">✦</span>
        <span>BALLSBRIDGE</span>
        <span className="mx-6 text-slate-600">✦</span>
        <span>RANELAGH</span>
        <span className="mx-6 text-slate-600">✦</span>
        <span>DUN LAOGHAIRE</span>
        <span className="mx-6 text-slate-600">✦</span>
        <span>BLACKROCK</span>
        <span className="mx-6 text-slate-600">✦</span>
        <span>DALKEY</span>
        <span className="mx-6 text-slate-600">✦</span>
        <span>KILLINEY</span>
        <span className="mx-6 text-slate-600">✦</span>
        <span>HOWTH</span>
        <span className="mx-6 text-slate-600">✦</span>
        <span>MALAHIDE</span>
        <span className="mx-6 text-slate-600">✦</span>
        <span>DUBLIN 4 &amp; 6 SPECIALISTS</span>
      </motion.div>
    </div>
  );
}
