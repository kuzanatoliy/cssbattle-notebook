module.exports = ({ name, id, playsList }) => `
<!DOCTYPE html>
<html>
  <head>
    <title>CSS battle: solutions (#${id} - ${name})</title>
    <meta charset="UTF-8">
    <meta name="description" content="Solution of CSS battle #${id} - ${name}">
    <meta name="keywords" content="html, css, cssbattle, coding, development, engineering, inclusive, community, programming, ${name}">
    <meta name="author" content="Anatoli Kuzmiankou">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>
  <body>
    <h1>#${id} - ${name}</h1>
    <hr>
    ${playsList
      .map((item) => `<a href=${item.path}>${item.id} - ${item.name}</a>`)
      .join("<br/>")}
  </body>
</html>
`;
