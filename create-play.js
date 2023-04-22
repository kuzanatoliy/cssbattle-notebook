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
      img {
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
        padding: 0.5rem;
        border-radius: 0.75rem;
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
    <img alt="" width="400" class="levelpage__target" src="https://cssbattle.dev/targets/${id}.png" srcset="https://cssbattle.dev/targets/${id}@2x.png 2x">
      <div class="game">
        <button class="copy-game">
          <img src='../assets/copy.svg' alt='Copy play' title="Copy play"/>
        </button>
        <button class="download-game">
          <img src='../assets/download.svg' alt='Download play' title="Download play"/>
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
})

    </script>
  </body>
</html>
`;
