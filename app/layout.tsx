import type { Metadata } from "next";
import { Inter, EB_Garamond } from "next/font/google";

import { Providers } from "@/app/providers";
import "./globals.css";

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

const serif = EB_Garamond({
  variable: "--font-serif",
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Thần học Công giáo | Bản thể học và Thần học luân lý về Tội lỗi",
  description:
    "Không gian đọc học thuật chuyên sâu về thần học Công giáo, khám phá nghịch lý của thân phận con người và sứ mạng Cứu độ qua nhãn quan Kitô giáo.",
  keywords: ["thần học", "công giáo", "tội lỗi", "bí tích hòa giải", "nghiên cứu thần học", "tâm lý học tôn giáo"],
  authors: [{ name: "Tác giả Thần học" }],
  openGraph: {
    title: "Bản thể học và Thần học luân lý về Tội lỗi",
    description: "Khám phá nghịch lý của thân phận con người và sứ mạng Cứu độ qua nhãn quan Kitô giáo trong Báo cáo Chuyên sâu.",
    type: "article",
    locale: "vi_VN",
    siteName: "Thần học Công giáo",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bản thể học và Thần học luân lý về Tội lỗi",
    description: "Không gian đọc học thuật chuyên sâu về thần học Công giáo.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      suppressHydrationWarning
      className={`${sans.variable} ${serif.variable}`}
    >
      <body className="min-h-screen bg-background text-foreground antialiased" suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
