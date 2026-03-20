"use client";

import { useEffect, useState } from "react";
import { FaCross } from "react-icons/fa";

import { ThemeToggle } from "@/components/reader/theme-toggle";
import { cn } from "@/lib/utils";
import { isScrollingDown, isScrollingUp } from "@/lib/scroll";

export function HeaderHideOnScroll() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const currentY = window.scrollY;

      if (currentY < 80) {
        setHidden(false);
      } else if (isScrollingDown(currentY, lastY)) {
        setHidden(true);
      } else if (isScrollingUp(currentY, lastY)) {
        setHidden(false);
      }

      lastY = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 border-b border-[color:var(--border)] bg-[color:color-mix(in_srgb,var(--background),transparent_12%)]/95 backdrop-blur-md transition-transform duration-300",
        hidden && "-translate-y-full",
      )}
    >
      <div className="mx-auto flex h-14 w-full max-w-[1280px] items-center justify-end px-4 sm:px-6 lg:px-10">
        <ThemeToggle />
      </div>
    </header>
  );
}
