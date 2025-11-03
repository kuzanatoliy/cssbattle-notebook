const { ROOT_PATH } = require("./constants");

module.exports = () =>
  JSON.stringify({
    short_name: "CSS battle: solutions",
    name: "CSS battle: solutions",
    icons: [
      {
        src: `${ROOT_PATH}/favicon.svg`,
        sizes: "any",
        purpose: "maskable",
      },
    ],
    start_url: ".",
    display: "standalone",
    theme_color: "#02315E",
    background_color: "#fff",
  });
