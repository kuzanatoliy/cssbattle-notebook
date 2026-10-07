const process = require("node:process");

module.exports = {
  CSSBATTLE_HOST_NAME:
    process.env.CSSBATTLE_HOST_NAME || "https://cssbattle.dev",
  HOST_NAME: process.env.HOST_NAME || "http://localhost:3000",
  ROOT_PATH: process.env.ROOT_PATH || "",
  HAS_OFFLINE_MODE: process.env.HAS_OFFLINE_MODE || false,
  CACHE_NAME: process.env.CACHE_NAME || "cssbattle-notebook_local",
};
