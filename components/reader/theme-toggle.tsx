"use client";

import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa";

import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <Button
      type="button"
      variant="outline"
      size="sm"
      className="border-[color:var(--accent)]/30 bg-[color:var(--background)]/60 font-sans text-[0.75rem] tracking-[0.08em] uppercase"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Chuyển chế độ đọc"
    >
      {isDark ? <FaSun aria-hidden="true" /> : <FaMoon aria-hidden="true" />}
      {isDark ? "Sáng" : "Tối"}
    </Button>
  );
}
