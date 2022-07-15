import { AnomalyUpdateRequest } from "../dto/Anomaly.dto";
import { AnomalyModel, IAnomaly } from "../models/Anomaly";

export class AnomalyService {
  async findAll(query: any) {
    const result = await AnomalyModel.find(
      query.machineId
        ? {
            machine: query.machineId,
          }
        : {}
    )
      .populate(["machine", "reason", "action"])
      .sort("-timestamp");
    return result;
  }

  async update(id: string, body: AnomalyUpdateRequest) {
    const anomaly = await AnomalyModel.findById(id);
    if (anomaly) {
      anomaly.reason = body.reason ? body.reason : null;
      anomaly.action = body.action ? body.action : null;
      anomaly.comment = body.comment;
      await anomaly.save();
      return anomaly;
    } else {
      throw new Error("Not Found");
    }
  }
}
