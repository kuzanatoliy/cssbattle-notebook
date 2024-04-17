const { HOST_NAME, ROOT_PATH } = require("./constatns");

module.exports = ({
  title,
  description,
  keyworkds,
  canonicalPath,
  headerText,
  injectStyles,
  injectScripts,
  injectBody,
  parentUrl,
  metaTags,
}) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <link rel="icon" href="${HOST_NAME}/${ROOT_PATH}/favicon.ico">
    <title>${title}</title>
    <meta charset="UTF-8">
    <meta name="description" content="${description}">
    <meta name="keywords" content="${keyworkds}">
    <meta name="author" content="Anatoli Kuzmiankou">
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <meta name="theme-color" media="(prefers-color-scheme: light)" content="#02315E" />
    <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#151515" />
    ${canonicalPath ? `<link rel="canonical" href="${canonicalPath}"/>` : ""}
    ${metaTags ? metaTags : ""}
    <style>

:root {
  color-scheme: light dark;
  
  --lt-color-darkest: #02315E;
  --lt-color-dark: #00457E;
  --lt-color-normal: #2F70AF;
  --lt-color-light: #B9848C;
  --lt-color-lightest: #806491;
  --dt-color-darkest: #151515;
  --dt-color-dark: #303030;
  --color-white: #fff;
  --color-black: #000;
  --color-red: #ed2945;

  --size-quarter: 0.125rem;
  --size-half: 0.25rem;
  --size-three-quarters: 0.375rem;
  --size-single: 0.5rem;
  --size-double: 1rem;
  --size-triple: 1.5rem;
  --size-quadruple: 2rem;

  --breakpoint-laptop: 1024px;
  --breakpoint-tablet: 768px;
  --breakpoint-mobile-l: 425px;
  --breakpoint-mobile-m: 375px;
  --breakpoint-mobile-s: 320px;

  --page-background-color: var(--color-white);
  --header-background-color: var(--lt-color-darkest);
  --header-text-color: var(--color-white);
  --footer-text-color: var(--lt-color-darkest);
  --control-text-color: var(--lt-color-darkest);
  --control-border-color: var(--lt-color-normal);
  --control-active-border-color: var(--lt-color-darkest);
  --link-text-color: var(--lt-color-normal);
  --link-active-text-color: var(--lt-color-darkest);
}

@media (prefers-color-scheme: dark) {
  :root {
    --page-background-color: var(--dt-color-dark);
    --header-background-color: var(--dt-color-darkest);
    --header-text-color: var(--color-red);
    --footer-text-color: var(--color-white);
    --control-text-color: var(--color-white);
    --control-border-color: var(--color-white);
    --control-active-border-color: var(--color-red);
    --link-text-color: var(--color-white);
    --link-active-text-color: var(--color-red);
  }
}

body {
  display: flex;
  flex-direction: column;
  min-height: 100dvh;
  margin: 0;
  font-size: 16px;
  background-color: var(--page-background-color);
  overflow-y: scroll;
}

header, main, footer {
  margin: 0;
  padding: var(--size-double)
    calc((100% - var(--breakpoint-laptop)) / 2 + var(--size-double));
}

@media (max-width: 1056px) {
  header, main, footer {
    padding: var(--size-double);
  }
}

main {
  margin-top: var(--size-double);
  flex: 1;
}

header {
  z-index: 1;
  display: flex;
  gap: var(--size-double);
  align-items: center;
  color: var(--header-text-color);
  position: sticky;
  top: 0;
  background: var(--header-background-color);
  box-shadow: 0 var(--size-double) var(--size-double) var(--page-background-color);
}

footer {
  font-weight: bold;
  color: var(--footer-text-color);
  text-align: center;
  background: linear-gradient(transparent, var(--page-background-color) 25%);
}

header > h1 {
  margin: 0;
}

header a {
  border: none;
  padding: var(--size-quarter);
  border-radius: var(--size-half);
}

header a:active, header a:focus-visible {
  outline: solid 2px var(--color-white);
}

header a:hover {
  backdrop-filter: brightness(0.8);
}

header img {
  height: var(--size-triple);
  width: var(--size-triple);
}

${injectStyles ? injectStyles() : ""}
    
    </style>
    <script>

    class BattlePreview extends HTMLElement {
      #shadow;
      #style;
      #content;
      #alt;

      static get observedAttributes() {
        return ["src", "alt"];
      }

      constructor() {
        super();
        this.#shadow = this.attachShadow({mode: "closed"});

        this.#style = document.createElement("style");
        this.#style.textContent = \`
          :host {
            display: block;
            font-size: 0;
          }

          @keyframes skeleton {
            0% {
              opacity: 1;
            }

            50% {
              opacity: 0.4;
            }

            100% {
              opacity: 1;
            }
          }

          .loading-skeleton {
            height: 100%;
            width: 100%;
            background: #EAEAEA;
            animation: 3s infinite alternate skeleton;
          }

          .not-found {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 16px;
          }

          img {
            height: 100%;
            width: 100%;
          }
        \`;

        this.#shadow.appendChild(this.#style);
        this.#shadow.innerHTML;
      }

      attributeChangedCallback(name, oldValue, newValue) {
        if (name === "alt") {
          this.#alt = newValue;
          if (this.#content && this.#content.tagName.toLowerCase() === 'img') {
            this.#content.setAttribute("alt", this.#alt);
          }
        }

        if (name === "src" && newValue !== oldValue) {
          this.#content && this.#shadow.removeChild(this.#content);
          this.#content = document.createElement("div");
          this.#content.setAttribute("class", "loading-skeleton");
          this.#shadow.appendChild(this.#content);
          fetch(newValue)
            .then((res) => {
              if (res.status === 200) {
                return res.blob();
              } else {
                throw "Not found";
              }
            })
            .then((blob) => {
              this.#content && this.#shadow.removeChild(this.#content);
              this.#content = document.createElement("img");
              this.#content.setAttribute("src", URL.createObjectURL(blob));
              this.#content.setAttribute("alt", this.#alt);
              this.#shadow.appendChild(this.#content);
            })
            .catch(() => {
              this.#content && this.#shadow.removeChild(this.#content);
              this.#content = document.createElement("div");
              this.#content.textContent = "Not found";
              this.#content.setAttribute("class", "not-found");
              this.#shadow.appendChild(this.#content);
            });
        }
      }
    }

    customElements.define("battle-preview", BattlePreview);

    </script>
  </head>
  <body>
    <header>
      ${
        parentUrl
          ? `<a href="${parentUrl}"><img src='../assets/back.svg' alt="Back"/></a>`
          : ""
      }
      <h1>${headerText}</h1>
    </header>
    <main>

${injectBody ? injectBody() : ""}

    </main>
    ${injectScripts ? `<script>${injectScripts()}</script>` : ""}
    <footer class={styles.footerContainer}>© Kuzanatoliorg</footer>
  </body>
</html>
`;
