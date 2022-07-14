import { AnomalyModel } from "../models/Anomaly";

export class AnomalyService {
  async findAll() {
    const result = await AnomalyModel.find().populate("machine");
    return result;
  }
}
