import express from "express";
import { AnomalyService } from "../services/Anomaly.service";

const AnomalyRouter = express.Router();

AnomalyRouter.get("/", async (req, res, next) => {
  try {
    const query = req.query;
    const result = await new AnomalyService().findAll(query);
    return res.json(result);
  } catch (err) {
    next(err);
  }
});

export default AnomalyRouter;
