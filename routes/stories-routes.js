import express from 'express';
import * as storiesController from "../controllers/stories-controller.js";
const storiesRouter = express.Router();

storiesRouter.route("/")
.get(storiesController.readStories)
storiesRouter.route("/:storyId")
.get(storiesController.readStories)
export default storiesRouter;