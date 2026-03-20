import fs from "fs";
import path from "path";
import Report from "@/content/report.mdx";
import { HeaderHideOnScroll } from "@/components/reader/header-hide-on-scroll";
import { ReaderFooter } from "@/components/reader/reader-footer";
import { ReadingProgress } from "@/components/reader/reading-progress";
import { ReferencesSection } from "@/components/reader/references-section";
import { StickyToc } from "@/components/reader/sticky-toc";
import { BackToTop } from "@/components/reader/back-to-top";
import { ShareButton } from "@/components/reader/share-button";
import { useMDXComponents } from "@/mdx-components";
import { getTableOfContents } from "@/lib/toc";

function getReadingTime(): number {
  try {
    const filePath = "content/report.mdx";
    const fullPath = path.join(process.cwd() /* turbopackIgnore: true */, filePath);
    const content = fs.readFileSync(fullPath, "utf-8");
    const words = content.trim().split(/\s+/).length;
    return Math.ceil(words / 220); // Average reading speed for academic texts
  } catch (e) {
    return 15;
  }
}

export default function Home() {
  const toc = getTableOfContents("content/report.mdx");
  const readingTime = getReadingTime();
  const mdxComponents = useMDXComponents({});

  return (
    <>
      <ReadingProgress />
      <HeaderHideOnScroll />

      <main className="relative mx-auto w-full max-w-[1440px] px-2 pt-32 pb-24 sm:px-6 lg:px-12 w-full overflow-hidden sm:overflow-visible">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[500px] bg-[radial-gradient(circle_at_top_left,rgba(194,155,64,0.12),transparent_55%),radial-gradient(circle_at_top_right,rgba(107,33,168,0.11),transparent_50%)]" />

        <div className="grid items-start gap-8 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-12 xl:grid-cols-[280px_minmax(0,1fr)] xl:gap-16">
          <StickyToc items={toc} />

          <section className="min-w-0 w-full rounded-xl border border-[color:var(--border)] bg-[color:var(--card)]/95 px-3 py-8 shadow-[0_32px_80px_-20px_rgba(28,25,23,0.08)] sm:px-12 sm:py-16 lg:px-20">
            <div className="mb-4 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-center">
              <span className="hidden sm:block h-[1px] w-8 bg-[color:var(--primary)]/40" />
              <span className="text-[0.6rem] sm:text-[0.65rem] font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase text-[color:var(--primary)]">Tài liệu nghiên cứu chuyên sâu</span>
              <span className="hidden sm:block h-[1px] w-8 bg-[color:var(--primary)]/40" />
            </div>

            <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--muted)]/40 px-4 py-1.5 text-[0.75rem] text-[color:var(--muted-foreground)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[color:var(--primary)]"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                <span>Thời gian đọc ước tính: <strong className="text-[color:var(--foreground)]">{readingTime} phút</strong></span>
              </div>
              <ShareButton />
            </div>

            <article className="reader-prose">
              <Report components={mdxComponents} />
            </article>

            <ReferencesSection />
          </section>
        </div>

        <BackToTop />
        <ReaderFooter />
      </main>
    </>
  );
}
