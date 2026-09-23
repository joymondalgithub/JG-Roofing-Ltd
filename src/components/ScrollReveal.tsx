import React from "react";
import { motion } from "motion/react";

export type AnimationDirection =
  | "left" // moves from Left to Right
  | "right" // moves from Right to Left
  | "up" // moves from Bottom to Top
  | "down" // moves from Top to Bottom
  | "from-left"
  | "from-right"
  | "from-bottom"
  | "from-top"
  | "none";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: AnimationDirection;
  distance?: number;
  duration?: number;
  once?: boolean;
}

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  distance = 32,
  duration = 0.55,
  once = true,
}: ScrollRevealProps) {
  const getInitialPosition = () => {
    switch (direction) {
      case "left":
      case "from-left":
        // Moves from Left towards Right
        return { x: -distance, y: 0 };
      case "right":
      case "from-right":
        // Moves from Right towards Left
        return { x: distance, y: 0 };
      case "down":
      case "from-top":
        // Moves from Top towards Bottom
        return { y: -distance, x: 0 };
      case "up":
      case "from-bottom":
        // Moves from Bottom towards Top
        return { y: distance, x: 0 };
      case "none":
      default:
        return { x: 0, y: 0 };
    }
  };

  const initialOffset = getInitialPosition();

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...initialOffset,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{ once, margin: "0px 0px -40px 0px" }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // Ultra-smooth responsive cubic bezier
      }}
      className={`will-change-[transform,opacity] ${className}`}
    >
      {children}
    </motion.div>
  );
}

interface AnimatedTextProps {
  text: string;
  direction?: "left" | "right" | "up" | "down";
  className?: string;
  tag?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
  delay?: number;
  distance?: number;
  duration?: number;
}

export function AnimatedText({
  text,
  direction = "up",
  className = "",
  tag = "p",
  delay = 0,
  distance = 30,
  duration = 0.55,
}: AnimatedTextProps) {
  const Tag = motion[tag] as any;

  const initialPos =
    direction === "left"
      ? { x: -distance, y: 0 }
      : direction === "right"
      ? { x: distance, y: 0 }
      : direction === "down"
      ? { y: -distance, x: 0 }
      : { y: distance, x: 0 };

  return (
    <Tag
      initial={{ opacity: 0, ...initialPos }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -40px 0px" }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`will-change-[transform,opacity] ${className}`}
    >
      {text}
    </Tag>
  );
}

interface WordRevealProps {
  text: string;
  className?: string;
  direction?: "left" | "right" | "up";
  delay?: number;
}

export function WordReveal({
  text,
  className = "",
  direction = "up",
  delay = 0,
}: WordRevealProps) {
  const words = text.split(" ");

  return (
    <span className={`inline-flex flex-wrap gap-x-2 gap-y-1 ${className}`}>
      {words.map((word, i) => {
        const initial =
          direction === "left"
            ? { x: -20, opacity: 0 }
            : direction === "right"
            ? { x: 20, opacity: 0 }
            : { y: 20, opacity: 0 };

        return (
          <motion.span
            key={i}
            className="inline-block will-change-[transform,opacity]"
            initial={initial}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "0px 0px -30px 0px" }}
            transition={{
              duration: 0.45,
              delay: delay + i * 0.03,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
          </motion.span>
        );
      })}
    </span>
  );
}
