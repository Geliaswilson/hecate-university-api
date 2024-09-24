import fs from "fs";
const readStories = async (_req, res) => {
    const readStories = () => {
    const storiesFile = fs.readFileSync("./data/stories.json")
    const storiesData = JSON.parse(storiesFile);
    return storiesData}
    res.json(readStories());
};
export {readStories}