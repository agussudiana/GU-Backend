import express from "express";
import { ActionService } from "../services/Action.service";

const ActionRouter = express.Router();

ActionRouter.get("/", async (req, res, next) => {
  try {
    const result = await new ActionService().findAll();
    return res.json(result);
  } catch (err) {
    next(err);
  }
});

export default ActionRouter;
