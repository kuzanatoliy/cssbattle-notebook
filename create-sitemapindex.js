const date = new Date();

module.exports = ({ list, root }) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${
    root
      ? `
    <sitemap>
      <loc>https://kuzanatoliy.github.io/cssbattle-notebook/${
        root.mapPath
      }</loc>
    </sitemap>
  `
      : {}
  }
  ${list
    .map(
      (item) => `
    <sitemap>
      <loc>https://kuzanatoliy.github.io/cssbattle-notebook/${item.mapPath}</loc>
    </sitemap>
  `
    )
    .join("")}
</sitemapindex>`;
