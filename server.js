const http = require("node:http");
const {} = require("node:fs/promises");
const fs = require("node:fs");

http
  .createServer((req, res) => {
    if (req.url.split(".").length === 1) {
      req.url += "/index.html";
    }

    fs.access(`./dist${req.url}`, (err) => {
      if (err) {
        res.writeHead(404);
        res.end();
      } else {
        fs.createReadStream(`./dist${req.url}`).pipe(res);
      }
    });
  })
  .listen(3000);
