import { AnomalyModel } from "../models/Anomaly";

export class AnomalyService {
  async findAll(query: any) {
    const result = await AnomalyModel.find({
      machine: query.machineId,
    }).populate("machine");
    return result;
  }
}
