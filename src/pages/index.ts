import express from "express";
import MachineRouter from "./Machine";

const indexRouter = express.Router();

indexRouter.use("/machine", MachineRouter);

export default indexRouter;
