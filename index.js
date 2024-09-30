import express from "express";
import cors from "cors";
import "dotenv/config";
import storiesRouter from "./routes/stories-routes.js";
import conceptsRouter from "./routes/concepts-routes.js";
const app = express();
let { CROSS_ORIGIN } = process.env;
const PORT = process.env.PORT || 8080;
app.use(cors({ origin: CROSS_ORIGIN }));
app.use(express.json());
app.use("/", storiesRouter);
app.use("/concepts", conceptsRouter);
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
