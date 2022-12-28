import fs from "fs";
import path from "path";

const createSitemap = (slugs) => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
    <loc>https://taeh.shop</loc>
    </url>
    <url>
    <loc>https://taeh.shop/about</loc>
    </url>
        ${slugs
          .map((slug) => {
            return `
            <url>
            <loc>${`https://taeh.shop/post/${slug}`}</loc>
            </url>
            `;
          })
          .join("")}
    </urlset>
`;

export const getServerSideProps = async ({ res }) => {
  const post = await fs.readdirSync(path.join(process.cwd(), "public/posts"));
  const posts = post.map((slug) => slug.split(".")[0]);
  res.setHeader("Content-Type", "text/xml");
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=1200, stale-while-revalidate=600"
  );
  res.write(createSitemap(posts));
  res.end();
  return {
    props: {},
  };
};

export default function Site() {
  return null;
}
