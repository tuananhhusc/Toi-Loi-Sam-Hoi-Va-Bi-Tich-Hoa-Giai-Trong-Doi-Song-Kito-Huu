import type { MDXComponents } from "mdx/types";

import { CitationRef } from "@/components/reader/citation-ref";

const customComponents: MDXComponents = {
  CitationRef,
  a: ({ className, ...props }) => (
    <a
      className={`text-[color:var(--accent)] underline decoration-[color:var(--primary)]/70 underline-offset-2 transition-colors hover:text-[color:var(--primary)] ${className ?? ""}`}
      {...props}
    />
  ),
  blockquote: ({ className, ...props }) => (
    <blockquote
      className={`border-l-4 border-[color:var(--primary)]/70 bg-[color:var(--muted)]/45 px-6 py-4 my-10 text-[color:var(--muted-foreground)] italic leading-relaxed ${className ?? ""}`}
      {...props}
    />
  ),
  hr: ({ className, ...props }) => (
    <hr className={`my-16 border-t border-[color:var(--border)] opacity-60 ${className ?? ""}`} {...props} />
  ),
  img: ({ className, alt, ...props }) => (
    <figure className="my-12 flex flex-col items-center">
      <img
        className={`rounded-xl border border-[color:var(--border)] shadow-sm max-w-full ${className ?? ""}`}
        alt={alt}
        {...props}
      />
      {alt && <figcaption className="mt-4 text-center font-sans text-[0.7rem] uppercase tracking-widest text-[color:var(--muted-foreground)]">{alt}</figcaption>}
    </figure>
  ),
  table: ({ className, ...props }) => (
    <div className="my-8 overflow-x-auto rounded-xl border border-[color:var(--border)]">
      <table className={`w-full min-w-[650px] border-collapse text-left ${className ?? ""}`} {...props} />
    </div>
  ),
  h2: ({ className, ...props }) => (
    <h2
      className={`group mt-20 mb-8 scroll-mt-28 font-serif text-[2.1rem] font-medium tracking-tight text-[color:var(--accent)] ${className ?? ""}`}
      {...props}
    />
  ),
  h3: ({ className, ...props }) => (
    <h3
      className={`group mt-14 mb-6 scroll-mt-28 font-serif text-[1.55rem] font-medium tracking-tight text-[color:var(--foreground)] ${className ?? ""}`}
      {...props}
    />
  ),
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...customComponents,
    ...components,
  };
}
