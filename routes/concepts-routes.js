import express from "express";
import * as conceptsController from "../controllers/concepts-controller.js";
const conceptsRouter = express.Router();
conceptsRouter.route("/concepts").get(conceptsController.readConcepts);
export default conceptsRouter;