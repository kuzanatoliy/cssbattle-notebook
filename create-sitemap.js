module.exports = ({ list }) => `
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${ list.map((item) => `
    <url>
      <loc>https://kuzanatoliy.github.io/cssbattle-notebook/${item.mapPath}</loc>
      <lastmod>${item.date}</lastmod>
      <changefreq>never</changefreq> 
      <priority>1</priority>
    </url>
  `).join('') }
</urlset>
`;
