"use client";

import { useEffect, useState } from "react";

import { calculateReadingProgress } from "@/lib/reading";

export function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const nextProgress = calculateReadingProgress(
        window.scrollY,
        window.innerHeight,
        document.documentElement.scrollHeight,
      );
      setProgress(nextProgress);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-50 h-1 bg-transparent">
      <div
        aria-hidden="true"
        className="h-full bg-linear-to-r from-[var(--accent)] via-[var(--primary)] to-[var(--accent)] shadow-[0_0_16px_rgba(125,40,125,0.45)] transition-[width] duration-100"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
