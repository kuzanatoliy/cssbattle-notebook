module.exports = ({ name, id, solution }) => `
<!DOCTYPE html>
<html>
  <head>
    <title>CSS battle: solutions (#${id} - ${name})</title>
    <meta charset="UTF-8">
    <meta name="description" content="Solution of CSS battle #{id} - ${name}">
    <meta name="keywords" content="html, css, cssbattle, coding, development, engineering, inclusive, community, programming, ${name}">
    <meta name="author" content="Anatoli Kuzmiankou">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
      iframe {
        border: none;
        float: left;
        margin-right: 3rem;
      }
    </style>
  </head>
  <body>
    <h1>#${id} - ${name}</h1>
    <hr>
    <iframe width="400px" height="300px" srcdoc="<html style='width: 400px; height: 300px'><body>${solution}</body></html>"></iframe>
    <div>
      <pre>
${solution.toString().replaceAll("<", "&#60;").replaceAll(">", "&#62;")}
      </pre>
    </div>
    <div><a href="https://cssbattle.dev/play/${id}">Move to play &#8594;</a></div>
  </body>
</html>
`;
