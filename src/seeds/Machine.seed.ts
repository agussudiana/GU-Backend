import mongoose from "mongoose";
import { MachineModel } from "../models/Machine";

export const machine_id_1 = new mongoose.Types.ObjectId();
export const machine_id_2 = new mongoose.Types.ObjectId();

const machines = [
  {
    _id: machine_id_1,
    name: "CNC Machine",
  },
  {
    _id: machine_id_2,
    name: "Milling Machine",
  },
];
export const seedMachine = async () => {
  await MachineModel.deleteMany();
  await MachineModel.insertMany(machines);
};
