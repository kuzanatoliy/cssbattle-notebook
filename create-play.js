const createPageTemplate = require("./create-page-template");
const { CSSBATTLE_HOST_NAME, HOST_NAME, ROOT_PATH } = require("./constants");
const { existsSync } = require("fs");

module.exports = ({ name, id, solution, parentUrl }) => {
  const imagePath = existsSync(`./assets/previews/${id}.webp`)
    ? `${HOST_NAME}${ROOT_PATH}/assets/previews/${id}.webp`
    : `${imagePath}`;

  return createPageTemplate({
    title: `CSS battle: solutions (#${id} - ${name})`,
    description: `Solution of CSS battle #${id} - ${name}`,
    keyworkds: `html, css, cssbattle, coding, development, engineering, inclusive, community, programming, ${name}`,
    headerText: `${id} - ${name}`,
    injectBody: () => `
      <section>
        <battle-preview alt="Preview of the ${name} play" src="${imagePath}"></battle-preview>
        <div class="game">
          <button class="copy-game">
            <img src='../assets/copy.svg' alt="Copy game code"/>
          </button>
          <button class="download-game">
            <img src='../assets/download.svg' alt="Download game code"/>
          </button>
          <pre>
${solution.toString().replaceAll("<", "&#60;").replaceAll(">", "&#62;")}
          </pre>
        </div>
      </section>
      <aside>
        <a class='link' href="${CSSBATTLE_HOST_NAME}/play/${id}" aria-description="Opens an external website">Move to play &#8594;</a>
      </aside>
    `,
    injectStyles: () => `
      section {
        display: flex;
        flex-wrap: wrap;
        gap: var(--size-triple);
        align-items: flex-start;
      }

      battle-preview {
        border: none;
        width: 400px;
        max-width: 100%;
        height: auto;
        aspect-ratio: 4 / 3;
      }
      
      .game {
        flex: 1;
        min-width: calc(var(--breakpoint-mobile-s) - var(--size-double) * 2);
      }
      
      button {
        cursor: pointer;
        background: none;
        border: none;
        padding: 0.5rem;
        border-radius: 0.75rem;
        width: fit-content;
        height: fit-content;
      }
      
      button:active, button:focus-visible {
        outline: solid 2px var(--control-active-border-color);
      }

      button:hover {
        backdrop-filter: brightness(0.95);
      }
      
      button img {
        width: 20px;
        height: 20px;
      }

      @media (prefers-color-scheme: dark) {
        button img {
          filter: invert(1);
        }
      }
      
      pre {
        margin: 0;
        overflow: auto;
      }
      
      aside {
        padding: var(--size-double) 0;
      }
    `,
    injectScripts: () => `
      const copyButton = document.querySelector('.copy-game');
      const downloadButton = document.querySelector('.download-game');
      
      copyButton.addEventListener('click', () => {
        navigator.clipboard.writeText(\`${solution}\`)
      });
      
      downloadButton.addEventListener('click', () => {
        const blob = new Blob([\`${solution}\`], { type: 'text/txt' });
        const elem = document.createElement('a');
        elem.href = URL.createObjectURL(blob);
        elem.download = '${id}.${name}.txt';
        elem.click();
      });
    `,
    parentUrl: `${ROOT_PATH}/${parentUrl}`,
    metaTags: `
      <meta property="og:image" content="${imagePath}">
      <meta name="twitter:image" content="${imagePath}">
      <meta property="vk:image" content="${imagePath}">
      <meta property="og:image:width" content="400">
      <meta property="og:image:height" content="300">
    `,
  });
};
