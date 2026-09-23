import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

interface WordProps {
  children: string;
  progress: any;
  range: [number, number];
  isHighlight?: boolean;
}

function Word({ children, progress, range, isHighlight }: WordProps) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  const y = useTransform(progress, range, [4, 0]);
  const color = useTransform(
    progress,
    range,
    [
      "rgba(148, 163, 184, 0.25)",
      isHighlight ? "#D97736" : "#FFFFFF"
    ]
  );

  return (
    <motion.span
      style={{ opacity, y, color }}
      className={`inline-block mr-2 md:mr-3 transition-colors duration-75 select-none ${
        isHighlight ? "font-bold" : ""
      }`}
    >
      {children}
    </motion.span>
  );
}

export default function ScrollTextStatement() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "end 0.35"]
  });

  const statement = [
    { text: "Every", highlight: false },
    { text: "ridge,", highlight: false },
    { text: "valley,", highlight: false },
    { text: "and", highlight: false },
    { text: "slate", highlight: true },
    { text: "course", highlight: false },
    { text: "we", highlight: false },
    { text: "install", highlight: false },
    { text: "is", highlight: false },
    { text: "engineered", highlight: true },
    { text: "to", highlight: false },
    { text: "withstand", highlight: false },
    { text: "the", highlight: false },
    { text: "toughest", highlight: false },
    { text: "Atlantic", highlight: false },
    { text: "storms.", highlight: true },
    { text: "Crafted", highlight: false },
    { text: "with", highlight: false },
    { text: "surgical", highlight: true },
    { text: "discipline,", highlight: true },
    { text: "graded", highlight: false },
    { text: "timber", highlight: false },
    { text: "counter-battens,", highlight: false },
    { text: "and", highlight: false },
    { text: "uncompromising", highlight: true },
    { text: "architectural", highlight: true },
    { text: "mastery", highlight: true },
    { text: "across", highlight: false },
    { text: "Dublin", highlight: false },
    { text: "for", highlight: false },
    { text: "over", highlight: false },
    { text: "three", highlight: true },
    { text: "decades.", highlight: true }
  ];

  return (
    <section
      ref={containerRef}
      className="relative w-full py-20 md:py-32 bg-navy-slate/60 border-y border-navy-border/60 overflow-hidden"
    >
      {/* Subtle grid background */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-[2px] w-8 bg-copper" />
          <span className="font-display text-xs font-bold uppercase tracking-widest text-copper">
            ARCHITECTURAL MANIFESTO · SCROLL TO READ
          </span>
        </div>

        <p className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase leading-[1.25] tracking-tight text-left">
          {statement.map((item, idx) => {
            const start = idx / statement.length;
            const end = start + (1 / statement.length) * 1.5;
            return (
              <Word
                key={idx}
                progress={scrollYProgress}
                range={[Math.max(0, start), Math.min(1, end)]}
                isHighlight={item.highlight}
              >
                {item.text}
              </Word>
            );
          })}
        </p>

        <div className="mt-8 pt-6 border-t border-navy-border/40 flex flex-wrap items-center justify-between gap-4 text-xs font-body text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-slate-300">Continuous Irish Met Office Structural Compliance</span>
          </div>
          <div className="font-display uppercase tracking-wider text-[11px] text-slate-400">
            BS 5534 &amp; NSAI I.S. 434 Certified
          </div>
        </div>
      </div>
    </section>
  );
}
