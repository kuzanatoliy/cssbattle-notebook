const { writeFile, mkdir, rm } = require("fs/promises");

const createPlay = require("./create-play");
const createPlaysList = require("./create-plays-list");
const createRoot = require("./create-root");
const data = require("./plays/data");

const prepareName = (name) => name.toLocaleLowerCase().replaceAll(" ", "_");

const runDeploy = async () => {
  await rm("dist", { recursive: true, force: true });
  await mkdir("dist");

  const list = await Promise.all(
    data.map(async ({ id, name, plays }) => {
      const folderName = `${id}_${prepareName(name)}`;

      await mkdir(`dist/${folderName}`);

      const playsList = await Promise.all(
        plays.map(async (item) => {
          const path = `${folderName}/${item.id}_${prepareName(
            item.name
          )}.html`;

          writeFile(`dist/${path}`, createPlay(item));

          return {
            path: `/cssbattle-notebook/${path}`,
            name: item.name,
            id: item.id,
          };
        })
      );

      writeFile(
        `dist/${folderName}/index.html`,
        createPlaysList({ id, name, playsList })
      );

      return {
        path: `/cssbattle-notebook/${folderName}`,
        name,
        id,
      };
    })
  );

  writeFile(
    `dist/index.html`,
    createRoot({ list })
  );
};

runDeploy();
