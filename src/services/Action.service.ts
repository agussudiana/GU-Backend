import { ActionModel } from "../models/Action";

export class ActionService {
  async findAll() {
    const result = await ActionModel.find();
    return result;
  }
}
