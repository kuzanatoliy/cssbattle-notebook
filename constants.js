const process = require("node:process");

module.exports = {
  CSSBATTLE_HOST_NAME:
    process.env.CSSBATTLE_HOST_NAME || "https://cssbattle.dev",
  HOST_NAME: process.env.HOST_NAME || "https://kuzanatoliy.github.io",
  ROOT_PATH: process.env.ROOT_PATH || "",
};
