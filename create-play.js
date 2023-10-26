const createPageTemplate = require("./create-page-template");
const { CSSBATTLE_HOST_NAME, ROOT_PATH } = require("./constatns");

module.exports = ({ name, id, solution, parentUrl }) =>
  createPageTemplate({
    title: `CSS battle: solutions (#${id} - ${name})`,
    description: `Solution of CSS battle #${id} - ${name}`,
    keyworkds: `html, css, cssbattle, coding, development, engineering, inclusive, community, programming, ${name}`,
    headerText: `${id} - ${name}`,
    injectBody: () => `
      <section>
        <img alt="Preview" src="${CSSBATTLE_HOST_NAME}/targets/${id}.png" srcset="${CSSBATTLE_HOST_NAME}/targets/${id}@2x.png 2x">
        <div class="game">
          <button class="copy-game" aria-label="Copy game code">
            <img src='../assets/copy.svg' title="Copy game code"/>
          </button>
          <button class="download-game" aria-label="Download game code">
            <img src='../assets/download.svg' title="Download game code"/>
          </button>
          <pre>
${solution.toString().replaceAll("<", "&#60;").replaceAll(">", "&#62;")}
          </pre>
        </div>
      </section>
      <aside>
        <a href="${CSSBATTLE_HOST_NAME}/play/${id}">Move to play &#8594;</a>
      </aside>
    `,
    injectStyles: () => `
      section {
        display: flex;
        flex-wrap: wrap;
        gap: var(--size-triple);
      }

      img {
        border: none;
        width: 400px;
        max-width: 100%;
        max-height: 300px;
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

      a {
        font-weight: 600;
        text-decoration: none;
        color: var(--link-text-color);
      }

      a:hover, a:focus-visible {
        outline: none;
        color: var(--color-red);
      }

      a:focus-visible {
        text-decoration: underline;
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
    parentUrl: `/${ROOT_PATH}/${parentUrl}`,
    metaTags: `
      <meta property="og:image" content="${CSSBATTLE_HOST_NAME}/targets/${id}.png">
      <meta name="twitter:image" content="${CSSBATTLE_HOST_NAME}/targets/${id}.png">
      <meta property="vk:image" content="${CSSBATTLE_HOST_NAME}/targets/${id}.png">
      <meta property="og:image:width" content="400">
      <meta property="og:image:height" content="300">
    `,
  });
