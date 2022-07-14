import { model, Schema, Types } from "mongoose";
import { ModelEnum } from "../const/models";
import { IMachine } from "./Machine";

export interface IAnomaly extends Document {
  timestamp: number;
  machine: Types.ObjectId | IMachine;
  anomaly: string;
  sensor: number;
  soundClip: String;
}

const AnomalySchema = new Schema<IAnomaly>(
  {
    timestamp: {
      type: Number,
      required: true,
    },
    machine: {
      type: Schema.Types.ObjectId,
      ref: ModelEnum.Machine,
      required: true,
    },
    anomaly: {
      type: String,
      required: true,
    },
    sensor: {
      type: Number,
      required: true,
    },
    soundClip: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const AnomalyModel = model<IAnomaly>(ModelEnum.Anomaly, AnomalySchema);
