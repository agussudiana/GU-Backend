import express from "express";
import ActionRouter from "./Action.route";
import AnomalyRouter from "./Anomaly.route";
import MachineRouter from "./Machine.route";
import ReasonRouter from "./Reason.route";

const indexRouter = express.Router();

indexRouter.use("/anomaly", AnomalyRouter);
indexRouter.use("/machine", MachineRouter);
indexRouter.use("/action", ActionRouter);
indexRouter.use("/reason", ReasonRouter);

export default indexRouter;
