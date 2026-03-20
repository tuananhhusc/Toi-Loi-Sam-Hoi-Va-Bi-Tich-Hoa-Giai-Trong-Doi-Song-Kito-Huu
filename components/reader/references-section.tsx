import { citations } from "@/content/citations";

export function ReferencesSection() {
  return (
    <section id="nguon-trich-dan" className="mt-16 border-t border-[color:var(--border)] pt-10">
      <h2 className="font-serif text-2xl font-medium tracking-tight text-[color:var(--accent)] italic">
        Tài liệu tham khảo
      </h2>
      <ol className="mt-6 space-y-4 text-[0.95rem] leading-8 text-[color:var(--muted-foreground)] font-serif">
        {citations.map((citation) => (
          <li key={citation.id} className="pl-2">
            <span className="mr-3 font-bold text-[color:var(--primary)] text-[0.9em]">[{citation.id}]</span>
            <span className="font-medium text-[color:var(--foreground)]">{citation.title}. </span>
            <a
              href={citation.url}
              target="_blank"
              rel="noreferrer"
              className="text-[color:var(--accent)] underline decoration-[color:var(--primary)]/50 underline-offset-4 hover:decoration-[color:var(--primary)]"
            >
              {citation.url}
            </a>
            <span className="ml-3 text-[0.7rem] uppercase tracking-[0.1em] text-[color:var(--muted-foreground)]/80 font-sans">
              (truy cập {citation.accessedAt})
            </span>
          </li>
        ))}
      </ol>
    </section>
  );
}
