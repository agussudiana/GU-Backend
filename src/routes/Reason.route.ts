import express from "express";
import { ReasonService } from "../services/Reason.service";

const ReasonRouter = express.Router();

ReasonRouter.get("/", async (req, res, next) => {
  try {
    const result = await new ReasonService().findAll();
    return res.json(result);
  } catch (err) {
    next(err);
  }
});

export default ReasonRouter;
