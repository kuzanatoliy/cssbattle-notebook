module.exports = ({ list }) => `
<!DOCTYPE html>
<html>
  <head>
    <title>CSS battle: solutions</title>
    <meta charset="UTF-8">
    <meta name="description" content="Solution of CSS battle">
    <meta name="keywords" content="html, css, cssbattle, coding, development, engineering, inclusive, community, programming">
    <meta name="author" content="Anatoli Kuzmiankou">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>
  <body>
    <h1>CSS battle solutions</h1>
    <hr>
    ${list
      .map((item) => `<a href=${item.path}>${item.id} - ${item.name}</a>`)
      .join("<br/>")}
  </body>
</html>
`;