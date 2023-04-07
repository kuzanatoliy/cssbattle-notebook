const date = new Date();

module.exports = ({ list, root }) => `
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${
    root
      ? `
    <url>
      <loc>https://kuzanatoliy.github.io/cssbattle-notebook/${
        root.mapPath
      }</loc>
      <lastmod>${date.getUTCFullYear()}-${date
          .getUTCMonth()
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
      <loc>https://kuzanatoliy.github.io/cssbattle-notebook/${item.mapPath}</loc>
      <lastmod>${item.date}</lastmod>
      <changefreq>never</changefreq> 
      <priority>1</priority>
    </url>
  `
    )
    .join("")}
</urlset>
`;
