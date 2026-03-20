"use client";

import { useEffect, useState } from "react";
import { ArrowUpIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 500px
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-[5.5rem] right-6 z-40 flex size-11 items-center justify-center rounded-full bg-[color:var(--primary)] text-[color:var(--primary-foreground)] shadow-xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[color:var(--ring)] focus:ring-offset-2 lg:bottom-10 lg:right-10",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      )}
      aria-label="Lên đầu trang"
    >
      <ArrowUpIcon className="size-5" />
    </button>
  );
}
