import fs from "node:fs";
import path from "node:path";

import type { TocItem } from "@/lib/reader-types";

const HEADING_RE = /^(##|###)\s+(.+)$/;

export function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/<[^>]+>/g, "")
    .replace(/[`*_~()[\]{}:;,.!?"']/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export function getTableOfContents(relativePath: string): TocItem[] {
  const absolutePath = path.join(process.cwd(), relativePath);
  const source = fs.readFileSync(absolutePath, "utf8");

  return source
    .split(/\r?\n/)
    .map((line) => {
      const match = line.match(HEADING_RE);
      if (!match) {
        return null;
      }

      const level = match[1] === "##" ? 2 : 3;
      const text = match[2].replace(/<[^>]+>/g, "").trim();
      return {
        id: slugify(text),
        text,
        level,
      } as TocItem;
    })
    .filter((item): item is TocItem => Boolean(item));
}
