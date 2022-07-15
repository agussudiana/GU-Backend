import { model, Schema, Types } from "mongoose";
import { ModelEnum } from "../const/models";
import { IAction } from "./Action";
import { IMachine } from "./Machine";
import { IReason } from "./Reason";

export interface IAnomaly extends Document {
  timestamp: number;
  machine: Types.ObjectId | IMachine;
  anomaly: string;
  sensor: number;
  soundClip: String;
  reason: string | IReason | null;
  action: string | IAction | null;
  comment: string;
  status: string;
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
    reason: {
      type: Schema.Types.ObjectId,
      ref: ModelEnum.Reason,
    },
    action: {
      type: Schema.Types.ObjectId,
      ref: ModelEnum.Action,
    },
    comment: String,
    status: String,
  },
  {
    timestamps: true,
  }
);

export const AnomalyModel = model<IAnomaly>(ModelEnum.Anomaly, AnomalySchema);
