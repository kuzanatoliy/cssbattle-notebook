const createPlay = require("./create-play");
const data = require("./plays/data");
const { writeFile, mkdir } = require("fs/promises");

const files = data[0].plays;

const runDeploy = async () => {
  await mkdir("dist");
  await mkdir("dist/1_pilot_battle");

  await Promise.all(
    files.map((item) =>
      writeFile(
        `dist/1_pilot_battle/${item.id}_${item.name
          .toLocaleLowerCase()
          .replaceAll(" ", "_")}.html`,
        createPlay(item)
      )
    )
  );
};

runDeploy();
