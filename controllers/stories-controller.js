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
  const readSpecificStories = (id) => {
    const storiesData = readStories();
    const specificStories = storiesData.find((story) => 
     {
       return story.id === id;
    }
    );
    
    return specificStories;
  };
  return res.json(readSpecificStories(id));
};
export { readStories, readSpecificStories };
