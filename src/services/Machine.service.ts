import { MachineModel } from "../models/Machine";

export class MachineService {
  async findAll() {
    const result = await MachineModel.find();
    return result;
  }
}
