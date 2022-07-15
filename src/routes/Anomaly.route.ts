import express from "express";
import { AnomalyService } from "../services/Anomaly.service";

const AnomalyRouter = express.Router();

AnomalyRouter.get("/", async (req, res, next) => {
  try {
    const result = await new AnomalyService().findAll(req.query);
    return res.json(result);
  } catch (err) {
    next(err);
  }
});

AnomalyRouter.put("/:id", async (req, res, next) => {
  try {
    const result = await new AnomalyService().update(req.params.id, req.body);
    return res.json(result);
  } catch (err) {
    next(err);
  }
});

export default AnomalyRouter;
