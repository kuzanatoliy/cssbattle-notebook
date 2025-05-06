const { HOST_NAME, ROOT_PATH } = require("./constants");

const date = new Date();

module.exports = ({ list, root }) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${
    root
      ? `
    <url>
      <loc>${HOST_NAME}${ROOT_PATH}${
          root.mapPath ? `/${root.mapPath}` : ""
        }/</loc>
    </url>
    <url>
      <loc>${HOST_NAME}${ROOT_PATH}${
          root.mapPath ? `/${root.mapPath}` : ""
        }/index.html</loc>
    </url>
  `
      : {}
  }
  ${list
    .map(
      (item) => `
    <url>
      <loc>${HOST_NAME}${ROOT_PATH}/${item.mapPath}</loc>
    </url>
  `
    )
    .join("")}
</urlset>`;
