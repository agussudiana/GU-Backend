import { model, Schema } from "mongoose";
import { ModelEnum } from "../const/models";

export interface IMachine extends Document {
  name: string;
}

const machineSchema = new Schema<IMachine>(
  {
    name: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const MachineModel = model<IMachine>(ModelEnum.Machine, machineSchema);
