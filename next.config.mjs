import createMDX from "@next/mdx";

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
  turbopack: {
    rules: {
      "*.mdx": {
        loaders: ["@mdx-js/loader"],
        as: "*.js",
      },
    },
    resolveExtensions: [".mdx", ".tsx", ".ts", ".jsx", ".js", ".mjs", ".json"],
  },
};

const withMDX = createMDX({
  options: {
    remarkPlugins: ["remark-gfm"],
    rehypePlugins: [
      "rehype-slug",
      [
        "rehype-autolink-headings",
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

export default withMDX(nextConfig);
