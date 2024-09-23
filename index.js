import express from 'express';
import cors from 'cors';
import "dotenv/config";
app = express();
let {PORT, CROSS_ORIGIN} = process.env;
PORT = PORT || 8080;
app.use(cors({origin:CROSS_ORIGIN}));