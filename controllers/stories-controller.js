import fs from "fs";
const readStories = async (_req, res) => {
  const readStories = () => {
    const storiesFile = fs.readFileSync("./data/stories.json");
    const storiesData = JSON.parse(storiesFile);
    return storiesData;
  };
  return res.json(readStories());
};

const readSpecificStories = async (req, res) => {
  const readStories = () => {
    const storiesFile = fs.readFileSync("./data/stories.json");
    const storiesData = JSON.parse(storiesFile);
    return storiesData;
  };
  console.log(req.params.storyId);
  const id = req.params.storyId;
  /* console.log("line 18", id) */
  const readSpecificStories = (id) => {
    const storiesData = readStories();
    console.log("line 20", id);
    console.log("line 23", storiesData);
    const specificStories = storiesData.find((story) => 
     {console.log("line 25", story);
        story.id === id;
    console.log("line 27", id)}
    );
    console.log("line 27", specificStories);
    return specificStories;
  };
  console.log("line 30", readSpecificStories(id));
  return res.json(readSpecificStories(id));
};
export { readStories, readSpecificStories };
