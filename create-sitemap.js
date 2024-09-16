const { HOST_NAME, ROOT_PATH } = require("./constatns");

const date = new Date();

module.exports = ({ list, root }) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${
    root
      ? `
    <url>
      <loc>${HOST_NAME}/${ROOT_PATH}${
          root.mapPath ? `/${root.mapPath}` : ""
        }/</loc>
      <lastmod>${date.getUTCFullYear()}-${(date.getUTCMonth() + 1)
          .toString()
          .padStart(2, "0")}-${date
          .getUTCDate()
          .toString()
          .padStart(2, "0")}</lastmod>
      <changefreq>monthly</changefreq> 
      <priority>1</priority>
    </url>
    <url>
      <loc>${HOST_NAME}/${ROOT_PATH}${
          root.mapPath ? `/${root.mapPath}` : ""
        }/index.html</loc>
      <lastmod>${date.getUTCFullYear()}-${(date.getUTCMonth() + 1)
          .toString()
          .padStart(2, "0")}-${date
          .getUTCDate()
          .toString()
          .padStart(2, "0")}</lastmod>
      <changefreq>monthly</changefreq> 
      <priority>1</priority>
    </url>
  `
      : {}
  }
  ${list
    .map(
      (item) => `
    <url>
      <loc>${HOST_NAME}/${ROOT_PATH}/${item.mapPath}</loc>
      <lastmod>${item.date}</lastmod>
      <changefreq>never</changefreq> 
      <priority>1</priority>
    </url>
  `
    )
    .join("")}
</urlset>`;
