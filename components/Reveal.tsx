"use client";

import { useEffect, useRef } from "react";

type Direction = "up" | "left" | "right";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: Direction;
  threshold?: number;
}

export default function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  threshold = 0.12,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const cls =
      direction === "left"
        ? "reveal-left"
        : direction === "right"
        ? "reveal-right"
        : "reveal";
    el.classList.add(cls);

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("in-view");
          obs.unobserve(el);
        }
      },
      { threshold, rootMargin: "0px 0px -48px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [direction, threshold]);

  return (
    <div
      ref={ref}
      className={className}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
