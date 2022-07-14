import express, { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import indexRouter from "./pages";
import cors from "cors";
import { errorHandler } from "./libs/errorHandler";

dotenv.config();

const port = process.env.PORT;
const db_uri = process.env.DB_URI as string;
const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (_req: Request, res: Response) => {
  res.send("Express + TypeScript Servera");
});

app.use(indexRouter);

app.use(errorHandler);

mongoose.connect(db_uri, {}, () => {
  console.log("database connected");

  app.listen(port, () => {
    console.log("app runing at port " + port);
  });
});
