export type PlannerTab = "calc" | "quote";

interface ScrollOptions {
  openTab?: PlannerTab;
  delayMs?: number;
}

const TARGET_ALIASES: Record<string, string> = {
  "#testimonials": "#reviews",
  "#estimator": "#contact",
  "#top": "#hero",
};

export function scrollToSection(targetHref: string, options?: ScrollOptions) {
  const normalized = TARGET_ALIASES[targetHref] ?? targetHref;

  if (options?.openTab) {
    window.dispatchEvent(
      new CustomEvent<PlannerTab>("jg:switch-planner-tab", {
        detail: options.openTab,
      })
    );
  }

  const performScroll = () => {
    // Always ensure body scroll lock is cleared and Lenis is active before scrolling
    document.body.style.overflow = "";
    const lenis = (
      window as unknown as {
        __lenis?: {
          start: () => void;
          scrollTo: (
            target: number | HTMLElement,
            opts?: { offset?: number; duration?: number }
          ) => void;
        };
      }
    ).__lenis;

    if (lenis) {
      lenis.start();
    }

    if (normalized === "#hero" || normalized === "#") {
      if (lenis) {
        lenis.scrollTo(0, { duration: 1.0 });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }

    const element = document.querySelector(normalized) as HTMLElement | null;
    if (!element) return;

    if (lenis) {
      lenis.scrollTo(element, { offset: -96, duration: 1.0 });
    } else {
      const headerOffset = 96;
      const top =
        element.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
    }
  };

  if (options?.delayMs && options.delayMs > 0) {
    window.setTimeout(performScroll, options.delayMs);
  } else {
    requestAnimationFrame(performScroll);
  }
}
