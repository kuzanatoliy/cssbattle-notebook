module.exports = ({ name, id, solution }) => `
<!DOCTYPE html>
<html>
  <head>
    <title>CSS battle: solutions (#${id} - ${name})</title>
    <meta charset="UTF-8">
    <meta name="description" content="Solution of CSS battle #${id} - ${name}">
    <meta name="keywords" content="html, css, cssbattle, coding, development, engineering, inclusive, community, programming, ${name}">
    <meta name="author" content="Anatoli Kuzmiankou">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
      iframe {
        border: none;
        float: left;
        margin-right: 3rem;
      }
      main {
        display: flex;
      }
      .game {
        min-width: 400px;
      }
      button {
        background: none;
        border: none;
        padding: 2rem;
        border-radius: 1.5rem;
        width: fit-content;
        height: fit-content;
      }
      button:hover {
        background-color: rgba(0, 0, 0, 0.2);
      }
      button img {
        width: 20px;
        height: 20px;
      }
      pre {
        margin: 0;
      }
    </style>
  </head>
  <body>
    <header><h1>#${id} - ${name}</h1></header>
    <hr>
    <main>
      <iframe width="400px" height="300px" srcdoc="<html style='width: 400px; height: 300px; overflow: hidden'><body>${solution}</body></html>"></iframe>
      <div class="game">
        <button class="copy-game">
          <img src='../assets/copy.svg' alt='Copy play' title="Copy play"/>
        </button>
        <pre>
${solution.toString().replaceAll("<", "&#60;").replaceAll(">", "&#62;")}
        </pre>
      </div>
    </main>
    <hr>
    <footer><a href="https://cssbattle.dev/play/${id}">Move to play &#8594;</a></footer>
    <script>

const copyButton = document.querySelector('.copy-game');

copyButton.addEventListener('click', () => {
  navigator.clipboard.writeText(\`${solution}\`)
});

    </script>
  </body>
</html>
`;
