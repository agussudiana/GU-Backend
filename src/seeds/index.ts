import mongoose from "mongoose";
import { seedMachine } from "./Machine.seed";
import dotenv from "dotenv";
import { seedAction } from "./Action.seed";
import { seedReason } from "./Reason.seed";
import { seedAnomaly } from "./Anomaly.seed";
dotenv.config();
const db_uri = process.env.DB_URI as string;
console.log(db_uri);
mongoose.connect(db_uri, {}, () => {
  console.log("database connected");
});

const seedDB = async () => {
  await seedMachine();
  await seedAction();
  await seedReason();
  await seedAnomaly();
  console.log("data inserted");
};

seedDB().then(() => {
  mongoose.connection.close();
});
