import { ReasonModel } from "../models/Reason";

export class ReasonService {
  async findAll() {
    const result = await ReasonModel.find();
    return result;
  }
}
