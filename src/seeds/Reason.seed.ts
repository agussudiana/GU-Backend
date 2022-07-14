import { ReasonModel } from "../models/Reason";
import { machine_id_1, machine_id_2 } from "./Machine.seed";
const reasons = [
  {
    machine: machine_id_1,
    reason: "Spindle Error",
  },
  {
    machine: machine_id_1,
    reason: "Axis Problem",
  },
  {
    machine: machine_id_1,
    reason: "Normal",
  },
  {
    machine: machine_id_2,
    reason: "Machine Crash",
  },
  {
    machine: machine_id_2,
    reason: "Router Fault",
  },
  {
    machine: machine_id_2,
    reason: "Normal",
  },
];
export const seedReason = async () => {
  await ReasonModel.deleteMany();
  await ReasonModel.insertMany(reasons);
};
