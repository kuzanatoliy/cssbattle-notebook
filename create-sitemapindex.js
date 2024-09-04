const { HOST_NAME, ROOT_PATH } = require("./constatns");

module.exports = ({ list, root }) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${
    root
      ? `
    
    <sitemap>
      <loc>${HOST_NAME}/${ROOT_PATH}/</loc>
    </sitemap>
    <sitemap>
      <loc>${HOST_NAME}/${ROOT_PATH}/${root.mapPath}</loc>
    </sitemap>
  `
      : {}
  }
  ${list
    .map(
      (item) => `
    <sitemap>
      <loc>${HOST_NAME}/${ROOT_PATH}/${item.mapPath}</loc>
    </sitemap>
  `
    )
    .join("")}
</sitemapindex>`;
