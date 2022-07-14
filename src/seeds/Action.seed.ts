import { ActionModel } from "../models/Action";

const actions = [
  {
    name: "Immediate",
  },
  {
    name: "Later",
  },
  {
    name: "No Action",
  },
];
export const seedAction = async () => {
  await ActionModel.deleteMany();
  await ActionModel.insertMany(actions);
};
