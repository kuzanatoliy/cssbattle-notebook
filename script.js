const createPlay = require("./create-play");
const data = require("./plays/data");
const { writeFile } = require("fs/promises");

const files = data[0].plays;

Promise.all(files.map(item => writeFile(`${item.id}_${item.name.toLocaleLowerCase().replaceAll(" ", "_")}.html`, createPlay(item))));
