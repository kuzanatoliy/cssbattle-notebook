const createPlay = require("./create-play");
const data = require("./plays/data");
const { writeFile, mkdir } = require("fs/promises");

const files = data[0].plays;

const runDeploy = async () => {
  await mkdir("1_pilot_battle");

  await Promise.all(
    files.map((item) =>
      writeFile(
        `1_pilot_battle/${item.id}_${item.name
          .toLocaleLowerCase()
          .replaceAll(" ", "_")}.html`,
        createPlay(item)
      )
    )
  );
};

runDeploy();
