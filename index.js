import express from 'express';
import cors from 'cors';
import "dotenv/config";
import fs from "fs";
const app = express();
let {PORT, CROSS_ORIGIN} = process.env;
PORT = PORT || 8080;
app.use(cors({origin:CROSS_ORIGIN}));
app.use(express.json());
const readStories = () => {
    const storiesFile = fs.readFileSync("./data/stories.json")
    const storiesData = JSON.parse(storiesFile);
    return storiesData
}
app.get("/", (req, res) => {
    res.json(readStories());
})
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
})