const { readdir, writeFile } = require("fs/promises");
const data = require("./plays/data");
const { CSSBATTLE_HOST_NAME } = require("./constatns");

const syncPreviews = async () => {
  const ids = data
    .reduce((store, battle) => [...store, ...battle.plays], [])
    .map((item) => item.id);

  const images = (await readdir("./assets/previews")).map(
    (name) => +name.split(".")[0]
  );

  await Promise.all(
    ids
      .filter((id) => !images.find((image) => image === id))
      .map((id) => {
        fetch(`${CSSBATTLE_HOST_NAME}/targets/${id}.png`)
          .then((res) => res.arrayBuffer())
          .then((buffer) =>
            writeFile(`./assets/previews/${id}.png`, Buffer.from(buffer))
          );
      })
  );
};

syncPreviews();
