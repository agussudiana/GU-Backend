import { AnomalyModel } from "../models/Anomaly";

export class AnomalyService {
  async findAll(query: any) {
    const result = await AnomalyModel.find(
      query.machineId
        ? {
            machine: query.machineId,
          }
        : {}
    ).populate("machine");
    return result;
  }
}
