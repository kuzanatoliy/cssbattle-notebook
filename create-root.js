const createPageTemplate = require("./create-page-template");
const { CSSBATTLE_HOST_NAME, HOST_NAME, ROOT_PATH } = require("./constatns");

module.exports = ({ list, canonicalPath }) =>
  createPageTemplate({
    title: "CSS battle: solutions",
    description: "Solution of CSS battle",
    keyworkds:
      "html, css, cssbattle, coding, development, engineering, inclusive, community, programming",
    canonicalPath: `${HOST_NAME}/${ROOT_PATH}/${canonicalPath}`,
    headerText: "CSS battle solutions",
    injectBody: () =>
      `<ul>${list
        .map(
          (item) =>
            `<li><a href=/${ROOT_PATH}/${item.path}><h2>${item.id} - ${
              item.name
            }</h2><div>${item.playsList
              .map(
                (play) =>
                  `<img
                  alt="#${play.id} - ${play.name} preview"
                  src="${CSSBATTLE_HOST_NAME}/targets/${play.id}.png"
                  srcset="${CSSBATTLE_HOST_NAME}/targets/${play.id}@2x.png 2x"
                />`
              )
              .join("")}</div></a></li>`
        )
        .join("")}<ul>`,
    injectStyles: () => `
      ul {
        list-style-type: none;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        grid-gap: var(--size-triple);
        margin: 0;
        padding: 0;
      }

      a {
        display: block;
        padding: var(--size-double);
        border: solid 1px var(--control-border-color);
        border-radius: var(--size-three-quarters);
        text-decoration: none;
        color: var(--control-text-color);
        height: 100%;
        box-sizing: border-box;
      }

      a:active, a:focus-visible {
        border: none;
        outline: solid 2px var(--control-active-border-color);
      }

      a:hover {
        backdrop-filter: brightness(0.95);
      }

      a > h2 {
        margin: 0;
      }

      a > div {
        display: flex;
        flex-wrap: wrap;
        margin-top: var(--size-double);
      }

      a > div > img {
        width: calc(100% / 3);
      }
    `,
  });
