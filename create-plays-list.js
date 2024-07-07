const createPageTemplate = require("./create-page-template");
const { CSSBATTLE_HOST_NAME, HOST_NAME, ROOT_PATH } = require("./constatns");
const { existsSync } = require("fs");

module.exports = ({ name, id, playsList, canonicalPath }) =>
  createPageTemplate({
    title: `CSS battle: solutions (#${id} - ${name})`,
    description: `Solution of CSS battle #${id} - ${name}`,
    keyworkds: `html, css, cssbattle, coding, development, engineering, inclusive, community, programming, ${name}`,
    canonicalPath: `${HOST_NAME}/${ROOT_PATH}/${canonicalPath}`,
    headerText: `${id} - ${name}`,
    injectBody: () =>
      `<ul>${playsList
        .map(
          (item) =>
            `<li><a href=/${ROOT_PATH}/${item.path}><h2>${item.id} - ${
              item.name
            }</h2><div>
                <battle-preview
                  alt="Preview of the ${item.name} play"
                  src="${
                    existsSync(`./assets/previews/${item.id}.webp`)
                      ? `${HOST_NAME}/${ROOT_PATH}/assets/previews/${item.id}.webp`
                      : `${CSSBATTLE_HOST_NAME}/targets/${item.id}.png`
                  }"
                ></battle-preview>
              </div></a></li>`
        )
        .join("")}</ul>`,
    injectStyles: () => `
      main {
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

        a > div > battle-preview {
          width: 100%;
          height: auto;
          aspect-ratio: 4 / 3;
        }
      }
    `,
    parentUrl: `/${ROOT_PATH}`,
  });
