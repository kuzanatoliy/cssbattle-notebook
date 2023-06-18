const createPageTemplate = require("./create-page-template");
const { CSSBATTLE_HOST_NAME, HOST_NAME, ROOT_PATH } = require("./constatns");

module.exports = ({ name, id, playsList, canonicalPath }) =>
  createPageTemplate({
    title: `CSS battle: solutions (#${id} - ${name})`,
    description: `Solution of CSS battle #${id} - ${name}`,
    keyworkds:
      `html, css, cssbattle, coding, development, engineering, inclusive, community, programming, ${name}`,
    canonicalPath: `${HOST_NAME}/${ROOT_PATH}/${canonicalPath}`,
    headerText: `#${id} - ${name}`,
    injectBody: () =>
      `<ul>${playsList
        .map(
          (item) =>
            `<li><a href=${item.path}><h2>${item.id} - ${
              item.name
            }</h2><div>
                  <img
                  alt="Preview"
                  src="${CSSBATTLE_HOST_NAME}/targets/${item.id}.png"
                  srcset="${CSSBATTLE_HOST_NAME}/targets/${item.id}@2x.png 2x"
                />
              </div></a></li>`
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
        width: 100%;
      }
    `,
  });
