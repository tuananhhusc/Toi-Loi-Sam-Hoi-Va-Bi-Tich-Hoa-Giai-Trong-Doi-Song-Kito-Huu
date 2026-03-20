"use client";

import { useMemo } from "react";

import { citationMap } from "@/content/citations";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

type CitationRefProps = {
  id: number;
};

export function CitationRef({ id }: CitationRefProps) {
  const citation = useMemo(() => citationMap.get(id), [id]);

  if (!citation) {
    return (
      <span className="ml-0.5 inline-flex align-baseline text-[0.75em] font-bold text-[color:var(--muted-foreground)] relative bottom-[0.3em] font-serif">
        [{id}]
      </span>
    );
  }

  return (
    <span className="group relative ml-0.5 inline-flex align-baseline">
      <Tooltip>
        <TooltipTrigger
          className="cursor-help inline-flex text-[0.75em] font-bold text-[color:var(--primary)] relative bottom-[0.3em] font-serif transition-colors hover:text-[color:var(--accent)]"
          aria-label={`Nguồn tham khảo ${id}`}
        >
          [{id}]
        </TooltipTrigger>
        <TooltipContent className="max-w-[18rem] rounded-sm border border-[color:var(--border)] bg-[color:var(--card)] px-4 py-3 text-[0.8rem] leading-relaxed text-[color:var(--card-foreground)] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] font-serif">
          <p className="font-medium text-[color:var(--accent)]">[{id}] {citation.title}</p>
          <a
            href={citation.url}
            target="_blank"
            rel="noreferrer"
            className="mt-1 inline-block break-all text-[color:var(--accent)] underline decoration-[color:var(--primary)]/70 underline-offset-2"
          >
            {citation.url}
          </a>
        </TooltipContent>
      </Tooltip>

      <span className="pointer-events-none absolute top-1/2 left-full z-20 ml-6 hidden w-[18rem] -translate-y-1/2 rounded-sm border border-[color:var(--border)] bg-[color:var(--card)] p-4 text-[0.8rem] leading-relaxed text-[color:var(--card-foreground)] opacity-0 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] font-serif transition-opacity duration-200 xl:block xl:group-hover:opacity-100 xl:group-focus-within:opacity-100">
        <span className="mb-2 block font-semibold text-[color:var(--accent)]">[{id}] {citation.title}</span>
        <a
          href={citation.url}
          target="_blank"
          rel="noreferrer"
          className="break-all text-[color:var(--accent)] underline decoration-[color:var(--primary)]/70 underline-offset-2"
        >
          {citation.url}
        </a>
      </span>
    </span>
  );
}
