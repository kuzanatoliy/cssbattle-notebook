const { writeFile, mkdir, rm, cp } = require("fs/promises");

const createPlay = require("./create-play");
const createPlaysList = require("./create-plays-list");
const createRoot = require("./create-root");
const createSitemap = require("./create-sitemap");
const createManifest = require("./create-manifest");
const data = require("./plays/data");

const prepareName = (name) =>
  name.toLocaleLowerCase().replaceAll(" ", "_").replaceAll("'", "");

const runDeploy = async () => {
  await rm("dist", { recursive: true, force: true });
  await mkdir("dist");

  const list = await Promise.all(
    data.map(async ({ id, name, plays, date }) => {
      const folderName = `${id}_${prepareName(name)}`;

      await mkdir(`dist/${folderName}`);

      const playsList = await Promise.all(
        plays.map(async (item) => {
          const path = `${folderName}/${item.id}_${prepareName(
            item.name
          )}.html`;

          writeFile(
            `dist/${path}`,
            createPlay({
              id: item.id,
              name: item.name,
              solution: item.solution.trim(),
              parentUrl: folderName,
            })
          );

          return {
            path,
            name: item.name,
            id: item.id,
            mapPath: path,
            date: item.date,
          };
        })
      );

      writeFile(
        `dist/${folderName}/index.html`,
        createPlaysList({
          id,
          name,
          playsList,
          canonicalPath: `${folderName}/`,
        })
      );

      return {
        path: folderName,
        name,
        id,
        mapPath: `${folderName}`,
        date,
        playsList,
      };
    })
  );

  cp("assets", "dist/assets", { recursive: true });

  writeFile(`dist/index.html`, createRoot({ list, canonicalPath: "" }));

  writeFile(`dist/sitemap.xml`, createSitemap({ list }));

  writeFile(`dist/manifest.json`, createManifest());
};

runDeploy();
