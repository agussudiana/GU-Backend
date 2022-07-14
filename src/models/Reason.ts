import { model, Schema } from "mongoose";
import { ModelEnum } from "../const/models";
import { IMachine } from "./Machine";

export interface IReason extends Document {
  machine: string | IMachine;
  reason: string;
}

const ReasonSchema = new Schema<IReason>(
  {
    machine: {
      type: Schema.Types.ObjectId,
      ref: ModelEnum.Machine,
      required: true,
    },
    reason: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const ReasonModel = model<IReason>(ModelEnum.Reason, ReasonSchema);
