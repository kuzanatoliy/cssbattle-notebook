const { HOST_NAME, ROOT_PATH } = require("./constants");

const date = new Date();

module.exports = ({ list }) =>
  `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${HOST_NAME}${ROOT_PATH}/</loc>
    <lastmod>${date.getUTCFullYear()}-${(date.getUTCMonth() + 1)
    .toString()
    .padStart(2, "0")}-${date
    .getUTCDate()
    .toString()
    .padStart(2, "0")}</lastmod>
    <changefreq>monthly</changefreq> 
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${HOST_NAME}${ROOT_PATH}/index.html</loc>
    <lastmod>${date.getUTCFullYear()}-${(date.getUTCMonth() + 1)
    .toString()
    .padStart(2, "0")}-${date
    .getUTCDate()
    .toString()
    .padStart(2, "0")}</lastmod>
    <changefreq>monthly</changefreq> 
    <priority>1.0</priority>
  </url>  
  ${list
    .map(
      (item) => `
    <url>
      <loc>${HOST_NAME}${ROOT_PATH}${
        item.mapPath ? `/${item.mapPath}` : ""
      }/</loc>
      <lastmod>${date.getUTCFullYear()}-${(date.getUTCMonth() + 1)
        .toString()
        .padStart(2, "0")}-${date
        .getUTCDate()
        .toString()
        .padStart(2, "0")}</lastmod>
      <changefreq>monthly</changefreq> 
      <priority>1.0</priority>
    </url>
    <url>
      <loc>${HOST_NAME}${ROOT_PATH}${
        item.mapPath ? `/${item.mapPath}` : ""
      }/index.html</loc>
      <lastmod>${date.getUTCFullYear()}-${(date.getUTCMonth() + 1)
        .toString()
        .padStart(2, "0")}-${date
        .getUTCDate()
        .toString()
        .padStart(2, "0")}</lastmod>
      <changefreq>monthly</changefreq> 
      <priority>1.0</priority>
    </url>
    ${item.playsList
      .map(
        (play) => `
        <url>
          <loc>${HOST_NAME}${ROOT_PATH}/${play.mapPath}</loc>
          <lastmod>${play.date}</lastmod>
          <changefreq>never</changefreq> 
          <priority>1.0</priority>
        </url>`
      )
      .join("")}
  `
    )
    .join("")}
</urlset>`;
