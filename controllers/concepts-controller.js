import fs from "fs";
const readConcepts = async (_req, res) => {
  const readConcepts = () => {
    const conceptsFile = fs.readFileSync("./data/concepts.json");
    const conceptsData = JSON.parse(conceptsFile);
    return conceptsData;
  };
  return res.json(readConcepts());
};
export { readConcepts };
