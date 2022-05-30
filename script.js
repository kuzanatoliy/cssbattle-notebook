const createPlay = require("./create-play");
const data = require("./plays/data");
const { writeFile, mkdir, rm } = require("fs/promises");

const prepareName = (name) => name.toLocaleLowerCase().replaceAll(" ", "_");

const runDeploy = async () => {
  await rm("dist", { recursive: true });
  await mkdir("dist");

  await Promise.all(
    data.map(async ({ id, name, plays }) => {
      const folderName = `dist/${id}_${prepareName(name)}`;

      await mkdir(folderName);

      await Promise.all(
        plays.map((item) =>
          writeFile(
            `${folderName}/${item.id}_${prepareName(item.name)}.html`,
            createPlay(item)
          )
        )
      );
    })
  );
};

runDeploy();
