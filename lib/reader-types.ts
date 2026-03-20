export type Citation = {
  id: number;
  title: string;
  url: string;
  accessedAt: string;
};

export type TocItem = {
  id: string;
  text: string;
  level: 2 | 3;
};

export type ReaderTheme = "light" | "dark";
