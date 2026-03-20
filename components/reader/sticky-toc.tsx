"use client";

import { useEffect, useMemo, useState } from "react";
import { FaListUl } from "react-icons/fa";

import type { TocItem } from "@/lib/reader-types";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { XIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";

type StickyTocProps = {
  items: TocItem[];
};

export function StickyToc({ items }: StickyTocProps) {
  const [activeId, setActiveId] = useState<string>(items[0]?.id ?? "");
  const [open, setOpen] = useState(false);

  const ids = useMemo(() => items.map((item) => item.id), [items]);

  useEffect(() => {
    if (!ids.length) {
      return;
    }

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => Boolean(element));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible[0]?.target?.id) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-30% 0px -60% 0px",
        threshold: [0, 1],
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [ids]);

  if (!items.length) {
    return null;
  }

  const linkClass = (item: TocItem) =>
    cn(
      "group relative flex w-full border-l-2 py-2 pr-4 pl-5 transition-all duration-300 text-left items-start gap-3",
      item.level === 3 && "pl-11 border-l-transparent",
      item.id === activeId
        ? "border-l-[color:var(--primary)] bg-[color:var(--primary)]/8 text-[color:var(--accent)] font-medium"
        : "border-l-transparent text-[color:var(--muted-foreground)] hover:bg-[color:var(--muted)]/40 hover:text-[color:var(--foreground)]",
    );

  return (
    <>
      <div className="fixed bottom-6 left-1/2 z-40 -translate-x-1/2 lg:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className="group flex h-[2.85rem] items-center gap-2.5 rounded-full border border-[color:var(--primary)]/40 bg-[color:var(--card)]/95 px-6 font-sans text-[0.78rem] font-bold tracking-[0.16em] uppercase text-[color:var(--accent)] shadow-[0_12px_40px_-10px_rgba(0,0,0,0.2)] backdrop-blur-md transition-all active:scale-95 hover:bg-[color:var(--muted)]/50"
          >
            <FaListUl aria-hidden="true" className="size-3.5 text-[color:var(--primary)] transition-transform group-hover:scale-110" />
            <span className="relative top-[0.5px]">Mục lục</span>
          </SheetTrigger>
          <SheetContent side="bottom" className="flex max-h-[85vh] flex-col rounded-t-[2.5rem] border-t border-[color:var(--border)] bg-[color:var(--background)] p-0 shadow-2xl transition-transform duration-300">
            {/* Drag Handle */}
            <div className="flex-none flex justify-center pt-3 pb-1">
              <div className="h-1.5 w-12 rounded-full bg-[color:var(--muted-foreground)]/20" />
            </div>

            <SheetHeader className="relative flex flex-row items-center justify-between px-8 py-5 border-b border-[color:var(--border)]/50">
              <div className="flex flex-col">
                <SheetTitle className="font-serif text-[1.2rem] italic text-[color:var(--accent)] text-left">
                  Mục lục tài liệu
                </SheetTitle>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[color:var(--muted)]/40 text-[color:var(--muted-foreground)] text-[0.7rem] font-bold uppercase tracking-wider transition-all active:scale-95 hover:bg-[color:var(--muted)]"
              >
                <XIcon className="size-3.5" />
                <span>Đóng</span>
              </button>
            </SheetHeader>

            <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-0.5 pb-20">
              {items.map((item, index) => {
                const sectionNumber = items.filter((v, i) => i <= index && v.level === 2).length;
                return (
                  <button
                    key={item.id}
                    className={linkClass(item)}
                    onClick={() => {
                      setOpen(false);
                      const element = document.getElementById(item.id);
                      if (element) {
                        const offsetTop = element.getBoundingClientRect().top + window.scrollY - 100;
                        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
                      }
                      window.location.hash = item.id;
                    }}
                  >
                    <div className="flex items-center gap-3 py-1">
                      {item.level === 2 && (
                        <span className="flex-none font-sans text-[0.55rem] font-black tracking-tighter uppercase text-[color:var(--primary)]/90 px-1.5 py-0.5 rounded-md bg-[color:var(--primary)]/5">
                          {sectionNumber.toString().padStart(2, '0')}
                        </span>
                      )}
                      {item.level === 3 && (
                        <div className="flex-none ml-1 w-1 h-[1px] bg-[color:var(--primary)]/20" />
                      )}
                      <span className={cn(
                        "flex-1 text-left truncate transition-colors",
                        item.level === 3 ? "text-[0.8rem] opacity-75 font-normal italic" : "text-[0.85rem] font-medium"
                      )}>
                        {item.text}
                      </span>
                    </div>
                  </button>
                );
              })}
            </nav>
          </SheetContent>
        </Sheet>
      </div>

      <aside className="sticky top-28 hidden h-[calc(100vh-8rem)] w-full overflow-y-auto pr-4 lg:block">
        <div className="mb-6 flex items-center gap-3">
          <div className="h-[1px] flex-1 bg-[color:var(--primary)]/30" />
          <h2 className="font-sans text-[0.68rem] font-bold tracking-[0.2em] uppercase text-[color:var(--primary)]">
            Mục lục
          </h2>
          <div className="h-[1px] w-6 bg-[color:var(--primary)]/30" />
        </div>
        <nav className="flex flex-col gap-1.5">
          {items.map((item, index) => {
            const sectionNumber = items.filter((v, i) => i <= index && v.level === 2).length;
            return (
              <a 
                key={item.id} 
                href={`#${item.id}`} 
                className={linkClass(item)}
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById(item.id);
                  if (element) {
                    const offsetTop = element.getBoundingClientRect().top + window.scrollY - 100;
                    window.scrollTo({ top: offsetTop, behavior: 'smooth' });
                  }
                  window.location.hash = item.id;
                }}
              >
                {item.level === 2 && (
                  <span className={cn(
                    "flex-none mt-0.5 text-[0.65rem] font-bold tracking-tight px-1.5 py-0.5 rounded-sm transition-colors",
                    item.id === activeId 
                      ? "bg-[color:var(--primary)]/20 text-[color:var(--primary)]" 
                      : "bg-[color:var(--muted)] text-[color:var(--muted-foreground)] group-hover:bg-[color:var(--primary)]/10"
                  )}>
                    {sectionNumber.toString().padStart(2, '0')}
                  </span>
                )}
                {item.level === 3 && (
                  <div className="flex-none mt-2.5 w-1.5 h-[1.5px] rounded-full bg-[color:var(--primary)]/30" />
                )}
                <span className={cn(
                  "flex-1 text-[0.88rem] leading-tight transition-colors",
                  item.level === 3 && "italic opacity-80"
                )}>
                  {item.text}
                </span>
              </a>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
