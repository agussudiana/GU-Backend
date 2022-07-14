import { model, Schema } from "mongoose";
import { ModelEnum } from "../const/models";

export interface IAction extends Document {
  name: string;
}

const ActionSchema = new Schema<IAction>(
  {
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const ActionModel = model<IAction>(ModelEnum.Action, ActionSchema);
