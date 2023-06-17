const createPageTemplate = require("./create-page-template");

module.exports = ({ list, canonicalPath }) =>
  createPageTemplate({
    title: "CSS battle: solutions",
    description: "Solution of CSS battle",
    keyworkds:
      "html, css, cssbattle, coding, development, engineering, inclusive, community, programming",
    canonicalPath,
    injectBody: () =>
      list
        .map((item) => `<a href=${item.path}>${item.id} - ${item.name}</a>`)
        .join("<br/>"),
  });
