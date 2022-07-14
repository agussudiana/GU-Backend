import express, { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import indexRouter from "./routes";
import cors from "cors";
import { errorHandler } from "./libs/errorHandler";
import path from "path";

dotenv.config();

const port = process.env.PORT;
const db_uri = process.env.DB_URI as string;
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

app.get("/", (_req: Request, res: Response) => {
  res.send("Groundup AI");
});

app.use(indexRouter);

app.use(errorHandler);

mongoose.connect(db_uri, {}, () => {
  console.log("database connected");

  app.listen(port, () => {
    console.log("app runing at port " + port);
  });
});
