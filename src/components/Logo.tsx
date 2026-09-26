interface LogoProps {
  className?: string;
  showSubtitle?: boolean;
  size?: "sm" | "md" | "lg";
}

export default function Logo({ className = "", showSubtitle = true, size = "md" }: LogoProps) {
  const iconSizes = {
    sm: "w-7 h-7",
    md: "w-9 h-9 sm:w-10 sm:h-10",
    lg: "w-11 h-11"
  };

  const textSizes = {
    sm: "text-sm",
    md: "text-base sm:text-lg",
    lg: "text-lg sm:text-xl"
  };

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 group ${className}`}>
      {/* Precision Architectural Roof Crest Emblem */}
      <div className={`relative shrink-0 ${iconSizes[size]} bg-navy-surface border border-copper/40 rounded-lg p-1.5 flex items-center justify-center shadow-md group-hover:border-copper transition-colors duration-300`}>
        <svg
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          aria-hidden="true"
        >
          {/* Outer Roof Pitch / Gable */}
          <path
            d="M18 4L4 16H8V30H28V16H32L18 4Z"
            fill="#0F172A"
            stroke="#D97736"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          {/* Natural Slate Shingle Layers */}
          <path
            d="M18 10L10 17H26L18 10Z"
            fill="#D97736"
            fillOpacity="0.85"
          />
          <path
            d="M18 16L12 21H24L18 16Z"
            fill="#F8FAFC"
            fillOpacity="0.9"
          />
          {/* Foundation & Chimney Detail */}
          <rect x="23" y="7" width="3" height="5" fill="#D97736" />
          <path d="M15 30V24H21V30" fill="#D97736" />
        </svg>
      </div>

      {/* Brand Name Typography */}
      <div className="flex flex-col leading-tight">
        <div className={`font-display font-extrabold ${textSizes[size]} text-white tracking-tight uppercase flex items-center gap-1.5`}>
          <span>JG</span>
          <span className="text-copper">ROOFING</span>
          <span className="text-slate-400 font-medium text-[10px] sm:text-xs">LTD</span>
        </div>
        {showSubtitle && (
          <span className="font-display text-[9px] sm:text-[10px] font-semibold text-slate-400 uppercase tracking-widest hidden sm:inline-block">
            Architectural Contractors
          </span>
        )}
      </div>
    </div>
  );
}
