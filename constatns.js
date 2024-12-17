const process = require("node:process");

console.log(process.env.HOST_NAME);
console.log(process.env.ROOT_PATH);

module.exports = {
  CSSBATTLE_HOST_NAME:
    process.env.CSSBATTLE_HOST_NAME || "https://cssbattle.dev",
  HOST_NAME: process.env.HOST_NAME || "https://kuzanatoliy.github.io",
  ROOT_PATH: process.env.ROOT_PATH || "cssbattle-notebook",
};
