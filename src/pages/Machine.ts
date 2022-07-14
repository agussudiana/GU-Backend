import express from "express";

const MachineRouter = express.Router();

MachineRouter.get("/", async (req, res) => {
  return res.json({});
});

export default MachineRouter;
