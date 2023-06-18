const createPageTemplate = require("./create-page-template");
const { HOST_NAME, ROOT_PATH } = require("./constatns");

module.exports = ({ list, canonicalPath }) =>
  createPageTemplate({
    title: "CSS battle: solutions",
    description: "Solution of CSS battle",
    keyworkds:
      "html, css, cssbattle, coding, development, engineering, inclusive, community, programming",
    canonicalPath: `${HOST_NAME}/${ROOT_PATH}/${canonicalPath}`,
    injectBody: () =>
      `<ul>${list
        .map(
          (item) =>
            `<li><a href=${item.path}><h2>${item.id} - ${
              item.name
            }</h2><div>${item.playsList
              .map(
                (play) =>
                  `<img
                  alt="#${play.id} - ${play.name} preview"
                  src="https://cssbattle.dev/targets/${play.id}.png"
                  srcset="https://cssbattle.dev/targets/${play.id}@2x.png 2x"
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
        border: solid 1px var(--color-light);
        border-radius: var(--size-three-quarters);
        text-decoration: none;
        color: var(--color-dark);
        height: 100%;
        box-sizing: border-box;
      }

      a:active, a:focus-visible {
        border: none;
        outline: solid 2px var(--color-dark);
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
