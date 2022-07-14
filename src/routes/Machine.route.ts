import express from "express";
import { MachineService } from "../services/Machine.service";

const MachineRouter = express.Router();

MachineRouter.get("/", async (req, res, next) => {
  try {
    const result = await new MachineService().findAll();
    return res.json(result);
  } catch (err) {
    next(err);
  }
});

export default MachineRouter;
