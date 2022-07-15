import { ReasonModel } from "../models/Reason";

export class ReasonService {
  async findAll(query: any) {
    const result = await ReasonModel.find(
      query.machineId
        ? {
            machine: query.machineId,
          }
        : {}
    );
    return result;
  }
}
