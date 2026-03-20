"use client";

import { Share2Icon, LinkIcon, CheckIcon } from "lucide-react";
import { useState, useCallback } from "react";
import { cn } from "@/lib/utils";

export function ShareButton() {
  const [copied, setCopied] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const url = typeof window !== "undefined" ? window.location.href : "";
  const title = "Bản thể học và Thần học luân lý về Tội lỗi | Báo cáo Chuyên sâu";

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [url]);

  const shareFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
  };

  const shareTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`, '_blank');
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        onBlur={() => setTimeout(() => setIsOpen(false), 200)}
        className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--muted)]/40 px-4 py-1.5 text-[0.75rem] font-bold uppercase tracking-wider text-[color:var(--primary)] transition-all hover:bg-[color:var(--primary)]/10"
        aria-label="Chia sẻ tài liệu"
      >
        <Share2Icon className="size-3.5" />
        <span>Chia sẻ</span>
      </button>

      {isOpen && (
        <div className="absolute left-1/2 z-50 mt-2 w-48 -translate-x-1/2 sm:left-auto sm:right-0 sm:translate-x-0 origin-top rounded-md bg-[color:var(--card)] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] ring-1 ring-[color:var(--border)] focus:outline-none">
          <div className="p-1.5 space-y-0.5">
            <button
              onClick={handleCopy}
              className="flex w-full items-center gap-2.5 rounded-sm px-3 py-2 text-[0.85rem] font-medium text-[color:var(--card-foreground)] hover:bg-[color:var(--muted)]/80"
            >
              {copied ? <CheckIcon className="size-4 text-emerald-500" /> : <LinkIcon className="size-4 text-[color:var(--muted-foreground)]" />}
              {copied ? "Đã sao chép" : "Sao chép liên kết"}
            </button>
            <button
              onClick={shareFacebook}
              className="flex w-full items-center gap-2.5 rounded-sm px-3 py-2 text-[0.85rem] font-medium text-[color:var(--card-foreground)] hover:bg-[color:var(--muted)]/80"
            >
              <svg className="size-4 text-blue-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
              Chia sẻ Facebook
            </button>
            <button
              onClick={shareTwitter}
              className="flex w-full items-center gap-2.5 rounded-sm px-3 py-2 text-[0.85rem] font-medium text-[color:var(--card-foreground)] hover:bg-[color:var(--muted)]/80"
            >
              <svg className="size-3.5 text-zinc-800 dark:text-zinc-200" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              Chia sẻ X (Twitter)
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
