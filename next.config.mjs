import createMDX from "@next/mdx";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: "append",
          properties: {
            className: ["heading-anchor"],
            ariaLabel: "Liên kết đến mục này",
          },
          content: {
            type: "text",
            value: "#",
          },
        },
      ],
    ],
  },
});

const isProd = process.env.NODE_ENV === "production";
const repoName = "/Toi-Loi-Sam-Hoi-Va-Bi-Tich-Hoa-Giai-Trong-Doi-Song-Kito-Huu";

const nextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  output: isProd ? "export" : undefined,
  basePath: isProd ? repoName : "",
  assetPrefix: isProd ? repoName : "",
  images: {
    unoptimized: true,
  },
};

export default withMDX(nextConfig);
